import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
export const BloodDonation = () => {
  return (
    <TouchableOpacity style={styles.bloodDonationContainer}>
      <Fontisto name="blood-drop" size={24} color="white" />
      <Text style={{color:"white",marginTop:7,fontWeight:"bold"}}>Kan Bağışı</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  bloodDonationContainer: {
    flexDirection: "column",
    backgroundColor: "#c70030",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flex: 1,
    marginHorizontal:10,
    height:100

   
  },
});
