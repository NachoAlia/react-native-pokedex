import { StyleSheet, Dimensions } from "react-native";

import { getPokeColor } from "../../../utils";
const WIDTH = Dimensions.get("window").width;
const cardWidth = WIDTH / 4;

export const styles = StyleSheet.create({
  container: {
    width: cardWidth - 5,
    height: 170,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#000",
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  pokeImage: {
    maxWidth: 80,
    maxHeight: 80,
    marginTop: 10,
  },
  pokeName: {
    fontSize: 15,
    width: 80,
    height: 20,
    marginTop: 5,
  },
  pokeOrder: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  badgeContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    position: "absolute",
    bottom: -10,
  },
  pokeTypeBadge: {
    marginHorizontal: 3,
    borderRadius: 20,
  },
});
