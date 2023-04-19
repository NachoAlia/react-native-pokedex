import React, { useState, useEffect, useContext } from "react";
import { View, SafeAreaView } from "react-native";
import { Loading } from "../../../components";
import { PokemonList } from "../../../components/Pokemons/PokemonList/PokemonList";
import { styles } from "./PokemonsScreen.styles";
import { themeContext } from "../../../config/themeContext";
export function PokemonsScreen() {
  const theme = useContext(themeContext);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <PokemonList />
    </View>
  );
}
