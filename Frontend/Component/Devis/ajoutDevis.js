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


function AjouterDevis({ navigation }) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
          title="Ajouter"
          onPress={() => navigation.navigate("Ajouter_Devis")}
        ></Button>        ),
      });
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        {/* MODAL */}
        {/* PAGE CONTENT */}
        <Text>Liste Devis</Text>
        <StatusBar style="auto" />
        <Button
          title="ListeDevis"
          onPress={() => navigation.navigate("Ajouter_Devis")}
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
  
  export default AjouterDevis ;