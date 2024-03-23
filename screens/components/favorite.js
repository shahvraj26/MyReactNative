import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import CapacityCard from './capacitycard'; // Import the CapacityCard component

const Favorites = ({ favoriteGyms, onToggleFavorite }) => {
  // Check if favoriteGyms is defined before filtering
  const favoriteCapacityCards = favoriteGyms && favoriteGyms.filter(gym => gym.isFavorite);

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <View style={styles.logoContainer}>
          <Image source={require('../../images/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.text}>Favorites</Text>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
        </View>
        {/* Render favorite capacity cards if favoriteGyms is defined */}
        {favoriteCapacityCards && favoriteCapacityCards.length > 0 ? (
          favoriteCapacityCards.map(gym => (
            <CapacityCard
              key={gym.id}
              title={gym.title}
              capacity={gym.capacity}
              lastUpdated={gym.lastUpdated}
              isFavorite={true} // Assuming all favorites are marked as favorites
              onToggleFavorite={() => onToggleFavorite(gym.id)}
            />
          ))
        ) : (
          <Text style={styles.noFavoritesText}>No favorite gyms</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 490, // Adjusted marginTop to move content higher on the screen
  },
  logoContainer: {
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 10,
  },
  lineContainer: {
    width: 50,
    height: 1,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  noFavoritesText: {
    color: 'white',
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Favorites;
