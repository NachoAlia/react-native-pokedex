import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { AppStack } from "./src/navigation/AppStack";
import { initFirebase } from "./src/utils";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      <Toast />
    </>
  );
}
