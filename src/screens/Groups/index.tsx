import { useCallback, useEffect, useState } from 'react';
import { Container }from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ButtonPrimary from '@components/Button';
import { FlatList } from 'react-native';
import EmptyList from '@components/EmptyList';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/groups/groupsGetAll';
import { groupCreate } from '@storage/groups/groupCreate';


export default function Groups() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups(){
    try{
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   fetchGroups();
  // }, []);

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header showBackButton={false} />
      <Highlight 
        title='Teams'
        subtitle='Play with your team'
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => navigation.navigate('players', { group: item })}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => 
          <EmptyList 
          title='No teams has been created yet =/'
          subtitle='Create a new team for play with your friends!'
          />
        }
      />

      <ButtonPrimary title='Add a new team' onPress={handleNewGroup}/>
    </Container>
  );
}
