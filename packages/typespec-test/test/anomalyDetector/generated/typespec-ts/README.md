# AnomalyDetector client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for AnomalyDetector client.

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

- [Package (NPM)](https://www.npmjs.com/package/@msinternal/ai-anomaly-detector)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.


### Install the `@msinternal/ai-anomaly-detector` package

Install the AnomalyDetector client library for JavaScript with `npm`:

```bash
npm install @msinternal/ai-anomaly-detector
```



### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### AnomalyDetectorClient

`AnomalyDetectorClient` is the primary interface for developers using the AnomalyDetector client library. Explore the methods on this client object to understand the different features of the AnomalyDetector service that you can access.

