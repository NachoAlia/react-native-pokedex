import React, { useState, useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { Loading } from "../../../components";
import { PokemonList } from "../../../components/Pokemons/PokemonList/PokemonList";
import { styles } from "./PokemonsScreen.styles";
export function PokemonsScreen() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <PokemonList />
    </View>
  );
}
