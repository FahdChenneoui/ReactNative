import AsyncStorage from "@react-native-async-storage/async-storage";
/// make my account logged in 
export const signIn = async (email, password) => {
    try {
        const signInRes = await Api.post('/sign-in', {
            email,
            password,
        });
        if (signInRes.data.success) {
            const token = data.token
            await AsyncStorage.setItem('token', token)
        }
        return signInRes

    } catch (error) {
        console.log('error inside singin method.', error.message)

    }


}