import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { ListItem, Text, SearchBar } from "react-native-elements";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { styles } from "./PokemonList.styles";
import { useNavigation } from "@react-navigation/native";
import { screen, formattedIndex } from "../../../utils";

export function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const navigation = useNavigation();

  const goToDetail = (url) => {
    navigation.navigate(screen.pokemons.pokemon, { pokemon: url });
  };

  const numColumns = 3;

  useEffect(() => {
    if (pokemon.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data.results);
          setNext(data.next);
        });
    }
  }, [pokemon]);

  const loadMore = () => {
    if (isLoadingMore) return;
    if (next) {
      setIsLoadingMore(true);
      fetch(next)
        .then((res) => res.json())
        .then((data) => {
          setPokemon((prevState) => [...prevState, ...data.results]);
          setNext(data.next);

          setIsLoadingMore(false);
        });
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        activeOpacity={1}
        onPress={() => {
          goToDetail(item.url);
        }}
      >
        <View>
          <ListItem
            key={item.url}
            containerStyle={{ backgroundColor: "transparent" }}
          >
            <PokemonCard url={item.url} />
          </ListItem>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      data={pokemon}
      numColumns={numColumns}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={50}
      ListFooterComponent={
        isLoadingMore ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color="#db0000" />
          </View>
        ) : null
      }
    />
  );
}
