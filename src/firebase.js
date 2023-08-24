// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAruc9qTHBi7-k7vQHriZcsM0G1svDQQqI',
  authDomain: 'faq-project-react.firebaseapp.com',
  projectId: 'faq-project-react',
  storageBucket: 'faq-project-react.appspot.com',
  messagingSenderId: '733674170950',
  appId: '1:733674170950:web:b5114216d5a2042e9b3847',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { getDatabase } from '@firebase/database'
// // import { getFirestore } from '@firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyBTJxBZN28JVq9Op36IkT2_6gPF3hY-a14',
//   authDomain: 'faq-react-project.firebaseapp.com',
//   projectId: 'faq-react-project',
//   storageBucket: 'faq-react-project.appspot.com',
//   messagingSenderId: '69705323101',
//   appId: '1:69705323101:web:46e5b5f3de4ca45c5633b4',
//   measurementId: 'G-W2LB046QWS',
// }

// export const auth = getAuth()
// export const db = getDatabase(app)
// const app = initializeApp(firebaseConfig)
// export default app

// // const firebaseApp = initializeApp(firebaseConfig)
// // const auth = getAuth()
// // const app = initializeApp(firebaseConfig)
// // export const firestore = getFirestore(app)
