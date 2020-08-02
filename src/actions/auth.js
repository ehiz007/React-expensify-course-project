import {firebase, googleAuthProvider} from '../firebase/firebase'

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLogOut = () => {
    return () => {
        firebase.auth().signOut()
    }
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => ({type:'LOGOUT'})

// .then((result) => {
//     var token = result.credential.accessToken
//     var user = result.user
//     return user
// })