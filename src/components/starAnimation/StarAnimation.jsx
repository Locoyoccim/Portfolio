import React from "react";
import "/src/components/starAnimation/starAnimation.css";

function StarAnimation() {
  const stars = Array.from({ length: 200 }, (_, index) => index);
  const getRandomPosition = () => {
    return {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    };
  };
  return (
    <div className="stars_container">
      {stars.map((star) => (
        <div key={star} className="star" style={{ "--i": star, ...getRandomPosition()}}></div>
      ))}
    </div>
  );
}

export default StarAnimation;
