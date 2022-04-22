import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, isRemove, photo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={photo} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.proffesion}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  removePhoto: {position: 'absolute', right: 8, bottom: 8},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {alignItems: 'center', justifyContent: 'center'},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  proffesion: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
});
