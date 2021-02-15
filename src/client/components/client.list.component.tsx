import React, { useContext } from 'react'
import ClientCard from './client.card.component';
import { ClientsContext } from '../services/client.contextProvider'

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
                            {
                                ((clientsList?.get(letter)?.length ?? 0) > 0)?<h2 className="client-list-alphabet" >{letter}</h2>:<></>
                            }
                            
                                <div className="ms-Grid-row" dir="ltr">
                                {clientsList.get(letter)?.map((value) => {
                                    let temp = clients.get(value);
                                    return (
                                         <ClientCard key={value} 
                                         name={temp!.name} city={temp!.city} 
                                         contactName={temp!.contactName} contactEmail={temp!.contactEmail} 
                                         contactPhoneNumber={temp!.contactPhoneNumber} id={value}
                                         profilePicture = {temp!.profilePicture}
                                    />)
                                })}
                                </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClientList
