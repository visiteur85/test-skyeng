import React from 'react';
import './App.css';
import {MainPage} from "./Pages/MainPAge/MainPage";
import {User} from "./Pages/User/User";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {

    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/user/:id'} element={<User/>}/>
                <Route path='*' element={<Navigate to={'/'}/>}/>

            </Routes>


        </div>
    );
}

export default App;
