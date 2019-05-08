import React from 'react';
import './App.css';
import Refs from './refs/refs';
class App extends React.Component {
	constructor() {
		super();
		this.ref = React.createRef();
	}
	handleClick() {
		console.log(this.ref);
		this.ref.setRefInnerHTML('app');
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Refs ref={(node) => this.ref = node}></Refs>
					<div onClick={this.handleClick.bind(this)}>修改refs组件内容</div>
				</header>
			</div>
		);
	}

}

export default App;
