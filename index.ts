import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-nextgen/resources/v20200601";
import { UserAssignedIdentity } from "@pulumi/azure-nextgen/managedidentity/v20181130";

// Create an Azure Resource Group
const resourceGroup = new resources.ResourceGroup("resourceGroup", {
    resourceGroupName: "josh-repro",
    location: "eastus2",
});

const exampleIdentity = new UserAssignedIdentity('example', {
    location: "eastus2",
    resourceGroupName: resourceGroup.name,
    resourceName: 'example'
});
