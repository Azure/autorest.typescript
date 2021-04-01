// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { PackageDetails } from "../../models/packageDetails";
import { ClientDetails } from "../../models/clientDetails";

/**
 * Prefixes the input string with a white space.
 * @param str - string to prefix with a space
 * @returns a prefixed string with space if the input string is defined. Otherwise, returns an empty string.
 */
function addSpace(str?: string): string {
  return str === undefined ? "" : " " + str;
}

/**
 * Prefixes the input string with a newline if possible.
 * @param str - string to prefix with a new line
 * @param noWrite - whether to create the string
 * @returns a string prefixed with a new line if the input string is defined and the noWrite flag is false. Otherwise, returns an empty string.
 */
function addNewline(str?: string, noWrite: boolean = false): string {
  return !str || noWrite ? "" : "\n" + str;
}

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
  /** Whether the package being generated is for an Azure service */
  azure: boolean;
  /** The path to the package directory relative to the repository it lives in */
  relativePackageSourcePath?: string;
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
  /** The URL for impression */
  impressionURL?: string;
  /** The URL to the API reference */
  apiRefURL?: string;
  /** The URL to the package on npmjs.org */
  packageNPMURL?: string;
  /** The link to the contributing guide in the repository */
  contributingGuideURL?: string;
  /** The name of the project that lives in the repository */
  projectName?: string;
}

/**
 * Returns meta data information about the service, the package, and the client.
 * @param clientDetails - the client details
 * @param packageDetails - the package details
 * @returns inferred metadata about the service, the package, and the client
 */
function createMetadata(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails
): Metadata {
  const azureHuh = packageDetails.scopeName === "azure";
  const repoURL = azureHuh
    ? "https://github.com/Azure/azure-sdk-for-js"
    : undefined;
  const relativePackageSourcePath = clientDetails.options.azureOutputDirectory;
  const packageSourceURL =
    repoURL && `${repoURL}/tree/master/${relativePackageSourcePath}`;
  const names = relativePackageSourcePath?.split("/").slice(1);
  const packageParentDirectoryName = names?.[0];
  const packageDirectoryName = names?.[1];
  const clientClassName = clientDetails.name;
  const clientPackageName = packageDetails.name;
  const title = clientDetails.info?.title ?? clientClassName;
  const serviceName =
    /**
     * It is a required convention in Azure swaggers for their titles to end with
     * "Client".
     */
    title.match(/(.*) Client/)?.[1] ??
    /** I noticed management-plane swaggers do not use spaces in their titles */
    title.match(/(.*)Client/)?.[1] ??
    clientClassName.match(/(.*)Client/)?.[1] ??
    title.match(/(.*) Service/)?.[1] ??
    "Service";
  return {
    serviceName: serviceName,
    clientPackageName: clientPackageName,
    clientClassName: clientClassName,
    azure: azureHuh,
    relativePackageSourcePath: relativePackageSourcePath,
    repoURL: repoURL,
    packageSourceURL: packageSourceURL,
    samplesURL: packageSourceURL && `${packageSourceURL}/samples`,
    impressionURL: azureHuh
      ? `https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2F${packageParentDirectoryName}%2F${packageDirectoryName}%2FREADME.png`
      : undefined,
    clientDescriptiveName: azureHuh
      ? title.startsWith("Azure")
        ? title
        : `Azure ${title}`
      : title,
    description: clientDetails.info?.description,
    apiRefURL: azureHuh
      ? `https://docs.microsoft.com/javascript/api/${clientPackageName}`
      : undefined,
    packageNPMURL: `https://www.npmjs.com/package/${clientPackageName}`,
    contributingGuideURL: repoURL && `${repoURL}/blob/master/CONTRIBUTING.md`,
    projectName: azureHuh ? "Microsoft Azure SDK for JavaScript" : undefined
  };
}

/**
 * Creates the string for the "Getting Started" section in the README.md file.
 * @param metadata metadata about the service, package, and the client.
 * @returns the required getting started section in the readme file
 */
function writeGettingStarted(metadata: Metadata): string {
  const text = `## Getting started

### Currently supported environments

- Node.js version 8.x.x or higher
- Browser JavaScript
${addNewline(
  `### Prerequisites

- An [Azure subscription][azure_sub].`,
  !metadata.azure
)}

### Install the \`${metadata.clientPackageName}\` package

Install the${addSpace(
    metadata.clientDescriptiveName
  )} library for JavaScript with \`npm\`:

\`\`\`bash
npm install ${metadata.clientPackageName}
\`\`\`
${addNewline(
  `### Create and authenticate a \`${metadata.clientClassName}\`

To create a client object to access the ${
    metadata.serviceName
  } API, you will need the \`endpoint\` of your ${
    metadata.serviceName
  } resource and a \`credential\`. The${addSpace(
    metadata.clientDescriptiveName
  )} can use Azure Active Directory credentials to authenticate.

You can find the endpoint for your ${
    metadata.serviceName
  } resource in the [Azure Portal][azure_portal].

#### Using an Azure Active Directory Credential

Client API key authentication is used in most of the examples, but you can also authenticate with Azure Active Directory using the [Azure Identity library][azure_identity]. To use the [DefaultAzureCredential][defaultazurecredential] provider shown below, or other credential providers provided with the Azure SDK, please install the \`@azure/identity\` package:

\`\`\`bash
npm install @azure/identity
\`\`\`

You will also need to register a new AAD application and grant access to ${
    metadata.serviceName
  } by assigning the suitable role to your service principal (note: roles such as \`"Owner"\` will not grant the necessary permissions).

Set the values of the client ID, tenant ID, and client secret of the AAD application as environment variables: \`AZURE_CLIENT_ID\`, \`AZURE_TENANT_ID\`, \`AZURE_CLIENT_SECRET\`.

\`\`\`javascript
const { ${metadata.clientClassName} } = require("${
    metadata.clientPackageName
  }");
const { DefaultAzureCredential } = require("@azure/identity");

const client = new ${
    metadata.clientClassName
  }("<endpoint>", new DefaultAzureCredential());
\`\`\``,
  !metadata.azure
)}
`;
  return addNewline(text);
}

/**
 * Creates the string for the "Key Concepts" section in the README.md file.
 * @param metadata metadata about the service, package, and the client.
 * @returns the required key concepts section in the readme file
 */
function writeKeyConcepts(metadata: Metadata): string {
  return `## Key concepts

### ${metadata.clientClassName}

\`${metadata.clientClassName}\` is the primary interface for developers using the ${metadata.clientDescriptiveName} library. Explore the methods on this client object to understand the different features of the ${metadata.serviceName} service that you can access.`;
}

function writeTroubleshooting(metadata: Metadata): string {
  const text = `## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the \`AZURE_LOG_LEVEL\` environment variable to \`info\`. Alternatively, logging can be enabled at runtime by calling \`setLogLevel\` in the \`@azure/logger\`:

\`\`\`javascript
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
\`\`\`

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](${metadata.repoURL}/tree/master/sdk/core/logger).`;
  return addNewline(text, !metadata.azure);
}

/**
 * Creates the string for the "Next Steps" section in the README.md file.
 * @param metadata metadata about the service, package, and the client.
 * @returns the required next steps section in the readme file
 */
function writeNextSteps(metadata: Metadata): string {
  const text = `## Next steps

Please take a look at the [samples](${metadata.samplesURL}) directory for detailed examples on how to use this library.`;
  return addNewline(metadata.samplesURL && text);
}

/**
 * Creates the string for the "Contributing" section in the README.md file.
 * @param metadata metadata about the service, package, and the client.
 * @returns the required contributing section in the readme file
 */
function writeContributing(metadata: Metadata): string {
  const text = `## Contributing

If you'd like to contribute to this library, please read the [contributing guide](${metadata.contributingGuideURL}) to learn more about how to build and test the code.`;
  return addNewline(metadata.contributingGuideURL && text);
}

/**
 * Creates the string for the "Related Projects" section in the README.md file.
 * @param metadata metadata about the service, package, and the client.
 * @returns the required related projects section in the readme file
 */
function writeRelatedProjects(metadata: Metadata): string {
  const text = `## Related projects

- [${metadata.projectName}](${metadata.repoURL})`;
  return addNewline(metadata.projectName && text);
}

export function generateReadmeFile(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  const metadata = createMetadata(clientDetails, packageDetails);
  const identityPackageURL = `${metadata.repoURL}/tree/master/sdk/identity/identity`;
  const readmeFileContents = `
# ${metadata.clientDescriptiveName} library for JavaScript

This package contains an isomorphic SDK (runs both in node.js and in browsers) for ${
    metadata.clientDescriptiveName
  }.
${addNewline(metadata.description)}
${addNewline(
  metadata.packageSourceURL && `[Source code](${metadata.packageSourceURL}) |`
)}${addNewline(
    metadata.packageNPMURL && `[Package (NPM)](${metadata.packageNPMURL}) |`
  )}${addNewline(
    metadata.apiRefURL &&
      `[API reference documentation](${metadata.apiRefURL}) |`
  )}${addNewline(metadata.samplesURL && `[Samples](${metadata.samplesURL})`)}
${writeGettingStarted(metadata)}
${writeKeyConcepts(metadata)}
${writeTroubleshooting(metadata)}
${writeNextSteps(metadata)}
${writeContributing(metadata)}
${writeRelatedProjects(metadata)}
${addNewline(
  metadata.impressionURL && `![Impressions](${metadata.impressionURL})`
)}
${addNewline(
  `[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_identity]: ${identityPackageURL}
[defaultazurecredential]: ${identityPackageURL}#defaultazurecredential`,
  !metadata.azure
)}
`;

  project.createSourceFile("README.md", readmeFileContents.trim(), {
    overwrite: true
  });
}
