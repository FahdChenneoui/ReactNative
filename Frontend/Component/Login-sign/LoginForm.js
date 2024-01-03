import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput,Button } from 'react-native';
import Api from '../../Axios/Api';
import { useLogin } from '../../context/LoginProvider';
import { isValidEmail, isValidObjField, updateError } from '../../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import { StackActions } from '@react-navigation/native';

const LoginForm = () => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const {setLoginPending}=useLogin()

  const [error, setError] = useState('');

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 8)
      return updateError('Password is too short!', setError);

    return true;
  };
  ///sign in from back to front
  const submitForm = async () => {
    setLoginPending(true)
    if (isValidForm()) {
      try {
        const res = await Api.post('/sign-in', { ...userInfo });
        ///resfresh champ if connect
        if (res.data.success) {
          setUserInfo({ email: '', password: '' });
          setProfile(res.data.user);
          setIsLoggedIn(true);
        }
        
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    setLoginPending(false);

  };
///forms Email and Password login
  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        label='Email'
        placeholder='example@email.com'
        autoCapitalize='none'
      />
      <FormInput
        value={password}
        onChangeText={value => handleOnChangeText(value, 'password')}
        label='Password'
        placeholder='********'
        autoCapitalize='none'
        secureTextEntry
      />
      {/* import Login Button */}
      <FormSubmitButton onPress={submitForm} title='Login' /> 
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
