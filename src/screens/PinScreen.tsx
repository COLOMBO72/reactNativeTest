import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomIcon from '../components/CustomIcon';
import {useNavigation, useRoute} from '@react-navigation/native';
import {pinsStore} from '../store/store';

const PinScreen = () => {
  const pins = pinsStore.pins;
  const [ratio, setRatio] = React.useState(1);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const pinId = route.params.id;
  const pin = pins.find(p => p.id == pinId);

  React.useEffect(() => {
    if (pin?.urls.raw) {
      Image.getSize(pin.urls.raw, (width, height) => setRatio(width / height));
    }
  }, [pin?.urls.raw]);
  if (!pin) {
    return <Text>Pin not found!</Text>;
  }
  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <View style={styles.container}>
          <Pressable
            style={[styles.backBtn, {top: insets.top + 20}]}
            onPress={() => navigation.navigate('Home')}>
            <CustomIcon name="left" size={20} color={'white'} />
          </Pressable>
          <Image
            style={[styles.image, {aspectRatio: ratio}]}
            source={{
              uri: pin.urls.raw,
            }}
          />
          <Text style={styles.title}>{pin.user.name}</Text>
          <Text style={styles.descr}>{pin.user.bio}</Text>
          <Text style={styles.descr}>{pin.created_at}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    margin: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  descr: {
    margin: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  backBtn: {
    position: 'absolute',
    zIndex: 2,
    top: 15,
    left: 10,
  },
});
