import React from "react";
import ReactDom from "react-dom";


class Welcome extends React.Component {
    render () {
        return <h1>Hello World from React boiler Plate</h1>;
    }
}
ReactDom.render(<Welcome/>, document.getElementById("root"));
