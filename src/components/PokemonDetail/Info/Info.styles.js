import { StyleSheet, Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  content: {
    width: WIDTH - 20,
    height: "100%",
    top: "40%",
    position: "absolute",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  containerImage: {
    width: "100%",
    top: -160,
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  pokeImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
