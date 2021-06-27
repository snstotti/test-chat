import React from 'react'
import './FormMessage.css'

export default function FormMessage({setMessage,message,pushMessage}) {

     /**
     * 
     *
     * 
     * @param  {object} e - Объект события.
     * @return {string} - Текст сообщения.
     */

    const handleMessage =(e)=>{
        let target = e.target.value
        setMessage(target)
    }

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
