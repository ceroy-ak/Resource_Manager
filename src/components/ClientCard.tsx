import React from 'react'
import { Link } from 'react-router-dom'
import profile_picture from '../res/microsoft-img.png'
import {FontIcon, mergeStyles} from '@fluentui/react'


interface ClientData {
    name: string,
    city: string,
    contactName: string,
    contactEmail: string,
    contactPhoneNumber: string
    id: string
}
const styles = mergeStyles({
    position: 'relative',
    top: '2px',
    color: "black"
});

const moreIconStyles = mergeStyles({
    position: 'absolute',
    bottom: '0px',
    color: "black"
});

function ClientCard({ name, city, contactName, contactEmail, contactPhoneNumber, id }: ClientData) {

    function cityCheck(city: string) {
        if (city !== '')
            return (
            <>
            
            <p><FontIcon iconName="location" className={styles}/> {city}</p>
            </>)
        else
            return <br />
    }

    return (
        <div className="ms-Grid-col ms-md3 client-card">
            <Link to={`/clients/${id}`}>
                <div className="ms-Grid-row" dir="ltr">
                    <div className="ms-Grid-col ms-md3 client-card--picture">
                        <img src={profile_picture} alt="company profile" />
                    </div>
                    <div className="ms-Grid-col ms-md9">
                        <div className="ms-Grid-row client-card--name" dir="ltr">
                            <h2>{name}</h2>
                        </div>
                        <div className="ms-Grid-row client-card--city" dir="ltr">
                            {cityCheck(city)}
                        </div>
                        <div className="ms-Grid-row client-card--contact-name" dir="ltr">
                            <p><FontIcon iconName="Contact" className={styles}/> {contactName}</p>
                        </div>
                        <div className="ms-Grid-row" dir="ltr">
                            <div className="ms-Grid-col client-card--email">
                                <p> <FontIcon iconName="Mail" className={styles}/> Send Email</p>
                            </div>
                            <div className="ms-Grid-col client-card--phone">
                                <p><FontIcon iconName="Phone" className={styles}/> {contactPhoneNumber}</p>
                            </div>
                            <FontIcon iconName="More" className={moreIconStyles}/>
                        </div>
                        
                    </div>

                    
                </div>

            </Link>
        </div>
    )
}

export default ClientCard
