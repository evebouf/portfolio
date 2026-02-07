import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Homepage.scss';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate('/')}
      className="text-link text-secondary"
      style={{ cursor: 'pointer' }}
    >
      ← Back
    </span>
  );
};

export default BackButton;
