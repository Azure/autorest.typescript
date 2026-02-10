import {
  OperationParameter,
  RLCOptions,
  Schema,
  buildClient,
  buildClientDefinitions,
  buildPaginateHelper,
  buildParameterTypes,
  buildResponseTypes,
  buildRuntimeImports,
  buildSchemaTypes,
  initInternalImports
} from "@azure-tools/rlc-common";
import { emitTypes } from "../../src/modular/emitModels.js";
import { buildApiOptions } from "../../src/modular/emitModelsOptions.js";
import {
  compileTypeSpecFor,
  createDpgContextTestHelper,
  ExampleJson,
  rlcEmitterFor
} from "./testUtil.js";
import { transformUrlInfo } from "../../src/transform/transform.js";

import { buildClassicalClient } from "../../src/modular/buildClassicalClient.js";
import { buildClientContext } from "../../src/modular/buildClientContext.js";
import { buildOperationFiles } from "../../src/modular/buildOperations.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import { expectDiagnosticEmpty } from "@typespec/compiler/testing";
import { getCredentialInfo } from "../../src/transform/transfromRLCOptions.js";
import {
  getClientHierarchyMap,
  getRLCClients
} from "../../src/utils/clientUtils.js";
import { transformHelperFunctionDetails } from "../../src/transform/transformHelperFunctionDetails.js";
import { transformPaths } from "../../src/transform/transformPaths.js";
import { transformSchemas } from "../../src/transform/transformSchemas.js";
import { transformToParameterTypes } from "../../src/transform/transformParameters.js";
import { transformToResponseTypes } from "../../src/transform/transformResponses.js";
import { useBinder } from "../../src/framework/hooks/binder.js";
import { emitSamples } from "../../src/modular/emitSamples.js";
import { renameClientName } from "../../src/index.js";
import { buildRootIndex } from "../../src/modular/buildRootIndex.js";
import { useContext } from "../../src/contextManager.js";
import { buildSubpathIndexFile } from "../../src/modular/buildSubpathIndex.js";

export async function emitPageHelperFromTypeSpec(
  tspContent: string,
  {
    needAzureCore = false,
    needTCGC = false
  }: {
    needAzureCore?: boolean;
    needTCGC?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore,
    needTCGC
  });
  const program = context.program;
  const dpgContext = await createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  let helperDetail;
  if (clients && clients[0]) {
    helperDetail = transformHelperFunctionDetails(
      clients[0],
      dpgContext,
      "azure"
    );
  }
  expectDiagnosticEmpty(program.diagnostics);
  return buildPaginateHelper({
    helperDetails: helperDetail,
    srcPath: "",
    paths: {},
    libraryName: "test",
    schemas: [],
    importInfo: {
      internalImports: initInternalImports(),
      runtimeImports: buildRuntimeImports("azure")
    }
  });
}

export async function emitSchemasFromTypeSpec(
  tspContent: string,
  {
    needAzureCore = false,
    needTCGC = false
  }: {
    needAzureCore?: boolean;
    needTCGC?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore,
    needTCGC
  });
  const program = context.program;
  const dpgContext = await createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  let rlcSchemas: Schema[] = [];
  if (clients && clients[0]) {
    rlcSchemas = transformSchemas(clients[0], dpgContext);
  }
  expectDiagnosticEmpty(program.diagnostics);
  return rlcSchemas;
}

export async function emitModelsFromTypeSpec(
  tspContent: string,
  {
    needAzureCore = false,
    needTCGC = false,
    withRawContent = false,
    mustEmptyDiagnostic = true,
    enableModelNamespace = false
  }: {
    needAzureCore?: boolean;
    needTCGC?: boolean;
    withRawContent?: boolean;
    mustEmptyDiagnostic?: boolean;
    enableModelNamespace?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore,
    needTCGC,
    withRawContent
  });
  const dpgContext = await createDpgContextTestHelper(
    context.program,
    enableModelNamespace
  );
  const clients = getRLCClients(dpgContext);
  let rlcSchemas: Schema[] = [];
  if (clients && clients[0]) {
    rlcSchemas = transformSchemas(clients[0], dpgContext);
  }
  if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
    throw dpgContext.program.diagnostics;
  }
  return buildSchemaTypes({
    schemas: rlcSchemas,
    srcPath: "",
    paths: {},
    libraryName: "test",
    importInfo: {
      internalImports: initInternalImports(),
      runtimeImports: buildRuntimeImports("azure")
    }
  });
}

export async function emitParameterFromTypeSpec(
  tspContent: string,
  {
    needAzureCore = false,
    needTCGC = false,
    withRawContent = false,
    mustEmptyDiagnostic = true,
    withVersionedApiVersion = false
  }: {
    needAzureCore?: boolean;
    needTCGC?: boolean;
    withRawContent?: boolean;
    mustEmptyDiagnostic?: boolean;
    withVersionedApiVersion?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore,
    needTCGC,
    withRawContent,
    withVersionedApiVersion
  });
  const dpgContext = await createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  const importSet = initInternalImports();
  let parameters;
  let helperDetails;
  if (clients && clients[0]) {
    const urlInfo = transformUrlInfo(clients[0], dpgContext, importSet);
    parameters = transformToParameterTypes(
      clients[0],
      dpgContext,
      importSet,
      urlInfo?.apiVersionInfo
    );
    helperDetails = transformHelperFunctionDetails(clients[0], dpgContext);
  }
  if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
    throw dpgContext.program.diagnostics;
  }
  return buildParameterTypes({
    srcPath: "",
    paths: {},
    libraryName: "test",
    schemas: [],
    parameters,
    helperDetails,
    importInfo: {
      internalImports: importSet,
      runtimeImports: buildRuntimeImports("azure")
    },
    options: {
      sourceFrom: "TypeSpec"
    }
  });
}

export async function emitClientDefinitionFromTypeSpec(
  tspContent: string,
  {
    needAzureCore = false
  }: {
    needAzureCore?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore
  });
  const dpgContext = await createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  const internalImports = initInternalImports();
  let paths = {};
  let parameters: OperationParameter[] = [];
  if (clients && clients[0]) {
    paths = transformPaths(clients[0], dpgContext, internalImports);
    parameters = transformToParameterTypes(
      clients[0],
      dpgContext,
      internalImports
    );
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return buildClientDefinitions({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths,
    parameters,
    importInfo: {
      internalImports,
      runtimeImports: buildRuntimeImports("azure")
    }
  });
}

export async function emitClientFactoryFromTypeSpec(
  tspContent: string,
  {
    needAzureCore = false,
    mustEmptyDiagnostic = true,
    withRawContent = false,
    needNamespaces = false,
    needTCGC = false
  }: {
    needAzureCore?: boolean;
    mustEmptyDiagnostic?: boolean;
    withRawContent?: boolean;
    needNamespaces?: boolean;
    needTCGC?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces,
    needAzureCore,
    needTCGC,
    withRawContent
  });
  const program = context.program;
  const dpgContext = await createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  const importSet = initInternalImports();

  const credentialInfo = getCredentialInfo(program, {});

  let urlInfo;
  if (clients && clients[0]) {
    urlInfo = transformUrlInfo(clients[0], dpgContext, importSet);
  }
  if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
    throw dpgContext.program.diagnostics;
  }

  return buildClient({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths: {},
    urlInfo,
    apiVersionInfo: urlInfo?.apiVersionInfo,
    options: {
      packageDetails: {
        name: "test",
        version: "1.0.0-beta.1"
      },
      flavor: "azure",
      ...credentialInfo
    },
    importInfo: {
      internalImports: importSet,
      runtimeImports: buildRuntimeImports("azure")
    }
  });
}

export async function emitResponsesFromTypeSpec(
  tspContent: string,
  {
    needAzureCore = false,
    withRawContent = false,
    needTCGC = false,
    withVersionedApiVersion = false,
    needArmTemplate = false
  }: {
    needAzureCore?: boolean;
    withRawContent?: boolean;
    needTCGC?: boolean;
    withVersionedApiVersion?: boolean;
    needArmTemplate?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore,
    needTCGC,
    withRawContent,
    withVersionedApiVersion,
    needArmTemplate
  });
  const dpgContext = await createDpgContextTestHelper(context.program);
  const importSet = initInternalImports();
  const clients = getRLCClients(dpgContext);
  let responses;
  if (clients && clients[0]) {
    responses = transformToResponseTypes(clients[0], dpgContext, importSet);
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return buildResponseTypes({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths: {},
    responses,
    importInfo: {
      internalImports: importSet,
      runtimeImports: buildRuntimeImports("azure")
    }
  });
}

export async function getRLCClientsFromTypeSpec(tspContent: string) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore: false,
    needTCGC: true,
    withRawContent: true
  });
  const dpgContext = await createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return clients;
}

export interface ModelConfigOptions extends RLCOptions {
  needOptions?: boolean;
  withRawContent?: boolean;
  needAzureCore?: boolean;
  needNamespaces?: boolean;
  mustEmptyDiagnostic?: boolean;
  withVersionedApiVersion?: boolean;
  [key: string]: any;
}

export async function emitModularModelsFromTypeSpec(
  tspContent: string,
  options: ModelConfigOptions = {}
) {
  const {
    needOptions = false,
    withRawContent = false,
    needAzureCore = false,
    mustEmptyDiagnostic = true,
    needTCGC = false,
    withVersionedApiVersion = false,
    needArmTemplate = false
  } = options;
  if (options["experimental-extensible-enums"] === undefined) {
    options["experimental-extensible-enums"] = false;
  }
  if (options["compatibility-mode"] === undefined) {
    options["compatibility-mode"] = false;
  }
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore,
    needTCGC,
    withRawContent,
    withVersionedApiVersion,
    needArmTemplate
  });
  const dpgContext = await createDpgContextTestHelper(
    context.program,
    false,
    options
  );
  const binder = useBinder();
  let modelFile = undefined;
  const includeResponseHeaders =
    options["include-headers-in-response"] === true;
  dpgContext.rlcOptions!.includeHeadersInResponse = includeResponseHeaders;
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.compatibilityMode = options["compatibility-mode"];
  dpgContext.rlcOptions!.experimentalExtensibleEnums =
    options["experimental-extensible-enums"];
  dpgContext.rlcOptions!.ignoreNullableOnOptional =
    options["ignore-nullable-on-optional"] ?? true;
  const modularEmitterOptions = transformModularEmitterOptions(dpgContext, "", {
    casing: "camel"
  });
  if (needOptions) {
    emitTypes(dpgContext, { sourceRoot: "" });
    const clientMap = Array.from(getClientHierarchyMap(dpgContext));
    modelFile = buildApiOptions(
      dpgContext,
      clientMap[0]!,
      modularEmitterOptions
    );
    binder.resolveAllReferences("/");
    if (modelFile.length > 0) {
      modelFile[0]!.fixUnusedIdentifiers();
    }
  } else {
    modelFile = emitTypes(dpgContext, { sourceRoot: "" });
    binder.resolveAllReferences("/");
  }
  if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
    throw dpgContext.program.diagnostics;
  }
  if (Array.isArray(modelFile)) {
    return modelFile[0];
  }
  return modelFile;
}

export async function emitRootIndexFromTypeSpec(
  tspContent: string,
  options: ModelConfigOptions = {}
) {
  const {
    withRawContent = false,
    needAzureCore = false,
    mustEmptyDiagnostic = true,
    needTCGC = false
  } = options;
  if (options["experimental-extensible-enums"] === undefined) {
    options["experimental-extensible-enums"] = false;
  }
  if (options["compatibility-mode"] === undefined) {
    options["compatibility-mode"] = false;
  }
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore,
    needTCGC,
    withRawContent
  });
  const dpgContext = await createDpgContextTestHelper(
    context.program,
    false,
    options
  );
  const binder = useBinder();
  const project = useContext("outputProject");
  const includeResponseHeaders =
    options["include-headers-in-response"] === true;
  dpgContext.rlcOptions!.includeHeadersInResponse = includeResponseHeaders;
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.compatibilityMode = options["compatibility-mode"];
  dpgContext.rlcOptions!.experimentalExtensibleEnums =
    options["experimental-extensible-enums"];
  // need to specify the root path for this case
  const modularEmitterOptions = transformModularEmitterOptions(
    dpgContext,
    "/any/path",
    {
      casing: "camel"
    }
  );
  const rootIndexFile = project.createSourceFile(
    `${modularEmitterOptions.modularOptions.sourceRoot}/index.ts`,
    "",
    {
      overwrite: true
    }
  );
  emitTypes(dpgContext, modularEmitterOptions.modularOptions);
  buildSubpathIndexFile(modularEmitterOptions, "models", undefined, {
    recursive: true
  });
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    const clientMap = Array.from(getClientHierarchyMap(dpgContext));
    buildRootIndex(
      dpgContext,
      modularEmitterOptions,
      rootIndexFile,
      clientMap[0]!
    );

    if (
      options.mustEmptyDiagnostic &&
      dpgContext.program.diagnostics.length > 0
    ) {
      throw dpgContext.program.diagnostics;
    }
    binder.resolveAllReferences("/");
  }
  if (dpgContext.sdkPackage.clients.length === 0) {
    buildRootIndex(dpgContext, modularEmitterOptions, rootIndexFile);
  }
  if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
    throw dpgContext.program.diagnostics;
  }
  return rootIndexFile;
}

export async function emitModularOperationsFromTypeSpec(
  tspContent: string,
  options: ModelConfigOptions = {}
) {
  if (options.mustEmptyDiagnostic === undefined) {
    options.mustEmptyDiagnostic = true;
  }
  if (options.needNamespaces === undefined) {
    options.needNamespaces = true;
  }
  if (options["experimental-extensible-enums"] === undefined) {
    options["experimental-extensible-enums"] = false;
  }
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: options.needNamespaces,
    needAzureCore: options.needAzureCore ? true : false,
    needTCGC: false,
    withRawContent: options.withRawContent ? true : false,
    withVersionedApiVersion: options.withVersionedApiVersion ? true : false
  });
  const dpgContext = await createDpgContextTestHelper(context.program);
  const binder = useBinder();
  const includeResponseHeaders =
    options["include-headers-in-response"] === true;
  dpgContext.rlcOptions!.includeHeadersInResponse = includeResponseHeaders;
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.experimentalExtensibleEnums =
    options["experimental-extensible-enums"];
  const modularEmitterOptions = transformModularEmitterOptions(dpgContext, "", {
    casing: "camel"
  });
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    emitTypes(dpgContext, { sourceRoot: "" });
    const clientMap = Array.from(getClientHierarchyMap(dpgContext));
    // Build client context first so it's registered in the binder
    buildClientContext(dpgContext, clientMap[0]!, modularEmitterOptions);
    const res = buildOperationFiles(
      dpgContext,
      clientMap[0]!,
      modularEmitterOptions
    );
    buildApiOptions(dpgContext, clientMap[0]!, modularEmitterOptions);
    if (
      options.mustEmptyDiagnostic &&
      dpgContext.program.diagnostics.length > 0
    ) {
      throw dpgContext.program.diagnostics;
    }
    binder.resolveAllReferences("/");
    for (const file of res) {
      file.fixUnusedIdentifiers();
    }
    return res;
  }
  return undefined;
}

export async function emitModularClientContextFromTypeSpec(
  tspContent: string,
  options: ModelConfigOptions = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore: false,
    needTCGC: false,
    withRawContent: options.withRawContent ? true : false,
    withVersionedApiVersion: options.withVersionedApiVersion ? true : false
  });
  const dpgContext = await createDpgContextTestHelper(context.program);
  const binder = useBinder();
  const includeResponseHeaders =
    options["include-headers-in-response"] === true;
  dpgContext.rlcOptions!.includeHeadersInResponse = includeResponseHeaders;
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.typespecTitleMap = options["typespec-title-map"];
  const modularEmitterOptions = transformModularEmitterOptions(dpgContext, "", {
    casing: "camel"
  });
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    emitTypes(dpgContext, { sourceRoot: "" });
    renameClientName(dpgContext.sdkPackage.clients[0], modularEmitterOptions);
    const clientMap = Array.from(getClientHierarchyMap(dpgContext));
    const res = buildClientContext(
      dpgContext,
      clientMap[0]!,
      modularEmitterOptions
    );
    binder.resolveAllReferences("/");
    return res;
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}

export async function emitModularClientFromTypeSpec(
  tspContent: string,
  options: ModelConfigOptions = {}
) {
  const context = await rlcEmitterFor(tspContent, {
    needNamespaces: true,
    needAzureCore: false,
    needTCGC: false,
    withRawContent: options.withRawContent ? true : false,
    withVersionedApiVersion: options.withVersionedApiVersion ? true : false
  });
  const dpgContext = await createDpgContextTestHelper(context.program);
  const binder = useBinder();
  const includeResponseHeaders =
    options["include-headers-in-response"] === true;
  dpgContext.rlcOptions!.includeHeadersInResponse = includeResponseHeaders;
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.typespecTitleMap = options["typespec-title-map"];
  const modularEmitterOptions = transformModularEmitterOptions(dpgContext, "", {
    casing: "camel"
  });
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    emitTypes(dpgContext, { sourceRoot: "" });
    renameClientName(dpgContext.sdkPackage.clients[0], modularEmitterOptions);
    const clientMap = Array.from(getClientHierarchyMap(dpgContext));
    buildApiOptions(dpgContext, clientMap[0]!, modularEmitterOptions);
    buildOperationFiles(dpgContext, clientMap[0]!, modularEmitterOptions);
    const res = buildClassicalClient(
      dpgContext,
      clientMap[0]!,
      modularEmitterOptions
    );
    binder.resolveAllReferences("/");
    return res;
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}

export async function emitSamplesFromTypeSpec(
  tspContent: string,
  examples: ExampleJson[],
  configs: Record<string, any> = {}
) {
  const context = await compileTypeSpecFor(tspContent, examples);
  configs["typespecTitleMap"] = configs["typespec-title-map"];
  configs["hierarchyClient"] = configs["hierarchy-client"];
  configs["enableOperationGroup"] = configs["enable-operation-group"];
  const dpgContext = await createDpgContextTestHelper(context.program, false, {
    "examples-directory": `./examples`,
    packageDetails: {
      name: "@azure/internal-test"
    },
    ...configs
  });
  const modularEmitterOptions = transformModularEmitterOptions(dpgContext, "", {
    casing: "camel"
  });
  for (const subClient of dpgContext.sdkPackage.clients) {
    await renameClientName(subClient, modularEmitterOptions);
  }
  const files = await emitSamples(dpgContext);
  useBinder().resolveAllReferences("/");
  return files;
}
