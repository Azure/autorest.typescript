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
  SdkHttpParameterExample,
  SdkInitializationType,
  SdkServiceMethod,
  SdkServiceOperation,
  SdkTypeExample
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
import { isArm } from "../utils/clientUtils.js";
import {
  buildPropertyNameMapper,
  isSpreadBodyParameter
} from "./helpers/typeHelpers.js";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import {
  hasKeyCredential,
  hasTokenCredential
} from "../utils/credentialUtils.js";

/**
 * Interfaces for samples generations
 */
interface ExampleValue {
  name: string;
  value: string;
  isOptional: boolean;
}

interface EmitSampleOptions {
  topLevelClient: SdkClientType<SdkServiceOperation>;
  generatedFiles: SourceFile[];
  classicalMethodPrefix?: string;
}
/**
 * Helpers to emit samples
 */
export function emitSamples(dpgContext: SdkContext): SourceFile[] {
  const generatedFiles: SourceFile[] = [];
  for (const client of dpgContext.sdkPackage.clients) {
    emitClientSamples(dpgContext, client, {
      topLevelClient: client,
      generatedFiles
    });
  }
  return generatedFiles;
}

function emitClientSamples(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  options: EmitSampleOptions
) {
  for (const operationOrGroup of client.methods) {
    // handle client-level methods
    if (operationOrGroup.kind !== "clientaccessor") {
      emitMethodSamples(dpgContext, operationOrGroup, options);
      continue;
    }
    // handle operation group
    let prefix = normalizeName(
      operationOrGroup.response.name,
      NameType.Property
    );
    // append hierarchy prefix if hierarchyClient is enabled
    if (dpgContext.rlcOptions?.hierarchyClient === true) {
      prefix =
        (options.classicalMethodPrefix
          ? `${options.classicalMethodPrefix}.`
          : "") + prefix;
    }

    emitClientSamples(dpgContext, operationOrGroup.response, {
      ...options,
      classicalMethodPrefix: prefix
    });
  }
}

function emitMethodSamples(
  dpgContext: SdkContext,
  method: SdkServiceMethod<SdkServiceOperation>,
  options: EmitSampleOptions
): SourceFile | undefined {
  const examples = method.operation.examples ?? [];
  if (examples.length === 0) {
    return;
  }
  const project = useContext("outputProject");
  const operationPrefix = `${options.classicalMethodPrefix ?? ""} ${
    method.name
  }`;
  const sampleFolder = join(
    dpgContext.generationPathDetail?.rootDir ?? "",
    "samples-dev"
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
      returnType: "void",
      body: exampleFunctionBody
    };
    const parameterMap: Record<string, SdkHttpParameterExample> =
      buildParameterValueMap(example);
    // prepare client-level parameters
    const clientParamValues = prepareClientExampleParameters(
      dpgContext,
      method,
      parameterMap,
      options.topLevelClient
    );
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
    const methodParamValues = prepareMethodExampleParameters(
      dpgContext,
      exampleName,
      method,
      parameterMap
    );
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
    const methodCall = `client.${prefix}${method.name}(${methodParams.join(
      ", "
    )})`;
    if (isPaging) {
      exampleFunctionBody.push(`const resArray = new Array();`);
      exampleFunctionBody.push(
        `for await (let item of ${methodCall}) { resArray.push(item); }`
      );
      exampleFunctionBody.push(`console.log(resArray);`);
    } else {
      exampleFunctionBody.push(`const result = await ${methodCall};`);
      exampleFunctionBody.push(`console.log(result);`);
    }

    // Create a function declaration structure
    const normalizedDescription =
      (method.description?.charAt(0).toLowerCase() ?? "") +
      method.description?.slice(1);
    const functionDeclaration: FunctionDeclarationStructure = {
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
  const functions = exampleFunctions.map((f) => `${f}();`).join("\n");
  sourceFile.addStatements(`
  async function main() {
    ${functions}
  }

  main().catch(console.error);`);
  options.generatedFiles.push(sourceFile);
  return sourceFile;
}

function buildParameterValueMap(example: SdkHttpOperationExample) {
  const parameterMap: Record<string, SdkHttpParameterExample> = {};
  example.parameters.forEach(
    (param) =>
      (parameterMap[
        (param.parameter as any).serializedName ?? param.parameter.name
      ] = param)
  );
  return parameterMap;
}

function prepareMethodExampleParameters(
  dpgContext: SdkContext,
  exampleName: string,
  method: SdkServiceMethod<SdkServiceOperation>,
  parameterMap: Record<string, SdkHttpParameterExample>
): ExampleValue[] {
  const parameters: ExampleValue[] = [];
  for (const param of method.operation.parameters) {
    if (
      param.optional === true ||
      param.onClient === true ||
      param.type.kind === "constant"
    ) {
      continue;
    }
    const exampleValue = parameterMap[param.serializedName];
    if (!exampleValue || !exampleValue.value) {
      // report diagnostic if required parameter is missing
      reportDiagnostic(dpgContext.program, {
        code: "required-sample-parameter",
        format: {
          exampleName: exampleName,
          paramName: param.name
        },
        target: NoTarget
      });
      continue;
    }

    parameters.push({
      name: param.name,
      value: getParameterValue(exampleValue.value),
      isOptional: false
    });
  }
  // required/optional body parameters
  const bodyParam = method.operation.bodyParam;
  const bodyName = bodyParam?.name;
  const bodyExample = parameterMap[bodyName ?? ""];
  if (bodyName && bodyExample && bodyExample.value) {
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
        parameters.push({
          name: prop.name,
          value: getParameterValue(propExample),
          isOptional: Boolean(prop.optional)
        });
      }
    } else {
      parameters.push({
        name: bodyName,
        value: getParameterValue(bodyExample.value),
        isOptional: Boolean(method.operation.bodyParam?.optional)
      });
    }
  }
  // optional parameters
  method.operation.parameters
    .filter(
      (param) => param.optional === true && parameterMap[param.serializedName]
    )
    .map((param) => parameterMap[param.serializedName]!)
    .forEach((param) => {
      parameters.push({
        name: param.parameter.name,
        value: getParameterValue(param.value),
        isOptional: true
      });
    });
  return parameters;
}

function prepareClientExampleParameters(
  dpgContext: SdkContext,
  method: SdkServiceMethod<SdkServiceOperation>,
  parameterMap: Record<string, SdkHttpParameterExample>,
  topLevelClient: SdkClientType<SdkServiceOperation>
): ExampleValue[] {
  // TODO: blocked by TCGC issue: https://github.com/Azure/typespec-azure/issues/1419
  // refine this to support generic client-level parameters once resolved
  const result: ExampleValue[] = [];
  const credentialExampleValue = getCredentialExampleValue(
    dpgContext,
    topLevelClient.initialization
  );
  if (credentialExampleValue) {
    result.push(credentialExampleValue);
  }

  let subscriptionIdValue = `"00000000-0000-0000-0000-00000000000"`;
  // required client-level parameters
  for (const param of method.operation.parameters) {
    if (
      param.onClient === false ||
      param.optional === true ||
      param.type.kind === "constant"
    ) {
      continue;
    }

    const exampleValue = parameterMap[param.serializedName];
    if (!exampleValue || !exampleValue.value) {
      // report diagnostic if required parameter is missing
      reportDiagnostic(dpgContext.program, {
        code: "required-sample-parameter",
        format: {
          exampleName: method.name,
          paramName: param.name
        },
        target: NoTarget
      });
      continue;
    }

    if (
      param.name.toLowerCase() === "subscriptionid" &&
      isArm(dpgContext) &&
      exampleValue
    ) {
      subscriptionIdValue = getParameterValue(exampleValue.value);
      continue;
    }
    result.push({
      name: exampleValue.parameter.name,
      value: getParameterValue(exampleValue.value),
      isOptional: Boolean(param.optional)
    });
  }
  // always add subscriptionId for ARM clients
  if (isArm(dpgContext)) {
    result.push({
      name: "subscriptionId",
      value: subscriptionIdValue,
      isOptional: false
    });
  }
  // optional parameters
  method.operation.parameters
    .filter(
      (param) =>
        param.onClient === true &&
        param.optional === true &&
        parameterMap[param.serializedName]
    )
    .map((param) => parameterMap[param.serializedName]!)
    .forEach((param) => {
      result.push({
        name: param.parameter.name,
        value: getParameterValue(param.value),
        isOptional: true
      });
    });

  return result;
}

function getCredentialExampleValue(
  dpgContext: SdkContext,
  initialization: SdkInitializationType
): ExampleValue | undefined {
  const keyCredential = hasKeyCredential(initialization),
    tokenCredential = hasTokenCredential(initialization);
  if (keyCredential || tokenCredential) {
    if (isAzurePackage({ options: dpgContext.rlcOptions })) {
      // Support DefaultAzureCredential for Azure packages
      return {
        name: "credential",
        value: `new ${resolveReference(
          AzureIdentityDependencies.DefaultAzureCredential
        )}()`,
        isOptional: false
      };
    } else if (keyCredential) {
      // Support ApiKeyCredential for non-Azure packages
      return {
        name: "credential",
        value: `{ key: "INPUT_YOUR_KEY_HERE" }`,
        isOptional: false
      };
    } else if (tokenCredential) {
      // Support TokenCredential for non-Azure packages
      return {
        name: "credential",
        value: `{ getToken: async () => {
          return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() }; } }`,
        isOptional: false
      };
    }
  }
  return undefined;
}

function getParameterValue(value: SdkTypeExample): string {
  let retValue = `{} as any`;
  switch (value.kind) {
    case "string": {
      switch (value.type.kind) {
        case "utcDateTime":
        case "offsetDateTime":
          retValue = `new Date("${value.value}")`;
          break;
        default:
          retValue = `"${value.value}"`;
          break;
      }
      break;
    }
    case "boolean":
    case "number":
    case "null":
    case "any":
    case "union":
      retValue = `${value.value}`;
      break;
    case "dict":
    case "model": {
      const mapper = buildPropertyNameMapper(value.type);
      const values = [];
      const additionalPropertiesValue =
        value.kind === "model" ? value?.additionalPropertiesValue ?? {} : {};
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
      const valuesArr = value.value.map((element) =>
        getParameterValue(element)
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
