import {
    SourceFile
} from "ts-morph";
import { resolveReference } from "../framework/reference.js";
import { SdkContext } from "../utils/interfaces.js";
import {
    SdkClientType,
    SdkHttpOperationExample,
    SdkHttpParameterExampleValue,
    SdkServiceOperation,
    SdkExampleValue
} from "@azure-tools/typespec-client-generator-core";
import {
    NameType,
    normalizeName
} from "@azure-tools/rlc-common";
import { useContext } from "../contextManager.js";
import { join } from "path";
import { existsSync, rmSync } from "fs";
import { AzureIdentityDependencies } from "../modular/external-dependencies.js";
import {
    isSpreadBodyParameter
} from "./helpers/typeHelpers.js";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import {
    hasTokenCredential,
    hasKeyCredential
} from "../utils/credentialUtils.js";
import {
    getMethodHierarchiesMap,
    ServiceOperation
} from "../utils/operationUtil.js";
import { getSubscriptionId } from "../transform/transfromRLCOptions.js";

/**
 * Generate descriptive test names based on operation names (same as samples)
 */
function getDescriptiveTestName(method: ServiceOperation, exampleName: string): string {
    // Use the same description logic as samples
    const description = method.doc ?? `execute ${method.oriName ?? method.name}`;
    let descriptiveName = description.charAt(0).toLowerCase() + description.slice(1);

    // Remove any trailing dots
    descriptiveName = descriptiveName.replace(/\.$/, '');

    // Include the example name to ensure uniqueness for multiple test cases
    const functionName = normalizeName(exampleName, NameType.Method);
    return `${descriptiveName} for ${functionName}`;
}

/**
 * Interfaces for test generations
 */
interface TestCaseValue {
    name: string;
    value: string;
    isOptional: boolean;
    onClient: boolean;
}

interface EmitTestOptions {
    topLevelClient: SdkClientType<SdkServiceOperation>;
    generatedFiles: SourceFile[];
    classicalMethodPrefix?: string;
    subFolder?: string;
}

/**
 * Clean up the test/generated folder before generating new tests
 */
function cleanupTestFolder(dpgContext: SdkContext, clients: SdkClientType<SdkServiceOperation>[]) {
    const baseTestFolder = join(
        dpgContext.generationPathDetail?.rootDir ?? "",
        "test",
        "generated"
    );

    // If there are multiple clients, clean up subfolders
    if (clients.length > 1) {
        for (const client of clients) {
            const subFolder = normalizeName(getClassicalClientName(client), NameType.File);
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
    const generatedFiles: SourceFile[] = [];
    const clients = dpgContext.sdkPackage.clients;

    // Clean up the test/generated folder before generating new tests
    cleanupTestFolder(dpgContext, clients);

    // Generate test utilities (recordedClient, etc.)
    generateTestUtilities(dpgContext, generatedFiles);

    for (const client of dpgContext.sdkPackage.clients) {
        emitClientTests(dpgContext, client, {
            topLevelClient: client,
            generatedFiles,
            subFolder:
                clients.length > 1
                    ? normalizeName(getClassicalClientName(client), NameType.File)
                    : undefined
        });
    }
    return generatedFiles;
}

/**
 * Generate test utilities like recordedClient.ts
 */
function generateTestUtilities(dpgContext: SdkContext, generatedFiles: SourceFile[]) {
    const project = useContext("outputProject");
    const isEsm = dpgContext.rlcOptions?.moduleKind === "esm";

    // Generate test/public/utils/recordedClient.ts
    const utilsFolder = join(
        dpgContext.generationPathDetail?.rootDir ?? "",
        "test",
        "public",
        "utils"
    );

    const recordedClientFile = project.createSourceFile(
        join(utilsFolder, "recordedClient.ts"),
        "",
        { overwrite: true }
    );

    // Generate the recorded client content based on module type
    const recordedClientContent = isEsm ? `
import {
  Recorder,
  RecorderStartOptions,
  VitestTestContext,
} from "@azure-tools/test-recorder";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderEnvSetup: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
};

/**
 * creates the recorder and reads the environment variables from the \`.env\` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */
export async function createRecorder(context: VitestTestContext): Promise<Recorder> {
  const recorder = new Recorder(context);
  await recorder.start(recorderEnvSetup);
  return recorder;
}
` : `
import { Context } from "mocha";
import { Recorder, RecorderStartOptions } from "@azure-tools/test-recorder";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderEnvSetup: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
};

/**
 * creates the recorder and reads the environment variables from the \`.env\` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */
export async function createRecorder(context: Context): Promise<Recorder> {
  const recorder = new Recorder(context.currentTest);
  await recorder.start(recorderEnvSetup);
  return recorder;
}
`;

    recordedClientFile.addStatements(recordedClientContent);
    generatedFiles.push(recordedClientFile);
}

function emitClientTests(
    dpgContext: SdkContext,
    client: SdkClientType<SdkServiceOperation>,
    options: EmitTestOptions
) {
    const methodMap = getMethodHierarchiesMap(dpgContext, client);
    for (const [prefixKey, operations] of methodMap) {
        const prefix = prefixKey
            .split("/")
            .map((name) => {
                return normalizeName(name, NameType.Property);
            })
            .join(".");
        for (const op of operations) {
            emitMethodTests(dpgContext, op, {
                ...options,
                classicalMethodPrefix: prefix
            });
        }
    }
}

function emitMethodTests(
    dpgContext: SdkContext,
    method: ServiceOperation,
    options: EmitTestOptions
): SourceFile | undefined {
    const examples = method.operation.examples ?? [];
    if (examples.length === 0) {
        return;
    }
    const project = useContext("outputProject");
    const operationPrefix = `${options.classicalMethodPrefix ?? ""} ${method.oriName ?? method.name
        }`;
    const testFolder = join(
        dpgContext.generationPathDetail?.rootDir ?? "",
        "test",
        "generated",
        options.subFolder ?? ""
    );
    const fileName = normalizeName(`${operationPrefix} Test`, NameType.File);
    const sourceFile = project.createSourceFile(
        join(testFolder, `${fileName}.spec.ts`),
        "",
        {
            overwrite: true
        }
    );

    // Add imports for testing framework
    sourceFile.addImportDeclaration({
        moduleSpecifier: "@azure-tools/test-recorder",
        namedImports: ["Recorder"]
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: "../public/utils/recordedClient.js",
        namedImports: ["createRecorder"]
    });

    // Check module kind and add appropriate test framework imports
    const isEsm = dpgContext.rlcOptions?.moduleKind === "esm";
    if (isEsm) {
        sourceFile.addImportDeclaration({
            moduleSpecifier: "vitest",
            namedImports: ["assert", "beforeEach", "afterEach", "it", "describe"]
        });
    } else {
        sourceFile.addImportDeclaration({
            moduleSpecifier: "chai",
            namedImports: ["assert"]
        });
        sourceFile.addImportDeclaration({
            moduleSpecifier: "mocha",
            namedImports: ["Context"]
        });
    }

    // Import the client
    if (dpgContext.rlcOptions?.packageDetails?.name) {
        sourceFile.addImportDeclaration({
            moduleSpecifier: dpgContext.rlcOptions?.packageDetails?.name,
            namedImports: [getClassicalClientName(options.topLevelClient)]
        });
    }

    // Import Azure Identity if needed
    if (hasTokenCredential(options.topLevelClient.clientInitialization)) {
        resolveReference(AzureIdentityDependencies.DefaultAzureCredential);
        sourceFile.addImportDeclaration({
            moduleSpecifier: "@azure/identity",
            namedImports: ["DefaultAzureCredential"]
        });
    } const testFunctions = [];

    // Create test describe block
    const methodDescription = method.doc ?? `test ${method.oriName ?? method.name}`;
    let normalizedDescription = methodDescription.charAt(0).toLowerCase() + methodDescription.slice(1);

    // Remove any trailing dots from describe block
    normalizedDescription = normalizedDescription.replace(/\.$/, '');

    // Generate test functions for each example
    for (const example of examples) {
        const testFunctionBody: string[] = [];
        // Create a more descriptive test name based on the operation (same as samples)
        const testName = getDescriptiveTestName(method, example.name);

        const parameterMap: Record<string, SdkHttpParameterExampleValue> =
            buildParameterValueMap(example);
        const parameters = prepareTestParameters(
            dpgContext,
            method,
            parameterMap,
            options.topLevelClient
        );

        // Prepare client-level parameters
        const clientParamValues = parameters.filter((p) => p.onClient);
        const uniqueClientParams: Array<{ name: string, value: string, isOptional: boolean }> = [];

        // Collect unique parameters, preferring DefaultAzureCredential for credential parameters
        clientParamValues.forEach((param) => {
            const existingIndex = uniqueClientParams.findIndex(p => p.name === param.name);
            if (existingIndex >= 0) {
                // For credential parameters, prefer DefaultAzureCredential over string values
                if (param.name === "credential") {
                    if (param.value.includes("DefaultAzureCredential")) {
                        uniqueClientParams[existingIndex] = param;
                    }
                    // Otherwise keep the existing one
                } else {
                    // For other parameters, replace with the new one
                    uniqueClientParams[existingIndex] = param;
                }
            } else {
                uniqueClientParams.push(param);
            }
        });

        const clientParams: string[] = uniqueClientParams
            .filter((p) => !p.isOptional)
            .map((param) => {
                testFunctionBody.push(`const ${param.name} = ${param.value};`);
                return param.name;
            });
        const optionalClientParams = uniqueClientParams
            .filter((p) => p.isOptional)
            .map((param) => `${param.name}: ${param.value}`);
        if (optionalClientParams.length > 0) {
            testFunctionBody.push(
                `const clientOptions = {${optionalClientParams.join(", ")}};`
            );
            clientParams.push("clientOptions");
        }
        testFunctionBody.push(
            `const client = new ${getClassicalClientName(
                options.topLevelClient
            )}(${clientParams.join(", ")});`
        );

        // Prepare operation-level parameters
        const methodParamValues = parameters.filter((p) => !p.onClient);
        const methodParams = methodParamValues
            .filter((p) => !p.isOptional)
            .map((p) => `${p.value}`);
        const optionalParams = methodParamValues
            .filter((p) => p.isOptional)
            .map((param) => `${param.name}: ${param.value}`);
        if (optionalParams.length > 0) {
            methodParams.push(`{${optionalParams.join(", ")}}`);
        }
        const prefix = options.classicalMethodPrefix
            ? `${options.classicalMethodPrefix}.`
            : "";
        const isPaging = method.kind === "paging";
        const isLRO = method.kind === "lro" || method.kind === "lropaging";
        const methodCall = `client.${prefix}${normalizeName(method.oriName ?? method.name, NameType.Property)}(${methodParams.join(
            ", "
        )})`;

        // Add method call based on type
        if (isPaging) {
            testFunctionBody.push(`const resArray = new Array();`);
            testFunctionBody.push(
                `for await (const item of ${methodCall}) { resArray.push(item); }`
            );
            testFunctionBody.push(`assert.ok(resArray);`);
            // Add response assertions for paging results
            const pagingAssertions = generatePagingResponseAssertions(example, dpgContext, "resArray");
            testFunctionBody.push(...pagingAssertions);
        } else if (isLRO) {
            testFunctionBody.push(`const poller = await ${methodCall};`);
            testFunctionBody.push(`const result = await poller.pollUntilDone();`);
            testFunctionBody.push(`assert.ok(result);`);
            // Add response assertions for LRO results
            const responseAssertions = generateResponseAssertions(example, dpgContext, "result");
            testFunctionBody.push(...responseAssertions);
        } else if (method.response.type === undefined) {
            // skip response handling for void methods
            testFunctionBody.push(`await ${methodCall};`);
            testFunctionBody.push(`\/* Test passes if no exception is thrown *\/`);
        } else {
            testFunctionBody.push(`const result = await ${methodCall};`);
            testFunctionBody.push(`assert.ok(result);`);
            // Add response assertions for non-paging results
            const responseAssertions = generateResponseAssertions(example, dpgContext, "result");
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

  beforeEach(async function(${isEsm ? "ctx" : "this: Context"}) {
    ${isEsm ? "recorder = await createRecorder(ctx);" : "recorder = await createRecorder(this);"}
  });

  afterEach(async function() {
    await recorder.stop();
  });

${testFunctions.map(fn => `
  it("should ${fn.name}", async function() {
    ${fn.body.join("\n    ")}
  });
`).join("")}
});`;

    sourceFile.addStatements(describeBlock);
    options.generatedFiles.push(sourceFile);
    return sourceFile;
}

function buildParameterValueMap(example: SdkHttpOperationExample) {
    const result: Record<string, SdkHttpParameterExampleValue> = {};
    for (const param of example.parameters) {
        result[param.parameter.serializedName] = param;
    }
    return result;
}

function prepareTestParameters(
    dpgContext: SdkContext,
    method: ServiceOperation,
    parameterMap: Record<string, SdkHttpParameterExampleValue>,
    topLevelClient: SdkClientType<SdkServiceOperation>
): TestCaseValue[] {
    const result: TestCaseValue[] = [];

    // Handle credentials similar to samples
    const credentialTestValue = getCredentialTestValue(
        dpgContext,
        topLevelClient.clientInitialization
    );
    if (credentialTestValue) {
        result.push(credentialTestValue);
    }

    let subscriptionIdValue = '"{Your subscriptionId}"';

    // Process required parameters (following samples pattern)
    for (const param of method.operation.parameters) {
        if (
            param.optional === true ||
            param.type.kind === "constant" ||
            param.clientDefaultValue
        ) {
            continue;
        }

        const exampleValue = parameterMap[param.serializedName];
        if (!exampleValue || !exampleValue.value) {
            // Generate default values for required parameters without examples
            if (!param.optional) {
                result.push(
                    prepareTestValue(
                        dpgContext,
                        param.name,
                        `"{Your ${param.name}}"`,
                        false,
                        param.onClient
                    )
                );
            }
            continue;
        }

        if (
            param.name.toLowerCase() === "subscriptionid" &&
            dpgContext.arm &&
            exampleValue
        ) {
            subscriptionIdValue = serializeExampleValue(exampleValue.value, dpgContext);
            continue;
        }

        result.push(
            prepareTestValue(
                dpgContext,
                param.name,
                serializeExampleValue(exampleValue.value, dpgContext),
                param.optional,
                param.onClient
            )
        );
    }

    // Add subscriptionId for ARM clients if ARM clients need it
    if (dpgContext.arm && getSubscriptionId(dpgContext)) {
        result.push(
            prepareTestValue(dpgContext, "subscriptionId", subscriptionIdValue, false, true)
        );
    }

    // Handle body parameters
    const bodyParam = method.operation.bodyParam;
    const bodySerializeName = bodyParam?.serializedName;
    const bodyExample = parameterMap[bodySerializeName ?? ""];
    if (bodySerializeName && bodyExample && bodyExample.value) {
        if (
            isSpreadBodyParameter(bodyParam) &&
            bodyParam.type.kind === "model" &&
            bodyExample.value.kind === "model"
        ) {
            for (const prop of bodyParam.type.properties) {
                const propValue = bodyExample.value.value[prop.name];
                if (propValue) {
                    result.push(
                        prepareTestValue(
                            dpgContext,
                            prop.name,
                            serializeExampleValue(propValue, dpgContext),
                            prop.optional,
                            false
                        )
                    );
                }
            }
        } else {
            result.push(
                prepareTestValue(
                    dpgContext,
                    bodyParam.name,
                    serializeExampleValue(bodyExample.value, dpgContext),
                    bodyParam.optional,
                    bodyParam.onClient
                )
            );
        }
    }

    // Handle optional parameters that have examples
    method.operation.parameters
        .filter(
            (param) =>
                param.optional === true &&
                parameterMap[param.serializedName] &&
                !param.clientDefaultValue
        )
        .forEach((param) => {
            const exampleValue = parameterMap[param.serializedName];
            if (exampleValue && exampleValue.value) {
                result.push(
                    prepareTestValue(
                        dpgContext,
                        param.name,
                        serializeExampleValue(exampleValue.value, dpgContext),
                        true,
                        param.onClient
                    )
                );
            }
        });

    return result;
}

function getCredentialTestValue(
    dpgContext: SdkContext,
    initialization: any
): TestCaseValue | undefined {
    const keyCredential = hasKeyCredential(initialization),
        tokenCredential = hasTokenCredential(initialization);
    const defaultSetting = {
        isOptional: false,
        onClient: true,
        name: "credential"
    };

    if (keyCredential || tokenCredential) {
        if (dpgContext.arm || hasTokenCredential(initialization)) {
            // Support DefaultAzureCredential for ARM/Azure packages
            return {
                ...defaultSetting,
                value: "new DefaultAzureCredential()"
            };
        } else if (keyCredential) {
            // Support ApiKeyCredential for non-Azure packages
            return {
                ...defaultSetting,
                value: `{ key: "INPUT_YOUR_KEY_HERE" }`
            };
        } else if (tokenCredential) {
            // Support TokenCredential for non-Azure packages
            return {
                ...defaultSetting,
                value: `{ getToken: async () => {
          return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: Date.now() }; } }`
            };
        }
    }
    return undefined;
}

function prepareTestValue(
    dpgContext: SdkContext,
    name: string,
    value: SdkExampleValue | string,
    isOptional?: boolean,
    onClient?: boolean
): TestCaseValue {
    return {
        name,
        value: typeof value === "string" ? value : serializeExampleValue(value, dpgContext),
        isOptional: isOptional ?? true,
        onClient: onClient ?? false
    };
}

function serializeExampleValue(value: SdkExampleValue, dpgContext: SdkContext): string {
    switch (value.kind) {
        case "string":
            return `"${value.value}"`;
        case "number":
            return value.value.toString();
        case "boolean":
            return value.value.toString();
        case "null":
            return "null";
        case "array":
            return `[${value.value.map((v: SdkExampleValue) => serializeExampleValue(v, dpgContext)).join(", ")}]`;
        case "dict":
            const dictProps = Object.entries(value.value)
                .map(([key, val]) => `"${key}": ${serializeExampleValue(val as SdkExampleValue, dpgContext)}`)
                .join(", ");
            return `{${dictProps}}`;
        case "model":
            const props = Object.entries(value.value)
                .map(([key, val]) => `${key}: ${serializeExampleValue(val, dpgContext)}`)
                .join(", ");
            return `{${props}}`;
        case "union":
            return serializeExampleValue(value.value as SdkExampleValue, dpgContext);
        default:
            throw new Error(`Unknown example value kind: ${(value as any).kind}`);
    }
}

/**
 * Generate response assertions specifically for paging operations
 */
function generatePagingResponseAssertions(
    example: SdkHttpOperationExample,
    dpgContext: SdkContext,
    resultVariableName: string
): string[] {
    const assertions: string[] = [];

    // Get the responses
    const responses = example.responses;
    if (!responses || Object.keys(responses).length === 0) {
        return assertions;
    }

    // TypeSpec SDK uses numeric indices for responses, get the first response
    const responseKeys = Object.keys(responses);
    if (responseKeys.length === 0) {
        return assertions;
    }

    const firstResponseKey = responseKeys[0];
    if (!firstResponseKey) {
        return assertions;
    }

    const firstResponse = (responses as any)[firstResponseKey];
    const responseBody = firstResponse?.bodyValue;

    if (!responseBody) {
        return assertions;
    }

    // For paging operations, the response body should have a 'value' array
    if (responseBody.kind === "model" || responseBody.kind === "dict") {
        const responseValue = responseBody.value as Record<string, SdkExampleValue>;
        const valueArray = responseValue?.["value"];
        
        if (valueArray && valueArray.kind === "array" && valueArray.value) {
            // Assert on the length of the collected results
            assertions.push(`assert.strictEqual(${resultVariableName}.length, ${valueArray.value.length});`);
            
            // Assert on the first item if available
            if (valueArray.value.length > 0) {
                const firstItem = valueArray.value[0];
                if (firstItem) {
                    const itemAssertions = generateAssertionsForValue(
                        firstItem,
                        `${resultVariableName}[0]`,
                        dpgContext,
                        2, // Limit depth for paging items
                        0
                    );
                    assertions.push(...itemAssertions);
                }
            }
        }
    }

    return assertions;
}

/**
 * Generate response assertions based on the example responses
 */
function generateResponseAssertions(
    example: SdkHttpOperationExample,
    dpgContext: SdkContext,
    resultVariableName: string
): string[] {
    const assertions: string[] = [];

    // Get the responses
    const responses = example.responses;
    if (!responses || Object.keys(responses).length === 0) {
        return assertions;
    }

    // TypeSpec SDK uses numeric indices for responses, get the first response
    const responseKeys = Object.keys(responses);
    if (responseKeys.length === 0) {
        return assertions;
    }

    const firstResponseKey = responseKeys[0];
    if (!firstResponseKey) {
        return assertions;
    }

    const firstResponse = (responses as any)[firstResponseKey];
    const responseBody = firstResponse?.bodyValue;

    if (!responseBody) {
        return assertions;
    }

    // Generate assertions based on response body structure
    const responseAssertions = generateAssertionsForValue(
        responseBody,
        resultVariableName,
        dpgContext
    );

    assertions.push(...responseAssertions);
    return assertions;
}

/**
 * Generate assertions for a specific value (recursive for nested objects)
 */
function generateAssertionsForValue(
    value: SdkExampleValue,
    path: string,
    dpgContext: SdkContext,
    maxDepth: number = 3,
    currentDepth: number = 0
): string[] {
    const assertions: string[] = [];

    // Prevent infinite recursion for deeply nested objects
    if (currentDepth >= maxDepth) {
        return assertions;
    }

    switch (value.kind) {
        case "string":
            if (value.value && value.value.trim() !== "") {
                assertions.push(`assert.strictEqual(${path}, "${value.value}");`);
            }
            break;

        case "number":
            assertions.push(`assert.strictEqual(${path}, ${value.value});`);
            break;

        case "boolean":
            assertions.push(`assert.strictEqual(${path}, ${value.value});`);
            break;

        case "array":
            if (value.value && value.value.length > 0) {
                assertions.push(`assert.ok(Array.isArray(${path}));`);
                assertions.push(`assert.strictEqual(${path}.length, ${value.value.length});`);

                // Assert on first few items to avoid overly verbose tests
                const itemsToCheck = Math.min(value.value.length, 2);
                for (let i = 0; i < itemsToCheck; i++) {
                    const item = value.value[i];
                    if (item) {
                        const itemAssertions = generateAssertionsForValue(
                            item,
                            `${path}[${i}]`,
                            dpgContext,
                            maxDepth,
                            currentDepth + 1
                        );
                        assertions.push(...itemAssertions);
                    }
                }
            }
            break;

        case "model":
        case "dict":
            if (value.value && typeof value.value === 'object') {
                const entries = Object.entries(value.value);

                // Assert on key properties to avoid overly verbose tests
                const propertiesToCheck = entries.slice(0, 5); // Limit to first 5 properties

                for (const [key, val] of propertiesToCheck) {
                    if (val && typeof val === 'object' && 'kind' in val) {
                        const propPath = `${path}.${key}`;
                        const propAssertions = generateAssertionsForValue(
                            val as SdkExampleValue,
                            propPath,
                            dpgContext,
                            maxDepth,
                            currentDepth + 1
                        );
                        assertions.push(...propAssertions);
                    }
                }
            }
            break;

        case "null":
            assertions.push(`assert.strictEqual(${path}, null);`);
            break;

        case "union":
            // For unions, generate assertions for the actual value
            if (value.value) {
                const unionAssertions = generateAssertionsForValue(
                    value.value as SdkExampleValue,
                    path,
                    dpgContext,
                    maxDepth,
                    currentDepth
                );
                assertions.push(...unionAssertions);
            }
            break;
    }

    return assertions;
}
