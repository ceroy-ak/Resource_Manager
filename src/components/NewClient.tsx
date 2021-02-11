import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "@fluentui/react";

function NewClient() {
    return (
        <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-md6">
                <h2>Clients</h2>
            </div>
            <div className="ms-Grid-col ms-md3">
                <h5>Filter</h5>
            </div>
            <div className="ms-Grid-col ms-md3">
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
