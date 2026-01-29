// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a configuration group schema.
 *
 * @summary creates or updates a configuration group schema.
 * x-ms-original-file: 2025-03-30/ConfigurationGroupSchemaCreate.json
 */
async function createOrUpdateTheNetworkFunctionDefinitionGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationGroupSchemas.createOrUpdate(
    "rg1",
    "testPublisher",
    "testConfigurationGroupSchema",
    {
      location: "westUs2",
      properties: {
        description: "Schema with no secrets",
        schemaDefinition:
          '{"type":"object","properties":{"interconnect-groups":{"type":"object","properties":{"type":"object","properties":{"name":{"type":"string"},"international-interconnects":{"type":"array","item":{"type":"string"}},"domestic-interconnects":{"type":"array","item":{"type":"string"}}}}},"interconnect-group-assignments":{"type":"object","properties":{"type":"object","properties":{"ssc":{"type":"string"},"interconnects-interconnects":{"type":"string"}}}}},"required":["interconnect-groups","interconnect-group-assignments"]}',
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateTheNetworkFunctionDefinitionGroup();
}

main().catch(console.error);
