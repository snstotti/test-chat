import React from 'react'

export default function FormMessage({setMessage,message}) {

    const handleMessage =(e)=>{
        let target = e.target.value
        setMessage(target)
    }
    const submitMessage =(e)=>{
        if(!message) return e.preventDefault();
       console.log(message);
       setMessage('')
        e.preventDefault();
    }



    return (
        <div>
            <form className="mb-3 mt-3" onSubmit={submitMessage}>
                <div className="mb-3 d-flex ">

                    <input 
                        onChange={handleMessage}
                        value={message}
                        type="text" 
                        placeholder="Введите текст сообщения" 
                        style={{ maxWidth: 400 }} 
                        className="form-control" id="textChat" aria-describedby="emailHelp" />

                    <input  type="submit" className="btn btn-primary" />

                </div>
            </form>
        </div>
    )
}
