import React, { useState } from "react";
import { View } from "react-native";
import { Button, Image } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";
import { useNavigation } from "@react-navigation/native";
import { InfoUser, AccountOptions } from "../../../components";
import { ButtonLogout } from "../../../components";
import { getAuth, signOut } from "firebase/auth";
import { screen } from "../../../utils";
import { styles } from "./AccountScreen.styles";
import Toast from "react-native-toast-message";

export function AccountScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);

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
      <InfoUser />
      <AccountOptions onReload={onReload} />
    </View>
  );
}
