import styled, { keyframes } from 'styled-components';
import Wave from "../../Assets/wave.png"
const animateWave = keyframes`
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-position-x: 0px;
  }
`;

const animateWave_02 = keyframes`
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
`;

export const Footer2 = styled.div`
  position: relative;
  width: 100%;
  background:  #fe0000;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .social_icon,
  .menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
  }
  .social_icon li,
  .menu li {
    list-style: none;
  }

  .social_icon li a {
    font-size: 2em;
    color: white;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;

    &:hover {
      transform: translateY(-10px);
    }
  }

  .menu li {
    font-size: 1.2em;
    color: white;
    margin: 0 10px;
    display: inline-block;
    text-decoration: none;
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }
  p {
    color: white;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1.1em;
  }

  .wave {
    position: absolute;
   top:-80px;
    left: 0;
    width: 100%;
    height: 100px;
    background-size: 1000px 100px;
    background-image:url(${Wave}) ;
  }

  .wave#wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation: ${animateWave} 4s linear infinite;
  }

  .wave#wave2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: ${animateWave_02} 4s linear infinite;
  }
  .wave#wave3 {
    z-index: 1000;
    opacity: 0.2;
    bottom: 15;
    animation: ${animateWave} 3s linear infinite;
  }

  .wave#wave4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: ${animateWave_02} 4s linear infinite;
  }
`;

export const Waves = styled.div``;


export const Section = styled.div``