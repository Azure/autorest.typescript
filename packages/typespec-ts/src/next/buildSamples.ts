import { Project, StructureKind, FunctionDeclarationStructure } from "ts-morph";
import { provideBinder, useBinder } from "../framework/hooks/binder.js";
import { addDeclaration } from "../framework/declaration.js";
import { resolveReference } from "../framework/reference.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkInitializationType,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { emitCredential } from "./emitCredential.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { join } from "path";

export function buildSamples(dpgContext: SdkContext) {
  // Create a new ts-morph project
  const project = new Project();
  provideBinder(project);
  // Initialize the binder
  const binder = useBinder();
  for (const client of dpgContext.sdkPackage.clients) {
    buildClassicalClientSample(dpgContext, project, client);
  }

  // Apply imports to ensure correct references
  binder.resolveAllReferences();
  for (const sourceFile of project.getSourceFiles()) {
    console.log(sourceFile.getFilePath());
    console.log(sourceFile.getFullText());
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
  _dpgContext: SdkContext,
  project: Project,
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
        buildExamplesForMethod(project, operation, {
          clientName,
          credentialType,
          operationGroupPrefix: operationOrGroup.name.toLowerCase()
        });
      }
    } else {
      buildExamplesForMethod(project, operationOrGroup, {
        clientName,
        credentialType
      });
    }
  }
}

function buildExamplesForMethod(
  project: Project,
  method: SdkServiceMethod<SdkServiceOperation>,
  options: {
    clientName: string;
    credentialType?: string;
    operationGroupPrefix?: string;
  }
) {
  // const dependencies = useDependencies();
  for (const example of method.operation.examples ?? []) {
    const arr = example.filePath.split("/");
    const sourceFile = project.createSourceFile(
      join(...arr.slice(-2, arr.length)),
      "",
      {
        overwrite: true
      }
    );
    // build example
    const exampleFunctionBody: string[] = [];
    const clientParams = [];
    const methodParams = [];
    const exampleName = normalizeName(example.name, NameType.Method);
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
      // TODO: handle values that are not strings
      const paramValue = param.value;
      exampleFunctionBody.push(
        `const ${paramName} = ${JSON.stringify(paramValue)};`
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
      // TODO: handle values that are not strings
      const paramValue = param.value;
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
    // Add statements referencing the tracked declarations
    const functionReference = resolveReference(exampleFunctionType);
    sourceFile.addStatements(`
    async function main() {
      ${functionReference}();
    }

    main().catch(console.error);`);
  }
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
