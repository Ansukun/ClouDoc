import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBoIZhdrm6NLynEqk5PptKiysiA3LJXiN0",
  authDomain: "cloudoc-8bfb9.firebaseapp.com",
  projectId: "cloudoc-8bfb9",
  storageBucket: "cloudoc-8bfb9.appspot.com",
  messagingSenderId: "944731814178",
  appId: "1:944731814178:web:8083a94859ce2ff1ca4d7b",
  measurementId: "G-FEPL83ZQXH"
};




  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }