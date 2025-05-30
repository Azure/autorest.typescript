/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ManagedInstanceAzureADOnlyAuthentication,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Sets Server Active Directory only authentication property or updates an existing server Active Directory only authentication property.
 *
 * @summary Sets Server Active Directory only authentication property or updates an existing server Active Directory only authentication property.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceAzureADOnlyAuthCreateOrUpdate.json
 */
async function createsOrUpdatesAzureActiveDirectoryOnlyAuthenticationObject(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const managedInstanceName = "managedInstance";
  const authenticationName = "Default";
  const parameters: ManagedInstanceAzureADOnlyAuthentication = {
    azureADOnlyAuthentication: false,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.managedInstanceAzureADOnlyAuthentications.beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
      authenticationName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesAzureActiveDirectoryOnlyAuthenticationObject();
}

main().catch(console.error);
