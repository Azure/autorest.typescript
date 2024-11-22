// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { NameType, normalizeName } from "../helpers/nameUtils.js";
import { isAzurePackage } from "../helpers/packageUtil.js";
import { getClientName } from "../helpers/nameConstructors.js";

const azureReadmeRLCTemplate = `# {{ clientDescriptiveName }} library for JavaScript

{{ description }}

{{#if azureArm}}
**If you are not familiar with our REST client, please spend 5 minutes to take a look at {{#if serviceDocURL}}[the service's documentation]({{ serviceDocURL }}) and {{/if}}our [REST client docs](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md) to use this library, the REST client provides a light-weighted & developer friendly way to call azure rest api
{{else}}
**Please rely heavily on {{#if serviceDocURL}}[the service's documentation]({{ serviceDocURL }}) and {{/if}}our [REST client docs](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md) to use this library**
{{/if}}

Key links:

{{#if packageSourceURL}}
- [Source code]({{ packageSourceURL }})
{{/if}}
{{#if packageNPMURL}}
- [Package (NPM)]({{ packageNPMURL }})
{{/if}}
{{#if apiRefURL}}
- [API reference documentation]({{ apiRefURL }})
{{/if}}
{{#if serviceDocURL}}
- [Product documentation]({{ serviceDocURL }})
{{/if}}
{{#if samplesURL}}
- [Samples]({{ samplesURL }})
{{/if}}

## Getting started

### Currently supported environments

- LTS versions of Node.js

### Prerequisites

- You must have an [Azure subscription](https://azure.microsoft.com/free/){{#if dependencyLink}} and follow [these]({{ dependencyLink }}) instructions{{/if}} to use this package.

### Install the \`{{ clientPackageName }}\` package

Install the {{ clientDescriptiveName }} REST client library for JavaScript with \`npm\`:

\`\`\`bash
npm install {{ clientPackageName }}
\`\`\`

### Create and authenticate a \`{{ clientClassName }}\`

To use an [Azure Active Directory (AAD) token credential](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md#authenticating-with-a-pre-fetched-access-token),
provide an instance of the desired credential type obtained from the
[@azure/identity](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) library.

To authenticate with AAD, you must first \`npm\` install [\`@azure/identity\`](https://www.npmjs.com/package/@azure/identity) {{#if dependencyLink}}and
[{{dependencyDescription }}]({{ dependencyLink }}){{/if}}

After setup, you can choose which type of [credential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) from \`@azure/identity\` to use.
As an example, [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential)
can be used to authenticate the client.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the \`AZURE_LOG_LEVEL\` environment variable to \`info\`. Alternatively, logging can be enabled at runtime by calling \`setLogLevel\` in the \`@azure/logger\`:

\`\`\`javascript
const { setLogLevel } = require("@azure/logger");

setLogLevel("info");
\`\`\`

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).
`;

const azureReadmeModularTemplate = `# {{ clientDescriptiveName }} library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for {{ clientDescriptiveName }}.

{{ description }}

Key links:

{{#if packageSourceURL}}
- [Source code]({{ packageSourceURL }})
{{/if}}
{{#if packageNPMURL}}
- [Package (NPM)]({{ packageNPMURL }})
{{/if}}
{{#if apiRefURL}}
- [API reference documentation]({{ apiRefURL }})
{{/if}}
{{#if samplesURL}}
- [Samples]({{samplesURL}})
{{/if}}

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.

{{#if azure}}
### Prerequisites

- An [Azure subscription][azure_sub].
{{/if}}

{{#if isReleasablePackage}}
### Install the \`{{ clientPackageName }}\` package

Install the {{ clientDescriptiveName }} library for JavaScript with \`npm\`:

\`\`\`bash
npm install {{ clientPackageName }}
\`\`\`
{{/if}}

{{#if azure}}
{{#if addCredentials}}
### Create and authenticate a \`{{ clientClassName}}\`

To create a client object to access the {{ serviceName }} API, you will need the \`endpoint\` of your {{ serviceName }} resource and a \`credential\`. The {{ clientDescriptiveName }} can use Azure Active Directory credentials to authenticate.
You can find the endpoint for your {{ serviceName }} resource in the [Azure Portal][azure_portal].

You can authenticate with Azure Active Directory using a credential from the [@azure/identity][azure_identity] library or [an existing AAD Token](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/samples/AzureIdentityExamples.md#authenticating-with-a-pre-fetched-access-token).

To use the [DefaultAzureCredential][defaultazurecredential] provider shown below, or other credential providers provided with the Azure SDK, please install the \`@azure/identity\` package:

\`\`\`bash
npm install @azure/identity
\`\`\`

You will also need to **register a new AAD application and grant access to {{ serviceName}}** by assigning the suitable role to your service principal (note: roles such as \`"Owner"\` will not grant the necessary permissions).

For more information about how to create an Azure AD Application check out [this guide](https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal).

{{#if azureArm}}
\`\`\`javascript
const { {{ clientClassName }} } = require("{{ clientPackageName }}");
const { DefaultAzureCredential } = require("@azure/identity");
// For client-side applications running in the browser, use InteractiveBrowserCredential instead of DefaultAzureCredential. See https://aka.ms/azsdk/js/identity/examples for more details.

const subscriptionId = "00000000-0000-0000-0000-000000000000";
const client = new {{ clientClassName }}(new DefaultAzureCredential(), subscriptionId);

// For client-side applications running in the browser, use this code instead:
// const credential = new InteractiveBrowserCredential({
//   tenantId: "<YOUR_TENANT_ID>",
//   clientId: "<YOUR_CLIENT_ID>"
// });
// const client = new {{ clientClassName }}(credential, subscriptionId);
\`\`\`
{{else}}
\`\`\`javascript
const { {{ clientClassName }} } = require("{{ clientPackageName }}");
const { DefaultAzureCredential } = require("@azure/identity");
// For client-side applications running in the browser, use InteractiveBrowserCredential instead of DefaultAzureCredential. See https://aka.ms/azsdk/js/identity/examples for more details.

const client = new {{ clientClassName }}("<endpoint>", new DefaultAzureCredential());
// For client-side applications running in the browser, use this code instead:
// const credential = new InteractiveBrowserCredential({
//   tenantId: "<YOUR_TENANT_ID>",
//   clientId: "<YOUR_CLIENT_ID>"
// });
// const client = new {{ clientClassName }}("<endpoint>", credential);
\`\`\`
{{/if}}
{{/if}}{{/if}}

### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### {{ clientClassName }}

\`{{ clientClassName }}\` is the primary interface for developers using the {{ clientDescriptiveName }} library. Explore the methods on this client object to understand the different features of the {{ serviceName }} service that you can access.

{{#if azure}}
## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the \`AZURE_LOG_LEVEL\` environment variable to \`info\`. Alternatively, logging can be enabled at runtime by calling \`setLogLevel\` in the \`@azure/logger\`:

\`\`\`javascript
const { setLogLevel } = require("@azure/logger");
setLogLevel("info");
\`\`\`

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs]({{ repoURL }}/tree/main/sdk/core/logger).

{{#if samplesURL}}
## Next steps

Please take a look at the [samples]({{ samplesURL }}) directory for detailed examples on how to use this library.
{{/if}}

## Contributing

If you'd like to contribute to this library, please read the [contributing guide]({{ contributingGuideURL }}) to learn more about how to build and test the code.

## Related projects

- [{{ projectName }}]({{ repoURL }})

[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
{{#if identityPackageURL}}[azure_identity]: {{ identityPackageURL }}
{{/if}}[defaultazurecredential]: {{ identityPackageURL }}#defaultazurecredential
{{/if}}
`;

const nonBrandedReadmeTemplate = `# {{ clientDescriptiveName }} library for JavaScript

{{ description }}

Key links:

{{#if packageSourceURL}}
- [Source code]({{ packageSourceURL }})
{{/if}}
{{#if packageNPMURL}}
- [Package (NPM)]({{ packageNPMURL }})
{{/if}}
{{#if apiRefURL}}
- [API reference documentation]({{ apiRefURL }})
{{/if}}
{{#if serviceDocURL}}
- [Product documentation]({{ serviceDocURL }})
{{/if}}
{{#if samplesURL}}
- [Samples]({{ samplesURL }})
{{/if}}

## Getting started

### Currently supported environments

- LTS versions of Node.js

### Install the \`{{ clientPackageName }}\` package

Install the {{ clientDescriptiveName }} library for JavaScript with \`npm\`:

\`\`\`bash
npm install {{ clientPackageName }}
\`\`\`
`;

/**
 * Meta data information about the service, the package, and the client.
 */
interface Metadata {
  /** The name of the service */
  serviceName: string;
  /** The name of the package */
  clientPackageName: string;
  /** The name of the client class */
  clientClassName: string;
  /** The URL of the repository the package lives in */
  repoURL?: string;
  /** The URL to the package directory in the repository */
  packageSourceURL?: string;
  /** The URL to the package's samples */
  samplesURL?: string;
  /** A descriptive name for the client extracted from the swagger */
  clientDescriptiveName?: string;
  /** A description for the service extracted from the swagger */
  description?: string;
  /** The URL to the package on npmjs.org */
  packageNPMURL?: string;
  /** The name of the project that lives in the repository */
  projectName?: string;
  /** whether the client accepts standard credentials */
  addCredentials?: boolean;
  /** The link to the identity package in the repository */
  identityPackageURL?: string;
  /** The URL for the service document */
  serviceDocURL?: string;
  /** The dependency info for this service */
  dependencyDescription?: string;
  dependencyLink?: string;
  /** Indicates if the package is a multi-client */
  hasMultiClients?: boolean;
  /** The URL to the API reference */
  apiRefURL?: string;
  /** Check if the rp is management plane */
  azureArm?: boolean;
  /** Whether the package being generated is for an Azure service */
  azure: boolean;
  /** Indicates if the package is a test/releasable package. */
  isReleasablePackage?: boolean;
  /** The link to the contributing guide in the repository */
  contributingGuideURL?: string;
}

export function buildReadmeFile(model: RLCModel) {
  const metadata = createMetadata(model) ?? {};
  const readmeFileContents = hbs.compile(
    model.options && isAzurePackage(model)
      ? model.options.isModularLibrary
        ? azureReadmeModularTemplate
        : azureReadmeRLCTemplate
      : nonBrandedReadmeTemplate,
    { noEscape: true }
  );
  return {
    path: "README.md",
    content: readmeFileContents(metadata)
  };
}

/**
 * Returns meta data information about the service, the package, and the client.
 * @param codeModel - include the client details
 * @returns inferred metadata about the service, the package, and the client
 */
function createMetadata(model: RLCModel): Metadata | undefined {
  if (!model.options || !model.options.packageDetails) {
    return;
  }
  // const packageDetails = model.options.packageDetails;
  const {
    packageDetails,
    azureOutputDirectory,
    productDocLink,
    dependencyInfo,
    multiClient,
    batch,
    serviceInfo,
    isTypeSpecTest
  } = model.options;

  const azureHuh =
    packageDetails?.scopeName === "azure" ||
    packageDetails?.scopeName === "azure-rest";
  const repoURL = "https://github.com/Azure/azure-sdk-for-js";
  const relativePackageSourcePath = azureOutputDirectory;
  const packageSourceURL =
    relativePackageSourcePath &&
    repoURL &&
    `${repoURL}/tree/main/${relativePackageSourcePath}`;

  const clientPackageName = packageDetails?.name;
  const clientClassName = getClientName(model);
  const serviceName = getServiceName(model);
  let apiRefUrlQueryParameter: string = "";
  packageDetails.version = packageDetails.version ?? "1.0.0-beta.1";
  if (packageDetails?.version.includes("beta")) {
    apiRefUrlQueryParameter = "?view=azure-node-preview";
  }

  return {
    serviceName,
    clientClassName,
    clientPackageName: clientPackageName,
    clientDescriptiveName: model.options.isModularLibrary
      ? `${serviceName} client`
      : `${serviceName} REST client`,
    description: serviceInfo?.description ?? packageDetails.description,
    serviceDocURL: productDocLink,
    packageSourceURL: packageSourceURL,
    packageNPMURL: `https://www.npmjs.com/package/${clientPackageName}`,
    samplesURL:
      model.options.generateSample && packageSourceURL
        ? `${packageSourceURL}/samples`
        : undefined,
    apiRefURL: azureHuh
      ? `https://docs.microsoft.com/javascript/api/${clientPackageName}${apiRefUrlQueryParameter}`
      : undefined,
    dependencyDescription: dependencyInfo?.description,
    dependencyLink: dependencyInfo?.link,
    hasMultiClients: multiClient && batch && batch.length > 1,
    azureArm: Boolean(model.options.azureArm),
    azure: azureHuh,
    isReleasablePackage: !isTypeSpecTest,
    repoURL: repoURL,
    projectName: azureHuh ? "Microsoft Azure SDK for JavaScript" : undefined,
    identityPackageURL: repoURL && `${repoURL}/tree/main/sdk/identity/identity`,
    addCredentials: model.options.addCredentials,
    contributingGuideURL: repoURL && `${repoURL}/blob/main/CONTRIBUTING.md`
  };
}

function getServiceName(model: RLCModel) {
  const azureHuh =
    model?.options?.packageDetails?.scopeName === "azure" ||
    model?.options?.packageDetails?.scopeName === "azure-rest";
  const libraryName = model.libraryName;
  const serviceTitle = model.options?.serviceInfo?.title ?? model.libraryName;
  const batch = model?.options?.batch,
    packageDetails = model?.options?.packageDetails;
  let simpleServiceName =
    batch && batch.length > 1
      ? normalizeName(
          packageDetails!.nameWithoutScope ?? packageDetails?.name ?? "",
          NameType.Class
        )
      : normalizeName(serviceTitle, NameType.Class);
  simpleServiceName =
    /**
     * It is a required convention in Azure swaggers for their titles to end with
     * "Client".
     */
    serviceTitle.match(/(.*) Client/)?.[1] ??
    serviceTitle.match(/(.*)Client/)?.[1] ??
    libraryName.match(/(.*)Client/)?.[1] ??
    serviceTitle.match(/(.*) Service/)?.[1] ??
    simpleServiceName;

  return azureHuh
    ? simpleServiceName.startsWith("Azure")
      ? simpleServiceName
      : `Azure ${simpleServiceName}`
    : simpleServiceName;
}
