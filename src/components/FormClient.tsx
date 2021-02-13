import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Client, ClientsContext } from "./Contexts/ClientProvider";
import { v4 as uuidV4 } from "uuid";
import { useHistory, useParams } from "react-router-dom";
import {
    Panel,
    PrimaryButton,
    DefaultButton,
    TextField,
    Image
} from "@fluentui/react";
import { useBoolean } from "@uifabric/react-hooks";
import profile_pic from '../res/microsoft-img.png'

function FormClient() {
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

    const { clients, setClients } = useContext(ClientsContext);
    const history = useHistory();

    interface UrlId {
        id: string
    }
    const { id } = useParams<UrlId>();
    enum FormSubmitTypeEnum { Add, Update };
    const formSubmitType: FormSubmitTypeEnum = (clients.has(id)) ? FormSubmitTypeEnum.Update : FormSubmitTypeEnum.Add;

    let defaultValue: Client = {
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        companyPhoneNumber: "",
        contactEmail: "",
        contactName: "",
        contactPhoneNumber: "",
        country: "",
        notes: ""
    };

    if (formSubmitType === FormSubmitTypeEnum.Update) {
        defaultValue = clients.get(id)!;
    }

    const { handleSubmit, control } = useForm<ClientForm>({
        defaultValues: {
            name: defaultValue?.name,
            contactName: defaultValue?.contactName,
            addressLine1: defaultValue?.addressLine1 ?? "",
            addressLine2: defaultValue?.addressLine2 ?? "",
            city: defaultValue?.city ?? "",
            companyPhoneNumber: defaultValue?.companyPhoneNumber ?? "",
            contactEmail: defaultValue?.contactEmail,
            contactPhone: defaultValue?.contactPhoneNumber,
            country: defaultValue?.country ?? "",
            notes: defaultValue?.notes ?? "",
        }
    });

    const [isOpen, { setFalse: dismissPanel }] = useBoolean(true);

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

        if (formSubmitType === FormSubmitTypeEnum.Add) {
            setClients(new Map<string, Client>([...clients, [uuidV4(), temp]]));
        }
        else if (formSubmitType === FormSubmitTypeEnum.Update) {
            let tempMap = new Map<string, Client>(clients);
            tempMap.set(id, temp);
            setClients(tempMap);
        }
        else {
            alert('Something Went Wrong!!');
        }

        dismissPanel();
    };


    return (
        <Panel
            isOpen={isOpen}
            hasCloseButton={false}
            headerText={(formSubmitType === FormSubmitTypeEnum.Add) ? "Add Client" : "Update Client"}
            className='right-panel'
            onDismissed={() => history.push("/clients/")}
        >

            <div className="form-client">
                <Image src={profile_pic} width="70px" className="client-image" />
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
                        render={({ onChange, value }) => (
                            <TextField
                                label="Name"
                                required
                                value={value}
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

                    <Controller as={TextField} control={control} name="addressLine1" type="text" label="Address Line 1" />
                    <Controller as={TextField} control={control} name="addressLine2" type="text" label="Address Line 2" />
                    <Controller as={TextField} control={control} name="city" type="text" label="City" />
                    <Controller as={TextField} control={control} name="country" type="text" label="Country" />
                    <Controller as={TextField} control={control} name="companyPhoneNumber" type="tel" label="Company Phone Number" />
                    <Controller as={TextField} control={control} autoAdjustHeight={true} name="notes" type="text" label="Notes" />



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
                        render={({ onChange, value }) => (
                            <TextField
                                label="Contact Name"
                                value={value}
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
                        render={({ onChange, value }) => (
                            <TextField
                                label="Contact Email"
                                required
                                value={value}
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
                                let regEx = /^[+][0-9]{1,3}[- 0-9]{4,13}$/g;
                                return regEx.test(value);
                            },
                        }}
                        render={({ onChange, value }) => (
                            <TextField
                                label="Contact Phone Number"
                                required
                                value={value}
                                onGetErrorMessage={(value: string) => {
                                    if (value !== "") {
                                        let regEx = /^[+][0-9]{1,3}[- 0-9]{4,13}$/g;
                                        if (!regEx.test(value))
                                            return "can accept only +countryCode phoneNumber";
                                    }
                                    return "";
                                }}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div className="client-btn">
                        <PrimaryButton type="submit" text={(formSubmitType===FormSubmitTypeEnum.Add)?"Add":"Update"} />
                        <DefaultButton text="Cancel" onClick={() => {
                            dismissPanel();
                        }} />
                    </div>

                </form>
            </div>
        </Panel>
    );
}

export default FormClient;
