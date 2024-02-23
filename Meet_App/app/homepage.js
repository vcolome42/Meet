import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import your images for the app logo and buttons from the assets folder
import MeetLogoGradient from '../assets/meet-logo-gradient.png';
import MapIcon from '../assets/AdobeStock_map.png';
import HeartIcon from '../assets/AdobeStock_heart_filled.png';
import CalendarIcon from '../assets/AdobeStock_calendar.png';
import ChatIcon from '../assets/AdobeStock_chat.png';
import ProfileIcon from '../assets/AdobeStock_profile.png';

const Home = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
      {/* App Logo at the top center */}
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image source={MeetLogoGradient} style={styles.logo} />
        </View>
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
              <Image source={CalendarIcon} style={styles.buttonIcon} />
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
        <View style={styles.bottomBar}></View>
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
  bottomBar: {
    backgroundColor: 'white',
    height: 75, // Adjust the height of the bottom bar as needed
    width: '100%',
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
