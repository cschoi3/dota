import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDq_Fa0zO8vnACMNXHYUA7l4u0I3vJw6WM",
  authDomain: "dota-app.firebaseapp.com",
  databaseURL: "https://dota-app.firebaseio.com",
  projectId: "dota-app",
  storageBucket: "dota-app.appspot.com",
  messagingSenderId: "118211413831"
};
firebase.initializeApp(config);

export default firebase;