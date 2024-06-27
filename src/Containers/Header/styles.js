import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.8)' : 'black'};
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; 
  transition: background-color 0.3s ease-in-out; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px;
  }
`;

export const Branding = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 27%;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Name = styled.p`
  color: white;
  margin: 0; 
  font-size: 24px; 

  span {
    color: #e53939;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  white-space: nowrap;
  margin-right: 10%;
  cursor: pointer;

  a {
    color: white;
    margin-left: 10px; /* Espaçamento horizontal entre os links */
    display: inline-block; 
    text-decoration: none; 
    transition: 0.3s ease-in-out;
    
    &:hover {
      color: #e53939;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
  }
`;
