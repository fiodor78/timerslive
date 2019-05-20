import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./components/MainContainer";

import './scss/Main.scss';

function App() {
    return <MainContainer/>
}

ReactDOM.render(<App />, document.getElementById("app"));