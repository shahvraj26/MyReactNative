import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, SafeAreaView } from 'react-native';
import ScreenGym from './components/screenGym';
import image1 from '../images/image3.jpg'; // Import the image
import CapacityCard from './components/capacitycard';
import facilityData from './jon_data.json';

const title = "Jesse Owens North";
const gymName = "JON";

const jonInfo = {
    title: "JON",
    phoneNumber: "614-292-0696",
    address: "2151 Neil Ave, Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.1125320383153!2d-83.0176271249243!3d40.005933871508574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e97e4bfffff%3A0xd26ec619d72a2ee5!2sJesse%20Owens%20North%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1710551891369!5m2!1sen!2sus",
};

const JonScreen = ({ navigation, favoriteGyms, toggleFavorite }) => {
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
    navigation.navigate('InfoScreen', jonInfo);
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

export default JonScreen;
