// src/components/AnimationCard.jsx
import React from 'react';
import Lottie from 'lottie-react';

const AnimationCard = ({ animationData, title }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-md p-4 transition hover:scale-105 duration-300">
      <Lottie animationData={animationData} loop={true} />
      <h2 className="text-white text-center mt-2 font-semibold">{title}</h2>
    </div>
  );
};

export default AnimationCard;
