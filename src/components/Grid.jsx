import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import Loader from './Loader';
import Loader_2 from './Loader_2';
import Loader_3 from './Loader_3';
import Card_4 from './Card_4';
import Loader_4 from './Loader_4';


const GridContainer = styled.div`
  display: grid;
  grid-template-row: repeat(auto-fit, minmax(220px, 1fr));
  gap: 50px;
  justify-items: center;
  background: #0e0e10;
  min-height: 100vh;
`;

const GridPage = () => {
  return (
    <GridContainer>
      <Card />
      <CardTwo />
      <CardThree />
      <Loader />
      <Loader_2 />
      <Loader_3 />
      <Card_4 />
      <Loader_4 />
    </GridContainer>
  );
};

export default GridPage;
