import { Program } from "@cadl-lang/compiler";
import { createTestHost } from "@cadl-lang/compiler/testing";
import { TestHost } from "@cadl-lang/compiler/testing";
import { RestTestLibrary } from "@cadl-lang/rest/testing";
import { VersioningTestLibrary } from "@cadl-lang/versioning/testing";
import { AzureCoreTestLibrary } from "@azure-tools/cadl-azure-core/testing";
import { DpgContext } from "@azure-tools/cadl-dpg";
import { assert } from "chai";
import { format } from "prettier";
import { prettierTypeScriptOptions } from "../../../src/lib.js";

export async function createRLCEmitterTestHost() {
  return createTestHost({
    libraries: [RestTestLibrary, VersioningTestLibrary, AzureCoreTestLibrary]
  });
}

export async function rlcEmitterFor(
  code: string,
  needNamespaces: boolean = true,
  needAzureCore: boolean = false,
  ignoreClientApiVersion: boolean = false
): Promise<TestHost> {
  const host: TestHost = await createRLCEmitterTestHost();
  const namespace = `
  @service({
    title: "Azure TypeScript Testing",
    ${ignoreClientApiVersion? "": 'version: "2022-12-16-preview",'}
  })

  namespace Azure.TypeScript.Testing;
  `;
  host.addCadlFile(
    "main.cadl",
    `
  import "@cadl-lang/rest";
  import "@cadl-lang/versioning";
  ${needAzureCore ? 'import "@azure-tools/cadl-azure-core";' : ""} 

  using Cadl.Rest; 
  using Cadl.Http;
  using Cadl.Versioning;
  ${needAzureCore ? "using Azure.Core;" : ""}
  
  ${needNamespaces ? namespace : ""}

  ${code}
  `
  );
  await host.compile("./", {
    warningAsError: false
  });
  return host;
}

export function createDpgContextTestHelper(
  program: Program 
): DpgContext {
  const defaultOptions = {
    generateProtocolMethods: true,
    generateConvenienceMethods: true,
    emitters: [],
  };
  const resolvedOptions = { ...defaultOptions };
  program.emitters = resolvedOptions.emitters as any;
  return {
    program: program,
    generateProtocolMethods: resolvedOptions.generateProtocolMethods,
    generateConvenienceMethods: resolvedOptions.generateConvenienceMethods,
  } as DpgContext;
}

export function assertEqualContent(actual: string, expected: string) {
  assert.strictEqual(
    format(actual, prettierTypeScriptOptions),
    format(expected, prettierTypeScriptOptions)
  );
}
