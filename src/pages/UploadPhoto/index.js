import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import {NavigationContainer} from '@react-navigation/native';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>M. Sigid Prasetyo</Text>
          <Text style={styles.profession}>Mobile Developer</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
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
