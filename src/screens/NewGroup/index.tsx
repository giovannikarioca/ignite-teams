import { useEffect, useState } from 'react';
import { Container, Icon } from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonPrimary from '@components/Button';
import TextInput from '@components/TextInput';
import theme from '@theme/index';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewGroup () {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  function handlePlayers(){
    navigation.navigate('players', { group });
  }

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <Header 
        showBackButton 
        onPress={handleGoBack}
      />
      <View>
        <Icon />
        <Highlight 
          title='New team' 
          subtitle='Create a new team for add people'
        />
        <TextInput 
          placeholder='Enter a your team name...' 
          placeholderTextColor={theme.COLORS.GRAY_300}
          onChangeText={setGroup}
        />
      </View>
      <ButtonPrimary title='Create a team' onPress={handlePlayers}/>
    </Container>
  );
};

