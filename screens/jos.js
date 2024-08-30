import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, SafeAreaView } from 'react-native';
import ScreenGym from './components/screenGym';
import image1 from '../images/image5.jpg'; // Import the image
import CapacityCard from './components/capacitycard';
import facilityData from './jos_data.json';

const title = "Jesse Owens South";
const gymName = "JOS";

const josInfo = {
    title: "JOS",
    phoneNumber: "614-292-7621",
    address: "175 W. 11th Ave., Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6113.203741958295!2d-83.01444402492511!3d39.9950016715106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ec0f352ac71%3A0xa8a890b8d97a6fc2!2sJesse%20Owens%20Recreation%20Center%20South!5e0!3m2!1sen!2sus!4v1710551948432!5m2!1sen!2sus"
};

const JosScreen = ({ navigation, favoriteGyms, toggleFavorite }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [capacityData, setCapacityData] = useState(facilityData);

  const isFavorite = (data) => {
    return favoriteGyms.some(
      (gym) =>
        gym.title === data.title &&
        gym.capacity === data.capacity &&
        gym.lastupdated === data.lastupdated &&
        gym.gymName === gymName
    );
  };

  const handleToggleFavorite = (data) => {
    toggleFavorite(data, gymName);
  };

  const handleInfoPress = () => {
    navigation.navigate('InfoScreen', josInfo);
  };

  const opacity = scrollY.interpolate({
    inputRange: [50, 100],
    outputRange: [0.9, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScreenGym title={title} image={image1} onInfoPress={handleInfoPress} />
        <Animated.View style={[styles.cardsContainer, { opacity }]}>
          <Animated.ScrollView
            contentContainerStyle={styles.scrollContainer}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          >
            <View style={styles.capacityContainer}>
              {capacityData.map((data, index) => (
                <CapacityCard
                  key={index}
                  title={data.title}
                  capacity={data.capacity}
                  lastUpdated={data.lastupdated}
                  isFavorite={isFavorite(data)}
                  toggleFavorite={() => handleToggleFavorite(data)}
                />
              ))}
            </View>
          </Animated.ScrollView>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cardsContainer: {
    flex: 1,
    paddingTop: 125,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  capacityContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default JosScreen;
