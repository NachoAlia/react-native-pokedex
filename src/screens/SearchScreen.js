import React from "react";
import { View, Text } from "react-native";
import { Modal } from "../components/Shared";
export function SearchScreen() {
  return (
    <View>
      <Modal show={true} close={false}>
        <Text>Hola</Text>
      </Modal>
    </View>
  );
}
