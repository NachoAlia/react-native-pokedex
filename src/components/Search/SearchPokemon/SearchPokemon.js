import React, { useContext, useMemo, useState, useEffect } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { SearchBar, ListItem, Icon, Text } from "react-native-elements";
import { forEach, map, size } from "lodash";
import { PokemonContext } from "../../../utils/contexts/PokemonContext";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { db } from "../../../utils";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
export function SearchPokemon(props) {
  const { onClose } = props;
  const { pokemon } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const q = query(
      collection(db, "history"),
      where("idUser", "==", auth.currentUser.uid)
    );

    onSnapshot(q, async (snapshot) => {
      let historyAux = [];

      for await (const item of snapshot.docs) {
        const data = item.data();
        historyAux.push(data);
      }
      setSearchHistory(historyAux);
    });
  }, []);

  const filteredPokemon = useMemo(
    () =>
      searchTerm
        ? pokemon.filter((p) => p.name.includes(searchTerm.toLowerCase()))
        : null,
    [pokemon, searchTerm]
  );

  const handleSaveHistory = async (pokemon) => {
    setIsLoading(true);
    try {
      const idHistory = uuid();
      const data = {
        id: idHistory,
        search: searchTerm,
        idUser: auth.currentUser.uid,
      };
      await setDoc(doc(db, "history", data.id), data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const deleteSearch = async (idSearch) => {
    setIsLoading(true);
    try {
      await deleteDoc(doc(db, "history", idSearch));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const deleteAllSearch = async () => {
    setIsLoading(true);
    forEach(searchHistory, (search) => deleteSearch(search.id));
    setIsLoading(false);
  };

  const goToDetails = (pokemon, search) => {
    handleSaveHistory(pokemon);
    onClose(true);
    navigation.navigate(screen.pokemons.tab, {
      screen: screen.pokemons.pokemon,
      params: {
        pokemon: pokemon.url,
      },
    });
  };
  const getSetInstanceOfSearchHistory = () => {
    const uniqueArr = [];

    searchHistory.forEach((obj) => {
      if (
        !uniqueArr.some(
          (uniqueObj) =>
            JSON.stringify(uniqueObj.search) === JSON.stringify(obj.search)
        )
      ) {
        uniqueArr.push(obj);
      }
    });
    return uniqueArr;
  };

  return (
    <View
      style={{
        width: "100%",
        height: "95%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchBar
        placeholder="Pikachu"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        inputContainerStyle={{
          backgroundColor: "white",
          padding: 2,
          width: "100%",
          height: 40,
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
          height: 10,
          marginTop: 20,
          backgroundColor: "white",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
        }}
        placeholderTextColor={"#g5g5g5"}
      />
      {isLoading && <ActivityIndicator style={{ marginTop: 60 }} />}
      {!filteredPokemon && (
        <View style={{ width: "100%", flexDirection: "row", marginTop: 50 }}>
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Historial
            </Text>
          </View>
          <View
            style={{
              width: "70%",
              alignItems: "flex-end",
              marginTop: 5,
            }}
          >
            {searchHistory.length > 0 && (
              <Text onPress={deleteAllSearch}>Borrar todo</Text>
            )}
          </View>
        </View>
      )}
      <ScrollView
        style={{
          backgroundColor: "white",
          width: "90%",
          bottom: 0,
          marginTop: filteredPokemon == null ? 20 : 60,
        }}
      >
        {filteredPokemon == null ? (
          searchHistory.length > 0 ? (
            map(getSetInstanceOfSearchHistory(), (item) => {
              return (
                <ListItem
                  key={item.id}
                  bottomDivider
                  onPress={() => {
                    setSearchTerm(item.search);
                  }}
                >
                  <ListItem.Content>
                    {item.search.length > 0 && (
                      <ListItem.Title>{item.search}</ListItem.Title>
                    )}
                  </ListItem.Content>
                  <Icon
                    type="material-community"
                    name="close"
                    color="#828282"
                    size={25}
                    onPress={() => {
                      deleteSearch(item.id);
                    }}
                  />
                </ListItem>
              );
            })
          ) : (
            <Text style={{ alignSelf: "center", marginTop: 30 }}>
              No se encontro historial de busqueda
            </Text>
          )
        ) : (
          filteredPokemon.map((item) => {
            return (
              <ListItem
                key={item.url}
                bottomDivider
                onPress={() => {
                  goToDetails(item, searchTerm);
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <Icon
                  type="material-community"
                  name="chevron-right"
                  color="#828282"
                />
              </ListItem>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
