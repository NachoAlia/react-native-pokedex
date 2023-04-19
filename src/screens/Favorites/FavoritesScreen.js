import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { PokemonCard } from "../../components/Pokemons/PokemonCard/PokemonCard";
import { db } from "../../utils";
import { getAuth } from "firebase/auth";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";
import { themeContext } from "../../config/themeContext";

export function FavoritesScreen() {
  const theme = useContext(themeContext);
  const [pokemons, setPokemons] = useState([]);
  const navigation = useNavigation();
  const auth = getAuth();

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
        backgroundColor: theme.backgroundColor,
      }}
    >
      <FlatList
        data={pokemons}
        numColumns={3}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            activeOpacity={0.7}
            onPress={() => {
              goToDetail(item.idPokemon);
            }}
          >
            <ListItem
              containerStyle={{ backgroundColor: "transparent" }}
              key={item.idFavorite}
            >
              <View style={{ flexDirection: "column" }}>
                <Icon
                  type="material-community"
                  name="heart"
                  style={{ position: "absolute" }}
                />
                <PokemonCard url={item.idPokemon} />
              </View>
            </ListItem>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item) => item.idFavorite}
      />
      {!pokemons && (
        <Text style={{ fontSize: 18 }}>
          Aun no tienes ningun favorito en tu lista
        </Text>
      )}
    </View>
  );
}
