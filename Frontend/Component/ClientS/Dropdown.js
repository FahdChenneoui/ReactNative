import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";
export default function Dropdown () {
    return (
      <View style={styles.container}>
      <RNPickerSelect
          placeholder={{ label: "Select state", value: null }}
          onValueChange={(value) => console.log(value)}
          items={[
              { label: "Sfax", value: "Sfax" },
              { label: "Tunis", value: "Tunis" },
              { label: "Sousse", value: "Sousse" },
              { label: "Hammamet", value: "Hammamet" },
          ]}
      />
    </View>
)}
const styles = StyleSheet.create({
    container : {
        flex            : 1,
        backgroundColor : "#fff",
        alignItems      : "center",
        justifyContent  : "center",
    },
});