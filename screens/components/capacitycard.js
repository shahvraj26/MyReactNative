import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CapacityCard = ({ title, capacity }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${capacity}%` }]}></View>
      </View>
      <Text style={styles.capacityText}>{capacity}% Capacity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    width:  350,
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
});

export default CapacityCard;
