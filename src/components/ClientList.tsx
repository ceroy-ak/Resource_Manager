import React, { useContext } from 'react'
import ClientCard from './ClientCard';
import { ClientsContext } from './Contexts/ClientProvider'

function ClientList() {
    const alphabets: string[] = [];
    for (let i = 65; i < 65 + 26; i++) {
        alphabets.push(String.fromCharCode(i));
    }

    let { clientsList, clients } = useContext(ClientsContext);

    return (
        <div className="client-list">
            {
                alphabets.map((letter) => {
                    return (
                        <div key={letter}>
                            <h1 className="client-list-alphabet" >{letter}</h1>
                            {
                                clientsList.get(letter)?.map((value) => {
                                    let temp = clients.get(value);
                                    return (
                                         <ClientCard key={value} 
                                         name={temp!.name} city={temp!.city} 
                                         contactName={temp!.contactName} contactEmail={temp!.contactEmail} 
                                         contactPhoneNumber={temp!.contactPhoneNumber} id={value}
                                    />)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClientList
