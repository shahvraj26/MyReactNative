import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CapacityCard = ({ title, capacity, lastUpdated }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // Navigate to the specific screen when the capacity card is pressed
    navigation.navigate('CalendarScreen', { title });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${capacity}%` }]}></View>
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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  progressBar: {
    backgroundColor: '#555',
    height: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  progress: {
    backgroundColor: 'green',
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
