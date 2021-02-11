import React from 'react'
import ClientList from './ClientList'
import ClientSearch from './ClientSearch'
import NewClient from './NewClient'

function RightColumn() {
    return (
        <div className="right-column ms-Grid-col ms-md10">
                <NewClient />
                <ClientSearch />
                <ClientList />
        </div>
    )
}

export default RightColumn
