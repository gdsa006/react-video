import React from 'react'
import BackBody from './components/BackBody'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import './Login.css';

const Login = () => {
    return (
        <>
            <BackBody />

            <main className="d-flex align-items-center" id='auth'>
                <div className="container bg-white shadow-lg position-relative">
                    <div className="row">
                        <LeftSide />
                        <RightSide />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login
