import { SdkCredentialType } from "@azure-tools/typespec-client-generator-core";

export function emitCredential(type: SdkCredentialType): string {
  // TODO: How to handle this for 3p?
  // TODO: Handle "external" dependencies
  switch (type.scheme.type) {
    case "apiKey":
    case "http":
      return `KeyCredential`;
    case "oauth2":
    case "openIdConnect":
      return "TokenCredential";
    default:
      // TODO: Add diagnostics about unknown credential type
      return "any";
  }
}
