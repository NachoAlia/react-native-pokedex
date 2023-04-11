import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { FavoritesScreen } from "../screens/Favorites/FavoritesScreen";
import { MyModal } from "../components";
import { View } from "react-native";
const Stack = createNativeStackNavigator();

export function FavoritesStack() {
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
        }}
      />
    </Stack.Navigator>
  );
}
