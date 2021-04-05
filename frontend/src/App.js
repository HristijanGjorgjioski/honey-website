import React from 'react'
import { Box } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';

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
