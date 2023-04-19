import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const numColumns = 3;
const cardWidth = width / numColumns;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  columnWrapperStyle: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    width: cardWidth,
  },
  list: {
    backgroundColor: "transparent",
  },
});
