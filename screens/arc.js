import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, SafeAreaView } from 'react-native';
import ScreenGym from './components/screenGym';
import image1 from '../images/image4.jpg'; // Import the image
import CapacityCard from './components/capacitycard';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import facilityData from './arc_data.json';

const title = "Adventure Recreation Center";
const arcInfo = {
    title: "ARC",
    phoneNumber: "614-247-8686",
    address: "855 Woody Hayes Drive, Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48902.05569774581!2d-83.0686248982332!3d39.99999267761379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e895ec79b0d%3A0xd9c1d00ff53097ad!2sOhio%20State%20University%20Adventure%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1710551739190!5m2!1sen!2sus",
};

const ArcScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [capacityData, setCapacityData] = useState(facilityData);
  
  const handleInfoPress = () => {
    navigation.navigate('InfoScreen', arcInfo);
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
              {/* Map over the capacity data and render CapacityCard components */}
              {capacityData.map((data, index) => (
                <CapacityCard
                  key={index}
                  title={data.title}
                  capacity={data.capacity}
                  lastUpdated={data.lastupdated}
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
    paddingTop: 125, // Adjust the paddingTop to create space
  },
  scrollContainer: {
    alignItems: 'center',
  },
  capacityContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ArcScreen;
