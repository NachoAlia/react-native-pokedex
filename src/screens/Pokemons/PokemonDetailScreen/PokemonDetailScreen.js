import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./PokemonDetailScreen.styles";
import { ActivityIndicator } from "react-native";
import { Loading } from "../../../components";
import { Header } from "../../../components/PokemonDetail/Header";
import { Info } from "../../../components/PokemonDetail";
import { getPokeColor } from "../../../utils";
import { Image } from "react-native-elements";

export function PokemonDetailScreen(props) {
  const [pokemon, setPokemon] = useState(null);
  const { route } = props;
  const url = route.params.pokemon;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setPokemon(data);
        }, 2000);
      });
  }, [url]);

  if (!pokemon) return <Loading />;

  return (
    <View
      style={{
        backgroundColor: getPokeColor(pokemon.types[0].type.name),
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../../../assets/icons/pokeball.png")}
        style={{ width: 400, height: 400, opacity: 0.2 }}
      />
      <Header pokemon={pokemon} setPokemon={setPokemon} />
      <Info pokemon={pokemon} pokemonUrl={url} />
    </View>
  );
}
