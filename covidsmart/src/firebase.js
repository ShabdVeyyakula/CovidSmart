import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
var firebaseConfig = {
  apiKey: "AIzaSyAkDNdTrYGd_q_OptVtvIo7PWT1Q3rSHp8",
  authDomain: "covidsmart-b10e9.firebaseapp.com",
  databaseURL: "https://covidsmart-b10e9.firebaseio.com",
  projectId: "covidsmart-b10e9",
  storageBucket: "covidsmart-b10e9.appspot.com",
  messagingSenderId: "645969621483",
  appId: "1:645969621483:web:80b17df5e10c84167ae9ae",
  measurementId: "G-XFXNK5LRKD"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()


// export utils/refs
export {
  db,
  auth,
}