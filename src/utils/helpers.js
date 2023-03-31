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
  normal: "circle-outline",
  fighting: "boxing-glove",
  flying: "feather",
  poison: "skull-crossbones",
  ground: "terrain",
  rock: "rock-outline",
  bug: "bug",
  ghost: "ghost",
  steel: "toolbox",
  fire: "fire",
  water: "water",
  grass: "leaf",
  electric: "flash",
  psychic: "brain",
  ice: "snowflake",
  dragon: "dragon-head",
  dark: "moon-waning-crescent",
  fairy: "flower",
  unknown: "help-circle",
  shadow: "ghost",
  // normal: "far fa-circle",
  // fighting: "fas fa-boxing-glove",
  // flying: "fas fa-feather",
  // poison: "fas fa-skull-crossbones",
  // ground: "fas fa-mountain",
  // rock: "fas fa-mountain",
  // bug: "fas fa-bug",
  // ghost: "fas fa-ghost",
  // steel: "fas fa-toolbox",
  // fire: "fas fa-fire",
  // water: "fas fa-water",
  // grass: "fas fa-leaf",
  // electric: "fas fa-bolt",
  // psychic: "fas fa-brain",
  // ice: "fas fa-snowflake",
  // dragon: "fas fa-dragon",
  // dark: "fas fa-moon",
  // fairy: "fas fa-flower",
  // unknown: "fas fa-question-circle",
  // shadow: "fas fa-ghost",
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
