import { SourceFile } from "ts-morph";
import { Parameter } from "../modularCodeModel.js";

/**
 * This function adds an import to the soruce file to import the right credential
 */
export function importCredential(
  credential: Parameter,
  clientSourceFile: SourceFile
): void {
  switch (credential.type.type) {
    case "Key":
      clientSourceFile.addImportDeclaration({
        moduleSpecifier: "@azure/core-auth",
        namedImports: ["AzureKeyCredential"]
      });
      return;
    case "OAuth2":
      clientSourceFile.addImportDeclaration({
        moduleSpecifier: "@azure/core-auth",
        namedImports: ["TokenCredential"]
      });
      return;
    default:
      throw new Error(
        `Credential of type ${credential.type.type} is not yet supported`
      );
  }
}
