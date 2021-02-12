import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, FontIcon, mergeStyles } from "@fluentui/react";

function NewClient() {

    const styles = mergeStyles({
        fontSize: '8px',
    });
    return (
        <div className="ms-Grid-row new-client" dir="ltr">
            <div className="ms-Grid-col ms-md1 new-client--col-1">
                <h2>Clients</h2>
            </div>
            <div className="ms-Grid-col new-client--parent-col">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col new-client--col-2">
                        <p>Filter(0) <FontIcon className={styles} iconName="ChevronDown" /></p>
                    </div>
                    <div className="ms-Grid-col new-client--col-3">
                        <Link to="/clients/add">
                            <PrimaryButton
                                className="new-client--btn"
                                iconProps={{ iconName: "Add" }}
                                title="Add"
                                ariaLabel="Add"
                                text="New Client"
                            />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default NewClient;
