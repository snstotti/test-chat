import React from 'react'
import './FormMessage.css'

export default function FormMessage({setMessage,message,pushMessage}) {

     /**
     * Записываем значение ввода 
     * @param  {object} e - Объект события.
     * @function setMessage
     * @param  {string} target - Значение ввода.
     */

    const handleMessage =(e)=>{
        let target = e.target.value
        setMessage(target)
    }

    /**
     * Отправляем значение на сервер
     * @param  {object} e - Объект события.
     * @param {object} message - Содержит уникальный ключ и значение
     * @function pushMessage - Отправляет значение на сервер
     * @function setMessage - Очищаем поле инпута
     * @function preventDefault - Метод интерфейса Event
     */

    const submitMessage =(e)=>{
        if(!message) return e.preventDefault();
        pushMessage(message);
       setMessage('')
        e.preventDefault();
    }



    return (
        <div className="form-wrapper">
            <form className="form-wrapper__form" onSubmit={submitMessage}>
                <textarea
                    className="form-wrapper__input"
                    onChange={handleMessage}
                    value={message}
                    type="textarea"
                    placeholder="Напиши что-нибудь о себе"
                    style={{ maxWidth: 400 }}
                    id="textChat" />
                <input type="submit" className="form-wrapper__btn" />

            </form>

        </div>
    )
}
