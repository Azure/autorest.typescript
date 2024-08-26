import {
  StructureKind,
  FunctionDeclarationStructure,
  SourceFile
} from "ts-morph";
import { resolveReference } from "../framework/reference.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
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

export function emitSamples(dpgContext: SdkContext): SourceFile[] {
  const generatedFiles: SourceFile[] = [];
  for (const client of dpgContext.sdkPackage.clients) {
    const tmp = emitClassicalClientSamples(dpgContext, client);
    generatedFiles.push(...tmp);
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
    const exampleFunctionBody: string[] = [],
      clientParams: string[] = [],
      methodParams: string[] = [];
    const exampleName = normalizeName(
      escapeSpecialCharToSpace(example.name),
      NameType.Method
    );
    const exampleFunctionType = {
      name: exampleName,
      returnType: "void",
      body: exampleFunctionBody
    };
    const parameterMap: Record<string, SdkHttpParameterExample> = {};
    example.parameters.forEach(
      (param) =>
        (parameterMap[(param.parameter as any).serializedName ?? param.parameter.name] =
          param)
    );
    // prepare client-level parameters
    if (options.credentialType) {
      // Only support DefaultAzureCredential for now
      exampleFunctionBody.push(
        `const credential = new ${resolveReference(
          AzureIdentityDependencies.DefaultAzureCredential
        )}();`
      );
      clientParams.push("credential");
    }
    let subscriptionIdValue = `"00000000-0000-0000-0000-00000000000"`;
    for (const param of example.parameters) {
      if (
        param.parameter.name.toLowerCase() === "subscriptionid" &&
        isArm(dpgContext)
      ) {
        subscriptionIdValue = getParameterValue(param.value);
        continue;
      }
      if (
        param.parameter.type.kind === "constant" ||
        param.parameter.onClient === false
      ) {
        continue;
      }
      const paramName = param.parameter.name;
      exampleFunctionBody.push(
        `const ${paramName} = ${getParameterValue(param.value)};`
      );
      clientParams.push(paramName);
    }
    // always add subscriptionId for ARM clients
    if (isArm(dpgContext)) {
      exampleFunctionBody.push(
        `const subscriptionId = ${subscriptionIdValue};`
      );
      clientParams.push("subscriptionId");
    }
    exampleFunctionBody.push(
      `const client = new ${options.clientName}(${clientParams.join(", ")});`
    );

    // prepare operation-level parameters
    // required path, header, query parameters
    for (const param of method.operation.parameters) {
      if (param.optional === true || param.clientDefaultValue !== undefined) {
        continue;
      }
      const example = parameterMap[param.serializedName];
      if (!example || !example.value) {
        // report diagnostic if required parameter is missing
        reportDiagnostic(dpgContext.program, {
          code: "required-sample-parameter",
          format: {
            exampleName: exampleName,
            paramName: param.serializedName
          },
          target: NoTarget
        });
        continue;
      }
      if (example.parameter.onClient === true) {
        continue;
      }
      methodParams.push(`${getParameterValue(example.value)}`);
    }
    // required body parameters
    const bodySerializedName = method.operation.bodyParam?.name;
    if (bodySerializedName && parameterMap[bodySerializedName]) {
      const example = parameterMap[bodySerializedName];
      if (example && example.value) {
        methodParams.push(`${getParameterValue(example.value)}`);
      }
    }
    // optional parameters
    const optionalParams = method.operation.parameters
      .filter(
        (param) => param.optional === true && parameterMap[param.serializedName]
      )
      .map((param) => parameterMap[param.serializedName]!)
      .map(
        (param) => `${param.parameter.name}: ${getParameterValue(param.value)}`
      );
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
  return str
    .replace(/_/g, " ")
    .replace(/\//g, " Or ")
    .replace(/,|\.|\(|\)/g, " ")
    .replace("'s ", " ")
    .replace(/\[/g, " ")
    .replace(/\]/g, " ");
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
