import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Image, Text, Icon } from "react-native-elements";

import { styles } from "./PokemonCard.styles";
import { Loading } from "../../Shared/Loading/Loading";
import { map } from "lodash";
import { getPokeColor, getPokeIcon } from "../../../utils";

export function PokemonCard(props) {
  const { url } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [url]);

  if (!pokemon) return <ActivityIndicator color="red" />;

  return (
    <View style={[styles.container, styles.type(pokemon.types[0].type.name)]}>
      <View style={styles.containerBackgroundImage}>
        <Image
          source={require("../../../../assets/icons/pokeball.png")}
          style={styles.backgroundImagePokeBall}
        />
      </View>

      <Image
        source={{
          uri: pokemon.sprites.front_default,
        }}
        style={styles.pokeImage}
      />

      <Text style={styles.pokeName}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>

      <Text style={styles.pokeOrder}> #{pokemon.order}</Text>

      <View style={styles.badgeContainer}>
        {map(pokemon.types, (type) => {
          return (
            <View style={styles.pokeTypeBadge} key={type.type.name}>
              <Image
                source={getPokeIcon(type.type.name)}
                style={{ width: 25, height: 25, borderRadius: 5 }}
                resizeMode="cover"
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
