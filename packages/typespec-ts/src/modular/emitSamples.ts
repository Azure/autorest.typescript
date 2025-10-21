import {
  StructureKind,
  FunctionDeclarationStructure,
  SourceFile
} from "ts-morph";

import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkHttpOperationExample,
  SdkHttpParameterExampleValue,
  SdkServiceOperation,
  SdkExampleValue,
  SdkClientInitializationType
} from "@azure-tools/typespec-client-generator-core";
import {
  isAzurePackage,
  NameType,
  normalizeName
} from "@azure-tools/rlc-common";
import { useContext } from "../contextManager.js";
import { join } from "path";

import { reportDiagnostic } from "../index.js";
import { NoTarget } from "@typespec/compiler";
import { getServers } from "@typespec/http";
import { getDefaultService } from "../utils/modelUtils.js";
import {
  buildPropertyNameMapper,
  isSpreadBodyParameter
} from "./helpers/typeHelpers.js";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import {
  hasKeyCredential,
  hasTokenCredential
} from "../utils/credentialUtils.js";
import {
  getMethodHierarchiesMap,
  ServiceOperation
} from "../utils/operationUtil.js";
import { getSubscriptionId } from "../transform/transfromRLCOptions.js";

/**
 * Interfaces for samples generations
 */
interface ExampleValue {
  name: string;
  value: string;
  isOptional: boolean;
  onClient: boolean;
}

interface EmitSampleOptions {
  topLevelClient: SdkClientType<SdkServiceOperation>;
  generatedFiles: SourceFile[];
  classicalMethodPrefix?: string;
  subFolder?: string;
}
/**
 * Helpers to emit samples
 */
export function emitSamples(dpgContext: SdkContext): SourceFile[] {
  const generatedFiles: SourceFile[] = [];
  const clients = dpgContext.sdkPackage.clients;
  for (const client of dpgContext.sdkPackage.clients) {
    emitClientSamples(dpgContext, client, {
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

function emitClientSamples(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  options: EmitSampleOptions
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
      emitMethodSamples(dpgContext, op, {
        ...options,
        classicalMethodPrefix: prefix
      });
    }
  }
}

function emitMethodSamples(
  dpgContext: SdkContext,
  method: ServiceOperation,
  options: EmitSampleOptions
): SourceFile | undefined {
  const examples = method.operation.examples ?? [];
  if (examples.length === 0) {
    return;
  }
  const project = useContext("outputProject");
  const operationPrefix = `${options.classicalMethodPrefix ?? ""} ${
    method.oriName ?? method.name
  }`;
  const sampleFolder = join(
    dpgContext.generationPathDetail?.rootDir ?? "",
    "samples-dev",
    options.subFolder ?? ""
  );
  const fileName = normalizeName(`${operationPrefix} Sample`, NameType.File);
  const sourceFile = project.createSourceFile(
    join(sampleFolder, `${fileName}.ts`),
    "",
    {
      overwrite: true
    }
  );
  const exampleFunctions = [];
  // TODO: remove hard-coded for package
  if (dpgContext.rlcOptions?.packageDetails?.name) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: dpgContext.rlcOptions?.packageDetails?.name,
      namedImports: [getClassicalClientName(options.topLevelClient)]
    });
  }

  // Check if we need DefaultAzureCredential import
  const needsCredentialImport =
    isAzurePackage({ options: dpgContext.rlcOptions }) &&
    (hasKeyCredential(options.topLevelClient.clientInitialization) ||
      hasTokenCredential(options.topLevelClient.clientInitialization));

  if (needsCredentialImport) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: "@azure/identity",
      namedImports: ["DefaultAzureCredential"]
    });
  }

  // Check if we need dotenv (only if there are server parameters)
  const hasServerParameters = (() => {
    const program = dpgContext.program;
    const serviceNs = getDefaultService(program)?.type;
    if (serviceNs) {
      const host = getServers(program, serviceNs);
      return (
        host &&
        host?.[0] &&
        host?.[0]?.parameters &&
        host[0].parameters.size > 0
      );
    }
    return false;
  })();

  // Add dotenv import and config only if needed
  if (hasServerParameters) {
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
    const exampleFunctionType = {
      name: exampleName,
      returnType: "Promise<void>",
      body: exampleFunctionBody
    };
    const parameterMap: Record<string, SdkHttpParameterExampleValue> =
      buildParameterValueMap(example);
    const parameters = prepareExampleParameters(
      dpgContext,
      method,
      parameterMap,
      options.topLevelClient
    );

    // prepare client-level parameters
    const clientParamValues = parameters.filter((p) => p.onClient);
    const clientParams: string[] = clientParamValues
      .filter((p) => !p.isOptional)
      .map((param) => {
        exampleFunctionBody.push(`const ${param.name} = ${param.value};`);
        return param.name;
      });
    const optionalClientParams = clientParamValues
      .filter((p) => p.isOptional)
      .map((param) => `${param.name}: ${param.value}`);
    if (optionalClientParams.length > 0) {
      exampleFunctionBody.push(
        `const clientOptions = {${optionalClientParams.join(", ")}};`
      );
      clientParams.push("clientOptions");
    }
    exampleFunctionBody.push(
      `const client = new ${getClassicalClientName(
        options.topLevelClient
      )}(${clientParams.join(", ")});`
    );

    // prepare operation-level parameters
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
    const methodCall = `client.${prefix}${normalizeName(method.oriName ?? method.name, NameType.Property)}(${methodParams.join(
      ", "
    )})`;
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
    const description =
      method.doc ?? `execute ${method.oriName ?? method.name}`;
    const normalizedDescription =
      description.charAt(0).toLowerCase() + description.slice(1);
    const functionDeclaration: FunctionDeclarationStructure = {
      returnType: exampleFunctionType.returnType,
      kind: StructureKind.Function,
      isAsync: true,
      name: exampleFunctionType.name,
      statements: exampleFunctionType.body,
      docs: [
        `This sample demonstrates how to ${normalizedDescription}\n\n@summary ${normalizedDescription}\nx-ms-original-file: ${example.filePath}`
      ]
    };
    sourceFile.addFunction(functionDeclaration);
    exampleFunctions.push(exampleFunctionType.name);
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

function buildParameterValueMap(example: SdkHttpOperationExample) {
  const parameterMap: Record<string, SdkHttpParameterExampleValue> = {};
  example.parameters.forEach(
    (param) => (parameterMap[param.parameter.serializedName] = param)
  );
  return parameterMap;
}

function prepareExampleValue(
  name: string,
  value: SdkExampleValue | string,
  isOptional?: boolean,
  onClient?: boolean
): ExampleValue {
  return {
    name: normalizeName(name, NameType.Parameter),
    value: typeof value === "string" ? value : getParameterValue(value),
    isOptional: Boolean(isOptional),
    onClient: Boolean(onClient)
  };
}

// Helper function to get ARM subscriptionId value from examples
function getArmSubscriptionIdValue(
  dpgContext: SdkContext,
  method: ServiceOperation,
  parameterMap: Record<string, SdkHttpParameterExampleValue>
): string {
  const defaultValue = `"00000000-0000-0000-0000-00000000000"`;
  if (!dpgContext.arm) return defaultValue;

  // Extract subscriptionId value from method parameters if available
  for (const param of method.operation.parameters) {
    if (param.name.toLowerCase() === "subscriptionid" && !param.optional) {
      const exampleValue = parameterMap[param.serializedName];
      if (exampleValue && exampleValue.value) {
        return getParameterValue(exampleValue.value);
      }
    }
  }

  // If not found in method parameters, look for it in parameterMap directly
  const subscriptionIdExample =
    parameterMap["subscriptionId"] || parameterMap["subscription-id"];
  if (subscriptionIdExample && subscriptionIdExample.value) {
    return getParameterValue(subscriptionIdExample.value);
  }

  return defaultValue;
}

function prepareExampleParameters(
  dpgContext: SdkContext,
  method: ServiceOperation,
  parameterMap: Record<string, SdkHttpParameterExampleValue>,
  topLevelClient: SdkClientType<SdkServiceOperation>
): ExampleValue[] {
  // TODO: blocked by TCGC issue: https://github.com/Azure/typespec-azure/issues/1419
  // refine this to support generic client-level parameters once resolved
  const result: ExampleValue[] = [];

  // Get server parameters from service definition to get the correct order and complete list
  const program = dpgContext.program;
  const serviceNs = getDefaultService(program)?.type;
  const serverParameterOrder: string[] = [];
  if (serviceNs) {
    const host = getServers(program, serviceNs);
    if (host && host?.[0] && host?.[0]?.parameters) {
      for (const key of host[0].parameters.keys()) {
        serverParameterOrder.push(key);
      }
    }
  }

  // Helper function to get parameter value for server params
  const getServerParamValue = (serverParam: string) => {
    if (serverParam === "subscriptionId" && dpgContext.arm) {
      return getArmSubscriptionIdValue(dpgContext, method, parameterMap);
    }
    return `process.env.${getEnvVarName(serverParam)} || ""`;
  };

  // If we have server parameters, add them first, then credential, then others
  // Otherwise, follow the client initialization parameters order
  if (serverParameterOrder.length > 0) {
    // Add server parameters in their defined order
    for (const serverParam of serverParameterOrder) {
      result.push(
        prepareExampleValue(
          serverParam,
          getServerParamValue(serverParam),
          false,
          true
        )
      );
    }

    // Add credential parameter at the end
    for (const property of topLevelClient.clientInitialization.parameters) {
      if (property.type.kind === "credential") {
        const credentialExampleValue = getCredentialExampleValue(
          dpgContext,
          topLevelClient.clientInitialization
        );
        if (credentialExampleValue) {
          result.push(credentialExampleValue);
        }
      }
    }

    // Add any other required non-server, non-credential parameters
    for (const property of topLevelClient.clientInitialization.parameters) {
      const isServerParam = serverParameterOrder.includes(property.name);
      const isCredential = property.type.kind === "credential";
      if (
        !isServerParam &&
        !isCredential &&
        !property.optional &&
        !property.clientDefaultValue
      ) {
        result.push(
          prepareExampleValue(property.name, `"${property.name}"`, false, true)
        );
      }
    }
  } else {
    // No server parameters, follow original client initialization order but skip endpoint if it's not used
    for (const property of topLevelClient.clientInitialization.parameters) {
      // Skip endpoint parameter when there are no server parameters
      if (property.name === "endpoint") {
        continue;
      }
      // Credential parameters always use default approach
      if (property.type.kind === "credential") {
        const credentialExampleValue = getCredentialExampleValue(
          dpgContext,
          topLevelClient.clientInitialization
        );
        if (credentialExampleValue) {
          result.push(credentialExampleValue);
        }
      }
      // For ARM subscriptionId, use the extracted ARM value
      else if (property.name === "subscriptionId" && dpgContext.arm) {
        result.push(
          prepareExampleValue(
            property.name,
            getArmSubscriptionIdValue(dpgContext, method, parameterMap),
            false,
            true
          )
        );
      }
      // Other required parameters use parameter name directly (can be extended as needed)
      else if (!property.optional && !property.clientDefaultValue) {
        result.push(
          prepareExampleValue(property.name, `"${property.name}"`, false, true)
        );
      }
    }
  }

  let subscriptionIdValue = `"00000000-0000-0000-0000-00000000000"`;
  // required parameters
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
      // report diagnostic if required parameter is missing
      reportDiagnostic(dpgContext.program, {
        code: "required-sample-parameter",
        format: {
          exampleName: method.oriName ?? method.name,
          paramName: param.name
        },
        target: NoTarget
      });
      continue;
    }

    if (
      param.name.toLowerCase() === "subscriptionid" &&
      dpgContext.arm &&
      exampleValue
    ) {
      subscriptionIdValue = getParameterValue(exampleValue.value);
      continue;
    }
    result.push(
      prepareExampleValue(
        exampleValue.parameter.name,
        exampleValue.value,
        param.optional,
        param.onClient
      )
    );
  }
  // add subscriptionId for ARM clients if ARM clients need it
  if (dpgContext.arm && getSubscriptionId(dpgContext)) {
    // Check if subscriptionId is already in the result (from server parameters or client initialization)
    const hasSubscriptionId = result.some(
      (param) => param.name === "subscriptionId" && param.onClient
    );

    if (!hasSubscriptionId) {
      result.push(
        prepareExampleValue("subscriptionId", subscriptionIdValue, false, true)
      );
    }
  }
  // required/optional body parameters
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
          prepareExampleValue(
            prop.name,
            propExample,
            prop.optional,
            prop.onClient
          )
        );
      }
    } else {
      result.push(
        prepareExampleValue(
          bodyParam.name,
          bodyExample.value,
          bodyParam.optional,
          bodyParam.onClient
        )
      );
    }
  }
  // optional parameters
  method.operation.parameters
    .filter(
      (param) =>
        param.optional === true &&
        parameterMap[param.serializedName] &&
        !param.clientDefaultValue
    )
    .map((param) => parameterMap[param.serializedName]!)
    .forEach((param) => {
      result.push(
        prepareExampleValue(
          param.parameter.name,
          param.value,
          true,
          param.parameter.onClient
        )
      );
    });

  return result;
}

function getCredentialExampleValue(
  dpgContext: SdkContext,
  initialization: SdkClientInitializationType
): ExampleValue | undefined {
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
        value: `new DefaultAzureCredential()`
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

function getParameterValue(value: SdkExampleValue): string {
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
          getParameterValue(propValue);
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
          getParameterValue(propValue);
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
      const valuesArr = value.value.map(getParameterValue);
      retValue = `[${valuesArr.join(", ")}]`;
      break;
    }
    default:
      break;
  }
  return retValue;
}

function escapeSpecialCharToSpace(str: string) {
  if (!str) {
    return str;
  }
  return str.replace(/_|,|\.|\(|\)|'s |\[|\]/g, " ").replace(/\//g, " Or ");
}

function getEnvVarName(paramName: string): string {
  // Convert camelCase to UPPER_SNAKE_CASE
  return paramName.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
}
