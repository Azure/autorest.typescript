import { EmitContext, Program } from "@typespec/compiler";
import { createTestHost } from "@typespec/compiler/testing";
import { TestHost } from "@typespec/compiler/testing";
import { RestTestLibrary } from "@typespec/rest/testing";
import { HttpTestLibrary } from "@typespec/http/testing";
import { VersioningTestLibrary } from "@typespec/versioning/testing";
import { AzureCoreTestLibrary } from "@azure-tools/typespec-azure-core/testing";
import { SdkTestLibrary } from "@azure-tools/typespec-client-generator-core/testing";
import { OpenAPITestLibrary } from "@typespec/openapi/testing";
import { AutorestTestLibrary } from "@azure-tools/typespec-autorest/testing";
import { AzureResourceManagerTestLibrary } from "@azure-tools/typespec-azure-resource-manager/testing";
import { SdkContext } from "../../src/utils/interfaces.js";
import { assert } from "chai";
import { format } from "prettier";
import { prettierTypeScriptOptions } from "../../src/lib.js";
import { createContextWithDefaultOptions } from "../../src/index.js";
import { provideContext } from "../../src/contextManager.js";
import { Project } from "ts-morph";
import { provideSdkTypes } from "../../src/framework/hooks/sdkTypes.js";

export async function createRLCEmitterTestHost() {
  return createTestHost({
    libraries: [
      HttpTestLibrary,
      RestTestLibrary,
      VersioningTestLibrary,
      AzureCoreTestLibrary,
      SdkTestLibrary,
      AzureResourceManagerTestLibrary,
      OpenAPITestLibrary,
      AutorestTestLibrary
    ]
  });
}

export async function rlcEmitterFor(
  code: string,
  needNamespaces: boolean = true,
  needAzureCore: boolean = false,
  needTCGC: boolean = false,
  withRawContent: boolean = false,
  withVersionedApiVersion: boolean = false,
  needArmTemplate: boolean = false
): Promise<TestHost> {
  const host: TestHost = await createRLCEmitterTestHost();
  const namespace = `
  #suppress "@azure-tools/typespec-azure-core/auth-required" "for test"
  ${withVersionedApiVersion ? "@versioned(Versions)" : ""}
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
${
  needArmTemplate
    ? 'import "@azure-tools/typespec-azure-resource-manager";'
    : ""
}

using TypeSpec.Rest; 
using TypeSpec.Http;
using TypeSpec.Versioning;
${needTCGC ? "using Azure.ClientGenerator.Core;" : ""}
${needAzureCore ? "using Azure.Core;" : ""}
${needNamespaces ? namespace : ""}
${needArmTemplate ? "using Azure.ResourceManager;" : ""}
${
  withVersionedApiVersion && needNamespaces
    ? 'enum Versions { v2022_05_15_preview: "2022-05-15-preview"}'
    : ""
}
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
  enableModelNamespace = false
): SdkContext {
  provideContext("rlcMetaTree", new Map());
  provideContext("modularMetaTree", new Map());
  provideContext("symbolMap", new Map());
  provideContext("outputProject", new Project());

  const context = createContextWithDefaultOptions({
    program
  } as EmitContext);

  const sdkContext = {
    ...context,
    program,
    rlcOptions: { flavor: "azure", enableModelNamespace },
    generationPathDetail: {},
    emitterName: "@azure-tools/typespec-ts",
    originalProgram: program
  } as SdkContext;

  provideContext("emitContext", {
    compilerContext: context as any,
    tcgcContext: sdkContext
  });

  provideSdkTypes(context.sdkPackage);

  return sdkContext;
}

export async function assertEqualContent(
  actual: string,
  expected: string,
  ignoreWeirdLine: boolean = false
) {
  assert.strictEqual(
    await format(
      ignoreWeirdLine
        ? actual.replace(/$\n^/g, "").replace(/\s+/g, " ")
        : actual,
      prettierTypeScriptOptions
    ),
    await format(
      ignoreWeirdLine
        ? expected.replace(/$\n^/g, "").replace(/\s+/g, " ")
        : expected,
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
