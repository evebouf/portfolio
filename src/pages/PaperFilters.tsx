import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import BackButton from '../components/BackButton';
import { PaperTexture, FlutedGlass, Water, ImageDithering, HalftoneDots, HalftoneCmyk } from '@paper-design/shaders-react';

const PaperFilters: React.FC = () => {
  const [paperFolds, setPaperFolds] = useState(0.65);
  const [glassDistortion, setGlassDistortion] = useState(0.5);
  const [waterWaves, setWaterWaves] = useState(0.3);
  const [ditherSize, setDitherSize] = useState(2);
  const [halftoneSize, setHalftoneSize] = useState(0.5);
  const [cmykSize, setCmykSize] = useState(0.2);

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
      <p style={{ marginBottom: '12px', textAlign: 'center' }}>Paper Filters</p>
      <p className="text-secondary" style={{ marginBottom: '48px', textAlign: 'center' }}>
        Me messing around with the new{' '}
        <a href="https://shaders.paper.design/" target="_blank" rel="noopener noreferrer" className="text-link">
          Paper Filters
        </a>
      </p>

      {/* 3x2 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '24px',
        }}
      >
        {/* Filter 1: Paper Texture */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <PaperTexture
              width="100%"
              height="100%"
              image="/5a541afb-a76e-4a84-b88b-8f3c7b2e2a09.png"
              colorBack="#ffffff"
              colorFront="#9fadbc"
              contrast={0.3}
              roughness={0.4}
              fiber={0.3}
              fiberSize={0.2}
              crumples={0.3}
              crumpleSize={0.35}
              folds={paperFolds}
              foldCount={5}
              drops={0.2}
              fade={0}
              seed={5.8}
              scale={0.6}
              fit="cover"
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
              Paper Texture
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>folds</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={paperFolds}
              onChange={(e) => setPaperFolds(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Filter 2: Fluted Glass */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <FlutedGlass
              width="100%"
              height="100%"
              image="/5a541afb-a76e-4a84-b88b-8f3c7b2e2a09.png"
              colorBack="#00000000"
              colorShadow="#000000"
              colorHighlight="#ffffff"
              size={0.5}
              shadows={0.25}
              highlights={0.1}
              shape="lines"
              angle={0}
              distortionShape="prism"
              distortion={glassDistortion}
              shift={0}
              stretch={0}
              blur={0}
              edges={0.25}
              margin={0}
              grainMixer={0}
              grainOverlay={0}
              fit="cover"
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
              Fluted Glass
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>distortion</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={glassDistortion}
              onChange={(e) => setGlassDistortion(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Filter 3: Water */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <Water
              width="100%"
              height="100%"
              image="/5a541afb-a76e-4a84-b88b-8f3c7b2e2a09.png"
              colorBack="#8f8f8f"
              colorHighlight="#ffffff"
              highlights={0.07}
              layering={0.5}
              edges={0.8}
              waves={waterWaves}
              caustic={0.1}
              size={1}
              speed={1}
              scale={0.8}
              fit="cover"
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
              Water
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>waves</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={waterWaves}
              onChange={(e) => setWaterWaves(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Filter 4: Image Dithering */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <ImageDithering
              width="100%"
              height="100%"
              image="/5a541afb-a76e-4a84-b88b-8f3c7b2e2a09.png"
              colorBack="#391212"
              colorFront="#EDDBC2"
              colorHighlight="#74342B"
              originalColors={false}
              inverted={false}
              type="8x8"
              size={ditherSize}
              colorSteps={2}
              fit="cover"
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
              Image Dithering
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>size</span>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={ditherSize}
              onChange={(e) => setDitherSize(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Filter 5: Halftone Dots */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <HalftoneDots
              width="100%"
              height="100%"
              image="/5a541afb-a76e-4a84-b88b-8f3c7b2e2a09.png"
              colorBack="#EDDBC2"
              colorFront="#391212"
              originalColors={false}
              type="gooey"
              grid="hex"
              inverted={false}
              size={halftoneSize}
              radius={1.25}
              contrast={0.4}
              grainMixer={0.2}
              grainOverlay={0.2}
              grainSize={0.5}
              fit="cover"
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Halftone Dots
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>size</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={halftoneSize}
              onChange={(e) => setHalftoneSize(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>

        {/* Filter 6: Halftone CMYK */}
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', aspectRatio: '1' }}>
            <HalftoneCmyk
              width="100%"
              height="100%"
              image="/5a541afb-a76e-4a84-b88b-8f3c7b2e2a09.png"
              colorBack="#fbfaf4"
              colorC="#00b3ff"
              colorM="#fc4f9d"
              colorY="#ffd900"
              colorK="#231f20"
              size={cmykSize}
              gridNoise={0.2}
              type="ink"
              softness={1}
              contrast={1}
              floodC={0.15}
              floodM={0}
              floodY={0}
              floodK={0}
              gainC={0.3}
              gainM={0}
              gainY={0.2}
              gainK={0}
              grainMixer={0}
              grainOverlay={0}
              grainSize={0.5}
              fit="cover"
            />
            <p 
              style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                fontSize: '10px', 
                margin: 0,
                color: 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Halftone CMYK
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>size</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={cmykSize}
              onChange={(e) => setCmykSize(parseFloat(e.target.value))}
              className="shader-slider"
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperFilters;
