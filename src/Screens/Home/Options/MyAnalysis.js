import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const MyAnalysis = () => {
  return (
    <TouchableOpacity style={styles.myAnalysisContainer}>
      <MaterialCommunityIcons name="google-analytics" size={24} color="white" />
      <Text style={{color:"white",marginTop:7,fontWeight:"bold"}}>Analizlerim</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  myAnalysisContainer: {
    flexDirection: "column",
    backgroundColor: "#fbbc05",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    height: 100,
  },
});
