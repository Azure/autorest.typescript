import { SdkCredentialType } from "@azure-tools/typespec-client-generator-core";
import { resolveReference } from "../../framework/reference.js";
import { useDependencies } from "../../framework/hooks/useDependencies.js";

export function getCredentialExpression(type: SdkCredentialType): string {
  const dependencies = useDependencies();
  switch (type.scheme.type) {
    case "apiKey":
    case "http":
      return resolveReference(dependencies.KeyCredential);
    case "oauth2":
    case "openIdConnect":
      return resolveReference(dependencies.TokenCredential);
    default:
      // TODO: Add diagnostics about unknown credential type
      return "any";
  }
}
