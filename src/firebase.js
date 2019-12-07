import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBgcmZsyOS3eMTcemC7fYN_XAgtvgAbKVQ',
  authDomain: 'voidrizoma-fb9c3.firebaseapp.com',
  databaseURL: 'https://voidrizoma-fb9c3.firebaseio.com',
  projectId: 'voidrizoma-fb9c3'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase
