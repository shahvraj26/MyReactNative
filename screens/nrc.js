import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, sizes } from '../constants/theme';
import ScreenGym from './components/screenGym'; // Assuming you have a Header component
import image1 from '../images/image2.jpg'; // Import the image

const title = "North Recreation Center";

const nrcInfo = {
    title: "NRC",
    phoneNumber: "614-688-2450",
    address: "149 W. Lane Ave, Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6113.203741958295!2d-83.01444402492511!3d39.9950016715106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ebd572f42fb%3A0xadd7b60f4f0534c8!2sNorth%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1710552060899!5m2!1sen!2sus",
};

const NrcScreen = ({ navigation }) => {
    const handleInfoPress = () => {
        navigation.navigate('InfoScreen', nrcInfo);
      };
  return (
    <View style={styles.container}>
      <ScreenGym title={title} image={image1} onInfoPress={handleInfoPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});

export default NrcScreen;
