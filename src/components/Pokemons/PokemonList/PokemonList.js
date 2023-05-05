import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { ListItem, Text, SearchBar, Icon } from "react-native-elements";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { styles } from "./PokemonList.styles";
import { useNavigation } from "@react-navigation/native";
import { screen, formattedIndex } from "../../../utils";
import MasonryList from "@react-native-seoul/masonry-list";
import { PokemonContext } from "../../../utils/contexts/PokemonContext";
import { themeContext } from "../../../config/themeContext";
import { PokemonCardSkeleton } from "../PokemonCardSkeleton/PokemonCardSkeleton";
import { PokemonDropDown } from "../PokemonDropDown/PokemonDropDown";

export function PokemonList() {
  const theme = useContext(themeContext);
  const pokemon = useContext(PokemonContext).pokemon;
  const [pokeLimit, setPokeLimit] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigation();
  const [_, handleRefresh] = useState(false);
  const [filterValue, setFilterValue] = useState(null);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loadingFilter, setLoadingFilter] = useState(false);
  useEffect(() => {
    let filtered = [];

    if (pokemon.length > 0 && filterValue !== null) {
      setLoadingFilter(true);
      const fetchPromises = pokemon
        .slice(0, 300)
        .map((pokemon) => fetch(pokemon.url).then((res) => res.json()));
      Promise.all(fetchPromises).then((dataArray) => {
        dataArray.forEach((data, index) => {
          if (data.types.some((type) => type.type.name === filterValue)) {
            filtered.push(pokemon[index]);
          }
        });
        setFilteredPokemons(filtered);
        setLoadingFilter(false);
      });
    } else {
      setFilteredPokemons([]);
    }
    handleRefresh(true);
  }, [filterValue]);

  const goToDetail = (url) => {
    navigation.navigate(screen.pokemons.pokemon, { pokemon: url });
  };

  const numColumns = 3;

  const getPokemons = () => {
    return filteredPokemons.length > 0
      ? filteredPokemons
      : pokemon.slice(0, pokeLimit);
  };

  const loadMorePokes = () => {
    setShowMore(false);
    let aux = pokeLimit;
    setPokeLimit((prevState) => prevState + 20);

    setIsLoadingMore(false);

    return pokemon.slice(aux, pokeLimit);
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

  return !loadingFilter ? (
    <>
      <PokemonDropDown
        setFilterValue={setFilterValue}
        filterValue={filterValue}
      />

      <MasonryList
        data={getPokemons()}
        numColumns={numColumns}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        onEndReachedThreshold={0.5}
        onEndReached={() => setShowMore(true)}
        maxToRenderPerBatch={50}
        removeClippedSubviews={true}
        onRefresh={() => {
          handleRefresh(true);
          setPokeLimit(20);
        }}
        ListFooterComponent={
          !isLoadingMore &&
          showMore &&
          (filterValue == null || filterValue == "Sin filtro") && (
            <TouchableHighlight
              underlayColor="rgba(65,105,225, 0.2)"
              activeOpacity={0.5}
              style={{
                width: "40%",
                marginBottom: 40,
                backgroundColor: theme.header,

                alignContent: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderWidth: 1,
                borderRadius: 20,
              }}
              onPress={() => {
                setShowMore(false);
                loadMorePokes();
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  size={20}
                  type="material-community"
                  name="arrow-down-thick"
                  color={theme.grayColor}
                />
              </View>
            </TouchableHighlight>
          )
        }
      />
    </>
  ) : (
    <ActivityIndicator size={40} />
  );
}
