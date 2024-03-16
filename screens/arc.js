import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, sizes } from '../constants/theme';
import ScreenGym from './components/screenGym'; // Assuming you have a Header component
import image1 from '../images/image4.jpg'; // Import the image

const title = "Adventure Recreation Center";
const arcInfo = {
    title: "ARC",
    phoneNumber: "614-247-8686",
    address: "855 Woody Hayes Drive, Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48902.05569774581!2d-83.0686248982332!3d39.99999267761379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e895ec79b0d%3A0xd9c1d00ff53097ad!2sOhio%20State%20University%20Adventure%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1710551739190!5m2!1sen!2sus",
};
const ArcScreen = ({ navigation }) => {
    const handleInfoPress = () => {
        navigation.navigate('InfoScreen', arcInfo);
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

export default ArcScreen;
