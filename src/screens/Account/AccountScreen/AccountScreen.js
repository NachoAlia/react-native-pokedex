import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";

import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import Toast from "react-native-toast-message";

export function AccountScreen() {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        navigation.navigate(screen.account.login);
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error, no ha podido cerrarse sesion",
        });
      });
  };

  return (
    <View>
      <Button title="Cerrar sesion" onPress={handleSignOut} />
    </View>
  );
}
