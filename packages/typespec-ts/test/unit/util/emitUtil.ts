import { listClients } from "@azure-tools/typespec-client-generator-core";
import {
  buildClient,
  buildClientDefinitions,
  buildParameterTypes,
  buildResponseTypes,
  buildSchemaTypes,
  ImportKind,
  Schema
} from "@azure-tools/rlc-common";
import { createDpgContextTestHelper, rlcEmitterFor } from "./testUtil.js";
import { transformToParameterTypes } from "../../../src/transform/transformParameters.js";
import { transformSchemas } from "../../../src/transform/transformSchemas.js";
import { transformPaths } from "../../../src/transform/transformPaths.js";
import { transformUrlInfo } from "../../../src/transform/transform.js";
import { transformApiVersionInfo } from "../../../src/transform/transformApiVersionInfo.js";
import { transformToResponseTypes } from "../../../src/transform/transformResponses.js";
import { getCredentialInfo } from "../../../src/transform/transfromRLCOptions.js";

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
  const clients = listClients(dpgContext);
  let rlcSchemas: Schema[] = [];
  if (clients && clients[0]) {
    rlcSchemas = transformSchemas(program, clients[0], dpgContext);
  }
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
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const clients = listClients(dpgContext);
  const importSet = new Map<ImportKind, Set<string>>();
  let parameters;
  if (clients && clients[0]) {
    parameters = transformToParameterTypes(
      program,
      importSet,
      clients[0],
      dpgContext
    );
  }
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
  const clients = listClients(dpgContext);
  let paths = {};
  if (clients && clients[0]) {
    paths = transformPaths(program, clients[0], dpgContext);
  }
  return buildClientDefinitions({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths
  });
}

export async function emitClientFactoryFromCadl(
  cadlContent: string,
  needAzureCore: boolean = false
) {
  const context = await rlcEmitterFor(cadlContent, false, needAzureCore);
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const urlInfo = transformUrlInfo(program, dpgContext);
  const creadentialInfo = getCredentialInfo(program, {});
  const clients = listClients(dpgContext);
  let apiVersionInfo;
  if (clients && clients[0]) {
    apiVersionInfo = transformApiVersionInfo(
      clients[0],
      program,
      dpgContext,
      urlInfo
    );
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
  const program = context.program;
  const dpgContext = createDpgContextTestHelper(context.program);
  const importSet = new Map<ImportKind, Set<string>>();
  const clients = listClients(dpgContext);
  let responses;
  if (clients && clients[0]) {
    responses = transformToResponseTypes(
      program,
      importSet,
      clients[0],
      dpgContext
    );
  }
  return buildResponseTypes({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths: {},
    responses,
    importSet
  });
}
