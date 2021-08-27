import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
export const MyDiseases = () => {
  return (
    <TouchableOpacity style={styles.myDiseasesContainer}>
    <Feather name="heart" size={24} color="white" />
      <Text style={{color:"white",marginTop:7,fontWeight:"bold"}}>Hastalıklarım</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    myDiseasesContainer: {
    flexDirection: "column",
    backgroundColor: "#7278fc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flex: 1,
    marginHorizontal:10,
    height:100
  },
});
