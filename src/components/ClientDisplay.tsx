import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { ClientsContext } from './Contexts/ClientProvider'
import { Panel, PrimaryButton, DefaultButton } from '@fluentui/react'
import { useBoolean } from '@uifabric/react-hooks';
import profile_picture from '../res/microsoft-img.png';


interface UrlId {
    id: string
}
function ClientDisplay() {
    const { id } = useParams<UrlId>()
    const { clients } = useContext(ClientsContext)
    const displayData = clients.get(id)!;

    const [isOpen, { setFalse: dismissPanel }] = useBoolean(true);

    const history = useHistory();

    enum actionType { Edit, Close };

    function btnAction(action: actionType) {

        if (action === actionType.Edit) {
            history.push(`/clients/${id}/edit`);
        }
        else {
            history.push('/clients')
        }
        dismissPanel();
    }

    if (id !== 'add' && displayData !== undefined) {
        return (
            <Panel
                isOpen={isOpen}
                hasCloseButton={false}
            >
                <div className="client-display">
                    <img className="client-display--picture" src={profile_picture} alt="Company Pic" />
                    <h2 className="client-display--name" >{displayData.name}</h2>
                    <h3 className="client-display--heading" >Contact Details</h3>
                    <p className="client-display--contact-name" >{displayData.contactName}</p>
                    <p className="client-display--email" >{displayData.contactEmail}</p>
                    <p className="client-display--phone" >{displayData.contactPhoneNumber}</p>
                    <div className="client-display--btn">
                        <PrimaryButton className="client-display--update" text="Update Details" onClick={() => btnAction(actionType.Edit)} />
                        <DefaultButton className="client-display--cancel" text="Cancel" onClick={() => btnAction(actionType.Close)} />
                    </div>

                </div>
            </Panel>)
    } else {
        return <></>
    }
}

export default ClientDisplay
