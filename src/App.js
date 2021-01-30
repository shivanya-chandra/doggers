import React from 'react';
import { BrowserRouter, Route, Switch, Swtich } from 'react-router-dom';
import Design from './design';
import About from "./About";
import Funds from './funds';
import Adopt from './Adopt';
import Error from './Error';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
            <Route exact path='/'>
                <Design />
            </Route>
            <Route exact path='/about'>
                <About />
                </Route>
                <Route exact path='/funds'>
                          <Funds />
                </Route>
                <Route exact path='/adopt'>
                    <Adopt />
                    </Route>
                    <Route path='*'>
                        <Error />
                    </Route>
                </Switch>
        </BrowserRouter>
        </div>
    )
};

export default App;