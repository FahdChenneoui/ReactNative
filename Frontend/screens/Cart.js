import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { CartContext } from '../constants/CartContext';
import { StripeProvider } from '@stripe/stripe-react-native'
import Payment from '../Component/Payment/Payment';
import StripeApp from '../Component/Payment/Payment';
export function Cart({ navigation }) {
  let [name, setName] = useState("");
  let [total, setTotal] = useState(0);

  const html = `
    <html>
      <body>
        <h1>Price: ${total}</h1>
        <h1>Price: ${name}</h1>

        <p style="color: red;">Fahd Chenneoui</p>
      </body>
    </html>
  `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  function Totals() {
    useEffect(() => {
      setTotal(getTotalPrice());
    });

    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>


      </View>

    );
  }

  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
        <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product._id.toString()}
        ListFooterComponent={Totals}
      />
        <View style={styles.center}>
        <View style={styles.fixToText1}>
          {/* <Button title="Confirm order" onPress={()=>navigation.navigate("DrawerHome")} /> */}
          <Button
            color='#465bd8'
            title="Generate quotation" onPress={generatePdf} />
        </View>
        </View>
        <View style={styles.center1}>
        <View style={styles.fixToText2}>
          <Button
          
            color='#465bd8'
            title="Payment" onPress={() => navigation.navigate("Payment")} />
        </View>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333'
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 20,
    marginHorizontal: 8,
    
  },

  // fixToText: {
  //   flexDirection:'column',
  //   padding:20,
  //   paddingBottom:20,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   justifyContent: 'center',
    
  // },
  fixToText1:{
    backgroundColor: '#465bd8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
    marginTop:20,
    marginBottom:20,
    elevation: 4  
    
  },
  fixToText2:{
    backgroundColor: '#465bd8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 50,
    width: 200,
    height: 50,
    marginTop:50,
    elevation: 4
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center1:{
    justifyContent: 'center',
    alignItems: 'center'
  }

});
