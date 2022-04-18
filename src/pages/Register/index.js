import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(success => {
        // Signed in
        console.log('sukses registrasi: ', success);
        // ...
      })
      .catch(error => {
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log('eror registrasi: ', errorMessage);
        // ..
      });

    // Fire.auth();
    // createUserWithEmailAndPassword(form.email, form.password)
    //   .then(success => {
    //     // Signed in
    //     // const user = success.user;
    //     console.log('register success: ', success);
    //     // ...
    //   })
    //   .catch(error => {
    //     // const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log('error register: ', errorMessage);
    //     // console.log('kode error: ', errorCode);
    //     // ..
    //   });
    // navigation.navigate('UploadPhoto');
  };
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={value => setForm('profession', value)}
          />
          <Gap height={24} />
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
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
