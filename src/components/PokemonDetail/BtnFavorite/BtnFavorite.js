import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { getAuth } from "firebase/auth";
import { size } from "lodash";
import { db } from "../../../utils";
import {
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  where,
  deleteDoc,
  limit,
} from "firebase/firestore";

import Toast from "react-native-toast-message";
export function BtnFavorite(props) {
  const { idPokemon } = props;
  const [favorite, setFavorite] = useState(null);
  const [isReload, setIsReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (auth.currentUser) {
        const response = await getFavorites();
        if (size(response) > 0) {
          setFavorite(true);
        } else {
          setFavorite(false);
        }
      }
    })();
    setIsLoading(false);
  }, [idPokemon, isReload]);

  const getFavorites = async () => {
    setIsLoading(true);
    const q = query(
      collection(db, "favorites"),
      where("idPokemon", "==", idPokemon),
      where("idUser", "==", auth.currentUser.uid),
      limit(1)
    );

    const result = await getDocs(q);
    setIsLoading(false);
    return result.docs[0];
  };

  const addFavorite = async () => {
    setIsLoading(true);
    try {
      const idFavorite = uuid();
      const data = {
        id: idFavorite,
        idPokemon: idPokemon,
        idUser: auth.currentUser.uid,
      };
      await setDoc(doc(db, "favorites", data.id), data);
      setIsReload((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const removeFavorite = async () => {
    setIsLoading(true);
    try {
      const response = await getFavorites();

      await deleteDoc(doc(db, "favorites", response.id));

      setIsReload((prevState) => !prevState);
    } catch (error) {
      onReload();
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error al eliminar de favoritos, Intentelo mas tarde",
      });
      console.log(error);
    }
    setIsLoading(false);
  };

  if (isLoading) return <ActivityIndicator size={35} />;

  return (
    <View>
      <Icon
        type="material-community"
        name={!favorite ? "heart-outline" : "heart"}
        color={favorite ? "#f00" : "#000"}
        size={35}
        onPress={!favorite ? addFavorite : removeFavorite}
      />
    </View>
  );
}
