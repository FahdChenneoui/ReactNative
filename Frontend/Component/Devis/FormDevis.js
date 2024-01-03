// import React, { useState, useContext,useEffect } from 'react' ;
// import {Modal, Text, style,Button, View,TextInput, FlatList, SafeAreaView,TouchableOpacity, Image,TouchableHighlight,ScrollView  } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// //import { Icon } from 'react-native-elements'


  
// const FormDevis = () => {


  

//     const [arrayholder , setArrayholder ] = useState(clients);
//     const [data , setData ] = useState(null);
//     const [texte , setTexte ] = useState(null);
//     const [ modalVisible, setModalVisible ] = useState(false);
//     const [idclient, setIdclient ] = useState(0);

//     const [nomprenom, setNomprenom] = useState(null);
//     const [adresse, setAdresse] = useState(null);
//     const [ville, setVille] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [telephone, setTelephone] = useState(null);
//     const [responsable, setResponsable] = useState(null);

//     const renderHeader = () => {    
//         return (  
//           <SafeAreaView>
//             <TextInput      
//             placeholder="Chercher Client..."  
//             name="search" 
//             onChangeText={(text) => searchFilterFunction(text)}
//             value={texte}
//              />  
//            </SafeAreaView>  
//              );  
//       };

//       const  searchFilterFunction = (text) => {    
//         const newData = arrayholder.filter(item => {      
//           const itemData = `${item.nomprenom.toUpperCase()}`;
          
//            const textData = text.toUpperCase();
//            setTexte(text);
//            return itemData.indexOf(textData) > -1;    
//         });
        
//         setData(newData );  
//       };

//       const toggleModal=(visible)=> {
//         setModalVisible(visible);
       
//       }
    
//     const toggleVal=(id,nom,adr,vil,mail,tel,resp)=> {
//         setIdclient(id);
//         setNomprenom(nom);
//         setAdresse(adr);
//         setVille(vil);
//         setEmail(mail);
//         setTelephone(tel);
//         setResponsable(resp);
       
//       }

    
//    const  renderItem = ({item}) => (
     
//             <TouchableHighlight key={item.idclient}  underlayColor={'#f1f1f1'}> 
        
//             <View style={styles.item} >
//                 <View style={styles.marginLeft}>
//                     <View style={[styles.menu, { backgroundColor: 'red' }]}></View>
//                     <View style={[styles.menu, { backgroundColor: 'blue' }]}></View>
//                     <View style={[styles.menu, { backgroundColor: 'green' }]}></View>
//                 </View>
//                 <Text style={styles.text}>{item.nomprenom}  </Text>
//                 <Text style={styles.text}>{item.ville}  </Text>
//                 <Icon
//                 style={{fontSize:20}} 
//                  edit
//                     name='edit'
//                  type='font-awesome'
//                  color='blue'
//                  onPress = {() => {toggleModal(true);
//                                    toggleVal(item.idclient,item.nomprenom,item.adresse,item.ville,item.email,item.telephone,item.responsable)
//                     }}
//                 /> 
//             </View>
//         </TouchableHighlight>
//     )

//     const FormDevis = () => {   
//       if (!nomprenom) {
//           alert('Insérer le nom du client');
//           return;
//         }
//         if (!email) {
//           alert('Insérer Email client');
//           return;
//         }
//       modificationClient(idclient,nomprenom,adresse,ville,email,telephone,responsable);
     
//   };



//     return(
       
//           <View style={styles.contentContainer}>
//              <Modal animationType = {"slide"} transparent = {false}
//                visible = {modalVisible}
//                onRequestClose = {() => { console.log("Modal fermé.") } }>
               
//                <View style = {styles.modal}>
                             
//           <View style={styles.contentContainer}>

//        <View>
//                   <TouchableHighlight onPress = {() => {
//                      toggleModal(!modalVisible)}}>
                     
//                      <Text style = {styles.text}>Fermer</Text>
//                   </TouchableHighlight>
//               </View> 
//       <ScrollView>
     
//                   <TextInput style={styles.textInput} 
//                   onChangeText={(nomprenom) => setNomprenom(nomprenom)}
//                   value={nomprenom}
//                   placeholder="Nom et prénom" 
//                     />
//                 <TextInput  style={styles.textInput}                     
//                         onChangeText={(adresse) => setAdresse(adresse)}
//                         value={adresse}
//                         placeholder="Adresse" />   

//                         <TextInput  style={styles.textInput}                    
//                         onChangeText={(ville) => setVille(ville)}
//                         value={ville}
//                         placeholder="Ville" />   

//                         <TextInput    style={styles.textInput}                  
//                         onChangeText={(email) => setEmail(email)}
//                         value={email}
//                         placeholder="E-Mail" /> 

//                         <TextInput   style={styles.textInput}                   
//                         onChangeText={(telephone) => setTelephone(telephone)}
//                         value={telephone}
//                         placeholder="Téléphone" />   

//                         <TextInput  style={styles.textInput}                 
//                         onChangeText={(responsable) => setResponsable(responsable)}
//                         value={responsable}
//                         placeholder="Responsable" /> 
              
//               <View style={styles.buttonStyle10} >
//               <TouchableOpacity onPress = {modifClient}>
//                   <Text style={styles.textStyle}>
//                     Modifier Client
//                   </Text>
//               </TouchableOpacity>
//             </View>
//             </ScrollView>
//       </View>
//               </View>
//             </Modal>

//  <View style={styles.contentContainer}>
//             <View style={styles.header}>
//                     <Text style={styles.headerText}> Liste des clients </Text>
//                 </View>
     
   
//                 <FlatList 
//        ListHeaderComponent={renderHeader}        
//        data={data ? data : clients}
//         renderItem={renderItem}
//         keyExtractor={item => item.idclient.toString()}
        
//       />
      
//       </View> 
   
//   </View>

  
//     );
// }
// export default FormDevis;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormDevis = () => {
  return (
    <View>
      <Text>FormDevis</Text>
    </View> 
  )
}

export default FormDevis

const styles = StyleSheet.create({})