// CanvasContainer.tsx
import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from 'react-spring';
import { CodeBlock } from './CodeBlock';

export const CanvasContainer: React.FC = () => {
  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { tension: 300, friction: 30 },
  }));

  const [movementMode, setMovementMode] = useState<'canvas' | 'node'>('canvas');

  // Gesture binding for canvas movement
  const bindCanvas = useGesture({
    onDrag: ({ offset: [dx, dy] }) => movementMode === 'canvas' && api.start({ x: dx, y: dy }),
    onPinch: ({ offset: [d] }) => movementMode === 'canvas' && api.start({ scale: d }),
  });

  // Toggle between canvas movement and node movement
  const toggleMovementMode = () => {
    setMovementMode((prev) => (prev === 'canvas' ? 'node' : 'canvas'));
  };

  return (
    <>
      <button
        onClick={toggleMovementMode}
        className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded z-20"
      >
        Toggle to {movementMode === 'canvas' ? 'Node Movement' : 'Canvas Movement'}
      </button>

      <animated.div
        {...bindCanvas()}
        style={{ x, y, scale }}
        className="w-full h-full bg-slate-900 p-6 overflow-hidden touch-none relative"
      >
        {/* Render Multiple CodeBlocks */}
        <CodeBlock position={{ x: 100, y: 100 }} content={`def greet(name):
    print(f"Hello, {name}!")

greet("Alice")`} movementMode={movementMode} />
        <CodeBlock position={{ x: 300, y: 200 }} content={`class Calculator:
    def add(self, a, b):
        return a + b

calc = Calculator()
print(calc.add(3, 4))`} movementMode={movementMode} />
        <CodeBlock position={{ x: 500, y: 400 }} content={`import math

def calculate_area(radius):
    return math.pi * radius ** 2

print(calculate_area(5))`} movementMode={movementMode} />
      </animated.div>
    </>
  );
};
