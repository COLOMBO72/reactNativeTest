import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import MyText from './MyText';
import CustomIcon from './CustomIcon';

interface IProps {
  title: string;
  image: string;
}

const Pin = (props: IProps) => {
  const {title, image} = props;
  const AddToFavorites = () => {};
  const [ratio, setRatio] = React.useState(1);

  React.useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View style={styles.pin}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, {aspectRatio: ratio}]}
          source={{
            uri: image,
          }}
        />
        <Pressable style={styles.heartBtn} onPress={AddToFavorites}>
          <CustomIcon name="like" size={20} color={'#bfb6b6'} />
        </Pressable>
      </View>
      <MyText>{title}</MyText>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  pin: {
    width: '100%',
    margin: 5,
  },
  image: {
    width: '100%',
    borderRadius: 20,
  },
  heartBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
