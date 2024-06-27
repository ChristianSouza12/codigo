import React, { useState, useEffect } from 'react';
import { Container, Branding, Name, Links } from './styles';
import { Link } from 'react-scroll';
import Logo from '../../Assets/logo-coders.png';
import useScrollReveal from "../../Hooks/useScrollReveal"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useScrollReveal();

  return (
    <Container scrolled={scrolled}>
      <Branding>
        <Name>Chris<span>tian</span>.</Name>
        <img src={Logo} alt="logo-coders" className="reveal" />
      </Branding>
      <Links>
        <Link to="home" smooth={true} duration={500}>Sobre Mim</Link>
        <Link to="about" smooth={true} duration={500}>Curiosidades</Link>
        <Link to="faq" smooth={true} duration={500}>Faq</Link>
        <Link to="contact" smooth={true} duration={500}>Fale Comigo</Link>
      </Links>
    </Container>
  );
}

export default Header;
