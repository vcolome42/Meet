import React, {useState} from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Picker, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MeetLogoGradient from '../assets/meet-logo-gradient.png';
import MapIcon from '../assets/AdobeStock_map.png';
import HeartIcon from '../assets/AdobeStock_heart_filled.png';
import CalendarIcon from '../assets/AdobeStock_calendar.png';
import ChatIcon from '../assets/AdobeStock_chat.png';
import ProfileIcon from '../assets/AdobeStock_profile.png';
import PlanEventImg from '../assets/plan_event.png';
import FilterIcon from '../assets/AdobeStock_filter.png';

const Home = () => {
    const navigation = useNavigation();
    const [selectedCity, setSelectedCity] = useState('Chicago');
    const [searchText, setSearchText] = useState('');

    return (
      <View style={styles.container}>
      {/* App Logo */}
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image source={MeetLogoGradient} style={styles.logo} />
        </View>
      </View>

      {/* Displaying simple text "Chicago" */}
      {/*Will change to a dropdown menu later*/} {/*TODO*/}
      <View style={styles.cityContainer}>
      <Text style={[styles.cityText, { alignSelf: 'flex-start' }]}>Chicago</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for events near you..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

       {/* Filter buttons */}
      <View style={styles.smallButtonContainer}>
        <TouchableOpacity style={[styles.smallButton]}>
          <Text style={styles.smallButtonText}>Filter</Text>
          <Image source={FilterIcon} style={styles.smallButtonIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.smallButton]}>
          <Text style={styles.smallButtonText}>Date</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.smallButton]}>
          <Text style={styles.smallButtonText}>Price</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.smallButton]}>
          <Text style={styles.smallButtonText}>Category</Text>
        </TouchableOpacity>
      </View>

        {/* Event stats & sorting */}
      <View style={styles.EventInfoTextContainer}>
        <Text style={styles.eventInfoTextLeft}>0 Events</Text>
        <Text style={styles.eventInfoTextRight}>Sort by relevance</Text>
      </View>
  

      {/* Event button to create events */}
      <TouchableOpacity
        style={styles.eventButton}
        onPress={() => {
          console.log('Plan Event button pressed');
          // navigation.navigate('createEvent');
        }}
      >
        <Image source={PlanEventImg} style={styles.eventButtonImage} />
      </TouchableOpacity>

      {/* Explore section */}
      <View style={styles.eventTextContainer}>
        <Text style={styles.eventsHeader}>Explore</Text>
        <View style={styles.horizontalLine}></View>
      </View>

      {/* Text when there are no events */}
      <View style={styles.eventListContainer}>
        <Text style={styles.eventsError}>No events in your area</Text>
      </View>

        {/* Five buttons at the bottom for app navigation */}
        <View style={styles.bottom}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
            
              style={styles.navigationButton}
              onPress={() => navigation.navigate('map')}
            >
            <Image source={MapIcon} style={styles.buttonIcon} />
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.navigationButton}
              onPress={() => navigation.navigate('saved')}
            >
              <Image source={HeartIcon} style={styles.buttonIcon} />
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.navigationButton}
              onPress={() => navigation.navigate('home')}
            >
              <Image source={CalendarIcon} style={styles.buttonIcon} tintColor={'#79b8d3'} />
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.navigationButton}
              onPress={() => navigation.navigate('chat')}
            >
              <Image source={ChatIcon} style={styles.buttonIcon} />
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.navigationButton}
              onPress={() => navigation.navigate('profile')}
            >
              <Image source={ProfileIcon} style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.bottomBar}></View> */} {/*TODO: FIX SO THAT BUTTONS STAY AT BOTTOM*/}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#eef1f7',
  },

  topBar: {
    backgroundColor: 'white',
    height: 100, // Adjust the height of the top bar as needed
    width: '150%',
    borderRadius: 10,
    marginTop: -20,
  },

  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    marginTop: 0,
  },

  cityContainer: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'left',
  },

  cityText: {
    fontSize: 36,
    fontWeight: 'normal',
    color: '#2a2a2a',
    textAlign: 'left',
    marginLeft: -180,
  },

  searchBarContainer: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#000',
    overflow: 'hidden',
    width: '95%',
  },

  searchBar: {
    height: 40,
    paddingHorizontal: 10,
  },

  smallButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
  },
  smallButton: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#aeb0b2',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  smallButtonText: {
    marginRight: 5,
    fontSize: 12,
  },
  smallButtonIcon: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },

  EventInfoTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginHorizontal: 12,
    marginBottom: 10,
  },

  eventInfoTextLeft: {
    fontSize: 16,
    color: '#2a2a2a',
       marginTop: 5,
  },

  eventInfoTextRight: {
    fontSize: 16,
    color: '#2a2a2a',
    marginTop: 5,
  },

  eventButton: {
    alignItems: 'center',
  },
  eventButtonImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginTop: -100,
  },

  eventTextContainer: {
    alignItems: 'center',
  },

  horizontalLine: {
    borderColor: '#aeb0b2',
    borderBottomWidth: 1,
    width: '100%',  // Set to '100%' for full width
    marginTop: 10,   // Adjust the marginTop as needed
    marginBottom: 10, // Adjust the marginBottom as needed
  },
  
  eventsHeader: {
    fontSize: 22,
    color: '#2a2a2a',
    marginBottom: 10,
    marginTop: -90,
    textAlign: 'left',
    marginLeft: -280,
  },

  eventListContainer: {
    alignItems: 'center',
  },
  
  eventsError: {
    fontSize: 16,
    color: '#aeb0b2',
    marginTop: 10,
  },

  bottomBar: {
    backgroundColor: 'white',
    height: 75, // Adjust the height of the bottom bar as needed
    width: '150%',
    marginBottom: -20,
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  navigationButton: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonIcon: {
    width: 40, // Adjust the width of the button icons as needed
    height: 40, // Adjust the height of the button icons as needed
    resizeMode: 'cover',
    tintColor: '#aeb0b2',
  },
});

export default Home;