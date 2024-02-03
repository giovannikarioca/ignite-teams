import { useEffect, useState } from 'react';
import { Container, Icon } from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonPrimary from '@components/Button';
import TextInput from '@components/TextInput';
import theme from '@theme/index';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/groups/groupCreate';
import { AppError } from '@utils/AppError';

export default function NewGroup () {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNew(){ 
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da turma.')
      }
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError){
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
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
      <ButtonPrimary title='Create a team' onPress={handleNew}/>
    </Container>
  );
};

