import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
export const MyReports = () => {
  return (
    <TouchableOpacity style={styles.myReportsContainer}>
      <Octicons name="report" size={24} color="white" />
      <Text style={{ color: "white", marginTop: 7, fontWeight: "bold" }}>
        Raporlarım
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  myReportsContainer: {
    flexDirection: "column",
    backgroundColor: "#32d7ed",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    height: 100,
  },
});
