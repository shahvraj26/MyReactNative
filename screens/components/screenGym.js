import React, {useState} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, sizes } from '../../constants/theme';
import ScreenHeader from './screenHeader'; // Assuming you have a Header component

const ScreenGym = ({title, image, onInfoPress}) => {
  return (
    <View style={styles.container}>
      <ScreenHeader onInfoPress={onInfoPress}/>
      <View style={styles.content}>
        <Image source={image} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 50, // Adjust the marginTop to move the image higher
  },
  logo: {
    width: sizes.width - 80,
    height: 200, // Make the logo square by setting height equal to width
    resizeMode: 'cover', // Ensure the image covers the specified dimensions
    marginBottom: 15,
    borderRadius: 20, // Make the image rounded
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default ScreenGym;
