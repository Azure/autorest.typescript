import {
  buildClient,
  buildClientDefinitions,
  buildPaginateHelper,
  buildParameterTypes,
  buildResponseTypes,
  buildSchemaTypes,
  ImportKind,
  RLCModel,
  Schema
} from "@azure-tools/rlc-common";
import { createDpgContextTestHelper, rlcEmitterFor } from "./testUtil.js";
import { transformToParameterTypes } from "../../src/transform/transformParameters.js";
import { transformSchemas } from "../../src/transform/transformSchemas.js";
import { transformPaths } from "../../src/transform/transformPaths.js";
import {
  transformRLCModel,
  transformUrlInfo
} from "../../src/transform/transform.js";
import { transformApiVersionInfo } from "../../src/transform/transformApiVersionInfo.js";
import { transformToResponseTypes } from "../../src/transform/transformResponses.js";
import { getCredentialInfo } from "../../src/transform/transfromRLCOptions.js";
import { getRLCClients } from "../../src/utils/clientUtils.js";
import { expectDiagnosticEmpty } from "@typespec/compiler/testing";
import { transformHelperFunctionDetails } from "../../src/transform/transformHelperFunctionDetails.js";
import { emitCodeModel } from "../../src/modular/buildCodeModel.js";
import {
  buildModels,
  buildModelsOptions
} from "../../src/modular/emitModels.js";
import { buildOperationFiles } from "../../src/modular/buildOperations.js";
import { buildClientContext } from "../../src/modular/buildClientContext.js";
import { Project } from "ts-morph";

export async function emitPageHelperFromTypeSpec(
  tspContent: string,
  needAzureCore: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    false,
    needTCGC
  );
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  let helperDetail;
  if (clients && clients[0]) {
    helperDetail = transformHelperFunctionDetails(clients[0], dpgContext);
  }
  expectDiagnosticEmpty(program.diagnostics);
  return buildPaginateHelper({
    helperDetails: helperDetail,
    srcPath: "",
    paths: {},
    libraryName: "test",
    schemas: []
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
    false,
    needTCGC
  );
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  let rlcSchemas: Schema[] = [];
  if (clients && clients[0]) {
    rlcSchemas = transformSchemas(program, clients[0], dpgContext);
  }
  expectDiagnosticEmpty(program.diagnostics);
  return rlcSchemas;
}

export async function emitModelsFromTypeSpec(
  tspContent: string,
  needAzureCore: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    false,
    needTCGC
  );
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  let rlcSchemas: Schema[] = [];
  if (clients && clients[0]) {
    rlcSchemas = transformSchemas(program, clients[0], dpgContext);
  }
  expectDiagnosticEmpty(program.diagnostics);
  return buildSchemaTypes({
    schemas: rlcSchemas,
    srcPath: "",
    paths: {},
    libraryName: "test"
  });
}

export async function emitParameterFromTypeSpec(
  tspContent: string,
  needAzureCore: boolean = false,
  ignoreClientApiVersion: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    needAzureCore,
    ignoreClientApiVersion,
    needTCGC
  );
  const dpgContext = createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  const importSet = new Map<ImportKind, Set<string>>();
  let parameters;
  if (clients && clients[0]) {
    parameters = transformToParameterTypes(importSet, clients[0], dpgContext);
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return buildParameterTypes({
    srcPath: "",
    paths: {},
    libraryName: "test",
    schemas: [],
    parameters,
    importSet
  });
}

export async function emitClientDefinitionFromTypeSpec(
  tspContent: string,
  needAzureCore: boolean = false
) {
  const context = await rlcEmitterFor(tspContent, true, needAzureCore);
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  let paths = {};
  if (clients && clients[0]) {
    paths = transformPaths(program, clients[0], dpgContext);
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return buildClientDefinitions({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths
  });
}

export async function emitClientFactoryFromTypeSpec(
  tspContent: string,
  needAzureCore: boolean = false,
  isEmptyDiagnostic = true,
  withRawContent = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    false,
    needAzureCore,
    false,
    false,
    withRawContent
  );
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const urlInfo = transformUrlInfo(dpgContext);
  const creadentialInfo = getCredentialInfo(program, {});
  const clients = getRLCClients(dpgContext);
  let apiVersionInfo;
  if (clients && clients[0]) {
    apiVersionInfo = transformApiVersionInfo(clients[0], dpgContext, urlInfo);
  }
  if (isEmptyDiagnostic) {
    expectDiagnosticEmpty(dpgContext.program.diagnostics);
  } else {
    throw dpgContext.program.diagnostics;
  }

  return buildClient({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths: {},
    urlInfo,
    apiVersionInfo,
    options: {
      packageDetails: {
        name: "test",
        version: "1.0.0-beta.1"
      },
      ...creadentialInfo
    }
  });
}

export async function emitResponsesFromTypeSpec(
  tspContent: string,
  needAzureCore: boolean = false
) {
  const context = await rlcEmitterFor(tspContent, true, needAzureCore);
  const dpgContext = createDpgContextTestHelper(context.program);
  const importSet = new Map<ImportKind, Set<string>>();
  const clients = getRLCClients(dpgContext);
  let responses;
  if (clients && clients[0]) {
    responses = transformToResponseTypes(importSet, clients[0], dpgContext);
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return buildResponseTypes({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths: {},
    responses,
    importSet
  });
}

export async function getRLCClientsFromTypeSpec(tspContent: string) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    false,
    false,
    true,
    true
  );
  const dpgContext = createDpgContextTestHelper(context.program);
  const clients = getRLCClients(dpgContext);
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return clients;
}

export async function emitModularModelsFromTypeSpec(
  tspContent: string,
  needOptions: boolean = false
) {
  const context = await rlcEmitterFor(tspContent, true);
  const dpgContext = createDpgContextTestHelper(context.program);
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
      if (needOptions) {
        return buildModelsOptions(
          modularCodeModel,
          modularCodeModel.clients[0]
        );
      }
      return buildModels(modularCodeModel, modularCodeModel.clients[0]);
    }
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}

export async function emitModularOperationsFromTypeSpec(tspContent: string) {
  const context = await rlcEmitterFor(tspContent);
  const dpgContext = createDpgContextTestHelper(context.program);
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
      return buildOperationFiles(
        dpgContext,
        modularCodeModel,
        modularCodeModel.clients[0],
        false
      );
    }
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}

export async function emitModularClientContextFromTypeSpec(
  tspContent: string,
  withRawContent: boolean = false
) {
  const context = await rlcEmitterFor(
    tspContent,
    true,
    false,
    false,
    false,
    withRawContent
  );
  const dpgContext = createDpgContextTestHelper(context.program);
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
        dpgContext,
        modularCodeModel,
        modularCodeModel.clients[0]
      );
    }
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}
