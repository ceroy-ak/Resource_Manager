import React from 'react'
import { Link } from 'react-router-dom'
import profile_picture from '../res/microsoft-img.png'


interface ClientData {
    name: string,
    city: string,
    contactName: string,
    contactEmail: string,
    contactPhoneNumber: string
    id: string
}

function ClientCard({ name, city, contactName, contactEmail, contactPhoneNumber, id }: ClientData) {

    function cityCheck(city: string) {
        if (city !== '')
            return <p>{city}</p>
        else 
            return <br/>
    }

    return (
        <div className="ms-Grid-col ms-md4 client-card">
            <Link to={`/clients/${id}`}>
                <div className="ms-Grid-row" dir="ltr">
                    <div className="ms-Grid-col client-card--picture">
                    <img src={profile_picture} alt="company profile" />
                    </div>
                    <div className="ms-Grid-col">
                    <div className="ms-Grid-row client-card--name" dir="ltr">
                    <h2>{name}</h2>
                    </div>
                    <div className="ms-Grid-row client-card--city" dir="ltr">
                    {cityCheck(city)}
                    </div>
                    <div className="ms-Grid-row client-card--contact-name" dir="ltr">
                    <p>{contactName}</p>
                    </div>
                    <div className="ms-Grid-row" dir="ltr">
                        <div className="ms-Grid-col client-card--email">
                        <p>Send Email</p>
                        </div>
                        <div className="ms-Grid-col client-card--phone">
                        <p>{contactPhoneNumber}</p>
                        </div>
                    
                   
                    </div>

                    </div>
                    
                    
                </div>

            </Link>
        </div>
    )
}

export default ClientCard
