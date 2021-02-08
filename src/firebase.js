import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDja-18i4bT0Rp68U7LQfGq9QCqS2y28Xc",
  authDomain: "cloudoc-56279.firebaseapp.com",
  projectId: "cloudoc-56279",
  storageBucket: "cloudoc-56279.appspot.com",
  messagingSenderId: "671721534571",
  appId: "1:671721534571:web:428bb39d625596ce51ad2e",
  measurementId: "G-31ZJ6J0CZ3"
};



  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }