import { CompilerHost, getDoc, Program } from "@cadl-lang/compiler";
import {
  buildClientDefinitions,
  Paths,
  RLCModel,
  generateSchemaTypes,
  File,
  ObjectSchema
} from "@azure-tools/rlc-codegen";
import { getAllRoutes } from "@cadl-lang/rest/http";
import { dirname, join } from "path";

export async function $onEmit(program: Program) {
  await emitCLientDefinition(program);
  await emitModels(program);
}

async function emitModels(program: Program) {
  const rlcModels = transformRLCModels(program);
  const { inputModelFile, outputModelFile } = generateSchemaTypes(rlcModels, program);
  await emitFile(inputModelFile, program);
  await emitFile(outputModelFile, program);
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
        const name = bodyModel.name;
        const type = "Object";
        const description = getDoc(program, bodyModel);
        const properties: ObjectSchema[] = [];
        bodyModel.properties.forEach(item => {
          const property = {
            name: item.name,
            type: item.type.kind,
            description: item
          };
          properties.push(property);
        });
        const model = { name, type, description, properties }
        schemas.push(model);
      }
    }
  }
  return { srcPath, libraryName, paths };
}

async function emitCLientDefinition(program: Program) {
  const rlcModels = await transformRLCModels(program);
  const clientDefinitionsFile = buildClientDefinitions(rlcModels, {
    clientImports: new Set(),
    importedParameters: new Set(),
    importedResponses: new Set()
  });

  await emitFile(clientDefinitionsFile, program);
}

async function emitFile(file: File, program: Program) {
  const host: CompilerHost = program.host;
  const filePath = program.compilerOptions.outputPath
    ? join(program.compilerOptions.outputPath, file.path)
    : file.path;
  await host.mkdirp(dirname(filePath));
  await host.writeFile(filePath, file.content);
}
