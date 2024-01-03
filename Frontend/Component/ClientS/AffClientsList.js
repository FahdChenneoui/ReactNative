import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar, Modal, TextInput, TouchableOpacity, RefreshControl } from "react-native";
import axios from "axios";
import { getClients, deleteClient, updateClient } from '../../features/ClientsSlice';
import { useDispatch, useSelector } from "react-redux";
import FormAjoutClients from "./FormAjoutClients";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const AffListe = () => {
  //   const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isRender, setisRender] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [inputTextNom, setinputTextNom] = useState();
  const [inputTextSoc, setinputTextSoc] = useState();
  const [inputTextMail, setinputTextMail] = useState();
  const [_id, setid] = useState();
  const [editItem, seteditItem] = useState();
  //   const getClients = () => {
  //     setIsLoading(true);
  //     axios.get(`http://192.168.1.35:3006/clients`)
  //       .then(res => {
  //         //setUsers(res.data.results);
  //         setData([...data, ...res.data.results]);
  //         setIsLoading(false);
  //       });
  //   };  


  const { clients } = useSelector((state) => state.clients);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getClients());

  // }, [dispatch]);

  // useEffect(() => {

  //   setIsLoading(true)
  //   setData(clients)
  //   console.log(clients)
  // }, []);

  const delClient = async (_id) => {
    dispatch(deleteClient(_id));
    console.log("Client supprimé")
  }


  /// update
  const onPressItem = (item) => {
    setisModalVisible(true);
    setinputTextNom(item.clNometprenom);
    setinputTextSoc(item.clSoc);
    setinputTextMail(item.clMail);
    seteditItem(item)

    setid(item._id)
    console.log(_id)
  }



  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
      >
        <View style={styles.itemWrapperStyle} key={index}>
          <Image style={styles.itemImageStyle} source={require('../../assets/images/user.png')} />
          <View style={styles.contentWrapperStyle}>

            <Text style={styles.txtNameStyle}>{`${item.clNometprenom} / ${item.clSoc}`}
             
            </Text>
            <Text style={styles.txtEmailStyle}>{item.clMail} </Text>
            <MaterialIcons name="delete" size={24} color="black"
                onPress={() => delClient(item._id)}
              />
          </View>
        </View>
      </TouchableOpacity>

    );
  };
  /// load more component "items" allways
  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };
  /// load to the buttom to load more 
  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  /// resfresh flatlist
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    getClients();
  }, [currentPage]);


  /// Modif button
  const handleEditItem = (editItem) => {
    // const newData = data.map(item => {
    //   if (item._id == editItem) {
    //     item.clNometprenom = inputTextNom;
    //     item.inputTextSoc = inputTextSoc;
    //     item.inputTextMail = inputTextMail;
    //     return item
    //   }
    //   return item
    // })
    // setData(newData);
    // console.log(editItem)
    const clients = {
      "_id": _id,
      "clNometprenom": inputTextNom,
      "clMail": inputTextMail,
      "clSoc": inputTextSoc,
    }
    dispatch(updateClient(clients))
    setisRender(!isRender);
  }



  const onPressSaveEdit = () => {
    handleEditItem(editItem);/// save input to data 
    setisModalVisible(false)  /// close model
    console.log(editItem)


  }




  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor="#000" />
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          data={clients}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
          extraData={isRender}

        />
        <Modal
          animationType='fade'
          visible={isModalVisible}
          onRequestClose={() => setisModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={{ color: Colors, fontSize: 30, textAlign: 'center', paddingTop: 5 }} >Edit Client: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(clNometprenom) => setinputTextNom(clNometprenom)}
              value={inputTextNom}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(clSoc) => setinputTextSoc(clSoc)}
              value={inputTextSoc}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(clMail) => setinputTextMail(clMail)}
              value={inputTextMail}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <View style={styles.center}>

              <TouchableOpacity onPress={() => onPressSaveEdit()}
                style={styles.touchableSave}
              >
                <Text style={styles.textStyle}>
                  Save </Text>
              </TouchableOpacity>

            </View>

          </View>

        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  textInput: {
    width: '95%',
    paddingLeft: 15,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,

  },
  touchableSave: {
    backgroundColor: 'blue',
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableSave: {
    backgroundColor: '#465bd8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: -150,
    width: 200,
    height: 50,
    marginTop: 20,
    elevation: 4


  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  /// item ui design 
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  ///img item ui design 
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  /// space between text items 
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  /// text Font Size
  txtNameStyle: {
    fontSize: 16,
  },
  ///Email text 
  txtEmailStyle: {
    color: "#777",
  },
  /// loader style
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
export default AffListe;