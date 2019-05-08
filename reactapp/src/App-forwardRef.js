import React from 'react';
const FancyButton = React.forwardRef((props, ref) => (
	<button ref={ref} className="FancyButton">
		{props.children}
	</button>
));


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	handleClick() {
		console.log(this.ref);
		this.ref.current.innerHTML = '确定';
	}

	handleClick1() {
		console.log(this.ref);
		this.ref.current.innerHTML = '更新';
	}

	render() {
		return (
			<div>
				<FancyButton ref={this.ref}>Click me!</FancyButton>
				<div onClick={this.handleClick.bind(this)}>更换按钮文案为确定</div>
				<div onClick={this.handleClick1.bind(this)}>更换按钮文案为更新</div>
			</div>
		);
	}
}