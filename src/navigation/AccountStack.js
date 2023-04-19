import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { AccountScreen } from "../screens/Account";
import { useContext } from "react";
import { themeContext } from "../config/themeContext";
const Stack = createNativeStackNavigator();

export function AccountStack() {
  const theme = useContext(themeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{
          title: "Mi cuenta",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: theme.header },
          headerTitleStyle: { color: theme.color },
        }}
      />
    </Stack.Navigator>
  );
}
