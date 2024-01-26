import { useEffect, useState } from 'react';
import { Container } from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonPrimary from '@components/Button';
import TextInput from '@components/TextInput';
import theme from '@theme/index';
import { FlatList, View } from 'react-native';
import GroupCard from '@components/GroupCard';
import EmptyList from '@components/EmptyList';
import FilterTabs from '@components/FilterTabs';

export default function Teams() {

  const [teamMates, setTeamMates] = useState<string[]>(['Fallen', 'Kscerato', 'Yuri']);
  const [tabs, setTabs] = useState<string[]>(['Time A', 'Time B']);
  const [activeTab, setActiveTab] = useState<string>('Time A'); // Estado para controlar a aba ativa

  return (
    <Container>
      <Header showBackButton/>
      <View>
        <Highlight title='Team name' subtitle='Add a crew and divide the teams'/>
        <TextInput placeholder='Enter a your team name...' placeholderTextColor={theme.COLORS.GRAY_300} />
      </View>
      <FilterTabs title='Time' />
      <FlatList 
        data={teamMates}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={teamMates.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => 
          <EmptyList 
          title='No teammates add yet'
          subtitle='Select the team and add a new teammate.'
          />
        }
      />
      <ButtonPrimary title='Create a team' disabled/>
    </Container>
  );
};

