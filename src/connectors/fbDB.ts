// import firebase  from 'firebase/app';
// import 'firebase/database';
import firebase from 'firebase-admin';

import firebaseConfig from '../configs/firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fbDB = firebase.database();

export default fbDB;