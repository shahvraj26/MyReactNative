import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const NavBar = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleFavoritePress = () => {
    navigation.navigate('Favorites');
  };
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={handleHomePress} style={styles.navItem}>
        <Image source={require('../../images/home_button.png')} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFavoritePress} style={styles.navItem}>
        <FontAwesome name="star" size={40} color="white" style={styles.star} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5, // Changed to 0 to ensure it's not cutting off content
    flexDirection: 'row',
    justifyContent: 'space-around', // Changed to space-around for even spacing
    alignItems: 'center',
    backgroundColor: '#D30000',
    height: 85, // Ensure this is enough height to show the entire icon
    borderTopLeftRadius: 5, // Add a border radius to round out the top left corner
    borderTopRightRadius: 5,
  },
  navItem: {
    padding: 10,
  },
  home: {
    marginBottom: 25,
    width: 40,
    height: 40,
  },
  star: {
    marginBottom: 25,
  }
});

export default NavBar;