import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Pin from '../components/Pin';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container__columnLeft}>
        <Pin
          title={'Text1'}
          image={
            'https://i0.wp.com/spartansboxing.com/wp-content/uploads/2023/08/Mike-Tyson.png?fit=1920%2C1080&ssl=1'
          }
        />
        <Pin
          title={'Text2'}
          image={'https://www.surfertoday.com/images/stories/wave-quotes.jpg'}
        />
        <Pin
          title={'Text3'}
          image={
            'https://www.refinery29.com/images/10977152.jpg?format=webp&width=720&height=864&quality=85'
          }
        />
      </View>
      <View style={styles.container__columnRight}>
        <Pin
          title={'Text1'}
          image={
            'https://i0.wp.com/spartansboxing.com/wp-content/uploads/2023/08/Mike-Tyson.png?fit=1920%2C1080&ssl=1'
          }
        />
        <Pin
          title={'Text2'}
          image={'https://www.surfertoday.com/images/stories/wave-quotes.jpg'}
        />
        <Pin
          title={'Text3'}
          image={
            'https://www.refinery29.com/images/10977152.jpg?format=webp&width=720&height=864&quality=85'
          }
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  container__columnLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    margin: 5,
  },
  container__columnRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    margin: 5,
  },
});
