import {StyleSheet, Text} from 'react-native';
import React from 'react';

const MyText = ({children}: any) => {
  return <Text numberOfLines={2} style={styles.mytext}>{children}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  mytext: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000000',
  },
});
