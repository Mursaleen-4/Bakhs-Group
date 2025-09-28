import React, { useState } from 'react';

interface SimpleVideoBackgroundProps {
  videoSrc: string;
  className?: string;
  onError?: (error: string) => void;
}

const SimpleVideoBackground: React.FC<SimpleVideoBackgroundProps> = ({
  videoSrc,
  className = '',
  onError
}) => {
  const [showFallback, setShowFallback] = useState(false);

  const handleVideoError = () => {
    setShowFallback(true);
    const errorMessage = `Failed to load video: ${videoSrc}`;
    console.warn(errorMessage);
    onError?.(errorMessage);
  };

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {!showFallback ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center"
        >
          <span className="text-gray-700 text-sm">
            Video failed to load
          </span>
        </div>
      )}
    </div>
  );
};

export default SimpleVideoBackground;
