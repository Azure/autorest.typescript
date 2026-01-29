// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a hybrid configuration group value.
 *
 * @summary creates or updates a hybrid configuration group value.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupValueCreate.json
 */
async function createOrUpdateConfigurationGroupValue(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.createOrUpdate(
    "rg1",
    "testConfigurationGroupValue",
    {
      location: "eastus",
      properties: {
        configurationGroupSchemaResourceReference: {
          id: "/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName",
          idType: "Open",
        },
        configurationType: "Open",
        configurationValue:
          '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}',
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a hybrid configuration group value.
 *
 * @summary creates or updates a hybrid configuration group value.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupValueCreateSecret.json
 */
async function createOrUpdateConfigurationGroupValueWithSecrets(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.createOrUpdate(
    "rg1",
    "testConfigurationGroupValue",
    {
      location: "eastus",
      properties: {
        configurationGroupSchemaResourceReference: {
          id: "/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName",
          idType: "Open",
        },
        configurationType: "Secret",
        secretConfigurationValue:
          '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}',
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a hybrid configuration group value.
 *
 * @summary creates or updates a hybrid configuration group value.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupValueFirstPartyCreate.json
 */
async function createOrUpdateFirstPartyConfigurationGroupValue(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupValues.createOrUpdate(
    "rg1",
    "testConfigurationGroupValue",
    {
      location: "eastus",
      properties: {
        configurationGroupSchemaResourceReference: {
          id: "/subscriptions/subid/resourcegroups/testRG/providers/microsoft.hybridnetwork/publishers/testPublisher/configurationGroupSchemas/testConfigurationGroupSchemaName",
          idType: "Secret",
        },
        configurationType: "Open",
        configurationValue:
          '{"interconnect-groups":{"stripe-one":{"name":"Stripe one","international-interconnects":["france","germany"],"domestic-interconnects":["birmingham","edinburgh"]},"stripe-two":{"name":"Stripe two","international-interconnects":["germany","italy"],"domestic-interconnects":["edinburgh","london"]}},"interconnect-group-assignments":{"ssc-one":{"ssc":"SSC 1","interconnects":"stripe-one"},"ssc-two":{"ssc":"SSC 2","interconnects":"stripe-two"}}}',
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateConfigurationGroupValue();
  await createOrUpdateConfigurationGroupValueWithSecrets();
  await createOrUpdateFirstPartyConfigurationGroupValue();
}

main().catch(console.error);
