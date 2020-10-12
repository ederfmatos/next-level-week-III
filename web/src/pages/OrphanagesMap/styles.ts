import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  overflow: hidden;

  .leaflet-container {
    z-index:5 ;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const Sidebar = styled.aside`
  width: 440px;
  background: var(--app-background);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 200;
`;

export const Header = styled.header``;

export const Image = styled.img``;

export const Description = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`;

export const City = styled.strong`
  font-weight: 800;
`;

export const State = styled.p``;

export const CreateOrphanageButton = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 30;
  
  width: 64px;
  height: 64px;
  background: var(--blue);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    background: var(--light-blue);
  }
`;

export const MapStyle = {
  width: '100%',
  height: '100%',
}