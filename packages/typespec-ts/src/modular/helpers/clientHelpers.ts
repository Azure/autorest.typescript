import {
  OptionalKind,
  ParameterDeclarationStructure,
  SourceFile
} from "ts-morph";
import { Client } from "../modularCodeModel.js";
import { getType } from "./typeHelpers.js";
import { getClientName } from "./namingHelpers.js";
import { Imports as RuntimeImports } from "@azure-tools/rlc-common";
import { getImportSpecifier } from "@azure-tools/rlc-common";

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

export function importCredential(
  runtimeImports: RuntimeImports,
  clientSourceFile: SourceFile
): void {
  clientSourceFile.addImportDeclaration({
    moduleSpecifier: getImportSpecifier("coreAuth", runtimeImports),
    namedImports: ["TokenCredential", "KeyCredential"]
  });
}
