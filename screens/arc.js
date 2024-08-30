import React, { useState, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ScreenGym from './components/screenGym';
import image1 from '../images/image4.jpg';
import CapacityCard from './components/capacitycard';
import facilityData from './arc_data.json';

const ArcScreen = ({ navigation, favoriteGyms, toggleFavorite }) => {
  const scrollViewRef = useRef(null); // Reference to the ScrollView
  const [capacityData, setCapacityData] = useState(facilityData);
  const gymName = "ARC"; // Hardcoded gym name for ARC

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
    const scrollPosition = scrollViewRef.current
      ? scrollViewRef.current.scrollTop
      : 0;

    toggleFavorite(data, gymName); // Pass the gym name

    requestAnimationFrame(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: scrollPosition, animated: false });
      }
    });
  };

  const handleInfoPress = () => {
    navigation.navigate("InfoScreen", {
      title: "Adventure Recreation Center",
      phoneNumber: "614-247-8686",
      address: "855 Woody Hayes Drive, Columbus, OH 43210",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48902.05569774581!2d-83.0686248982332!3d39.99999267761379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e895ec79b0d%3A0xd9c1d00ff53097ad!2sOhio%20State%20University%20Adventure%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1710551739190!5m2!1sen!2sus",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScreenGym
          title="Adventure Recreation Center"
          image={image1}
          onInfoPress={handleInfoPress}
        />
        <View style={styles.cardsContainer}>
          <ScrollView
            ref={scrollViewRef} // Set the ref to the ScrollView
            contentContainerStyle={styles.scrollContainer}
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
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  cardsContainer: {
    flex: 1,
    paddingTop: 125,
  },
  scrollContainer: {
    alignItems: "center",
  },
  capacityContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default ArcScreen;
