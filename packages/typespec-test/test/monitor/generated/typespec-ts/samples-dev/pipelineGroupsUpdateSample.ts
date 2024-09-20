// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a pipeline group instance
 *
 * @summary updates a pipeline group instance
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupUpdate.json
 */
async function updatesAPipelineGroupInstance() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.pipelineGroups.update(
    "myResourceGroup",
    "plGroup1",
    {
      tags: { tag1: "A", tag2: "B" },
      properties: {
        replicas: 3,
        receivers: [
          {
            type: "Syslog",
            name: "syslog-receiver1",
            syslog: { endpoint: "0.0.0.0:514" },
          },
        ],
        processors: [],
        exporters: [
          {
            type: "AzureMonitorWorkspaceLogs",
            name: "my-workspace-logs-exporter1",
            azureMonitorWorkspaceLogs: {
              api: {
                dataCollectionEndpointUrl:
                  "https://logs-myingestion-eb0s.eastus-1.ingest.monitor.azure.com",
                stream: "Custom-MyTableRawData_CL",
                dataCollectionRule: "dcr-00000000000000000000000000000000",
                schema: {
                  recordMap: [
                    { from: "body", to: "Body" },
                    { from: "severity_text", to: "SeverityText" },
                    { from: "time_unix_nano", to: "TimeGenerated" },
                  ],
                },
              },
              concurrency: { workerCount: 4, batchQueueSize: 100 },
            },
          },
        ],
        service: {
          pipelines: [
            {
              name: "MyPipelineForLogs1",
              type: "logs",
              receivers: ["syslog-receiver1"],
              processors: [],
              exporters: ["my-workspace-logs-exporter1"],
            },
          ],
        },
      },
    },
  );
  console.log(result);
}

async function main() {
  updatesAPipelineGroupInstance();
}

main().catch(console.error);
