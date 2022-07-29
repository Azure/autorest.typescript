import { CompilerHost, getDoc, Program } from "@cadl-lang/compiler";
import {
  buildClientDefinitions,
  Paths,
  RLCModel,
  generateSchemaTypes,
  File
} from "@azure-tools/rlc-codegen";
import { getAllRoutes } from "@cadl-lang/rest/http";
import { dirname, isAbsolute, join } from "path";
import { getSchemaForType } from "./modelUtils.js";

export async function $onEmit(program: Program) {
  const rlcModels = await transformRLCModels(program);
  await emitCLientDefinition(rlcModels, program);
  await emitModels(rlcModels, program);
}

async function emitModels(rlcModels: RLCModel, program: Program) {

  const schemaOutput = generateSchemaTypes(rlcModels);
  if (schemaOutput) {
    const { inputModelFile, outputModelFile } = schemaOutput;
    if(inputModelFile) await emitFile(inputModelFile, program);  
    if(outputModelFile) await emitFile(outputModelFile, program);
  }
}

async function transformRLCModels(program: Program): Promise<RLCModel> {
  const [routes, _diagnostics] = getAllRoutes(program);
  const srcPath = program.compilerOptions.outputPath
    ? join(program.compilerOptions.outputPath, "src")
    : "src";
  const libraryName = "Foo";
  const paths: Paths = {};
  const schemas = []
  for (const route of routes) {
    paths[route.path] = {
      name: route.operation.name,
      pathParameters: route.parameters.parameters
        .filter((p) => p.type === "path")
        .map((p) => {
          return {
            name: p.name,
            type: "string",
            description: getDoc(program, route.operation) ?? ""
          };
        }),
      methods: {
        [route.verb]: [
          {
            description: getDoc(program, route.operation) ?? "",
            hasOptionalOptions: route.parameters.parameters.some(
              (p) => p.param.optional
            ),
            optionsName: "options",
            responseTypes: { success: ["string"], error: [] },
            returnType: "",
            successStatus: ["200"]
          }
        ]
      }
    };
    if(route.parameters.body) {
      const bodyModel = route.parameters.body.type;
      if (bodyModel.kind === 'Model') {
        const model = getSchemaForType(program, bodyModel)
        schemas.push(model);
      }
    }
  }
  return { srcPath, libraryName, paths, schemas };
}

async function emitCLientDefinition(rlcModels: RLCModel, program: Program) {
  const clientDefinitionsFile = buildClientDefinitions(rlcModels, {
    clientImports: new Set(),
    importedParameters: new Set(),
    importedResponses: new Set()
  });

  await emitFile(clientDefinitionsFile, program);
}

async function emitFile(file: File, program: Program) {
  const host: CompilerHost = program.host;
  const filePath = (isAbsolute(file.path) || !program.compilerOptions.outputPath)
    ? file.path
    : join(program.compilerOptions.outputPath, file.path);
  await host.mkdirp(dirname(filePath));
  await host.writeFile(filePath, file.content);
}
