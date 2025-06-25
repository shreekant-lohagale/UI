// src/pages/InternshipShowcase.jsx
import React from 'react';
import AnimationCard from '../components/AnimationCard';

import animation1 from '../animations/animation1.json';
import animation2 from '../animations/animation2.json';
import animation3 from '../animations/animation3.json';
import animation4 from '../animations/animation4.json';
import animation5 from '../animations/animation5.json';
import animation6 from '../animations/animation6.json';
import animation7 from '../animations/animation7.json';


const animations = [
  { data: animation1, title: "UI Animation 1" },
  { data: animation2, title: "UI Animation 2" },
  { data: animation3, title: "UI Animation 3" },
  { data: animation4, title: "UI Animation 4" },
  { data: animation5, title: "UI Animation 5" },
  { data: animation6, title: "UI Animation 6" },
  { data: animation7, title: "UI Animation 7" },

];

const InternshipShowcase = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-10">
      <h1 className="text-white text-3xl font-bold text-center mb-10">UI Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animations.map((anim, index) => (
          <AnimationCard key={index} animationData={anim.data} title={anim.title} />
        ))}
      </div>
    </div>
  );
};

export default InternshipShowcase;
