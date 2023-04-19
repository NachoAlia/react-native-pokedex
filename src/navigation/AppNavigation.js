import React, { useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import { PokemonStack } from "./PokemonStack";
import { FavoritesStack } from "./FavoritesStack";
import { AccountStack } from "./AccountStack";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";
import { Modal } from "../components/Shared";
import { SearchPokemon } from "../components/Search";
import { themeContext } from "../config/themeContext";
const Tab = createBottomTabNavigator();

export function AppNavigation() {
  const theme = useContext(themeContext);
  const [showModalSearch, setShowModalSearch] = useState(false);
  const onCloseOpenModal = () => setShowModalSearch((prevState) => !prevState);
  return (
    <>
      <Modal show={showModalSearch} close={onCloseOpenModal}>
        <SearchPokemon onClose={onCloseOpenModal} />
      </Modal>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#646464",
          tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
          tabBarLabelPosition: "beside-icon",
          headerTitleContainerStyle: {
            alignSelf: "center",
          },
          tabBarStyle: { backgroundColor: theme.header },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name={screen.pokemons.tab}
          component={PokemonStack}
          options={{
            title: "Pokédex",

            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../../assets/icons/Poké_Ball_icon.svg.png")}
                style={{
                  width: 28,
                  height: 28,
                  backgroundColor: "transparent",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={screen.pokemons.search}
          component={SearchScreen}
          options={{
            tabBarButton: () => (
              <TouchableOpacity onPress={() => setShowModalSearch(true)}>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    bottom: 20,
                    borderWidth: 3,
                    borderColor: "red",
                  }}
                >
                  <Image
                    source={require("../../assets/icons/searchIcon.png")}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 40,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ),
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
    </>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === screen.pokemons.tab) {
    iconName = "pokeball";
  }
  if (route.name === screen.favorites.tab) {
    iconName = "heart";
    color = "#F472B6";
  }
  if (route.name === screen.account.tab) {
    iconName = "at";
  }
  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
