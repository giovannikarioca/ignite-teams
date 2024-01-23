import { useEffect, useState } from 'react';
import { Container, Icon } from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonPrimary from '@components/Button';
import TextInput from '@components/TextInput';
import theme from '@theme/index';
import { View } from 'react-native';

export default function NewGroup () {
  return (
    <Container>
      <Header showBackButton/>
      <View>
        <Icon />
        <Highlight title='New team' subtitle='Create a new team for add people'/>
        <TextInput placeholder='Enter a your team name...' placeholderTextColor={theme.COLORS.GRAY_300} />
      </View>
      <ButtonPrimary title='Create a team' disabled/>
    </Container>
  );
};

