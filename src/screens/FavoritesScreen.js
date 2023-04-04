import React from "react";
import { View, Text } from "react-native";

export function FavoritesScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 18 }}>
        Aun no tienes ningun favorito en tu lista
      </Text>
    </View>
  );
}
