import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlayDropdown: {
    backgroundColor: "#fff",
    padding: 20,
    alignSelf: "flex-end",
    position: "absolute",
    top: 50,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    right: 5,
  },
  backdrop: {
    backgroundColor: "transparent",
  },
  infoUserDropdown: {
    flexDirection: "row",
    alignSelf: "center",
    top: 0,
    marginHorizontal: 5,
  },

  containerBtnSettings: {
    marginTop: 20,
    color: "blue",
    borderBottomColor: "#c2c2c2",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: "100%",
  },
  btnStyleSettings: {
    backgroundColor: "#fff",
  },
  btnTitleStyleSettings: {
    color: "#0275d8",
  },
  containerBtnSignOut: {
    marginTop: 0,
    left: -2,
    width: "100%",
    color: "blue",
    borderBottomColor: "#c2c2c2",
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
  },
  btnStyleSignOut: {
    backgroundColor: "#fff",
  },
  btnTitleStyleSignOut: {
    color: "#0275d8",
  },
});
