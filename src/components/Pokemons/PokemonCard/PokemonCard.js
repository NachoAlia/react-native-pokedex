import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";
import { styles } from "./PokemonCard.styles";
import { map } from "lodash";
import { getPokeIcon } from "../../../utils";
import { formattedIndex } from "../../../utils";
import { PokemonImageWithTransition } from "../PokemonImageWithTransition";
import { MotiView } from "moti";

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

  if (!pokemon) return null;

  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ width: "100%" }}
      transition={{ type: "timing", delay: 1000, duration: 500 }}
    >
      <View style={[styles.container, styles.type(pokemon.types[0].type.name)]}>
        <View style={styles.containerBackgroundImage}>
          <Image
            source={require("../../../../assets/icons/pokeball.png")}
            style={styles.backgroundImagePokeBall}
            scale={0.1}
          />
        </View>
        <PokemonImageWithTransition
          stylesImage={styles.pokeImage}
          apiUrl={pokemon.sprites.front_default}
        />

        <Text style={styles.pokeName}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Text>
        <Text style={styles.pokeOrder}> {formattedIndex(pokemon.id)}</Text>
        <View style={styles.badgeContainer}>
          {map(pokemon.types, (type) => {
            return (
              <View style={styles.pokeTypeBadge} key={type.type.name}>
                <PokemonImageWithTransition
                  stylesImage={{ width: 25, height: 25, borderRadius: 5 }}
                  sourceImage={getPokeIcon(type.type.name)}
                  delay={100}
                  duration={100}
                />
              </View>
            );
          })}
        </View>
      </View>
    </MotiView>
  );
}
