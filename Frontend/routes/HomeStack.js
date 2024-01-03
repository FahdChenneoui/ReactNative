// import React from 'react';
// import { View, ImageBackground,Text ,StyleSheet ,TouchableOpacity} from 'react-native' ; 
// import Header from './header';
// import * as ScreenOrientation from 'expo-screen-orientation';
// import QrCode from './qrCode';
// const Home = props => {
//     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
//     return(
//         <ImageBackground
//         style={styles.img}
//         source={require('../assets/fonts/bgImage.jpg')}>
//             <View> 
//             <Header/>
//             </View>

//         <TouchableOpacity onPress={() => {console.log('new')}}> 
//             <View style={styles.btn1} >
//                 <View style={styles.insBtn}>
//                     <Text style={styles.text}>Ajout Client</Text>
//                 </View>
//             </View>

//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => {console.log('new')}}> 
//             <View style={styles.btn2} >
//                 <View style={styles.insBtn}>
//                     <Text style={styles.text}>Ajout Bon de commande</Text>
//                 </View>
//             </View>

//         </TouchableOpacity >
//         <TouchableOpacity onPress={() => {console.log('new')}}> 
//             <View style={styles.btn3} >
//                 <View style={styles.insBtn}>
//                     <Text style={styles.text}>Ajout Devis</Text>
//                 </View>
//             </View>

//         </TouchableOpacity >
//         <TouchableOpacity onPress={() => {console.log('new')}}> 
//             <View style={styles.btn4} >
//                 <View style={styles.insBtn}>
//                     <Text style={styles.text}>Contact</Text>
//                 </View>
//             </View>

//         </TouchableOpacity>



//         </ImageBackground>
//     )
// }
// const styles = StyleSheet.create({
//     img :{
//         flex : 1,
//     },
//     btn1 :{
//         alignItems:'center',
//         marginTop:'50%',
//     },
//     btn2:{
//         alignItems:'center',
//         marginTop : 10 , 
//     },
//     btn3:{
//         alignItems:'center',
//         marginTop : 10 , 
//     },
//     btn4:{
//         alignItems:'center',
//         marginTop : 10 , 
//     },
//     insBtn:{
//         height:50,
//         width:150,
//         textAlign:'center',
//         backgroundColor:'rgba(255,255,255,0.5)',
//         alignItems:'center',
//         justifyContent:'center',
//         borderRadius:6, 
//     },
//     text:{
//         textAlign:'center',
//     }
// })

// export default Home;
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerScreenStack } from "./DrawerStack";
import { StatusBar } from "expo-status-bar";
import { Splash, Onboarding, Login } from '../screens';
import FormAjoutClients from "../Component/ClientS/FormAjoutClients";
import FormAjoutBondC from "../Component/BondC/FormAjoutBondC";
import FormDevis from "../Component/Devis/FormDevis";
// import Payment from "../Component/Payment/Payment"
// import PaymentScreen from "../Component/Payment/CardField"
import { ProductsList } from '../screens/ProductsList'
import { ProductDetails } from '../screens/ProductDetails';
import AffArticleList from '../Component/Articles/AffArticleList';
import { Cart } from '../screens/Cart';
import { CartIcon } from '../Component/Articles/CartIcon';
import { CartProvider } from '../constants/CartContext';
import Liste from "../Component/ClientS/ClientsList";
import StripeApp from "../Component/Payment/Payment";
import Ajouter from "../Component/ClientS/ajoutClient";
import { Provider } from 'react-redux';
import { LoginProvider } from '../context/LoginProvider'
import AppForm from "../Component/Login-sign/AppForm";
import ImageUpload from "../Component/Login-sign/ImageUpload";
import { useLogin } from "../context/LoginProvider";
import AplListeC from "../Component/Articles/AplListeC";
function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the detail page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Splash" component={Splash} />
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="AppForm" component={AppForm} />
      <HomeStack.Screen name="ImageUpload" component={ImageUpload} />

      <HomeStack.Screen
        name="DrawerHome" component={DrawerScreenStack} />
      <HomeStack.Screen name="Client" component={Ajouter} />
      <HomeStack.Screen name="Payment" component={StripeApp} />
      <HomeStack.Screen name='Article' component={AffArticleList}
        options={({ navigation }) => ({
          title: 'Products',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />
        })} />
        <HomeStack.Screen name='aplList' component={AplListeC}
        options={({ navigation }) => ({
          title: 'Products',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />
        })} />
      <HomeStack.Screen name='ProductDetails' component={ProductDetails}
        options={({ navigation }) => ({
          title: 'Product details',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })} />
      <HomeStack.Screen name='Cart' component={Cart}
        options={({ navigation }) => ({
          title: 'My cart',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })} />
   
    </HomeStack.Navigator>
  );
}
const HomeScreenStack = () => {
  const { isLoggedIn } = useLogin()
  return isLoggedIn ? <DrawerScreenStack /> : <StackNavigator />;
};

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
  img: {
    flex: 1,
  },
});
export default HomeScreenStack;