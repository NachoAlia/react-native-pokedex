import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./PokemonCardSkeleton.styles";
import "react-native-reanimated";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { themeContext } from "../../../config/themeContext";
export function PokemonCardSkeleton() {
  const theme = useContext(themeContext);
  return (
    <MotiView
      transition={{
        type: "spring",
      }}
    >
      <View style={[styles.container, { backgroundColor: "transparent" }]}>
        <View style={styles.pokeOrder}>
          <Skeleton
            transition={{
              translateX: {
                // defaults to a 3000ms timing function
                type: "spring",
              },
            }}
            colorMode={theme.mode}
            width={40}
            height={20}
          />
        </View>
        <View style={styles.pokeImage}>
          <Skeleton
            transition={{
              translateX: {
                // defaults to a 3000ms timing function
                type: "spring",
              },
            }}
            colorMode={theme.mode}
            width={"100%"}
            height={styles.pokeImage.maxHeight}
          />
        </View>
        <View style={styles.pokeName}>
          <Skeleton
            transition={{
              translateX: {
                // defaults to a 3000ms timing function
                type: "spring",
              },
            }}
            colorMode={theme.mode}
            width={"100%"}
            height={styles.pokeName.height}
          />
        </View>
        <View style={styles.badgeContainer}>
          <View style={styles.pokeTypeBadge}>
            <Skeleton
              transition={{
                translateX: {
                  // defaults to a 3000ms timing function
                  type: "spring",
                },
              }}
              colorMode={theme.mode}
              width={27}
              height={27}
              radius={16}
            />
          </View>
          <View style={styles.pokeTypeBadge}>
            <Skeleton
              transition={{
                translateX: {
                  // defaults to a 3000ms timing function
                  type: "spring",
                },
              }}
              colorMode={theme.mode}
              width={27}
              radius={16}
              height={27}
            />
          </View>
        </View>
      </View>
    </MotiView>
  );
}
