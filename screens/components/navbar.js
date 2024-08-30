import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
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
        <FontAwesome name="home" size={40} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFavoritePress} style={styles.navItem}>
        <FontAwesome name="star" size={40} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D30000',
    height: 85,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  navItem: {
    padding: 10,
  },
  icon: {
    marginBottom: 25,
  },
});

export default NavBar;
