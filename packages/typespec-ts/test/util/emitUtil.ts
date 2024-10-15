import {
  OperationParameter,
  RLCModel,
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
  buildModels,
  buildModelsOptions
} from "../../src/modular/emitModels.js";
import {
  compileTypeSpecFor,
  createDpgContextTestHelper,
  ExampleJson,
  rlcEmitterFor
} from "./testUtil.js";
import {
  transformRLCModel,
  transformUrlInfo
} from "../../src/transform/transform.js";

import { Project } from "ts-morph";
import { buildClassicalClient } from "../../src/modular/buildClassicalClient.js";
import { buildClientContext } from "../../src/modular/buildClientContext.js";
import { buildOperationFiles } from "../../src/modular/buildOperations.js";
import { buildSerializeUtils } from "../../src/modular/buildSerializeUtils.js";
import { emitCodeModel } from "../../src/modular/buildCodeModel.js";
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

export async function emitPageHelperFromTypeSpec(
  tspContent: string,
  needAzureCore: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    needTCGC
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
  needAzureCore: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    needTCGC
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
  needAzureCore: boolean = false,
  needTCGC: boolean = false,
  withRawContent: boolean = false,
  mustEmptyDiagnostic: boolean = true,
  enableModelNamespace: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    needTCGC,
    withRawContent
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
  needAzureCore: boolean = false,
  needTCGC: boolean = false,
  withRawContent: boolean = false,
  mustEmptyDiagnostic: boolean = true,
  withVersionedApiVersion: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    needTCGC,
    withRawContent,
    withVersionedApiVersion
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
  needAzureCore: boolean = false
) {
  const context = await rlcEmitterFor(tspContent, true, needAzureCore);
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
  needAzureCore: boolean = false,
  mustEmptyDiagnostic = true,
  withRawContent = false,
  needNamespaces = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    needNamespaces,
    needAzureCore,
    false,
    withRawContent
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
  needAzureCore: boolean = false,
  withRawContent: boolean = false,
  needTCGC: boolean = false,
  withVersionedApiVersion: boolean = false,
  needArmTemplate: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    needTCGC,
    withRawContent,
    withVersionedApiVersion,
    needArmTemplate
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
  const context = await rlcEmitterFor(tspContent, true, false, true, true);
  const dpgContext = await createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return clients;
}

export async function emitModularModelsFromTypeSpec(
  tspContent: string,
  needOptions: boolean = false,
  withRawContent: boolean = false,
  needAzureCore: boolean = false,
  compatibilityMode: boolean = false,
  mustEmptyDiagnostic: boolean = true,
  experimentalExtensibleEnums: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    false,
    withRawContent
  );
  const dpgContext = await createDpgContextTestHelper(context.program);
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
  const project = useContext("outputProject");
  const binder = useBinder();
  const clients = getRLCClients(dpgContext);
  let modelFile = undefined;
  if (clients && clients[0]) {
    dpgContext.rlcOptions!.isModularLibrary = true;
    dpgContext.rlcOptions!.compatibilityMode = compatibilityMode;
    dpgContext.rlcOptions!.experimentalExtensibleEnums =
      experimentalExtensibleEnums;
    const rlcModels = await transformRLCModel(clients[0], dpgContext);
    serviceNameToRlcModelsMap.set(clients[0].service.name, rlcModels);
    const modularCodeModel = emitCodeModel(
      dpgContext,
      serviceNameToRlcModelsMap,
      "",
      project,
      {
        casing: "camel"
      }
    );
    if (
      modularCodeModel &&
      modularCodeModel.clients &&
      modularCodeModel.clients.length > 0 &&
      modularCodeModel.clients[0]
    ) {
      if (needOptions) {
        modelFile = buildModelsOptions(
          modularCodeModel.clients[0],
          modularCodeModel
        );
      } else {
        modelFile = buildModels(modularCodeModel.clients[0], modularCodeModel);
      }
    }
  }
  if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
    throw dpgContext.program.diagnostics;
  }
  binder.resolveAllReferences();
  return modelFile;
}

export async function emitModularSerializeUtilsFromTypeSpec(
  tspContent: string
) {
  const context = await rlcEmitterFor(tspContent);
  const dpgContext = await createDpgContextTestHelper(context.program);
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
  const project = useContext("outputProject");
  const binder = useBinder();
  const clients = getRLCClients(dpgContext);
  if (clients && clients[0]) {
    dpgContext.rlcOptions!.isModularLibrary = true;
    const rlcModels = await transformRLCModel(clients[0], dpgContext);
    serviceNameToRlcModelsMap.set(clients[0].service.name, rlcModels);
    const modularCodeModel = emitCodeModel(
      dpgContext,
      serviceNameToRlcModelsMap,
      "",
      project,
      {
        casing: "camel"
      }
    );
    if (
      modularCodeModel &&
      modularCodeModel.clients &&
      modularCodeModel.clients.length > 0 &&
      modularCodeModel.clients[0]
    ) {
      const files = buildSerializeUtils(modularCodeModel);
      binder.resolveAllReferences();
      return files;
    }
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}

export async function emitModularOperationsFromTypeSpec(
  tspContent: string,
  mustEmptyDiagnostic = true,
  needNamespaces: boolean = true,
  needAzureCore: boolean = false,
  withRawContent: boolean = false,
  withVersionedApiVersion: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    needNamespaces,
    needAzureCore,
    false,
    withRawContent,
    withVersionedApiVersion
  );
  const dpgContext = await createDpgContextTestHelper(context.program);
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
  const project = useContext("outputProject");
  const binder = useBinder();
  const clients = getRLCClients(dpgContext);
  if (clients && clients[0]) {
    dpgContext.rlcOptions!.isModularLibrary = true;
    const rlcModels = await transformRLCModel(clients[0], dpgContext);
    serviceNameToRlcModelsMap.set(clients[0].service.name, rlcModels);
    const modularCodeModel = emitCodeModel(
      dpgContext,
      serviceNameToRlcModelsMap,
      "",
      project,
      {
        casing: "camel"
      }
    );
    if (
      modularCodeModel &&
      modularCodeModel.clients &&
      modularCodeModel.clients.length > 0 &&
      modularCodeModel.clients[0]
    ) {
      const res = buildOperationFiles(
        modularCodeModel.clients[0],
        dpgContext,
        modularCodeModel
      );
      if (mustEmptyDiagnostic && dpgContext.program.diagnostics.length > 0) {
        throw dpgContext.program.diagnostics;
      }
      binder.resolveAllReferences();
      return res;
    }
  }
  return undefined;
}

export async function emitModularClientContextFromTypeSpec(
  tspContent: string,
  withRawContent: boolean = false,
  withVersionedApiVersion: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    false,
    false,
    withRawContent,
    withVersionedApiVersion
  );
  const dpgContext = await createDpgContextTestHelper(context.program);
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
  const project = new Project();
  const clients = getRLCClients(dpgContext);
  if (clients && clients[0]) {
    dpgContext.rlcOptions!.isModularLibrary = true;
    const rlcModels = await transformRLCModel(clients[0], dpgContext);
    serviceNameToRlcModelsMap.set(clients[0].service.name, rlcModels);
    const modularCodeModel = emitCodeModel(
      dpgContext,
      serviceNameToRlcModelsMap,
      "",
      project,
      {
        casing: "camel"
      }
    );
    if (
      modularCodeModel &&
      modularCodeModel.clients &&
      modularCodeModel.clients.length > 0 &&
      modularCodeModel.clients[0]
    ) {
      return buildClientContext(
        modularCodeModel.clients[0],
        dpgContext,
        modularCodeModel
      );
    }
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}

export async function emitModularClientFromTypeSpec(
  tspContent: string,
  withRawContent: boolean = false,
  withVersionedApiVersion: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    false,
    false,
    withRawContent,
    withVersionedApiVersion
  );
  const dpgContext = await createDpgContextTestHelper(context.program);
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
  const project = new Project();
  const clients = getRLCClients(dpgContext);
  if (clients && clients[0]) {
    dpgContext.rlcOptions!.isModularLibrary = true;
    const rlcModels = await transformRLCModel(clients[0], dpgContext);
    serviceNameToRlcModelsMap.set(clients[0].service.name, rlcModels);
    const modularCodeModel = emitCodeModel(
      dpgContext,
      serviceNameToRlcModelsMap,
      "",
      project,
      {
        casing: "camel"
      }
    );
    if (
      modularCodeModel &&
      modularCodeModel.clients &&
      modularCodeModel.clients.length > 0 &&
      modularCodeModel.clients[0]
    ) {
      return buildClassicalClient(
        modularCodeModel.clients[0],
        dpgContext,
        modularCodeModel
      );
    }
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
  const files = await emitSamples(dpgContext);
  useBinder().resolveAllReferences();
  return files;
}
