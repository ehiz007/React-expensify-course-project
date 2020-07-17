import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()
export {database as default}

// const  expenses = [{
//   description: 'toilet paper',
//   note: '',
//   amount: 150,
//   createdAt: 9836447487
// }, {
//   description: 'game pad',
//   note: '',
//   amount: 3500,
//   createdAt: 9836447487
// }, {
//   description: 'keyboard',
//   note: '',
//   amount: 4850,
//   createdAt: 9836447487
// }]

// expenses.map( (expense) => firebase.database().ref('expenses').push(expense))


// firebase.database().ref('expenses').once('value').then((snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// firebase.database().ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })








  // firebase.database().ref().set({
  //   name: "ehiz",
  //   age: 24,
  //   hobbies: ['football', 'swimming', 'web developement'],
  //   favorites: {
  //     food: "fried rice",
  //     team: "liverpool"
  //   }
  // }).then((data) => {
  //   console.log('it worked')}).catch((e) => console.log(`error: ${e}`))

  // firebase.database().ref('favorites/team').set('man utd').then((data) => {
  //   console.log('successful')}).catch((e) => console.log(`error: ${e}`))
  // firebase.analytics();

  // // firebase.database().ref('hobbies/1').remove()

  // const valueChange = firebase.database().ref().on('value', (snapshot) => {
  //   console.log(snapshot.val())
  // }, (e) => console.log('error with fetching data', e))

  // setTimeout(() => {
  //   firebase.database().ref('age').set(30)
  // } ,3500)


  // setTimeout(() =>{
  //   firebase.database().ref().off('value',valueChange)
  // }, 7000)

  // setTimeout(() => {
  //   firebase.database().ref().on('value', (data) =>{
  //     const value = data.val()
  //     console.log(`${value.name} is a ${value.profession.job} at ${value.profession.company}`)
  //   })
  // } ,10500)

  // firebase.database().ref('profession').set({
  //   job: 'software developer',
  //   position: 'manager',
  //   company: 'amazon'
  // })


