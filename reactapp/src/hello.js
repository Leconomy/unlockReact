import React from "react";

// function World() {
// 	return (
// 		<div>
// 			<h2>world</h2>
// 			<p>我是world</p>
// 		</div>
// 	)
// }

// function Hello(props) {
//   return (
// 	<div>
// 		<h2>hello</h2>
// 		<p>我是hello {props.b}</p>
// 	</div>
//   );
// }

// function Hello(props) {
// 	return {
// 		componentDidMount() {
// 			console.log('did mount')
// 		},
// 		render() {
// 			return (
// 				<div>
// 					<h2>hello</h2>
// 					<p dangerouslySetInnerHTML={{__html: "<span>aaa</span>"}} />
// 				</div>
// 			  );
// 		}
// 	}
// }

function World(props) {
	return (<React.Fragment>
		<span>world</span>
	</React.Fragment>);
}

function Hello(props) {
	return (<div>
			<h2>hello</h2>
			<p>我是hello {props.b}</p>
			<World />
	</div>)
}

// class Hello extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			a: 0
// 		};
// 	}
// 	/**
// 	 * 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
// 	 * 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容
// 	 * @param {*} props 
// 	 * @param {*} state 
// 	 */
// 	static getDerivedStateFromProps(props, state) {
// 		return null;
// 	}
// 	/**
// 	 * 在最近一次渲染输出（提交到 DOM 节点）之前调用
// 	 * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
// 	 * 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
// 	 */
// 	getSnapshotBeforeUpdate() {
// 		return 'snapshot';
// 	}

// 	componentDidMount() {
// 		console.log('did mount')
// 	}

// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		console.log('did update')
// 	}

// 	componentWillUnmount() {
// 		console.log('will unmount')
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<span>{this.state.a} + {this.props.b}</span>
// 			</div> 
// 		)
// 	}
// }
Hello.defaultProps = {
	b: 1
};
export default Hello;
