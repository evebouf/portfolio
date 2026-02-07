import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import BackButton from '../components/BackButton';
import { SimplexNoise, Dithering, Warp, DotOrbit, GrainGradient, PerlinNoise } from '@paper-design/shaders-react';

const PaperEffects: React.FC = () => {
  const [noiseScale, setNoiseScale] = useState(0.29);
  const [ditherSize, setDitherSize] = useState(2);
  const [warpSwirl, setWarpSwirl] = useState(0.8);
  const [dotSpreading, setDotSpreading] = useState(1);
  const [grainNoise, setGrainNoise] = useState(0.25);
  const [perlinSoftness, setPerlinSoftness] = useState(0.1);

  useEffect(() => {
    // Load Geist Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Geist Mono', monospace",
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        padding: '180px 40px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: '24px' }}>
        <BackButton />
      </div>

      {/* Title */}
      <p style={{ marginBottom: '12px', textAlign: 'center' }}>Paper Effects</p>
      <p className="text-secondary" style={{ marginBottom: '48px', textAlign: 'center' }}>
        Me messing around with the new{' '}
        <a href="https://shaders.paper.design/" target="_blank" rel="noopener noreferrer" className="text-link">
          Paper Effects
        </a>
      </p>

      {/* 3x2 Grid */}
      <div className="responsive-grid">
        {/* Shader 1: Simplex Noise */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <SimplexNoise
              width="100%"
              height="100%"
              colors={["#74342B", "#EDDBC2", "#391212", "#8FA4D1"]}
              stepsPerColor={2}
              softness={0}
              speed={0.5}
              scale={noiseScale}
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Simplex Noise
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>scale</span>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.01"
              value={noiseScale}
              onChange={(e) => setNoiseScale(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Shader 2: Dithering */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <Dithering
              width="100%"
              height="100%"
              colorBack="#391212"
              colorFront="#EDDBC2"
              shape="sphere"
              type="4x4"
              size={ditherSize}
              speed={1}
              scale={0.6}
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Dithering
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>size</span>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={ditherSize}
              onChange={(e) => setDitherSize(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Shader 3: Warp */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <Warp
              width="100%"
              height="100%"
              colors={["#74342B", "#EDDBC2", "#391212", "#8FA4D1"]}
              proportion={0.45}
              softness={1}
              distortion={0.25}
              swirl={warpSwirl}
              swirlIterations={10}
              shape="checks"
              shapeScale={0.1}
              speed={1}
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Warp
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>swirl</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={warpSwirl}
              onChange={(e) => setWarpSwirl(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Shader 4: Dot Orbit */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <DotOrbit
              width="100%"
              height="100%"
              colors={["#74342B", "#EDDBC2", "#391212", "#8FA4D1"]}
              colorBack="#391212"
              stepsPerColor={4}
              size={1}
              sizeRange={0}
              spreading={dotSpreading}
              speed={1.5}
              scale={1}
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Dot Orbit
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>spreading</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={dotSpreading}
              onChange={(e) => setDotSpreading(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Shader 5: Grain Gradient */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <GrainGradient
              width="100%"
              height="100%"
              colors={["#74342B", "#EDDBC2", "#391212", "#8FA4D1"]}
              colorBack="#391212"
              softness={0.5}
              intensity={0.5}
              noise={grainNoise}
              shape="corners"
              speed={1}
              scale={1}
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Grain Gradient
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>noise</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={grainNoise}
              onChange={(e) => setGrainNoise(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Shader 6: Perlin Noise */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <PerlinNoise
              width="100%"
              height="100%"
              colorBack="#391212"
              colorFront="#EDDBC2"
              proportion={0.35}
              softness={perlinSoftness}
              octaveCount={1}
              persistence={1}
              lacunarity={1.5}
              speed={0.5}
              scale={1}
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Perlin Noise
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>softness</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={perlinSoftness}
              onChange={(e) => setPerlinSoftness(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperEffects;
