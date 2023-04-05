import React from 'react'
// import loginAsset.PNG from './assets/loginAsset.png'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from './Pages/Login'
import Dashboard from './Pages/Dashboard'

const App = () => {
    return (
        <BrowserRouter  >
            <Routes>
                <Route  path='/' element= {<Navigate to={'/login'} replace/>} />
                <Route  path='/login' element = {<LoginPage  />} />
                <Route  path='/dashboard' element = {<Dashboard  />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App