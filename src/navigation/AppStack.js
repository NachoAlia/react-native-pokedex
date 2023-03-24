import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { LoginScreen, RegisterScreen } from "../screens/Account";
import { AppNavigation } from "../navigation/AppNavigation";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={screen.account.login}
      screenOptions={{
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{
          headerTransparent: true,
          title: "Iniciar Sesion",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
            marginBottom: 10,
            fontSize: 20,
          },
        }}
      />

      <Stack.Screen
        name={screen.account.index}
        component={AppNavigation}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{
          title: "Registrarse",
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white", marginBottom: 10, fontSize: 20 },
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}
