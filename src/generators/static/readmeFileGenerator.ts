// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import * as hbs from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { getAutorestOptions } from "../../autorestSession";
import { CodeModel, Info, Languages } from "@autorest/codemodel";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { normalizeName, NameType } from "../../utils/nameUtils";
import { getSecurityInfoFromModel } from "../../utils/schemaHelpers";

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
  /** The URL for the service document */
  serviceDocURL?: string;
  /** The dependency info for this service */
  dependencyDescription?: string;
  dependencyLink?: string;
  /** Indicates if the package is a multi-client */
  hasMultiClients?: boolean;
}

/**
 * Returns meta data information about the service, the package, and the client.
 * @param codeModel - include the client details
 * @returns inferred metadata about the service, the package, and the client
 */
function createMetadata(codeModel: CodeModel): Metadata {
  const {
    packageDetails,
    azureOutputDirectory,
    azureArm,
    isTestPackage,
    productDocLink,
    dependencyInfo,
    multiClient,
    batch
  } = getAutorestOptions();
  const { addCredentials } = getSecurityInfoFromModel(codeModel.security);

  const azureHuh =
    packageDetails?.scopeName === "azure" ||
    packageDetails?.scopeName === "azure-rest";
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

  const clientPackageName = packageDetails?.name;
  const { clientClassName, serviceTitle } = getClientAndServiceName(
    codeModel.language,
    codeModel.info
  );
  let simpleServiceName =
    batch && batch.length > 1
      ? normalizeName(packageDetails.nameWithoutScope, NameType.Class)
      : normalizeName(serviceTitle, NameType.Class);
  simpleServiceName =
    /**
     * It is a required convention in Azure swaggers for their titles to end with
     * "Client".
     */
    serviceTitle.match(/(.*) Client/)?.[1] ??
    /** I noticed management-plane swaggers do not use spaces in their titles */
    serviceTitle.match(/(.*)Client/)?.[1] ??
    clientClassName.match(/(.*)Client/)?.[1] ??
    serviceTitle.match(/(.*) Service/)?.[1] ??
    simpleServiceName;

  const serviceName = azureHuh
    ? simpleServiceName.startsWith("Azure")
      ? simpleServiceName
      : `Azure ${simpleServiceName}`
    : simpleServiceName;
  const identityPackageURL =
    repoURL && `${repoURL}/tree/main/sdk/identity/identity`;

  var apiRefUrlQueryParameter: string = "";
  if (packageDetails?.version.includes("beta")) {
    apiRefUrlQueryParameter = "?view=azure-node-preview";
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
    description: codeModel.info?.description,
    apiRefURL: azureHuh
      ? `https://docs.microsoft.com/javascript/api/${clientPackageName}${apiRefUrlQueryParameter}`
      : undefined,
    packageNPMURL: `https://www.npmjs.com/package/${clientPackageName}`,
    contributingGuideURL: repoURL && `${repoURL}/blob/main/CONTRIBUTING.md`,
    projectName: azureHuh ? "Microsoft Azure SDK for JavaScript" : undefined,
    addCredentials,
    identityPackageURL,
    isReleasablePackage: !isTestPackage,
    azureArm: azureArm,
    serviceDocURL: productDocLink,
    dependencyDescription: dependencyInfo?.description,
    dependencyLink: dependencyInfo?.link,
    hasMultiClients: multiClient && batch && batch.length > 1
  };
}

export function generateReadmeFile(codeModel: CodeModel, project: Project) {
  const { generateMetadata, restLevelClient } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const metadata = createMetadata(codeModel);
  const templateFile = !restLevelClient
    ? "hlcREADME.md.hbs"
    : "rlcREADME.md.hbs";
  const file = fs.readFileSync(path.join(__dirname, templateFile), {
    encoding: "utf-8"
  });
  const readmeFileContents = hbs.compile(file, { noEscape: true });
  project.createSourceFile("README.md", readmeFileContents(metadata), {
    overwrite: true
  });
}

function getClientAndServiceName(
  codeModelLanguage: Languages,
  codeModelInfo: Info
) {
  const { name: clientName } = getLanguageMetadata(codeModelLanguage);
  const className = normalizeName(
    clientName,
    NameType.Class,
    true /** shouldGuard */
  );
  const clientClassName = className;
  const serviceTitle = codeModelInfo?.title ?? clientClassName;
  return { clientClassName, serviceTitle };
}
