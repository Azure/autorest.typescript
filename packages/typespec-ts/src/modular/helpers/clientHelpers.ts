import {
  getImportSpecifier,
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
import { SdkContext } from "../../utils/interfaces.js";

export function getClientParameters(
  client: Client,
  dpgContext: SdkContext,
  isClassicalClient = false
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
      })
  ];
  // Add promoted client-level parameters for classical clients
  if (isClassicalClient && dpgContext.rlcOptions?.azureArm) {
    // added subscriptionId parameter for ARM clients
    params.push({
      name: "subscriptionId",
      type: `string`
    });
  }
  params.push(optionsParam);

  return params;
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
