import { CompilerHost, getDoc, ModelType, Program, Type } from "@cadl-lang/compiler";
import {
  buildClientDefinitions,
  Paths,
  RLCModel,
  generateSchemaTypes,
  File,
  SchemaContext,
  Schema
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
  const schemas: Schema[] = [];
  const modelMap: Map<Type, SchemaContext[]> = new Map<Type, SchemaContext[]>();
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
        setModelMap(bodyModel, SchemaContext.Input);
      } else if(bodyModel.kind === 'Array' && bodyModel.elementType.kind === 'Model') {
        setModelMap(bodyModel.elementType, SchemaContext.Input);
      } 
    }
    for(const resp  of route.responses) {
      if (resp.type.kind === 'Model') {
        setModelMap(resp.type, SchemaContext.Output);   
      } else if (resp.type.kind === 'Array' && resp.type.elementType.kind === 'Model') {
        setModelMap(resp.type.elementType, SchemaContext.Output); 
      }
    }
  }
  modelMap.forEach((context, cadlModel) => {
    const model = getSchemaForType(program, cadlModel);
    model.usage = context;
    schemas.push(model);
  })
  function setModelMap(type: ModelType, schemaContext: SchemaContext) {
    if (modelMap.has(type)) {
      const context = modelMap.get(type);
      if(context && context.indexOf(schemaContext) === -1) {
        context.push(schemaContext);
        modelMap.set(type, context);
      }
    } else {
      modelMap.set(type, [schemaContext]);
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
