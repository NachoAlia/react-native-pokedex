import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";
import { RegisterForm } from "../../../components/Auth";
import { styles } from "./RegisterScreen.styles";
export function RegisterScreen() {
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
          top: 80,
        }}
      />
      <RegisterForm />
    </View>
  );
}
