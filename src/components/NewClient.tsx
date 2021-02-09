import React from 'react'
import { Link } from 'react-router-dom'

function NewClient() {

    return (
        <div className="new-client">
            <h2>Clients</h2>
            <div className="new-client-btn">
                <h5>Filter</h5>
                <Link to="/clients/add">
                <button>+ New Client</button>
                </Link>
                
            </div>
        </div>
    )
}

export default NewClient
