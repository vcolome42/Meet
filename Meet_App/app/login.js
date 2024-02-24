import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,} from 'react-native';
  
import { useNavigation } from '@react-navigation/native';
import backButtonIcon from '../assets/AdobeStock_backbutton.png';
import {LinearGradient} from 'expo-linear-gradient';

const Login = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        {/* Back button */}
        <TouchableOpacity
          onPress={() => {
            console.log('Back button pressed');
            navigation.navigate('startUp');
          }}
          style={styles.backButtonIcon}
        >
          <Image source={backButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Let's get you settled...</Text>

        {/* Login fields */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        </View>

        {/* Next button */}
        <View style={styles.bottom}></View>
        <LinearGradient
          colors={['#79b8d3', '#67bac7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.nextButton}
        >
          <TouchableOpacity style={styles.nextButton} onPress={() => {console.log('Next button pressed'); navigation.navigate('homepage');}}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#eef1f7',
  },
  backButtonIcon: {
    height: 65,
    width: 65,
    marginTop: 20,
    marginBottom: 60,
    marginLeft: -10,
    position: 'relative',
    tintColor: '#aeb0b2',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2a2a2a',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    height: 50,
    fontSize: 18,
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  nextButton: {
    borderRadius: 15,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
