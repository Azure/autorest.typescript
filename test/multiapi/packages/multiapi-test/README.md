## Azure AutoRestParameterizedCustomHostTestClient SDK for JavaScript

This package contains the **latest API version (2018-02-01)** of AutoRestParameterizedCustomHostTestClient.

### Currently supported environments

- Node.js version 6.x.x or higher
- Browser JavaScript

### How to Install

```bash
npm install @azure/multiapi-test
```

### Available API versions

| API version | NPM package | Latest |
| - | - | - |
| 2018-02-01 | https://npmjs.com/@azure/multiapi-test-2018-02-01 | ✔️ |
| 2017-10-01 | https://npmjs.com/@azure/multiapi-test-2017-10-01 |  |

### How to use

#### nodejs - Authentication, client creation and getEmpty paths as an example written in TypeScript.

##### Install @azure/ms-rest-nodeauth

```bash
npm install @azure/ms-rest-nodeauth
```

##### Sample code

```typescript
import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { AutoRestParameterizedCustomHostTestClient, AutoRestParameterizedCustomHostTestModels, AutoRestParameterizedCustomHostTestMappers } from "@azure/multiapi-test";
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

#### browser - Authentication, client creation and getEmpty paths as an example written in JavaScript.

##### Install @azure/ms-rest-browserauth

```bash
npm install @azure/ms-rest-browserauth
```

##### Sample code

See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@azure/multiapi-test sample</title>
    <script src="node_modules/@azure/ms-rest-js/dist/msRest.browser.js"></script>
    <script src="node_modules/@azure/ms-rest-azure-js/dist/msRestAzure.js"></script>
    <script src="node_modules/@azure/ms-rest-browserauth/dist/msAuth.js"></script>
    <script src="node_modules/@azure/multiapi-test/dist/multiapi-test.js"></script>
    <script type="text/javascript">
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
        const client = new Azure.MultiapiTest.AutoRestParameterizedCustomHostTestClient(res.creds, subscriptionId);
        const vault = "testvault";
        const secret = "testsecret";
        const keyName = "testkeyName";
        const keyVersion = "testkeyVersion";
        client.paths.getEmpty(vault, secret, keyName, keyVersion).then((result) => {
          console.log("The result is:");
          console.log(result);
        }).catch((err) => {
          console.log("An error occurred:");
          console.error(err);
        });
      });
    </script>
  </head>
  <body></body>
</html>
```

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js/sdk/README.png)
