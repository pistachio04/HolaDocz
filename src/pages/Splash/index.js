import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe =
      //Login Session
      Fire.auth().onAuthStateChanged(user => {
        setTimeout(() => {
          if (user) {
            //user masih login
            console.log('user: ', user);
            navigation.replace('MainApp');
          } else {
            //user sudah logout
            navigation.replace('GetStarted');
          }
        }, 3000);
      });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Hola Doc</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
