import React from 'react'
import "../css/App.css"
import Logo from "../res/saketa_logo.png"
import { FaCog } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

function Title() {
    return (
        <>
            <nav className="title">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h1> | Resource Manager</h1>
                </div>
                <div className="logo2">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="title-right">
                    <FaCog />
                    <CgProfile />
                </div>
            </nav>
        </>
    )
}

export default Title
