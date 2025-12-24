import {
  StructureKind,
  FunctionDeclarationStructure,
  SourceFile
} from "ts-morph";
import { resolveReference } from "../framework/reference.js";
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
import { AzureIdentityDependencies } from "../modular/external-dependencies.js";
import { reportDiagnostic } from "../index.js";
import { NoTarget } from "@typespec/compiler";
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
  isTenantLevelOperation,
  ServiceOperation
} from "../utils/operationUtil.js";
import { getSubscriptionId } from "../transform/transfromRLCOptions.js";
import { getClientParametersDeclaration } from "./helpers/clientHelpers.js";
import { getOperationFunction } from "./helpers/operationHelpers.js";
import { ModelOverrideOptions } from "./serialization/serializeUtils.js";

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
  hierarchies?: string[]; // Add hierarchies to track operation path
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
    const hierarchies = prefixKey ? prefixKey.split("/") : [];
    const prefix = hierarchies
      .map((name) => {
        return normalizeName(name, NameType.Property);
      })
      .join(".");
    for (const op of operations) {
      emitMethodSamples(dpgContext, op, {
        ...options,
        classicalMethodPrefix: prefix,
        hierarchies: hierarchies
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

    const methodParamValues = parameters.filter((p) => !p.onClient);

    // Create a map for quick lookup of parameter values by name
    const paramValueMap = new Map(methodParamValues.map((p) => [p.name, p]));

    // Reorder methodParamValues according to the signature order
    const orderedRequiredParams = signatureParamNames
      .map((name) => paramValueMap.get(name))
      .filter((p): p is ExampleValue => p !== undefined && !p.isOptional);

    const methodParams = orderedRequiredParams.map((p) => `${p.value}`);

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
  context: SdkContext,
  name: string,
  value: SdkExampleValue | string,
  isOptional?: boolean,
  onClient?: boolean
): ExampleValue {
  return {
    name: normalizeName(name, NameType.Parameter),
    value:
      typeof value === "string" ? value : getParameterValue(context, value),
    isOptional: Boolean(isOptional),
    onClient: Boolean(onClient)
  };
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
  const clientParams = getClientParametersDeclaration(
    topLevelClient,
    dpgContext,
    {
      onClientOnly: true,
      requiredOnly: true
    }
  );

  for (const param of clientParams) {
    if (param.name === "options" || param.name === "credential") {
      continue;
    }

    const exampleValue: ExampleValue = {
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
  const credentialExampleValue = getCredentialExampleValue(
    dpgContext,
    topLevelClient.clientInitialization
  );
  if (credentialExampleValue) {
    result.push(credentialExampleValue);
  }

  let subscriptionIdValue = `"00000000-0000-0000-0000-000000000000"`;
  let isSubscriptionIdAdded = false;
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

    // Handle subscriptionId parameter separately for ARM clients
    // Add it as long as it's the parameter of the method, even no example provided
    if (param.name.toLowerCase() === "subscriptionid" && dpgContext.arm) {
      isSubscriptionIdAdded = true;
      if (exampleValue && exampleValue.value) {
        subscriptionIdValue = getParameterValue(dpgContext, exampleValue.value);
      }
      result.push(
        prepareExampleValue(
          dpgContext,
          param.name,
          subscriptionIdValue,
          param.optional,
          param.onClient
        )
      );
      continue;
    }

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

    result.push(
      prepareExampleValue(
        dpgContext,
        exampleValue.parameter.name,
        exampleValue.value,
        param.optional,
        param.onClient
      )
    );
  }

  // If client-level subscriptionId is needed on the client for this method, then add it
  // For example, Operations_List
  if (
    dpgContext.arm &&
    getSubscriptionId(dpgContext) &&
    !isSubscriptionIdAdded &&
    !isTenantLevelOperation(method, topLevelClient)
  ) {
    result.push(
      prepareExampleValue(
        dpgContext,
        "subscriptionId",
        subscriptionIdValue,
        false,
        true
      )
    );
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
            dpgContext,
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
          dpgContext,
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
          dpgContext,
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

function getParameterValue(
  context: SdkContext,
  value: SdkExampleValue,
  options?: {
    overrides?: ModelOverrideOptions;
  }
): string {
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
      const mapper = buildPropertyNameMapper(
        context,
        value.type,
        options?.overrides
      );
      const values = [];
      const additionalPropertiesValue =
        value.kind === "model" ? (value.additionalPropertiesValue ?? {}) : {};
      for (const propName in {
        ...value.value
      }) {
        let property;
        if (value.type.kind === "model") {
          property = value.type.properties.find((p) => p.name === propName);
        }
        const propValue = value.value[propName];
        if (propValue === undefined || propValue === null) {
          continue;
        }
        let propRetValue;

        if (
          property?.flatten &&
          property.type.kind === "model" &&
          options?.overrides?.enableFlatten !== false
        ) {
          // For flatten property, we need to recursively get its properties
          // but disable further flattening to match the TypeScript interface structure
          const paramValue = getParameterValue(context, propValue, {
            overrides: {
              propertyRenames:
                useContext("sdkTypes").flattenProperties.get(property)
                  ?.conflictMap,
              enableFlatten: false
            }
          });
          propRetValue =
            paramValue.length > 2 ? paramValue.slice(1, -1) : undefined;
        } else {
          propRetValue =
            `"${mapper.get(propName) ?? propName}": ` +
            getParameterValue(context, propValue, options);
        }
        if (propRetValue) values.push(propRetValue);
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
          getParameterValue(context, propValue);
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
      const valuesArr = value.value.map((item) =>
        getParameterValue(context, item)
      );
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
