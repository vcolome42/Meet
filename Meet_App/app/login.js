import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backButtonIcon from '../assets/AdobeStock_backbutton.png';

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
          {/* You can use an arrow icon or any other suitable icon */}
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
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => console.log('Next button pressed')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButtonIcon: {
    height: 65,
    width: 65,
    marginTop: 20,
    marginBottom: 60,
    marginLeft: -10,
    position: 'relative',
    tintColor: '#2a2a2a',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    fontSize: 36,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    height: 50,
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  nextButton: {
    borderRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
