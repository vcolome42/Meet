import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MeetLogoGradient from '../assets/meet-logo-gradient.png';
import MapIcon from '../assets/AdobeStock_map.png';
import HeartIcon from '../assets/AdobeStock_heart_filled.png';
import CalendarIcon from '../assets/AdobeStock_calendar.png';
import ChatIcon from '../assets/AdobeStock_chat.png';
import ProfileIcon from '../assets/AdobeStock_profile.png';

const Map = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* App Logo */}
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
            <Image source={MapIcon} style={[styles.buttonIcon, { tintColor: '#79b8d3' }]} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate('saved')}
          >
            <Image source={HeartIcon} style={styles.buttonIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate('homepage')}
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
    height: 100,
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

  logoutButton: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'transparent',
    marginBottom: 20,
    marginTop: 250,
    width: '80%',
  },

  logoutText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },

  bottomBar: {
    backgroundColor: 'white',
    height: 75,
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
    width: 40,
    height: 40,
    resizeMode: 'cover',
    tintColor: '#aeb0b2',
  },
});

export default Map;
