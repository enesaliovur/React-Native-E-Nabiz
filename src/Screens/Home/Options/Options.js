import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BloodDonation } from "./BloodDonation";
import { MyAnalysis } from "./MyAnalysis";
import { MyDiseases } from "./MyDiseases";
import { MyReports } from "./MyReports";
import { OptionsTitle } from "./OptionsTitle";

export const Options = () => {
  return (
    <View>
      <OptionsTitle/>
      <View style={styles.optionContainer}>
        <View style={{ flexDirection: "row" }}>
          <BloodDonation />
          <MyAnalysis />
        </View>
        <View style={{ flexDirection: "row" ,marginTop: 20}}>
          <MyReports />
          <MyDiseases />

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "column",
    marginHorizontal: 20,
  },
});
