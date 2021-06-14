import { spawn } from "child_process";
import { TracingInfo } from "../../src/models/clientDetails";
import { onExit } from "./childProcessOnExit";
import { runAutorest } from "./run";

interface SwaggerConfig {
  swaggerOrConfig: string;
  clientName: string;
  packageName: string;
  addCredentials?: boolean;
  licenseHeader?: boolean;
  credentialScopes?: string;
  tracing?: TracingInfo;
  disableAsyncIterators?: boolean;
  hideClients?: boolean;
  ignoreNullableOnOptional?: boolean;
  useCoreV2?: boolean;
  allowInsecureConnection?: boolean;
  restLevelClient?: boolean;
}

const package_version = "1.0.0-preview1";
let whiteList: string[] = [];

const testSwaggers: { [name: string]: SwaggerConfig } = {
  additionalProperties: {
    swaggerOrConfig: "additionalProperties.json",
    clientName: "AdditionalPropertiesClient",
    packageName: "additional-properties",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  arrayConstraints: {
    swaggerOrConfig: "test/integration/swaggers/arrayConstraints.json",
    clientName: "ArrayConstraintsClient",
    packageName: "array-constraints-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  attestation: {
    swaggerOrConfig: "test/integration/swaggers/attestation.json",
    clientName: "GeneratedClient",
    packageName: "attestation",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  azureParameterGrouping: {
    swaggerOrConfig: "azure-parameter-grouping.json",
    clientName: "AzureParameterGroupingClient",
    packageName: "azure-parameter-grouping",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  azureReport: {
    swaggerOrConfig: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  azureSpecialProperties: {
    swaggerOrConfig: "azure-special-properties.json",
    clientName: "AzureSpecialPropertiesClient",
    packageName: "azure-special-properties",
    licenseHeader: true,
    addCredentials: true,
    credentialScopes:
      "https://microsoft.com/.default,http://microsoft.com/.default",
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyArray: {
    swaggerOrConfig: "body-array.json",
    clientName: "BodyArrayClient",
    packageName: "body-array",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyBoolean: {
    swaggerOrConfig: "body-boolean.json",
    clientName: "BodyBooleanClient",
    packageName: "body-boolean",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyBooleanQuirks: {
    swaggerOrConfig: "body-boolean.quirks.json",
    clientName: "BodyBooleanQuirksClient",
    packageName: "body-boolean-quirks",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyByte: {
    swaggerOrConfig: "body-byte.json",
    clientName: "BodyByteClient",
    packageName: "body-byte",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyComplex: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "BodyComplexClient",
    packageName: "body-complex",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyComplexWithTracing: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "bodyComplexWithTracing",
    packageName: "body-complex-tracing",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Body.Complex",
      packagePrefix: "Azure.Body.Complex"
    },
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyDate: {
    swaggerOrConfig: "body-date.json",
    clientName: "BodyDateClient",
    packageName: "body-date",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyDateTime: {
    swaggerOrConfig: "body-datetime.json",
    clientName: "BodyDateTimeClient",
    packageName: "body-datetime",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyDateTimeRfc1123: {
    swaggerOrConfig: "body-datetime-rfc1123.json",
    clientName: "BodyDateTimeRfc1123Client",
    packageName: "body-datetime-rfc1123",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyDictionary: {
    swaggerOrConfig: "body-dictionary.json",
    clientName: "BodyDictionaryClient",
    packageName: "body-dictionary",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyDuration: {
    swaggerOrConfig: "body-duration.json",
    clientName: "BodyDurationClient",
    packageName: "body-duration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyFile: {
    swaggerOrConfig: "body-file.json",
    clientName: "BodyFileClient",
    packageName: "body-file",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyInteger: {
    swaggerOrConfig: "body-integer.json",
    clientName: "BodyIntegerClient",
    packageName: "body-integer",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyNumber: {
    swaggerOrConfig: "body-number.json",
    clientName: "BodyNumberClient",
    packageName: "body-number",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyString: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringClient",
    packageName: "body-string",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyTime: {
    swaggerOrConfig: "body-time.json",
    clientName: "BodyTimeClient",
    packageName: "body-time",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  customUrl: {
    swaggerOrConfig: "custom-baseUrl.json",
    clientName: "CustomUrlClient",
    packageName: "custom-url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  customUrlMoreOptions: {
    swaggerOrConfig: "custom-baseUrl-more-options.json",
    clientName: "CustomUrlMoreOptionsClient",
    packageName: "custom-url-MoreOptions",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  customUrlPaging: {
    swaggerOrConfig: "custom-baseUrl-paging.json",
    clientName: "CustomUrlPagingClient",
    packageName: "custom-url-paging",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  header: {
    swaggerOrConfig: "header.json",
    clientName: "HeaderClient",
    packageName: "header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  httpInfrastructure: {
    swaggerOrConfig: "httpInfrastructure.json",
    clientName: "HttpInfrastructureClient",
    packageName: "httpInfrastructure",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  lro: {
    swaggerOrConfig: "lro.json",
    clientName: "LROClient",
    packageName: "lro",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  lroParametrizedEndpoints: {
    swaggerOrConfig: "lro-parameterized-endpoints.json",
    clientName: "LroParametrizedEndpointsClient",
    packageName: "lro-parameterized-endpoints",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  mediaTypes: {
    swaggerOrConfig: "media_types.json",
    clientName: "MediaTypesClient",
    packageName: "media-types-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  mediaTypesWithTracing: {
    swaggerOrConfig: "media_types.json",
    clientName: "mediaTypesWithTracingClient",
    packageName: "media-types-service-tracing",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Media.Types",
      packagePrefix: "Azure.Media.Types"
    },
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  mediaTypesV3: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3.json",
    clientName: "MediaTypesV3Client",
    packageName: "media-types-v3-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  mediaTypesV3Lro: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3-lro.json",
    clientName: "MediaTypesV3LROClient",
    packageName: "media-types-v3-lro-client",
    licenseHeader: true,
    useCoreV2: true,
    addCredentials: false
  },
  modelFlattening: {
    swaggerOrConfig: "model-flattening.json",
    clientName: "ModelFlatteningClient",
    packageName: "model-flattening",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  multipleInheritance: {
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceClient",
    packageName: "multiple-inheritance",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  noMappers: {
    swaggerOrConfig: "test/integration/swaggers/no-mappers.json",
    clientName: "NoMappersClient",
    packageName: "no-mappers",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  noOperation: {
    swaggerOrConfig: "test/integration/swaggers/noOperation.json",
    clientName: "NoOperationsClient",
    packageName: "no-operation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  nonStringEnum: {
    swaggerOrConfig: "non-string-enum.json",
    clientName: "NonStringEnumClient",
    packageName: "non-string-num",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  objectType: {
    swaggerOrConfig: "object-type.json",
    clientName: "ObjectTypeClient",
    packageName: "object-type",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  paging: {
    swaggerOrConfig: "paging.json",
    clientName: "PagingClient",
    packageName: "paging-service",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Media.Types",
      packagePrefix: "Azure.Media.Types"
    },
    useCoreV2: true,
    addCredentials: false
  },
  pagingNoIterators: {
    swaggerOrConfig: "paging.json",
    clientName: "PagingNoIteratorsClient",
    packageName: "paging-no-iterators",
    licenseHeader: true,
    disableAsyncIterators: true,
    useCoreV2: true,
    addCredentials: false
  },
  requiredOptional: {
    swaggerOrConfig: "required-optional.json",
    clientName: "RequiredOptionalClient",
    packageName: "required-optional",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  regexConstraint: {
    swaggerOrConfig: "test/integration/swaggers/regex-constraint.json",
    clientName: "RegexConstraint",
    packageName: "regex-constraint",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  report: {
    swaggerOrConfig: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  uuid: {
    swaggerOrConfig: "test/integration/swaggers/uuid.json",
    clientName: "UuidClient",
    packageName: "uuid",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  url: {
    swaggerOrConfig: "url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  urlMulti: {
    swaggerOrConfig: "url-multi-collectionFormat.json",
    clientName: "UrlMultiClient",
    packageName: "url-multi",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  url2: {
    swaggerOrConfig: "test/integration/swaggers/url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  xmlservice: {
    swaggerOrConfig: "xml-service.json",
    clientName: "XmlServiceClient",
    packageName: "xml-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  noLicenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "NoLicenseHeaderClient",
    packageName: "nolicense-header",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  licenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "LicenseHeaderClient",
    packageName: "license-header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  subscriptionIdApiVersion: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "SubscriptionIdApiVersionClient",
    packageName: "subscriptionid-apiversion",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  bodyFormData: {
    swaggerOrConfig: "body-formdata.json",
    clientName: "BodyFormDataClient",
    packageName: "body-formdata",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  validation: {
    swaggerOrConfig: "validation.json",
    clientName: "ValidationClient",
    packageName: "validation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  extensibleEnums: {
    swaggerOrConfig: "test/integration/swaggers/extensibleEnums.md",
    clientName: "ExtensibleEnumsClient",
    packageName: "extensible-enums",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  xmsErrorResponses: {
    swaggerOrConfig: "test/integration/swaggers/xmsErrorResponses.md",
    clientName: "XmsErrorResponsesClient",
    packageName: "xms-error-responses",
    licenseHeader: true,
    addCredentials: false,
    useCoreV2: true
  },
  odataDiscriminator: {
    swaggerOrConfig: "test/integration/swaggers/odata-discriminator.json",
    clientName: "ODataDiscriminatorClient",
    packageName: "odata-discriminator",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  appconfiguration: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  appconfigurationexport: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    hideClients: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  mapperrequired: {
    swaggerOrConfig: "test/integration/swaggers/mapperrequired.json",
    clientName: "MapperRequiredClient",
    packageName: "mapperrequired",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  readmeFileChecker: {
    swaggerOrConfig: "test/integration/swaggers/keyvaults-secrets.md",
    clientName: "KeyVaultClient",
    packageName: "@azure/keyvault-secrets",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  nameChecker: {
    swaggerOrConfig: "test/integration/swaggers/Data.md",
    clientName: "SearchClient",
    packageName: "@azure/search-documents",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  polymorphicSkipNormalize: {
    swaggerOrConfig:
      "test/integration/swaggers/MediaServices_polymorphic_skipNormalize.md",
    clientName: "MediaServicesClient",
    packageName: "@azure/media-services",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  petstore: {
    swaggerOrConfig: "test/integration/swaggers/petstore.json",
    clientName: "PetStore",
    packageName: "petstore",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  textanalytics: {
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.md",
    clientName: "GeneratedClient",
    packageName: "textanalytics",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  constantParam: {
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.json",
    clientName: "GeneratedClient",
    packageName: "constantParam",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  storagefileshare: {
    swaggerOrConfig: "test/integration/swaggers/storagefileshare.json",
    clientName: "StorageFileShareClient",
    packageName: "storagefileshare",
    useCoreV2: true,
    addCredentials: false
  },
  optionalnull: {
    swaggerOrConfig: "test/integration/swaggers/optionalnull.json",
    clientName: "OptionalNullClient",
    packageName: "optionalnull",
    ignoreNullableOnOptional: true,
    useCoreV2: true,
    addCredentials: false
  },
  storageblob: {
    swaggerOrConfig: "test/integration/swaggers/storageblob.json",
    clientName: "StorageBlobClient",
    packageName: "storageblob",
    useCoreV2: true,
    addCredentials: false
  },
  headerprefix: {
    swaggerOrConfig: "test/integration/swaggers/headerprefix.json",
    clientName: "HeaderPrefixClient",
    packageName: "headerprefix",
    useCoreV2: true,
    addCredentials: false
  },
  operationgroupclash: {
    swaggerOrConfig: "test/integration/swaggers/operationGroupClash.json",
    clientName: "OperationGroupClashClient",
    packageName: "operationgroupclash",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  useragentcorev1: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "UserAgentCoreV1Client",
    packageName: "useragent-corev1",
    licenseHeader: true,
    useCoreV2: false,
    allowInsecureConnection: true,
    addCredentials: false
  },
  useragentcorev2: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "UserAgentCoreV2Client",
    packageName: "useragent-corev2",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false
  },
  // TEST REST LEVEL CLIENTS
  bodyStringRest: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringRest",
    packageName: "body-string-rest",
    addCredentials: false,
    restLevelClient: true,
    licenseHeader: true
  }
};

const generateSwaggers = async (
  whiteList?: string[],
  isDebugging?: boolean
) => {
  const swaggers = Object.keys(testSwaggers).filter(name => {
    if (!whiteList || !whiteList.length) {
      return true;
    }
    return whiteList.includes(name);
  });

  for (let name of swaggers) {
    const {
      addCredentials,
      clientName,
      swaggerOrConfig,
      packageName,
      licenseHeader,
      tracing,
      disableAsyncIterators,
      credentialScopes,
      hideClients,
      ignoreNullableOnOptional,
      useCoreV2,
      allowInsecureConnection,
      restLevelClient
    } = testSwaggers[name];

    let swaggerPath = swaggerOrConfig;
    if (swaggerOrConfig.split("/").length === 1) {
      // When given a filename look for it in test server, otherwise use the path
      swaggerPath = `node_modules/@microsoft.azure/autorest.testserver/swagger/${swaggerOrConfig}`;
    }

    let inputFileCommand: string = `${swaggerPath}`;
    if (!swaggerPath.endsWith(".md")) {
      inputFileCommand = `--input-file=${inputFileCommand}`;
    }
    await runAutorest(
      swaggerPath,
      {
        tracingInfo: tracing,
        disablePagingAsyncIterators: disableAsyncIterators,
        credentialScopes: credentialScopes ? [credentialScopes] : undefined,
        srcPath: "",
        licenseHeader: !!licenseHeader,
        addCredentials,
        outputPath: `./test/integration/generated/${name}`,
        title: clientName,
        packageDetails: {
          name: packageName,
          version: package_version,
          nameWithoutScope: ""
        },
        hideClients,
        ignoreNullableOnOptional,
        useCoreV2,
        allowInsecureConnection,
        restLevelClient
      },
      isDebugging
    );
  }
};

const buildWhitelist = () =>
  process.argv.forEach((arg, index) => {
    if (arg !== "--include" && arg !== "-i") {
      return;
    }

    const includesValue = process.argv[index + 1];
    if (!includesValue) {
      console.warn(
        "No valid include list provided, generating all test swaggers"
      );
      return;
    }

    const swaggers = includesValue.split(",");

    swaggers.forEach(swagger => {
      const validSwaggers = Object.keys(testSwaggers);
      if (!validSwaggers.includes(swagger)) {
        throw new Error(
          `Unknown swagger ${swagger}, valid swaggers: \n ${JSON.stringify(
            validSwaggers
          )}`
        );
      }

      whiteList.push(swagger);
    });
  });

const buildAutorest = () => {
  if (!process.argv.includes("--build") && !process.argv.includes("-b")) {
    console.warn(
      "Not building Autorest.Typescript, use --build or -b to build"
    );
    return Promise.resolve();
  }
  const childProcess = spawn("npm run build", {
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: process.platform === "win32"
  });

  return onExit(childProcess);
};

const logAutorestInfo = async () => {
  const childProcess = spawn("autorest", ["--info"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: process.platform === "win32"
  });
  await onExit(childProcess);
};

const run = async () => {
  const isDebugging = process.argv.indexOf("--debug") !== -1;
  buildWhitelist();
  await logAutorestInfo();
  await buildAutorest();
  await generateSwaggers(whiteList, isDebugging);
};

run().catch(error => {
  console.error(error);
  process.exit(-1000);
});
