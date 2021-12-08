import {
  AutorestExtensionHost,
  Session,
  startSession
} from "@autorest/extension-base";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import { extractAutorestOptions } from "./utils/autorestOptions";
import { PackageDetails } from "./models/packageDetails";
import { TracingInfo } from "./models/clientDetails";

export interface AutorestOptions {
  restLevelClient?: boolean;
  rlcShortcut?: boolean;
  azureArm?: boolean;
  addCredentials?: boolean;
  credentialKeyHeaderName?: string;
  credentialScopes?: string[];
  srcPath: string;
  outputPath?: string;
  title?: string;
  packageDetails: PackageDetails;
  licenseHeader: boolean;
  tracingInfo?: TracingInfo;
  generateMetadata?: boolean;
  useCoreV2?: boolean;
  hideClients?: boolean;
  ignoreNullableOnOptional?: boolean;
  allowInsecureConnection?: boolean;
  disablePagingAsyncIterators?: boolean;
  skipEnumValidation?: boolean;
  azureOutputDirectory?: string;
  headAsBoolean?: boolean;
  isTestPackage?: boolean;
  generateTest?: boolean;
}

let host: AutorestExtensionHost;
let session: Session<CodeModel>;
let options: AutorestOptions;

export async function initializeSession(autorestHost: AutorestExtensionHost) {
  if (!host) {
    host = autorestHost;
  }

  if (!session) {
    session = await startSession<CodeModel>(host, codeModelSchema);
  }

  if (!options) {
    options = await extractAutorestOptions();
  }
}

export function getSession(): Session<CodeModel> {
  if (!session) {
    throw new Error(
      "Session has not been initialized, make sure to call initializeSession early in the plugin startup"
    );
  }

  return session;
}

export function getHost(): AutorestExtensionHost {
  if (!host) {
    throw new Error(
      "Host has not been initialized, make sure to call initializeSession early in the plugin startup"
    );
  }

  return host;
}

export function getAutorestOptions(): AutorestOptions {
  if (!options) {
    throw new Error(
      "Options have not been initialized, make sure to call initializeSession early in the plugin startup"
    );
  }

  return options;
}
