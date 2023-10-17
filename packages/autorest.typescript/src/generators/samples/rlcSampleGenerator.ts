import {
  ExampleParameter,
  TestCodeModel
} from "@autorest/testmodeler/dist/src/core/model";
import { getAutorestOptions, getSession } from "../../autorestSession";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { transformBaseUrl } from "../../transforms/urlTransforms";
import { camelCase } from "@azure-tools/codegen";
import { Operation, ParameterLocation } from "@autorest/codemodel";
import { isLongRunningOperation } from "../../restLevelClient/helpers/hasPollingOperations";
import { isPagingOperation } from "../../utils/extractPaginationDetails";
import { getSecurityInfoFromModel } from "../../utils/schemaHelpers";
import { getParameterAssignment } from "../../utils/valueHelpers";
import {
  Paths,
  PathMetadata,
  RLCSampleGroup,
  RLCSampleDetail,
  SampleParameter,
  SampleParameters,
  OperationMethod,
  SampleParameterPosition,
  transformSampleGroups as transformSampleGroupsFromMockValue,
  RLCModel
} from "@azure-tools/rlc-common";
import { transformPaths } from "../../restLevelClient/transforms/transformPaths";

const tokenCredentialPackage = "@azure/identity";
const apiKeyCredentialPackage = "@azure/core-auth";

export function transformRLCSampleData(
  model: TestCodeModel,
  rlcModel: RLCModel
): RLCSampleGroup[] | undefined {
  // We prefer to generate sample from swagger examples first
  const sampleGroups = transformSampleGroupsFromSwaggerExamples(model);
  if (sampleGroups && sampleGroups.length > 0) {
    return sampleGroups;
  }
  const { generateSample, generateMetadata } = getAutorestOptions();
  // If no swagger examples, we will generate mock sample
  // Allow to generate mock sample when generateSample and generateMetadata are both true
  const allowMockValue = generateSample === true && generateMetadata === true;
  return transformSampleGroupsFromMockValue(rlcModel, allowMockValue);
}

function transformSampleGroupsFromSwaggerExamples(
  model: TestCodeModel
): RLCSampleGroup[] | undefined {
  const { generateSample, multiClient } = getAutorestOptions();
  if (!generateSample || !model?.testModel?.mockTest?.exampleGroups) {
    return;
  }
  const session = getSession();
  // Currently only support single client
  if (multiClient) {
    session.info(
      "Not support to generate samples for multi-clients and return directly"
    );
    return;
  }
  const rlcSampleGroups: RLCSampleGroup[] = [];
  if (!model?.testModel?.mockTest?.exampleGroups) {
    return rlcSampleGroups;
  }
  // Get all paths
  const paths: Paths = transformPaths(model);
  const clientName = getLanguageMetadata(model.language).name;
  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;
  const defaultFactoryName = camelCase(`create ${clientInterfaceName}`);
  const rawSamplesForAll = model.testModel.mockTest.exampleGroups;
  for (const rawSamplesForOperID of rawSamplesForAll) {
    const importedDict: Record<string, Set<string>> = {};
    const operation: Operation = rawSamplesForOperID.operation;
    const path: string = operation.requests?.[0].protocol.http?.path;
    const method = operation.requests?.[0].protocol.http?.method;
    const pathDetail: PathMetadata = paths[path];
    const operatonConcante = `${rawSamplesForOperID?.operationGroup?.language?.default?.name}${rawSamplesForOperID?.operation?.language?.default?.name}`;
    const sampleGroup: RLCSampleGroup = {
      filename: `${camelCase(
        transformSpecialLetterToSpace(operatonConcante)
      )}Sample`,
      defaultFactoryName,
      clientPackageName: getPackageName(),
      samples: []
    };
    const rawSamples = rawSamplesForOperID?.examples;
    if (!rawSamples || rawSamples.length == 0) {
      session.debug(`Skip sample transformation`);
      continue;
    }
    try {
      for (const rawSample of rawSamples) {
        // initialize the sample
        const sample: RLCSampleDetail = {
          description: getLanguageMetadata(
            rawSamplesForOperID.operation.language
          ).description,
          originalFileLocation: refineOriginalFileLocation(
            rawSample.originalFile
          ),
          name: camelCase(transformSpecialLetterToSpace(rawSample?.name)),
          path,
          defaultFactoryName,
          clientParamAssignments: [],
          pathParamAssignments: [],
          methodParamAssignments: [],
          clientParamNames: "",
          pathParamNames: "",
          methodParamNames: "",
          method,
          isLRO: false,
          isPaging: false,
          useLegacyLro: false
        };
        // convert the parameters to the intermidate model - SampleParameters
        const rawParamters: Record<
          SampleParameterPosition,
          ExampleParameter[]
        > = {
          client: rawSample.clientParameters,
          path: (rawSample.methodParameters || []).filter(isPathLevelParam),
          method: (rawSample.methodParameters || []).filter(isMethodLevelParam)
        };
        // client-level, path-level and method-level parameter preparation
        const parameters: SampleParameters = {
          client: convertClientLevelParameters(
            rawParamters.client,
            model,
            importedDict
          ),
          path: convertPathLevelParameters(rawParamters.path, pathDetail, path),
          method: convertMethodLevelParameters(
            rawParamters.method,
            pathDetail.methods[method]
          )
        };
        // enrich parameter details
        enrichParameterInSample(sample, parameters);
        // enrich LRO and pagination info
        enrichLROAndPagingInSample(sample, operation, importedDict);
        sampleGroup.samples.push(sample);
      }
    } catch (error) {
      session.error("An error was encountered while transforming sample", [
        `${operation.operationId}`
      ]);
      throw error;
    }
    if (sampleGroup.samples.length == 0) {
      session.debug(`No sample found for operation - ${operation.operationId}`);
    }
    // enrich the importedTypes after all examples resolved in the same file
    rlcSampleGroups.push(sampleGroup);
    enrichImportedString(sampleGroup, importedDict, defaultFactoryName);
  }
  return rlcSampleGroups;
}

function refineOriginalFileLocation(originalFileLoc: string) {
  const parts = originalFileLoc.split("node_modules");
  return parts.length == 2 ? parts[1] : originalFileLoc;
}

function isMethodLevelParam(param: ExampleParameter) {
  const methodPositions = [
    ParameterLocation.Body,
    ParameterLocation.Query,
    ParameterLocation.Header
  ];
  return methodPositions.includes(param.parameter.protocol.http?.in);
}

function isPathLevelParam(param: ExampleParameter) {
  return param.parameter.protocol.http?.in == ParameterLocation.Path;
}

function convertClientLevelParameters(
  rawClientParams: ExampleParameter[],
  model: TestCodeModel,
  importedDict: Record<string, Set<string>>
): SampleParameter[] {
  const clientParams: SampleParameter[] = [];
  if (!rawClientParams || rawClientParams.length == 0) {
    rawClientParams = [];
  }

  const { urlParameters } = transformBaseUrl(model);
  const {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName
  } = getSecurityInfoFromModel(model.security);
  const hasUrlParameter = !!urlParameters,
    hasCredentials =
      addCredentials &&
      ((credentialScopes && credentialScopes.length > 0) ||
        credentialKeyHeaderName);
  const rawUriParameters = rawClientParams.filter(
    p => p.parameter.protocol.http?.in === ParameterLocation.Uri
  );
  if (hasUrlParameter && rawUriParameters.length > 0) {
    // convert the host parameters in url
    const clientParamAssignments = urlParameters.map(urlParameter => {
      const exampleUriParam = rawUriParameters.filter(
        param =>
          getLanguageMetadata(param.parameter.language).serializedName ===
          urlParameter.name
      );
      const urlValue = getParameterAssignment(
        exampleUriParam[0].exampleValue,
        true
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

function convertPathLevelParameters(
  rawPathParams: ExampleParameter[],
  pathDetail: PathMetadata,
  path: string
): SampleParameter[] {
  const res: Record<string, any> = {};
  (rawPathParams || []).forEach(p => {
    const name =
      p.parameter.language.default.serializedName ||
      p.parameter.language.default.name;
    res[name] = p;
  });
  const pathItself = {
    name: `"${path}"`
  };
  const pathParams = (pathDetail || []).pathParameters.map(p => {
    const pathParam: SampleParameter = {
      name: normalizeName(p.name, NameType.Parameter)
    };
    // path params are mandatory we'll leave it empty if no input
    const value = !!res[p.name]
      ? getParameterAssignment(res[p.name].exampleValue, true)
      : `""`;
    pathParam.assignment = `const ${pathParam.name} =` + value + `;`;
    return pathParam;
  });
  return [pathItself].concat(pathParams);
}

function convertMethodLevelParameters(
  rawMethodParams: ExampleParameter[],
  methods: OperationMethod[]
): SampleParameter[] {
  if (!methods || methods.length == 0) {
    return [];
  }
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
    .filter(p => p.parameter.protocol.http?.in == ParameterLocation.Body)
    .forEach(p => {
      allSideAssignments.push(
        ` body: ` + getParameterAssignment(p.exampleValue, true)
      );
    });
  rawMethodParams
    .filter(p => p.parameter.protocol.http?.in == ParameterLocation.Query)
    .forEach(p => {
      const name = `"${getLanguageMetadata(p.parameter.language)
        .serializedName || p.parameter.language.default.name}"`;

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
    .filter(p => p.parameter.protocol.http?.in == ParameterLocation.Header)
    .forEach(p => {
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
    assignment: `const options =` + value + `;`,
    value
  };
  return [optionParam];
}

function enrichParameterInSample(
  sample: RLCSampleDetail,
  parameters: SampleParameters
) {
  sample.clientParamAssignments = getAssignmentStrArray(parameters.client);
  sample.clientParamNames = getContactParameterNames(parameters.client);
  sample.pathParamAssignments = getAssignmentStrArray(parameters.path);
  sample.pathParamNames = getContactParameterNames(parameters.path);
  sample.methodParamNames =
    parameters.method.length > 0 ? parameters.method[0].value ?? "" : "";
}

function getAssignmentStrArray(parameters: SampleParameter[]) {
  return parameters.filter(p => !!p.assignment).map(p => p.assignment!);
}

function getContactParameterNames(parameters: SampleParameter[]) {
  return parameters
    .filter(p => p.name != null)
    .map(p => p.name!)
    .join(",");
}

function enrichLROAndPagingInSample(
  sample: RLCSampleDetail,
  operation: Operation,
  importedDict: Record<string, Set<string>>
) {
  const session = getSession();
  const isLRO = isLongRunningOperation(operation),
    isPaging = isPagingOperation(operation);
  if (isPaging) {
    if (isLRO) {
      session.info(
        `${operation?.language?.default?.name} is an LRO and paging operation. Currently we only support paging when sample generation.`
      );
    }
    sample.isPaging = true;
    addValueInImportedDict(getPackageName(), "paginate", importedDict);
  } else if (isLRO) {
    const { useLegacyLro = false } = getAutorestOptions();
    sample.isLRO = true;
    sample.useLegacyLro = useLegacyLro;
    addValueInImportedDict(
      getPackageName(),
      "getLongRunningPoller",
      importedDict
    );
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

function getPackageName() {
  const { packageDetails } = getAutorestOptions();
  return packageDetails.name;
}

export function createSampleData(model: TestCodeModel) {
  const { addCredentials, packageDetails } = getAutorestOptions();
  const clientFileName = normalizeName(
    getLanguageMetadata(model.language).name,
    NameType.File
  );
  const clientName = getLanguageMetadata(model.language).name;
  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;
  const { urlParameters } = transformBaseUrl(model);
  const hasUrlParameter = !!urlParameters,
    hasCredentials = addCredentials;
  const clientParameters = [];
  const clientParamAssignments = [];
  if (hasUrlParameter) {
    urlParameters.forEach(urlParameter => {
      clientParamAssignments.push(
        `const ${urlParameter.name} = process.env["ENDPOINT"] || "<${urlParameter.name}>"`
      );
      clientParameters.push(`${urlParameter.name}`);
    });
  }
  if (hasCredentials) {
    clientParamAssignments.push(
      "const credential = new DefaultAzureCredential();"
    );
    clientParameters.push("credential");
  }
  return {
    filename: `${clientFileName}Sample`,
    clientParamAssignments,
    clientClassName: clientInterfaceName,
    clientPackageName: `${packageDetails.name}`,
    clientParameterNames: clientParameters.join(","),
    hasCredentials
  };
}
function enrichImportedString(
  sampleGroup: RLCSampleGroup,
  importedDict: Record<string, Set<string>>,
  defaultFactoryName: string
) {
  const importedTypes: string[] = [],
    packageName = getPackageName();
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
