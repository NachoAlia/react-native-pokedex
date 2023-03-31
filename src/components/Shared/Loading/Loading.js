import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Image, Text } from "react-native-elements";
import { styles } from "./Loading.styles";

export function Loading() {
  return (
    <View style={styles.content}>
      <View style={styles.containerBackgroundImage}>
        <Image
          source={require("../../../../assets/icons/pokeball.png")}
          style={styles.bgPokeball}
        />
      </View>
      <Image
        style={styles.pokeImage}
        source={require("../../../../assets/Loadings/1.gif")}
      />
      <View style={styles.containerFooter}>
        <Text style={styles.textFooter}>Cargando</Text>
        <ActivityIndicator style={styles.indicator} />
      </View>
    </View>
  );
}
