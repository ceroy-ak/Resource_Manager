import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Client, ClientsContext } from "./Contexts/ClientProvider";
import { v4 as uuidV4 } from "uuid";
import { useHistory } from "react-router-dom";
import {
    Panel,
    PrimaryButton,
    DefaultButton,
    TextField,
    Image
} from "@fluentui/react";
import { useBoolean } from "@uifabric/react-hooks";
import profile_pic from '../res/microsoft-img.png'

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
    };

    const { handleSubmit, control } = useForm();
    const { clients, setClients } = useContext(ClientsContext);
    const history = useHistory();

    const onSubmit = (data: ClientForm) => {
        let temp: Client = {
            name: data.name,
            addressLine1: data.addressLine1 ?? "",
            addressLine2: data.addressLine2 ?? "",
            city: data.city ?? "",
            companyPhoneNumber: data.companyPhoneNumber ?? "",
            country: data.country ?? "",
            contactEmail: data.contactEmail,
            contactName: data.contactName,
            contactPhoneNumber: data.contactPhone,
            notes: data.notes ?? "",
        };
        setClients(
            new Map<string, Client>([...clients, [uuidV4(), temp]])
        );
        history.push("/clients");
    };

    const [isOpen, { setFalse: dismissPanel }] = useBoolean(true);
    return (
        <Panel isOpen={isOpen} hasCloseButton={false}
        headerText="Add Client"
        className='right-panel'
        >


            <div className="form-client">
                <Image src={profile_pic} width="70px" className="client-image"/>
                <form onSubmit={handleSubmit(onSubmit)}>
                     <Controller
                        control={control}
                        name="name"
                        rules={{
                            required: true,
                            validate: (value) => {
                                let regEx = /^[a-zA-Z]/g;
                                return regEx.test(value);
                            },
                        }}
                        render={({ onChange }) => (
                            <TextField
                                label="Name"
                                required
                                onGetErrorMessage={(value: string) => {
                                    if (value !== "") {
                                        let regEx = /^[a-zA-Z]/g;
                                        if (!regEx.test(value))
                                            return "Company Name Should start with Alphabets";
                                    }
                                    return "";
                                }}
                                onChange={onChange}
                            />
                        )}
                    />

                    <Controller
                        as={TextField}
                        control={control}
                        name="addressLine1"
                        type="text"
                        label="Address Line 1"
                    />
                    <Controller
                        as={TextField}
                        control={control}
                        name="addressLine2"
                        type="text"
                        label="Address Line 2"
                    />
                    <Controller
                        as={TextField}
                        control={control}
                        name="city"
                        type="text"
                        label="City"
                    />
                    <Controller
                        as={TextField}
                        control={control}
                        name="country"
                        type="text"
                        label="Country"
                    />
                    <Controller
                        as={TextField}
                        control={control}
                        name="companyPhoneNumber"
                        type="tel"
                        label="Company Phone Number"
                    />
                    <Controller
                        as={TextField}
                        control={control}
                        autoAdjustHeight={true}
                        name="notes"
                        type="text"
                        label="Notes"
                    />

                    <Controller
                        control={control}
                        name="contactName"
                        rules={{
                            required: true,
                            validate: (value) => {
                                let regEx = /^[a-zA-Z ]+$/g;
                                return regEx.test(value);
                            },
                        }}
                        render={({ onChange }) => (
                            <TextField
                                label="Contact Name"
                                onChange={onChange}
                                required
                                onGetErrorMessage={(value: string) => {
                                    if (value !== "") {
                                        let regEx = /^[a-zA-Z ]+$/g;
                                        if (!regEx.test(value)) {
                                            return "Name can only contain alphabets";
                                        }
                                    }
                                    return "";
                                }}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="contactEmail"
                        rules={{
                            required: true,
                            validate: (value) => {
                                let regEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}/g;
                                return regEx.test(value);
                            },
                        }}
                        render={({ onChange }) => (
                            <TextField
                                label="Contact Email"
                                required
                                onGetErrorMessage={(value: string) => {
                                    if (value !== "") {
                                        let regEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}/g;
                                        if (!regEx.test(value)) return "Enter a valid Email";
                                    }
                                    return "";
                                }}
                                onChange={onChange}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="contactPhone"
                        rules={{
                            required: true,
                            validate: (value) => {
                                let regEx = /^[+][0-9]+[- 0-9]+$/g;
                                return regEx.test(value);
                            },
                        }}
                        render={({ onChange }) => (
                            <TextField
                                label="Contact Phone Number"
                                required
                                onGetErrorMessage={(value: string) => {
                                    if (value !== "") {
                                        let regEx = /^[+][0-9]+[- 0-9]+$/g;
                                        if (!regEx.test(value))
                                            return "can accept only +countryCode phoneNumber";
                                    }
                                    return "";
                                }}
                                onChange={onChange}
                            />
                        )}
                    />

                    <div className="add-client-btn">
                        <PrimaryButton type="submit" text="Add" />
                        <DefaultButton
                            text="Cancel"
                            onClick={() => {
                                dismissPanel();
                                history.push("/clients/");
                            }}
                        />
                    </div>
                </form>
            </div>
        </Panel>
    );
}

export default AddClient;
