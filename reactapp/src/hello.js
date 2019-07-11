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

	handleClick() {

		this.setState(state => ({
			a: ++state.a
		}));
	}

	render() {
		return (
			<div>
				<span>{this.state.a}</span>
				<p onClick={this.handleClick}>点击</p>
			</div> 
		)
	}
}

export default Hello;
