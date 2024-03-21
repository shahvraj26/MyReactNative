import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import CapacityCard from './capacitycard'; // Import the CapacityCard component

const Favorites = ({ favoriteGyms, onToggleFavorite }) => {
  // If favoriteGyms is not empty, render the favorite gyms
  if (!favoriteGyms || favoriteGyms.length === 0) {
    // Render a message or placeholder when the array is empty
    return (
      <View style={styles.container}>
        <FontAwesome name="star" size={24} color="yellow" style={styles.icon} />
        <Text style={styles.text}>Favorites</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FontAwesome name="star" size={24} color="yellow" style={styles.icon} />
      <Text style={styles.text}>Favorites</Text>
      {/* Render favorite gyms */}
      {favoriteGyms.map(gym => (
        <CapacityCard
          key={gym.id}
          title={gym.title}
          capacity={gym.capacity}
          lastUpdated={gym.lastUpdated}
          isFavorite={gym.isFavorite}
          onToggleFavorite={() => onToggleFavorite(gym.id)} // Pass the ID of the gym to toggle favorite status
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 310, // Adjust as needed to position the Favorites component
    left: 10, // Adjust as needed to position the Favorites component
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40, // Adjust as needed for the text size
    marginLeft: 10, // Adjust as needed for spacing
  },
  text2: {
    color: 'white',
  },
  icon: {
    marginRight: 5, // Adjust as needed for spacing
  },
  lineContainer: {
    flex: 1,
    marginLeft: 10, // Adjust as needed for spacing
  },
});

export default Favorites;
