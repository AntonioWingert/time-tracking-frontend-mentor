import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  background-image: url(${(props) => props.icon});
  background-position-x: 95%;
  background-position-y: -15px, top;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors[props.title]};
  height: 47%;
  width: 18vw;
  border-radius: 5%;

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.5625rem;
  width: 100%;
  height: 80%;
  margin-top: auto;
  background-color: ${({theme}) => theme.colors.darkBlue};
  border-radius: 4%;
  gap: .8rem;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;


    span {
      cursor: pointer;
    }
  }

  > .hours {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h1 {
    font-weight: 300;
    font-size: 3.125rem;
  }

  h3 {
    font-weight: 300;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    .hours {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 2.5rem;
      }
    }
  }

  @media (max-width: 1117px) {
    .hours {

      h1 {
        font-size: 2.5rem;
      }
      
      h3 {
        font-size: 15px;
      }
    }
  }

`;

