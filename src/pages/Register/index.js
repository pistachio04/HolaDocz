import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [proffesion, setProffesion] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('UploadPhoto')}
          />
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
