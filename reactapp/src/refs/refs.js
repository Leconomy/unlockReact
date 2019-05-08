import React from 'react';
// import ReactDom from 'react-dom';

function CustomTextInput(props) {
	return (
		<div>
		<input ref={props.inputRef} />
		</div>
	);
}

export default class Refs extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.ref1 = React.createRef();
		this.inputElement = null;
	}

	hanleClick() {
		console.log(this.ref);
		this.ref.current.innerHTML = 'ref';
	}
	hanleClick1() {
		console.log(this.ref1);
		this.ref1.innerHTML = 'ref1';
	}
	hanelClick2() {
		console.log(this.inputElement);
		if (this.inputElement) {
			this.inputElement.value = '点击获得值';
			this.inputElement.focus();
		}
	}
	setRefInnerHTML(str) {
		this.ref.current.innerHTML = str;
	}
	render() {
		return (
			<div>
				<div ref={this.ref} onClick={this.hanleClick.bind(this)}>111</div>
				<div ref={(node) => this.ref1 = node} onClick={this.hanleClick1.bind(this)}>222</div>
				<CustomTextInput
					inputRef={el => this.inputElement = el}
				/>
				<div onClick={this.hanelClick2.bind(this)}>点击此处,input获取焦点</div>
			</div>
		);
	}
}