import React from 'react';
import './App.css';
import firebase from 'firebase';
import FormMessage from './component/FormMessage/FormMessage';
import ListMessage from './component/ListMessage/ListMessage';

function App() {
 
  const [message, setMessage] = React.useState('')
  const [dbValue, setdbValue] = React.useState([])

  const pushMessage =(value)=>{
    const db = firebase.database()
    db.ref('message').push(value)
  }
  
  
 
  React.useEffect(()=>{
    const getMessagesFromdb =()=>{
      const db = firebase.database()
      const ref = db.ref('message')
      ref.on('value',(elem)=>setdbValue([elem.val()]))
    }
    getMessagesFromdb()
    
  },[])

  console.log(dbValue);

  


  if(!dbValue[0])return '...Loading'
  return (
    <div className="section">
      <div className="section__container">
      <FormMessage 
          setMessage={setMessage}
          message={message}
          pushMessage={pushMessage} />
        
        <ListMessage dbValue={dbValue[0]} />
      </div>
        
    </div>
  );
}

export default App;
