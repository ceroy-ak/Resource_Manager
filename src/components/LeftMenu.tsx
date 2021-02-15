import React from 'react'
import {INavLinkGroup, INavStyles, Nav} from '@fluentui/react'


function LeftMenu() {

    const navLinkGroup:INavLinkGroup [] =[{
        links:[
        {
            
            name: "Dashboard",
            url: "/",
            key: "key1",
            icon: "SpeedHigh"
        },
        {
            name: "Schedule",
            url: "/schedule",
            key: "key2",
            icon: "AlarmClock"
        },
        {
            name: "Resources",
            url: "/resources",
            key: "key3",
            icon: "Contact"
        },
        {
            name: "Projects",
            url: "/projects",
            key: "key4",
            icon: "ProjectCollection"
        },
        {
            name: "Clients",
            url: "/clients",
            key: "key5",
            icon: "People",
        },
        {
            name: "Reports",
            url: "/reports",
            key: "key6",
            icon: "Document"
        }
    ]
    }]

      
    return (
        <div className="left-column ms-hiddenLgDown">
            <Nav groups={navLinkGroup} className="left-column-nav" />
        </div>
    )
}

export default LeftMenu
