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
import { provideBinder } from "../../src/framework/hooks/binder.js";
import { loadStaticHelpers } from "../../src/framework/load-static-helpers.js";
import path from "path";
import { getDirname } from "../../src/utils/dirname.js";
import {
  MultipartHelpers,
  PagingHelpers,
  PollingHelpers,
  SerializationHelpers,
  UrlTemplateHelpers
} from "../../src/modular/static-helpers-metadata.js";
import {
  AzureCoreDependencies,
  AzureIdentityDependencies,
  AzurePollingDependencies
} from "../../src/modular/external-dependencies.js";

export interface ExampleJson {
  filename: string;
  rawContent: string;
}

const { __dirname } = getDirname(import.meta.url);

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

export interface RLCEmitterOptions {
  needNamespaces?: boolean;
  needAzureCore?: boolean;
  needTCGC?: boolean;
  withRawContent?: boolean;
  withVersionedApiVersion?: boolean;
  needArmTemplate?: boolean;
  exampleJson?: Record<string, any>;
}

export async function rlcEmitterFor(
  code: string,
  {
    needNamespaces = true,
    needAzureCore = false,
    needTCGC = false,
    withRawContent = false,
    withVersionedApiVersion = false,
    needArmTemplate = false,
    exampleJson = {}
  }: RLCEmitterOptions = {}
): Promise<TestHost> {
  const host: TestHost = await createRLCEmitterTestHost();
  const namespace = `
  #suppress "@azure-tools/typespec-azure-core/auth-required" "for test"
  ${withVersionedApiVersion ? "@versioned(Versions)" : ""}
  @service(#{
    title: "Azure TypeScript Testing"
  })

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

using Rest; 
using Http;
using Versioning;
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
  for (const example in exampleJson) {
    host.addTypeSpecFile(`./examples/${example}.json`, exampleJson[example]);
  }
  await host.compile("./", {
    warningAsError: false
  });
  return host;
}

export async function compileTypeSpecFor(
  code: string,
  examples: ExampleJson[] = []
) {
  let prefix = "";
  if (!code.includes("import")) {
    prefix = prefix + importStatement();
    if (!code.includes("@service")) {
      prefix = prefix + serviceStatement();
    }
  }
  const host: TestHost = await createRLCEmitterTestHost();
  host.addTypeSpecFile("main.tsp", `${prefix}${code}`);
  for (const example of examples) {
    host.addTypeSpecFile(
      `./examples/2021-10-01-preview/${example.filename}.json`,
      example.rawContent
    );
  }
  await host.compile("./", {
    warningAsError: false
  });
  return host;
}

function importStatement() {
  return `
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-client-generator-core";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using Rest; 
using Http;
using Versioning;
using Azure.ClientGenerator.Core;
using Azure.Core;
using Azure.ResourceManager;`;
}

function serviceStatement() {
  return `
  @versioned(Azure.TypeScript.Testing.Versions)
  @service(#{
    title: "Azure TypeScript Testing",
  })

  namespace Azure.TypeScript.Testing;
  enum Versions {
    
    v2021_10_01_preview: "2021-10-01-preview",
  }
  
  `;
}

export async function createDpgContextTestHelper(
  program: Program,
  enableModelNamespace = false,
  configs: Record<string, unknown> = {}
): Promise<SdkContext> {
  const outputProject = new Project({ useInMemoryFileSystem: true });
  provideContext("rlcMetaTree", new Map());
  provideContext("symbolMap", new Map());
  provideContext("outputProject", outputProject);

  const context = await createContextWithDefaultOptions({
    program,
    options: configs as any
  } as EmitContext);

  // Determine the flavor - if "flavor" key exists in configs, use its value (even if undefined)
  // otherwise default to "azure"
  const flavor = "flavor" in configs ? configs["flavor"] : "azure";

  // Calculate ignoreNullableOnOptional based on flavor if not explicitly provided
  const ignoreNullableOnOptional =
    "ignoreNullableOnOptional" in configs
      ? Boolean(configs["ignoreNullableOnOptional"])
      : flavor === "azure";

  const sdkContext = {
    ...context,
    program,
    rlcOptions: {
      flavor: flavor as any,
      enableModelNamespace,
      ignoreNullableOnOptional,
      ...configs
    },
    emitterName: "@azure-tools/typespec-ts",
    originalProgram: program
  } as SdkContext;

  provideContext("emitContext", {
    compilerContext: context as any,
    tcgcContext: sdkContext
  });

  await provideBinderWithAzureDependencies(outputProject);
  provideSdkTypes(context);

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

export async function provideBinderWithAzureDependencies(project: Project) {
  const helpersDirectory = path.resolve(
    __dirname,
    "../../static/static-helpers"
  );

  const extraDependencies = {
    ...AzurePollingDependencies,
    ...AzureCoreDependencies,
    ...AzureIdentityDependencies
  };

  const staticHelpers = {
    ...SerializationHelpers,
    ...PagingHelpers,
    ...PollingHelpers,
    ...UrlTemplateHelpers,
    ...MultipartHelpers
  };

  const staticHelperMap = await loadStaticHelpers(project, staticHelpers, {
    helpersAssetDirectory: helpersDirectory
  });

  const binder = provideBinder(project, {
    staticHelpers: staticHelperMap,
    dependencies: extraDependencies
  });

  return binder;
}
