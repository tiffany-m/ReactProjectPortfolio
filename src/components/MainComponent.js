import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Contact from './ContactUsComponent';
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
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;