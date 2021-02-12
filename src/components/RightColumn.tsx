import React from 'react'
import ClientList from './ClientList'
import ClientSearch from './ClientSearch'
import NewClient from './NewClient'

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
