import React from 'react';
import About from "../pages/About";
import Home from "../pages/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import Data from "../pages/Data";
import AI from "../pages/AI";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/data" element={<Data/>} />
                <Route exact path="/ai" element={<AI/>} />
                <Route path="*" element={<Navigate to="/home" replace/> } />
            </Routes>
        </div>
    );
};

export default AppRouter;