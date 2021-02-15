import React from 'react'
import ClientList from './client.list.component'
import ClientSearch from './client.search.component'
import NewClient from './client.newClient.component'

function RightColumn() {
    return (
        <>
        <div className="ms-Grid-col ms-md2 left-column-adjust"></div>
        <div className="right-column ms-Grid-col ms-md10">
                <NewClient />
                <ClientSearch />
                <ClientList />
        </div>
        </>
    )
}

export default RightColumn
