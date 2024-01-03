import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
import { Product } from '../Component/Articles/Product';
// import { getProducts } from '../Services/ProductsService';
import ProductDetails from '../screens/ProductDetails';
export function ProductsList ({navigation}) {
  const { articles } = useSelector((state) => state.articles);
  console.log()
  function renderProduct({item: product}) {
    return (
      
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails',
        {
          productId: product._id,
        }
        );
      }}
      />
      
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(articles);
  });
   
  return (
  
    
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item._id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
