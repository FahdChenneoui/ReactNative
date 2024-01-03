import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StackActions } from '@react-navigation/native';


import Api from '../../Axios/Api';
// import UploadProgress from './UploadProgress';

const ImageUpload = props => {
  const [profileImage, setProfileImage] = useState('');
  const [progress, setProgress] = useState(0);
  const { token } = props.route.params;
  ///allow or deny the uplode cam if granted 
  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    /// if allow "yes" open the image library to open images (you can make it all to import vds or gif)
    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };
  /// load the photo to the upload profile
  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

    try {
      const res = await Api.post('/upload-profile', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          authorization: `JWT ${token}`,
          /// import the Token to load the photo from postman and it will save in cloudenary and send your react native img to your backend node 
        },
        /// use the UploadProgress component
        // onUploadProgress: ({ loaded, total }) => setProgress(loaded / total)
      });

      if (res.data.success) {
        // when you put the photo and press Upload you go to the main app 
        props.navigation.dispatch(StackActions.replace('AppForm'));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            /// show image in cercle of picking image
            onPress={openImageLibrary}
            style={styles.uploadBtnContainer}
          >
            {profileImage ? (
              <Image
                /// show image in cercle of picking image
                source={{ uri: profileImage }}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <Text style={styles.uploadBtn}>Upload Profile Image</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
          {profileImage ? (
            <Text
              onPress={uploadProfileImage}
              style={[
                styles.skip,
                { backgroundColor: 'green', color: 'white', borderRadius: 8 },
              ]}
            >
              Upload
              {/* uplode the image when i select one  */}
            </Text>
          ) : null}
        </View>
      </View>
      {/* {progress ? <UploadProgress process={progress} /> : null} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2, ///cercle
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
});

export default ImageUpload;
