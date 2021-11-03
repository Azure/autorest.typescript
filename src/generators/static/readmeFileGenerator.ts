// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import * as hbs from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { ClientDetails } from "../../models/clientDetails";
import { getAutorestOptions } from "../../autorestSession";
import { PackageDetails } from "../../models/packageDetails";

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
  /** whether the client accepts standard credentials */
  addCredentials?: boolean;
  /** The link to the identity package in the repository */
  identityPackageURL?: string;
  /** Indicates if the package is a test/releasable package. */
  isReleasablePackage?: boolean;
  /** indicate if the package is management plane SDK */
  azureArm?: boolean;
}

/**
 * Returns meta data information about the service, the package, and the client.
 * @param clientDetails - the client details
 * @param packageDetails - the package details
 * @returns inferred metadata about the service, the package, and the client
 */
function createMetadata(
  packageDetails: PackageDetails,
  clientDetails: ClientDetails,
  azureOutputDirectory?: string,
  addCredentials?: boolean,
  azureArm?: boolean,
  isTestPackage?: boolean
): Metadata {
  const azureHuh = packageDetails.scopeName === "azure";
  const repoURL = azureHuh
    ? "https://github.com/Azure/azure-sdk-for-js"
    : undefined;
  const relativePackageSourcePath = azureOutputDirectory;
  const packageSourceURL =
    relativePackageSourcePath &&
    repoURL &&
    `${repoURL}/tree/main/${relativePackageSourcePath}`;
  const names = relativePackageSourcePath?.split("/").slice(1);
  const packageParentDirectoryName = names?.[0];
  const packageDirectoryName = names?.[1];
  const clientClassName = clientDetails.name;
  const clientPackageName = packageDetails.name;
  const serviceTitle = clientDetails.info?.title ?? clientClassName;
  const simpleServiceName =
    /**
     * It is a required convention in Azure swaggers for their titles to end with
     * "Client".
     */
    serviceTitle.match(/(.*) Client/)?.[1] ??
    /** I noticed management-plane swaggers do not use spaces in their titles */
    serviceTitle.match(/(.*)Client/)?.[1] ??
    clientClassName.match(/(.*)Client/)?.[1] ??
    serviceTitle.match(/(.*) Service/)?.[1] ??
    "Service";
  const serviceName = azureHuh
    ? simpleServiceName.startsWith("Azure")
      ? simpleServiceName
      : `Azure ${simpleServiceName}`
    : simpleServiceName;
  const identityPackageURL =
    repoURL && `${repoURL}/tree/main/sdk/identity/identity`;

  var PackageNPMURLSufix: string = "";
  if (clientPackageName.includes("-beta")) {
    PackageNPMURLSufix = "?view=azure-node-preview";
  }

  return {
    serviceName: serviceName,
    clientPackageName: clientPackageName,
    clientClassName: clientClassName,
    azure: azureHuh,
    relativePackageSourcePath: relativePackageSourcePath,
    repoURL: repoURL,
    packageSourceURL: packageSourceURL,
    samplesURL: azureArm
      ? `https://github.com/Azure-Samples/azure-samples-js-management`
      : packageSourceURL && `${packageSourceURL}/samples`,
    impressionURL: azureHuh
      ? packageParentDirectoryName &&
        packageDirectoryName &&
        `https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2F${packageParentDirectoryName}%2F${packageDirectoryName}%2FREADME.png`
      : undefined,
    clientDescriptiveName: `${serviceName} client`,
    description: clientDetails.info?.description,
    apiRefURL: azureHuh
      ? `https://docs.microsoft.com/javascript/api/${clientPackageName}`
      : undefined,
    packageNPMURL: `https://www.npmjs.com/package/${clientPackageName}${PackageNPMURLSufix}`,
    contributingGuideURL: repoURL && `${repoURL}/blob/main/CONTRIBUTING.md`,
    projectName: azureHuh ? "Microsoft Azure SDK for JavaScript" : undefined,
    addCredentials,
    identityPackageURL,
    isReleasablePackage: !isTestPackage,
    azureArm: azureArm
  };
}

export function generateReadmeFile(
  clientDetails: ClientDetails,
  project: Project
) {
  const {
    packageDetails,
    azureOutputDirectory,
    generateMetadata,
    addCredentials,
    azureArm,
    isTestPackage
  } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const metadata = createMetadata(
    packageDetails,
    clientDetails,
    azureOutputDirectory,
    addCredentials,
    azureArm,
    isTestPackage
  );
  const file = fs.readFileSync(path.join(__dirname, "README.md.hbs"), {
    encoding: "utf-8"
  });
  const readmeFileContents = hbs.compile(file, { noEscape: true });
  project.createSourceFile("README.md", readmeFileContents(metadata), {
    overwrite: true
  });
}
