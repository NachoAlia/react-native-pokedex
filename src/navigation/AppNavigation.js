import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { PokemonsScreen } from "../screens/PokemonsScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { SearchScreen } from "../screens/SearchScreen";
const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        tabBarLabelPosition: "beside-icon",
      })}
    >
      <Tab.Screen name="Pokemons" component={PokemonsScreen} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      <Tab.Screen name="Mi cuenta" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === "Pokemons") {
    iconName = "pokeball";
  }
  if (route.name === "Favoritos") {
    iconName = "heart-outline";
  }
  if (route.name === "Mi cuenta") {
    iconName = "at";
  }
  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
