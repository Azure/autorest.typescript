import { SourceFile } from "ts-morph";
import { Type } from "../modularCodeModel.js";

/**
 * This function adds an import to the soruce file to import the right credential
 */
export function importCredential(
  credential: Type,
  clientSourceFile: SourceFile
): void {
  switch (credential.type) {
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
    case "combined":
      if (!credential.types) {
        break;
      }

      for (const cred of credential.types) {
        if (cred.type === "Key" || cred.type === "OAuth2") {
          importCredential(cred, clientSourceFile);
        }
      }
      break;
    default:
      throw new Error(
        `Credential of type ${credential.type} is not yet supported`
      );
  }
}
