import React from 'react';
import ReactDOM from 'react-dom';

// Component that will return an
// unordered list
function ListRendering(props)
{
	const list = props.menuitems;

	const updatedList = list.map((listItems)=>{
		return(
				<li key={listItems.toString()}>
					{listItems}
				</li>
			); 
	});

	return(
		<ul>{updatedList}</ul>
	);
}

const menuItems = [1,2,3,4,5];

ReactDOM.render(
	<ListRendering menuitems = {menuItems} />, 
	document.getElementById('root')
);

export default ListRendering;
