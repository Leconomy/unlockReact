import React from "react";

function Hello(props) {
    return (
        <div>
            <h2>hello</h2>
            <p>我是hello {props.b}</p>
        </div>
    );
}

export default Hello;