import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ListItem, Text, SearchBar } from "react-native-elements";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { styles } from "./PokemonList.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
export function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useNavigation();

  const goToDetail = (url) => {
    navigation.navigate(screen.pokemons.pokemon, { pokemon: url });
  };

  const numColumns = 3;

  useEffect(() => {
    if (!searchTerm && pokemon.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=6&offset=0")
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data.results);
          setNext(data.next);
        });
    }
  }, [pokemon, searchTerm]);

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
  const filteredPokemon = searchTerm
    ? pokemon.filter((p) => p.name.includes(searchTerm.toLowerCase()))
    : pokemon;
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Pikachu"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        inputContainerStyle={{
          backgroundColor: "white",
          padding: 2,
          width: "100%",
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          borderWidth: 1,
          borderRadius: 50,
        }}
        inputStyle={{
          backgroundColor: "white",
          padding: 0,
        }}
        containerStyle={{
          width: "90%",
          marginTop: 10,
          backgroundColor: "white",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
        }}
        placeholderTextColor={"#g5g5g5"}
      />
      <FlatList
        data={searchTerm ? filteredPokemon : pokemon}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              goToDetail(item.url);
            }}
            style={{ backgroundColor: "#fff" }}
          >
            <ListItem style={{ backgroundColor: "#fff" }} key={item.url}>
              <PokemonCard url={item.url} />
            </ListItem>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        onEndReached={!searchTerm && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoadingMore ? (
            <View style={styles.activityIndicatorContainer}>
              <ActivityIndicator size="large" color="#db0000" />
            </View>
          ) : null
        }
      />
    </View>
  );
}
