import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon library

const CapacityCard = ({ title, capacity, lastUpdated }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCardPress = () => {
    // Navigate to the specific screen when the capacity card is pressed
    navigation.navigate('CalendarScreen', { title });
  };

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
    // Pass the toggleFavorite function to update the list of favorite gyms
  };

  // Parse the capacity string to extract the current capacity and maximum capacity
  const [currentCapacity, maxCapacity] = capacity.split(' out of ').map(Number);
  
  // Calculate the percentage filled
  const percentageFilled = (currentCapacity / maxCapacity) * 100;

  // Determine the color of the progress bar based on the percentage filled
  let progressBarColor;
  if (percentageFilled >= 75) {
    progressBarColor = 'red';
  } else if (percentageFilled >= 50) {
    progressBarColor = 'orange';
  } else {
    progressBarColor = 'green';
  }

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.cardTitle}>{title}</Text>
          <TouchableOpacity onPress={handleFavoritePress}>
            <AntDesign
              name={isFavorite ? 'star' : 'staro'}
              size={24}
              color={isFavorite ? 'gold' : 'grey'}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.progressBar, { backgroundColor: '#555' }]}>
          <View style={[styles.progress, { width: `${percentageFilled}%`, backgroundColor: progressBarColor }]}></View>
        </View>
        <Text style={styles.capacityText}>Capacity: {capacity}</Text>
        <Text style={styles.lastUpdatedText}>{lastUpdated}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    width: 350,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  favoriteIcon: {
    marginLeft: 10,
  },
  progressBar: {
    height: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  progress: {
    height: 20,
    borderRadius: 20,
  },
  capacityText: {
    color: 'white',
    fontSize: 16,
  },
  lastUpdatedText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CapacityCard;
