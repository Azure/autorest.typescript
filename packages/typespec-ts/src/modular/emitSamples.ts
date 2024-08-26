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
  SdkType,
  SdkTypeExample
} from "@azure-tools/typespec-client-generator-core";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { useContext } from "../contextManager.js";
import { join } from "path";
import { AzureIdentityDependencies } from "../modular/external-dependencies.js";
import { reportDiagnostic } from "../index.js";
import { NoTarget } from "@typespec/compiler";

interface ExampleValue {
  name: string;
  value: string;
  isOptional: boolean;
}
export function emitSamples(dpgContext: SdkContext): SourceFile[] {
  const generatedFiles: SourceFile[] = [];
  for (const client of dpgContext.sdkPackage.clients) {
    generatedFiles.push(...emitClassicalClientSamples(dpgContext, client));
  }
  return generatedFiles;
}

function emitClassicalClientSamples(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  operationGroupPrefix?: string
) {
  // build client-level parameters
  const clientName = client.name;
  const credentialParameterType = getCredentialType(client.initialization);
  const generatedFiles: SourceFile[] = [];
  emitClassicalClientSamplesDfs(
    dpgContext,
    client,
    clientName,
    generatedFiles,
    credentialParameterType,
    operationGroupPrefix ?? ""
  );
  return generatedFiles;
}

function emitClassicalClientSamplesDfs(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  clientName: string,
  generatedFiles: SourceFile[],
  credentialParameterType?: string,
  operationGroupPrefix?: string
) {
  for (const operationOrGroup of client.methods) {
    if (operationOrGroup.kind === "clientaccessor") {
      let prefix = normalizeName(
        operationOrGroup.response.name,
        NameType.Property
      );
      // append hierarchy prefix if hierarchyClient is enabled
      if (dpgContext.rlcOptions?.hierarchyClient === true) {
        prefix =
          (operationGroupPrefix ? `${operationGroupPrefix}.` : "") + prefix;
      }

      emitClassicalClientSamplesDfs(
        dpgContext,
        operationOrGroup.response,
        clientName,
        generatedFiles,
        credentialParameterType,
        prefix
      );
    } else {
      const sample = emitMethodSamples(dpgContext, operationOrGroup, {
        clientName,
        credentialType: credentialParameterType,
        operationGroupPrefix
      });
      if (sample) {
        generatedFiles.push(sample);
      }
    }
  }
}

function emitMethodSamples(
  dpgContext: SdkContext,
  method: SdkServiceMethod<SdkServiceOperation>,
  options: {
    clientName: string;
    credentialType?: string;
    operationGroupPrefix?: string;
  }
): SourceFile | undefined {
  const examples = method.operation.examples ?? [];
  if (examples.length === 0) {
    return;
  }
  const project = useContext("outputProject");
  const operationPrefix = `${options.operationGroupPrefix ?? ""} ${
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
      namedImports: [options.clientName]
    });
  }

  for (const example of examples) {
    // build example
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
      options.credentialType
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
      `const client = new ${options.clientName}(${clientParams.join(", ")});`
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
    const prefix = options.operationGroupPrefix
      ? `${options.operationGroupPrefix}.`
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
  const bodyName = method.operation.bodyParam?.name;
  if (bodyName && parameterMap[bodyName]) {
    const example = parameterMap[bodyName];
    if (example && example.value) {
      parameters.push({
        name: bodyName,
        value: getParameterValue(example.value),
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
  credentialType?: string
): ExampleValue[] {
  // TODO: blocked by tcgc issue: https://github.com/Azure/typespec-azure/issues/1419
  const result: ExampleValue[] = [];
  if (credentialType) {
    // Only support DefaultAzureCredential for now
    result.push({
      name: "credential",
      value: `new ${resolveReference(
        AzureIdentityDependencies.DefaultAzureCredential
      )}()`,
      isOptional: false
    });
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
      const mapper = getPropertyClientNameMapper(value.type);
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

function getPropertyClientNameMapper(model: SdkType) {
  const mapper = new Map<string, string>();
  if (model.kind !== "model") {
    return mapper;
  }
  for (const prop of model.properties) {
    if (prop.kind !== "property") {
      continue;
    }

    mapper.set(prop.serializedName, prop.name);
  }
  return mapper;
}

function escapeSpecialCharToSpace(str: string) {
  if (!str) {
    return str;
  }
  return str.replace(/_|,|\.|\(|\)|'s |\[|\]/g, " ").replace(/\//g, " Or ");
}

// FIXME: This is a temporary solution to get the credential type
function getCredentialType(
  initialization: SdkInitializationType
): string | undefined {
  const credentialParameter = initialization.properties.find(
    (p) => p.kind === "credential"
  )?.type;
  return credentialParameter ? "Credential" : undefined;
}

function isArm(dpgContext: SdkContext): boolean {
  return dpgContext.rlcOptions?.azureArm ?? dpgContext.arm ?? false;
}
