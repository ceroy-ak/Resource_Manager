import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {ClientsContext } from "../services/client.contextProvider";
import {Client} from '../interfaces/client.interface'
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

function FormClient() {

    let profilePictureSelected:string = "";

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
        notes: "",
        profilePicture: ""
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
        console.log(profilePictureSelected)
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
            profilePicture: profilePicture ?? "",
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

    profilePictureSelected = (defaultValue.profilePicture!=="")?defaultValue.profilePicture:"data:image/jpeg;base64,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";


    const [profilePicture, setProfilePicture] = useState(profilePictureSelected);

    return (
        <Panel
            isOpen={isOpen}
            hasCloseButton={false}
            headerText={(formSubmitType === FormSubmitTypeEnum.Add) ? "Add Client" : "Update Client"}
            className='right-panel'
            onDismissed={() => history.push("/clients/")}
        >

            <div className="form-client">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Image src={profilePicture} width="70px" onClick={()=>{document.getElementById('profileImg')?.click()}} className="client-image" />
                    <input type="file" id="profileImg" style={{display:"none"}} accept=".png,.jpg,.jpeg" onChange={(e)=>{
                            const reader = new FileReader();
                            if(e.target.files){
                                reader.readAsDataURL(e.target.files[0]);
                                reader.onload = () => {
                                    var temp:string = reader.result!.toString()
                                    console.log(temp);
                                    setProfilePicture(temp)
                                }
                            }
                                

                    }} alt="profile"/>
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
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
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

                    <Controller as={TextField} control={control} onKeyPress={(e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} name="addressLine1" type="text" label="Address Line 1" />
                    <Controller as={TextField} control={control} onKeyPress={(e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} name="addressLine2" type="text" label="Address Line 2" />
                    <Controller as={TextField} control={control} onKeyPress={(e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} name="city" type="text" label="City" />
                    <Controller as={TextField} control={control} onKeyPress={(e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} name="country" type="text" label="Country" />
                    <Controller as={TextField} control={control} onKeyPress={(e:React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} name="companyPhoneNumber" type="tel" label="Company Phone Number" />


                    <Controller as={TextField} control={control} multiline={true} resizable={false} autoAdjustHeight={true} name="notes" type="text" label="Notes" />



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
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
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
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
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
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
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
