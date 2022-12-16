import React from 'react';
import { CardsContainer, Container } from '../styles/GlobalStyle';
import Cards from '../components/Cards';
import MainCard from '../components/MainCard';
import dates from '../data.json';


function Home() {


  return (
    <Container>
      <MainCard />
      <CardsContainer>
        {dates.map((card) => (
          <Cards title={card.title} icon={card.title} current={card.timeframes.daily.current} previous={card.timeframes.daily.previous} key={card.title} timeframe={'Day'}/>
        )
        )}
      </CardsContainer>
    </Container>
  );
}

export default Home;
