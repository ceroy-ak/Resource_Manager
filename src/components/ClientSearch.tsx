import React from 'react'
import {SearchBox, ISearchBoxStyles} from '@fluentui/react'

function ClientSearch() {

    const searchBoxStyles: Partial<ISearchBoxStyles> = { 
        root: { width: 400,
        paddingRight: '0px',
    } 
    };
    return (
        <div className="ms-Grid-row client-search">
            <div className="ms-Grid-col client-search-col">
            <SearchBox styles={searchBoxStyles}  placeholder="Search Clients" />
            </div>
            
            
            
        </div>
    )
}

export default ClientSearch
