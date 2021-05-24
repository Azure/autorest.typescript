// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { PackageDetails } from "../../models/packageDetails";
import { ClientDetails } from "../../models/clientDetails";
import { getAutorestOptions } from "../../autorestSession";

export function generateReadmeFile(
  clientDetails: ClientDetails,
  project: Project
) {
  const { packageDetails, generateMetadata } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const readmeFileContents = `
## Azure ${clientDetails.name} SDK for JavaScript

This package contains an isomorphic SDK for ${clientDetails.name}.

### Currently supported environments

- Node.js version 8.x.x or higher
- Browser JavaScript

### How to Install

\`\`\`bash
npm install ${packageDetails.name}
\`\`\`

### How to use

#### Sample code

Refer the sample code in the [azure-sdk-for-js/samples](https://github.com/Azure/azure-sdk-for-js/tree/master/samples) folder.

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)


![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Fcdn%2Farm-cdn%2FREADME.png)
`;

  project.createSourceFile("README.md", readmeFileContents.trim(), {
    overwrite: true
  });
}
