import React from "react";
import { Overlay } from "react-native-elements";

export function Modal(props) {
  const { show, close, children } = props;

  return (
    <Overlay
      isVisible={show}
      onBackdropPress={close}
      overlayStyle={{
        height: "auto",
        width: "90%",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </Overlay>
  );
}
