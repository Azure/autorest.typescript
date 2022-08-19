import { CodeModel } from "@autorest/codemodel";
import { RLCOptions } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../../autorestSession";
import { transformBaseUrl } from "../../transforms/urlTransforms";
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
    azureSdkForJs
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
  const {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName
  } = getSecurityInfoFromModel(model.security);
  options.addCredentials = addCredentials;
  options.credentialScopes = credentialScopes;
  options.credentialKeyHeaderName = credentialKeyHeaderName;
  const { endpoint, parameterName } = transformBaseUrl(model);
  options.endpoint = endpoint;
  options.endpointParameterName = parameterName;
  return options;
}
