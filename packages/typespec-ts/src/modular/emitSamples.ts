import {
  StructureKind,
  FunctionDeclarationStructure,
  SourceFile
} from "ts-morph";
import { SdkContext } from "../utils/interfaces.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import { ServiceOperation } from "../utils/operationUtil.js";
import {
  buildParameterValueMap,
  prepareCommonParameters,
  escapeSpecialCharToSpace,
  getDescriptiveName,
  EmitOptions,
  iterateClientsAndMethods,
  generateMethodCall,
  createSourceFile
} from "./helpers/sampleTestHelpers.js";

/**
 * Helpers to emit samples
 */
export function emitSamples(dpgContext: SdkContext): SourceFile[] {
  return iterateClientsAndMethods(dpgContext, emitMethodSamples);
}

function emitMethodSamples(
  dpgContext: SdkContext,
  method: ServiceOperation,
  options: EmitOptions
): SourceFile | undefined {
  const examples = method.operation.examples ?? [];
  if (examples.length === 0) {
    return;
  }

  const operationPrefix = `${options.classicalMethodPrefix ?? ""} ${
    method.oriName ?? method.name
  }`;
  const fileName = normalizeName(`${operationPrefix} Sample`, NameType.File);
  const sourceFile = createSourceFile(
    dpgContext,
    method,
    options,
    "sample",
    fileName
  );

  const exampleFunctions = [];
  const clientName = getClassicalClientName(options.topLevelClient);

  // TODO: remove hard-coded for package
  if (dpgContext.rlcOptions?.packageDetails?.name) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: dpgContext.rlcOptions?.packageDetails?.name,
      namedImports: [clientName]
    });
  }

  for (const example of examples) {
    const exampleFunctionBody: string[] = [];
    const exampleName = normalizeName(
      escapeSpecialCharToSpace(example.name),
      NameType.Method
    );

    const parameterMap = buildParameterValueMap(example);
    const parameters = prepareCommonParameters(
      dpgContext,
      method,
      parameterMap,
      options.topLevelClient,
      false // isForTest = false for samples
    );

    const { methodCall, clientParams, clientParamDefs } = generateMethodCall(
      method,
      parameters,
      options
    );

    // Add client parameter definitions
    clientParamDefs.forEach((def) => exampleFunctionBody.push(def));

    // Handle optional client parameters
    const optionalClientParams = parameters
      .filter((p) => p.onClient && p.isOptional)
      .map((param) => `${param.name}: ${param.value}`);

    if (optionalClientParams.length > 0) {
      exampleFunctionBody.push(
        `const clientOptions = {${optionalClientParams.join(", ")}};`
      );
      clientParams.push("clientOptions");
    }

    exampleFunctionBody.push(
      `const client = new ${clientName}(${clientParams.join(", ")});`
    );

    // Handle method execution based on type
    const isPaging = method.kind === "paging";
    if (isPaging) {
      exampleFunctionBody.push(`const resArray = new Array();`);
      exampleFunctionBody.push(
        `for await (const item of ${methodCall}) { resArray.push(item); }`
      );
      exampleFunctionBody.push(`console.log(resArray);`);
    } else if (method.response.type === undefined) {
      // skip response handling for void methods
      exampleFunctionBody.push(`await ${methodCall};`);
    } else {
      exampleFunctionBody.push(`const result = await ${methodCall};`);
      exampleFunctionBody.push(`console.log(result);`);
    }

    // Create a function declaration structure
    const description = getDescriptiveName(method, example.name, "sample");
    const functionDeclaration: FunctionDeclarationStructure = {
      returnType: "Promise<void>",
      kind: StructureKind.Function,
      isAsync: true,
      name: exampleName,
      statements: exampleFunctionBody,
      docs: [
        `This sample demonstrates how to ${description}\n\n@summary ${description}\nx-ms-original-file: ${example.filePath}`
      ]
    };
    sourceFile.addFunction(functionDeclaration);
    exampleFunctions.push(exampleName);
  }

  // Add statements referencing the tracked declarations
  const functions = exampleFunctions.map((f) => `await ${f}();`).join("\n");
  sourceFile.addStatements(`
  async function main(): Promise<void> {
    ${functions}
  }

  main().catch(console.error);`);

  options.generatedFiles.push(sourceFile);
  return sourceFile;
}
