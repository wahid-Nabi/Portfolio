export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' ||
      !name.trim() || !message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      name.length > 200 || email.length > 254 || message.length > 10000) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message.' })
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    console.error('Contact email is not configured')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: ['wahidnabi785@gmail.com'],
        reply_to: email.trim(),
        subject: `Portfolio contact from ${name.trim().replace(/[\r\n]/g, ' ')}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      }),
    })
    if (!response.ok) {
      console.error('Email provider rejected contact message:', response.status)
      return res.status(502).json({ error: 'Could not send message.' })
    }
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact email failed:', error)
    return res.status(502).json({ error: 'Could not send message.' })
  }
}
