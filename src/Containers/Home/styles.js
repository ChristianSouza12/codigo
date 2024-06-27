import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const move = keyframes`
  0% {
    width: 0%;
  }
  
  100% {
    width: 14.5%;
  }

  
  
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 10px;
  }
`;

export const TextSection = styled.div`
  max-width: 60%;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }

  h1 {
    font-size: 2.5em;
    color: #333;

    span {
      color: #e53939;
    }
  }

  h3 {
    position: relative;
    text-transform: uppercase;
    letter-spacing: -0.01rem;

    &:before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      color: #e53939;
      -webkit-text-stroke: 1px #e53939;
      border-right: 2px solid #e53939;
      overflow: hidden;
      animation: ${move} 5s alternate ease-in-out infinite;
    }
  }

  p {
    color: #555;
    margin-top: 20px;
    line-height: 1.6;
  }
`;

export const Skills = styled.div`
  margin-top: 20px;

  i {
    font-size: 2em;
    color: #555;
    margin-right: 10px;

    &:hover {
      color: #e53939;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const ImageSection = styled.div`
  position: relative;
  max-width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;

    .circle-spin {
      display: none;
    }
  }

  .circle-spin {
    position: absolute;
    top: 41.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 470px;
    height: 470px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #e53939;
    animation: ${spinAnimation} 2s linear infinite;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    border: 3px solid black;
    @media (max-width: 768px) {
      margin-top: 10%;
      max-width: 70%;
  }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;

  @media (max-width: 768px) {
    margin-top: 5%;
  }

  a {
    font-size: 2em;
    margin: 0 10px;
    transition: color 0.3s;
    background-color: black;
    color: #e53939;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    text-decoration: none;

    &:hover {
      color: white;
      background-color: #e53939;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const Section = styled.div``;
