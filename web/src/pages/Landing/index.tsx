import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import LandingBackground from '../../assets/landing.svg';

import {
  Container,
  ContentWrapper,
  LogoImage,
  MainContent,
  Title,
  Description,
  Location,
  City,
  State,
  EnterButton,
} from './styles';

import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper image={LandingBackground}>
        <LogoImage src={logoImg} />

        <MainContent>
          <Title>Leve felicidade para o mundo</Title>

          <Description>
            Visite orfanatos e mude o dia de muitas crianças
          </Description>
        </MainContent>

        <Location>
          <City>Guariba</City>
          <State>São Paulo</State>
        </Location>

        <EnterButton>
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterButton>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
