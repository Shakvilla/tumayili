"use client";

import type React from "react";

import { useEffect, useState } from "react";

export default function MapViewResizeHandler({
  mapRef,
}: {
  mapRef: React.RefObject<HTMLDivElement>;
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        // Clear existing canvas
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild);
        }

        // Create new canvas with updated dimensions
        const canvas = document.createElement("canvas");
        canvas.width = mapRef.current.clientWidth;
        canvas.height = mapRef.current.clientHeight;
        mapRef.current.appendChild(canvas);

        setDimensions({
          width: canvas.width,
          height: canvas.height,
        });

        // Redraw the map
        drawMap(canvas);
      }
    };

    // Draw the map on the canvas
    const drawMap = (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Draw a simple grid to represent a map
      ctx.fillStyle = "#f3f4f6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "#e5e7eb";
      ctx.lineWidth = 1;

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw some roads
      ctx.strokeStyle = "#d1d5db";
      ctx.lineWidth = 6;

      // Main roads
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      // Secondary roads
      ctx.strokeStyle = "#e5e7eb";
      ctx.lineWidth = 4;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 4);
      ctx.lineTo(canvas.width, canvas.height / 4);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, (canvas.height * 3) / 4);
      ctx.lineTo(canvas.width, (canvas.height * 3) / 4);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 4, 0);
      ctx.lineTo(canvas.width / 4, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo((canvas.width * 3) / 4, 0);
      ctx.lineTo((canvas.width * 3) / 4, canvas.height);
      ctx.stroke();

      // Draw some craft districts
      const drawDistrict = (
        x: number,
        y: number,
        radius: number,
        color: string,
        name: string
      ) => {
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Add district name
        ctx.fillStyle = "#6b7280";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(name, x, y);
      };

      drawDistrict(
        canvas.width * 0.3,
        canvas.height * 0.4,
        canvas.width * 0.1,
        "#10b981",
        "Woodcraft District"
      );
      drawDistrict(
        canvas.width * 0.7,
        canvas.height * 0.3,
        canvas.width * 0.08,
        "#3b82f6",
        "Pottery Quarter"
      );
      drawDistrict(
        canvas.width * 0.6,
        canvas.height * 0.7,
        canvas.width * 0.09,
        "#f59e0b",
        "Jewelry Lane"
      );
    };

    // Initial draw
    if (mapRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = mapRef.current.clientWidth;
      canvas.height = mapRef.current.clientHeight;
      mapRef.current.appendChild(canvas);

      setDimensions({
        width: canvas.width,
        height: canvas.height,
      });

      drawMap(canvas);
    }

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mapRef]);

  return dimensions;
}
