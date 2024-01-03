// // import React from "react";
// import {
//     SafeAreaView,
//     TextInput,
//     Button,
//     ActivityIndicator,
//     Text,
//     View,
//     ScrollView,
//     StyleSheet
// } from "react-native";
// import { Formik } from "formik";
// import * as yup from "yup";
// import React, { useState, useContext, useEffect } from 'react';
// // import { StyleSheet, Text, style, Button, View, TextInput, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigation } from '@react-navigation/native';
// import { createClient } from "../../features/ClientsSlice";

// const FormAjoutClients = ({ props, navigation }) => {

//     const [clNometprenom, setclNometprenom] = useState(null);
//     const [clCin, setclCin] = useState(null);
//     const [cletat, setcletat] = useState(null);
//     const [clDate, setclDate] = useState(null);
//     const [clMail, setclMail] = useState(null);
//     const [clTel, setclTel] = useState(null);
//     const [clSoc, setclSoc] = useState(null);
//     const [clVille, setclVille] = useState(null);
//     const navigate = useNavigation();
//     const dispatch = useDispatch();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const clients = {
//             "clNometprenom": clNometprenom,
//             "clCin": clCin,
//             // "cletat": cletat
//             "clDate": clDate,
//             "clMail": clMail,
//             "clTel": clTel,
//             "clSoc": clSoc,
//             "clVille": clVille,
//         }
//         dispatch(createClient(clients));
//         navigate("/Clients");
//     }


//     const insertClient = () => {
//         if (!clNometprenom) {
//             alert('Insérer le nom et prénom du client');
//             return;
//         }
//         if (!clCin) {
//             alert('Insérer CIN client');
//             return;
//         }
//         if (!clDate) {
//             alert('Insérer Date d client');
//             return;
//         }
//         if (!clMail) {
//             alert('Insérer Email client');
//             return;
//         }
//         if (!clTel) {
//             alert('Insérer Email client');
//             return;
//         }
//         if (!clSoc) {
//             alert(' client');
//             return;
//         }
//         if (!clVille) {
//             alert('Insérer Email client');
//             return;
//         }
//         addNewClient(clNometprenom, clCin, cletat, clDate, clMail, clTel, clSoc, clVille);
//         navigation.navigate('Listclient')

//     };

//     const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
//         const inputStyles = {
//             borderWidth: 1,
//             borderColor: "black",
//             padding: 10,
//             marginBottom: 3,
//         };
//         if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
//             inputStyles.borderColor = 'red';
//         }

//         return (
//             <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
//                 <Text style={{ marginBottom: 3 }}>{label}</Text>
//                 <TextInput
//                     style={inputStyles}
//                     /// returning value
//                     onChangeText={formikProps.handleChange(formikKey)}
//                     ///move to the next one show error and Touched show the erroe on the prev one
//                     onBlur={formikProps.handleBlur(formikKey)}
//                     {...rest}
//                 />
//                 <Text style={{ color: 'red' }}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
//             </View>

//         );
//     }
//     const validationSchema = yup.object().shape({
//         clMail: yup
//             .string()
//             .label('Email','clTel')
//             .email()
//             .required(),
//         CIN: yup
//             .string()
//             .required()
//             .min(8, 'seems a bit short')
//             .max(8, 'we prefer insecure system,try again'),
//         phoneNumber: yup.string()
//             .required("Phone number is required")
//             .matches(
//         /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
//               "Invalid phone number"
//             ),
//         FullNAME: yup.string()
//             .min(2, "Too Short!")
//             .max(50, "Too Long!")
//             .required("fullname is required"),
//         society: yup.string()
//             .min(2, "Too Short!")
//             .max(50, "Too Long!")
//             .required("fullname is required")


//     })

//     return (
//         <SafeAreaView style={{ marginTop: 20 }}>
//             <ScrollView>
//                 <View>
//                     <Text
//                         style={{
//                             fontSize: 30,
//                             fontWeight: 'bold',
//                             paddingTop: 15,
//                             paddingBottom: 30,
//                             textAlign: "center"
//                         }}>Form add</Text>
//                 </View>
//                 <Formik
//                     initialValues={{ Email: "", password: '' }}
//                     onSubmit={(values, actions) => {
//                         alert(JSON.stringify(values));
//                         setTimeout(() => {
//                             actions.setSubmitting(false) /// button submit time to reshow 
//                         }, 1000)
//                     }}
//                     validationSchema={validationSchema}
//                 >
//                     {formikProps => (
//                         <React.Fragment>
//                             <StyledInput
//                                 onSubmitText={(clMail) => setclNometprenom(clMail)}
//                                 value={clMail}
//                                 label=""
//                                 formikProps={formikProps}
//                                 formikKey="FullNAME"
//                                 placeholder="Chenneoui Fahd"

//                             />
//                             <StyledInput
//                                 label="clCin"
//                                 formikProps={formikProps}
//                                 formikKey="CIN"
//                                 placeholder="CIN expl:11223344"
//                                 onSubmitText={(clCin) => setclCin(clCin)}
//                                 value={clCin}

//                             />
//                             <StyledInput
//                                 label="clDate"
//                                 formikProps={formikProps}
//                                 formikKey="Name"
//                                 placeholder="clDate"

//                             />
//                             <StyledInput
//                                 label="clMail"
//                                 formikProps={formikProps}
//                                 formikKey="clMail"
//                                 placeholder="clMail"
//                                 secureTextEntry
//                             />
//                             <StyledInput
//                                 label="clTel"
//                                 formikProps={formikProps}
//                                 formikKey="phoneNumber"
//                                 placeholder="clTel"

//                                 onAbort={(clTel) => setclTel(clTel)}
//                                 value={clTel}
//                             />
//                             <StyledInput

//                                 label="clSoc"
//                                 formikProps={formikProps}
//                                 formikKey="society"
//                                 placeholder="clSoc"
//                                 secureTextEntry
//                                 onAbort={(clSoc) => setclSoc(clSoc)}
//                                 value={clSoc}
//                             />
//                             <StyledInput
//                                 label="Ville"
//                                 formikProps={formikProps}
//                                 formikKey="clVille"
//                                 placeholder="clVille"
//                                 secureTextEntry
//                                 onSubText={(clVille) => setclVille(clVille)}
//                                 value={clVille}
//                             />

//                             {/* <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
//                         <Text style={{ marginBottom: 3 }}>Email</Text>
//                         <TextInput
//                             placeholder="FahdChenneoui@gmail.com"
//                             style={{
//                                 borderWidth: 1,
//                                 borderColor: "black",
//                                 padding: 10,
//                                 marginBottom: 3,
//                             }}
//                             /// returning value
//                             onChangeText={formikProps.handleChange('Email')}
//                             ///move to the next one show error and Touched show the erroe on the prev one
//                             onBlur={formikProps.handleBlur("Email")}
//                             autoFocus
//                         />
//                         <Text style={{ color: 'red' }}>{formikProps.touched.Email && formikProps.errors.Email}</Text>
//                     </View> */}
//                             {/* <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
//                         <Text style={{ marginBottom: 3 }}>password</Text>
//                         <TextInput
//                             placeholder="password"
//                             style={{
//                                 borderWidth: 1,
//                                 borderColor: "black",
//                                 padding: 10,
//                                 marginBottom: 3,
//                             }}
//                             /// returning value
//                             onChangeText={formikProps.handleChange('password')}
//                             onBlur={formikProps.handleBlur("password")}
//                             secureTextEntry
//                         />
//                         <Text style={{ color: 'red' }}>{formikProps.touched.password && formikProps.errors.password}</Text>
//                     </View> */}



//                             {formikProps.isSubmitting ? (
//                                 /// cercle de load
//                                 <ActivityIndicator />
//                             ) : (
//                                 <Button title="Submit" onPress={insertClient} />
//                             )}
//                         </React.Fragment>
//                     )}


//                 </Formik>
//             </ScrollView>
//         </SafeAreaView>

//     );
// }
// const styles = StyleSheet.create({
//     input: {
//       height: 40,
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//     },
//   });
// export default FormAjoutClients;
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, style, Button, View, TextInput, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import {Colors} from '../../constants/Colors';

import { createClient } from "../../features/ClientsSlice";
import  {DateTimePicke}  from './DateTimePicker';
import Dropdown  from './Dropdown';
const FormAjoutClients = ({ props, navigation }) => {

  const [clNometprenom, setclNometprenom] = useState(null);
  const [clCin, setclCin] = useState(null);
  const [cletat, setcletat] = useState(null);
  const [clMail, setclMail] = useState(null);
  const [clTel, setclTel] = useState(null);
  const [clSoc, setclSoc] = useState(null);
  const [clVille, setclVille] = useState(null);
  const {error,success} = useSelector((state) =>state.clients);

  const dispatch = useDispatch();


  

  const handleSubmit = (event,navigation) => {
    event.preventDefault();
    const clients = {
      "clNometprenom": clNometprenom,
      "clCin": clCin,
      // "cletat": cletat
      "clMail": clMail,
      "clTel": clTel,
      "clSoc": clSoc,
      "clVille": clVille,
    }
    dispatch(createClient(clients));
    
  }


  const insertClient = () => {
    if (!clNometprenom) {
      alert('Insérer le nom et prénom du client');
      return;
    }
    if (!clCin) {
      alert('Insérer CIN client');
      return;
    }
    if (!clDate) {
      alert('Insérer Date d client');
      return;
    }
    if (!clMail) {
      alert('Insérer Email client');
      return;
    }
    if (!clMail) {
      alert('Insérer Email client');
      return;
    }
    if (!clMail) {
      alert('Insérer Email client');
      return;
    }
    createClient(clNometprenom, clCin, cletat, clDate, clMail, clTel, clSoc, clVille);
    navigation.navigate('Listclient') 

  };

  return (
    <View style={styles.container}>
          {
       success ? (<View>
             <Text>Added with Success</Text>
          </View>
         ):null
         }
         
         {
        error ? (<View>
             <Text>Error : Not Added </Text>
          </View>
         ):null
         }
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
        <Text style={{color:Colors,fontSize:30,textAlign:'center'}} >Add Form</Text>

          <TextInput style={styles.textInput}

            onChangeText={(clNometprenom) => setclNometprenom(clNometprenom)}
            value={clNometprenom}
            placeholder="Nom et prénom"

          />
          <TextInput style={styles.textInput}
            onChangeText={(clCin) => setclCin(clCin)}
            value={clCin}
            placeholder="11122255" />
          {/* Switch  */}

         {/* <DateTimePicke/> */}
          <TextInput style={styles.textInput}
            onChangeText={(clMail) => setclMail(clMail)}
            value={clMail}
            placeholder="Fahd@gmail.com" />
          <TextInput style={styles.textInput}
            onChangeText={(clTel) => setclTel(clTel)}
            value={clTel}
            placeholder="22223322" />
          <TextInput style={styles.textInput}
            onChangeText={(clSoc) => setclSoc(clSoc)}
            value={clSoc}
            placeholder="society Name" />
                      <Dropdown/>


          <View style={styles.center}>
            <View style={styles.buttonStyle1} >
              <TouchableOpacity onPress={handleSubmit}>


                <Text style={styles.textStyle}>
                  Add Client
                </Text>

              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>




    </View>


  );
};


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",

  },
  ///Button Add Client Edit
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle1: {
    backgroundColor: '#465bd8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 50,
    width: 200,
    height: 50,
    marginTop:20,
    elevation: 4

  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    
    
  },

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
 
  scrollView: {
    flexDirection: "column"
  },

  liste: {
    flex: 1
  },


});
export default FormAjoutClients;