import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from 'react-native';
import {Colors} from '../constants';
import Buttons from '../routes/Buttons';
import ProfileScreen from './ProfileScreen';
const MY_TEXT = 'PolySoft&Co';

const Onboarding = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:Colors.white}} >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* handshake image */}
            <View style={{flex:3,flexDirection:"column",backgroundColor:'#ddd'}} >
                <ImageBackground source={require('../assets/images/handshake.png')}
                style={{flex:1,width:'100%',backgroundColor:'#fff'}}  />
            </View>

            {/* button and text */}
            <View style={{flex:2,backgroundColor:'#fff'}} >
                {/* Text part */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff'}} >
                    <Text style={{color:Colors.black,fontSize:30}} >{MY_TEXT}</Text>
                    <Text style={{maxWidth:'50%', color:"#999",fontSize:14, textAlign:'center',paddingTop:10}} >All new in one place, be the first to know last new</Text>
                </View>   

                {/* Button */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}} >
                    {/* <TouchableOpacity style={{justifyContent:'center',width:'90%',backgroundColor:Colors.primary,height:50,marginBottom:30,borderRadius:10}} 
                    onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',color:Colors.white}} >Get Started</Text>


                    </TouchableOpacity> */}
                    <Buttons btn_text={"Get Started"} on_press={()=>navigation.navigate("AppForm")} />
                    
                    

                </View>

            </View>
            
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})