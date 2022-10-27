import React, {Component} from 'react'
import './App.css'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarsDetail from "./CarsDetail/CarsDetail";

class App extends Component {
    state = {
        isLoggedIn: false
    }

    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: '/about'
                            }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: '/cars'
                            }}>Cars</NavLink>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <div style={{textAlign: 'center'}}>
                    <h3>Is logged in {this.state.isLoggedIn ? 'True': 'False'}</h3>
                    <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
                </div>

                <hr/>
                <Switch>
                    <Route path="/" exact render={() => <h1>Home Page</h1>}/>
                    { this.state.isLoggedIn ? <Route path="/about" component={About}/> : <Redirect to={'/'}/>}

                    <Route path="/cars/:name" component={CarsDetail}/>
                    <Route path="/cars" component={Cars}/>
                    {/*<Route render={()=> <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>*/}
                    <Redirect to={'/'}/>
                </Switch>
            </div>
        );
    }
}

export default App
