import { SourceFile } from "ts-morph";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { join } from "path";
import { existsSync, rmSync } from "fs";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import {
  ServiceOperation
} from "../utils/operationUtil.js";
import {
  buildParameterValueMap,
  prepareCommonParameters,
  getDescriptiveName,
  EmitOptions,
  iterateClientsAndMethods,
  generateMethodCall,
  createSourceFile,
  generateResponseAssertions
} from "./helpers/sampleTestHelpers.js";

/**
 * Clean up the test/generated folder before generating new tests
 */
function cleanupTestFolder(
  dpgContext: SdkContext,
  clients: SdkClientType<SdkServiceOperation>[]
) {
  const baseTestFolder = join(
    dpgContext.generationPathDetail?.rootDir ?? "",
    "test",
    "generated"
  );

  // If there are multiple clients, clean up subfolders
  if (clients.length > 1) {
    for (const client of clients) {
      const subFolder = normalizeName(
        getClassicalClientName(client),
        NameType.File
      );
      const clientTestFolder = join(baseTestFolder, subFolder);
      if (existsSync(clientTestFolder)) {
        rmSync(clientTestFolder, { recursive: true, force: true });
      }
    }
  } else {
    // Single client, clean up the entire test/generated folder
    if (existsSync(baseTestFolder)) {
      rmSync(baseTestFolder, { recursive: true, force: true });
    }
  }
}

/**
 * Helpers to emit tests similar to samples
 */
export function emitTests(dpgContext: SdkContext): SourceFile[] {
  const clients = dpgContext.sdkPackage.clients;

  // Clean up the test/generated folder before generating new tests
  cleanupTestFolder(dpgContext, clients);

  return iterateClientsAndMethods(dpgContext, emitMethodTests);
}

function emitMethodTests(
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
  const fileName = normalizeName(`${operationPrefix} Test`, NameType.File);
  const sourceFile = createSourceFile(dpgContext, method, options, "test", fileName);
  const clientName = getClassicalClientName(options.topLevelClient);

  // Add imports for testing framework
  sourceFile.addImportDeclaration({
    moduleSpecifier: "@azure-tools/test-recorder",
    namedImports: ["Recorder", "env"]
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: "../public/utils/recordedClient.js",
    namedImports: ["createRecorder"]
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: "@azure-tools/test-credential",
    namedImports: ["createTestCredential"]
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: "vitest",
    namedImports: ["assert", "beforeEach", "afterEach", "it", "describe"]
  });

  // Import the client
  sourceFile.addImportDeclaration({
    moduleSpecifier: "../../src/index.js",
    namedImports: [clientName]
  });

  const testFunctions = [];
  let clientParamNames: string[] = [];
  let clientParameterDefs: string[] = [];

  // Create test describe block
  const methodDescription =
    method.doc ?? `test ${method.oriName ?? method.name}`;
  let normalizedDescription =
    methodDescription.charAt(0).toLowerCase() + methodDescription.slice(1);

  // Remove any trailing dots from describe block
  normalizedDescription = normalizedDescription.replace(/\.$/, "");

  // Generate test functions for each example
  for (const example of examples) {
    const testFunctionBody: string[] = [];
    // Create a more descriptive test name based on the operation (same as samples)
    const testName = getDescriptiveName(method, example.name, "test");

    const parameterMap = buildParameterValueMap(example);
    const parameters = prepareCommonParameters(
      dpgContext,
      method,
      parameterMap,
      options.topLevelClient,
      true // isForTest = true for tests
    );

    // Prepare client-level parameters
    const requiredClientParams = parameters.filter(
      (p) => p.onClient && !p.isOptional
    );
    clientParameterDefs = requiredClientParams.map(
      (p) => `const ${p.name} = ${p.value};`
    );
    clientParamNames = requiredClientParams.map((p) => p.name);
    // add client options to parameters
    // const clientOptions = recorder.configureClientOptions({});
    clientParamNames.push("clientOptions");
    clientParameterDefs.push(
      `const clientOptions = recorder.configureClientOptions({});`
    );

    const { methodCall } = generateMethodCall(method, parameters, options);

    // Add method call based on type
    const isPaging = method.kind === "paging";
    const isLRO = method.kind === "lro" || method.kind === "lropaging";

    if (method.response.type === undefined) {
      // skip response handling for void methods
      testFunctionBody.push(`await ${methodCall};`);
      testFunctionBody.push(`\/* Test passes if no exception is thrown *\/`);
    } else if (isPaging) {
      testFunctionBody.push(`const resArray = new Array();`);
      testFunctionBody.push(
        `for await (const item of ${methodCall}) { resArray.push(item); }`
      );
      testFunctionBody.push(`assert.ok(resArray);`);
      // Add response assertions for paging results
      const pagingAssertions = generateResponseAssertions(
        example,
        "resArray",
        true // isPaging = true
      );
      testFunctionBody.push(...pagingAssertions);
    } else if (isLRO) {
      testFunctionBody.push(`const result = await ${methodCall};`);
      testFunctionBody.push(`assert.ok(result);`);
      // Add response assertions for LRO results
      const responseAssertions = generateResponseAssertions(
        example,
        "result"
      );
      testFunctionBody.push(...responseAssertions);
    } else {
      testFunctionBody.push(`const result = await ${methodCall};`);
      testFunctionBody.push(`assert.ok(result);`);
      // Add response assertions for non-paging results
      const responseAssertions = generateResponseAssertions(
        example,
        "result"
      );
      testFunctionBody.push(...responseAssertions);
    }

    // Create a test function
    const testFunction = {
      name: testName,
      body: testFunctionBody
    };

    testFunctions.push(testFunction);
  }

  // Create describe block with beforeEach and afterEach
  const describeBlock = `
describe("${normalizedDescription}", () => {
  let recorder: Recorder;
  let client: ${clientName};

  beforeEach(async function(ctx) {
    recorder = await createRecorder(ctx);
    ${clientParameterDefs.join("\n")}
    client = new ${clientName}(${clientParamNames.join(", ")});
  });

  afterEach(async function() {
    await recorder.stop();
  });

${testFunctions
  .map(
    (fn) => `
  it("should ${fn.name}", async function() {
    ${fn.body.join("\n    ")}
  });
`
  )
  .join("")}
});`;

  sourceFile.addStatements(describeBlock);
  options.generatedFiles.push(sourceFile);
  return sourceFile;
}
