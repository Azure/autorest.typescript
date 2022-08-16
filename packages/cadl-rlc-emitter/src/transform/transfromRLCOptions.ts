import { RLCOptions } from "@azure-tools/rlc-codegen";
import { getServiceNamespace, Program } from "@cadl-lang/compiler";
import { getServers } from "@cadl-lang/rest/http";
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
  return config;
}
