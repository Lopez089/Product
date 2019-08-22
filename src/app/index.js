import React, {Component} from 'react'
import {render} from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
class App extends Component{
    render(){
        return(
            <div>
                <Routes/>
            </div>
        )
    }
}

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'))