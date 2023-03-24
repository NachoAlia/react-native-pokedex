import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { PokemonsScreen } from "../screens/Pokemons/PokemonsScreen";
import { Button } from "react-native-elements";
import { MyModal } from "../components";

const Stack = createNativeStackNavigator();

export function PokemonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.pokemons.pokemons}
        component={PokemonsScreen}
        options={{
          title: "Pokemons",
          headerTitleAlign: "center",
          headerRight: () => <MyModal />,
        }}
      />
    </Stack.Navigator>
  );
}
