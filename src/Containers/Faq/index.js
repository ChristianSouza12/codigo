import React from "react";
import Faq from "react-faq-component";
import { Container, Title, FaqWrapper , Section } from "./styles";

const data = {
    rows: [
        {
            title: "+ Minhas Informações.",
            content: (
                <>
                    <p>Nome: Christian Souza.</p>
                    <p>Idade: 25 Anos.</p>
                    <p>Estado: São Paulo.</p>
                    <p>Faculdade: Análise e desenvolvimento de sistemas.</p>
                    <p>Email: christianlmsouza@outlook.com</p>
                </>
            ),
        },
        {
            title: "+ Motivação para o curso?",
            content: (
                <>
                    <p>Minha motivação para iniciar na comunidade do <span>código certo</span> é adquirir experiência e aprimorar meus conhecimentos na área tech.</p>
                    <p>Aprender no dia a dia como é o trabalho na área, aprender com projetos reais e com uma boa equipe, creio que será uma ótima e única oportunidade.</p>
                </>
            )
        },
        {
            title: "+ Por que fazer esse voluntário?",
            content: (
                <>
                    <p>Vejo uma ótima oportunidade de agregar conhecimento em minha jornada como desenvolvedor front end, enfrentar desafios e projetos reais.</p>
                    <p>Quero ter o contato com metodologias ágeis, conhecer novas tecnologias, e principalmente novos profissionais.</p>
                </>
            )
        },
        {
            title: "+ O que agrego ao grupo?",
            content: (
                <p>Sou uma pessoa autodidata, capaz de trabalhar de maneira eficaz sob pressão.
                    <br />
                    Sou extremamente dedicado e comprometido com tudo que faço.
                    <br />
                    Minha determinação e foco garantem que eu entregue resultados de qualidade, independentemente das circunstâncias.</p>
            ),
        },
    ],
};

const styles = {
    rowTitleColor: "white",
    bgColor: "black",
    rowContentColor: "white",
};

const config = {};

const FaqComponent = () => {
    
    return (
        <Section id="faq">
        <Container>
            <Title>FAQ</Title>
            <FaqWrapper>
                <Faq data={data} styles={styles} config={config} />
            </FaqWrapper>
        </Container>
        </Section>
    );
};

export default FaqComponent;
