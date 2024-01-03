import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity,Button} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { deleteArticle } from '../../features/articleSlice';
import { useDispatch, useSelector } from "react-redux";


export function ProductC({_id,name, price, image, onPress}) {
  const dispatch = useDispatch();
const delArticle = async (_id) => {
  dispatch(deleteArticle(_id));
  console.log("Article supprimé")
}
  return (

    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={{uri: `data:image/gif;base64,${image}`}} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <MaterialIcons name="delete" size={24} color="black"
                onPress={() => delArticle(_id)}
              />
      </View>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  thumb: {
    width: 50,
    height: 100,
    marginRight: 16,
    
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
