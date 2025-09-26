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
  ClientEmitOptions,
  iterateClientsAndMethods,
  generateMethodCall,
  createSourceFile
} from "./helpers/exampleValueHelpers.js";
import { getDefaultService } from "../utils/modelUtils.js";
import { getServers } from "@typespec/http";

/**
 * Check if service has @server decorator with template parameters
 */
function checkHasServerTemplateParams(dpgContext: SdkContext): boolean {
  const program = dpgContext.program;
  const serviceNs = getDefaultService(program)?.type;
  const servers = serviceNs ? getServers(program, serviceNs) : undefined;
  return !!(servers?.[0]?.url && servers[0].url.includes("{"));
}

/**
 * Helpers to emit samples
 */
export function emitSamples(dpgContext: SdkContext): SourceFile[] {
  return iterateClientsAndMethods(dpgContext, emitMethodSamples);
}

function emitMethodSamples(
  dpgContext: SdkContext,
  method: ServiceOperation,
  options: ClientEmitOptions
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
  const clientName = getClassicalClientName(options.client);

  // TODO: remove hard-coded for package
  if (dpgContext.rlcOptions?.packageDetails?.name) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: dpgContext.rlcOptions?.packageDetails?.name,
      namedImports: [clientName]
    });
  }

  // Check if we need dotenv import based on server template parameters
  const hasServerTemplateParams = checkHasServerTemplateParams(dpgContext);
  if (hasServerTemplateParams) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: "dotenv",
      namespaceImport: "dotenv"
    });
    sourceFile.addStatements("dotenv.config();");
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
      options.client,
      false, // isForTest = false for samples
      hasServerTemplateParams // includeClientParams
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
