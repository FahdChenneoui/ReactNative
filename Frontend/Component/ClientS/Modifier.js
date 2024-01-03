// import React, { useState, useContext, useEffect } from 'react';
// import { StyleSheet, Text, style, Button, View, TextInput, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useDispatch, useSelector } from "react-redux";
// import {Colors} from '../../constants/Colors';

// import { createClient } from "../../features/ClientsSlice";
// import  {DateTimePicke}  from './DateTimePicker';
// import Dropdown  from './Dropdown';
// const FormAjoutClients = ({ props, navigation }) => {

//   const [clNometprenom, setclNometprenom] = useState(null);
//   const [clCin, setclCin] = useState(null);
//   const [cletat, setcletat] = useState(null);
//   const [clMail, setclMail] = useState(null);
//   const [clTel, setclTel] = useState(null);
//   const [clSoc, setclSoc] = useState(null);
//   const [clVille, setclVille] = useState(null);
//   const {error,success} = useSelector((state) =>state.clients);

//   const dispatch = useDispatch();


  

//   const handleSubmit = (event,navigation) => {
//     event.preventDefault();
//     const clients = {
//         "_id":_id,
//       "clNometprenom": clNometprenom,
//       "clCin": clCin,
//       // "cletat": cletat
//       "clMail": clMail,
//       "clTel": clTel,
//       "clSoc": clSoc,
//       "clVille": clVille,
//     }
//     dispatch(createClient(clients));
    
//   }


//   const insertClient = () => {
//     if (!clNometprenom) {
//       alert('Insérer le nom et prénom du client');
//       return;
//     }
//     if (!clCin) {
//       alert('Insérer CIN client');
//       return;
//     }
//     if (!clDate) {
//       alert('Insérer Date d client');
//       return;
//     }
//     if (!clMail) {
//       alert('Insérer Email client');
//       return;
//     }
//     if (!clMail) {
//       alert('Insérer Email client');
//       return;
//     }
//     if (!clMail) {
//       alert('Insérer Email client');
//       return;
//     }
//     createClient(clNometprenom, clCin, cletat, clDate, clMail, clTel, clSoc, clVille);
//     navigation.navigate('Listclient') 

//   };

//   return (
//     <View style={styles.container}>
//           {
//        success ? (<View>
//              <Text>Added with Success</Text>
//           </View>
//          ):null
//          }
         
//          {
//         error ? (<View>
//              <Text>Error : Not Added </Text>
//           </View>
//          ):null
//          }
//       <View style={styles.container}>
//         <View style={{ flex: 1 }}>
//         <Text style={{color:Colors,fontSize:30,textAlign:'center'}} >Add Form</Text>

//           <TextInput style={styles.textInput}

//             onChangeText={(clNometprenom) => setclNometprenom(clNometprenom)}
//             value={clNometprenom}
//             placeholder="Nom et prénom"

//           />
//           <TextInput style={styles.textInput}
//             onChangeText={(clCin) => setclCin(clCin)}
//             value={clCin}
//             placeholder="11122255" />
//           {/* Switch  */}

//          {/* <DateTimePicke/> */}
//           <TextInput style={styles.textInput}
//             onChangeText={(clMail) => setclMail(clMail)}
//             value={clMail}
//             placeholder="Fahd@gmail.com" />
//           <TextInput style={styles.textInput}
//             onChangeText={(clTel) => setclTel(clTel)}
//             value={clTel}
//             placeholder="22223322" />
//           <TextInput style={styles.textInput}
//             onChangeText={(clSoc) => setclSoc(clSoc)}
//             value={clSoc}
//             placeholder="society Name" />
//                       <Dropdown/>


//           <View style={styles.center}>
//             <View style={styles.buttonStyle1} >
//               <TouchableOpacity onPress={handleSubmit}>


//                 <Text style={styles.textStyle}>
//                   Add Client
//                 </Text>

//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//       </View>




//     </View>


//   );
// };


// export const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: "white",

//   },
//   ///Button Add Client Edit
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   buttonStyle1: {
//     backgroundColor: '#465bd8',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 15,
//     margin: 50,
//     width: 200,
//     height: 50,
//     marginTop:20,
//     elevation: 4

//   },
//   textStyle: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '800',
    
    
//   },

//   textInput: {
//     width: '95%',
//     paddingLeft: 15,
//     height: 50,
//     marginLeft: 10,
//     marginRight: 10,
//     marginTop: 10,
//     marginBottom: 10,
//     borderColor: 'grey',
//     borderRadius: 10,
//     borderWidth: 1,
//     fontSize: 16,

//   },
 
//   scrollView: {
//     flexDirection: "column"
//   },

//   liste: {
//     flex: 1
//   },


// });
// export default FormAjoutClients;
