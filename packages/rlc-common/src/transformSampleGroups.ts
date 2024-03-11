import { generateParameterTypeValue } from "./helpers/valueGenerationUtil.js";
import { getClientName } from "./helpers/nameConstructors.js";
import { normalizeName, NameType, camelCase } from "./helpers/nameUtils.js";
import { buildSchemaObjectMap } from "./helpers/schemaHelpers.js";
import {
  RLCModel,
  RLCSampleGroup,
  Paths,
  OperationMethod,
  RLCSampleDetail,
  SampleParameters,
  SampleParameter,
  Schema,
  PathMetadata,
  OperationParameter
} from "./interfaces.js";

/**
 * Transform the sample data based RLC detail e.g path, operations & schemas
 * @param model RLC detail
 * @param allowMockValue allow to mock value if not exist, currently we always generate mock value
 * @returns Generated sample data or undefined if not support to generate
 */
export function transformSampleGroups(model: RLCModel, allowMockValue = true) {
  if (model.options?.multiClient || model.options?.isModularLibrary) {
    // Not support to generate if multiple clients
    // Not support to generate if modular libraries
    return;
  }
  if (
    (model.sampleGroups && model.sampleGroups.length > 0) ||
    !allowMockValue
  ) {
    // Skip to transform if already has sample data
    // Skip to transform if not allow to mock value
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
        NameType.Operation
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
          schemaObjectMap,
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

function enrichImportedString(
  sampleGroup: RLCSampleGroup,
  importedDict: Record<string, Set<string>>,
  defaultFactoryName: string,
  packageName: string
) {
  const importedTypes: string[] = [];
  if (!importedDict[packageName] || importedDict[packageName].size === 0) {
    importedTypes.push(`import ${defaultFactoryName} from "${packageName}";`);
  }
  for (const key in importedDict) {
    const values = Array.from(importedDict[key]).join(", ");
    const hasDefaultFactory =
      key === packageName ? `${defaultFactoryName},` : "";
    importedTypes.push(
      `import ${hasDefaultFactory} { ${values} } from "${key}";`
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
  // Directly apply the inline option value as method parameter
  sample.methodParamNames =
    parameters.method.length > 0 ? parameters.method[0].value ?? "" : "";
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
  const {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName,
    customHttpAuthHeaderName,
    flavor
  } = model.options;
  const hasUrlParameter = !!urlParameters,
    hasCredentials =
      addCredentials &&
      (credentialScopes || credentialKeyHeaderName || customHttpAuthHeaderName);

  if (hasUrlParameter) {
    // convert the host parameters in url
    const clientParamAssignments = urlParameters.map((urlParameter) => {
      const urlValue = generateParameterTypeValue(
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
    const apiKeyCredentialPackage =
      flavor === "azure" ? "@azure/core-auth" : "@typespec/ts-http-runtime";
    const tokenCredentialPackage =
      flavor === "azure" ? "@azure/identity" : "@typespec/ts-http-runtime";
    if (credentialKeyHeaderName && flavor === "azure") {
      clientParams.push({
        name: "credential",
        assignment: `const credential = new AzureKeyCredential("{Your API key}");`
      });
      addValueInImportedDict(
        apiKeyCredentialPackage,
        "AzureKeyCredential",
        importedDict
      );
    } else if (
      (credentialKeyHeaderName && flavor !== "azure") ||
      customHttpAuthHeaderName
    ) {
      clientParams.push({
        name: "credential",
        assignment: `const credential = { key: "{Your API key}"};`
      });
    } else if (flavor === "azure") {
      clientParams.push({
        name: "credential",
        assignment: "const credential = new DefaultAzureCredential();"
      });
      addValueInImportedDict(
        tokenCredentialPackage,
        "DefaultAzureCredential",
        importedDict
      );
    } else {
      clientParams.push({
        name: "credential",
        assignment: `const credential = {getToken: () => Promise.resolve({ token: "{Your token}", expiresOnTimestamp: 0 })};`
      });
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
    const value = generateParameterTypeValue(p.type, p.name, schemaMap);
    pathParam.assignment = `const ${pathParam.name} =` + value + `;`;
    return pathParam;
  });
  return [pathItself].concat(pathParams);
}

function convertMethodLevelParameters(
  methods: OperationMethod[],
  schemaMap: Map<string, Schema>,
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
      ` body: ` + generateParameterTypeValue(bodyTypeName, "body", schemaMap)
    );
  }

  requestParameter.parameters
    ?.filter((p) => p.type === "query")
    .forEach((p) => {
      const name = `${p.name}`;
      querySideAssignments.push(
        `${name}: ` + generateParameterTypeValue(p.param.type, name, schemaMap)
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
        `${name}: ` + generateParameterTypeValue(p.param.type, name, schemaMap)
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
        generateParameterTypeValue(
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
    assignment: `const options =` + value + `;`,
    value
  };
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
