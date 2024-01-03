import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Home from './routes/HomeStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogSig from './routes/logSig';
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import HomeScreenStack from "./routes/HomeStack";
import store from './redux/store';
import { Provider } from 'react-redux';
import { StripeProvider } from "@stripe/stripe-react-native";
import LoginProvider from './context/LoginProvider';

import Header from './screens/header';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { CartProvider } from './constants/CartContext';

export default function App() {

  return (
    <LoginProvider>
      <StripeProvider publishableKey="pk_test_51L0vISCqBdY06N8pzzSH4OFcSXUiKd74EI1VVg9P8jIJJhEy3TD6IY3DWj3lxji5sm5qEH0KyvsYNL7GublaCv8m00LeTS4Rrp">
        <Provider store={store}>
        <CartProvider>
          <NavigationContainer >
            <HomeScreenStack />
          </NavigationContainer>
          </CartProvider>
        </Provider>
      </StripeProvider>
    </LoginProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
  }
});
