// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to execute a request to services on a containerized network function.
 *
 * @summary execute a request to services on a containerized network function.
 * x-ms-original-file: 2025-03-30/NetworkFunctionsExecuteRequest.json
 */
async function sendRequestToNetworkFunctionServices(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctions.executeRequest("rg", "testNetworkfunction", {
    requestMetadata: {
      apiVersion: "apiVersionQueryString",
      httpMethod: "Post",
      relativePath: "/simProfiles/testSimProfile",
      serializedBody:
        '{"subscriptionProfile":"ChantestSubscription15","permanentKey":"00112233445566778899AABBCCDDEEFF","opcOperatorCode":"63bfa50ee6523365ff14c1f45f88737d","staticIpAddresses":{"internet":{"ipv4Addr":"198.51.100.1","ipv6Prefix":"2001:db8:abcd:12::0/64"},"another_network":{"ipv6Prefix":"2001:111:cdef:22::0/64"}}}',
    },
    serviceEndpoint: "serviceEndpoint",
  });
}

async function main(): Promise<void> {
  await sendRequestToNetworkFunctionServices();
}

main().catch(console.error);
