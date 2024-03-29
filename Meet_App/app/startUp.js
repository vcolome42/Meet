// Screen to display login options for the user
// The user can either create an account or sign in to an existing account
// The user can also click on the "Trouble signing in?" link to get help with signing in

import React, {useState, useEffect} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



// Importing the logo and background image from the assets folder
import MeetLogoWhite from '../assets/meet-logo-white.png';
import BackgroundImage from '../assets/background-image.png';

const taglines = [
  'Socializing\nmade\nsimple.',
  'Moshing\nmade\nmanageable.',
]

const AppMenu = () => {
  
  const navigation = useNavigation();

  {/* TODO: Create text that cycles through different taglines, fading in & out with each one*/}
  // const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Cycle to the next tagline
  //     setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
  //   }, 5000); // Change tagline every 3 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  
  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* App Logo and Tagline */}
        <View style={styles.logoContainer}> 
          <Image
            source={MeetLogoWhite}
            style={styles.logo} 
          />
          <Text style={styles.tagline}>Socializing{'\n'}made{'\n'}simple.</Text>
          {/* <Text style={styles.tagline}>{taglines[currentTaglineIndex]}</Text> */}
        </View>

        {/* Terms & conditions */}
        <Text style={styles.termsText}>
          By tapping ‘Sign in’ you agree to our Terms. Learn how
          we process your data in our Privacy Policy and Cookies Policy
        </Text>

        {/* Create Account & Sign in buttons */} 
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={() => {console.log('Sign In pressed'); navigation.navigate('createAcc');}}>
            <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={() => {console.log('Sign In pressed'); navigation.navigate('login');}}> 
            <Text style={styles.signInButtonText}>SIGN IN</Text>
          </TouchableOpacity>

          {/* Help button */}
          <TouchableOpacity style={styles.troubleSigningInLink} onPress={() => console.log('Trouble signing in pressed')}>
            <Text style={styles.troubleSigningInText}>Trouble signing in?</Text>
          </TouchableOpacity>
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
  tagline: {
    color: '#ffffff',
    fontSize: 40,
    marginTop: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  termsText: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: -250,
    marginLeft: 45,
    marginRight: 45,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  createAccountButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    width: '70%',
    marginBottom: 30,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    width: '70%',
    marginTop: -10,
    marginBottom: 30,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#ffff',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: 18,
  },
  troubleSigningInLink: {
    marginTop: 0,
    marginBottom: 30,
  },
  troubleSigningInText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default AppMenu;