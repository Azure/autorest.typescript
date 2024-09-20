// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a pipeline group instance.
 *
 * @summary create or update a pipeline group instance.
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupCreateSyslogs.json
 */
async function createAPipelineGroupInstanceUsingASyslogReceiver() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.pipelineGroups.createOrUpdate(
    "myResourceGroup",
    "plGroup1",
    {
      location: "eastus2",
      extendedLocation: {
        name: "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation",
        type: "CustomLocation",
      },
      tags: { tag1: "A", tag2: "B" },
      properties: {
        receivers: [
          {
            type: "Syslog",
            name: "syslog-receiver1",
            syslog: { endpoint: "0.0.0.0:514" },
          },
        ],
        processors: [{ type: "Batch", name: "batch-processor1" }],
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
              processors: ["batch-processor1"],
              exporters: ["my-workspace-logs-exporter1"],
            },
          ],
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create or update a pipeline group instance.
 *
 * @summary create or update a pipeline group instance.
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupCreateSyslogsWithCache.json
 */
async function createAPipelineGroupInstanceUsingASyslogReceiverAndCache() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.pipelineGroups.createOrUpdate(
    "myResourceGroup",
    "plGroup1",
    {
      location: "eastus2",
      extendedLocation: {
        name: "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation",
        type: "CustomLocation",
      },
      tags: { tag1: "A", tag2: "B" },
      properties: {
        receivers: [
          {
            type: "Syslog",
            name: "syslog-receiver1",
            syslog: { endpoint: "0.0.0.0:514" },
          },
        ],
        processors: [{ type: "Batch", name: "batch-processor1" }],
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
              cache: { maxStorageUsage: 100, retentionPeriod: 10 },
            },
          },
        ],
        service: {
          pipelines: [
            {
              name: "MyPipelineForLogs1",
              type: "logs",
              receivers: ["syslog-receiver1"],
              processors: ["batch-processor1"],
              exporters: ["my-workspace-logs-exporter1"],
            },
          ],
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create or update a pipeline group instance.
 *
 * @summary create or update a pipeline group instance.
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupCreateSyslogsWithNetworking.json
 */
async function createAPipelineGroupInstanceUsingASyslogReceiverAndNetworkingConfigurations() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.pipelineGroups.createOrUpdate(
    "myResourceGroup",
    "plGroup1",
    {
      location: "eastus2",
      extendedLocation: {
        name: "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation",
        type: "CustomLocation",
      },
      tags: { tag1: "A", tag2: "B" },
      properties: {
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
        networkingConfigurations: [
          {
            externalNetworkingMode: "LoadBalancerOnly",
            host: "azuremonitorpipeline.contoso.com",
            routes: [{ receiver: "syslog-receiver1" }],
          },
        ],
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create or update a pipeline group instance.
 *
 * @summary create or update a pipeline group instance.
 * x-ms-original-file: 2023-10-01-preview/PipelineGroupCreateUdp.json
 */
async function createAPipelineGroupInstanceUsingUdpReceiver() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.pipelineGroups.createOrUpdate(
    "myResourceGroup",
    "plGroup1",
    {
      location: "eastus2",
      extendedLocation: {
        name: "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/myTestCustomLocation",
        type: "CustomLocation",
      },
      tags: { tag1: "A", tag2: "B" },
      properties: {
        receivers: [
          {
            type: "UDP",
            name: "udp-receiver1",
            udp: { endpoint: "0.0.0.0:518", encoding: "utf-8" },
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
              receivers: ["udp-receiver1"],
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
  createAPipelineGroupInstanceUsingASyslogReceiver();
  createAPipelineGroupInstanceUsingASyslogReceiverAndCache();
  createAPipelineGroupInstanceUsingASyslogReceiverAndNetworkingConfigurations();
  createAPipelineGroupInstanceUsingUdpReceiver();
}

main().catch(console.error);
