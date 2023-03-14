import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import { LoginScreen, RegisterScreen } from "../screens/Account";
import { AppNavigation } from "../navigation/AppNavigation";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName={screen.account.login}>
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{
          title: "Iniciar Sesion",
        }}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{
          title: "Registrarse",
        }}
      />
      <Stack.Screen
        name={screen.account.index}
        component={AppNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
