# Troubleshoot client library issues

This troubleshooting guide contains instructions to diagnose frequently encountered issues while using the our client library for JavaScript and TypeScript.

## General Troubleshooting

### Enable client logging

To troubleshoot issues, it is important to first enable logging to monitor the
behavior of the application. The errors and warnings in the logs generally provide useful insights into what went wrong
and sometimes include corrective actions to fix issues. The Azure SDK client libraries for JavaScript allow you to enable logging with one of the following approaches:

- Through the `AZURE_LOG_LEVEL` environment variable
- At runtime by calling `setLogLevel` in the `@azure/logger` package

#### Logging via environment variable

To see a log of HTTP requests and responses:

Set the `AZURE_LOG_LEVEL` environment variable to `info`:

```text
// Windows
set AZURE_LOG_LEVEL = info
// Linux based
export AZURE_LOG_LEVEL = info
```

#### Logging using setLogLevel

Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

**NOTE**: When logging the body of request and response, ensure they don't contain confidential information. We already sanitize headers like `Authorization` that contain secrets.

For detailed instructions on how to enable logs, see the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).

### Authentication issues

We support Azure Active Directory authentication. To provide a valid credential, you can use the `@azure/identity` dependency. For more details on getting started, see the [README](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/#######) of Azure App Configuration library.

#### Permission issues

Calls to service clients resulting in an error with HTTP code 401 or 403 often indicate the caller doesn't have sufficient permissions for the specified API. Check the service documentation to determine which RBAC roles are needed for the specific request, and ensure the authenticated user or service principal has been granted the appropriate roles on the resource. For more help with troubleshooting authentication errors, see the Azure Identity client library [troubleshooting guide](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/TROUBLESHOOTING.md).

### Other RestError

The RestError raised by the Azure client library includes detailed error response information that provides useful insights into what went wrong and includes corrective actions to fix common issues. This error information can be found in the `RestError#message` property.
