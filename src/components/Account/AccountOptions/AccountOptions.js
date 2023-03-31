import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { Modal } from "../../Shared";
import { ChangeDisplayNameForm } from "../ChangeDisplayNameForm";
import { ChangeEmailForm } from "../ChangeEmailForm";
import { ChangePasswordForm } from "../ChangePasswordForm";

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
  ];
}
