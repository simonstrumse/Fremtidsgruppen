import React, { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImageSrc?: string;
  opacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  fallbackImageSrc = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80",
  opacity = 0.7,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = 0.75; // Slow down the video slightly
      videoElement.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"
        style={{ mixBlendMode: "multiply" }}
      />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img
          src={fallbackImageSrc}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>
    </div>
  );
};

export default VideoBackground;
