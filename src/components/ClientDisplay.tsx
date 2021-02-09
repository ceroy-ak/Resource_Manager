import React, { useContext } from 'react'
import {Link, useParams} from 'react-router-dom'
import { ClientsContext } from './Contexts/ClientProvider'


interface UrlId{
    id:string
}
function ClientDisplay() {
    const {id} = useParams<UrlId>()
    const {clients} = useContext(ClientsContext)
    const displayData = clients.get(id)!;
    if(id!=='add'){
        return (<div className="display-client-data">
            <h2>{displayData.name}</h2>
            <h3>Contact Details</h3>
            <p>{displayData.contactName}</p>
            <p>{displayData.contactEmail}</p>
            <p>{displayData.contactPhoneNumber}</p>
            <Link to={`/clients/${id}/edit`}>
                <button type="button">Edit</button>
            </Link>
            <Link to="/clients">
                <button type="button">Close</button>
            </Link>
        </div>)
    }else{
        return <></>
    }
}

export default ClientDisplay
