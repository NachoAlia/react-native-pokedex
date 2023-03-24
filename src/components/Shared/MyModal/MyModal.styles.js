import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlayDropdown: {
    backgroundColor: "#fff",
    padding: 20,
    alignSelf: "flex-end",
    position: "absolute",
    top: 50,
    borderRadius: 20,
    borderColor: "red",
    borderWidth: 1,
  },
  backdrop: {
    backgroundColor: "transparent",
  },
  infoUserDropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
  },

  containerBtnSettings: {
    marginTop: 20,
  },
});
