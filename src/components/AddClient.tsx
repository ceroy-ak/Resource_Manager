import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import {Client, ClientsContext} from './Contexts/ClientProvider'
import {v4 as uuidV4} from 'uuid'
import {useHistory} from 'react-router-dom'
import {} from '@fluentui/react'

function AddClient() {  

    type ClientForm = {
        name: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        country: string;
        companyPhoneNumber: string;
        notes: string;
        contactName: string;
        contactEmail: string;
        contactPhone: string;

    }

    const {register, handleSubmit} = useForm();
    const {clients,setClients} = useContext(ClientsContext);
    const history = useHistory();

    const onSubmit = (data: ClientForm) => {
        let temp:Client = {
            name: data.name,
            addressLine1: data.addressLine1,
            addressLine2: data.addressLine2,
            city: data.city,
            companyPhoneNumber: data.companyPhoneNumber,
            country: data.country,
            contactEmail: data.contactEmail,
            contactName: data.contactName,
            contactPhoneNumber: data.contactPhone,
            notes: data.notes,
        }
        setClients(new Map<string, Client>([...clients, [uuidV4(),temp]]))
        history.push("/clients");
        
    };
    return (
        <div className="display-client-data">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input name="name" ref={register({ required: true })} type="text" required/>
                <br/>
                <input  name="addressLine1" ref={register} type="text"/>
                <br/>
                <input name="addressLine2"  ref={register} type="text"/>
                <br/>
                <input name="city"  ref={register} type="text"/>
                <br/>
                <input  name="country" ref={register} type="text"/>
                <br/>
                <input name="companyPhoneNumber"  ref={register} type="text"/>
                <br/>
                <input name="notes"  ref={register} type="text"/>
                <br/>
                <label>Contact Name</label>
                <input name="contactName"  ref={register({ required: true })} type="text" required/>
                <br/>
                <label>Contact Email</label>
                <input  name="contactEmail" ref={register({ required: true })} type="text" required/>
                <br/>
                <label>Contact Phone Number</label>
                <input  name="contactPhone" ref={register({ required: true })} type="text" required/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddClient
