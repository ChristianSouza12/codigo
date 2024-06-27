import React from 'react';
import { Container, Title, CardGroup, Card , Section } from "./styles";

import Moto from "../../Assets/moto.jpg";
import Voo from "../../Assets/voo.jpg";
import Cs from "../../Assets/cs.jpg";
import Estadio from "../../Assets/estadio.jpg";

const About = () => {
  return (
    <Section id="about">
    <Container>
      <Title>Curiosidades sobre mim<span>!</span></Title>
      <CardGroup className="card-group">
        <Card className="card">
          <img src={Moto} alt="moto" />
          <div className="layer"></div>
          <div className="info">
            <h3>Apaixonado por motos.</h3>
            <p>Sempre fui um verdadeiro apaixonado por moto e velocidade, aos 18 anos comprei minha primeira moto, e desde então não sei viver sem.</p>
          </div>
        </Card>
        <Card className="card">
          <img src={Voo} alt="voo" />
          <div className="layer"></div>
          <div className="info">
            <h3>Piloto Privado.</h3>
            <p>Antes de ter interesse na programação, meu maior sonho era ser piloto de companhia aérea, sou completamente apaixonado por aviação no geral. Tenho algumas horas de voo registradas na minha CIV.</p>
          </div>
        </Card>
        <Card className="card">
          <img src={Cs} alt="cs" />
          <div className="layer"></div>
          <div className="info">
            <h3>Counter Strike.</h3>
            <p>Quando não estou estudando, meu passatempo preferido é jogar! Cs2 é meu jogo favorito! </p>
          </div>
        </Card>
        <Card className="card">
          <img src={Estadio} alt="estadios" />
          <div className="layer"></div>
          <div className="info">
            <h3>Estádios.</h3>
            <p>Gosto muito de viajar, e todos os lugares que vou tento conhecer algum estádio, ja conheço alguns como Maracanã, La Bombonera, Monumental , Ta Qali e Camp Nou. </p>
          </div>
        </Card>
      </CardGroup>
    </Container>
    </Section>
  );
};

export default About;
