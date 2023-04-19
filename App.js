import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { AppStack } from "./src/navigation/AppStack";
import { initFirebase } from "./src/utils";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";
import { PokemonProvider } from "./src/utils/contexts/PokemonContext";
import { EventRegister } from "react-native-event-listeners";
import { theme } from "./src/config/theme";
import { themeContext } from "./src/config/themeContext";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs();

export default function App() {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => EventRegister.removeEventListener(eventListener);
  }, []);

  return (
    <>
      <themeContext.Provider value={mode == false ? theme.dark : theme.light}>
        <StatusBar backgroundColor={"#EAE8E8"} translucent />
        <NavigationContainer>
          <PokemonProvider>
            <AppStack />
          </PokemonProvider>
        </NavigationContainer>
        <Toast />
      </themeContext.Provider>
    </>
  );
}
