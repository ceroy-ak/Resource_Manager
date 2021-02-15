import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { ClientsContext } from '../services/client.contextProvider'
import { Panel, PrimaryButton, DefaultButton, mergeStyles } from '@fluentui/react'
import { useBoolean } from '@uifabric/react-hooks';
import profile_picture from '../../res/microsoft-img.png';
import {FontIcon} from '@fluentui/react/lib/Icon'


interface UrlId {
    id: string
}
function ClientDisplay() {
    const { id } = useParams<UrlId>()
    const { clients } = useContext(ClientsContext)
    const history = useHistory();

    if(clients.has(id) === false){
        history.push('/clients')
    }


    const displayData = clients.get(id)!;

    const [isOpen, { setFalse: dismissPanel }] = useBoolean(true);

    

    enum actionType { Edit, Close };

    function btnAction(action: actionType) {
        dismissPanel();
        setTimeout(()=>{
            if (action === actionType.Edit) {
                history.push(`/clients/${id}/edit`);
            }
            else {
                history.push('/clients')
            }
        },500)

        
    }

    const styles = mergeStyles({
        position: 'relative',
        top: '3px',
    });
    if (displayData !== undefined) {
        console.log("Called from Client Display " + displayData);
        return (
            <Panel
                isOpen={isOpen}
                hasCloseButton={false}
                className='right-panel'
            >
                <div className="client-display">
                    <img className="client-display--picture" src={(displayData.profilePicture === "")?profile_picture: displayData.profilePicture} alt="Company Pic" />
                    <h2 className="client-display--name" >{displayData.name}</h2>
                    <h3 className="client-display--heading" >Contact Details</h3>
                    
                    <p className="client-display--contact-name" ><FontIcon className={styles} iconName="Contact"/> {displayData.contactName}</p>
                    <p className="client-display--email" ><FontIcon className={styles} iconName="Mail"/> {displayData.contactEmail}</p>
                    <p className="client-display--phone" ><FontIcon className={styles} iconName="Phone"/> {displayData.contactPhoneNumber}</p>
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
