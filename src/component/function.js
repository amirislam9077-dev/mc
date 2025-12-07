import React, { useEffect, useState } from 'react';
import './function.css';

function Function() {
  const [imageAnimated, setImageAnimated] = useState(false);
  const [headingAnimated, setHeadingAnimated] = useState(false);
  const [bgAnimated, setBgAnimated] = useState(false);

  useEffect(() => {
    // Start background animation first
    setBgAnimated(true);

    // Start heading animation
    setHeadingAnimated(true);

    // Start image animation after heading animation completes (1.5s)
    const timer = setTimeout(() => {
      setImageAnimated(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`function-section ${bgAnimated ? 'bg-animate' : ''}`}>
      <div className="function-container">
        <div className="function-content">
          {/* Image with animation */}
          <div className={`function-images ${imageAnimated ? 'animate' : ''}`}>
            <div className="function-image-wrapper">
              <video
                src="https://assets.indolj.io/upload/1760616908-KJFC-animation.webm?q=10"
                autoPlay
                loop
                muted
                playsInline
                className="function-video"
              />
            </div>
          </div>

          {/* Heading with animation */}
          <div className={`function-heading ${headingAnimated ? 'animate' : ''}`}>
            <h2 className="function-title">
              <span className="function-title-line"></span>
              <span className="function-title-line"></span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Function;
