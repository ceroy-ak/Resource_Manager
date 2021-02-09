import React,{useState} from 'react'

function AddClient() {


    const [name, setName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [conactPhone, setContactPhone] = useState('');

    return (
        <div className="display-client-data">
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <br/>
                <input type="text"/>
                <br/>
                <input type="text"/>
                <br/>
                <input type="text"/>
                <br/>
                <input type="text"/>
                <br/>
                <input type="text"/>
                <br/>
                <input type="text"/>
                <br/>
                <label>Contact Name</label>
                <input type="text" required/>
                <br/>
                <label>Contact Email</label>
                <input type="text" required/>
                <br/>
                <label>Contact Phone Number</label>
                <input type="text" required/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddClient
