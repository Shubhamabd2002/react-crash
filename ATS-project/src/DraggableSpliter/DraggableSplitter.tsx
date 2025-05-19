import React, { useState, useRef } from "react";                                                        

export const DraggleSplitter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leftChild, rightChild] = React.Children.toArray(children);
  const [leftWidth, setLeftWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.clientX;

    const currentLeftWidth = leftRef.current?.getBoundingClientRect().width ?? 400;

    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startX;
      setLeftWidth(currentLeftWidth + delta);
    };

    const stopDragging = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
  };

  return (
    <div ref={containerRef} className="flex w-full h-screen">
      {/* Left panel */}
      <div
        ref={leftRef}
        style={leftWidth !== null ? { width: leftWidth } : undefined}
        className={`border-r p-4 overflow-auto ${leftWidth === null ? "w-1/2" : ""}`}
      >
        {leftChild}
      </div>

      {/* Divider */}
      <div
        className="w-1 bg-gray-300 cursor-col-resize hover:bg-gray-500"
        onMouseDown={startDragging}
      />

      {/* Right panel */}
      <div className="flex-1 p-4 overflow-auto">{rightChild}</div>
    </div>
  );
};
