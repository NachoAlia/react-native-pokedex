import React, { useState } from "react";
import { View } from "react-native";
import { Overlay, Icon, Avatar, Button } from "react-native-elements";

import { getAuth } from "firebase/auth";
import { InfoUser } from "../../Account/InfoUser";
import { ButtonLogout } from "../../Auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

import { styles } from "./MyModal.styles";

export function MyModal() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();

  const goToConfig = () => {
    setIsOverlayOpen(false);
    navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };
  return (
    <View style={{ alignContent: "center" }}>
      <Avatar
        size={40}
        rounded
        source={{ uri: auth.currentUser.photoURL }}
        onPress={() => setIsOverlayOpen(true)}
      ></Avatar>
      <Overlay
        isVisible={isOverlayOpen}
        transparent={true}
        onBackdropPress={() => setIsOverlayOpen(false)}
        overlayStyle={styles.overlayDropdown}
        backdropStyle={styles.backdrop}
      >
        <View style={styles.infoUserDropdown}>
          <InfoUser />
          <Icon
            type="material-community"
            name="close"
            color="#828282"
            onPress={() => setIsOverlayOpen(false)}
            containerStyle={{ position: "absolute", right: -10 }}
          />
        </View>

        <Button
          title="Configuracion"
          containerStyle={styles.containerBtnSettings}
          buttonStyle={styles.btnStyleSettings}
          titleStyle={styles.btnTitleStyleSettings}
          icon={
            <Icon
              type="material-community"
              name="cog"
              size={20}
              style={{ marginRight: 5 }}
              color={"#0275d8"}
            />
          }
          onPress={goToConfig}
        />
        <ButtonLogout
          title="Cerrar sesion"
          containerStyle={styles.containerBtnSignOut}
          buttonStyle={styles.btnStyleSignOut}
          titleStyle={styles.btnTitleStyleSignOut}
          icon={true}
        />
      </Overlay>
    </View>
  );
}
