import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const Favorites = () => (
  <View style={styles.container}>
    <FontAwesome name="star" size={24} color="yellow" style={styles.icon} />
    <Text style={styles.text}>Favorites</Text>
  </View>
);

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
  icon: {
    marginRight: 5, // Adjust as needed for spacing
  },
  lineContainer: {
    flex: 1,
    marginLeft: 10, // Adjust as needed for spacing
  },
});

export default Favorites;
