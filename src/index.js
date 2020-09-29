import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Home from './components/menubar/home'
import Menu from './components/menubar/menuitem'
import Community from './components/menubar/community'
import Income from './components/menubar/income'
import Mine from './components/menubar/mine'


class Index extends React.Component{
    render(){
        return (
            <div>

            </div>
        )
    }
}


ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)
