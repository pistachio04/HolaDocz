import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts, useForm, storeData, showError} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();
  // Proses Login Firebase
  const login = () => {
    // console.log('form: ', form);
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        // console.log('success: ', res);
        dispatch({type: 'SET_LOADING', value: false});
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            // console.log('data: ', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        // console.log('error: ', err);
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    flex: 1,
    //justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
