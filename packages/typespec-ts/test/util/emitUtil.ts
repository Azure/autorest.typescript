import {
  OperationParameter,
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
import {
  emitTypes,
} from "../../src/modular/emitModels.js";
import {
  buildApiOptions
} from "../../src/modular/emitModelsOptions.js";
import { compileTypeSpecFor, createDpgContextTestHelper, ExampleJson, rlcEmitterFor } from "./testUtil.js";
import {
  transformUrlInfo
} from "../../src/transform/transform.js";

import { buildClassicalClient } from "../../src/modular/buildClassicalClient.js";
import { buildClientContext } from "../../src/modular/buildClientContext.js";
import { buildOperationFiles } from "../../src/modular/buildOperations.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import { expectDiagnosticEmpty } from "@typespec/compiler/testing";
import { getCredentialInfo } from "../../src/transform/transfromRLCOptions.js";
import { getRLCClients } from "../../src/utils/clientUtils.js";
import { transformHelperFunctionDetails } from "../../src/transform/transformHelperFunctionDetails.js";
import { transformPaths } from "../../src/transform/transformPaths.js";
import { transformSchemas } from "../../src/transform/transformSchemas.js";
import { transformToParameterTypes } from "../../src/transform/transformParameters.js";
import { transformToResponseTypes } from "../../src/transform/transformResponses.js";
import { useBinder } from "../../src/framework/hooks/binder.js";
import { useContext } from "../../src/contextManager.js";
import { emitSamples } from "../../src/modular/emitSamples.js";
import { removeUnusedImports, renameClientName } from "../../src/index.js";

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
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore,
      needTCGC
    }
  );
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
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore,
      needTCGC
    }
  );
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
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore,
      needTCGC,
      withRawContent
    }
  );
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
    withVersionedApiVersion?: boolean
  } = {}
) {
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore,
      needTCGC,
      withRawContent,
      withVersionedApiVersion
    }
  );
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
    needNamespaces = false
  }: {
    needAzureCore?: boolean;
    mustEmptyDiagnostic?: boolean;
    withRawContent?: boolean;
    needNamespaces?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces,
      needAzureCore,
      needTCGC: false,
      withRawContent
    }
  );
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
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore,
      needTCGC,
      withRawContent,
      withVersionedApiVersion,
      needArmTemplate
    }
  );
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

export interface ModelConfigOptions {
  needOptions?: boolean;
  withRawContent?: boolean;
  needAzureCore?: boolean;
  compatibilityMode?: boolean;
  mustEmptyDiagnostic?: boolean;
  experimentalExtensibleEnums?: boolean;
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
    compatibilityMode = false,
    mustEmptyDiagnostic = true,
    experimentalExtensibleEnums = false,
  } = options;
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore,
      needTCGC: false,
      withRawContent,
    }
  );
  const dpgContext = await createDpgContextTestHelper(context.program, false, options);
  const project = useContext("outputProject");
  const binder = useBinder();
  let modelFile = undefined;
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.compatibilityMode = compatibilityMode;
  dpgContext.rlcOptions!.experimentalExtensibleEnums =
    experimentalExtensibleEnums;
  const modularEmitterOptions = transformModularEmitterOptions(
    dpgContext,
    "",
    project,
    {
      casing: "camel"
    }
  );
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    if (needOptions) {
      emitTypes(dpgContext, { sourceRoot: "" });
      modelFile = buildApiOptions(
        dpgContext,
        dpgContext.sdkPackage.clients[0],
        modularEmitterOptions
      );
      binder.resolveAllReferences("/");
      removeUnusedImports(modelFile);
      modelFile.fixUnusedIdentifiers();
    } else {
      modelFile = emitTypes(dpgContext, { sourceRoot: "" });
      binder.resolveAllReferences("/");
    }
  }
  if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
    throw dpgContext.program.diagnostics;
  }
  if (Array.isArray(modelFile)) {
    return modelFile[0];
  }
  return modelFile;
}

export async function emitModularOperationsFromTypeSpec(
  tspContent: string,
  {
    mustEmptyDiagnostic = true,
    needNamespaces = true,
    needAzureCore = false,
    withRawContent = false,
    withVersionedApiVersion = false,
    experimentalExtensibleEnums = false
  }: {
    mustEmptyDiagnostic?: boolean;
    needNamespaces?: boolean;
    needAzureCore?: boolean;
    withRawContent?: boolean;
    withVersionedApiVersion?: boolean;
    experimentalExtensibleEnums?: boolean;
  } = {}
) {
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces,
      needAzureCore,
      needTCGC: false,
      withRawContent,
      withVersionedApiVersion
    }
  );
  const dpgContext = await createDpgContextTestHelper(context.program);
  const project = useContext("outputProject");
  const binder = useBinder();
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.experimentalExtensibleEnums = experimentalExtensibleEnums;
  const modularEmitterOptions = transformModularEmitterOptions(
    dpgContext,
    "",
    project,
    {
      casing: "camel"
    }
  );
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    emitTypes(dpgContext, { sourceRoot: "" });
    const res = buildOperationFiles(
      dpgContext,
      dpgContext.sdkPackage.clients[0],
      modularEmitterOptions
    );
    if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
      throw dpgContext.program.diagnostics;
    }
    binder.resolveAllReferences("/");
    for (const file of res) {
      removeUnusedImports(file);
      file.fixUnusedIdentifiers();
    }
    return res;
  }
  return undefined;
}

export async function emitModularClientContextFromTypeSpec(
  tspContent: string,
  {
    withRawContent = false,
    withVersionedApiVersion = false,
    typespecTitleMap = {}
  }: {
    withRawContent?: boolean;
    withVersionedApiVersion?: boolean;
    typespecTitleMap?: Record<string, string>;
  } = {}
) {
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore: false,
      needTCGC: false,
      withRawContent,
      withVersionedApiVersion
    }
  );
  const dpgContext = await createDpgContextTestHelper(context.program);
  const project = useContext("outputProject");
  const binder = useBinder();
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.typespecTitleMap = typespecTitleMap;
  const modularEmitterOptions = transformModularEmitterOptions(
    dpgContext,
    "",
    project,
    {
      casing: "camel"
    }
  );
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    emitTypes(dpgContext, { sourceRoot: "" });
    renameClientName(dpgContext.sdkPackage.clients[0],
      modularEmitterOptions);
    const res = buildClientContext(
      dpgContext,
      dpgContext.sdkPackage.clients[0],
      modularEmitterOptions
    );
    binder.resolveAllReferences("modularPackageFolder/src");
    removeUnusedImports(res);
    res.fixUnusedIdentifiers();
    return res;
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}

export async function emitModularClientFromTypeSpec(
  tspContent: string,
  {
    withRawContent = false,
    withVersionedApiVersion = false,
    typespecTitleMap = {}
  }: {
    withRawContent?: boolean;
    withVersionedApiVersion?: boolean;
    typespecTitleMap?: Record<string, string>;
  } = {}
) {
  const context = await rlcEmitterFor(
    tspContent,
    {
      needNamespaces: true,
      needAzureCore: false,
      needTCGC: false,
      withRawContent,
      withVersionedApiVersion
    }
  );
  const dpgContext = await createDpgContextTestHelper(context.program);
  const project = useContext("outputProject");
  const binder = useBinder();
  dpgContext.rlcOptions!.isModularLibrary = true;
  dpgContext.rlcOptions!.typespecTitleMap = typespecTitleMap;
  const modularEmitterOptions = transformModularEmitterOptions(
    dpgContext,
    "",
    project,
    {
      casing: "camel"
    }
  );
  if (
    dpgContext.sdkPackage.clients &&
    dpgContext.sdkPackage.clients.length > 0 &&
    dpgContext.sdkPackage.clients[0]
  ) {
    renameClientName(dpgContext.sdkPackage.clients[0],
      modularEmitterOptions);
    const res = buildClassicalClient(
      dpgContext,
      dpgContext.sdkPackage.clients[0],
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
  configs: Record<string, string> = {}
) {
  const context = await compileTypeSpecFor(tspContent, examples);
  const dpgContext = await createDpgContextTestHelper(context.program, false, {
    "examples-directory": `./examples`,
    packageDetails: {
      name: "@azure/internal-test"
    },
    ...configs
  });
  const project = useContext("outputProject");
  const modularEmitterOptions = transformModularEmitterOptions(
    dpgContext,
    "",
    project,
    {
      casing: "camel"
    }
  );
  for (const subClient of dpgContext.sdkPackage.clients) {
    await renameClientName(subClient, modularEmitterOptions);
  }
  const files = await emitSamples(dpgContext);
  useBinder().resolveAllReferences("/");
  return files;
}
