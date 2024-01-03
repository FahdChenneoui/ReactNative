import React, { useState, useContext } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, Switch, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import photo from '../assets/photo.png';

import { EventRegister } from "react-native-event-listeners";

export default function ProfileScreen({ navigation }) {
  const MY_TEXT = 'About&Us';


  return (
    <SafeAreaView>
      <View style={globalStyles.view}>
        <Image source={require('../assets/Ploysoft.png')} style={{
          width: "100%",
          height: 200,
          borderRadius: 15,
          marginTop: 10,
        }}></Image>

        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          paddingTop: 15,
          paddingBottom: 20,
          textAlign: "center"
        }}>{MY_TEXT}</Text>


        <Text style={{
          textAlign: 'center',
          paddingBottom: 50,

        }}>
          Polysoft&Co est une Start Up Tunisienne basée à Sfax et créée en Fevrier 2019 specialisée dans le developpement de solutions informatiques orientées vers l'entreprise.
          Nous croyons que chacun de nos produits doit evoluer et s'adapter aux besoins de notre clientéle afin de garantir leure satisfaction.
          Toujours soucieux de cet objectif, nos efforts ne cesseront pas de s'adapter face à un processus de developpement technologique très evolutif.
        </Text>
      </View>
      {/* <Switch 
  value={mode}
  onValueChange={(value) => {
    setMode(value);
  EventRegister.emit("changeTheme",value);
  }}
  /> */}
      <Button
        color="#465bd8"
        title="Show Menu"
        onPress={() => navigation.openDrawer()}
      ></Button>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({




})
