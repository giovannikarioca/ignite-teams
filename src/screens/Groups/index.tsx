import { Container }from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ButtonPrimary from '@components/Button';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import EmptyList from '@components/EmptyList';


export default function Groups() {
  const [groups, setgroups] = useState<string[]>(['tssssssssssasasasas'])

  // useEffect(() => {

  // }, []) 

  return (
    <Container>
      <Header showBackButton />
      <Highlight 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <GroupCard 
        title='Teste'
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
          title='Nenhuma turma ainda foi criada =/'
          subtitle='Crie uma nova turma clicando abaixo.'
          />
        }
      />

      <ButtonPrimary title='Criar nova turma'/>
    </Container>
  );
}
