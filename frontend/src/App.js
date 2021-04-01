import { Divider } from '@material-ui/core'
import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'

const App = () => {
    return (
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
            <Navbar />
            <Divider />
            <Home />
        </div>
    )
}

export default App
