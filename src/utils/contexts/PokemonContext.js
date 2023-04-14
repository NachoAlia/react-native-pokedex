import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export function PokemonProvider(props) {
  const { children } = props;
  const [pokemon, setPokemon] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=386&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  return (
    <PokemonContext.Provider
      value={{ pokemon, setPokemon, favorites, setFavorites }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
