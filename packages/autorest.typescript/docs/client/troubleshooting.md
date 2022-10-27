# <img align="center" src="../images/logo.png">  Troubleshooting

## Error Handling

Our generated clients raise errors when a service cal returns an undesired error code.

A very basic form of error handling looks like this

```js
import { DefaultAzureCredential } from "@azure/identity";
import { PetsClient } from "@azure/pets";

const client: PetsClient = new PetsClient(new DefaultAzureCredential());
try {
    const dog = await client.getDog();
} catch (err) {
    console.log(err.statusCode);
}
```

## Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`.

```
export AZURE_LOG_LEVEL=info
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs][logger-docs]

<!-- LINKS -->
[logger_docs]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger