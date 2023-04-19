import React, { useContext } from "react";
import { Overlay } from "react-native-elements";
import { themeContext } from "../../../config/themeContext";
export function Modal(props) {
  const { show, close, children } = props;
  const theme = useContext(themeContext);
  return (
    <Overlay
      isVisible={show}
      onBackdropPress={close}
      overlayStyle={{
        height: "auto",
        width: "90%",
        backgroundColor: theme.backgroundColor,
      }}
    >
      {children}
    </Overlay>
  );
}
