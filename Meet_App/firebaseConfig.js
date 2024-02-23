import { initializeApp } from 'firebase/app';
import {getStorage, ref, uploadBytes} from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyAJyTuWYpNPl2teu2L2iLtIov5OhEEDEiE',
    authDomain: 'meetapp-cd9c7.firebaseapp.com',
    databaseURL: 'https://meetapp-cd9c7.firebaseio.com', 
    projectId: 'meetapp-cd9c7',
    storageBucket: 'meetapp-cd9c7.appspot.com',
    messagingSenderId: '256212765995',
    appId: '1:256212765995:web:9c0e831c3d9ff1fae5496e',
    measurementId: 'G-5K8169JH76',
  }; 
  
  const app = initializeApp(firebaseConfig); 
  
  const storage = getStorage(app);
  const stoargeRef = ref(storage, 'meetAppData');