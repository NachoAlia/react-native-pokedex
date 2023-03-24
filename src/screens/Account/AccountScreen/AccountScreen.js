import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

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
      <InfoUser />
      <AccountOptions onReload={onReload} />
      <ButtonLogout title="Cerrar sesion" containerStyle={{ marginTop: 5 }} />
    </View>
  );
}
