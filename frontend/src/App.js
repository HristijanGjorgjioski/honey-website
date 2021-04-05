import React from 'react'
import { Box, Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <Box>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/products" component={Products} /> */}
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}

export default App
