// import React,{useState} from 'react';
// import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity,Linking } from 'react-native';
// import {Colors} from '../constants';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Buttons from '../routes/Buttons';


// const MY_URL = 'https://www.google.com/intl/fr/gmail/about/';
// const MY_TEXT = 'Sign in with Google';
// const MY_URL1='https://www.facebook.com/';
// const MY_TEXT1 = 'Sign in with Facebook';

// const Login = () => {

//     const [formData,setformData] = useState({
//         email:'',
//         password:''
//     })

//     return (
//         <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
//             <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//             {/* login form section */}
//             <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%'}} >
//                 <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
//                     <Text style={{fontSize:30,color:Colors.black}} >Welcome Back</Text>
//                     <Image source={require('../assets/images/waving_hand.png')} style={{width:30,height:30}}  />
//                 </View>
//                 <Text style={{fontSize:14,paddingTop:10,color:"#777"}} >I am happy to see you again. You can continue where you left off by logging in</Text>

//                 <View style={{flexDirection:'column',paddingTop:20}} >
//                     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
//                         <Icon name="envelope-o" size={22} color="#818181" />
//                         <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="Enter Email" placeholderTextColor="#818181" />

//                     </View>

//                     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
//                         <Icon name="lock" size={22} color="#818181" />
//                         <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="Enter Password" secureTextEntry={true} placeholderTextColor="#818181" />
//                     </View>

//                     <View style={{width:'95%',marginBottom:10}} >
//                         <Text style={{fontSize:17,
//                     color:'#818181',alignSelf:'flex-end',paddingTop:10}} >Forgot Password?</Text>
//                     </View>

//                     <Buttons  btn_text={"Sign In"} on_press={()=>console.log(formData)} />
//                 </View>
//             </View>

//             {/* social login section */}
//             <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column',paddingHorizontal:'3%'}} >
//                 <Text style={{textAlign:'center',marginVertical:35,color:'#818181',fontSize:20}} >Or</Text>

//                 <View style={{flexDirection:'column',alignItems:'center',width:'95%'}} >
//                     <TouchableOpacity onPress={() => Linking.openURL(MY_URL)}style={styles.social_btn} >
//                         <Image style={styles.social_img} source={require('../assets/images/google_icon.png')} />
//                         <Text style={{width:'80%',textAlign:'center',fontSize:16,}} >{MY_TEXT} </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={() => Linking.openURL(MY_URL1)} style={styles.social_btn} >
//                         <Image style={styles.social_img} source={require('../assets/images/facebook_icon.png')} />
//                         <Text style={{width:'80%',textAlign:'center',fontSize:16,}} >{MY_TEXT1}</Text>
//                     </TouchableOpacity>
//                 </View>
                
//                 <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff',marginBottom:40}} >
//                     <Text style={{fontSize:17,color:'#818181'}} >Don't have a account? </Text>
//                     <Text style={{fontSize:18,color:'#333'}} >Sign Up</Text>
//                 </View>
                 


//             </View>
            
//         </ScrollView>
//     )
// }

// export default Login

// const styles = StyleSheet.create({
//     input:{
//         position:'relative',
//         height:'100%',
//         width:'90%',
//         paddingLeft:20,
//     },
//     social_btn:{
//         height:55,
//         width:'100%',
//         borderWidth:1,
//         borderRadius:10,
//         borderColor:'#ddd',
//         flexDirection:'row',
//         alignItems:'center',
//         marginBottom:20
//     },
//     social_img:{
//         width:25,
//         height:25,
//         marginLeft:15
//     }
// })