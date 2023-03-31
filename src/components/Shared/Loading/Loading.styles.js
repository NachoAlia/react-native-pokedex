import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#3899F8",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBackgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bgPokeball: {
    resizeMode: "cover",
    width: 400,
    height: 400,
    opacity: 0.2,
  },
  pokeImage: {
    marginBottom: 50,
    resizeMode: "center",
    width: 150,
    height: 150,
  },
  containerFooter: {
    flexDirection: "row",
    position: "absolute",
    bottom: "15%",
  },
  textFooter: {
    marginLeft: 20,
    fontSize: 20,
    color: "#fff",
  },
  indicator: {
    marginTop: 8,
    marginLeft: 10,
  },
});
