import styled from 'styled-components';

export const CardGroup = styled.div`
  display: flex;
  gap: 8%;
  align-items: center;
  justify-content: center;
  margin-top: 5%;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    gap: 4%;
    margin-top: 3%;
  }

  @media (max-width: 768px) {
    gap: 2%;
    margin-top: 2%;
  }

  @media (max-width: 480px) {
    gap: 1%;
    margin-top: 1%;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  margin-bottom: 5px; /* Espaçamento entre os cards */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    transition: 0.5s;
  }

  .layer {
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75%;
    opacity: 0;
    transition: 0.3s;
  }

  .info {
    position: absolute;
    bottom: -50%;
    padding: 15px;
    opacity: 0;
    transition: 0.5s bottom, 1.75s opacity;
    color: white;
  }

  p {
    font-size: 14px;
    margin-top: 3px;
  }

  &:hover,
  &:hover img {
    transform: scale(1.1);
  }

  &:hover .layer {
    opacity: 1;
  }

  &:hover .info {
    bottom: 0;
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px); /* Ajuste para ocupar metade do espaço com espaçamento */
    max-width: 300px;
    max-height: 400px;
    margin-bottom: 10px; /* Aumenta o espaçamento entre os cards em telas menores */
    margin-top: 20px; /* Novo ajuste para telas menores */
  }

  @media (max-width: 480px) {
    width: 100%; /* Cards ocupam toda a largura em telas pequenas */
    margin-bottom: 10px; /* Aumenta o espaçamento entre os cards em telas menores */
    margin-top: 20px; /* Novo ajuste para telas menores */
  }
`;

export const Container = styled.div`
  background-color: black;
  min-height: 80vh;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: 5%;

  span {
    color: #e53939;
  }

  @media (max-width: 768px) {
    padding-top: 2%; /* Subir o título em 10px */
  }

  @media (max-width: 480px) {
    padding-top: 1%; /* Subir o título em 10px */
  }
`;

export const Section = styled.div``;
