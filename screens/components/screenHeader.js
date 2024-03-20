import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faCircleInfo} from '@fortawesome/free-solid-svg-icons';

const ScreenHeader = ({ onInfoPress }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        {/* Back Arrow Icon */}
        <FontAwesomeIcon icon={faAngleLeft} size={35} style={styles.arrowIcon} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={onInfoPress} style={styles.infoButton}>
        {/* Info Icon */}
        <Image source={require('../../images/info_button.png')} style={styles.infoIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 110, // Add paddingTop to prevent cutoff
  },
  logoContainer: {
    flex: 1, // Take up remaining space
    alignItems: 'center', // Center the logo horizontally
    marginRight: 0,
    marginTop: -20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // Ensure the logo fits within the specified dimensions
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  arrowIcon: {
    color: '#D30000',
  },
  infoButton: {
    position: 'absolute',
    right: 16,
  },
  infoIcon  : {
    width: 35,
    height: 35,
  },
});

export default ScreenHeader;
