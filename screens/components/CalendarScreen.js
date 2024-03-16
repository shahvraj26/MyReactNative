import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const CalenderScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});


  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    // Add logic to fetch events for the selected date and display them
    const fetchedEvents = {}; // Fetch events for the selected date
    setEvents(fetchedEvents);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={35} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../../images/logo.png')} style={styles.logo} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'red' },
        }}
        theme={{
            backgroundColor: 'black',
            calendarBackground: 'black',
            textSectionTitleColor: 'white',
            selectedDayBackgroundColor: 'white',
            selectedDayTextColor: 'white',
            todayTextColor: 'red',
            dayTextColor: 'white',
            textDisabledColor: 'white',
            dotColor: 'white',
            selectedDotColor: 'white',
            arrowColor: 'red',
            disabledArrowColor: 'white',
            monthTextColor: 'white',
            indicatorColor: 'white',
            textMonthFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
            borderRadius: 20,
          }}
          style={{
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'gray',
            height: 370, // Adjust the height as needed
          }}
      />
    <View style={styles.eventsContainer}>
        {events[selectedDate] && events[selectedDate].length > 0 ? (
          events[selectedDate].map((event, index) => (
            <Text key={index} style={styles.eventText}>
              {event}
            </Text>
          ))
        ) : (
          <Text style={styles.noEventsText}>No events for this date</Text>
        )}
      </View>
    </View>
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
    paddingTop: 90,
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  icon: {
    color: 'red',
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
  titleContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
    eventsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  eventText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  noEventsText: {
    fontSize: 16,
    color: 'white',
  },
});

export default CalenderScreen;
