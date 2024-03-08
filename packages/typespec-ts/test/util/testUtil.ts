import { Program } from "@typespec/compiler";
import { createTestHost } from "@typespec/compiler/testing";
import { TestHost } from "@typespec/compiler/testing";
import { RestTestLibrary } from "@typespec/rest/testing";
import { HttpTestLibrary } from "@typespec/http/testing";
import { VersioningTestLibrary } from "@typespec/versioning/testing";
import { AzureCoreTestLibrary } from "@azure-tools/typespec-azure-core/testing";
import { SdkTestLibrary } from "@azure-tools/typespec-client-generator-core/testing";
import { SdkContext } from "../../src/utils/interfaces.js";
import { assert } from "chai";
import { format } from "prettier";
import { prettierTypeScriptOptions } from "../../src/lib.js";
import { PackageFlavor } from "@azure-tools/rlc-common";

export async function createRLCEmitterTestHost() {
  return createTestHost({
    libraries: [
      HttpTestLibrary,
      RestTestLibrary,
      VersioningTestLibrary,
      AzureCoreTestLibrary,
      SdkTestLibrary
    ]
  });
}

export async function rlcEmitterFor(
  code: string,
  needNamespaces: boolean = true,
  needAzureCore: boolean = false,
  needTCGC: boolean = false,
  withRawContent: boolean = false
): Promise<TestHost> {
  const host: TestHost = await createRLCEmitterTestHost();
  const namespace = `
  #suppress "@azure-tools/typespec-azure-core/auth-required" "for test"
  @service({
    title: "Azure TypeScript Testing"
  })

  ${needAzureCore ? "@useDependency(Azure.Core.Versions.v1_0_Preview_2)" : ""} 
  namespace Azure.TypeScript.Testing;
  `;
  const content = withRawContent
    ? code
    : `
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
${needTCGC ? 'import "@azure-tools/typespec-client-generator-core";' : ""} 
${needAzureCore ? 'import "@azure-tools/typespec-azure-core";' : ""} 

using TypeSpec.Rest; 
using TypeSpec.Http;
using TypeSpec.Versioning;
${needTCGC ? "using Azure.ClientGenerator.Core;" : ""}
${needAzureCore ? "using Azure.Core;" : ""}

${needNamespaces ? namespace : ""}

${code}
`;
  host.addTypeSpecFile("main.tsp", content);
  await host.compile("./", {
    warningAsError: false
  });
  return host;
}

export function createDpgContextTestHelper(
  program: Program,
  flavor?: PackageFlavor
): SdkContext {
  const defaultOptions = {
    generateProtocolMethods: true,
    generateConvenienceMethods: true,
    emitters: [
      {
        main: "@azure-tools/typespec-ts",
        metadata: { name: "@azure-tools/typespec-ts" }
      }
    ]
  };
  const resolvedOptions = { ...defaultOptions };
  program.emitters = resolvedOptions.emitters as any;
  const options = { flavor: flavor };
  return {
    program: program,
    generateProtocolMethods: resolvedOptions.generateProtocolMethods,
    generateConvenienceMethods: resolvedOptions.generateConvenienceMethods,
    rlcOptions: options,
    generationPathDetail: {},
    emitterName: "@azure-tools/typespec-ts",
    emitContext: { options } as any
  } as SdkContext;
}

export async function assertEqualContent(
  actual: string,
  expected: string,
  ignoreWeirdLine: boolean = false
) {
  assert.strictEqual(
    await format(
      ignoreWeirdLine ? actual.replace(/\n/g, "") : actual,
      prettierTypeScriptOptions
    ),
    await format(
      ignoreWeirdLine ? expected.replace(/\n/g, "") : expected,
      prettierTypeScriptOptions
    )
  );
}

export type VerifyPropertyConfig = {
  additionalTypeSpecDefinition?: string;
  outputType?: string;
  additionalInputContent?: string;
  additionalOutputContent?: string;
};
