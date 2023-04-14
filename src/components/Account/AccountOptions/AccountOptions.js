import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { Modal } from "../../Shared";
import { ChangeDisplayNameForm } from "../ChangeDisplayNameForm";
import { ChangeEmailForm } from "../ChangeEmailForm";
import { ChangePasswordForm } from "../ChangePasswordForm";
import { getAuth, signOut } from "firebase/auth";

export function AccountOptions(props) {
  const { onReload } = props;

  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);
  const selectedComponent = (key) => {
    if (key === "displayName") {
      setRenderComponent(
        <ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />
      );
      setShowModal(true);
    }
    if (key === "email") {
      setRenderComponent(
        <ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />
      );
      setShowModal(true);
    }
    if (key === "password") {
      setRenderComponent(
        <ChangePasswordForm onClose={onCloseOpenModal} onReload={onReload} />
      );
      setShowModal(true);
    }
    if (key === "signOut") {
      setRenderComponent(null);
    }
  };
  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);
  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View style={{ marginTop: 20 }}>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <Text>{menu.title}</Text>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
  return [
    {
      title: "Cambiar nombre",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("email"),
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("password"),
    },
    {
      title: "Cerrar sesion",
      iconType: "material-community",
      iconNameLeft: "power",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        handleSignOut();
      },
    },
  ];

  function handleSignOut() {
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
    signOutUser();
  }
}
