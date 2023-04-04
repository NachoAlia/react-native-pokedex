import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Header.styles";
import { Image, Icon } from "react-native-elements";
export function Header(props) {
  const { pokemon } = props;

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
        <View style={{ width: "50%", alignItems: "flex-start" }}>
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
            #{pokemon.order}
          </Text>
        </View>
      </View>
    </View>
  );
}
