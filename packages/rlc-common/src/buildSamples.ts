// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import * as path from "path";
import { isObjectSchema } from "./helpers/schemaHelpers.js";
import { mockParameterTypeValue } from "./helpers/mockValueUtil.js";

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
