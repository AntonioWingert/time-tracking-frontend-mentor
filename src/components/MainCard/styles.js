import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 22vw;
  height: 100%;
  background-color: ${({theme}) => theme.colors.darkBlue};
  border-radius: 5%;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1.5625rem;
  width: 100%;
  height: 60%;
  margin-bottom: auto;
  background-color: ${({theme}) => theme.colors.Blue};
  border-radius: 5%;
  gap: .5rem;
  
  img {
    border: 2px solid white;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h1 {
    font-weight: 400;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 40%;
  width: 100%;
  padding: 1.5625rem;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.Blue};
  }

  .active {
    color: white;
  }
`;