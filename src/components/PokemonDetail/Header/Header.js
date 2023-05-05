import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Header.styles";
import { Image, Icon, Button, Tooltip } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { formattedIndex, screen } from "../../../utils";
import { map } from "lodash";
import { getPokeIcon } from "../../../utils";
export function Header(props) {
  const { pokemon, setPokemon } = props;
  const navigation = useNavigation();
  const handleGoBack = () => {
    setPokemon(null);
    navigation.navigate(screen.pokemons.tab, {
      screen: screen.pokemons.pokemons,
    });
  };
  return (
    <View
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "50%",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <Icon
            type="material-community"
            name="arrow-left"
            size={35}
            color="#fff"
            onPress={handleGoBack}
            style={{ marginTop: 2, marginRight: 10, marginLeft: -5 }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "left",
            }}
          >
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </Text>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <Text
            style={{
              top: 5,
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "right",
              right: 35,
              backgroundColor: "rgba(245, 236, 235, 0.4)",
              borderRadius: 5,
            }}
          >
            {formattedIndex(pokemon.id)}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        {map(pokemon.types, (type) => {
          return (
            <TouchableOpacity key={type.type.name}>
              <Tooltip
                withOverlay={false}
                key={pokemon.name + type.type.name}
                popover={
                  <Text style={{ color: "#fff" }}>{type.type.name}</Text>
                }
              >
                <View style={{ marginLeft: 5 }} key={type.type.name}>
                  <Image
                    source={getPokeIcon(type.type.name)}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 30,
                      borderColor: "orange",
                      borderWidth: 0.5,
                    }}
                    scale={0.3}
                    resizeMode="cover"
                  />
                </View>
              </Tooltip>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
