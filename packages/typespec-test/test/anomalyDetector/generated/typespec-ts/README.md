# AnomalyDetector REST client library for JavaScript

The Anomaly Detector API detects anomalies automatically in time series data.
It supports two kinds of mode, one is for stateless using, another is for
stateful using. In stateless mode, there are three functionalities. Entire
Detect is for detecting the whole series with model trained by the time series,
Last Detect is detecting last point with model trained by points before.
ChangePoint Detect is for detecting trend changes in time series. In stateful
mode, user can store time series, the stored time series will be used for
detection anomalies. Under this mode, user can still use the above three
functionalities by only giving a time range without preparing time series in
client side. Besides the above three functionalities, stateful model also
provide group based detection and labeling service. By leveraging labeling
service user can provide labels for each detection result, these labels will be
used for retuning or regenerating detection models. Inconsistency detection is
a kind of group based detection, this detection will find inconsistency ones in
a set of time series. By using anomaly detector service, business customers can
discover incidents and establish a logic flow for root cause analysis.

**Please rely heavily on our [REST client docs](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md) to use this library**

Key links:

- [Package (NPM)](https://www.npmjs.com/package/@msinternal/ai-anomaly-detector)

## Getting started

### Currently supported environments

- LTS versions of Node.js

### Prerequisites

- You must have an [Azure subscription](https://azure.microsoft.com/free/) to use this package.

### Install the `@msinternal/ai-anomaly-detector` package

Install the AnomalyDetector REST client REST client library for JavaScript with `npm`:

```bash
npm install @msinternal/ai-anomaly-detector
```

### Create and authenticate a `AnomalyDetectorClient`

To use an [Azure Active Directory (AAD) token credential](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md#authenticating-with-a-pre-fetched-access-token),
provide an instance of the desired credential type obtained from the
[@azure/identity](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) library.

To authenticate with AAD, you must first `npm` install [`@azure/identity`](https://www.npmjs.com/package/@azure/identity) 

After setup, you can choose which type of [credential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) from `@azure/identity` to use.
As an example, [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential)
can be used to authenticate the client.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
const { setLogLevel } = require("@azure/logger");

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).
