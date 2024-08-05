import { NoTarget, Program } from "@typespec/compiler";
import { Authentication, HttpAuth } from "@typespec/http";
import { reportDiagnostic } from "../lib.js";

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
          if (auth.in === "cookie" || auth.in === "query") {
            // just skip un-supported authentication and report a warning
            reportDiagnostic(program, {
              code: "un-supported-credential",
              format: {
                credentialType: `${auth.type} ${auth.in}`
              },
              target: NoTarget
            });
          } else {
            authList.push(auth);
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
