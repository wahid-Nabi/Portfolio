'use client';
import React, { useEffect, useRef, useState } from 'react';

export function HelixChronoMatrix({ headline = "STRATA", className = "" }) {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [topology, setTopology] = useState('helix');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let animationId;
    let time = 0;

    const animate = () => {
      if (!isRunning) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      time += 0.01;

      const width = rect.width;
      const height = rect.height;

      // Clear with semi-transparent overlay
      ctx.fillStyle = 'rgba(9, 10, 15, 0.1)';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.25;

      // Draw animated helix rings with cyan color
      for (let ring = 0; ring < 15; ring++) {
        const ringProgress = ring / 15;
        const radius = maxRadius * (0.4 + ringProgress * 0.6);
        const yOffset = (ringProgress - 0.5) * height * 0.35;

        ctx.beginPath();
        const alpha = 0.2 + ringProgress * 0.4;
        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`; // Cyan color
        ctx.lineWidth = 1.5;

        for (let i = 0; i <= 360; i += 6) {
          const angle = (i * Math.PI) / 180 + time + ring * 0.15;
          const wave = topology === 'helix'
            ? Math.sin(angle * 2 + time) * 25
            : Math.sin(angle * 5 + time * 1.5) * 12;

          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + yOffset + Math.sin(angle) * wave;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // Draw moving particles with glow
      for (let p = 0; p < 25; p++) {
        const ringIndex = Math.floor((p / 25) * 15);
        const ringProgress = ringIndex / 15;
        const radius = maxRadius * (0.4 + ringProgress * 0.6);
        const yOffset = (ringProgress - 0.5) * height * 0.35;

        const particleAngle = (p / 25) * Math.PI * 2 + time * 0.3 + p * 0.5;
        const wave = topology === 'helix'
          ? Math.sin(particleAngle * 2 + time) * 25
          : Math.sin(particleAngle * 5 + time * 1.5) * 12;

        const x = centerX + Math.cos(particleAngle) * radius;
        const y = centerY + yOffset + Math.sin(particleAngle) * wave;

        // Particle glow
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.3)';
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#22d3ee';
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect();
      canvas.width = newRect.width * dpr;
      canvas.height = newRect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isRunning, topology]);

  return (
    <div className={`helix-matrix ${className}`} style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: 0,
      background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)',
      overflow: 'hidden'
    }}>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
      />

      {/* Controls - Top Left */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '24px',
        zIndex: 20,
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
        {/* Topology Buttons */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          border: '1px solid rgba(71, 85, 105, 0.5)',
          padding: '4px',
          display: 'flex',
          gap: '4px'
        }}>
          <button style={{
            padding: '6px 12px',
            background: topology === 'helix' ? '#06b6d4' : 'rgba(30, 41, 59, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
          onClick={() => setTopology('helix')}
          >
            HELIX
          </button>
          <button style={{
            padding: '6px 12px',
            background: topology === 'neural' ? 'rgba(34, 211, 238, 0.2)' : 'rgba(30, 41, 59, 0.5)',
            color: '#cbd5e1',
            border: '1px solid rgba(71, 85, 105, 0.3)',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onClick={() => setTopology('neural')}
          >
            NEURAL
          </button>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            background: 'rgba(30, 41, 59, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '8px',
            padding: '8px 16px',
            color: '#cbd5e1',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.color = '#06b6d4'}
          onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
        >
          {isRunning ? '⏸ PAUSE' : '▶ PLAY'}
        </button>
      </div>

      {/* Headline - Center */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <h1 style={{
          fontSize: '120px',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.8)',
          letterSpacing: '-2px',
          margin: 0,
          textShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          fontFamily: 'Arial, sans-serif'
        }}>
          {headline}
        </h1>
      </div>
    </div>
  );
}

export default HelixChronoMatrix;
