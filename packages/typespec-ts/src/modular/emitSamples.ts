import { StructureKind, FunctionDeclarationStructure } from "ts-morph";
import { addDeclaration } from "../framework/declaration.js";
import { resolveReference } from "../framework/reference.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkServiceMethod,
  SdkServiceOperation,
  SdkTypeExample
} from "@azure-tools/typespec-client-generator-core";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { useContext } from "../contextManager.js";
import { join } from "path";
import { AzureIdentityDependencies } from "../modular/external-dependencies.js";
import { getTypeExpression } from "./type-expressions/get-type-expression.js";

export function emitSamples(dpgContext: SdkContext) {
  for (const client of dpgContext.sdkPackage.clients) {
    emitClassicalClientSample(dpgContext, client);
  }
}

function emitClassicalClientSample(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>
) {
  // build client-level parameters
  const clientName = client.name;
  const credentialParameter = client.initialization.properties.find(
    (p) => p.kind === "credential"
  )?.type;
  const credentialParameterType = credentialParameter
    ? getTypeExpression(credentialParameter!)
    : undefined;
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
          credentialType: credentialParameterType,
          operationGroupPrefix: normalizeName(
            operationOrGroup.response.name,
            NameType.Property
          )
        });
      }
    } else {
      buildExamplesForMethod(dpgContext, operationOrGroup, {
        clientName,
        credentialType: credentialParameterType
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
  // TODO: remove hard-coded for package
  if (dpgContext.rlcOptions?.packageDetails?.name) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: dpgContext.rlcOptions?.packageDetails?.name,
      namedImports: [options.clientName]
    });
  }

  for (const example of method.operation.examples ?? []) {
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
        param.parameter.name === "subscriptionId" &&
        dpgContext.rlcOptions?.azureArm
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
    if (dpgContext.rlcOptions?.azureArm) {
      exampleFunctionBody.push(
        `const subscriptionId = ${subscriptionIdValue};`
      );
      clientParams.push("subscriptionId");
    }
    exampleFunctionBody.push(
      `const client = new ${options.clientName}(${clientParams.join(", ")});`
    );

    // prepare operation-level parameters
    for (const param of example.parameters) {
      if (param.parameter.onClient === true) {
        continue;
      }
      const paramValue = `${getParameterValue(param.value)}`;
      methodParams.push(paramValue);
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
      returnType: exampleFunctionType.returnType,
      statements: exampleFunctionType.body,
      docs: [
        `This sample demonstrates how to ${normalizedDescription}\n\n@summary ${normalizedDescription}\nx-ms-original-file: ${example.filePath}`
      ]
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
      // TODO: handle the client name and serialization name gaps
      const values = [];
      const additionalPropertiesValue =
        value.kind === "model" ? value?.additionalPropertiesValue : {};
      for (const propName in {
        ...value.value,
        ...additionalPropertiesValue
      }) {
        const propValue = value.value[propName];
        if (propValue === undefined || propValue === null) {
          continue;
        }
        const propRetValue = `"${propName}": ` + getParameterValue(propValue);
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
  return str
    .replace(/_/g, " ")
    .replace(/\//g, " Or ")
    .replace(/,|\.|\(|\)/g, " ")
    .replace("'s ", " ")
    .replace(/\[/g, " ")
    .replace(/\]/g, " ");
}
