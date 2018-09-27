import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDDV8CAgIc3xhm58i_j3RmOzhhxpeaZGMQ",
  authDomain: "vue-sample-app-a23a9.firebaseapp.com",
  databaseURL: "https://vue-sample-app-a23a9.firebaseio.com",
  projectId: "vue-sample-app-a23a9",
  storageBucket: "vue-sample-app-a23a9.appspot.com",
  messagingSenderId: "874113969035"
};


export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');
