import { StructureKind, FunctionDeclarationStructure } from "ts-morph";
import { addDeclaration } from "../framework/declaration.js";
import { resolveReference } from "../framework/reference.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkHttpParameterExample,
  SdkInitializationType,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { emitCredential } from "./emitCredential.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { useContext } from "../contextManager.js";
import { join } from "path";

export function buildSamples(dpgContext: SdkContext) {
  // Create a new ts-morph project
  for (const client of dpgContext.sdkPackage.clients) {
    buildClassicalClientSample(dpgContext, client);
  }
}

// importing the necessary modules

// async function getASingleSubscription() {
//   const subscriptionId = "291bba3f-e0a5-47bc-a099-3bdcb2a50a05";
//   const credential = new DefaultAzureCredential();
//   const client = new SubscriptionClient(credential);
//   const result = await client.subscriptions.get(subscriptionId);
//   console.log(result);
// }

// async function main() {
//   getASingleSubscription();
// }

// main().catch(console.error);

function buildClassicalClientSample(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>
) {
  // build client-level parameters
  const clientName = client.name;
  const credentialType = getCredentialType(client.initialization);
  for (const operationOrGroup of client.methods) {
    if (operationOrGroup.kind === "clientaccessor") {
      for (const operation of operationOrGroup.response.methods) {
        // TODO: support nested operation groups
        if (operation.kind === "clientaccessor") {
          continue;
        }
        // this is an operation
        buildExamplesForMethod(dpgContext, operation, {
          clientName,
          credentialType,
          operationGroupPrefix: operationOrGroup.response.name.toLowerCase()
        });
      }
    } else {
      buildExamplesForMethod(dpgContext, operationOrGroup, {
        clientName,
        credentialType
      });
    }
  }
}

function buildExamplesForMethod(
  dpgContext: SdkContext,
  method: SdkServiceMethod<SdkServiceOperation>,
  options: {
    clientName: string;
    credentialType?: string;
    operationGroupPrefix?: string;
  }
) {
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
  // const dependencies = useDependencies();
  for (const example of method.operation.examples ?? []) {
    // build example
    const exampleFunctionBody: string[] = [],
      clientParams = [],
      methodParams = [];
    const exampleName = normalizeName(
      transformSpecialLetterToSpace(example.name),
      NameType.Method
    );
    const exampleFunctionType = {
      name: exampleName,
      returnType: "void",
      body: exampleFunctionBody
    };
    // prepare client-level parameters
    if (options.credentialType) {
      exampleFunctionBody.push(
        `const credential = new ${options.credentialType}();`
      );
      clientParams.push("credential");
    }
    for (const param of example.parameters) {
      if (
        param.parameter.type.kind === "constant" ||
        param.parameter.onClient === false
      ) {
        continue;
      }
      const paramName = param.parameter.name;
      exampleFunctionBody.push(
        `const ${paramName} = ${getParameterValue(param)};`
      );
      clientParams.push(paramName);
    }
    exampleFunctionBody.push(
      `const client = new ${options.clientName}(${clientParams.join(", ")});`
    );
    // prepare operation-level parameters
    for (const param of example.parameters) {
      if (param.parameter.onClient === true) {
        continue;
      }
      const paramValue = `${getParameterValue(param)}`;
      methodParams.push(paramValue);
    }
    const prefix = options.operationGroupPrefix
      ? `${options.operationGroupPrefix}.`
      : "";
    exampleFunctionBody.push(
      `const result = await client.${prefix}${method.name}(${methodParams.join(
        ", "
      )});`
    );
    exampleFunctionBody.push(`console.log(result);`);
    // Create a function declaration structure
    const functionDeclaration: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      isAsync: true,
      name: exampleFunctionType.name,
      returnType: exampleFunctionType.returnType,
      statements: exampleFunctionType.body
    };
    addDeclaration(sourceFile, functionDeclaration, exampleFunctionType);
    exampleFunctions.push(exampleFunctionType);
  }
  // Add statements referencing the tracked declarations
  const functions = exampleFunctions
    .map((f) => resolveReference(f))
    .map((f) => `${f}();`)
    .join("\n");
  sourceFile.addStatements(`
  async function main() {
    ${functions}
  }

  main().catch(console.error);`);
  console.log(sourceFile.getFilePath(), sourceFile.getFullText());
}

function getCredentialType(initialization: SdkInitializationType) {
  const param = initialization.properties.find((p) => p.kind === "credential");
  if (!param) return;
  if (param.type.kind === "union") {
    // TODO: support union types
    return;
  }
  const type = emitCredential(param.type);
  return ["KeyCredential", "TokenCredential"].includes(type)
    ? "DefaultAzureCredential"
    : undefined;
}

// TODO: handle values that are not strings
function getParameterValue(parameter: SdkHttpParameterExample) {
  const example = parameter.value;
  let retValue = example.value;
  switch (example.kind) {
    case "string": {
      switch (example.type.kind) {
        case "utcDateTime":
        case "offsetDateTime":
          retValue = `new Date("${example.value}")`;
          break;
        default:
          retValue = `"${example.value}"`;
          break;
      }
      break;
    }
    case "boolean":
    case "number":
    case "null":
      retValue = `${example.value}`;
      break;
    default:
      retValue = "{} as any";
      break;
  }
  return retValue;
}

function transformSpecialLetterToSpace(str: string) {
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
