import React from 'react';
import { Container, MainContent } from './styles';
import Exercise from '../../assets/Exercise.svg';
import Play from '../../assets/Play.svg';
import SelfCare from '../../assets/SelfCare.svg';
import Social from '../../assets/Social.svg';
import Study from '../../assets/Study.svg';
import Work from '../../assets/Work.svg';

function index({title, icon, current, previous, timeframe}) {

  const iconSelector = () => {
    if (icon === 'Work') return Work;
    if (icon === 'Play') return Play;
    if (icon === 'Study') return Study;
    if (icon === 'Exercise') return Exercise;
    if (icon === 'Self Care') return SelfCare;
    if (icon === 'Social') return Social;
  };

  return (
    <Container title={title} icon={iconSelector()}>
      <MainContent>
        <div>
          <p>{title}</p>
          <span>...</span>
        </div>
        <div className='hours'>
          <h1>{current}hrs</h1>
          <h3>Last {timeframe} - {previous}hrs</h3>
        </div>
      </MainContent>
    </Container>
  );
}

export default index;