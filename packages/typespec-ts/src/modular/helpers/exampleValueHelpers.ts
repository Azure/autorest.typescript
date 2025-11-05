import {
  SdkHttpOperationExample,
  SdkHttpParameterExampleValue,
  SdkExampleValue,
  SdkClientInitializationType,
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import {
  isAzurePackage,
  NameType,
  normalizeName
} from "@azure-tools/rlc-common";
import { resolveReference } from "../../framework/reference.js";
import { SdkContext } from "../../utils/interfaces.js";
import {
  AzureIdentityDependencies,
  AzureTestDependencies
} from "../external-dependencies.js";
import {
  hasKeyCredential,
  hasTokenCredential
} from "../../utils/credentialUtils.js";
import {
  buildPropertyNameMapper,
  isSpreadBodyParameter
} from "./typeHelpers.js";
import { getClassicalClientName } from "./namingHelpers.js";
import {
  getMethodHierarchiesMap,
  ServiceOperation
} from "../../utils/operationUtil.js";
import { getSubscriptionId } from "../../transform/transfromRLCOptions.js";
import { reportDiagnostic } from "../../index.js";
import { NoTarget } from "@typespec/compiler";
import { SourceFile } from "ts-morph";
import { useContext } from "../../contextManager.js";
import { join } from "path";
import { getOperationFunction } from "./operationHelpers.js";
import { getClientParametersDeclaration } from "./clientHelpers.js";

/**
 * Common interfaces for both samples and tests
 */
export interface CommonValue {
  name: string;
  value: string;
  isOptional: boolean;
  onClient: boolean;
}

export interface ClientEmitOptions {
  client: SdkClientType<SdkServiceOperation>;
  generatedFiles: SourceFile[];
  classicalMethodPrefix?: string;
  subFolder?: string;
  hierarchies?: string[]; // Add hierarchies to track operation path
}

/**
 * Build parameter value map from example
 */
export function buildParameterValueMap(
  example: SdkHttpOperationExample
): Record<string, SdkHttpParameterExampleValue> {
  const parameterMap: Record<string, SdkHttpParameterExampleValue> = {};
  example.parameters.forEach(
    (param) => (parameterMap[param.parameter.serializedName] = param)
  );
  return parameterMap;
}

/**
 * Prepare a common value for samples or tests
 */
export function prepareCommonValue(
  name: string,
  value: SdkExampleValue | string,
  isOptional?: boolean,
  onClient?: boolean
): CommonValue {
  return {
    name: normalizeName(name, NameType.Parameter),
    value: typeof value === "string" ? value : serializeExampleValue(value),
    isOptional: Boolean(isOptional),
    onClient: Boolean(onClient)
  };
}

/**
 * Get credential value for samples
 */
export function getCredentialSampleValue(
  dpgContext: SdkContext,
  initialization: SdkClientInitializationType
): CommonValue | undefined {
  const keyCredential = hasKeyCredential(initialization),
    tokenCredential = hasTokenCredential(initialization);
  const defaultSetting = {
    isOptional: false,
    onClient: true,
    name: "credential"
  };
  if (keyCredential || tokenCredential) {
    if (isAzurePackage({ options: dpgContext.rlcOptions })) {
      // Support DefaultAzureCredential for Azure packages
      return {
        ...defaultSetting,
        value: `new ${resolveReference(
          AzureIdentityDependencies.DefaultAzureCredential
        )}()`
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
          return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() }; } }`
      };
    }
  }
  return undefined;
}

/**
 * Get credential value for tests
 */
export function getCredentialTestValue(
  dpgContext: SdkContext,
  initialization: SdkClientInitializationType
): CommonValue | undefined {
  const createTestCredentialType = resolveReference(
    AzureTestDependencies.createTestCredential
  );
  const keyCredential = hasKeyCredential(initialization),
    tokenCredential = hasTokenCredential(initialization);
  const defaultSetting = {
    isOptional: false,
    onClient: true,
    name: "credential"
  };

  if (keyCredential || tokenCredential) {
    if (dpgContext.arm || hasTokenCredential(initialization)) {
      // Support createTestCredential for ARM/Azure packages
      return {
        ...defaultSetting,
        value: `${createTestCredentialType}()`
      };
    } else if (keyCredential) {
      // Support ApiKeyCredential for non-Azure packages
      return {
        ...defaultSetting,
        value: `{ key: "INPUT_YOUR_KEY_HERE" } `
      };
    } else if (tokenCredential) {
      // Support TokenCredential for non-Azure packages
      return {
        ...defaultSetting,
        value: `{
        getToken: async () => {
            return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: Date.now() };
        }
    } `
      };
    }
  }
  return undefined;
}

/**
 * Serialize example value to string representation
 */
export function serializeExampleValue(value: SdkExampleValue): string {
  let retValue = `{} as any`;
  switch (value.kind) {
    case "string": {
      switch (value.type.kind) {
        case "utcDateTime":
          retValue = `new Date("${value.value}")`;
          break;
        case "bytes": {
          const encode = value.type.encode ?? "base64";
          // TODO: add check for un-supported encode
          retValue = `Buffer.from("${value.value}",  "${encode}")`;
          break;
        }
        default:
          retValue = `"${value.value
            ?.toString()
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"')
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t")
            .replace(/\f/g, "\\f")
            .replace(/>/g, ">")
            .replace(/</g, "<")}"`;
          break;
      }
      break;
    }
    case "boolean":
    case "number":
    case "null":
    case "unknown":
    case "union":
      retValue = `${JSON.stringify(value.value)}`;
      break;
    case "dict":
    case "model": {
      const mapper = buildPropertyNameMapper(value.type);
      const values = [];
      const additionalPropertiesValue =
        value.kind === "model" ? (value.additionalPropertiesValue ?? {}) : {};
      for (const propName in {
        ...value.value
      }) {
        const propValue = value.value[propName];
        if (propValue === undefined || propValue === null) {
          continue;
        }
        const propRetValue =
          `"${mapper.get(propName) ?? propName}": ` +
          serializeExampleValue(propValue);
        values.push(propRetValue);
      }
      const additionalBags = [];
      for (const propName in {
        ...additionalPropertiesValue
      }) {
        const propValue = additionalPropertiesValue[propName];
        if (propValue === undefined || propValue === null) {
          continue;
        }
        const propRetValue =
          `"${mapper.get(propName) ?? propName}": ` +
          serializeExampleValue(propValue);
        additionalBags.push(propRetValue);
      }
      if (additionalBags.length > 0) {
        const name = mapper.get("additionalProperties")
          ? "additionalPropertiesBag"
          : "additionalProperties";
        values.push(`"${name}": {
          ${additionalBags.join(", ")}
          }`);
      }

      retValue = `{${values.join(", ")}}`;
      break;
    }
    case "array": {
      const valuesArr = value.value.map(serializeExampleValue);
      retValue = `[${valuesArr.join(", ")}]`;
      break;
    }
    default:
      break;
  }
  return retValue;
}

/**
 * Escape special characters to spaces (for samples)
 */
export function escapeSpecialCharToSpace(str: string): string {
  if (!str) {
    return str;
  }
  return str.replace(/_|,|\.|\(|\)|'s |\[|\]/g, " ").replace(/\//g, " Or ");
}

/**
 * Generate descriptive names based on operation names
 */
export function getDescriptiveName(
  method: { doc?: string; oriName?: string; name: string },
  exampleName: string,
  type: "sample" | "test"
): string {
  const description = method.doc ?? `execute ${method.oriName ?? method.name}`;
  let descriptiveName =
    description.charAt(0).toLowerCase() + description.slice(1);

  // Only remove trailing dots for test names to avoid redundancy
  if (type === "test") {
    descriptiveName = descriptiveName.replace(/\.$/, "");
    // Include the example name to ensure uniqueness for multiple test cases
    const functionName = normalizeName(exampleName, NameType.Method);
    return `${descriptiveName} for ${functionName}`;
  } else {
    // For samples, preserve the original formatting including periods
    return descriptiveName;
  }
}

/**
 * Common logic for preparing parameters for both samples and tests
 */
export function prepareCommonParameters(
  dpgContext: SdkContext,
  method: ServiceOperation,
  parameterMap: Record<string, SdkHttpParameterExampleValue>,
  topLevelClient: SdkClientType<SdkServiceOperation>,
  isForTest: boolean = false
): CommonValue[] {
  const envType = resolveReference(AzureTestDependencies.env);
  const result: CommonValue[] = [];

  const clientParams = getClientParametersDeclaration(
    topLevelClient,
    dpgContext,
    {
      onClientOnly: true
    }
  );

  for (const param of clientParams) {
    if (param.name === "options" || param.name === "credential") {
      continue;
    }

    const exampleValue: CommonValue = {
      name: param.name === "endpointParam" ? "endpoint" : param.name,
      value: getEnvironmentVariableName(
        param.name,
        getClassicalClientName(topLevelClient)
      ),
      isOptional: Boolean(param.hasQuestionToken),
      onClient: true
    };

    result.push(exampleValue);
  }

  // Handle credentials
  const credentialValue = isForTest
    ? getCredentialTestValue(dpgContext, topLevelClient.clientInitialization)
    : getCredentialSampleValue(dpgContext, topLevelClient.clientInitialization);
  if (credentialValue) {
    result.push(credentialValue);
  }

  let subscriptionIdValue = isForTest
    ? `${envType}.SUBSCRIPTION_ID || "<SUBSCRIPTION_ID>"`
    : `"00000000-0000-0000-0000-00000000000"`;

  // Process required parameters
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
      if (isForTest && !param.optional) {
        // Generate default values for required parameters without examples in tests
        result.push(
          prepareCommonValue(
            param.name,
            `"{Your ${param.name}}"`,
            false,
            param.onClient
          )
        );
      } else if (!isForTest) {
        // Report diagnostic if required parameter is missing in samples
        reportDiagnostic(dpgContext.program, {
          code: "required-sample-parameter",
          format: {
            exampleName: method.oriName ?? method.name,
            paramName: param.name
          },
          target: NoTarget
        });
      }
      continue;
    }

    if (
      param.name.toLowerCase() === "subscriptionid" &&
      dpgContext.arm &&
      exampleValue
    ) {
      // For tests, always use env variable; for samples, use example value
      subscriptionIdValue = isForTest
        ? `${envType}.SUBSCRIPTION_ID || "<SUBSCRIPTION_ID>"`
        : serializeExampleValue(exampleValue.value);
      continue;
    }

    result.push(
      prepareCommonValue(
        exampleValue.parameter.name,
        exampleValue.value,
        param.optional,
        param.onClient
      )
    );
  }

  // Add subscriptionId for ARM clients if needed
  if (dpgContext.arm && getSubscriptionId(dpgContext)) {
    result.push(
      prepareCommonValue("subscriptionId", subscriptionIdValue, false, true)
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
        const propExample = bodyExample.value.value[prop.name];
        if (!propExample) {
          continue;
        }
        result.push(
          prepareCommonValue(
            prop.name,
            propExample,
            prop.optional,
            prop.onClient
          )
        );
      }
    } else {
      result.push(
        prepareCommonValue(
          bodyParam.name,
          bodyExample.value,
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
          prepareCommonValue(
            param.name,
            exampleValue.value,
            true,
            param.onClient
          )
        );
      }
    });

  return result;
}

/**
 * Common client and method iteration logic
 */
export function iterateClientsAndMethods(
  dpgContext: SdkContext,
  callback: (
    dpgContext: SdkContext,
    method: ServiceOperation,
    options: ClientEmitOptions
  ) => SourceFile | undefined
): SourceFile[] {
  const generatedFiles: SourceFile[] = [];
  const clients = dpgContext.sdkPackage.clients;

  for (const client of clients) {
    const methodMap = getMethodHierarchiesMap(dpgContext, client);
    for (const [prefixKey, methods] of methodMap) {
      const hierarchies = prefixKey ? prefixKey.split("/") : [];
      const prefix = hierarchies
        .map((name) => {
          return normalizeName(name, NameType.Property);
        })
        .join(".");
      for (const method of methods) {
        callback(dpgContext, method, {
          client,
          generatedFiles,
          classicalMethodPrefix: prefix,
          subFolder:
            clients.length > 1
              ? normalizeName(getClassicalClientName(client), NameType.File)
              : undefined,
          hierarchies: hierarchies
        });
      }
    }
  }
  return generatedFiles;
}

/**
 * Generate common method call logic
 */
export function generateMethodCall(
  method: ServiceOperation,
  parameters: CommonValue[],
  options: ClientEmitOptions,
  dpgContext?: SdkContext
): { methodCall: string; clientParams: string[]; clientParamDefs: string[] } {
  // Prepare client-level parameters
  const clientParamValues = parameters.filter((p) => p.onClient);
  const clientParams: string[] = clientParamValues
    .filter((p) => !p.isOptional)
    .map((param) => param.name);
  const clientParamDefs: string[] = clientParamValues
    .filter((p) => !p.isOptional)
    .map((param) => `const ${param.name} = ${param.value};`);

  // Prepare operation-level parameters
  const methodParamValues = parameters.filter((p) => !p.onClient);

  let methodParams: string[] = [];

  // If dpgContext is provided, reorder parameters according to function signature
  if (dpgContext) {
    // Get the actual function signature parameter order
    const operationFunction = getOperationFunction(
      dpgContext,
      [options.hierarchies ?? [], method],
      "Client"
    );

    // Extract parameter names from the function signature (excluding context and options)
    const signatureParamNames =
      operationFunction.parameters
        ?.filter(
          (p) =>
            p.name !== "context" &&
            !p.type?.toString().includes("OptionalParams")
        )
        .map((p) => p.name) ?? [];

    // Create a map for quick lookup of parameter values by name
    const paramValueMap = new Map(methodParamValues.map((p) => [p.name, p]));

    // Reorder methodParamValues according to the signature order
    const orderedRequiredParams = signatureParamNames
      .map((name) => paramValueMap.get(name))
      .filter((p): p is CommonValue => p !== undefined && !p.isOptional);

    methodParams = orderedRequiredParams.map((p) => `${p.value}`);
  } else {
    // Original logic when dpgContext is not provided
    methodParams = methodParamValues
      .filter((p) => !p.isOptional)
      .map((p) => `${p.value}`);
  }

  const optionalParams = methodParamValues
    .filter((p) => p.isOptional)
    .map((param) => `${param.name}: ${param.value}`);
  if (optionalParams.length > 0) {
    methodParams.push(`{${optionalParams.join(", ")}}`);
  }

  const prefix = options.classicalMethodPrefix
    ? `${options.classicalMethodPrefix}.`
    : "";
  const methodCall = `client.${prefix}${normalizeName(method.oriName ?? method.name, NameType.Property)}(${methodParams.join(", ")})`;

  return { methodCall, clientParams, clientParamDefs };
}

/**
 * Common source file creation logic
 */
export function createSourceFile(
  dpgContext: SdkContext,
  method: ServiceOperation,
  options: ClientEmitOptions,
  type: "sample" | "test",
  fileName: string
): SourceFile {
  const project = useContext("outputProject");
  const operationPrefix = `${options.classicalMethodPrefix ?? ""} ${
    method.oriName ?? method.name
  }`;
  const baseFolder =
    type === "sample" ? "samples-dev" : join("test", "generated");
  const folder = join(
    dpgContext.generationPathDetail?.rootDir ?? "",
    baseFolder,
    options.subFolder ?? ""
  );
  const fileExtension = type === "sample" ? ".ts" : ".spec.ts";
  const normalizedFileName = normalizeName(
    fileName || `${operationPrefix} ${type}`,
    NameType.File
  );

  return project.createSourceFile(
    join(folder, `${normalizedFileName}${fileExtension}`),
    "",
    { overwrite: true }
  );
}

/**
 * Generate assertions for a specific value (recursive for nested objects)
 */
export function generateAssertionsForValue(
  value: SdkExampleValue,
  path: string,
  maxDepth: number = 3,
  currentDepth: number = 0
): string[] {
  const assertions: string[] = [];

  // Prevent infinite recursion for deeply nested objects
  if (currentDepth >= maxDepth) {
    return assertions;
  }

  switch (value.kind) {
    case "string": {
      switch (value.type.kind) {
        case "utcDateTime":
          assertions.push(
            `assert.strictEqual(${path}, new Date("${value.value}"));`
          );
          break;
        case "bytes": {
          const encode = value.type.encode ?? "base64";
          assertions.push(
            `assert.equal(${path}, Buffer.from("${value.value}",  "${encode}"));`
          );
          break;
        }
        default: {
          const retValue = `"${value.value
            ?.toString()
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"')
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t")
            .replace(/\f/g, "\\f")
            .replace(/>/g, ">")
            .replace(/</g, "<")}"`;
          assertions.push(`assert.strictEqual(${path}, ${retValue});`);
          break;
        }
      }
      break;
    }
    case "boolean":
    case "number":
      assertions.push(
        `assert.strictEqual(${path}, ${JSON.stringify(value.value)});`
      );
      break;
    case "unknown":
      assertions.push(`assert.equal(${path}, ${JSON.stringify(value.value)});`);
      break;
    case "array":
      if (value.value && value.value.length > 0) {
        assertions.push(`assert.ok(Array.isArray(${path}));`);
        assertions.push(
          `assert.strictEqual(${path}.length, ${value.value.length});`
        );

        // Assert on first few items to avoid overly verbose tests
        const itemsToCheck = Math.min(value.value.length, 2);
        for (let i = 0; i < itemsToCheck; i++) {
          const item = value.value[i];
          if (item) {
            const itemAssertions = generateAssertionsForValue(
              item,
              `${path}[${i}]`,
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
      if (value.value && typeof value.value === "object") {
        const entries = Object.entries(value.value);
        const propertiesToCheck = entries;

        for (const [key, val] of propertiesToCheck) {
          if (val && typeof val === "object" && "kind" in val) {
            const propPath = `${path}.${key}`;
            const propAssertions = generateAssertionsForValue(
              val as SdkExampleValue,
              propPath,
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
          maxDepth,
          currentDepth
        );
        assertions.push(...unionAssertions);
      }
      break;
  }

  return assertions;
}

/**
 * Generate response assertions based on the example responses
 */
export function generateResponseAssertions(
  example: SdkHttpOperationExample,
  resultVariableName: string,
  isPaging: boolean = false
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

  if (isPaging) {
    // For paging operations, the response body should have a 'value' array
    if (responseBody.kind === "model" || responseBody.kind === "dict") {
      const responseValue = responseBody.value as Record<
        string,
        SdkExampleValue
      >;
      const valueArray = responseValue?.["value"];

      if (valueArray && valueArray.kind === "array" && valueArray.value) {
        // Assert on the length of the collected results
        assertions.push(
          `assert.strictEqual(${resultVariableName}.length, ${valueArray.value.length});`
        );

        // Assert on the first item if available
        if (valueArray.value.length > 0) {
          const firstItem = valueArray.value[0];
          if (firstItem) {
            const itemAssertions = generateAssertionsForValue(
              firstItem,
              `${resultVariableName}[0]`,
              2, // Limit depth for paging items
              0
            );
            assertions.push(...itemAssertions);
          }
        }
      }
    }
  } else {
    // Generate assertions based on response body structure
    const responseAssertions = generateAssertionsForValue(
      responseBody,
      resultVariableName
    );
    assertions.push(...responseAssertions);
  }

  return assertions;
}

function getEnvironmentVariableName(
  paramName: string,
  clientName?: string
): string {
  // Remove "Param" suffix if present
  const cleanName = paramName.replace(/Param$/, "");

  // Remove "Client" suffix from client name if present and convert to UPPER_SNAKE_CASE
  let prefix = "";
  if (clientName) {
    const cleanClientName = clientName.replace(/Client$/, "");
    prefix =
      cleanClientName
        .replace(/([A-Z])/g, "_$1")
        .toUpperCase()
        .replace(/^_/, "") + "_";
  }

  // Convert camelCase to UPPER_SNAKE_CASE
  const envVarName = cleanName
    .replace(/([A-Z])/g, "_$1")
    .toUpperCase()
    .replace(/^_/, "");

  return `process.env.${prefix}${envVarName} || ""`;
}
