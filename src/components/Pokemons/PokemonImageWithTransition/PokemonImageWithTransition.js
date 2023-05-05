import React from "react";
import "react-native-reanimated";
import { StyleSheet } from "react-native";
import { MotiView, MotiImage } from "moti";

export const PokemonImageWithTransition = ({
  stylesImage,
  apiUrl,
  sourceImage,
  delayImage,
  durationImage,
}) => {
  const stylesPokeImage = stylesImage;
  const delayImagePokemon = delayImage;
  const durationImagePokemon = durationImage;
  const onApiImageLoad = () => {
    setTimeout(() => {}, 500);
  };

  return (
    <MotiView>
      <MotiImage
        source={!sourceImage ? { uri: apiUrl } : sourceImage}
        onLoad={onApiImageLoad}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={[stylesPokeImage, { scale: 0.1 }]}
        transition={{
          type: "timing",
          duration: !durationImagePokemon ? 500 : durationImagePokemon,
          delay: !delayImagePokemon ? 200 : delayImagePokemon,
        }}
      />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
