const admin = require('firebase-admin');
const client = require('firebase');
const CREDENTIALS = require('../config/credentials');

const firebaseAadmin =  admin.initializeApp({
  credential: admin.credential.cert(CREDENTIALS),
  databaseURL: "https://testing-1370.firebaseio.com"
});

const serviceAccountClient = {
    apiKey: "AIzaSyBo95FKWhoCpmrDJJ_ESByDX0kAh-kyNEQ",
    authDomain: "testing-1370.firebaseapp.com",
    databaseURL: "https://testing-1370.firebaseio.com",
    projectId: "testing-1370",
    storageBucket: "testing-1370.appspot.com",
    messagingSenderId: "403392127029"
};

const firebaseClient = client.initializeApp(serviceAccountClient)


module.exports = { firebaseAadmin, firebaseClient };