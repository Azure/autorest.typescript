import { RLCOptions } from "@azure-tools/rlc-codegen";
import { getServiceNamespace, Program } from "@cadl-lang/compiler";
import { getServers } from "@cadl-lang/rest/http";
import { readFileSync } from "fs";
import { join } from "path";

export function transformRLCOptions(program: Program): RLCOptions {
  let config: RLCOptions;
  try {
    config = JSON.parse(
      readFileSync(
        join(
          // TODO: finalize the possible position of config file
          program.compilerOptions.outputPath ?? "",
          "../spec",
          "typescript.json"
        )
      ).toString()
    );
  } catch (e) {
    //TODO: fallback to fixed config if there is no typescript.json provided
    config = returnFixedConfig();
  }

  const serviceNs = getServiceNamespace(program);
  if (serviceNs) {
    const host = getServers(program, serviceNs);
    if (host?.[0]?.url) {
      config.endpoint = host[0].url;
    }
  }
  return config;
}

function returnFixedConfig() {
  return {
    generateMetadata: true,
    includeShortcuts: false,
    addCredentials: false,
    packageDetails: {
      name: "@msinternal/example-name",
      scopeName: "msinternal",
      nameWithoutScope: "example",
      description: "Mock example Service",
      version: "1.0.0-beta.1"
    }
  };
}
