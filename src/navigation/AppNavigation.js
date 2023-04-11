import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View } from "react-native";
import { Icon } from "react-native-elements";
import { PokemonStack } from "./PokemonStack";
import { FavoritesStack } from "./FavoritesStack";
import { AccountStack } from "./AccountStack";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        tabBarLabelPosition: "beside-icon",
        headerTitleContainerStyle: {
          alignSelf: "center",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={screen.pokemons.tab}
        component={PokemonStack}
        options={{
          title: "Pokédex",
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{
          title: "Favoritos",
        }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{
          title: "Mi cuenta",
          tabBarButton: () => <View style={{ width: 0, height: 0 }}></View>,
        }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === screen.pokemons.tab) {
    iconName = "pokeball";
  }
  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  }
  if (route.name === screen.account.tab) {
    iconName = "at";
  }
  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
