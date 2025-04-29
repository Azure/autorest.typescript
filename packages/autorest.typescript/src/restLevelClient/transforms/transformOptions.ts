import { CodeModel } from "@autorest/codemodel";
import { RLCOptions } from "@azure-tools/rlc-common";
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
    productDocLink,
    azureArm,
    flavor
  } = getAutorestOptions();
  const options: RLCOptions = { moduleKind: "esm" };
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
  options.azureArm = azureArm;
  options.flavor = flavor;
  options.serviceInfo = {
    title: model.info.title ?? model.language.default.name,
    description: model.info.description
  };
  const { addCredentials, credentialScopes, credentialKeyHeaderName } =
    getSecurityInfoFromModel(model.security);
  options.addCredentials = addCredentials;
  options.credentialScopes = credentialScopes;
  options.credentialKeyHeaderName = credentialKeyHeaderName;
  options.sourceFrom = "Swagger";
  // Always enable operation group prefix for swagger
  options.enableOperationGroup = true;
  return options;
}
