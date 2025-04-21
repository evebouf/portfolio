import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
  isLast?: boolean;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, delay = 50, onComplete, isLast = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className="typewriter">
      {currentText}
      {isLast && <span className="cursor" />}
    </span>
  );
};

export default TypeWriter;
