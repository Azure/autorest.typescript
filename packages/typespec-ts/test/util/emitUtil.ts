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
import { buildModels } from "../../src/modular/emitModels.js";
import { Project } from "ts-morph";

export async function emitPageHelperFromCadl(
  cadlContent: string,
  needAzureCore: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    cadlContent,
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

export async function emitModelsFromCadl(
  cadlContent: string,
  needAzureCore: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    cadlContent,
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

export async function emitParameterFromCadl(
  cadlContent: string,
  needAzureCore: boolean = false,
  ignoreClientApiVersion: boolean = false,
  needTCGC: boolean = false
) {
  const context = await rlcEmitterFor(
    cadlContent,
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

export async function emitClientDefinitionFromCadl(
  cadlContent: string,
  needAzureCore: boolean = false
) {
  const context = await rlcEmitterFor(cadlContent, true, needAzureCore);
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

export async function emitClientFactoryFromCadl(
  cadlContent: string,
  needAzureCore: boolean = false,
  isEmptyDiagnostic = true
) {
  const context = await rlcEmitterFor(cadlContent, false, needAzureCore);
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

export async function emitResponsesFromCadl(
  cadlContent: string,
  needAzureCore: boolean = false
) {
  const context = await rlcEmitterFor(cadlContent, true, needAzureCore);
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

export async function getRLCClientsFromCadl(cadlContent: string) {
  const context = await rlcEmitterFor(
    cadlContent,
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

export async function emitModularModelsFromCadl(cadlContent: string) {
  const context = await rlcEmitterFor(cadlContent, true);
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
      return buildModels(modularCodeModel, modularCodeModel.clients[0]);
    }
  }
  expectDiagnosticEmpty(dpgContext.program.diagnostics);
  return undefined;
}
