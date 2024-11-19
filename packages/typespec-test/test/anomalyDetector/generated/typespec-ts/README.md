# AnomalyDetector client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for AnomalyDetector client.

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

