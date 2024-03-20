import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NavBar = ({ onHomePress }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={onHomePress} style={styles.navItem}>
        <Image source={require('../../images/home_button.png')} style={styles.home} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D30000',
    height: 85,
  },
  navItem: {
    padding: 80,
  },
  home: {
    marginBottom: 30,
    width: 45,
    height: 45,
  },
});

export default NavBar;