import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cube-container">
        <div className="cube">
          <div className="face front" />
          <div className="face back" />
          <div className="face right" />
          <div className="face left" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cube-container {
    width: 200px;
    height: 200px;
    perspective: 800px;
    margin: 50px auto;
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: rotate 15s infinite linear;
  }

  .face {
    position: absolute;
    width: 200px;
    height: 200px;
    color: rgb(21, 153, 214);
    font-size: 18px;
    text-align: center;
    line-height: 200px;
    background: transparent;
    opacity: 0.9;
    border: 2px solid;
    border-image: linear-gradient(
      90deg,
      rgba(14, 8, 110, 1) 0%,
      rgba(15, 15, 167, 1) 26%,
      rgba(20, 45, 255, 1) 85%
    );
    box-shadow: 0 0 100px rgba(8, 178, 245, 0.61);
  }

  .front {
    transform: translateZ(100px);
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  .back {
    transform: rotateY(180deg) translateZ(100px);
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  .right {
    transform: rotateY(90deg) translateZ(100px);
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  .left {
    transform: rotateY(-90deg) translateZ(100px);
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  .top {
    transform: rotateX(90deg) translateZ(100px);
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(100px);
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  .cube-container:hover .cube {
    animation-play-state: paused;
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }

    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }`;

export default Card;
