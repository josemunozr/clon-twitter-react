import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBXte9IZLIYT2ViDEMOS_2IW-tga3EHeAQ',
  authDomain: 'clon-twitter-react.firebaseapp.com',
  databaseURL: 'https://clon-twitter-react.firebaseio.com',
  projectId: 'clon-twitter-react',
  messagingSenderId: '705921502918'
})

import App from './components/App'



render(<App />, document.getElementById('root'))
