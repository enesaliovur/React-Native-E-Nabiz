import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { UserImage } from "./UserImage";
import { Username } from "./Username";
import { UserLocation } from "./UserLocation";
export const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <Username />
        <UserLocation />
      </View>
      <UserImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
   
  },
  columnContainer: {
    flexDirection: "column",
    flex: 8,
  },
});
