import React from 'react'
import Logo from "../res/saketa_logo.png"
import {IconButton} from '@fluentui/react'

function Title() {
    return (
        <>
            <nav className="title">
                <div className="title-logo">
                    <img src={Logo} alt="Logo" />
                    <h1> | Resource Manager</h1>
                </div>
                <div className="title-center-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="title-settings">
                    <IconButton iconProps={{iconName: "Settings"}} title="Settings" color="white"/>
                    <IconButton iconProps={{iconName: "FullCircleMask"}} title="CircleFill" color="white"/>
                </div>
            </nav>
        </>
    )
}

export default Title
