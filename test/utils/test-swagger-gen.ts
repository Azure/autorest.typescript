import { spawn } from "child_process";
import * as dirTree from "directory-tree";
import { TracingInfo } from "../../src/models/clientDetails";
import { onExit } from "./childProcessOnExit";

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
    allowInsecureConnection: true
  },
  arrayConstraints: {
    swaggerOrConfig: "test/integration/swaggers/arrayConstraints.json",
    clientName: "ArrayConstraintsClient",
    packageName: "array-constraints-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  azureParameterGrouping: {
    swaggerOrConfig: "azure-parameter-grouping.json",
    clientName: "AzureParameterGroupingClient",
    packageName: "azure-parameter-grouping",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  azureReport: {
    swaggerOrConfig: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
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
    allowInsecureConnection: true
  },
  bodyBoolean: {
    swaggerOrConfig: "body-boolean.json",
    clientName: "BodyBooleanClient",
    packageName: "body-boolean",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyBooleanQuirks: {
    swaggerOrConfig: "body-boolean.quirks.json",
    clientName: "BodyBooleanQuirksClient",
    packageName: "body-boolean-quirks",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyByte: {
    swaggerOrConfig: "body-byte.json",
    clientName: "BodyByteClient",
    packageName: "body-byte",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyComplex: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "BodyComplexClient",
    packageName: "body-complex",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
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
    allowInsecureConnection: true
  },
  bodyDate: {
    swaggerOrConfig: "body-date.json",
    clientName: "BodyDateClient",
    packageName: "body-date",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyDateTime: {
    swaggerOrConfig: "body-datetime.json",
    clientName: "BodyDateTimeClient",
    packageName: "body-datetime",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyDateTimeRfc1123: {
    swaggerOrConfig: "body-datetime-rfc1123.json",
    clientName: "BodyDateTimeRfc1123Client",
    packageName: "body-datetime-rfc1123",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyDictionary: {
    swaggerOrConfig: "body-dictionary.json",
    clientName: "BodyDictionaryClient",
    packageName: "body-dictionary",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyDuration: {
    swaggerOrConfig: "body-duration.json",
    clientName: "BodyDurationClient",
    packageName: "body-duration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyFile: {
    swaggerOrConfig: "body-file.json",
    clientName: "BodyFileClient",
    packageName: "body-file",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyInteger: {
    swaggerOrConfig: "body-integer.json",
    clientName: "BodyIntegerClient",
    packageName: "body-integer",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyNumber: {
    swaggerOrConfig: "body-number.json",
    clientName: "BodyNumberClient",
    packageName: "body-number",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyString: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringClient",
    packageName: "body-string",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyTime: {
    swaggerOrConfig: "body-time.json",
    clientName: "BodyTimeClient",
    packageName: "body-time",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  customUrl: {
    swaggerOrConfig: "custom-baseUrl.json",
    clientName: "CustomUrlClient",
    packageName: "custom-url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  customUrlMoreOptions: {
    swaggerOrConfig: "custom-baseUrl-more-options.json",
    clientName: "CustomUrlMoreOptionsClient",
    packageName: "custom-url-MoreOptions",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  customUrlPaging: {
    swaggerOrConfig: "custom-baseUrl-paging.json",
    clientName: "CustomUrlPagingClient",
    packageName: "custom-url-paging",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  header: {
    swaggerOrConfig: "header.json",
    clientName: "HeaderClient",
    packageName: "header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  httpInfrastructure: {
    swaggerOrConfig: "httpInfrastructure.json",
    clientName: "HttpInfrastructureClient",
    packageName: "httpInfrastructure",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  lro: {
    swaggerOrConfig: "lro.json",
    clientName: "LROClient",
    packageName: "lro",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  lroParametrizedEndpoints: {
    swaggerOrConfig: "lro-parameterized-endpoints.json",
    clientName: "LroParametrizedEndpointsClient",
    packageName: "lro-parameterized-endpoints",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  mediaTypes: {
    swaggerOrConfig: "media_types.json",
    clientName: "MediaTypesClient",
    packageName: "media-types-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
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
    allowInsecureConnection: true
  },
  mediaTypesV3: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3.json",
    clientName: "MediaTypesV3Client",
    packageName: "media-types-v3-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  mediaTypesV3Lro: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3-lro.json",
    clientName: "MediaTypesV3LROClient",
    packageName: "media-types-v3-lro-client",
    licenseHeader: true,
    useCoreV2: true
  },
  modelFlattening: {
    swaggerOrConfig: "model-flattening.json",
    clientName: "ModelFlatteningClient",
    packageName: "model-flattening",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  multipleInheritance: {
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceClient",
    packageName: "multiple-inheritance",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  noMappers: {
    swaggerOrConfig: "test/integration/swaggers/no-mappers.json",
    clientName: "NoMappersClient",
    packageName: "no-mappers",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  noOperation: {
    swaggerOrConfig: "test/integration/swaggers/noOperation.json",
    clientName: "NoOperationsClient",
    packageName: "no-operation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  nonStringEnum: {
    swaggerOrConfig: "non-string-enum.json",
    clientName: "NonStringEnumClient",
    packageName: "non-string-num",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  objectType: {
    swaggerOrConfig: "object-type.json",
    clientName: "ObjectTypeClient",
    packageName: "object-type",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
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
    useCoreV2: true
  },
  pagingNoIterators: {
    swaggerOrConfig: "paging.json",
    clientName: "PagingNoIteratorsClient",
    packageName: "paging-no-iterators",
    licenseHeader: true,
    disableAsyncIterators: true,
    useCoreV2: true
  },
  requiredOptional: {
    swaggerOrConfig: "required-optional.json",
    clientName: "RequiredOptionalClient",
    packageName: "required-optional",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  regexConstraint: {
    swaggerOrConfig: "test/integration/swaggers/regex-constraint.json",
    clientName: "RegexConstraint",
    packageName: "regex-constraint",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  report: {
    swaggerOrConfig: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  uuid: {
    swaggerOrConfig: "test/integration/swaggers/uuid.json",
    clientName: "UuidClient",
    packageName: "uuid",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  url: {
    swaggerOrConfig: "url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  urlMulti: {
    swaggerOrConfig: "url-multi-collectionFormat.json",
    clientName: "UrlMultiClient",
    packageName: "url-multi",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  url2: {
    swaggerOrConfig: "test/integration/swaggers/url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  xmlservice: {
    swaggerOrConfig: "xml-service.json",
    clientName: "XmlServiceClient",
    packageName: "xml-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  noLicenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "NoLicenseHeaderClient",
    packageName: "nolicense-header",
    useCoreV2: true,
    allowInsecureConnection: true
  },
  licenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "LicenseHeaderClient",
    packageName: "license-header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  subscriptionIdApiVersion: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "SubscriptionIdApiVersionClient",
    packageName: "subscriptionid-apiversion",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  bodyFormData: {
    swaggerOrConfig: "body-formdata.json",
    clientName: "BodyFormDataClient",
    packageName: "body-formdata",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  validation: {
    swaggerOrConfig: "validation.json",
    clientName: "ValidationClient",
    packageName: "validation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  extensibleEnums: {
    swaggerOrConfig: "test/integration/swaggers/extensibleEnums.md",
    clientName: "ExtensibleEnumsClient",
    packageName: "extensible-enums",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  xmsErrorResponses: {
    swaggerOrConfig: "test/integration/swaggers/xmsErrorResponses.md",
    clientName: "XmsErrorResponsesClient",
    packageName: "xms-error-responses",
    licenseHeader: true
  },
  odataDiscriminator: {
    swaggerOrConfig: "test/integration/swaggers/odata-discriminator.json",
    clientName: "ODataDiscriminatorClient",
    packageName: "odata-discriminator",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  appconfiguration: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  appconfigurationexport: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    hideClients: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  mapperrequired: {
    swaggerOrConfig: "test/integration/swaggers/mapperrequired.json",
    clientName: "MapperRequiredClient",
    packageName: "mapperrequired",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  readmeFileChecker: {
    swaggerOrConfig: "test/integration/swaggers/keyvaults-secrets.md",
    clientName: "KeyVaultClient",
    packageName: "@azure/keyvault-secrets",
    useCoreV2: true,
    allowInsecureConnection: true
  },
  nameChecker: {
    swaggerOrConfig: "test/integration/swaggers/Data.md",
    clientName: "SearchClient",
    packageName: "@azure/search-documents",
    useCoreV2: true,
    allowInsecureConnection: true
  },
  polymorphicSkipNormalize: {
    swaggerOrConfig:
      "test/integration/swaggers/MediaServices_polymorphic_skipNormalize.md",
    clientName: "MediaServicesClient",
    packageName: "@azure/media-services",
    useCoreV2: true,
    allowInsecureConnection: true
  },
  petstore: {
    swaggerOrConfig: "test/integration/swaggers/petstore.json",
    clientName: "PetStore",
    packageName: "petstore",
    useCoreV2: true,
    allowInsecureConnection: true
  },
  textanalytics: {
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.md",
    clientName: "GeneratedClient",
    packageName: "textanalytics",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true
  },
  storagefileshare: {
    swaggerOrConfig: "test/integration/swaggers/storagefileshare.json",
    clientName: "StorageFileShareClient",
    packageName: "storagefileshare",
    useCoreV2: true
  },
  optionalnull: {
    swaggerOrConfig: "test/integration/swaggers/optionalnull.json",
    clientName: "OptionalNullClient",
    packageName: "optionalnull",
    ignoreNullableOnOptional: true,
    useCoreV2: true
  },
  storageblob: {
    swaggerOrConfig: "test/integration/swaggers/storageblob.json",
    clientName: "StorageBlobClient",
    packageName: "storageblob",
    useCoreV2: true
  },
  operationgroupclash: {
    swaggerOrConfig: "test/integration/swaggers/operationGroupClash.json",
    clientName: "OperationGroupClashClient",
    packageName: "operationgroupclash",
    useCoreV2: true,
    allowInsecureConnection: true
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
      allowInsecureConnection
    } = testSwaggers[name];

    let swaggerPath = swaggerOrConfig;

    let autorestCommand = "autorest";
    const commandArguments: string[] = [`--typescript`];

    if (tracing) {
      commandArguments.push(
        `--tracing-info.namespace=${tracing.namespace}`,
        `--tracing-info.packagePrefix="${tracing.packagePrefix}"`
      );
    }

    if (credentialScopes) {
      commandArguments.push(`--credential-scopes=${credentialScopes}`);
    }

    if (disableAsyncIterators) {
      commandArguments.push("--disable-async-iterators=true");
    }

    if (swaggerOrConfig.split("/").length === 1) {
      // When given a filename look for it in test server, otherwise use the path
      swaggerPath = `node_modules/@microsoft.azure/autorest.testserver/swagger/${swaggerOrConfig}`;
    }

    let inputFileCommand: string = `${swaggerPath}`;
    if (!swaggerPath.endsWith(".md")) {
      inputFileCommand = `--input-file=${inputFileCommand}`;
    }

    commandArguments.push(
      inputFileCommand,
      "--clear-output-folder=true",
      `--license-header=${!!licenseHeader}`,
      `--add-credentials=${!!addCredentials}`,
      `--output-folder=./test/integration/generated/${name}`,
      `--title=${clientName}`,
      `--use=.`,
      `--package-name=${packageName}`,
      `--package-version=${package_version}`,
      `--hide-clients=${!!hideClients}`,
      `--ignore-nullable-on-optional=${!!ignoreNullableOnOptional}`,
      `--use-core-v2=${!!useCoreV2}`,
      `--allow-insecure-connection=${!!allowInsecureConnection}`
    );
    if (isDebugging) {
      commandArguments.push(`--typescript.debugger`);
    }
    const generationTask = async () => {
      console.log(`=== Start ${name} ===`);
      const childProcess = spawn(autorestCommand, commandArguments, {
        stdio: [process.stdin, process.stdout, process.stderr],
        shell: process.platform === "win32"
      });

      console.log(`${autorestCommand} ${commandArguments.join(" ")}`);

      const result = await onExit(childProcess);
      console.log(`=== End ${name} ===`);
      return result;
    };

    try {
      await generationTask();
    } catch (error) {
      console.error(error);
      throw error;
    }
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
