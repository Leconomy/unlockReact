import React from "react";


export default class AppEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 2,
            c: 3
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e, index) {
        this.setState((state) => {
            return {a: index}
        });
    }

    render() {
        return (
            <div>
                <p>a是{this.state.a}</p>
                <p>b是{this.state.b}</p>
                <p>c是{this.state.c}</p>
                <a href="javascript:;" onClick={(e) => {this.handleClick(e, 1)}}>点击</a>
                {/* <input onBlur={e => {this.handleClick(e, 1)}} type="text" value="blur" /> 
                <input onFocus={e => {this.handleClick(e, 1)}} type="text" value="focus" />
                <input onChange={e => {this.handleClick(e, 1)}} type="text" value="change" />
                <input onKeyDown={e => {this.handleClick(e, 1)}} type="text" value="keydown" /> 
                <input onKeyUp={e => {this.handleClick(e, 1)}} type="text" value="keyup" />
                <input onKeyPress={e => {this.handleClick(e, 1)}} type="text" value="keypress" /> 
                <input onMouseUp={e => {this.handleClick(e, 1)}} type="text" value="mouseUp" /> 
                <input onMouseDown={e => {this.handleClick(e, 1)}} type="text" value="mousedown" />
                <input onInput={e => {this.handleClick(e, 1)}} type="text" value="input" />  
                <input onDoubleClick={e => {this.handleClick(e, 1)}} type="text" value="doubleclick" />   */}
            </div>
        )
    }
}
