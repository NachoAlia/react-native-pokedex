import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { PokemonsScreen } from "../screens/Pokemons/PokemonsScreen";
const Stack = createNativeStackNavigator();

export function PokemonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.pokemons.pokemons}
        component={PokemonsScreen}
        options={{
          title: "Pokemons",
        }}
      />
    </Stack.Navigator>
  );
}
