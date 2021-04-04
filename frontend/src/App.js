import React from 'react'
import { Box, Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home'
import Navbar from './Navbar/Navbar'

const App = () => {
    return (
        <BrowserRouter>
            <Box>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} />
                    {/* <Route path="/products" component={Products} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} /> */}
                </Switch>
            </Box>
        </BrowserRouter>
    )
}

export default App
