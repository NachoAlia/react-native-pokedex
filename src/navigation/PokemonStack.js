import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { PokemonsScreen } from "../screens/Pokemons/PokemonsScreen/PokemonsScreen";
import { PokemonDetailScreen } from "../screens/Pokemons/PokemonDetailScreen";
import { Button } from "react-native-elements";
import { MyModal } from "../components";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export function PokemonStack() {
  return (
    <Stack.Navigator screenOptions={{ headerBackButtonMenuEnabled: false }}>
      <Stack.Screen
        name={screen.pokemons.pokemons}
        component={PokemonsScreen}
        options={{
          title: "Pokédex",
          headerTitleAlign: "center",
          headerRight: () => <MyModal />,
          headerLeft: () => <View style={{ width: 0, height: 0 }}></View>,
        }}
      />
      <Stack.Screen
        name={screen.pokemons.pokemon}
        component={PokemonDetailScreen}
        options={{
          title: "Pokemón",
          headerTitleAlign: "center",
          headerRight: () => <MyModal />,
          headerLeft: () => <View style={{ width: 0, height: 0 }}></View>,
        }}
      />
    </Stack.Navigator>
  );
}
