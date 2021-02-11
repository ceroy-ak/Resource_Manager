import React, { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Client, ClientsContext } from './Contexts/ClientProvider'
import { v4 as uuidV4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import { Panel, PrimaryButton, DefaultButton, TextField } from '@fluentui/react'
import { useBoolean } from '@uifabric/react-hooks';

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

    const { register, handleSubmit, control } = useForm();
    const { clients, setClients } = useContext(ClientsContext);
    const history = useHistory();

    const onSubmit = (data: ClientForm) => {
        console.log(data);
        let temp: Client = {
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
        setClients(new Map<string, Client>([...clients, [uuidV4(), temp]]))
        history.push("/clients");

    };

    const [isOpen, { setFalse: dismissPanel }] = useBoolean(true);
    return (
        <Panel
            isOpen={isOpen}
            hasCloseButton={false}
        >
            <div className="display-client-data">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller as={TextField} control={control} name="name" type="text" label="Name" required />
                    <Controller as={TextField} control={control} name="addressLine1" type="text" label="Address Line 1" />
                    <Controller as={TextField} control={control} name="addressLine2" type="text" label="Address Line 2" />
                    <Controller as={TextField} control={control} name="city" type="text" label="City" />
                    <Controller as={TextField} control={control} name="country" type="text" label="Country" />
                    <Controller as={TextField} control={control} name="companyPhoneNumber" type="tel" label="Company Phone Number" />
                    <Controller as={TextField} control={control} autoAdjustHeight={true} name="notes" type="text" label="Notes" />
                    <Controller as={TextField} control={control} name="contactName" type="text" label="Contact Name" required />
                    <Controller as={TextField} control={control} name="contactEmail" type="mail" label="Contact Email" required />
                    <Controller as={TextField} control={control} name="contactPhone" type="tel" label="Contact Phone Number" required />

                    <div className="add-client-btn">
                        <PrimaryButton type="submit" text="Add" />
                        <DefaultButton text="Cancel" onClick={() => {
                            dismissPanel();
                            history.push('/clients/');
                        }} />
                    </div>

                </form>
            </div>
        </Panel>
    )
}

export default AddClient
