import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, sizes } from '../constants/theme';
import ScreenGym from './components/screenGym'; // Assuming you have a Header component
import image1 from '../images/image5.jpg'; // Import the image

const title = "Jesse Owens South";

const josInfo = {
    title: "JOS",
    phoneNumber: "614-292-7621",
    address: "175 W. 11th Ave., Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6113.203741958295!2d-83.01444402492511!3d39.9950016715106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ec0f352ac71%3A0xa8a890b8d97a6fc2!2sJesse%20Owens%20Recreation%20Center%20South!5e0!3m2!1sen!2sus!4v1710551948432!5m2!1sen!2sus"
};

const JosScreen = ({ navigation }) => {
    const handleInfoPress = () => {
        navigation.navigate('InfoScreen', josInfo);
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

export default JosScreen;
