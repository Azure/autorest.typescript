# Azure AnomalyDetector client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Azure AnomalyDetector client.

The Anomaly Detector API detects anomalies automatically in time series data.
It supports both a stateless detection mode and a
stateful detection mode. In stateless mode, there are three functionalities. Entire
Detect is for detecting the whole series, with the model trained by the time series.
Last Detect is for detecting the last point, with the model trained by points before.
ChangePoint Detect is for detecting trend changes in the time series. In stateful
mode, the user can store time series. The stored time series will be used for
detection anomalies. In this mode, the user can still use the preceding three
functionalities by only giving a time range without preparing time series on the
client side. Besides the preceding three functionalities, the stateful model
provides group-based detection and labeling services. By using the labeling
service, the user can provide labels for each detection result. These labels will be
used for retuning or regenerating detection models. Inconsistency detection is
a kind of group-based detection that finds inconsistencies in
a set of time series. By using the anomaly detector service, business customers can
discover incidents and establish a logic flow for root cause analysis.

Key links:

- [Package (NPM)](https://www.npmjs.com/package/@azure/ai-anomaly-detector)
- [API reference documentation](https://learn.microsoft.com/javascript/api/@azure/ai-anomaly-detector)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.

### Prerequisites

- An [Azure subscription][azure_sub].

### Install the `@azure/ai-anomaly-detector` package

Install the Azure AnomalyDetector client library for JavaScript with `npm`:

```bash
npm install @azure/ai-anomaly-detector
```

### Create and authenticate a `AnomalyDetectorClient`

To create a client object to access the Azure AnomalyDetector API, you will need the `endpoint` of your Azure AnomalyDetector resource and a `credential`. The Azure AnomalyDetector client can use Azure Active Directory credentials to authenticate.
You can find the endpoint for your Azure AnomalyDetector resource in the [Azure Portal][azure_portal].

You can authenticate with Azure Active Directory using a credential from the [@azure/identity][azure_identity] library or [an existing AAD Token](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/samples/AzureIdentityExamples.md#authenticating-with-a-pre-fetched-access-token).

To use the [DefaultAzureCredential][defaultazurecredential] provider shown below, or other credential providers provided with the Azure SDK, please install the `@azure/identity` package:

```bash
npm install @azure/identity
```

You will also need to **register a new AAD application and grant access to Azure AnomalyDetector** by assigning the suitable role to your service principal (note: roles such as `"Owner"` will not grant the necessary permissions).

For more information about how to create an Azure AD Application check out [this guide](https://learn.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal).

Using Node.js and Node-like environments, you can use the `DefaultAzureCredential` class to authenticate the client.

```ts 
import { AnomalyDetectorClient } from "@azure/ai-anomaly-detector";
import { DefaultAzureCredential } from "@azure/identity";

const client = new AnomalyDetectorClient("<endpoint>", new DefaultAzureCredential());
```

For browser environments, use the `InteractiveBrowserCredential` from the `@azure/identity` package to authenticate.

```ts 
import { InteractiveBrowserCredential } from "@azure/identity";
import { AnomalyDetectorClient } from "@azure/ai-anomaly-detector";

const credential = new InteractiveBrowserCredential({
  tenantId: "<YOUR_TENANT_ID>",
  clientId: "<YOUR_CLIENT_ID>"
 });
const client = new AnomalyDetectorClient("<endpoint>", credential);
```


### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### AnomalyDetectorClient

`AnomalyDetectorClient` is the primary interface for developers using the Azure AnomalyDetector client library. Explore the methods on this client object to understand the different features of the Azure AnomalyDetector service that you can access.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts 
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).


## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/main/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)

[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_identity]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential
