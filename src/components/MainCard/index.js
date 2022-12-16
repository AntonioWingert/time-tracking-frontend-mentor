import React from 'react';
import { Container, MainContent, TimeContainer } from './styles';
import profile from '../../assets/image-jeremy.png';
import { Link, useLocation } from 'react-router-dom';

function index() {
  const {pathname} = useLocation();
  return (
    <Container>
      <MainContent >
        <img src={profile} alt="image-jeremy" width="60px"/>
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </MainContent>
      <TimeContainer>
        <Link to="/" className={pathname === '/' ? 'active' : null}>Daily</Link>
        <Link to="/weekly" className={pathname === '/weekly' ? 'active' : null}>Weekly</Link>
        <Link to="/monthly" className={pathname === '/monthly' ? 'active' : null}>Monthly</Link>
      </TimeContainer>
    </Container>
  );
}

export default index;