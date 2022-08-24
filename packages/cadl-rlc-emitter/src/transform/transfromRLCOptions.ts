import { RLCOptions } from "@azure-tools/rlc-codegen";
import { getServiceNamespace, Program } from "@cadl-lang/compiler";
import { getAuthentication, getServers } from "@cadl-lang/rest/http";
import { readFileSync } from "fs";
import { join } from "path";

export function transformRLCOptions(program: Program): RLCOptions {
  const config: RLCOptions = JSON.parse(
    readFileSync(
      join(
        program.compilerOptions.outputPath ?? "",
        "../spec",
        "typescript.json"
      )
    ).toString()
  );
  const serviceNs = getServiceNamespace(program);
  if (serviceNs) {
    const host = getServers(program, serviceNs);
    if(host?.[0]?.url) {
      config.endpoint = host[0].url;
    }
  }
  const securityInfo = processAuth(program);
  config.addCredentials = config.addCredentials !== false? securityInfo.addCredentials: false;
  config.credentialScopes = securityInfo.credentialScopes;
  config.credentialKeyHeaderName = securityInfo.credentialKeyHeaderName;
  return config;
}

function processAuth(program: Program) {
  const serviceNs = getServiceNamespace(program);
  if (!serviceNs) {
    return undefined;
  }
  const authorization = getAuthentication(program, serviceNs);
  if (!authorization || !authorization.options) {
    return undefined;
  }
  const securityInfo: any = {
    addCredentials: false,
    credentialKeyHeaderName: undefined,
    credentialScopes: []
  };
  for(const option of authorization.options) {
    for(const auth of option.schemes) {
      switch (auth.type) {
        case "http":
          break;
        case "apiKey":
          if (auth.in === "cookie") {
            return undefined;
          }
          securityInfo.addCredentials = true;
          securityInfo.credentialKeyHeaderName = auth.name;
          break;
        case "oauth2":
          const flow = auth.flows[0];
          if (flow === undefined) {
            return undefined;
          }
          securityInfo.addCredentials = true;
          securityInfo.credentialScopes.push(...flow.scopes);
          break;
        default:
          break;
      }
    }
  }
  return securityInfo;
}