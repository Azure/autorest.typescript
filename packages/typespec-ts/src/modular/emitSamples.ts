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
  ServiceOperation
} from "../utils/operationUtil.js";
import { getSubscriptionId } from "../transform/transfromRLCOptions.js";
import { getClientParameters } from "./helpers/clientHelpers.js";

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

function prepareExampleParameters(
  dpgContext: SdkContext,
  method: ServiceOperation,
  parameterMap: Record<string, SdkHttpParameterExampleValue>,
  topLevelClient: SdkClientType<SdkServiceOperation>
): ExampleValue[] {
  // TODO: blocked by TCGC issue: https://github.com/Azure/typespec-azure/issues/1419
  // refine this to support generic client-level parameters once resolved
  const result: ExampleValue[] = [];
  const credentialExampleValue = getCredentialExampleValue(
    dpgContext,
    topLevelClient.clientInitialization
  );
  if (credentialExampleValue) {
    result.push(credentialExampleValue);
  }

  // Handle client-level endpoint parameters
  const clientParameters = getClientParameters(topLevelClient, dpgContext, {
    requiredOnly: true,
    skipEndpointTemplate: true
  });

  for (const clientParam of clientParameters) {
    if (clientParam.kind === "method" || clientParam.kind === "credential") {
      continue; // Skip non-endpoint parameters
    }

    // For endpoint parameters, provide a default value since they're required for client initialization
    // and may not be properly extracted from examples by TCGC
    if (clientParam.type.kind === "endpoint") {
      // For endpoint type, extract template arguments (the actual endpoint parameters)
      for (const templateArg of clientParam.type.templateArguments) {
        if (!templateArg.optional) {
          // For required endpoint parameters, provide a default value
          const defaultEndpointValue =
            '"https://api.cognitive.microsofttranslator.com"';
          result.push(
            prepareExampleValue(
              templateArg.name,
              defaultEndpointValue,
              false, // not optional since it's required
              true // onClient = true for endpoint parameters
            )
          );
        }
      }
    }
    // Check if this is a union type containing an endpoint
    else if (clientParam.type.kind === "union") {
      const endpointVariant = clientParam.type.variantTypes.find(
        (v) => v.kind === "endpoint"
      );
      if (endpointVariant && endpointVariant.kind === "endpoint") {
        // For union endpoint type, extract template arguments (the actual endpoint parameters)
        for (const templateArg of endpointVariant.templateArguments) {
          if (!templateArg.optional) {
            // For required endpoint parameters, provide a default value
            const defaultEndpointValue =
              '"https://api.cognitive.microsofttranslator.com"';
            result.push(
              prepareExampleValue(
                templateArg.name,
                defaultEndpointValue,
                false, // not optional since it's required
                true // onClient = true for endpoint parameters
              )
            );
          }
        }
      }
    } else {
      // Handle other client-level parameters
      const exampleValue = parameterMap[clientParam.name ?? ""];
      if (exampleValue && exampleValue.value) {
        result.push(
          prepareExampleValue(
            clientParam.name,
            exampleValue.value,
            clientParam.optional,
            true // onClient = true
          )
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
    result.push(
      prepareExampleValue("subscriptionId", subscriptionIdValue, false, true)
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

function getParameterValue(value: SdkExampleValue): string {
  let retValue = `{} as any`;
  switch (value.kind) {
    case "string": {
      switch (value.type.kind) {
        case "utcDateTime":
          retValue = `new Date("${value.value}")`;
          break;
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
        ...value.value,
        ...additionalPropertiesValue
      }) {
        const propValue =
          value.value[propName] ?? additionalPropertiesValue[propName];
        if (propValue === undefined || propValue === null) {
          continue;
        }
        const propRetValue =
          `"${mapper.get(propName) ?? propName}": ` +
          getParameterValue(propValue);
        values.push(propRetValue);
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
