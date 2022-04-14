import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <View>
        <Profile name="Raani" desc="Dokter Anak" />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value="Universitas Amikom, 2022" />
        <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
        <ProfileItem label="No. STR" value="0000116622081996" />
        <View style={styles.wrapperButton}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Chatting')}
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  wrapperButton: {padding: 40, paddingTop: 23},
});
