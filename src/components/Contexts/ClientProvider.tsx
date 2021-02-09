import React, { createContext, useState, useEffect } from 'react'

// @ts-ignore
import { v4 as uuidV4 } from 'uuid'

//Client Interface
export interface Client {
    name: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    country: string,
    companyPhoneNumber: string,
    notes: string,
    contactName: string,
    contactEmail: string,
    contactPhoneNumber: string
}

interface defaultSetClients {
    clients: Map<string, Client>,
    setClients: React.Dispatch<React.SetStateAction<Map<string, Client>>>
    clientsList: Map<string, string[]>
}

const defaultSetClientsState: defaultSetClients = {
    clients: new Map<string, Client>(),
    setClients: (): void => { },
    clientsList: new Map<string, string[]>()
}

export const ClientsContext = createContext<defaultSetClients>(defaultSetClientsState);

export function ClientProvider(props: { children: React.ReactNode }): JSX.Element {

    //Map to store id and Object:Client
    let clientsMap = new Map<string, Client>();

    //Dummy data for clientsMap
    clientsMap.set(uuidV4(), {
        name: "American Pacific Mortgage",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        companyPhoneNumber: "",
        notes: "",
        contactName: "Stepanie",
        contactEmail: "string@example.com",
        contactPhoneNumber: "+91-9788797887"
    });
    clientsMap.set(uuidV4(), {
        name: "App Crest",
        addressLine1: "",
        addressLine2: "",
        city: "San Fransisco",
        country: "",
        companyPhoneNumber: "",
        notes: "",
        contactName: "Kamran Khlerolomom",
        contactEmail: "string@example.com",
        contactPhoneNumber: "+91-8057790375"
    });
    clientsMap.set(uuidV4(), {
        name: "BPA Solutions",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        companyPhoneNumber: "",
        notes: "",
        contactName: "Gilber Nicole",
        contactEmail: "string@example.com",
        contactPhoneNumber: "+41-245242543"
    });
    clientsMap.set(uuidV4(), {
        name: "Buffalo City",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        companyPhoneNumber: "",
        notes: "",
        contactName: "Shwetank",
        contactEmail: "string@example.com",
        contactPhoneNumber: "+91-987838447483"
    });
    clientsMap.set(uuidV4(), {
        name: "Cox and Kings",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        companyPhoneNumber: "",
        notes: "",
        contactName: "Gilbert Nicole",
        contactEmail: "string@example.com",
        contactPhoneNumber: "+91-9876543212"
    });
    clientsMap.set(uuidV4(), {
        name: "DLR",
        addressLine1: "",
        addressLine2: "",
        city: "Mumbai",
        country: "",
        companyPhoneNumber: "",
        notes: "",
        contactName: "Abhishek Kumar",
        contactEmail: "string@example.com",
        contactPhoneNumber: "+91-8456879621"
    });



    //State Management Hooks
    const [clients, setClients] = useState(clientsMap);
    const [clientsList, setClientsList] = useState(new Map<string, string[]>());
    useEffect(() => {
        let tempClientsListMap = new Map<string, string[]>();
        for (let i = 65; i < 65 + 26; i++) {
            tempClientsListMap.set(String.fromCharCode(i), []);
        }
        clients.forEach((val, id) => {
            let index = val.name[0];
            let curr = tempClientsListMap.get(index);
            curr?.push(id);
        });

        tempClientsListMap.forEach((arr) => {
            arr.sort((a, b) => {
                let x = clients.get(a);
                let y = clients.get(b);
                if (x!.name < y!.name)
                    return -1;
                else if (x!.name > y!.name)
                    return 1;
                else return 0;
            })
        });

        setClientsList(tempClientsListMap);
    }, [clients])

    return (
        <ClientsContext.Provider value={{
            clients: clients,
            setClients: setClients,
            clientsList: clientsList
        }
        }>
            {props.children}
        </ClientsContext.Provider>
    )
}
