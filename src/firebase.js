// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDpjg3lsTtpwOPvuS0Lq-G9dqCR5bjkvw4',
  authDomain: 'fil-chat-4e184.firebaseapp.com',
  projectId: 'fil-chat-4e184',
  storageBucket: 'fil-chat-4e184.appspot.com',
  messagingSenderId: '312135593178',
  appId: '1:312135593178:web:83c5a0565a7574217b49e3',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
