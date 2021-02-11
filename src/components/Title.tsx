import React from 'react'
import Logo from "../res/saketa_logo.png"
import profile_picture from "../res/microsoft-img.png"
import { IconButton, Layer } from '@fluentui/react'

function Title() {
    return (
        <>
            <Layer>
                <nav className="title">
                    <div className="title-left">
                        <img src={Logo} alt="Logo" />
                        <h1>Resource Manager</h1>
                    </div>
                    <div className="title-center">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="title-right">
                        <IconButton iconProps={{ iconName: "Settings", className: "title-settings" }} title="Settings" color="white" />
                        <img src={profile_picture} alt="Default Profile"/>
                    </div>
                </nav>
            </Layer>
        </>
    )
}

export default Title
