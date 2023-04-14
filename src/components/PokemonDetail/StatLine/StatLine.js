import React from "react";
import { View, Text } from "react-native";

export function StatLine(props) {
  const { number, color } = props;
  return (
    <View
      style={{
        width: number,
        maxWidth: 100,
        marginVertical: 8,
        height: 5,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: color,
      }}
    />
  );
}
