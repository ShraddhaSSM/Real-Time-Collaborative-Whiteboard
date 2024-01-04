import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      canvasRef.current = new fabric.Canvas('whiteboard-canvas', {
        isDrawingMode: true,
        width: 800,
        height: 600,
      });
    }
  }, []);

  return (
    <div className="mt-3">
      <canvas id="whiteboard-canvas" />
    </div>
  );
};