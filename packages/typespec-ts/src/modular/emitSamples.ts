import {
  StructureKind,
  FunctionDeclarationStructure,
  SourceFile
} from "ts-morph";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkHttpParameterExampleValue,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { useContext } from "../contextManager.js";
import { join } from "path";
import { reportDiagnostic } from "../index.js";
import { NoTarget } from "@typespec/compiler";
import { isSpreadBodyParameter } from "./helpers/typeHelpers.js";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import {
  getMethodHierarchiesMap,
  ServiceOperation
} from "../utils/operationUtil.js";
import { getSubscriptionId } from "../transform/transfromRLCOptions.js";
import {
  buildParameterValueMap,
  prepareCommonValue,
  getCredentialSampleValue,
  serializeExampleValue,
  escapeSpecialCharToSpace,
  CommonValue
} from "./helpers/sampleTestHelpers.js";

/**
 * Interfaces for samples generations
 */
type ExampleValue = CommonValue;

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

function prepareExampleParameters(
  dpgContext: SdkContext,
  method: ServiceOperation,
  parameterMap: Record<string, SdkHttpParameterExampleValue>,
  topLevelClient: SdkClientType<SdkServiceOperation>
): ExampleValue[] {
  // TODO: blocked by TCGC issue: https://github.com/Azure/typespec-azure/issues/1419
  // refine this to support generic client-level parameters once resolved
  const result: ExampleValue[] = [];
  const credentialExampleValue = getCredentialSampleValue(
    dpgContext,
    topLevelClient.clientInitialization
  );
  if (credentialExampleValue) {
    result.push(credentialExampleValue);
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
      subscriptionIdValue = serializeExampleValue(exampleValue.value);
      continue;
    }
    result.push(
      prepareCommonValue(
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
      prepareCommonValue("subscriptionId", subscriptionIdValue, false, true)
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
          prepareCommonValue(
            prop.name,
            propExample,
            prop.optional,
            prop.onClient
          )
        );
      }
    } else {
      result.push(
        prepareCommonValue(
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
        prepareCommonValue(
          param.parameter.name,
          param.value,
          true,
          param.parameter.onClient
        )
      );
    });

  return result;
}
