

import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



// Importing the logo and background image from the assets folder
import MeetLogoWhite from '../assets/meet-logo-white.png';
import BackgroundImage from '../assets/background-image.png';

const AppMenu = () => {
  
  const navigation = useNavigation();
  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* App Logo and Tagline at the top */}
        <View style={styles.logoContainer}> 
          <Image
            source={MeetLogoWhite}
            style={styles.logo} 
          />
        </View> 
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: -10,
  },
});

export default AppMenu;