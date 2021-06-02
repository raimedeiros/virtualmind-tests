import { useState } from 'react';
import Checkbox from '../Checkbox'

const checkboxes = [0, 1, 2];

const Form = () => {
	const [checkedCheckboxes,setCheckedCheckboxes] = useState([])
	
	function handleCheckboxes(value, id){
		if(value === true){
			const newCheckedCheckboxes = [...checkedCheckboxes]
			if(!newCheckedCheckboxes.includes(id)){
				newCheckedCheckboxes.push(id)
				setCheckedCheckboxes(newCheckedCheckboxes)
			}
		}else{
			const newCheckedCheckboxes = [...checkedCheckboxes]
			newCheckedCheckboxes.splice(newCheckedCheckboxes.indexOf(id),1)
			setCheckedCheckboxes(newCheckedCheckboxes)
		}
	}

	return (
		<>
			<div className="form">
				<span>Checked boxes:{checkedCheckboxes}</span>
        {checkboxes.map((id)=><Checkbox key={id} id={id} onCheckbox={handleCheckboxes}/>)}
      </div>
		</>
	)
}

export default Form