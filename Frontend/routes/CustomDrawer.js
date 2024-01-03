import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet
} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,

} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DarkTheme } from "@react-navigation/native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../constants/context';
import { useLogin } from '../context/LoginProvider';

const MY_URL = 'https://www.google.com/intl/fr/gmail/about/';
const MY_TEXT = 'Gmail';

const CustomDrawer = props => {
  // const paperTheme = useTheme();

  // const {toggleTheme} = React.useContext(AuthContext);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }
  const { setIsLoggedIn, profile } = useLogin();

  return (

    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#465bd8' }}>
        <ImageBackground
          source={require('../assets/images/BLuee.png')}
          style={{ padding: 20 }}>
          <Image
            source={{ uri: profile.avatar || require('../assets/images/user-profile.jpg') }}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}>
            {profile.fullname}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}>
            {profile.email}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => Linking.openURL(MY_URL)} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              {MY_TEXT}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLoggedIn(false)}
          style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => { toggleTheme() }}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                {/* <Switch value={paperTheme.dark}/> */}
                <Switch value={isDarkTheme} />

              </View>
            </View>
          </TouchableRipple>

        </Drawer.Section>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default CustomDrawer;