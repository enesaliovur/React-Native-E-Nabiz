import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
export const UserLocation = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center",marginLeft:-4,marginTop:5}}>
      <Entypo name="location-pin" size={20} color="#c70039" />
      <Text style={{ color: "#c70039", fontSize: 15 }}>İSTANBUL</Text>
    </View>
  );
};
