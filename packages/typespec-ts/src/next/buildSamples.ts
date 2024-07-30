import { Project, StructureKind, FunctionDeclarationStructure } from "ts-morph";
import { provideBinder, useBinder } from "../framework/hooks/binder.js";
import { addDeclaration } from "../framework/declaration.js";
import { resolveReference } from "../framework/reference.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkBasicServiceMethod,
  SdkClientAccessor,
  SdkClientType,
  SdkInitializationType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { emitCredential } from "./emitCredential.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { useDependencies } from "../framework/hooks/useDependencies.js";

function getFirstOperation(dpgContext: SdkContext) {
  const client = dpgContext.sdkPackage
    .clients[0]! as SdkClientType<SdkServiceOperation>;
  const operationGroup = client
    .methods[0]! as SdkClientAccessor<SdkServiceOperation>;
  const operation = operationGroup.response
    .methods[0]! as SdkBasicServiceMethod<SdkServiceOperation>;
  return [client, operationGroup, operation];
}

export function buildSamples(dpgContext: SdkContext) {
  const customDependencies = {
    DefaultAzureCredential: {
      kind: "externalDependency",
      name: "DefaultAzureCredential",
      module: "@azure/identity"
    }
  };

  const [client, operationGroup, operation] = getFirstOperation(dpgContext)!;
  const initialization = (client as SdkClientType<SdkServiceOperation>)
    .initialization;
  const example = (operation as any).operation!.examples[0]!;
  const credentialParam = getCredentialType(initialization);
  const subscriptionIdParam = getSubscriptionId(initialization);
  const operationGroupName = getOperationGroupName(
    operationGroup as SdkClientAccessor<SdkServiceOperation>
  );
  const methodName = (operation as SdkBasicServiceMethod<SdkServiceOperation>)
    .name;
  const exampleName = normalizeName(example.name, NameType.Method);
  // Create a new ts-morph project
  const project = new Project();
  // Create a source file
  const sourceFile = project.createSourceFile("test.ts", "", {
    overwrite: true
  });

  provideBinder(project, { dependencies: customDependencies });
  const Dependencies = useDependencies();
  // Initialize the binder
  const binder = useBinder();

  // Define a function model
  const functionBody = [];
  const clientParams = [];
  if (credentialParam) {
    functionBody.push(
      `const credential = new ${resolveReference(
        Dependencies.DefaultAzureCredential
      )}();`
    );
    clientParams.push("credential");
  }
  if (subscriptionIdParam) {
    functionBody.push(`const subscriptionId = "${subscriptionIdParam}";`);
    clientParams.push("subscriptionId");
  }
  functionBody.push(
    `const client = new ${(client as any).name}(${clientParams.join(", ")});`
  );
  functionBody.push(
    `const result = await client.${operationGroupName}.${methodName}();`
  );
  functionBody.push(`console.log(result);`);
  const sampleFunctionType = {
    name: exampleName,
    returnType: "void",
    body: functionBody
  };

  // Create a function declaration structure
  const functionDeclaration: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    isAsync: true,
    name: sampleFunctionType.name,
    returnType: sampleFunctionType.returnType,
    statements: sampleFunctionType.body
  };
  addDeclaration(sourceFile, functionDeclaration, sampleFunctionType);
  // Add statements referencing the tracked declarations
  const functionReference = resolveReference(sampleFunctionType);
  sourceFile.addStatements(`
async function main() {
  ${functionReference}();
}

main().catch(console.error);`);

  // Apply imports to ensure correct references
  binder.resolveAllReferences();

  // Output the generated files
  console.log("// test.ts");
  console.log(sourceFile.getFullText());
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

function getSubscriptionId(_initialization: SdkInitializationType) {
  return "00000000-0000-0000-0000-000000000000";
}

function getOperationGroupName(op: SdkClientAccessor<SdkServiceOperation>) {
  return op.name.toLowerCase();
}
