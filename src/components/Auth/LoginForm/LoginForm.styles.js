import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    width: "95%",
    height: "auto",
    padding: 25,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    marginTop: 100,
  },
  formContainer: {},
  inputEmail: {
    marginTop: 10,
  },
  buttonContainerSignIn: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  buttonSignIn: {
    height: 45,
  },
  buttonTitleSignIn: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tcontainerGoogle: {
    flexDirection: "row",
    alignContent: "space-between",
    width: "95%",
    height: 45,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 3,
    alignSelf: "center",
  },
  textTContainerGoogle: {
    alignSelf: "center",
    marginTop: 5,
    marginLeft: 35,
    fontSize: 16,
    fontWeight: "bold",
    color: "#828282",
  },
  tcontainerFacebook: {
    flexDirection: "row",
    alignContent: "space-between",
    width: "95%",
    height: 45,
    marginTop: 10,
    backgroundColor: "#3b5998",
    borderRadius: 3,
    alignSelf: "center",
  },
  textTContainerFacebook: {
    alignSelf: "center",
    marginTop: 5,
    marginLeft: 40,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  textSignUp: {
    marginTop: 10,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#3B3939",
    fontSize: 16,
  },
  buttonSignUp: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3590FD",
    textDecorationLine: "underline",
  },
});
