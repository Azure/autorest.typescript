import { getClientName } from "./helpers/nameConstructors.js";
import { NameType, camelCase, normalizeName } from "./helpers/nameUtils.js";
import {
  RLCModel,
  RLCSampleGroup,
  File as RLCFile,
  Paths,
  OperationMethod,
  RLCSampleDetail,
  SampleParameters,
  SampleParameter,
  PathMetadata,
  OperationParameter,
  ObjectSchema,
  SchemaContext,
  Schema
} from "./interfaces.js";
import { sampleTemplate } from "./static/sampleTemplate.js";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import * as path from "path";
import { isObjectSchema } from "./helpers/schemaHelpers.js";

export function buildSamples(model: RLCModel) {
  if (!model.options || !model.options.packageDetails) {
    return;
  }
  let { generateSample } = model.options;
  generateSample =
    generateSample === true ||
    (generateSample === undefined && (model.sampleGroups ?? []).length > 0);
  if (!generateSample) {
    return;
  }
  const sampleGroups: RLCSampleGroup[] | undefined = model.sampleGroups;
  if (!sampleGroups || sampleGroups.length === 0) {
    return;
  }
  const sampleFiles: RLCFile[] = [];
  for (const sampleGroup of sampleGroups) {
    const sampleGroupFileContents = hbs.compile(sampleTemplate, {
      noEscape: true
    });
    const filePath = path.join("samples-dev", `${sampleGroup.filename}.ts`);
    sampleFiles.push({
      path: filePath,
      content: sampleGroupFileContents(sampleGroup)
    });
  }
  return sampleFiles;
}

export function buildSamplesOnFakeContent(model: RLCModel) {
  const rlcSampleGroups: RLCSampleGroup[] = [];
  // Get all paths
  const paths: Paths = model.paths;
  const clientName = getClientName(model);
  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;
  const defaultFactoryName = camelCase(`create ${clientInterfaceName}`);
  const packageName = model.options?.packageDetails?.name ?? "";
  const methodParameterMap = buildMethodParamMap(model);
  const schemaObjectMap = buildSchemaObjectMap(model);
  for (const path in paths) {
    const pathDetails = paths[path];
    const methods = pathDetails.methods;
    for (const method in methods) {
      const importedDict: Record<string, Set<string>> = {};
      const detail: OperationMethod = methods[method][0];
      const operatonConcante = `${pathDetails.operationGroupName}_${detail.operationName}`;
      const operationPrefix = camelCase(
        transformSpecialLetterToSpace(operatonConcante)
      );
      const sampleGroup: RLCSampleGroup = {
        filename: `${operationPrefix}Sample`,
        defaultFactoryName,
        clientPackageName: packageName,
        samples: []
      };

      // initialize the sample
      const sample: RLCSampleDetail = {
        description: `call operation ${detail.operationName}`,
        name: `${operationPrefix}Sample`,
        path,
        defaultFactoryName,
        clientParamAssignments: [],
        pathParamAssignments: [],
        methodParamAssignments: [],
        clientParamNames: "",
        pathParamNames: "",
        methodParamNames: "",
        method,
        isLRO: detail.operationHelperDetail?.lroDetails?.isLongRunning ?? false,
        isPaging: detail.operationHelperDetail?.isPageable ?? false,
        useLegacyLro: false
      };
      // client-level, path-level and method-level parameter preparation
      const parameters: SampleParameters = {
        client: convertClientLevelParameters(
          model,
          importedDict,
          schemaObjectMap
        ),
        path: convertPathLevelParameters(pathDetails, path, schemaObjectMap),
        method: convertMethodLevelParameters(
          methods[method],
          importedDict,
          schemaObjectMap,
          packageName,
          methodParameterMap.get(operatonConcante)
        )
      };
      // enrich parameter details
      enrichParameterInSample(sample, parameters);
      // enrich LRO and pagination info
      enrichLROAndPagingInSample(detail, importedDict, packageName);
      sampleGroup.samples.push(sample);
      rlcSampleGroups.push(sampleGroup);
      enrichImportedString(
        sampleGroup,
        importedDict,
        defaultFactoryName,
        packageName
      );
    }
  }
  return rlcSampleGroups;
}

function enrichLROAndPagingInSample(
  operation: OperationMethod,
  importedDict: Record<string, Set<string>>,
  packageName: string
) {
  const isLRO =
      operation.operationHelperDetail?.lroDetails?.isLongRunning ?? false,
    isPaging = operation.operationHelperDetail?.isPageable ?? false;
  if (isPaging) {
    if (isLRO) {
      // TODO: report warning this is not supported
    }
    addValueInImportedDict(packageName, "paginate", importedDict);
  } else if (isLRO) {
    addValueInImportedDict(packageName, "getLongRunningPoller", importedDict);
  }
}

function transformSpecialLetterToSpace(str: string) {
  if (!str) {
    return str;
  }
  return str
    .replace(/_/g, " ")
    .replace(/\//g, " Or ")
    .replace(/,|\.|\(|\)/g, " ")
    .replace("'s ", " ");
}

const tokenCredentialPackage = "@azure/identity";
const apiKeyCredentialPackage = "@azure/core-auth";

function enrichImportedString(
  sampleGroup: RLCSampleGroup,
  importedDict: Record<string, Set<string>>,
  defaultFactoryName: string,
  packageName: string
) {
  const importedTypes: string[] = [];
  if (!!importedDict[packageName] && importedDict[packageName].size > 0) {
    const otherTypes = Array.from(importedDict[packageName]).join(", ");
    importedTypes.push(
      `import ${defaultFactoryName}, { ${otherTypes} } from "${packageName}";`
    );
  } else {
    importedTypes.push(`import ${defaultFactoryName} from "${packageName}";`);
  }
  if (importedDict[tokenCredentialPackage]) {
    const otherTypes = Array.from(importedDict[tokenCredentialPackage]).join(
      ", "
    );
    importedTypes.push(
      `import { ${otherTypes} } from "${tokenCredentialPackage}";`
    );
  }
  if (importedDict[apiKeyCredentialPackage]) {
    const otherTypes = Array.from(importedDict[apiKeyCredentialPackage]).join(
      ", "
    );
    importedTypes.push(
      `import { ${otherTypes} } from "${apiKeyCredentialPackage}";`
    );
  }
  sampleGroup.importedTypes = importedTypes;
}

function enrichParameterInSample(
  sample: RLCSampleDetail,
  parameters: SampleParameters
) {
  sample.clientParamAssignments = getAssignmentStrArray(parameters.client);
  sample.clientParamNames = getContactParameterNames(parameters.client);
  sample.pathParamAssignments = getAssignmentStrArray(parameters.path);
  sample.pathParamNames = getContactParameterNames(parameters.path);
  sample.methodParamAssignments = getAssignmentStrArray(parameters.method);
  sample.methodParamNames = parameters.method.length > 0 ? "options" : "";
}

function getAssignmentStrArray(parameters: SampleParameter[]) {
  return parameters.filter((p) => !!p.assignment).map((p) => p.assignment!);
}

function getContactParameterNames(parameters: SampleParameter[]) {
  return parameters
    .filter((p) => p.name != null)
    .map((p) => p.name!)
    .join(",");
}

function convertClientLevelParameters(
  model: RLCModel,
  importedDict: Record<string, Set<string>>,
  schemaMap: Map<string, Schema>
): SampleParameter[] {
  if (!model.options) {
    return [];
  }
  const clientParams: SampleParameter[] = [];
  const urlParameters = model?.urlInfo?.urlParameters?.filter(
    // Do not include parameters with constant values in the signature, these should go in the options bag
    (p) => p.value === undefined
  );
  const { addCredentials, credentialScopes, credentialKeyHeaderName } =
    model.options;
  const hasUrlParameter = !!urlParameters,
    hasCredentials =
      addCredentials &&
      ((credentialScopes && credentialScopes.length > 0) ||
        credentialKeyHeaderName);

  if (hasUrlParameter) {
    // convert the host parameters in url
    const clientParamAssignments = urlParameters.map((urlParameter) => {
      const urlValue = mockParameterTypeValue(
        urlParameter.type,
        urlParameter.name,
        schemaMap
      );
      const normalizedName = normalizeName(
        urlParameter.name,
        NameType.Parameter
      );
      return {
        name: normalizedName,
        assignment: `const ${normalizedName} = ` + urlValue + `;`
      };
    });

    clientParams.push(...clientParamAssignments);
  }
  if (hasCredentials) {
    // Currently only support token credential
    if (credentialKeyHeaderName) {
      clientParams.push({
        name: "credential",
        assignment: `const credential = new AzureKeyCredential("{Your API key}");`
      });
      addValueInImportedDict(
        apiKeyCredentialPackage,
        "AzureKeyCredential",
        importedDict
      );
    } else {
      clientParams.push({
        name: "credential",
        assignment: "const credential = new DefaultAzureCredential();"
      });
      addValueInImportedDict(
        tokenCredentialPackage,
        "DefaultAzureCredential",
        importedDict
      );
    }
  }
  return clientParams;
}

function convertPathLevelParameters(
  pathDetail: PathMetadata,
  path: string,
  schemaMap: Map<string, Schema>
): SampleParameter[] {
  const pathItself = {
    name: `"${path}"`
  };
  const pathParams = (pathDetail || []).pathParameters.map((p) => {
    const pathParam: SampleParameter = {
      name: normalizeName(p.name, NameType.Parameter)
    };
    const value = mockParameterTypeValue(p.type, p.name, schemaMap);
    pathParam.assignment = `const ${pathParam.name} =` + value + `;`;
    return pathParam;
  });
  return [pathItself].concat(pathParams);
}

function convertMethodLevelParameters(
  methods: OperationMethod[],
  importedDict: Record<string, Set<string>>,
  schemaMap: Map<string, Schema>,
  packageName: string,
  operationParameter?: OperationParameter
): SampleParameter[] {
  if (!methods || methods.length == 0 || !operationParameter) {
    return [];
  }
  const rawMethodParams = operationParameter.parameters;
  if (rawMethodParams.length !== 1) {
    // TODO: handle multi-part form data
    return [];
  }
  const method = methods[0];
  const requestParameter = rawMethodParams[0];
  const hasInputParams = !!rawMethodParams && rawMethodParams.length > 0,
    requireParam = !method.hasOptionalOptions;
  if (!hasInputParams && !requireParam) {
    return [];
  }

  const allSideAssignments = [],
    querySideAssignments: string[] = [],
    headerSideAssignments: string[] = [];
  if (
    !!requestParameter.body &&
    requestParameter.body &&
    requestParameter.body.body &&
    requestParameter.body.body?.length > 0
  ) {
    const type = requestParameter.body.body[0].type;
    allSideAssignments.push(
      ` body: ` + mockParameterTypeValue(type, "body", schemaMap)
    );
  }

  requestParameter.parameters
    ?.filter((p) => p.type === "query")
    .forEach((p) => {
      const name = `${p.name}`;
      querySideAssignments.push(
        `${name}: ` + mockParameterTypeValue(p.param.type, name, schemaMap)
      );
    });

  if (querySideAssignments.length > 0) {
    allSideAssignments.push(
      ` queryParameters: { ` + querySideAssignments.join(", ") + `}`
    );
  }
  requestParameter.parameters
    ?.filter((p) => p.type === "header")
    .forEach((p) => {
      const name = `${p.name}`;
      querySideAssignments.push(
        `${name}: ` + mockParameterTypeValue(p.param.type, name, schemaMap)
      );
    });
  if (headerSideAssignments.length > 0) {
    allSideAssignments.push(
      ` headers: { ` + headerSideAssignments.join(", ") + `}`
    );
  }
  let value: string = `{}`;
  if (allSideAssignments.length > 0) {
    value = `{ ` + allSideAssignments.join(", ") + `}`;
  } else {
    return [];
  }

  const optionParam: SampleParameter = {
    name: "options",
    assignment: `const options: ${method.optionsName} =` + value + `;`
  };
  addValueInImportedDict(packageName, method.optionsName, importedDict);
  return [optionParam];
}

function addValueInImportedDict(
  key: string,
  val: string,
  importedDict: Record<string, Set<string>>
) {
  if (!importedDict[key]) {
    importedDict[key] = new Set<string>();
  }
  importedDict[key].add(val);
}

function buildMethodParamMap(model: RLCModel): Map<string, OperationParameter> {
  const map = new Map<string, OperationParameter>();
  (model.parameters ?? []).forEach((p) => {
    const operatonConcante = `${p.operationGroup}_${p.operationName}`;
    map.set(operatonConcante, p);
  });
  return map;
}

function buildSchemaObjectMap(model: RLCModel) {
  const map = new Map<string, Schema>();
  (model.schemas ?? [])
    .filter(
      (o) =>
        isObjectSchema(o) &&
        (o as ObjectSchema).usage?.some((u) =>
          [SchemaContext.Input].includes(u)
        )
    )
    .forEach((o) => {
      map.set(o.name, o);
    });
  return map;
}

function mockParameterTypeValue(
  type: string,
  parameterName: string,
  schemaMap: Map<string, ObjectSchema>,
  path: Set<string> = new Set()
): string | undefined {
  if (type === "string") {
    return `'{Your ${parameterName}}'`;
  } else if (type === "number") {
    return "123";
  } else if (type === "boolean") {
    return "true";
  } else if (type === "Date") {
    return "new Date()";
  } else if (type === "unknown") {
    return `"Unknown Type"`;
  } else if (containsStringLiteral(type)) {
    return `"${getStringLiteral(type)}"`;
  } else if (isObject(type, schemaMap)) {
    if (path.has(type)) {
      // skip generating if self references
      return `{} as any`;
    }
    path.add(type);
    // object
    const values: string[] = [];
    const schema = schemaMap.get(type);
    const properties = schema?.properties ?? {};
    for (const prop in properties) {
      const propName = prop;
      const property = properties[prop];
      if (property.readOnly) {
        continue;
      }
      if (property.type === "never") {
        continue;
      }
      let propRetValue =
        `${propName}: ` +
        mockParameterTypeValue(
          property.typeName ?? property.type,
          propName,
          schemaMap,
          path
        );
      values.push(propRetValue);
    }

    return `{${values.join(", ")}}`;
  } else if (isArray(type)) {
    let arrayType;
    if (isArrayObject(type)) {
      arrayType = getArrayObjectType(type);
    } else if (isNativeArray(type)) {
      arrayType = getNativeArrayType(type);
    }
    const itemValue = arrayType
      ? mockParameterTypeValue(arrayType, parameterName, schemaMap, path)
      : undefined;
    return itemValue ? `[${itemValue}]` : `[]`;
  } else if (isRecord(type)) {
    const recordType = getRecordType(type);
    console.log(">>>>>>>>>>recordType", recordType);
    return recordType
      ? `{"key": ${mockParameterTypeValue(
          recordType,
          parameterName,
          schemaMap,
          path
        )}}`
      : `{}`;
  } else if (isUnion(type, schemaMap)) {
    const unionType = getUnionType(type);
    return mockParameterTypeValue(unionType, parameterName, schemaMap, path);
  }
  path.add(type);
}

function containsStringLiteral(type: string) {
  console.log(">>>>>>>>>>>type", type);
  const reg = /^"([a-zA-Z0-9\s]*)"$/g;
  return reg.test(type);
}

function getStringLiteral(type: string) {
  const reg = /^"(?<first>[a-zA-Z0-9\s]*)"$/g;
  return reg.exec(type)?.groups?.first;
}

function isObject(type: string, schemaMap: Map<string, ObjectSchema>) {
  return Boolean(schemaMap.get(type));
}

function isRecord(type: string) {
  const reg = /Record<([a-zA-Z].+),(\s*)([a-zA-Z].+)>/g;
  return reg.test(type);
}

function getRecordType(type: string) {
  const reg = /Record<([a-zA-Z].+),(\s*)(?<type>[a-zA-Z].+)>/g;
  return reg.exec(type)?.groups?.type;
}

function isArray(type: string) {
  return isArrayObject(type) || isNativeArray(type);
}

function isArrayObject(type: string) {
  const reg = /Array<([a-zA-Z].+)>/g;
  const ret = reg.test(type);
  return ret;
}

function getArrayObjectType(type: string) {
  const reg = /Array<(?<type>[a-zA-Z].+)>/g;
  const ret = reg.exec(type);
  console.log(">>>>>>>>>>>>array", ret?.groups);
  return ret?.groups?.type;
}

function isNativeArray(type: string) {
  const reg1 = /([a-zA-Z].+)\[\]/g;
  const ret = reg1.test(type);
  return ret;
}

function getNativeArrayType(type: string) {
  const reg = /(?<type>[a-zA-Z].+)\[\]/g;
  return reg.exec(type)?.groups?.type;
}

function isUnion(type: string, schemaMap: Map<string, ObjectSchema>) {
  const members = type.split("|").map((m) => m.trim());
  return members.length > 1;
}

function getUnionType(type: string) {
  return type.split("|").map((m) => m.trim())[0];
}
