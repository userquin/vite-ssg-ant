import firebase from 'firebase/app'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyDjKsBfXeKiR7jp6KFxkhqKboGD316ZLFI',
  authDomain: 'chatime-mobile-app.firebaseapp.com',
  databaseURL: 'https://chatime-mobile-app.firebaseio.com',
  projectId: 'chatime-mobile-app',
  storageBucket: 'chatime-mobile-app.appspot.com',
  messagingSenderId: '647944014072'
}

window.fire = firebase.initializeApp(config)
