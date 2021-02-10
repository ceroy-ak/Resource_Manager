import React from 'react'
import { Link } from 'react-router-dom'
import {PrimaryButton} from '@fluentui/react'

function NewClient() {

    return (
        <div className="new-client">
            <h2>Clients</h2>
            <div className="new-client-btn">
                <h5>Filter</h5>
                <Link to="/clients/add">
                <PrimaryButton iconProps={{ iconName: 'Add' }} title="Add" ariaLabel="Add" text="New Client"/>
                </Link>
                
            </div>
        </div>
    )
}

export default NewClient
