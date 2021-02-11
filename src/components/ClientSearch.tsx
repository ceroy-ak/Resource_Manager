import React from 'react'
import {TextField} from '@fluentui/react'

function ClientSearch() {
    return (
        <div className="ms-Grid-row client-search" dir="rtl">
            <div className="ms-Grid-col ms-md4">
            <TextField dir="ltr" iconProps={{iconName:"Search"}} placeholder="Search Client"/>
            </div>
        </div>
    )
}

export default ClientSearch
