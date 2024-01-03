import React from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
function AjoutBond({ navigation }) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
          title="Ajouter"
          onPress={() => navigation.navigate("Ajouter_Bond_Commande")}
        ></Button> ),
      });
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        {/* MODAL */}
        {/* PAGE CONTENT */}
        <Text>Liste Bond</Text>
        <StatusBar style="auto" />
        <Button
          title="Liste"
          onPress={() => navigation.navigate("Ajouter_Bond_Commande")}
        ></Button>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    "modal-container": {
      flex: 1,
      alignItems: "center",
      borderRadius: 18,
    },
   
  });
  
  export default AjoutBond ;