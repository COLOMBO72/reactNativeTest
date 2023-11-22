import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Pin from '../components/Pin';
import {observer} from 'mobx-react-lite';
import {pinsStore} from '../store/store';
import MyText from '../components/MyText';

export interface IPin {
  pin: {
    urls: {
      raw: string;
    };
    user: {
      name: string;
    };
  };
  id: string;
}

const HomeScreen: React.FC = observer(() => {
  const [pins, setPins] = React.useState<IPin[]>([]);

  React.useEffect(() => {
    pinsStore.fetchPins();
    setPins(pinsStore.allpins);
  }, []);

  if (pinsStore.error) {
    return (
      <View>
        <MyText>{pinsStore.error}</MyText>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flex: 1}}>
        {pins
          .filter((_, index) => index % 2 == 1)
          .map(pin => (
            <Pin pin={pin} key={pin.id} />
          ))}
      </View>
      <View style={{flex: 1}}>
        {pins
          .filter((_, index) => index % 2 == 0)
          .map(pin => (
            <Pin pin={pin} key={pin.id} />
          ))}
      </View>
    </ScrollView>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
  },
});

// Мои попытки сделать бесконечный скролл

// const [currentPage, setCurrentPage] = React.useState(1);

// const loadMorePins = () => {
//   setCurrentPage(currentPage + 1);
// };

// const renderLoader = () => {
//   return (
//     <View>
//       <ActivityIndicator size={'large'} color={'#aaa'} />
//     </View>
//   );
// };

// <>
//   <View style={{flex: 1}}>
//     <FlatList
//       data={pins.filter((_, index) => index % 2 == 1)}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//       ListFooterComponent={renderLoader}
//       onEndReached={loadMorePins}
//       onEndReachedThreshold={0}
//     />
//   </View>
// </>

// const renderItem = pin => {
//   return <Pin pin={pin} />;
// };
