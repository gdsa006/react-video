import React from 'react'
import Courses from './../Courses'
import { Route, BrowserRouter, Routes, Switch } from 'react-router-dom';

const Master = () => {
    return (
        <>




            <BrowserRouter>
                <Routes>
                    <Route path="/courses" element={<Courses />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master
