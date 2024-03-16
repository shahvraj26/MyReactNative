import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopPlacesCarousel from './components/carousel'; // Import the TopPlacesCarousel component
import Header from './components/header';
import Favorites from './components/favorite';
import RpacScreen from './screens/rpac'; // Import the screen component for RPAC
import NrcScreen from './screens/nrc'; // Import the screen component for NRC
import JosScreen from './screens/jos'; // Import the screen component for NRC
import JonScreen from './screens/jon'; // Import the screen component for NRC
import ArcScreen from './screens/arc'; // Import the screen component for NRC
import InfoScreen from './screens/components/info'; 
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

const Stack = createStackNavigator();

const handlePress = (navigation, item) => {
  // Navigate to different routes based on the item's id
  switch (item.id) {
    case '1':
      navigation.navigate('RPAC');
      break;
    case '2':
      navigation.navigate('NRC');
      break;
    case '3':
      navigation.navigate('JON');
      break;
    case '4':
      navigation.navigate('ARC');
      break;
    case '5':
      navigation.navigate('JOS');
      break;
    // Add cases for more routes as needed
    default:
      break;
  }
};

export default function App() {
  // Dummy data for the carousel
  const topPlacesData = [
    { id: '1', title: 'RPAC',image: require('./images/image1.jpg') },
    { id: '2', title: 'NRC', image: require('./images/image2.jpg') },
    { id: '3', title: 'JON', image: require('./images/image3.jpg') },
    { id: '4', title: 'ARC', image: require('./images/image4.jpg') },
    { id: '5', title: 'JOS', image: require('./images/image5.jpg') },
    // Add more data as needed
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <HomeScreen {...props} topPlacesData={topPlacesData} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="RPAC" component={RpacScreen} />
        <Stack.Screen options={{ headerShown: false }} name="NRC" component={NrcScreen} />
        <Stack.Screen options={{ headerShown: false }} name="JON" component={JonScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ARC" component={ArcScreen} />
        <Stack.Screen options={{ headerShown: false }} name="JOS" component={JosScreen} />
        <Stack.Screen options={{ headerShown: false }} name="InfoScreen" component={InfoScreen} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation, topPlacesData }) => (
  <View style={styles.container}>
    <Header />
      <TopPlacesCarousel list={topPlacesData} handlePress={(item) => handlePress(navigation, item)} />
    <Favorites />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
