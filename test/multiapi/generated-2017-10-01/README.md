# Microsoft Azure SDK for isomorphic javascript - AutoRestParameterizedHostTestClient
This project provides an isomorphic javascript package for accessing Azure. Right now it supports:
- node.js version 6.x.x or higher
- browser javascript

## How to Install

- nodejs
```
npm install @azure/multiapi-test
```
- browser
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/Azure/azure-sdk-for-js/master/lib/services/@azure/multiapi-test/autoRestParameterizedHostTestClientBundle.js"></script>
```

## How to use

### nodejs - Authentication, client creation and getEmpty paths as an example written in TypeScript.

```ts
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as msRestNodeAuth from "ms-rest-nodeauth";
import { AutoRestParameterizedHostTestClient, AutoRestParameterizedHostTestModels, AutoRestParameterizedHostTestMappers } from "@azure/multiapi-test";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new AutoRestParameterizedHostTestClient(creds, subscriptionId);
  const accountName = "testaccountName";
  client.paths.getEmpty(accountName).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
```

### browser - Authentication, client creation and getEmpty paths as an example written in javascript.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@azure/multiapi-test sample</title>
    <script type="text/javascript" src="https://raw.githubusercontent.com/Azure/ms-rest-js/master/msRestBundle.js"></script>
    <script type="text/javascript" src="https://raw.githubusercontent.com/Azure/ms-rest-js/master/msRestAzureBundle.js"></script>
    <script type="text/javascript" src="https://raw.githubusercontent.com/Azure/azure-sdk-for-js/master/lib/services/@azure/multiapi-test/autoRestParameterizedHostTestClientBundle.js"></script>
    <script type="text/javascript">
      const subscriptionId = "<Subscription_Id>";
      const token = "<access_token>";
      const creds = new msRest.TokenCredentials(token);
      const client = new AutoRestParameterizedHostTestClient(creds, undefined, subscriptionId);
      const accountName = "testaccountName";
      client.paths.getEmpty(accountName).then((result) => {
        console.log("The result is:");
        console.log(result);
      }).catch((err) => {
        console.log('An error ocurred:');
        console.error(err);
      });
    </script>
  </head>
  <body>
  </body>
</html>
```

# Related projects
 - [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)
