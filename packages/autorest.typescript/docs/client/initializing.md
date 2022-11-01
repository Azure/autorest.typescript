# <img align="center" src="../images/logo.png">  Initializing Your Typescript Client

The first step to using your generated client in code is to import and initialize your client. Our SDKs are modelled such
that the client is the main point of access to the generated code.

## Importing Your Client

You import your client from the package specified when generating (under flag `--package-name`). For the sake of this example,
let's say the namespace is `@azure/pets`. Your client's name is detailed in the swagger, (TODO link to swagger docs), and let's say
ours is called `PetsClient`.

Putting this together, we import our client like so:

```js
import { PetsClient } from "@azure/pets";
```

## Initializing and Authenticating Your Client

Next, on to initialization. Your constructor can take any number of parameters. For the most basic client with no parameters, you can initialize your client like so:

```js
import { PetsClient } from "@azure/pets";

const client: PetsClient = new PetsClient();
```

If you generate with flag `--add-credentials`, your client wil be generated with an [Azure Active Directory (AAD) token credential][aad_authentication]. We always recommend
using a [credential type][identity_credentials] obtained from the [`@azure/identity`][azure_identity_library] library for AAD authentication. For this example,
we use the most common [`DefaultAzureCredential`][default_azure_credential].

As an installation note, the [`@azure/identity`][azure_identity_library] library is not a requirement in our generated `package.json` file, so you would need to install this library separately.

```js
import { DefaultAzureCredential } from "@azure/identity";
import { PetsClient } from "@azure/pets";

const client: PetsClient = new PetsClient(new DefaultAzureCredential());
```

<!-- LINKS -->
[azure_identity_library]: https://www.npmjs.com/package/@azure/identity
[flag_index]: https://github.com/Azure/autorest/tree/main/docs/generate/flags.md
[aad_authentication]: https://docs.microsoft.com/en-us/azure/cognitive-services/authentication?tabs=powershell#authenticate-with-azure-active-directory
[identity_credentials]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credential-classes
[default_azure_credential]: https://docs.microsoft.com/en-us/javascript/api/@azure/identity/defaultazurecredential?view=azure-node-latest
[azure_key_credential]: https://docs.microsoft.com/en-us/python/api/azure-core/azure.core.credentials.azurekeycredential?view=azure-python
