import {
  buildClient,
  buildClientDefinitions,
  buildParameterTypes,
  buildResponseTypes,
  buildSchemaTypes,
  ImportKind,
  Schema
} from "@azure-tools/rlc-common";
import { transformToParameterTypes } from "../../src/transform/transformParameters.js";
import { transformSchemas } from "../../src/transform/transformSchemas.js";
import { transformPaths } from "../../src/transform/transformPaths.js";
import { transformUrlInfo } from "../../src/transform/transform.js"
import { transformToResponseTypes } from "../../src/transform/transformResponses.js";
import { rlcEmitterFor } from "./testUtil.js";
import { listClients } from "@azure-tools/cadl-dpg";

export async function emitModelsFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const clients = listClients(program);
  let rlcSchemas: Schema[] = [];
  if (clients && clients[0]) {
    rlcSchemas = transformSchemas(program, clients[0]);
  }
  return buildSchemaTypes({
    schemas: rlcSchemas,
    srcPath: "",
    paths: {},
    libraryName: "test"
  });
}

export async function emitParameterFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const clients = listClients(program);
  const importSet = new Map<ImportKind, Set<string>>();
  let parameters
  if (clients && clients[0]) {
    parameters = transformToParameterTypes(program, importSet, clients[0]);
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

export async function emitClientDefinitionFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const clients = listClients(program);
  let paths = {};
  if (clients && clients[0]) {
    paths = transformPaths(program, clients[0]);
  }
  return buildClientDefinitions({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths
  });
}

export async function emitClientFactoryFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const urlInfo = transformUrlInfo(program);
  return buildClient({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths: {},
    urlInfo,
    options: {
      packageDetails: {
        name: "test",
        version: "1.0.0-beta.1"
      }
    }
  });
}

export async function emitResponsesFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const importSet = new Map<ImportKind, Set<string>>();
  const clients = listClients(program);
  let responses;
  if (clients && clients[0]) {
    responses = transformToResponseTypes(program, importSet, clients[0]);
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
