import firebase  from 'firebase/app';
import 'firebase/database';
import firebaseConfig from '../configs/firebaseConfig'

// Initialize Firebase
const fbDB = firebase.initializeApp(firebaseConfig);

export default fbDB;