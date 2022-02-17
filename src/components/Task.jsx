import { useSelector, useDispatch } from 'react-redux'
import { BsXCircleFill } from 'react-icons/bs'

import './Task.css'

const Task = () => {

	const listTakes = useSelector(state => state.tasks)
	const dispatch = useDispatch()

	const handleRemoveTask = task => {
		dispatch({
			type: 'REMOVE_TASK',
			payload: task
		})		
	}

	return(
		<div className='task'>
			<ul>
				{
					listTakes.map(task => 
						<li key={task}>
							{task}
							<BsXCircleFill 
								color='#fff' 
								size={20}
								className='btnClose'
								onClick={() => handleRemoveTask(task)}
							/>
						</li>
					)
				}
			</ul>
		</div>
	)
}


export default Task