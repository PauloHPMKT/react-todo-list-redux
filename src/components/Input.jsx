import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Task from './Task'

import './Input.css'

const Input = () => {

	const [inputValue, setInputValue] = useState('')

		
	const dispatch = useDispatch()

	const handleInputValue = e => {
		setInputValue(e.target.value)
	}

	const handleOnClickEvent = () => {
		if(inputValue !== '') {
			dispatch({
				type: 'ADD_TASK',
				payload: inputValue,
			})			
		} else {
			alert('Digite uma tarefa valida!') //trocar por um modal
		}
	}

  return (
    <div className="container">
      <input 
				type="text" 
				placeholder="Digite aqui uma tarefa" 
				onChange={handleInputValue}
			/>
      <button onClick={handleOnClickEvent}>Adicionar</button>
			<Task />
    </div>
  )
}

export default Input
