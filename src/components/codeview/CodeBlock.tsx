// CodeBlock.tsx
import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from 'react-spring';

interface CodeBlockProps {
  position: {
    x: number;
    y: number;
  };
  content: string;
  movementMode: 'canvas' | 'node';
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ position, content, movementMode }) => {
  // Use spring to manage the position of the code block
  const [{ x, y }, api] = useSpring(() => ({
    x: position.x,
    y: position.y,
    config: { tension: 300, friction: 30 },
  }));

  // Maintain a reference to the current offset position
  const [initialPosition, setInitialPosition] = useState({ x: position.x, y: position.y });

  // Gesture binding for node movement
  const bindNode = useGesture({
    onDrag: ({ offset: [mx, my], memo }) => {
      if (movementMode === 'node') {
        // Initialize the memo with the initial position on drag start
        if (!memo) {
          memo = { initialX: initialPosition.x, initialY: initialPosition.y };
        }
        api.start({ x: memo.initialX + mx, y: memo.initialY + my });
        return memo; // Return memo to keep track of initial positions
      }
    },
    onDragEnd: () => {
      // Update the initial position when drag ends
      setInitialPosition({ x: x.get(), y: y.get() });
    },
  });

  return (
    <animated.div
      {...bindNode()}
      style={{
        x,
        y,
        width: '300px',
        padding: '16px',
        backgroundColor: '#2D3748',
        color: '#E2E8F0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        position: 'absolute',
      }}
    >
      <p>{content}</p>
    </animated.div>
  );
};
