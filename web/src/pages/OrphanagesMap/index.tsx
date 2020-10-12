import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import {
  Container,
  Title,
  Sidebar,
  Header,
  Image,
  Description,
  Footer,
  City,
  State,
  CreateOrphanageButton,
  MapStyle,
} from './styles';

import mapMarkerImg from '../../assets/map-marker.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <Header>
          <Image src={mapMarkerImg} alt="Happy" />

          <Title>Escolha um orfanato no mapa</Title>

          <Description>
            Muitas crianças estão esperando a sua visita
          </Description>
        </Header>

        <Footer>
          <City>Guariba</City>
          <State>São Paulo</State>
        </Footer>
      </Sidebar>

      <Map center={[-21.3719309, -48.2493067]} zoom={15} style={MapStyle}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanageButton to="/">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanageButton>
    </Container>
  );
};

export default OrphanagesMap;
