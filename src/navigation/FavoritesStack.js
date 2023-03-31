import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { MyModal } from "../components";
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
        }}
      />
    </Stack.Navigator>
  );
}
