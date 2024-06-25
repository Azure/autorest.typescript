import {
  getImportSpecifier,
  PackageDetails,
  PackageFlavor,
  Imports as RuntimeImports
} from "@azure-tools/rlc-common";
import {
  OptionalKind,
  ParameterDeclarationStructure,
  SourceFile
} from "ts-morph";
import { Client } from "../modularCodeModel.js";
import { getClientName } from "./namingHelpers.js";
import { getType } from "./typeHelpers.js";

export function getClientParameters(
  client: Client
): OptionalKind<ParameterDeclarationStructure>[] {
  const { parameters } = client;
  const name = getClientName(client);
  const optionsParam = {
    name: "options",
    type: `${name}ClientOptions`,
    initializer: "{}"
  };

  const params: OptionalKind<ParameterDeclarationStructure>[] = [
    ...parameters
      .filter(
        (p) =>
          p.optional === false &&
          p.type.type !== "constant" &&
          (p.clientDefaultValue === null || p.clientDefaultValue === undefined)
      )
      .map<OptionalKind<ParameterDeclarationStructure>>((p) => {
        const typeMetadata = getType(p.type, p.format);
        let typeName = typeMetadata.name;
        if (typeMetadata.nullable) {
          typeName = `${typeName} | null`;
        }
        return {
          name: p.clientName,
          type: typeName
        };
      }),
    optionsParam
  ];

  return params;
}

/**
 * Provides parameter values to be passed in to createClient and similar functions which provide defaults
 * for the user agent string (and possibly other defaults TBD).
 *
 * For example, given the input ["endpoint", "options"], this will be transformed to
 * ["endpoint", "{ userAgentOptions: { userAgentPrefix: options.userAgentPrefix ?? "<<defaults.userAgentPrefix>>" }, ...options } }].
 *
 * The outputs of this function can be used as parameters for createClient.
 */
export function provideClientParameterDefaults(
  paramNames: string[],
  defaults: {
    userAgentPrefix: string;
  }
): string[] {
  return paramNames.map((name) => {
    if (name === "options") {
      return provideClientOptionsParameterDefaults("options", defaults);
    } else {
      return name;
    }
  });
}

/**
 * Provide defaults specifically for the ClientOptions parameter
 */
function provideClientOptionsParameterDefaults(
  paramName: string,
  defaults: {
    userAgentPrefix: string;
  }
): string {
  return `{
    userAgentOptions: {
      userAgentPrefix: ${paramName}?.userAgentOptions?.userAgentPrefix ?? "${defaults.userAgentPrefix}",
    },
    ...${paramName},
  }`;
}

/**
 * Gets the user agent prefix based on the Azure convention
 */
export function getUserAgentPrefix(
  packageDetails: PackageDetails | undefined,
  flavor: PackageFlavor | undefined,
  layer: string
) {
  const azurePrefix = flavor === "azure" ? "azsdk-js-" : "";

  return `${azurePrefix}${
    packageDetails?.nameWithoutScope ?? "unknown"
  }-${layer}/${packageDetails?.version ?? "unknown"}`;
}

export function importCredential(
  runtimeImports: RuntimeImports,
  clientSourceFile: SourceFile
): void {
  clientSourceFile.addImportDeclaration({
    moduleSpecifier: getImportSpecifier("coreAuth", runtimeImports),
    namedImports: ["TokenCredential", "KeyCredential"]
  });
}
