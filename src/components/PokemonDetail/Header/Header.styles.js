import { StyleSheet, Dimensions } from "react-native";
import { getPokeColor } from "../../../utils";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  content: {
    width: WIDTH,
    height: "50%",
    top: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  containerImage: {
    width: "100%",
    top: -50,
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
