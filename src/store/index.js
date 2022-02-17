import { createStore } from "redux" 

const INITIAL_STATE = {
	tasks: []
}

function toDo(state = INITIAL_STATE, action) {
	//state parameter needs to receive initial state
	switch(action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: [
					...state.tasks,
					action.payload
				]
			}
		
		case 'REMOVE_TASK':
			const newState = state.tasks.filter(task => task !== action.payload)
			return {
				tasks: newState,
			}

		default: 
			return state

	}
}

const store = createStore(toDo)

export default store