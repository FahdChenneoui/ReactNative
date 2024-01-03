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
import CustomDrawer from "./CustomDrawer";
import { StatusBar } from "expo-status-bar";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProfileScreen from "../screens/ProfileScreen";
// import AjoutBond from "../Component/BondC/ajoutBdc";
// import AjouterDevis from "../Component/Devis/ajoutDevis"
import Ajouter from "../Component/ClientS/ajoutClient";
import Payment from "../Component/Payment/Payment";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import Listarticles from "../Component/Articles/Listarticles";
import Liste from "../Component/ClientS/ClientsList";
import { ProductsList } from "../screens/ProductsList";
import StripeApp from "../Component/Payment/Payment";
import { ProductDetails } from "../screens/ProductDetails";
import { Cart } from "../screens/Cart";
import { CartIcon } from "../Component/Articles/CartIcon";
import AffArticleList from "../Component/Articles/AffArticleList";
import AddArticle from "../Component/Articles/ajoutArticle";
import AplListeC from "../Component/Articles/AplListeC";
function MyModal({ isVisible, onClick }) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent={false}
    >
      <SafeAreaView style={styles["modal-container"]}>
        <Text style={{ paddingTop: 20, fontSize: 22 }}>IN MODAL</Text>
        <Button onPress={onClick} title="CLOSE"></Button>
      </SafeAreaView>
    </Modal>
  );
}

function HomeScreen({ navigation }) {
  const [showModal, setShowModal] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button style={styles.btn} title="ADD" onPress={() => setShowModal(true)}></Button>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* MODAL */}
      <MyModal isVisible={showModal} onClick={() => setShowModal(false)} />
      {/* PAGE CONTENT */}
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="next page"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
    </View>
  );
}

// function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>This is the ProfileScreen page</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const DrawerStack = createDrawerNavigator();
export function DrawerScreenStack({ navigation }) {
  return (

    <DrawerStack.Navigator initialRouteName="ProfileScreen"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#465bd8',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      {/* <DrawerStack.Screen name="LogSig" component={LoginScreen} options={{
          drawerIcon:({color}) => (
             <Ionicons name="person-outline" size={22} color={color}/>
          )
      }}/> */}
      <DrawerStack.Screen name="Home" component={ProfileScreen} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="home-outline" size={22} color={color} />
        )
      }} />

      <DrawerStack.Screen name="Client" component={Ajouter} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="person-add-outline" size={22} color={color} />
        )
      }} />
  
      {/* {/* <DrawerStack.Screen name="Purchase Order" component={AjoutBond}options={{
          drawerIcon:({color}) => (
             <Ionicons name="ios-newspaper-outline" size={22} color={color}/>
          )
      }} /> */}
      
     
      <DrawerStack.Screen name="Article" component={AffArticleList} 
       options={({ navigation }) => ({
          
        title: 'Shop',
        headerTitleStyle: styles.headerTitle,
        headerRight: () => <CartIcon navigation={navigation} />,
        drawerIcon: ({ color }) => (
          <Ionicons name="ios-reader-outline" size={22} color={color} />
        )
      })}
/>
      <DrawerStack.Screen name="Payment" component={StripeApp} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="ios-server-outline" size={22} color={color} />
        )
      }} />
      <DrawerStack.Screen name="AddArticle" component={AddArticle}options={{
          drawerIcon:({color}) => (
             <Ionicons name="add-circle-outline" size={22} color={color}/>
          )
      }} />
         <DrawerStack.Screen name="Cart" component={Cart}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          )
        }} />
     <DrawerStack.Screen name="AplListeC" component={AplListeC}options={{
          // drawerIcon:({color}) => (
          //    <Ionicons name="ios-reader-outline" size={22} color={color}/>
          // )
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
      }} /> 
      <DrawerStack.Screen name="ProductDetails" component={ProductDetails}
        options={({ navigation }) => ({
          
          title: 'Products Details',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
          // drawerIcon: ({ color }) => (
          //   <Ionicons name="ios-reader-outline" size={22} color={color} />
          // )
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        })}

      />

   
    </DrawerStack.Navigator>

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
  btn: {
    color: '#465bd8',
  }
});
