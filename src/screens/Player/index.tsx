import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import theme from "@theme/index";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import TextInput from "@components/TextInput";
import ButtonIcon from "@components/ButtonIcon";
import FilterTabs from "@components/FilterTabs";
import EmptyList from "@components/EmptyList";
import PlayerCard from "@components/PlayerCard";
import ButtonPrimary from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string;
}

export default function Player() {
  const navigation = useNavigation();
  const [players, setPlayers] = useState<string[]>([]);
  const [team, setTeam] = useState("");

  const route = useRoute();
  const { group } = route.params as RouteParams;

  function handleGoBackForInitialScreen(){
    navigation.navigate("groups");
  }

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
        <TextInput
          placeholder="Enter a your team name..."
          placeholderTextColor={theme.COLORS.GRAY_300}
          autoCorrect={false}
        />
        <ButtonIcon name="add" type="PRIMARY" />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
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
        disabled={players.length > 1}
      />
    </Container>
  );
}
