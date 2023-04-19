import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { Switch } from "react-native-elements";
import { styles } from "./ChangeColorTheme.styles";
import { EventRegister } from "react-native-event-listeners";
import { themeContext } from "../../../config/themeContext";

export function ChangeColorTheme() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);

  const enableDarkMode = () => {
    setMode(true);
  };
  const disableDarkMode = () => {
    setMode(false);
  };

  return (
    <View style={styles.content}>
      <Switch
        value={mode}
        onValueChange={() => {
          mode ? disableDarkMode() : enableDarkMode();
          EventRegister.emit("changeTheme", mode);
        }}
        color="red"
      />
    </View>
  );
}
