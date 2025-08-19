import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useMicroInteractions } from "@/hooks/use-micro-interactions";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  
  const {
    useTypingAnimation,
    useFloatingAnimation,
    useMagneticEffect,
    useRippleEffect,
    handleHover,
    handleClick
  } = useMicroInteractions();
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const floatingOffset = useFloatingAnimation(8, 3000);
  const { magneticOffset, handleMouseMove, handleMouseLeave } = useMagneticEffect(0.2);
  const { ripples, createRipple } = useRippleEffect();

  // Multiple sources for robust playback: prefer local MP4, fallback to Cloudinary
  const videoSources = [
    "/videos/hero-video.mp4",
    "https://res.cloudinary.com/dhdjzw88p/video/upload/f_auto,q_auto,w_1280,h_720/v1/8853485-hd_1920_1080_24fps_iyheid"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Simple video play strategy with more debugging
    const attemptVideoPlay = async () => {
      if (videoRef.current) {
        try {
          console.log('🎬 Attempting to play video...');
          console.log('🎬 Video element:', videoRef.current);
          console.log('🎬 Video sources:', videoSources);
          
          // Set video properties
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          videoRef.current.loop = true;
          videoRef.current.preload = 'auto';
          
          console.log('🎬 Video properties set');
          
          // Try to play
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsVideoPlaying(true);
            setShowPlayButton(false);
            console.log('✅ Video playing successfully');
          }
        } catch (error) {
          console.log('❌ Autoplay failed:', error);
          setShowPlayButton(true);
        }
      } else {
        console.log('❌ Video ref not available');
      }
    };

    // Delay to ensure DOM is ready
    setTimeout(attemptVideoPlay, 1000);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    console.log('✅ Video loaded successfully');
  };

  const handleVideoError = (event: any) => {
    console.log('❌ Video error:', event);
    setVideoError(true);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setShowPlayButton(false);
    console.log('✅ Video started playing');
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    console.log('⏸️ Video paused');
  };

  const handleManualPlay = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = true;
        await videoRef.current.play();
        setIsVideoPlaying(true);
        setShowPlayButton(false);
        console.log('✅ Manual play successful');
      } catch (error) {
        console.log('❌ Manual play failed:', error);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=854&q=60')`
          }}
          role="img"
          aria-label="Solar panels on a modern home"
        ></div>

        {/* Animated Background Fallback */}
        {videoError && (
          <div className="absolute inset-0 video-fallback">
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute solar-panel bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-lg"
                  style={{
                    left: `${(i * 15) % 100}%`,
                    top: `${(i * 12) % 100}%`,
                    width: `${40 + (i % 3) * 20}px`,
                    height: `${40 + (i % 3) * 20}px`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '4s'
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Simplified Video Element */}
        {!videoError && (
          <div className="relative">
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded && isVideoPlaying ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=854&q=60"
              aria-label="Solar installation video background"
              data-playing={isVideoPlaying}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onLoadStart={() => console.log('🎬 Video load started')}
              onCanPlay={() => console.log('🎬 Video can play')}
              onCanPlayThrough={() => console.log('🎬 Video can play through')}
            >
              {videoSources.map((src) => (
                <source key={src} src={src} type="video/mp4" />
              ))}
              {/* Fallback image */}
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=854&q=60"
                alt="Solar panels on a modern home"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </video>
            
            {/* Manual Play Button */}
            {showPlayButton && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <Button
                  onClick={handleManualPlay}
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group hero-animate-glow"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Play Video
                </Button>
              </div>
            )}
            
            {/* Loading Indicator */}
            {!videoLoaded && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                  <p className="text-lg font-light">Loading video...</p>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Tesla-style Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Tesla-style Large Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white mb-8 tracking-tight leading-none">
            Powering Nigeria's
            <br />
            <span className="text-orange-400">Solar Revolution</span>
          </h1>

          {/* Tesla-style Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-8 max-w-4xl mx-auto tracking-wide">
            Premium solar panels, inverters & maintenance services.
          </p>

          {/* Additional subtitle */}
          <p className="text-lg sm:text-xl text-white/80 font-light mb-12 max-w-3xl mx-auto tracking-wide">
            Transform your energy future with Jumiami Solar
          </p>

          {/* Tesla-style Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group relative overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => {
                handleClick('order-button');
                createRipple(e);
              }}
              style={{
                transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`
              }}
            >
              {/* Ripple effects */}
              {ripples.map(ripple => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/30 rounded-full animate-ping"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: '20px',
                    height: '20px',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
              Order Now
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Link href="/projects">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-none min-h-[56px] group relative overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => {
                  handleClick('portfolio-button');
                  createRipple(e);
                }}
                style={{
                  transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`
                }}
              >
                {/* Ripple effects */}
                {ripples.map(ripple => (
                  <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full animate-ping"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: '20px',
                      height: '20px',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
                <Play className="mr-3 h-5 w-5" />
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tesla-style Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-light tracking-wide">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
