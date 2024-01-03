import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from '../Services/ProductsService';
import { ProductC } from './ProductC';
export function ProductsListC ({navigation}) {
  const { articles } = useSelector((state) => state.articles);
  console.log()
  function renderProduct({item: product}) {
    return (
      
      <ProductC {...product} 
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
