"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
(0, react_dom_1.render)(<App name={"Keith"}/>, document.getElementById('container'));
function App(props) {
    return (<button>Hello {props.name}</button>);
}
