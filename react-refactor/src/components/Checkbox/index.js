import {useState} from 'react'

const Checkbox = ({id, onCheckbox}) => {
	return (
		<>
			<div className="checkbox-wrapper">
					<span>checkbox {id}</span>
					<input type="checkbox" onChange={event=>onCheckbox(event.target.checked, id)}/>
			</div>
		</>
	)
}

export default Checkbox