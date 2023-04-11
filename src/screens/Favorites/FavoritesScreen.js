import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { PokemonCard } from "../../components/Pokemons/PokemonCard/PokemonCard";
import { db } from "../../utils";
import { getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";
export function FavoritesScreen() {
  const [pokemons, setPokemons] = useState([]);
  const navigation = useNavigation();
  const auth = getAuth();
  const goToDetail2 = (url) => {
    navigation.navigate(screen.pokemons.pokemon, { pokemon: url });
  };
  const goToDetail = (url) => {
    navigation.navigate(screen.pokemons.tab, {
      screen: screen.pokemons.pokemon,
      params: {
        pokemon: url,
      },
    });
  };
  useEffect(() => {
    const q = query(
      collection(db, "favorites"),
      where("idUser", "==", auth.currentUser.uid)
    );

    onSnapshot(q, async (snapshot) => {
      let auxPokemons = [];

      for await (const item of snapshot.docs) {
        const data = item.data();
        const newData = {
          idFavorite: data.id,
          idPokemon: data.idPokemon,
        };
        auxPokemons.push(newData);
      }
      setPokemons(auxPokemons);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        data={pokemons}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              goToDetail(item.idPokemon);
            }}
            style={{ backgroundColor: "#fff" }}
          >
            <ListItem style={{ backgroundColor: "#fff" }} key={item.url}>
              <PokemonCard url={item.idPokemon} />
            </ListItem>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
      {!pokemons && (
        <Text style={{ fontSize: 18 }}>
          Aun no tienes ningun favorito en tu lista
        </Text>
      )}
    </View>
  );
}
