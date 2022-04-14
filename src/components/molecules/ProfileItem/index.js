import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  value: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
});
