import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { LoginScreen, RegisterScreen } from "../screens/Account";
import { AppNavigation } from "../navigation/AppNavigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Loading } from "../components";
const Stack = createNativeStackNavigator();

export function AppStack() {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  if (hasLogged === null) return <Loading />;

  return (
    <Stack.Navigator
      initialRouteName={screen.account.login}
      screenOptions={{
        headerTintColor: "white",
      }}
    >
      {!hasLogged ? (
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
      ) : (
        <Stack.Screen
          name={screen.account.index}
          component={AppNavigation}
          options={{
            headerShown: false,
          }}
        />
      )}
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
