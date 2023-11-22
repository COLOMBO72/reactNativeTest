import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import MyText from './MyText';
import {useNavigation} from '@react-navigation/native';
import CustomIcon from './CustomIcon';
import { observer } from 'mobx-react-lite';

const Pin: React.FC = observer(({pin}) => {
  const {urls, user, id} = pin;
  const [ratio, setRatio] = React.useState(1);
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate('Pin', {id});
  };

  React.useEffect(() => {
    if (urls.raw) {
      Image.getSize(urls.raw, (width, height) => setRatio(width / height));
    }
  }, [urls.raw]);

  //#ff5454 //#545454
  return (
    <View style={styles.pin}>
      <View style={styles.imageContainer}>
        <Pressable style={[styles.image]} onPress={id => handleNav(id)}>
          <Image
            style={[styles.image, {aspectRatio: ratio}]}
            source={{
              uri: urls.raw,
            }}
          />
        </Pressable>
        <Pressable style={styles.heartBtn}>
            <CustomIcon name="like" size={20} color={'#545454'} />
        </Pressable>
      </View>
      <MyText>{user.name}</MyText>
    </View>
  );
});

export default Pin;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  pin: {
    width: '100%',
    padding: 4,
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  heartBtn: {
    backgroundColor: '#969696',
    borderRadius: 100,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
