import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import * as ScreenOrientation from 'expo-screen-orientation';
import TopPlacesCarousel from './components/carousel'; 
import Header from './components/header';
import Favorites from './screens/components/favorite';
import RpacScreen from './screens/rpac';
import NrcScreen from './screens/nrc';
import JosScreen from './screens/jos';
import JonScreen from './screens/jon';
import ArcScreen from './screens/arc';
import InfoScreen from './screens/components/info'; 
import CalendarScreen from './screens/components/CalendarScreen';
import NavBar from './screens/components/navbar'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [favoriteGyms, setFavoriteGyms] = useState([]);

  // Add or remove gym from favorites
  const toggleFavorite = (data, gymName) => {
    const isFavorite = favoriteGyms.some(
      (gym) =>
        gym.title === data.title &&
        gym.capacity === data.capacity &&
        gym.lastupdated === data.lastupdated &&
        gym.gymName === gymName
    );

    if (isFavorite) {
      // Remove the specific gym area from favorites
      setFavoriteGyms((prev) =>
        prev.filter(
          (gym) =>
            !(
              gym.title === data.title &&
              gym.capacity === data.capacity &&
              gym.lastupdated === data.lastupdated &&
              gym.gymName === gymName
            )
        )
      );
    } else {
      // Add the specific gym area to favorites
      setFavoriteGyms((prev) => [...prev, { ...data, gymName }]);
    }
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  // Define the topPlacesData array
  const topPlacesData = [
    { id: '1', title: 'RPAC', image: require('./images/image1.jpg') },
    { id: '2', title: 'NRC', image: require('./images/image2.jpg') },
    { id: '3', title: 'JON', image: require('./images/image3.jpg') },
    { id: '4', title: 'ARC', image: require('./images/image4.jpg') },
    { id: '5', title: 'JOS', image: require('./images/image5.jpg') },
    // Add more data as needed
  ];

  // Function to handle navigation when an item in the carousel is pressed
  const handlePress = (item, navigation) => {
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
      default:
        break;
    }
  };

  // HomeScreenContent is the content for the Home screen
  const HomeScreenContent = ({ navigation }) => (
    <View style={styles.container}>
      <Header />
      <TopPlacesCarousel list={topPlacesData} handlePress={(item) => handlePress(item, navigation)} />
    </View>
  );

  // Stack Navigator for the Home tab
  const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <HomeScreenContent {...props} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="RPAC">
          {props => <RpacScreen {...props} favoriteGyms={favoriteGyms} toggleFavorite={toggleFavorite} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="NRC">
          {props => <NrcScreen {...props} favoriteGyms={favoriteGyms} toggleFavorite={toggleFavorite} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="JON">
          {props => <JonScreen {...props} favoriteGyms={favoriteGyms} toggleFavorite={toggleFavorite} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="ARC">
          {props => <ArcScreen {...props} favoriteGyms={favoriteGyms} toggleFavorite={toggleFavorite} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="JOS">
          {props => <JosScreen {...props} favoriteGyms={favoriteGyms} toggleFavorite={toggleFavorite} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="InfoScreen" component={InfoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CalendarScreen" component={CalendarScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <NavBar {...props} />}>
        <Tab.Screen name="Home">
          {props => <HomeStackNavigator {...props} favoriteGyms={favoriteGyms} toggleFavorite={toggleFavorite} />}
        </Tab.Screen>
        <Tab.Screen name="Favorites">
          {props => <Favorites {...props} favoriteGyms={favoriteGyms} onToggleFavorite={toggleFavorite} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
