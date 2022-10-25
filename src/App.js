import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404';
import Shop from './pages/Shop';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>

            <Route path='*' element={<Page404/>}/>

        </Routes>
    );
};  

export default App;
