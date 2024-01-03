// import React from 'react';
// import { 
//   Text, 
//   View,
//   Image,
//   ImageBackground,
//   Button,
//   Alert,
//   TouchableOpacity,
//   TextInput
// } from 'react-native';
// import stripe from '@stripe/stripe-react-native';
// const stripePayment = (props) => {
//   const [cardName, onChangeText] = React.useState("");
//   const [cardNumber, onChangeText1] = React.useState("");
//   const [cardDate, onChangeText2] = React.useState("");
//   const [cardCVV, onChangeText3] = React.useState("");

//   const [error, setError] = React.useState({cardName:false,cardNumber:false,cardDate:false,cardCVV:false});


//   function handleBackButtonClick() {
//     props.history.goBack(null);
//     return true;
//   }

//   const handleClick = async () => { 
//     let i = 0;

//     if(cardName === ""){
//       setError(prev => ({...prev,cardName:true}));
//       i++;
//     } else setError(prev => ({...prev,cardName:false})); 

//     if(cardNumber === ""){
//       setError(prev => ({...prev,cardNumber:true}));
//       i++;
//     }else if(cardNumber.toString().length !== 19){
//       setError(prev => ({...prev,cardNumber:true}));
//       i++;
//     } else setError(prev => ({...prev,cardNumber:false}));   


//     if(cardDate === ""){
//       setError(prev => ({...prev,cardDate:true}));
//       i++;
//     } else setError(prev => ({...prev,cardDate:false})); 


//     if(cardCVV === ""){
//       setError(prev => ({...prev,cardCVV:true}));
//       i++;
//     } else setError(prev => ({...prev,cardCVV:false}));        
    

//     if(i === 0){
//       await submitForm();
//     }else {     
//       return;
//     }
//   }

//  async function testStripe() {
//     let lnum = cardDate.split('/')
//     let genCard = {
//       'card[number]': cardNumber,
//       'card[exp_month]': parseInt(lnum[0]),
//       'card[exp_year]': parseInt(lnum[1]),
//       'card[cvc]': cardCVV
//     }

//     let results = await fetch("https://api.stripe.com/v1/tokens", {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: "Bearer " + "sk_test_XXXXXXXXXXXXXXXX",
//       },
//       body: Object.keys(genCard)
//         .map(key => key + '=' + genCard[key])
//         .join('&'),
//     }).then(response => response.json())

//     console.log(results)

//     return results['id'];
//   }

//   const submitForm = async () => {
//     let cardnum = cardDate.split('/')
//     console.log(cardnum)
//     const isCardValid = stripe.isCardValid({
//       number: cardNumber,
//       expMonth: parseInt(cardnum[0]),
//       expYear: parseInt(cardnum[1]),
//       cvc: cardCVV,
//     });

//     console.log(isCardValid)
//     //return;
//     if(isCardValid){   
      
//         testStripe()

//     }else{
//       setLoading(false);
//       alert('Not valid card. Please add valid card details.')
//     } 
//   }

//   const handleChangeCard = (value) => {

//     //if(value.length>16) return

//     var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
//     var matches = v.match(/\d{4,16}/g);
//     var match = matches && matches[0] || ''
//     var parts = []

//     for (let i=0, len=match.length; i<len; i+=4) {
//         parts.push(match.substring(i, i+4))
//     }

//     if (parts.length) {
//         value = parts.join(' ')
//     } /*else {
//         return value
//     }*/

//     onChangeText1(value);    

//   }

//   const handleChangeCVV = (text) => {
//       if(text.length>3) return
//       onChangeText3(text);    
//   }

//   const handleChangeDate = (text) => {
//       if(text.length>5) return

//       if(text.length == 2 && cardDate.length == 1){
//         text += '/'
//       }else if(text.length == 2 && cardDate.length == 3){
//         text = text.substring(0 , text.length-1)
//       }

//       onChangeText2(text);    
//   }

//   return (
      
     
//         <View style={styles.mainBoxOuter}>
//           <View style={styles.mainHeaderOuter}>           
            
//               <Text style={styles.headerTitle}>Add Card</Text>
          
//           </View>
//           <View style={styles.mainBody}>
//             <View style={styles.centerBoxNo}>
//               <View style={styles.centerBox}>
//                 <Text style={[styles.mainTitle, styles.blackText]}>Add Payment Card</Text>
//                 <Text style={[styles.subTitle, styles.greyText]}>Please fill the detail  below if you want to add card</Text>
//               </View>
//               <View style={styles.formOuter}>
//                 <View style={styles.formGroupDiv}>
//                   <View style={styles.formGroupNew}>
//                     <Text style={styles.formLabelNew}>Cardholder Name</Text>
//                     <TextInput
//                       style={[styles.formControlNew, { borderColor: error.cardName ? 'red' : '#b2b2b2'}]}
//                       value={cardName}
//                       onChangeText={onChangeText}
//                       placeholder=""
//                       placeholderTextColor = "#fbfbfb"
//                     />                    
//                   </View>
//                 </View>
//                 <View style={styles.formGroupDiv}>
//                   <View style={styles.formGroupNew}>
//                     <Text style={styles.formLabelNew}>Card Number</Text>
//                     <TextInput
//                       style={[styles.formControlNew, { borderColor: error.cardNumber ? 'red' : '#b2b2b2'}]}
//                       value={cardNumber}
//                       onChangeText={handleChangeCard}
//                       placeholder=""
//                       placeholderTextColor = "#fbfbfb"
//                       keyboardType='numeric'
//                     />
                 
//                   </View>
//                 </View>
//                 <View style={styles.formGroupDiv}>
//                   <View style={styles.formGroupNew}>
//                     <Text style={styles.formLabelNew}>Expiry Date</Text>
//                     <TextInput
//                       style={[styles.formControlNew, { borderColor: error.cardDate ? 'red' : '#b2b2b2'}]}
//                       value={cardDate}
//                       onChangeText={handleChangeDate}
//                       placeholder=""
//                       placeholderTextColor = "#fbfbfb"
//                       keyboardType='numeric'
//                     />
                    
//                   </View>
//                   <View style={styles.formGroupNew}>
//                     <Text style={styles.formLabelNew}>CVV</Text>
//                     <TextInput
//                       style={[styles.formControlNew, { borderColor: error.cardCVV ? 'red' : '#b2b2b2'}]}
//                       value={cardCVV}
//                       onChangeText={handleChangeCVV}
//                       placeholder=""
//                       placeholderTextColor = "#fbfbfb"
//                       keyboardType='numeric'
//                     />
                   
//                   </View>
//                 </View>
//                 <View style={styles.formBtn}>
//                     <TouchableOpacity style={styles.btnGradientDiv} onPress={handleClick}>                        
//                             <Text style={styles.TextStyle}>Add Card</Text>                       
//                     </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//        </View>
//    );
//  }
//  export default stripePayment ;