import React from 'react';
import firebase from 'firebase';
import FormMessage from './component/FormMessage/FormMessage';
import ListMessage from './component/ListMessage/ListMessage';

function App() {

  const [message, setMessage] = React.useState('')

 

  React.useEffect(()=>{
    const db = firebase.database()
    const ref = db.ref('name')
    ref.on('value',(elem)=>console.log(elem.val()))
    
  },[])



  return (
    <div className="container">
      <div className="d-flex flex-column">
        <FormMessage 
          setMessage={setMessage}
          message={message} />
        
        <ListMessage />

      </div>
    </div>
  );
}

export default App;
