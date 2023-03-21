import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";
import { LoginForm } from "../../../components";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  return (
    <View style={styles.content}>
      <BackgroundImage
        source={require("../../../../assets/backgrounds/11.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <Image
        source={require("../../../../assets/backgrounds/15.png")}
        style={{
          resizeMode: "contain",
          width: "100%",
          height: 200,
          opacity: 1.0,
          position: "absolute",
          top: 70,
        }}
      />

      <LoginForm />
    </View>
  );
}
