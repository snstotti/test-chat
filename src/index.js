import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCJk-JjbIcecU8XeyjRbDqhweijRnJrBDM",
  authDomain: "test-chat-785ea.firebaseapp.com",
  databaseURL: "https://test-chat-785ea-default-rtdb.firebaseio.com",
  projectId: "test-chat-785ea",
  storageBucket: "test-chat-785ea.appspot.com",
  messagingSenderId: "281556238931",
  appId: "1:281556238931:web:25c8e32c5af22bd3577ca6"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
