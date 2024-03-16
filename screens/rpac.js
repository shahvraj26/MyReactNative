import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import ScreenGym from './components/screenGym';
import image1 from '../images/image1.jpg'; // Import the image
import CapacityCard from './components/capacitycard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import facilityData from './facility_data.json'; 

const title = "Recreation & Physical Center";

const rpacInfo = {
    title: "RPAC",
    phoneNumber: "614-292-7671",
    address: "337 Annie & John Glenn Avenue, Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.3951860510724!2d-83.0207417249247!3d39.999619471509746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e944340e607%3A0x525aa0ea4552bf33!2sRecreation%20and%20Physical%20Activity%20Center!5e0!3m2!1sen!2sus!4v1710551828093!5m2!1sen!2sus",
};

const RpacScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [capacityData, setCapacityData] = useState(facilityData);

  const handleInfoPress = () => {
    navigation.navigate('InfoScreen', rpacInfo);
  };

  const opacity = scrollY.interpolate({
    inputRange: [50, 100],
    outputRange: [0.9, 1],
    extrapolate: 'clamp',
  });

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cardsContainer: {
    flex: 1,
    paddingTop: 80, // Adjust the paddingTop to create space
  },
  scrollContainer: {
    alignItems: 'center',
  },
  capacityContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default RpacScreen;
