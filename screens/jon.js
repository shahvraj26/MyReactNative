import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, sizes } from '../constants/theme';
import ScreenGym from './components/screenGym'; // Assuming you have a Header component
import image1 from '../images/image3.jpg'; // Import the image

const title = "Jesse Owens North";

const jonInfo = {
    title: "JON",
    phoneNumber: "614-292-0696",
    address: "2151 Neil Ave, Columbus, OH 43210",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.1125320383153!2d-83.0176271249243!3d40.005933871508574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e97e4bfffff%3A0xd26ec619d72a2ee5!2sJesse%20Owens%20North%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1710551891369!5m2!1sen!2sus",
};

const JonScreen = ({ navigation }) => {
    const handleInfoPress = () => {
        navigation.navigate('InfoScreen', jonInfo);
      };
  return (
    <View style={styles.container}>
      <ScreenGym title={title} image={image1}  onInfoPress={handleInfoPress} />
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

export default JonScreen;
