import Normal from "../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Normal.png";

export const typesColors = {
  normal: "#D1D5DB",
  fighting: "#DC2626",
  flying: "#7C3AED",
  poison: "#A78BFA",
  ground: "#F59E0B",
  rock: "#FBBF24",
  bug: "#4ADE80",
  ghost: "#C084FC",
  steel: "#9CA3AF",
  fire: "#EF4444",
  water: "#60A5FA",
  grass: "#34D399",
  electric: "#FBBF24",
  psychic: "#F472B6",
  ice: "#A7F3D0",
  dragon: "#7C3AED",
  dark: "#1F2937",
  fairy: "#F472B6",
  unknown: "#6B7280",
  shadow: "#1F2937",
};

export const typesIcons = {
  normal: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Normal.png"),
  fighting: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Fighting.png"),
  flying: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Flying.png"),
  poison: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Poison.png"),
  ground: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Ground.png"),
  rock: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Rock.png"),
  bug: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Bug.png"),
  ghost: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Ghost.png"),
  steel: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Steel.png"),
  fire: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Fire.png"),
  water: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Water.png"),
  grass: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Grass.png"),
  electric: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Electric.png"),
  psychic: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Psychic.png"),
  ice: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Ice.png"),
  dragon: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Dragon.png"),
  dark: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Dark.png"),
  fairy: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Fairy.png"),
  unknown: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Normal.png"),
  shadow: require("../../assets/icons/pokemon_type_icons/Pokemon_Type_Icon_Ghost.png"),

  // normal: "circle-outline",
  // fighting: "boxing-glove",
  // flying: "feather",
  // poison: "skull-crossbones",
  // ground: "terrain",
  // rock: "rock-outline",
  // bug: "bug",
  // ghost: "ghost",
  // steel: "toolbox",
  // fire: "fire",
  // water: "water",
  // grass: "leaf",
  // electric: "flash",
  // psychic: "brain",
  // ice: "snowflake",
  // dragon: "dragon-head",
  // dark: "moon-waning-crescent",
  // fairy: "flower",
  // unknown: "help-circle",
  // shadow: "ghost",
};

export function getPokeColor(type) {
  return typesColors[type];
}
export function getPokeIcon(type) {
  return typesIcons[type];
}

export function getBackgroundTypeColor(color) {
  const amount = 1000; // cantidad de puntos que se restarán

  const r = parseInt(color.slice(1, 3), 16) - amount;
  const g = parseInt(color.slice(3, 5), 16) - amount;
  const b = parseInt(color.slice(5, 7), 16) - amount;

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
