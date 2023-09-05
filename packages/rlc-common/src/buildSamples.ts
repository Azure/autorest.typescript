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
  ParameterMetadatas,
  OperationParameter
} from "./interfaces.js";
import { sampleTemplate } from "./static/sampleTemplate.js";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";

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
    sampleFiles.push({
      path: `samples-dev/${sampleGroup.filename}.ts`,
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
  const methodParameterMap = constructMethodParamMap(model);
  for (const path in paths) {
    const importedDict: Record<string, Set<string>> = {};
    const pathDetails = paths[path];
    const methods = pathDetails.methods;
    for (const method in methods) {
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
        description: `Auto generated sample for operation ${pathDetails.operationGroupName} ${detail.operationName}`,
        originalFileLocation: `NA`,
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
        client: convertClientLevelParameters(model, importedDict),
        path: convertPathLevelParameters(pathDetails, path),
        method: convertMethodLevelParameters(
          methodParameterMap.get(operatonConcante),
          methods[method],
          importedDict
        )
      };
      // enrich parameter details
      enrichParameterInSample(sample, parameters);
      // enrich LRO and pagination info
      // enrichLROAndPagingInSample(sample, operation, importedDict);
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
  if (!!importedDict[packageName]) {
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
  importedDict: Record<string, Set<string>>
): SampleParameter[] {
  return [];
}

function convertPathLevelParameters(
  pathDetail: PathMetadata,
  path: string
): SampleParameter[] {
  const pathItself = {
    name: `"${path}"`
  };
  const pathParams = (pathDetail || []).pathParameters.map((p) => {
    const pathParam: SampleParameter = {
      name: normalizeName(p.name, NameType.Parameter)
    };
    // path params are mandatory we'll leave it empty if no input
    // TODO: moke the values here
    const value = `""`;
    pathParam.assignment = `const ${pathParam.name} =` + value + `;`;
    return pathParam;
  });
  return [pathItself].concat(pathParams);
}

function convertMethodLevelParameters(
  operationParameter?: OperationParameter,
  methods?: OperationMethod[],
  importedDict?: Record<string, Set<string>>
): SampleParameter[] {
  if (!methods || methods.length == 0 || !operationParameter) {
    return [];
  }
  const rawMethodParams = operationParameter.parameters;
  const method = methods[0];
  const hasInputParams = !!rawMethodParams && rawMethodParams.length > 0,
    requireParam = !method.hasOptionalOptions;
  if (!hasInputParams && !requireParam) {
    return [];
  }

  const allSideAssignments = [],
    querySideAssignments: string[] = [],
    headerSideAssignments: string[] = [];
  rawMethodParams
    .filter((p) => p.parameter.protocol.http?.in == ParameterLocation.Body)
    .forEach((p) => {
      allSideAssignments.push(
        ` body: ` + getParameterAssignment(p.exampleValue, true)
      );
    });
  rawMethodParams
    .filter((p) => p.parameter.protocol.http?.in == ParameterLocation.Query)
    .forEach((p) => {
      const name = `"${
        getLanguageMetadata(p.parameter.language).serializedName ||
        p.parameter.language.default.name
      }"`;

      querySideAssignments.push(
        `${name}: ` + getParameterAssignment(p.exampleValue, true)
      );
    });
  if (querySideAssignments.length > 0) {
    allSideAssignments.push(
      ` queryParameters: { ` + querySideAssignments.join(", ") + `}`
    );
  }
  rawMethodParams
    .filter((p) => p.parameter.protocol.http?.in == ParameterLocation.Header)
    .forEach((p) => {
      const name = `"${
        getLanguageMetadata(p.parameter.language).serializedName
      }"`;
      headerSideAssignments.push(
        `${name}: ` + getParameterAssignment(p.exampleValue, true)
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
  }
  const optionParam: SampleParameter = {
    name: "options",
    assignment: `const options: ${method.optionsName} =` + value + `;`
  };
  addValueInImportedDict(getPackageName(), method.optionsName, importedDict);
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

function constructMethodParamMap(
  model: RLCModel
): Map<string, OperationParameter> {
  const map = new Map<string, OperationParameter>();
  (model.parameters ?? []).forEach((p) => {
    const operatonConcante = `${p.operationGroup}_${p.operationName}`;
    map.set(operatonConcante, p);
  });
  return map;
}
