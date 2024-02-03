import React, { useEffect, useState, useRef } from "react";
import { Alert, FlatList, Keyboard, StatusBar, TextInput } from "react-native";
import theme from "@theme/index";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ButtonIcon from "@components/ButtonIcon";
import FilterTabs from "@components/FilterTabs";
import EmptyList from "@components/EmptyList";
import PlayerCard from "@components/PlayerCard";
import ButtonPrimary from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/groups/groupRemoveByName";

type RouteParams = {
  group: string;
}

export default function Player() {
  const navigation = useNavigation();
  const [newPlayerName, setNewPlayerName] = useState('');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [team, setTeam] = useState("");

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function HandleAddPlayer()  {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para ser adicionada.')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur(); // Remove focus
      // newPlayerNameInputRef.current?.focus(); // Add focus foco

      Keyboard.dismiss(); // Close keyboard

      setNewPlayerName('');
      fetchPlayersByTeam();

      // const players = await playersGetByGroup(group);
      // console.log(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
        console.log(error);
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado');
    }
  }

  function handleGoBackForInitialScreen() {
    navigation.navigate("groups");
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
      
    } catch (error) {
      console.log(error);
      Alert.alert('Remover pessoa', 'Não foi possivel remover a pessoa selecionada.')
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate('groups');

    } catch (error) {
      console.log(error);
      Alert.alert('Remover grupo', 'Não foi possível remover o gropo.');
    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      'Remover',
      'Deseja remover o grupo?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => groupRemove() }
      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.GRAY_700}
        translucent
      />
      <Header 
        showBackButton 
        onPress={handleGoBackForInitialScreen} 
      />

      <Highlight title={group} subtitle="Add a crew and divide the teams" />
      <Form>
        <Input
          placeholder="Enter a your team name..."
          placeholderTextColor={theme.COLORS.GRAY_300}
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={HandleAddPlayer} // User can use keyboard button for add player
          returnKeyType="done"
        />
        <ButtonIcon 
          name="add" 
          type="PRIMARY"
          onPress={HandleAddPlayer} 
        />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <FilterTabs
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name} 
            onRemove={() => handlePlayerRemove(item.name)} />
        )}
        ListEmptyComponent={() => (
          <EmptyList
            title="No teammates add yet"
            subtitle="Select the team and add a new teammate."
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <ButtonPrimary
        title="Remover turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
        disabled={players.length > 1}
      />
    </Container>
  );
}
