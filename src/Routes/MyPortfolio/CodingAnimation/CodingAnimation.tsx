// AnimatedLines.js
import React, { useEffect, useRef, useState } from "react";

const CodingAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [width, setWidth] = useState(100); // Initial width of the rectangle
  const height = 50; // Fixed height of the rectangle
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is running
  const [direction, setDirection] = useState<"increase" | "decrease">(
    "increase"
  ); // Animation direction

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Draw the rectangle on the canvas
    const drawRectangle = (width: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "lightblue";
      context.fillRect(10, 10, width, height);
    };

    const intervalId = setInterval(() => {
      setWidth((prevWidth) => {
        let newWidth = prevWidth;
        if (direction === "increase") {
          newWidth = prevWidth + 20;
          if (newWidth >= 200) setDirection("decrease");
        } else {
          newWidth = prevWidth - 20;
          if (newWidth <= 50) setDirection("increase");
        }
        drawRectangle(newWidth); // Update the canvas immediately
        return newWidth;
      });
    }, 1000); // Run every 1 second

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [direction, isAnimating]); // Dependencies to re-run when animation state changes

  // Start and stop animation
  const toggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={300}
        height={100}
        style={{ border: "1px solid black" }}
      />
      <div>
        <button onClick={toggleAnimation}>
          {isAnimating ? "Stop Animation" : "Start Animation"}
        </button>
      </div>
    </div>
  );
};

export default CodingAnimation;
