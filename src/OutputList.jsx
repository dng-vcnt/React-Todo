import React from 'react';

class OutputList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.items.map(item => (
					<li key={item.id}>Priority: {item.priority} Task: {item.text}</li>
				))}
			</ul>
		);
	}
}

export default OutputList;