import React from 'react';
import { Container, TextSection, Skills, ImageSection , SocialIcons , Section} from './styles';
import Foto from '../../Assets/foto.png';



const Home = () => {
    return (
      <Section id="home">
      <Container>
        <ImageSection>
          <img src={Foto} alt="foto-pessoal" />
          <span className="circle-spin"></span>
          <SocialIcons>
            <a href="https://www.linkedin.com/in/christian-souzaa/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="https://github.com/ChristianSouza12" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.instagram.com/christiann_souza/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-instagram'></i>
            </a>
          </SocialIcons>
        </ImageSection>
      <TextSection>
        <h1>Olá, sou <span>Christian Souza</span>.</h1>
        <div class="heading">
          <h3 data-text="Desenvolvedor">Desenvolvedor FrontEnd.</h3>
        </div>
        <p>
          Tenho 25 anos e estou à procura da minha primeira oportunidade como desenvolvedor front-end. Tenho sólidas habilidades em frameworks como React e Angular. Sou uma pessoa extremamente determinada e encontro motivação nos desafios diários.
          <br />
          <br/>
          Minha paixão é constantemente ultrapassar meus próprios limites, e estou sempre em busca de novos desafios para expandir meu conhecimento. Acredito que minha dedicação contínua ao aprendizado e minha paixão pela tecnologia me tornam um candidato ideal para contribuir e crescer na área de desenvolvimento front-end.
        </p>
        <Skills>
          <i className='bx bxl-html5'></i>
          <i className='bx bxl-css3'></i>
          <i className='bx bxl-javascript'></i>
          <i className='bx bxl-nodejs'></i>
          <i className='bx bxl-angular'></i>
          <i className='bx bxl-react'></i>
          <i className='bx bxl-git'></i>
        </Skills>
      </TextSection>
    </Container>
    </Section>

    
  );
}

export default Home;
