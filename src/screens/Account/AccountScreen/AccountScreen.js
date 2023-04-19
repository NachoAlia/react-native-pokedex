import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Button, Image } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";
import { useNavigation } from "@react-navigation/native";
import { InfoUser, AccountOptions } from "../../../components";
import { ButtonLogout } from "../../../components";
import { getAuth, signOut } from "firebase/auth";
import { screen } from "../../../utils";
import { styles } from "./AccountScreen.styles";
import { themeContext } from "../../../config/themeContext";
import Toast from "react-native-toast-message";

export function AccountScreen() {
  const theme = useContext(themeContext);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);

  return (
    <View
      style={[
        styles.content,
        { backgroundColor: theme.backgroundColor, color: theme.color },
      ]}
    >
      <InfoUser />
      <AccountOptions onReload={onReload} />
    </View>
  );
}
