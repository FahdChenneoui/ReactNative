import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getClients,deleteClient } from '../../features/ClientsSlice';
import { useDispatch , useSelector } from "react-redux";

const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;




const FormAjoutBondC = () => {


  const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;

  const[data,setData]=useState([]);
  /* useEffect(() => {
  
   fetch('http://192.168.48.1:3006/clients')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setData(json)
      setIsloading(true)
    })
     .catch((error) => {
      console.error(error);
    });
  },[]);*/

  const dispatch = useDispatch();
  const {clients} = useSelector((state) => state.clients);
 
    useEffect(() => {
      dispatch(getClients());
     
    }, [dispatch]);
    useEffect(() => {
      
      setIsloading(true)
      setData(clients)
      console.log(clients)
    }, []);
     
    const delClient = async (id) => {
      dispatch(deleteClient(id));
      console.log("Client supprimé")
    }
  const renderClient = ({ itemC, index }) => {
    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })
    return (
      <Animated.View style={
        [styles.item,
        {
          transform: [{ scale }]
        }
        ]
      }>
      </Animated.View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/ListeBg.jpg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      {
        isLoading && data && (
          <FlatList 
               data={data}
               renderItem={({item,index}) => 
               <View key={index}>
       <Image
          style={styles.image}
          source={require('../../assets/images/user-profile.jpg')}
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />
               <Text style={styl.row}>{`${item.clNometprenom} ${item.clCin} ${item.clMail}`}
               
                  <Ionicons
                    name="close-circle-outline"
                    onPress={() => {
                      props.onPress(delClient(item._id))
                    }}
                  />
                </Text>
                
              </View>
                         }
                         keyExtractor={(item, index) => index.toString()}
                         numColumns={3}
               />
       /*   <Animated.FlatList
            data={data}
            keyExtractor={itemC => `key-${itemC._id}`}
            renderItem={renderClient}
            
            contentContainerStyle={{
              padding: 20
            }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}
          />*/
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 18
  },
  image: {
    width: 100,
    height: imgHeight
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    marginBottom: marginBottomItem,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    shadowRadius: 30,
    padding: paddingItem
  },
  container: {
    flex: 1
  }

});
const styl = StyleSheet.create({

 row: {
   justifyContent: 'center',
  padding: 5,
  margin: 10,
  width: 400,
  height: 100,
 backgroundColor: '#F6F6F6',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#CCC'
}
});

export default FormAjoutBondC;
