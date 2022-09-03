
import { useContext, useState} from 'react';
import { AlertContext } from '../context/AlertContext';


export default function First() {
    const [text, setText] = useState('');
    
const addAlert = useContext(AlertContext);

    function handleTextChange(event: any) {
        setText(event.target.value)
    }

  function handleClick () {
  addAlert(text)
  }

  const onSubmit = (event: any) => {
   event.preventDefault()
   setText('')
  }


    return (
      <div className="App">
        <h1>Escribe tu alerta</h1>
        <form onSubmit={(event) =>onSubmit(event)}>
          <div>
            <input className='m-3' title="title" value={text} onChange={handleTextChange} />
          </div>
          <button className='btn btn-primary' onClick={handleClick}>Show Alert</button>
        </form>
      </div>
    );
}
















// import React from 'react'

// const First = () => {
//   return (
//     <>
//     <h1>hola desde First</h1>
    
    
//     </>
//   )
// }

// export default First