
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import PrecisionHeroOverlay from "./PrecisionHeroOverlay";

const TOTAL_FRAMES = 240;
const FRAME_PATH = (index) => `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function ScrollyTelling() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade in text as we scroll scrollytelling
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.9], [50, 0]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imageArray = [];

    const onImageLoad = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      // Optional: update loading progress state if needed
      if (loadedCount === TOTAL_FRAMES) {
        setImagesLoaded(true);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = onImageLoad;
      imageArray.push(img);
    }
    imagesRef.current = imageArray;
  }, []);

  // Update canvas on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current || !imagesLoaded || imagesRef.current.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(latest * TOTAL_FRAMES)
    );

    // Safety check for index
    const index = Math.max(0, frameIndex); // 0-based index for array access (frame 1 is at index 0)

    const img = imagesRef.current[index];
    if (img) {
      // Draw image to cover canvas while maintaining aspect ratio
      const canvas = canvasRef.current;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    }
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a redraw? Or wait for scroll. 
        // Force update for current scroll position would be ideal but might be overkill.
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initial draw
  useEffect(() => {
    if (imagesLoaded && canvasRef.current) {
      // Draw first frame
      const ctx = canvasRef.current.getContext("2d");
      const img = imagesRef.current[0];
      if (img && ctx) {
        // Same draw logic as above, reused
        const canvas = canvasRef.current;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    }
  }, [imagesLoaded]);


  return (
    <div ref={containerRef} className="relative h-[800vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-50">
            Scanning System...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Hero Overlay with Scroll Transform */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-30 pointer-events-none"
        >
          <PrecisionHeroOverlay />
        </motion.div>
      </div>
    </div>
  );
}
