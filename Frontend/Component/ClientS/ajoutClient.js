import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Liste from "../ClientS/ClientsList";
import FormAjoutClients from "../ClientS/FormAjoutClients";
import { MaterialIcons } from '@expo/vector-icons'; 
import { StripeProvider } from "@stripe/stripe-react-native";
import { removeSelectedClients } from "../../features/ClientsSlice";
import { useDispatch , useSelector } from "react-redux";

const Ajouter = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          removeSelectedClients()
        }} 
      >
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View > 
                  <FormAjoutClients/>
                    </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible);dispatch(removeSelectedClients())}}
              
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
        </ScrollView>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add Client</Text>
      </Pressable>
      <View> 
    
              <Liste/>
          </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  /// model d ajout client
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 4
  },
  buttonOpen: {
    marginTop:40,
    width: 150,
    margin: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#465bd8",
  },
  buttonClose: {
    width: 150,
    height: 50,
    marginTop:-50,
    borderRadius: 15,
    backgroundColor: "#465bd8",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

});

  export default Ajouter ;