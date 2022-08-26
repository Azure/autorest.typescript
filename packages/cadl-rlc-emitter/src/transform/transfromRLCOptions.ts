import { RLCOptions } from "@azure-tools/rlc-codegen";
import { getServiceNamespace, Program } from "@cadl-lang/compiler";
import { getAuthentication, getServers } from "@cadl-lang/rest/http";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export function transformRLCOptions(program: Program): RLCOptions {
  let configFile = join(
    program.compilerOptions.outputPath ?? "",
    "typescript.json"
  );
  if (!existsSync(configFile)) {
    configFile = join(
      program.compilerOptions.outputPath ?? "",
      "../spec",
      "typescript.json"
    );
  }
  const config: RLCOptions = JSON.parse(readFileSync(configFile).toString());
  const serviceNs = getServiceNamespace(program);
  if (serviceNs) {
    const host = getServers(program, serviceNs);
    if (host?.[0]?.url) {
      config.endpoint = host[0].url;
    }
  }
  const securityInfo = processAuth(program);
  config.addCredentials =
    !securityInfo && config.addCredentials === false
      ? false
      : securityInfo
      ? securityInfo.addCredentials
      : config.addCredentials;
  config.credentialScopes =
    securityInfo && securityInfo.credentialScopes
      ? securityInfo.credentialScopes
      : config.credentialScopes;
  config.credentialKeyHeaderName =
    securityInfo && securityInfo.credentialKeyHeaderName
      ? securityInfo.credentialKeyHeaderName
      : config.credentialKeyHeaderName;
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
  const securityInfo: RLCOptions = {};
  for (const option of authorization.options) {
    for (const auth of option.schemes) {
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
          if (!securityInfo.credentialScopes) {
            securityInfo.credentialScopes = [];
          }
          securityInfo.credentialScopes.push(...flow.scopes);
          break;
        default:
          break;
      }
    }
  }
  return securityInfo;
}
