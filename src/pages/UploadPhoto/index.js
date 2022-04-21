import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {colors, fonts} from '../../utils';
//import {NavigationContainer} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    launchImageLibrary({includeBase64: true}, response => {
      console.log('response: ', response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Oops, sepertinya anda tidak memilih fotonya?',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        console.log('response getImage: ', response);
        const source = {uri: response.assets[0].uri};

        setPhotoForDB(
          `data: ${response.assets[0].type};base64, ${response.assets[0].base64}`,
        );
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };
  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});
    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
});
