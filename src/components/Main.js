import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Order from './Order';
import Contact from './ContactUs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/order' component={Order} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;