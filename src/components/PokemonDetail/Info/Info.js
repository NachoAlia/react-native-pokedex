import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Image, Icon } from "react-native-elements";
import { styles } from "./Info.styles";
import { StatLine } from "../StatLine";
import { getPokeColor } from "../../../utils";
import { BtnFavorite } from "../BtnFavorite";
import { themeContext } from "../../../config/themeContext";
export function Info(props) {
  const theme = useContext(themeContext);
  const { pokemon, pokemonUrl } = props;
  const color = getPokeColor(pokemon.types[0].type.name);
  const getValue = (statName) => {
    const stat = pokemon.stats.find((stat) => stat.stat.name === statName);
    return stat.base_stat;
  };

  return (
    <View style={[styles.content, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: pokemon.sprites.other["official-artwork"].front_default,
          }}
          style={styles.pokeImage}
        />
      </View>
      <View style={{ top: 15, right: 20, position: "absolute" }}>
        <BtnFavorite idPokemon={pokemonUrl} />
      </View>
      <View style={{ top: 40 }}>
        <Text style={{ fontWeight: "bold", color: theme.color }}>
          Información
        </Text>
      </View>
      <View style={{ top: 60, left: 0 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: theme.color }}>
              ⚖️{" "}
              {pokemon.weight
                .toString()
                .slice(0, pokemon.weight.toString().length - 1)}
              {"."}
              {pokemon.weight
                .toString()
                .slice(
                  pokemon.weight.toString().length - 1,
                  pokemon.weight.toString().length
                )}{" "}
              Kg
            </Text>
            <Text style={{ marginTop: 5, color: "#828282" }}>Peso</Text>
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Text style={{ fontSize: 12, color: theme.color }}>
              📏 {pokemon.height / 10} m
            </Text>
            <Text style={{ marginTop: 5, color: "#828282" }}>Altura</Text>
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Text style={{ fontSize: 12, color: theme.color }}>
              ⭐{" "}
              {pokemon.abilities[0].ability.name[0].toUpperCase() +
                pokemon.abilities[0].ability.name.slice(1)}
            </Text>
            <Text style={{ marginTop: 5, color: "#828282" }}>Habilidad</Text>
          </View>
        </View>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", color: theme.color }}>
            Estadísticas
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginHorizontal: 30,
              marginTop: 30,
              right: 15,
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                marginLeft: 10,
              }}
            >
              <Text style={{ color: theme.color }}>HP</Text>
              <Text style={{ color: theme.color }}>Attack</Text>
              <Text style={{ color: theme.color }}>Defense</Text>
              <Text style={{ color: theme.color }}>Special Attack</Text>
              <Text style={{ color: theme.color }}>Special Defence</Text>
              <Text style={{ color: theme.color }}>Speed</Text>
            </View>
            <View
              style={{
                height: 130,
                width: 1,
                backgroundColor: "#828282",
                marginLeft: 10,
                flexDirection: "column",
              }}
            />
            <View style={{ alignItems: "flex-end", marginLeft: 10 }}>
              <Text style={{ color: theme.color }}>{getValue("hp")}</Text>
              <Text style={{ color: theme.color }}>{getValue("attack")}</Text>
              <Text style={{ color: theme.color }}>{getValue("defense")}</Text>
              <Text style={{ color: theme.color }}>
                {getValue("special-attack")}
              </Text>
              <Text style={{ color: theme.color }}>
                {getValue("special-defense")}
              </Text>
              <Text style={{ color: theme.color }}>{getValue("speed")}</Text>
            </View>
            <View style={{ marginTop: 3 }}>
              <StatLine number={getValue("hp")} color={color} />
              <StatLine number={getValue("attack")} color={color} />
              <StatLine number={getValue("defense")} color={color} />
              <StatLine number={getValue("special-attack")} color={color} />
              <StatLine number={getValue("special-defense")} color={color} />
              <StatLine number={getValue("speed")} color={color} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
