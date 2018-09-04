const { firebaseAadmin, firebaseClient } = require('../config/firebase.settings')


const verifyToken = async (req, res, next) => {
    try {
        let { uid } = await firebaseAadmin.auth().verifyIdToken(req.body.token);
        let user = await firebaseAadmin.database().ref(`/users/${ uid }`).once('value');
        res.locals.user = user;
        res.json({ user });
    }catch(e) {
        res.status(401).json({ e })
    }
}

const authenticateUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        let auth = await firebaseClient.auth().signInWithEmailAndPassword(email, password);
        res.json(auth);
    } catch(e) {
        res.status(401).json({ e })
    }
}

const getUsers = async (req, res) => { 
    const userID = req.body.user.uid;
    try{
        const user = await firebaseClient.database().ref(`/users/${userID}`).once('value');
        res.json({message: 'succes', user: user })
        console.log('body:', body); 
    }catch(e){
        res.json(e);
    }
}
const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const { uid } = await firebaseAadmin.auth().createUser({email, password});
    const user  = { uid, firstName, lastName, email, password };
    await firebaseClient.database().ref(`/users/${uid}`).set(user)
    res.json({ message: 'succes', ud: user})
}
module.exports = { getUsers, createUser, verifyToken, authenticateUser };
