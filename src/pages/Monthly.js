import React from 'react';
import { CardsContainer, Container } from '../styles/GlobalStyle';
import Cards from '../components/Cards';
import MainCard from '../components/MainCard';
import dates from '../data.json';


function Monthly() {


  return (
    <Container>
      <MainCard />
      <CardsContainer>
        {dates.map((card) => (
          <Cards title={card.title} icon={card.title} current={card.timeframes.monthly.current} previous={card.timeframes.monthly.previous} key={card.title} timeframe={'Month'}/>
        )
        )}
      </CardsContainer>
    </Container>
  );
}

export default Monthly;
