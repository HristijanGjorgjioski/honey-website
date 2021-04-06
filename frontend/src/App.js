import React from 'react'
import { Box } from '@material-ui/core'
import EjectIcon from '@material-ui/icons/Eject';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

import Home from './components/Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Products from './components/Pages/Products/Products';
import Cart from './components/Pages/Cart/Cart';

const App = () => {
    return (
        <BrowserRouter>
            <Box>
                <Navbar />
                <ScrollToTop style={{ zIndex: 1 }} showUnder={160}>
                    <EjectIcon style={{ color: '#FBDE44FF', fontSize: '60px' }} />
                </ScrollToTop>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </Box>
        </BrowserRouter>
    )
}

export default App
