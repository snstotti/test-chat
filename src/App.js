import React from 'react';
import './App.css';
import firebase from 'firebase';
import FormMessage from './component/FormMessage/FormMessage';
import ListMessage from './component/ListMessage/ListMessage';

function App() {
  /**
  * состояние ввода сообщения (по умолчанию "")
  */
  const [message, setMessage] = React.useState('')

  /**
  * состояние обЪекта полученного с сервера (по умолчанию [])
  */
  const [dbValue, setdbValue] = React.useState([])

   /**
     * Отправляем значение на сервер
     * @param  {string} value - Текст сообщения
     * @param {string} message - Ключ для создания объекта в БД
     */

  const pushMessage =(value)=>{
    const db = firebase.database()
    db.ref('message').push(value)
  }
  
  
 
  React.useEffect(()=>{
    /**
     * Получаем значение с сервера
     * @param {string} message - Ключ по которому забираем объект
     * @param  {string} value - тип значения value
     * @param  {object} elem - Объект получаемый с БД
     * @method val - Метод который забирает значение из обЪекта elem
     */
    const getMessagesFromdb =()=>{
      const db = firebase.database()
      const ref = db.ref('message')
      ref.on('value',(elem)=>setdbValue([elem.val()]))
    }
    getMessagesFromdb()
    
  },[])

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
