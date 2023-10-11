import { RLCModel } from "../interfaces.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import { NameType, normalizeName } from "../helpers/nameUtils.js";

const readmeTemplate = `# {{ clientDescriptiveName }} library for JavaScript

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

Set the values of the client ID, tenant ID, and client secret of the AAD application as environment variables:
AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_CLIENT_SECRET

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the \`AZURE_LOG_LEVEL\` environment variable to \`info\`. Alternatively, logging can be enabled at runtime by calling \`setLogLevel\` in the \`@azure/logger\`:

\`\`\`javascript
const { setLogLevel } = require("@azure/logger");

setLogLevel("info");
\`\`\`

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).
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
}

export function buildReadmeFile(model: RLCModel) {
  const metadata = createMetadata(model) ?? {};
  const readmeFileContents = hbs.compile(readmeTemplate, { noEscape: true });
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
    serviceInfo
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
    clientDescriptiveName: `${serviceName} REST client`,
    description: serviceInfo?.description ?? packageDetails.description,
    serviceDocURL: productDocLink,
    packageSourceURL: packageSourceURL,
    packageNPMURL: `https://www.npmjs.com/package/${clientPackageName}`,
    samplesURL: packageSourceURL && `${packageSourceURL}/samples`,
    apiRefURL: azureHuh
      ? `https://docs.microsoft.com/javascript/api/${clientPackageName}${apiRefUrlQueryParameter}`
      : undefined,
    dependencyDescription: dependencyInfo?.description,
    dependencyLink: dependencyInfo?.link,
    hasMultiClients: multiClient && batch && batch.length > 1,
    azureArm: Boolean(model.options.azureArm)
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

function getClientName(model: RLCModel) {
  const clientName = model.libraryName;
  return clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;
}
