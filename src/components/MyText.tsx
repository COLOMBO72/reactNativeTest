import {StyleSheet, Text} from 'react-native';
import React from 'react';

const MyText = ({children}: any) => {
  return <Text style={styles.mytext}>{children}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  mytext: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 19,
    color: '#000000',
  },
});
