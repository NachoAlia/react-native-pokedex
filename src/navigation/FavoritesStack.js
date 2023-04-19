import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { FavoritesScreen } from "../screens/Favorites/FavoritesScreen";
import { MyModal } from "../components";
import { View } from "react-native";
import { themeContext } from "../config/themeContext";
const Stack = createNativeStackNavigator();

export function FavoritesStack() {
  const theme = useContext(themeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoritesScreen}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
          headerRight: () => <MyModal />,
          headerLeft: () => <View style={{ width: 0, height: 0 }}></View>,
          headerStyle: { backgroundColor: theme.header },
          headerTitleStyle: { color: theme.color },
        }}
      />
    </Stack.Navigator>
  );
}
