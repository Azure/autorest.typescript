import { CodeModel } from "@autorest/codemodel";
import { RLCOptions } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../../autorestSession";
import { getSecurityInfoFromModel } from "../../utils/schemaHelpers";

export function transformOptions(model: CodeModel): RLCOptions {
  const {
    rlcShortcut,
    multiClient,
    batch,
    packageDetails,
    generateMetadata,
    generateSample,
    generateTest,
    azureOutputDirectory,
    azureSdkForJs,
    dependencyInfo,
    productDocLink
  } = getAutorestOptions();
  const options: RLCOptions = {};
  options.includeShortcuts = rlcShortcut;
  options.multiClient = multiClient;
  options.batch = batch;
  options.packageDetails = packageDetails;
  options.generateMetadata = generateMetadata;
  options.generateSample = generateSample;
  options.generateTest = generateTest;
  options.azureOutputDirectory = azureOutputDirectory;
  options.azureSdkForJs = azureSdkForJs;
  options.dependencyInfo = dependencyInfo;
  options.productDocLink = productDocLink;
  options.serviceTile = model.info.title ?? model.language.default.name;
  const {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName
  } = getSecurityInfoFromModel(model.security);
  options.addCredentials = addCredentials;
  options.credentialScopes = credentialScopes;
  options.credentialKeyHeaderName = credentialKeyHeaderName;
  return options;
}
