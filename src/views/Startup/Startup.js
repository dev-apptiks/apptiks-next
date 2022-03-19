import React from 'react';
import Divider from '@mui/material/Divider';
import Main from '../../layouts/Main';
import Container from '../../components/Container';
import {
   Team,
  Features,
  Hero,
  Process,
  Reviews,
  Work,
} from './components';

const Startup = () => {
  return (<>
     <Main colorInvert={true}>
      <Hero />
      <Container>
        <Features />
      </Container>
      <Container>
        <Process />
      </Container>
      <Container>
        <Work />
      </Container>
      <Divider />
      {/* <Container>
        <Reviews />
      </Container> */}
      <Divider />
      {/* <Container>
        <Team />
      </Container> */}
     </Main>
    </>
  );
};

export default Startup;
