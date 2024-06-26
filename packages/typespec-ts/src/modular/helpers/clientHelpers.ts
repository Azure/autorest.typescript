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

export function getUserAgentStatements(
  sdkUserAgentPrefix: string,
  paramNames: string[]
): { userAgentStatements: string; updatedParamNames: string[] } {
  const userAgentStatements = `
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = ${
      "prefixFromOptions ? `${prefixFromOptions} " +
      sdkUserAgentPrefix +
      "` : " +
      `"${sdkUserAgentPrefix}"`
    };
  `;

  // Update param names to spread over options
  const updatedParamNames = paramNames.map((x) =>
    x === "options"
      ? "{ ...options, userAgentOptions: { userAgentPrefix } }"
      : x
  );

  return { userAgentStatements, updatedParamNames };
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
