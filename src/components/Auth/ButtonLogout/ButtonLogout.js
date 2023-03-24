import React from "react";
import { Button, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { screen } from "../../../utils";

export function ButtonLogout(props) {
  const { title, containerStyle, buttonStyle } = props;

  const navigation = useNavigation();

  const signOutUser = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.navigate(screen.account.login);
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: String(error),
        });
      });
  };

  return (
    <Button
      title={title}
      containerStyle={containerStyle}
      buttonStyle={buttonStyle}
      onPress={signOutUser}
    />
  );
}
