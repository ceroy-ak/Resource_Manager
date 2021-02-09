import React from 'react'
import {Link} from 'react-router-dom'


interface ClientData{
name: string,
city: string,
contactName: string,
contactEmail: string,
contactPhoneNumber: string
id:string
}

function ClientCard({name, city, contactName, contactEmail, contactPhoneNumber, id}:ClientData){

    function cityCheck(city:string){
        if (city!=='')
        return <p>{city}</p>
    }

    return (
        <Link to={`/clients/${id}`}>
        <div>
            <h2>{name}</h2>
            {cityCheck(city)}
            <p>{contactName}</p>
            <p>{contactEmail}</p>
            <p>{contactPhoneNumber}</p>
        </div>
        </Link>
    )
}

export default ClientCard
