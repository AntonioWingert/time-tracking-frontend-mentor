import React from 'react';
import { CardsContainer, Container } from '../styles/GlobalStyle';
import Cards from '../components/Cards';
import MainCard from '../components/MainCard';
import dates from '../data.json';


function Weekly() {


  return (
    <Container>
      <MainCard />
      <CardsContainer>
        {dates.map((card) => (
          <Cards title={card.title} icon={card.title} current={card.timeframes.weekly.current} previous={card.timeframes.weekly.previous} key={card.title} timeframe={'Week'}/>
        )
        )}
      </CardsContainer>
    </Container>
  );
}

export default Weekly;
