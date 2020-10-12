import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--app-background);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.main<{image: string}>`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${props => props.image}) no-repeat 80% center;
`;

export const LogoImage = styled.img``;

export const MainContent = styled.section`
  max-width: 350px;
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 800;
  line-height: 70px;
`;

export const Description = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.aside`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const City = styled.strong`
  font-weight: 800;
`;

export const State = styled.span``;

export const EnterButton = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;

  background-color: var(--yellow);
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--cian);
  }
`;
