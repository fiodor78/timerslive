import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './helpers/Store';
import MainContainer from "./components/MainContainer";
//import {configureFakeBackend} from "./helpers/FakeBackend";

import './scss/Main.scss';

function App() {
    return <Provider store={store}><MainContainer/></Provider>
}

//configureFakeBackend();
ReactDOM.render(<App />, document.getElementById("app"));