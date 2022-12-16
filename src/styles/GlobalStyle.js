import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    font-family: Rubik, sans-serif;
    background-color: ${({theme: {colors}}) => colors.veryDarkBlue};
    color: white;
  }

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 50vh;
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;