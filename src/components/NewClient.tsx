import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "@fluentui/react";

function NewClient() {
    return (
        <div className="ms-Grid-row new-client" dir="ltr">
            <div className="ms-Grid-col ms-md9">
                <h2>Clients</h2>
            </div>
            <div className="ms-Grid-col ms-md1">
                <h4>Filter</h4>
                </div>
            <div className="ms-Grid-col ms-md2">
                <Link to="/clients/add">
                    <PrimaryButton
                        iconProps={{ iconName: "Add" }}
                        title="Add"
                        ariaLabel="Add"
                        text="New Client"
                    />
                </Link>
            </div>
        </div>
    );
}

export default NewClient;
