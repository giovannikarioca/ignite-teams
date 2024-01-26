import { useEffect, useState } from 'react';
import { Container }from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ButtonPrimary from '@components/Button';
import { FlatList } from 'react-native';
import EmptyList from '@components/EmptyList';


export default function Groups() {
  const [groups, setgroups] = useState<string[]>(['Red Canids', 'Imperial', 'Fúria']);

  return (
    <Container>
      <Header showBackButton />
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
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => 
          <EmptyList 
          title='No teams has been create yet =/'
          subtitle='Create a new team for play with your friends!'
          />
        }
      />

      <ButtonPrimary title='Add a new team'/>
    </Container>
  );
}
