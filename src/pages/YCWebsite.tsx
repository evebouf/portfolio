import React, { useEffect, useRef } from 'react';
import './Homepage.scss';
import BackButton from '../components/BackButton';

declare global {
  interface Window {
    twttr: any;
  }
}

const YCWebsite: React.FC = () => {
  const tweetRef = useRef<HTMLDivElement>(null);
  const tweetCreated = useRef(false);

  useEffect(() => {
    // Load Geist Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Twitter widgets script and create tweet
    const createTweet = () => {
      if (window.twttr && tweetRef.current && !tweetCreated.current) {
        tweetCreated.current = true;
        window.twttr.widgets.createTweet(
          '2014744955206689003',
          tweetRef.current,
          { theme: 'light', align: 'center' }
        );
      }
    };

    if (window.twttr) {
      createTweet();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = createTweet;
      document.body.appendChild(script);
    }
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Geist Mono', monospace",
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        padding: '180px 40px 80px',
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: '24px' }}>
        <BackButton />
      </div>

      {/* Title */}
      <p style={{ marginBottom: '8px', textAlign: 'center' }}>YC Website</p>
      <p className="text-secondary" style={{ marginBottom: '32px', textAlign: 'center' }}>Redesigned and built the new homepage.</p>

      {/* Hero Video */}
      <video
        src="/pictures/yc-website-launch-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          marginBottom: '48px',
        }}
      />

      {/* Tweet Embed */}
      <div 
        ref={tweetRef}
        className="twitter-tweet-container"
        style={{ marginBottom: '48px', display: 'flex', justifyContent: 'center' }}
      />

      {/* Content */}
      <div className="text-secondary">
        <p style={{ marginBottom: '24px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default YCWebsite;
