import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.logoContainer}>
    <Image source={require('../images/logo.png')} style={styles.logo} />
    <Text style={styles.title}>Click on a gym to check its busyness.</Text>
  </View>
);

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 390, // Adjust as needed
  },
  logo: {
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
  },
  title: {
    marginTop: 20, // Increased margin top for better spacing
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40, // Increased font size
  },
});

export default Header;
