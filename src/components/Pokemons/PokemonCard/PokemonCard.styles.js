import { StyleSheet, Dimensions } from "react-native";
import { getPokeColor } from "../../../utils";
const WIDTH = Dimensions.get("window").width;
const cardWidth = WIDTH / 4;

export const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: -5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBackgroundImage: {
    flex: 1,
    resizeMode: "contain",
    top: 10,
    width: "100%",
    position: "absolute",
  },
  backgroundImagePokeBall: {
    flex: 1,
    resizeMode: "cover",
    width: 140,
    height: 130,
    opacity: 0.3,
  },
  pokeImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginTop: 10,
  },

  pokeName: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 5,
  },
  pokeOrder: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "#fff",
    backgroundColor: "rgba(245, 236, 235, 0.3)",
    borderRadius: 4,
  },

  pokeTypeBadge: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderBottomColor: "#828282",
    borderLeftColor: "#828282",
    borderLeftWidth: 0.2,
    borderBottomWidth: 0.2,
    marginHorizontal: 3,
  },
  badgeContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    position: "absolute",
    bottom: -10,
  },

  type: (type) => ({
    backgroundColor: getPokeColor(type),
    background: "linear-gradient(to bottom, #4FACFE, #00F2FE)",
  }),
});
