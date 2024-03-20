import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faArrowLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview'; 

const InfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, phoneNumber, address, url } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  }


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <FontAwesomeIcon icon={faAngleLeft} size={35} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../../images/logo.png')} style={styles.logo} />
        </View>
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact the {title}:</Text>
      </View>
      <View style={styles.infoContainer}>
        <FontAwesomeIcon icon={faPhone} size={24} style={styles.icon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Phone:</Text>
          <Text style={styles.infoText}>{phoneNumber}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <FontAwesomeIcon icon={faMapMarkerAlt} size={24} style={styles.icon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Address:</Text>
          <Text style={styles.infoText}>{address}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <FontAwesomeIcon icon={faEnvelope} size={24} style={styles.icon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Email:</Text>
          <Text style={styles.infoText}>recsports@osu.edu</Text>
        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={handleHomePress} style={styles.navItem}>
          <Image source={require('../../images/home_button.png')} style={styles.home} />
        </TouchableOpacity>
      </View>
      <WebView
        source={{ html: `<iframe src="${url}" width="1000" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` }}
        style={styles.map}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 10,
  },
  icon: {
    color: '#D30000',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  contactContainer: {
    alignItems: 'center',
    marginTop: 20, // Adjusted marginBottom
    marginBottom: 30,
  },
  contactTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoTextContainer: {
    flex: 1,
    marginLeft: 10, // Added marginLeft for spacing
    minWidth: 150, // Added minWidth to align with logo
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  infoText: {
    fontSize: 18,
    color: 'white',
  },
  map: {
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  navBar: {
    position: 'absolute', // Position absolutely
    left: 0, // Align to the left edge
    right: 0, // Align to the right edge
    bottom: -35, // Align to the bottom edge
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D30000', // Choose your nav bar color
    height: 85, // Set the height of the navigation bar
  },
  navItem: {
    padding: 10,
  },
  home: {
    marginBottom: 30,
    width: 45,
    height: 45,
  },
});

export default InfoScreen ;
