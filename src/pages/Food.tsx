import React, { useState, useRef, useCallback } from 'react';

const puns: Record<string, string[]> = {
  Apples: ["You're the apple of my eye!", "How 'bout them apples?", "Apple-solutely delicious!"],
  Bananas: ["This is bananas!", "Going bananas over here!", "You're one in a bunch!"],
  Oranges: ["Orange you glad?", "Peel the excitement!", "Squeeze the day!"],
  Grapes: ["Grape expectations!", "You heard it through the grapevine!", "Grape choice!"],
  Strawberries: ["Berry good pick!", "That's berry sweet!", "Straw-some choice!"],
  Blueberries: ["Feeling blue-tiful!", "Berry nice!", "Blue-ming delicious!"],
  Broccoli: ["Don't be a broc-star!", "Broc and roll!", "Tree-mendous pick!"],
  Carrots: ["24 carrot gold!", "Carrot all about you!", "Orange you healthy!"],
  Lettuce: ["Lettuce eat!", "Lettuce celebrate!", "Romaine calm!"],
  Tomatoes: ["You say tomato!", "Ketchup later!", "Red-y to go!"],
  Potato: ["You're a hot potato!", "Spud-tacular!", "Mash hit!"],
  'Green Beans': ["Full of beans!", "Bean there, done that!", "Cool beans!"],
  Butternut: ["Squash goals!", "Nut-thing better!", "Gourd-geous!"],
  Steak: ["High steaks!", "Well done!", "Rare find!"],
  Salmon: ["Swimming upstream!", "Scale-ing up!", "Fin-tastic!"],
  Chicken: ["Winner winner!", "No fowl play!", "Egg-cellent protein!"],
  Eggs: ["Egg-straordinary!", "Crack-ing choice!", "You're egg-ceptional!"],
  Shrimp: ["Don't be shellfish!", "Shrimply the best!", "Shell yeah!"],
  Milk: ["No use crying!", "Cream of the crop!", "Udderly delicious!"],
  Cheese: ["It's gonna be a cheesy week!", "Say cheese!", "Gouda choice!"],
  Yogurt: ["Culture-d pick!", "Smooth move!", "Pro-biotic vibes!"],
  Butter: ["Butter believe it!", "On a roll!", "Smooth operator!"],
  Avocado: ["Avo great day!", "Holy guacamole!", "It's avo-control!"],
  'Olive Oil': ["Olive it!", "Oil be back!", "Extra virgin vibes!"],
  Almonds: ["Almond joy!", "Going nuts!", "That's nuts!"],
  'Canned Tuna': ["Tuna-round!", "Can do attitude!", "Hooked on health!"],
  'Ground Beef': ["What's the beef?", "Ground-breaking!", "Beefy choice!"],
  'Rice & Beans': ["Nice rice baby!", "Spill the beans!", "Rice to meet you!"],
  Walnuts: ["Totally walnuts!", "That's a tough nut!", "Nut-orious pick!"],
  Peanuts: ["That's peanuts!", "Going nuts!", "Shell we dance?"],
  'Frozen Peas': ["Give peas a chance!", "Peas and love!", "Whirled peas!"],
  Bread: ["Best thing since sliced!", "Let's get this bread!", "You knead this!"],
  Oats: ["Feeling your oats!", "Oat-standing!", "Sow your oats!"],
};

function getRandomPun(itemName: string): string {
  const itemPuns = puns[itemName];
  if (!itemPuns || itemPuns.length === 0) return 'Nice pick!';
  return itemPuns[Math.floor(Math.random() * itemPuns.length)];
}

const foodItems = [
  { name: 'Apples', file: 'apples.png', category: 'fruits' },
  { name: 'Bananas', file: 'bananas.png', category: 'fruits', size: 105 },
  { name: 'Oranges', file: 'oranges.png', category: 'fruits' },
  { name: 'Grapes', file: 'grapes.png', category: 'fruits' },
  { name: 'Strawberries', file: 'strawberry.png', category: 'fruits', cluster: 2 },
  { name: 'Blueberries', file: 'blueberry.png', category: 'fruits', cluster: 3 },
  { name: 'Broccoli', file: 'broccoli.png', category: 'vegetables' },
  { name: 'Carrots', file: 'carrots.png', category: 'vegetables' },
  { name: 'Lettuce', file: 'lettuce.png', category: 'vegetables' },
  { name: 'Tomatoes', file: 'tomatoes.png', category: 'vegetables' },
  { name: 'Potato', file: 'potato.png', category: 'vegetables' },
  { name: 'Green Beans', file: 'green-beans.png', category: 'vegetables' },
  { name: 'Butternut', file: 'butternut.png', category: 'vegetables' },
  { name: 'Steak', file: 'steak.png', category: 'protein' },
  { name: 'Salmon', file: 'salmon.png', category: 'protein' },
  { name: 'Chicken', file: 'chicken.png', category: 'protein' },
  { name: 'Eggs', file: 'eggs.png', category: 'protein' },
  { name: 'Shrimp', file: 'shrimp.png', category: 'protein', cluster: 2 },
  { name: 'Milk', file: 'milk.png', category: 'dairy' },
  { name: 'Cheese', file: 'cheese.png', category: 'dairy' },
  { name: 'Yogurt', file: 'yogurt.png', category: 'dairy' },
  { name: 'Butter', file: 'butter.png', category: 'dairy' },
  { name: 'Avocado', file: 'avocado.png', category: 'fats' },
  { name: 'Olive Oil', file: 'olive-oil.png', category: 'fats' },
  { name: 'Almonds', file: 'almond.png', category: 'fats', cluster: 3 },
  { name: 'Canned Tuna', file: 'canned-tuna.png', category: 'protein' },
  { name: 'Ground Beef', file: 'ground-beef.png', category: 'protein' },
  { name: 'Rice & Beans', file: 'bowl-rice-beans.png', category: 'grains' },
  { name: 'Walnuts', file: 'walnut-kernel.png', category: 'fats', cluster: 2 },
  { name: 'Peanuts', file: 'peanuts.png', category: 'fats' },
  { name: 'Frozen Peas', file: 'frozen-peas.png', category: 'vegetables' },
  { name: 'Bread', file: 'bread.png', category: 'grains' },
  { name: 'Oats', file: 'bowl-oats.png', category: 'grains' },
];

interface ClusterPiece {
  dx: number;
  dy: number;
  rotation: number;
  scale: number;
}

interface FoodItem {
  id: string;
  name: string;
  file: string;
  category: string;
  homeX: number;
  homeY: number;
  baseRotation: number;
  scale: number;
  cluster: ClusterPiece[];
  customSize?: number;
}

interface BasketItem {
  id: string;
  file: string;
  offsetX: number;
  offsetY: number;
  rotation: number;
  scale: number;
  pun: string;
  punVisible: boolean;
}

function generatePositions(count: number): { x: number; y: number }[] {
  // Place items in a structured grid around the basket.
  // The basket sits at roughly 35%-65% x and 38%-62% y.
  // We fill slots in the top strip, bottom strip, left column, and right column.

  const slots: { x: number; y: number }[] = [];

  // Top rows: 2 rows of items above the basket
  const topCols = 7;
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < topCols; c++) {
      slots.push({
        x: 8 + (c / (topCols - 1)) * 84,
        y: 6 + r * 12,
      });
    }
  }

  // Bottom rows: 2 rows below the basket
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < topCols; c++) {
      slots.push({
        x: 8 + (c / (topCols - 1)) * 84,
        y: 76 + r * 12,
      });
    }
  }

  // Left column: items along the left side, in the middle vertical zone
  for (let r = 0; r < 4; r++) {
    slots.push({
      x: 8,
      y: 30 + r * 12,
    });
  }

  // Right column: items along the right side
  for (let r = 0; r < 4; r++) {
    slots.push({
      x: 92,
      y: 30 + r * 12,
    });
  }

  // Add a small jitter to each slot for a natural feel
  const jittered = slots.map((s) => ({
    x: s.x + (Math.random() - 0.5) * 3,
    y: s.y + (Math.random() - 0.5) * 2,
  }));

  // Return only as many as we need
  return jittered.slice(0, count);
}

const tiltKeyframes = `
@keyframes tilt {
  0%, 100% { transform: translate(-50%, -50%) rotate(var(--base-rot)) scale(var(--base-scale)); }
  25% { transform: translate(-50%, -50%) rotate(calc(var(--base-rot) + 8deg)) scale(var(--base-scale)); }
  75% { transform: translate(-50%, -50%) rotate(calc(var(--base-rot) - 8deg)) scale(var(--base-scale)); }
}
@keyframes land {
  0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
  60% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
@keyframes bubble-in {
  0% { transform: translateX(-50%) scale(0); opacity: 0; }
  60% { transform: translateX(-50%) scale(1.08); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); opacity: 1; }
}
@keyframes bubble-out {
  0% { transform: translateX(-50%) scale(1); opacity: 1; }
  100% { transform: translateX(-50%) scale(0.8); opacity: 0; }
}
@keyframes pop-out {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
  100% { transform: translate(-50%, -80%) scale(0.3); opacity: 0; }
}
`;

function playDropSound() {
  const ctx = new AudioContext();
  const now = ctx.currentTime;

  // Warm woody knock — the main impact
  const knock = ctx.createOscillator();
  const knockGain = ctx.createGain();
  const knockFilter = ctx.createBiquadFilter();
  knock.type = 'triangle';
  knock.frequency.setValueAtTime(220, now);
  knock.frequency.exponentialRampToValueAtTime(80, now + 0.06);
  knockFilter.type = 'lowpass';
  knockFilter.frequency.setValueAtTime(800, now);
  knockFilter.frequency.exponentialRampToValueAtTime(200, now + 0.1);
  knockGain.gain.setValueAtTime(0, now);
  knockGain.gain.linearRampToValueAtTime(0.4, now + 0.003);
  knockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  knock.connect(knockFilter);
  knockFilter.connect(knockGain);
  knockGain.connect(ctx.destination);
  knock.start(now);
  knock.stop(now + 0.2);

  // Soft bounce — a tiny second tap
  const bounce = ctx.createOscillator();
  const bounceGain = ctx.createGain();
  bounce.type = 'sine';
  bounce.frequency.setValueAtTime(180, now + 0.08);
  bounce.frequency.exponentialRampToValueAtTime(90, now + 0.13);
  bounceGain.gain.setValueAtTime(0, now);
  bounceGain.gain.setValueAtTime(0, now + 0.07);
  bounceGain.gain.linearRampToValueAtTime(0.12, now + 0.08);
  bounceGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
  bounce.connect(bounceGain);
  bounceGain.connect(ctx.destination);
  bounce.start(now + 0.07);
  bounce.stop(now + 0.18);

  // Noise burst for texture — like plastic rustling
  const bufferSize = ctx.sampleRate * 0.04;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.3;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const noiseGain = ctx.createGain();
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'bandpass';
  noiseFilter.frequency.setValueAtTime(2000, now);
  noiseFilter.Q.setValueAtTime(1, now);
  noiseGain.gain.setValueAtTime(0.08, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  noise.start(now);

  setTimeout(() => ctx.close(), 500);
}

function playRemoveSound() {
  const ctx = new AudioContext();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(280, now);
  osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.2, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.2);

  setTimeout(() => ctx.close(), 400);
}

const BASKET_W = 420;
const BASKET_H = 295;
const BASKET_INTERIOR = { x: 60, y: 40, w: 300, h: 215 };

function randomBasketPosition(): { offsetX: number; offsetY: number; rotation: number; scale: number } {
  return {
    offsetX: BASKET_INTERIOR.x + Math.random() * BASKET_INTERIOR.w,
    offsetY: BASKET_INTERIOR.y + Math.random() * BASKET_INTERIOR.h,
    rotation: (Math.random() - 0.5) * 30,
    scale: 0.55 + Math.random() * 0.15,
  };
}

type Mode = 'grocery' | 'picnic';

const Food: React.FC = () => {
  const [mode, setMode] = useState<Mode>('grocery');
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [basketHighlight, setBasketHighlight] = useState(false);
  const [droppingItem, setDroppingItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredBasketItem, setHoveredBasketItem] = useState<string | null>(null);
  const [removingItem, setRemovingItem] = useState<string | null>(null);
  const basketRef = useRef<HTMLImageElement>(null);

  const basketIds = basketItems.map((b) => b.id);

  const [items, setItems] = useState<FoodItem[]>(() => {
    const positions = generatePositions(foodItems.length);
    return foodItems.map((item, i) => {
      const count = (item as typeof item & { cluster?: number }).cluster || 1;
      const clusterPieces: ClusterPiece[] = [];
      for (let c = 0; c < count; c++) {
        if (c === 0) {
          clusterPieces.push({ dx: 0, dy: 0, rotation: 0, scale: 1 });
        } else {
          const angle = ((c - 1) / (count - 1)) * Math.PI * 2 + Math.random() * 0.5;
          const dist = 10 + Math.random() * 5;
          clusterPieces.push({
            dx: Math.cos(angle) * dist,
            dy: Math.sin(angle) * dist * 0.6,
            rotation: (Math.random() - 0.5) * 20,
            scale: 0.82 + Math.random() * 0.15,
          });
        }
      }
      return {
        id: item.name,
        name: item.name,
        file: item.file,
        category: item.category,
        homeX: positions[i].x,
        homeY: positions[i].y,
        baseRotation: (Math.random() - 0.5) * 10,
        scale: 0.85 + Math.random() * 0.3,
        cluster: clusterPieces,
        customSize: (item as typeof item & { size?: number }).size,
      };
    });
  });

  const isOverBasket = useCallback(
    (x: number, y: number) => {
      if (!basketRef.current) return false;
      const rect = basketRef.current.getBoundingClientRect();
      return (
        x >= rect.left - 40 &&
        x <= rect.right + 40 &&
        y >= rect.top - 40 &&
        y <= rect.bottom + 40
      );
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, itemId: string) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
      setDragPos({ x: e.clientX, y: e.clientY });
      setDragging(itemId);
      setHoveredItem(null);
      target.setPointerCapture(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      setDragPos({ x: e.clientX, y: e.clientY });
      setBasketHighlight(isOverBasket(e.clientX, e.clientY));
    },
    [dragging, isOverBasket]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      if (isOverBasket(e.clientX, e.clientY)) {
        const droppedItem = items.find((it) => it.id === dragging);
        if (droppedItem) {
          playDropSound();
          setDroppingItem(dragging);
          const pos = randomBasketPosition();
          const pun = getRandomPun(droppedItem.name);
          const itemId = droppedItem.id;
          setTimeout(() => {
            setBasketItems((prev) => [
              ...prev,
              { id: itemId, file: droppedItem.file, ...pos, pun, punVisible: true },
            ]);
            setDroppingItem(null);
            setTimeout(() => {
              setBasketItems((prev) =>
                prev.map((b) => (b.id === itemId && b.punVisible ? { ...b, punVisible: false } : b))
              );
            }, 2500);
          }, 200);
        }
      } else {
        const newX = (e.clientX / window.innerWidth) * 100;
        const newY = (e.clientY / window.innerHeight) * 100;
        setItems((prev) =>
          prev.map((it) =>
            it.id === dragging ? { ...it, homeX: newX, homeY: newY } : it
          )
        );
      }
      setDragging(null);
      setBasketHighlight(false);
    },
    [dragging, isOverBasket, items]
  );

  const isPicnic = mode === 'picnic';

  const ginghamBg = `
    repeating-conic-gradient(
      rgba(196, 50, 50, 0.25) 0% 25%,
      transparent 0% 50%
    ) 0 0 / 40px 40px,
    repeating-conic-gradient(
      rgba(196, 50, 50, 0.25) 0% 25%,
      transparent 0% 50%
    ) 20px 20px / 40px 40px,
    #f5ebe0
  `;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: isPicnic ? '#f5ebe0' : '#ffffff',
        background: isPicnic ? ginghamBg : '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        transition: 'background-color 0.4s ease',
      }}
    >
      <style>{tiltKeyframes}</style>

      {/* Mode toggle */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          display: 'flex',
          gap: 0,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          pointerEvents: 'auto',
        }}
      >
        <button
          onClick={() => setMode('grocery')}
          style={{
            padding: '8px 20px',
            fontSize: '13px',
            fontFamily: "'Geist Mono', monospace",
            border: 'none',
            cursor: 'pointer',
            backgroundColor: !isPicnic ? '#1a1a1a' : '#fff',
            color: !isPicnic ? '#fff' : '#666',
            transition: 'all 0.2s ease',
          }}
        >
          Grocery
        </button>
        <button
          onClick={() => setMode('picnic')}
          style={{
            padding: '8px 20px',
            fontSize: '13px',
            fontFamily: "'Geist Mono', monospace",
            border: 'none',
            cursor: 'pointer',
            backgroundColor: isPicnic ? '#1a1a1a' : '#fff',
            color: isPicnic ? '#fff' : '#666',
            transition: 'all 0.2s ease',
          }}
        >
          Picnic
        </button>
      </div>

      {/* Basket at center */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div style={{ position: 'relative', width: BASKET_W, height: BASKET_H }}>
          <img
            ref={basketRef}
            src="/food-items/basket.jpg"
            alt={isPicnic ? 'Picnic basket' : 'Grocery basket'}
            draggable={false}
            style={{
              width: BASKET_W,
              height: BASKET_H,
              objectFit: 'contain',
              filter: isPicnic
                ? basketHighlight
                  ? 'sepia(0.8) saturate(1.2) hue-rotate(-10deg) brightness(0.9) drop-shadow(0 0 40px rgba(180, 100, 40, 0.4))'
                  : 'sepia(0.8) saturate(1.2) hue-rotate(-10deg) brightness(0.9) drop-shadow(0 8px 24px rgba(0,0,0,0.12))'
                : basketHighlight
                  ? 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.35))'
                  : 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))',
              transition: 'filter 0.3s ease',
              pointerEvents: 'auto',
            }}
          />

          {/* Items piled inside the basket */}
          {basketItems.map((bItem, i) => {
            const isHoveredInBasket = hoveredBasketItem === bItem.id;
            const isRemoving = removingItem === bItem.id;

            return (
              <div
                key={bItem.id}
                style={{
                  position: 'absolute',
                  left: bItem.offsetX,
                  top: bItem.offsetY,
                  width: 70,
                  height: 70,
                  transform: `translate(-50%, -50%) rotate(${bItem.rotation}deg) scale(${bItem.scale})`,
                  zIndex: isHoveredInBasket ? 100 : i + 1,
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  filter: isHoveredInBasket
                    ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))'
                    : 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
                  animation: isRemoving
                    ? 'pop-out 0.25s ease-in forwards'
                    : 'land 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both',
                  transition: 'filter 0.15s ease',
                }}
                onPointerEnter={() => setHoveredBasketItem(bItem.id)}
                onPointerLeave={() => setHoveredBasketItem(null)}
                onClick={() => {
                  playRemoveSound();
                  setRemovingItem(bItem.id);
                  setHoveredBasketItem(null);
                  setTimeout(() => {
                    setBasketItems((prev) => prev.filter((b) => b.id !== bItem.id));
                    setRemovingItem(null);
                  }, 250);
                }}
              >
                <img
                  src={`/food-items/${bItem.file}`}
                  alt={bItem.id}
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
                {(bItem.punVisible || (!bItem.punVisible && bItem.pun)) && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: '100%',
                      transform: 'translateX(-50%) scale(1)',
                      marginBottom: 8,
                      backgroundColor: '#fff',
                      borderRadius: 12,
                      padding: '6px 12px',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
                      whiteSpace: 'nowrap',
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: '11px',
                      color: '#333',
                      pointerEvents: 'none',
                      zIndex: 200,
                      animation: bItem.punVisible
                        ? 'bubble-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both'
                        : 'bubble-out 0.3s ease forwards',
                    }}
                  >
                    {bItem.pun}
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '100%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #fff',
                      }}
                    />
                  </div>
                )}
                {isHoveredInBasket && !isRemoving && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      backgroundColor: '#e53935',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ display: 'block' }}>
                      <line x1="5.5" y1="5.5" x2="12.5" y2="12.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                      <line x1="12.5" y1="5.5" x2="5.5" y2="12.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <span
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: '13px',
            color: '#999',
            letterSpacing: '0.02em',
            opacity: basketItems.length > 0 ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          {basketItems.length || 0} item{basketItems.length !== 1 ? 's' : ''} in {isPicnic ? 'picnic basket' : 'basket'}
        </span>
      </div>

      {/* Food items on the shelf */}
      {items.map((item) => {
        const inBasket = basketIds.includes(item.id);
        const isBeingDragged = dragging === item.id;
        const isDropping = droppingItem === item.id;
        const isHovered = hoveredItem === item.id && !isBeingDragged;

        if (inBasket && !isDropping) return null;

        const cssVars = {
          '--base-rot': `${item.baseRotation}deg`,
          '--base-scale': `${item.scale}`,
        } as React.CSSProperties;

        const style: React.CSSProperties = isBeingDragged
          ? {
              position: 'fixed',
              left: dragPos.x - dragOffset.x,
              top: dragPos.y - dragOffset.y,
              transform: 'translate(-50%, -50%) scale(1.15)',
              zIndex: 1000,
              cursor: 'grabbing',
              transition: 'none',
              filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
              animation: 'none',
            }
          : isDropping
            ? {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(0.2)',
                opacity: 0,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 999,
                animation: 'none',
              }
            : {
                position: 'absolute',
                left: `${item.homeX}%`,
                top: `${item.homeY}%`,
                transform: `translate(-50%, -50%) rotate(${item.baseRotation}deg) scale(${item.scale})`,
                cursor: 'grab',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.2s ease',
                animation: isHovered ? 'tilt 0.6s ease-in-out infinite' : 'none',
              };

        const baseSize = item.customSize || 80;
        const itemSize = item.cluster.length > 1 ? 120 : baseSize;

        return (
          <div
            key={item.id}
            style={{
              width: itemSize,
              height: itemSize,
              ...cssVars,
              ...style,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPointerEnter={() => {
              if (!dragging) setHoveredItem(item.id);
            }}
            onPointerLeave={() => {
              setHoveredItem(null);
            }}
            onPointerDown={(e) => handlePointerDown(e, item.id)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <div style={{ position: 'relative', width: 80, height: 80 }}>
              {item.cluster.map((piece, pi) => (
                <img
                  key={pi}
                  src={`/food-items/${item.file}`}
                  alt={item.name}
                  draggable={false}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${piece.dx}px)`,
                    top: `calc(50% + ${piece.dy}px)`,
                    width: item.cluster.length > 1 ? '52px' : `${baseSize}px`,
                    height: item.cluster.length > 1 ? '52px' : `${baseSize}px`,
                    objectFit: 'contain',
                    transform: `translate(-50%, -50%) rotate(${piece.rotation}deg) scale(${piece.scale})`,
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
