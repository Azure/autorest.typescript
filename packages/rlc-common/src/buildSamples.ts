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
  Schema,
  ArraySchema,
  DictionarySchema
} from "./interfaces.js";
import { sampleTemplate } from "./static/sampleTemplate.js";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import * as path from "path";
import { isObjectSchema } from "./helpers/schemaHelpers.js";
import { getImmediateParentsNames } from "./buildObjectTypes.js";

export function buildSamples(model: RLCModel) {
  if (!model.options || !model.options.packageDetails) {
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

export function buildSamplesOnMockContent(model: RLCModel) {
  if (model.options?.multiClient || model.options?.isModularLibrary) {
    // Not support to generate if multiple clients
    // Not support to generate if modular libraries
    return;
  }
  const rlcSampleGroups: RLCSampleGroup[] = [];
  // Get all paths
  const paths: Paths = model.paths;
  const clientName = getClientName(model);
  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;
  const defaultFactoryName = normalizeName(
    camelCase(`create ${clientInterfaceName}`),
    NameType.Method
  );
  const packageName = model.options?.packageDetails?.name ?? "";
  const methodParameterMap = buildMethodParamMap(model);
  const schemaObjectMap = buildSchemaObjectMap(model);
  for (const path in paths) {
    const pathDetails = paths[path];
    const methods = pathDetails.methods;
    for (const method in methods) {
      const importedDict: Record<string, Set<string>> = {};
      const detail: OperationMethod = methods[method][0];
      const operatonConcante = getOperationConcate(
        detail.operationName,
        pathDetails.operationGroupName,
        model.options?.sourceFrom
      );
      const operationPrefix = normalizeName(
        camelCase(transformSpecialLetterToSpace(operatonConcante)),
        NameType.Method
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
  if (
    !methods ||
    methods.length === 0 ||
    !operationParameter ||
    operationParameter.parameters.length === 0
  ) {
    return [];
  }
  const rawMethodParams = operationParameter.parameters;
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
    const body = requestParameter.body.body[0];
    const bodyTypeName = body.typeName ?? body.type;
    if (bodyTypeName !== "string" && body.oriSchema) {
      schemaMap.set(bodyTypeName, body.oriSchema);
    }
    allSideAssignments.push(
      ` body: ` + mockParameterTypeValue(bodyTypeName, "body", schemaMap)
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
    .filter((p) => p.name.toLowerCase() !== "contenttype")
    .forEach((p) => {
      const name = `${p.name}`;
      headerSideAssignments.push(
        `${name}: ` + mockParameterTypeValue(p.param.type, name, schemaMap)
      );
    });
  if (headerSideAssignments.length > 0) {
    allSideAssignments.push(
      ` headers: { ` + headerSideAssignments.join(", ") + `}`
    );
  }
  const contentType = requestParameter.parameters
    ?.filter((p) => p.type === "header")
    .filter((p) => p.name.toLowerCase() === "contenttype");
  if (contentType && contentType.length > 0) {
    allSideAssignments.push(
      ` ${contentType[0].name}: ` +
        mockParameterTypeValue(
          contentType[0].param.type,
          contentType[0].name,
          schemaMap
        )
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
    const operatonConcante = getOperationConcate(
      p.operationName,
      p.operationGroup,
      model.options?.sourceFrom
    );
    map.set(operatonConcante, p);
  });
  return map;
}

function getOperationConcate(
  opName: string,
  opGroup: string,
  sourceFrom?: string
) {
  return sourceFrom === "Swagger"
    ? opGroup === "" || opGroup === "Client"
      ? opName
      : `${opGroup}${opName}`
    : `${opGroup}_${opName}`;
}

function buildSchemaObjectMap(model: RLCModel) {
  // include interfaces
  const map = new Map<string, Schema>();
  const allSchemas = (model.schemas ?? []).filter(
    (o) =>
      isObjectSchema(o) &&
      (o as ObjectSchema).usage?.some((u) => [SchemaContext.Input].includes(u))
  );
  allSchemas.forEach((o) => {
    map.set(o.name, o);
  });

  return map;
}

function mockParameterTypeValue(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
): string | undefined {
  type = leaveBracket(type?.trim());
  let tsType: TypeScriptType | undefined;
  // Give priority to suggest the ts-type from schema
  if (schemaMap.has(type)) {
    tsType = toTypeScriptTypeFromSchema(schemaMap.get(type)!);
  }
  // Fall back to suggest ts-type from the type iteself
  if (!tsType) {
    tsType = toTypeScriptTypeFromName(type);
  }
  switch (tsType) {
    case TypeScriptType.string:
      return `"{Your ${leaveStringQuotes(parameterName)}}"`;
    case TypeScriptType.number:
      return "123";
    case TypeScriptType.boolean:
      return "true";
    case TypeScriptType.date:
      return "new Date()";
    case TypeScriptType.unknown:
      return `"Unknown Type"`;
    case TypeScriptType.object: {
      return mockObjectValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.array: {
      return mockArrayValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.record: {
      return mockRecordValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.enum:
    case TypeScriptType.union: {
      return mockUnionValues(type, parameterName, schemaMap, path);
    }
    case TypeScriptType.constant:
      return type;
  }
  return `undefined /**FIXME */`;
}

function mockUnionValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  const schema = schemaMap.get(type);
  if (schema && schema.enum && schema.enum.length > 0) {
    const first = schema.enum[0];
    const itemType = schema.typeName ?? schema.type;
    if (itemType === "string" || itemType === undefined) {
      return `"${first}"`;
    } else if (itemType === "number") {
      return `${first}`;
    }
    return mockParameterTypeValue(
      first.typeName ?? first.type ?? first,
      parameterName,
      schemaMap,
      path
    );
  }
  const unionType = getUnionType(type);
  return mockParameterTypeValue(unionType, parameterName, schemaMap, path);
}

function mockRecordValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  let recordType;
  const schema = schemaMap.get(type) as DictionarySchema;
  if (schema && schema.additionalProperties) {
    recordType =
      schema.additionalProperties.typeName ?? schema.additionalProperties.type;
    if (recordType !== "string" && !schemaMap.has(recordType)) {
      schemaMap.set(recordType, schema.additionalProperties);
    }
  } else {
    recordType = getRecordType(type);
  }

  return recordType
    ? `{"key": ${mockParameterTypeValue(
        recordType,
        parameterName,
        schemaMap,
        path
      )}}`
    : `{}`;
}

function mockArrayValues(
  type: string,
  parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  let arrayType;
  const schema = schemaMap.get(type) as ArraySchema;
  if (schema && schema.items) {
    arrayType = schema.items.typeName ?? schema.items.type;
    if (arrayType !== "string" && !schemaMap.has(arrayType)) {
      schemaMap.set(arrayType, schema.items);
    }
  } else if (isArrayObject(type)) {
    arrayType = getArrayObjectType(type);
  } else if (isNativeArray(type)) {
    arrayType = getNativeArrayType(type);
  }
  const itemValue = arrayType
    ? mockParameterTypeValue(arrayType, parameterName, schemaMap, path)
    : undefined;
  return itemValue ? `[${itemValue}]` : `[]`;
}

function mockObjectValues(
  type: string,
  _parameterName: string,
  schemaMap: Map<string, Schema>,
  path: Set<string> = new Set()
) {
  if (path.has(type)) {
    // skip generating if self referenced
    return `{} as any /**FIXME */`;
  }
  path.add(type);
  // add object's properties
  const values: string[] = [];
  const schema = schemaMap.get(type) as ObjectSchema;
  const allPropNames = new Set<string>();
  extractObjectProperties(
    schema?.properties ?? {},
    schemaMap,
    allPropNames,
    values,
    path
  );

  // add parents' properties
  const parents = getAllParents(schema, schemaMap);
  for (let parent of parents) {
    extractObjectProperties(
      (parent as ObjectSchema)?.properties ?? {},
      schemaMap,
      allPropNames,
      values,
      path
    );
  }

  return `{${values.join(", ")}}`;
}

function getAllParents(
  schema: ObjectSchema,
  schemaMap: Map<string, Schema>
): Schema[] {
  if (!schema) {
    return [];
  }
  const isVisited = new Set<string>();
  dfs(schema);
  return Array.from(isVisited)
    .filter((p) => schemaMap.get(p) !== undefined)
    .map((p) => schemaMap.get(p)!);

  function dfs(root?: Schema) {
    if (!root) {
      return;
    }
    const parents = getImmediateParentsNames(root, [SchemaContext.Input]);
    for (let parent of parents) {
      if (isVisited.has(parent)) {
        continue;
      }
      dfs(schemaMap.get(parent));
      isVisited.add(parent);
    }
  }
}

function extractObjectProperties(
  properties: Record<string, Schema>,
  schemaMap: Map<string, Schema>,
  allPropNames: Set<string>,
  values: string[],
  path: Set<string>
) {
  for (const prop in properties) {
    const propName = prop;
    const propertySchema = properties[prop];
    if (propertySchema.readOnly) {
      continue;
    }
    if (propertySchema.type === "never") {
      continue;
    }
    if (allPropNames.has(propName)) {
      continue;
    }
    const propType = propertySchema.typeName ?? propertySchema.type;
    if (propType !== "string" && !schemaMap.has(propType)) {
      schemaMap.set(propType, propertySchema);
    }
    allPropNames.add(propName);
    let propRetValue =
      `${propName}: ` +
      mockParameterTypeValue(propType, propName, schemaMap, path);
    values.push(propRetValue);
  }
}

function isQuotedString(type: string) {
  return (
    /^"([a-zA-Z0-9=;\/\+\-\s]*)"$/g.test(type) ||
    /^'([a-zA-Z0-9=;\/\+\-\s]*)'$/g.test(type)
  );
}

function isRecord(type: string) {
  return /^Record<([a-zA-Z].+),(\s*)([a-zA-Z].+)>$/g.test(type);
}

function getRecordType(type: string) {
  return /Record<([a-zA-Z].+),(\s*)(?<type>[a-zA-Z].+)>/g.exec(type)?.groups
    ?.type;
}

function isArray(type: string) {
  return isArrayObject(type) || isNativeArray(type);
}

function isArrayObject(type: string) {
  return /(^Array<([a-zA-Z].+)>$)/g.test(type);
}

function getArrayObjectType(type: string) {
  return /Array<(?<type>[a-zA-Z].+)>/g.exec(type)?.groups?.type;
}

function isNativeArray(type: string) {
  return /(^[a-zA-Z].+)\[\]$/g.test(type);
}

function getNativeArrayType(type: string) {
  return /(?<type>[a-zA-Z].+)\[\]/g.exec(type)?.groups?.type;
}

function isUnion(type: string) {
  const members = type.split("|").map((m) => m.trim());
  return members.length > 1;
}

function getUnionType(type: string) {
  return leaveBracket(type.split("|").map((m) => m.trim())[0]);
}

function leaveBracket(type: string) {
  if (!type || type.length < 2) {
    return type;
  } else if (type.startsWith("(") && type.endsWith(")")) {
    return type.slice(1, type.length - 1);
  }
  return type;
}

function leaveStringQuotes(str: string) {
  const doubleQuotes = /^"(?<str>[a-zA-Z0-9=;\/\+\-\s]*)"$/g;
  const singleQuote = /^'(?<str>[a-zA-Z0-9=;\/\+\-\s]*)'$/g;

  return (
    doubleQuotes.exec(str)?.groups?.str ??
    singleQuote.exec(str)?.groups?.str ??
    str
  );
}

export enum TypeScriptType {
  string,
  date,
  number,
  boolean,
  constant,
  record,
  array,
  object,
  union,
  unknown,
  enum
}

function toTypeScriptTypeFromSchema(
  schema: Schema
): TypeScriptType | undefined {
  if (
    schema.type === "string" &&
    ["date-time", "date"].includes(schema?.format ?? "")
  ) {
    return TypeScriptType.date;
  } else if (schema.type !== "union" && schema.enum && schema.enum.length > 0) {
    return TypeScriptType.enum;
  } else if (
    schema.isConstant === true ||
    isConstant(schema.typeName ?? schema.type)
  ) {
    return TypeScriptType.constant;
  } else if (schema.type === "number") {
    return TypeScriptType.number;
  } else if (schema.type === "boolean") {
    return TypeScriptType.boolean;
  } else if (schema.type === "string") {
    return TypeScriptType.string;
  } else if (schema.type === "unknown") {
    return TypeScriptType.unknown;
  } else if (schema.type === "union") {
    return TypeScriptType.union;
  } else if (schema.type === "dictionary") {
    return TypeScriptType.record;
  } else if (schema.type === "array") {
    return TypeScriptType.array;
  } else if (schema.type === "object") {
    return TypeScriptType.object;
  }
}

function toTypeScriptTypeFromName(
  typeName: string
): TypeScriptType | undefined {
  if (typeName === "Date") {
    return TypeScriptType.date;
  } else if (typeName === "string") {
    return TypeScriptType.string;
  } else if (typeName === "number") {
    return TypeScriptType.number;
  } else if (typeName === "boolean") {
    return TypeScriptType.boolean;
  } else if (typeName === "unknown") {
    return TypeScriptType.unknown;
  } else if (isConstant(typeName)) {
    return TypeScriptType.constant;
  } else if (isRecord(typeName)) {
    return TypeScriptType.record;
  } else if (isArray(typeName)) {
    return TypeScriptType.array;
  } else if (isUnion(typeName)) {
    return TypeScriptType.union;
  }
}

function isConstant(typeName: string) {
  const constantSet = new Set(["true", "false", "never", "null"]);
  return (
    constantSet.has(typeName) || isNumeric(typeName) || isQuotedString(typeName)
  );
}

function isNumeric(str: string) {
  if (typeof str !== "string") return false;
  return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}
