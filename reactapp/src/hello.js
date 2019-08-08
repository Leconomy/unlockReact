import React from "react";

function World() {
	return (
		<div>
			<h2>world</h2>
			<p>我是world</p>
		</div>
	)
}

// function Hello() {
//   return (
// 	<div>
// 		<h2>hello</h2>
// 		<p>我是hello</p>
// 	</div>
//   );
// }

class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev) {
		// ev.stopPropagation();
		// ev.persist();
		console.log(1);
		this.setState(state => ({
			a: ++state.a
		}));
	}
	
	handleClick2() {

		console.log(2);
	}
	
	handleClick3() {

		console.log(3);
	}
	
	handleClick4() {

		console.log(4);
	}
	
	render() {
		return (
			<div onClick={this.handleClick2} onClickCapture={this.handleClick3}>
				<span>{this.state.a}</span>
				<p onClick={this.handleClick} onClickCapture={this.handleClick4}>点击</p>
			</div> 
		)
	}
}

export default Hello;
