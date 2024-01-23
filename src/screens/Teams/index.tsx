import { useEffect, useState } from 'react';
import { Container } from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';

// interface componentNameProps {}

export function Teams () {
  return (
    <Container>
        <Header showBackButton/>
        <Icon />
      <Highlight title='' subtitle=''/>
    </Container>
  );
};

