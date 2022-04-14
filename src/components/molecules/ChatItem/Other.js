import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {DummyDoctor9} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor9} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Adekk jatuh cinta tidak selalu menyenangkan.
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  chatContent: {
    padding: 12,
    paddingRight: 18,
    maxWidth: '80%',
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    marginLeft: 16,
    flexDirection: 'row',
  },
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.white,
  },
  date: {
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 8,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
});
