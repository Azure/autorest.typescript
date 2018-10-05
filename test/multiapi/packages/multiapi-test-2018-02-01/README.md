# Azure AutoRestParameterizedCustomHostTestClient SDK for JavaScript
This package contains **API version 2018-02-01** of AutoRestParameterizedCustomHostTestClient.

For other API versions, see https://npmjs.com/@azure/multiapi-test.

## Currently supported environments
- Node.js version 6.x.x or higher
- Browser JavaScript

## How to Install
```
npm install @azure/multiapi-test-2018-02-01
```


## How to use

### nodejs - Authentication, client creation and getEmpty paths as an example written in TypeScript.

```ts
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as msRestNodeAuth from "ms-rest-nodeauth";
import { AutoRestParameterizedCustomHostTestClient, AutoRestParameterizedCustomHostTestModels, AutoRestParameterizedCustomHostTestMappers } from "@azure/multiapi-test-2018-02-01";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new AutoRestParameterizedCustomHostTestClient(creds, subscriptionId);
  const vault = "testvault";
  const secret = "testsecret";
  const keyName = "testkeyName";
  const keyVersion = "testkeyVersion";
  client.paths.getEmpty(vault, secret, keyName, keyVersion).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
```

### browser - Authentication, client creation and getEmpty paths as an example written in JavaScript.
See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@azure/multiapi-test-2018-02-01 sample</title>
    <script src="node_modules/ms-rest-js/dist/msRest.browser.js"></script>
    <script src="node_modules/ms-rest-azure-js/dist/msRestAzure.js"></script>
    <script src="node_modules/ms-rest-browserauth/dist/msAuth.js"></script>
    <script src="node_modules/@azure/multiapi-test-2018-02-01/dist/multiapi-test-2018-02-01.js"></script>
    <script>
      const subscriptionId = "<Subscription_Id>";
      const authManager = new msAuth.AuthManager({
        clientId: "<client id for your Azure AD app>",
        tenant: "<optional tenant for your organization>"
      });
      authManager.finalizeLogin().then((res) => {
        if (!res.isLoggedIn) {
          // may cause redirects
          authManager.login();
        }
        const client = new Azure.MultiapiTest20180201.AutoRestParameterizedCustomHostTestClient(res.creds, subscriptionId);
        const vault = "testvault";
        const secret = "testsecret";
        const keyName = "testkeyName";
        const keyVersion = "testkeyVersion";
        client.paths.getEmpty(vault, secret, keyName, keyVersion).then((result) => {
          console.log("The result is:");
          console.log(result);
        }).catch((err) => {
          console.log('An error occurred:');
          console.error(err);
        });
      });
    </script>
  </head>
  <body>
  </body>
</html>
```

# Related projects
 - [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)
