import { NoTarget, Program } from "@typespec/compiler";
import { Authentication, HttpAuth } from "@typespec/http";
import { reportDiagnostic } from "../lib.js";
import { SdkClientInitializationType } from "@azure-tools/typespec-client-generator-core";

/**
 * Get supported HTTP authentication schemes and filter out unsupported ones.
 * @param program used to report diagnostics
 * @param authorization authentication object
 * @returns supported HTTP authentication schemes
 */
export function getSupportedHttpAuth(
  program: Program,
  authorization: Authentication
): HttpAuth[] {
  const authList = [];
  for (const option of authorization.options) {
    for (const auth of option.schemes) {
      switch (auth.type) {
        case "apiKey":
          if (isSupportedKeyCredential(auth)) {
            authList.push(auth);
          } else {
            // just skip un-supported authentication and report a warning
            reportDiagnostic(program, {
              code: "un-supported-credential",
              format: {
                credentialType: `${auth.type} ${auth.in}`
              },
              target: NoTarget
            });
          }
          break;
        default:
          authList.push(auth);
          break;
      }
    }
  }

  return authList;
}

export function isSupportedKeyCredential(auth: HttpAuth): boolean {
  return (
    (auth.type === "apiKey" && auth.in === "header") || auth.type === "http"
  );
}

export function isSupportedTokenCredential(auth: HttpAuth): boolean {
  return auth.type === "oauth2";
}

export function hasKeyCredential(initialization: SdkClientInitializationType) {
  const authScheme = getAuthScheme(initialization);
  return authScheme.some((auth) => isSupportedKeyCredential(auth));
}

export function hasTokenCredential(
  initialization: SdkClientInitializationType
) {
  const authScheme = getAuthScheme(initialization);
  return authScheme.some((auth) => isSupportedTokenCredential(auth));
}

function getAuthScheme(
  initialization: SdkClientInitializationType
): HttpAuth[] {
  const credentialParams = initialization.parameters?.find(
    (param) => param.kind === "credential"
  );
  if (!credentialParams) {
    return [];
  }
  const kind = credentialParams.type.kind;
  const authScheme: HttpAuth[] = [];
  if (kind === "credential") {
    authScheme.push(credentialParams.type.scheme);
  } else if (kind === "union") {
    for (const param of credentialParams.type.variantTypes) {
      authScheme.push(param.scheme);
    }
  }
  return authScheme;
}
