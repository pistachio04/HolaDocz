import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="M. Sigid Prasetyo" desc="Mobile Developer" />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last update"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List name="Language" desc="Last update" type="next" icon="language" />
      <List name="Give Us rate" desc="Last update" type="next" icon="rate" />
      <List name="Help Center" desc="Last update" type="next" icon="help" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
