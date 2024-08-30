import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import CapacityCard from './capacitycard'; // Import the CapacityCard component

const Favorites = ({ favoriteGyms, onToggleFavorite }) => {
  const handleToggleFavorite = (gym) => {
    onToggleFavorite(gym, gym.gymName); // Ensure we pass both gym and gymName
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../images/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.text}>Favorites</Text>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {favoriteGyms && favoriteGyms.length > 0 ? (
          favoriteGyms.map((gym, index) => (
            gym && gym.title && gym.capacity && gym.lastupdated && gym.gymName ? (
              <CapacityCard
                key={index}
                title={`${gym.gymName} / ${gym.title}`} // Combine gym name and area name
                capacity={gym.capacity}
                lastUpdated={gym.lastupdated}
                isFavorite={true}
                toggleFavorite={() => handleToggleFavorite(gym)}
              />
            ) : (
              <Text key={index} style={styles.errorText}>
                Invalid gym data
              </Text>
            )
          ))
        ) : (
          <Text style={styles.noFavoritesText}>No favorite gyms</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    paddingTop: 72, // Adjust this value to move the header down
    alignItems: 'center',
  },
  scrollContainer: {
    paddingBottom: 85,
    alignItems: 'center',
    flexGrow: 1, // Ensures ScrollView content expands as needed
  },
  logoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
  },
  lineContainer: {
    alignItems: 'center',
  },
  line: {
    width: 50,
    height: 1,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  noFavoritesText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
});

export default Favorites;
