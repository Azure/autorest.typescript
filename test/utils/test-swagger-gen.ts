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
  headAsBoolean?: boolean;
  isTestPackage?: boolean;
  generateTest?: boolean;
}

const package_version = "1.0.0-preview1";
let whiteList: string[] = [];

const testSwaggers: { [name: string]: SwaggerConfig } = {
  additionalProperties: {
    swaggerOrConfig: "additionalProperties.json",
    clientName: "AdditionalPropertiesClient",
    packageName: "@msinternal/additional-properties",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateTest: true
  },
  arrayConstraints: {
    swaggerOrConfig: "test/integration/swaggers/arrayConstraints.md",
    clientName: "ArrayConstraintsClient",
    packageName: "@msinternal/array-constraints-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  attestation: {
    swaggerOrConfig: "test/integration/swaggers/attestation.json",
    clientName: "GeneratedClient",
    packageName: "@msinternal/attestation",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  azureParameterGrouping: {
    swaggerOrConfig: "azure-parameter-grouping.json",
    clientName: "AzureParameterGroupingClient",
    packageName: "@msinternal/azure-parameter-grouping",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  azureReport: {
    swaggerOrConfig: "azure-report.json",
    clientName: "ReportClient",
    packageName: "@msinternal/zzzAzureReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  azureSpecialProperties: {
    swaggerOrConfig: "azure-special-properties.json",
    clientName: "AzureSpecialPropertiesClient",
    packageName: "@msinternal/azure-special-properties",
    licenseHeader: true,
    addCredentials: true,
    credentialScopes:
      "https://microsoft.com/.default,http://microsoft.com/.default",
    useCoreV2: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  bodyArray: {
    swaggerOrConfig: "body-array.json",
    clientName: "BodyArrayClient",
    packageName: "@msinternal/body-array",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyBoolean: {
    swaggerOrConfig: "body-boolean.json",
    clientName: "BodyBooleanClient",
    packageName: "@msinternal/body-boolean",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyBooleanQuirks: {
    swaggerOrConfig: "body-boolean.quirks.json",
    clientName: "BodyBooleanQuirksClient",
    packageName: "@msinternal/body-boolean-quirks",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyByte: {
    swaggerOrConfig: "body-byte.json",
    clientName: "BodyByteClient",
    packageName: "@msinternal/body-byte",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyComplex: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "BodyComplexClient",
    packageName: "@msinternal/body-complex",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyComplexWithTracing: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "bodyComplexWithTracing",
    packageName: "@msinternal/body-complex-tracing",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Body.Complex",
      packagePrefix: "Azure.Body.Complex"
    },
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDate: {
    swaggerOrConfig: "body-date.json",
    clientName: "BodyDateClient",
    packageName: "@msinternal/body-date",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDateTime: {
    swaggerOrConfig: "body-datetime.json",
    clientName: "BodyDateTimeClient",
    packageName: "@msinternal/body-datetime",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDateTimeRfc1123: {
    swaggerOrConfig: "body-datetime-rfc1123.json",
    clientName: "BodyDateTimeRfc1123Client",
    packageName: "@msinternal/body-datetime-rfc1123",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDictionary: {
    swaggerOrConfig: "body-dictionary.json",
    clientName: "BodyDictionaryClient",
    packageName: "@msinternal/body-dictionary",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDuration: {
    swaggerOrConfig: "body-duration.json",
    clientName: "BodyDurationClient",
    packageName: "@msinternal/body-duration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyFile: {
    swaggerOrConfig: "body-file.json",
    clientName: "BodyFileClient",
    packageName: "@msinternal/body-file",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyInteger: {
    swaggerOrConfig: "body-integer.json",
    clientName: "BodyIntegerClient",
    packageName: "@msinternal/body-integer",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyNumber: {
    swaggerOrConfig: "body-number.json",
    clientName: "BodyNumberClient",
    packageName: "@msinternal/body-number",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyString: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringClient",
    packageName: "@msinternal/body-string",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyTime: {
    swaggerOrConfig: "body-time.json",
    clientName: "BodyTimeClient",
    packageName: "@msinternal/body-time",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  customUrl: {
    swaggerOrConfig: "custom-baseUrl.json",
    clientName: "CustomUrlClient",
    packageName: "@msinternal/custom-url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  customUrlMoreOptions: {
    swaggerOrConfig: "custom-baseUrl-more-options.json",
    clientName: "CustomUrlMoreOptionsClient",
    packageName: "@msinternal/custom-url-MoreOptions",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  customUrlPaging: {
    swaggerOrConfig: "custom-baseUrl-paging.json",
    clientName: "CustomUrlPagingClient",
    packageName: "@msinternal/custom-url-paging",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  header: {
    swaggerOrConfig: "header.json",
    clientName: "HeaderClient",
    packageName: "@msinternal/header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  headerRest: {
    swaggerOrConfig: "header.json",
    clientName: "HeaderRestClient",
    packageName: "@msinternal/header-rest",
    licenseHeader: true,
    restLevelClient: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  httpInfrastructure: {
    swaggerOrConfig: "httpInfrastructure.json",
    clientName: "HttpInfrastructureClient",
    packageName: "@msinternal/httpInfrastructure",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  lro: {
    swaggerOrConfig: "lro.json",
    clientName: "LROClient",
    packageName: "@msinternal/lro",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  lroParametrizedEndpoints: {
    swaggerOrConfig: "lro-parameterized-endpoints.json",
    clientName: "LroParametrizedEndpointsClient",
    packageName: "@msinternal/lro-parameterized-endpoints",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mediaTypes: {
    swaggerOrConfig: "media_types.json",
    clientName: "MediaTypesClient",
    packageName: "@msinternal/media-types-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mediaTypesWithTracing: {
    swaggerOrConfig: "media_types.json",
    clientName: "mediaTypesWithTracingClient",
    packageName: "@msinternal/media-types-service-tracing",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Media.Types",
      packagePrefix: "Azure.Media.Types"
    },
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mediaTypesV3: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3.json",
    clientName: "MediaTypesV3Client",
    packageName: "@msinternal/media-types-v3-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mediaTypesV3Lro: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3-lro.json",
    clientName: "MediaTypesV3LROClient",
    packageName: "@msinternal/media-types-v3-lro-client",
    licenseHeader: true,
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  modelFlattening: {
    swaggerOrConfig: "model-flattening.json",
    clientName: "ModelFlatteningClient",
    packageName: "@msinternal/model-flattening",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  multipleInheritance: {
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceClient",
    packageName: "@msinternal/multiple-inheritance",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  noMappers: {
    swaggerOrConfig: "test/integration/swaggers/no-mappers.json",
    clientName: "NoMappersClient",
    packageName: "@msinternal/no-mappers",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  noOperation: {
    swaggerOrConfig: "test/integration/swaggers/noOperation.json",
    clientName: "NoOperationsClient",
    packageName: "@msinternal/no-operation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  nonStringEnum: {
    swaggerOrConfig: "non-string-enum.json",
    clientName: "NonStringEnumClient",
    packageName: "@msinternal/non-string-num",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  objectType: {
    swaggerOrConfig: "object-type.json",
    clientName: "ObjectTypeClient",
    packageName: "@msinternal/object-type",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  paging: {
    swaggerOrConfig: "paging.json",
    clientName: "PagingClient",
    packageName: "@msinternal/paging-service",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Media.Types",
      packagePrefix: "Azure.Media.Types"
    },
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  pagingNoIterators: {
    swaggerOrConfig: "paging.json",
    clientName: "PagingNoIteratorsClient",
    packageName: "@msinternal/paging-no-iterators",
    licenseHeader: true,
    disableAsyncIterators: true,
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  requiredOptional: {
    swaggerOrConfig: "required-optional.json",
    clientName: "RequiredOptionalClient",
    packageName: "@msinternal/required-optional",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  regexConstraint: {
    swaggerOrConfig: "test/integration/swaggers/regex-constraint.json",
    clientName: "RegexConstraint",
    packageName: "@msinternal/regex-constraint",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  report: {
    swaggerOrConfig: "report.json",
    clientName: "ReportClient",
    packageName: "@msinternal/zzzReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  uuid: {
    swaggerOrConfig: "test/integration/swaggers/uuid.json",
    clientName: "UuidClient",
    packageName: "@msinternal/uuid",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  url: {
    swaggerOrConfig: "url.json",
    clientName: "UrlClient",
    packageName: "@msinternal/url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  urlMulti: {
    swaggerOrConfig: "url-multi-collectionFormat.json",
    clientName: "UrlMultiClient",
    packageName: "@msinternal/url-multi",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  url2: {
    swaggerOrConfig: "test/integration/swaggers/url.json",
    clientName: "UrlClient",
    packageName: "@msinternal/url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  xmlservice: {
    swaggerOrConfig: "xml-service.json",
    clientName: "XmlServiceClient",
    packageName: "@msinternal/xml-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  noLicenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "NoLicenseHeaderClient",
    packageName: "@msinternal/nolicense-header",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  licenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "LicenseHeaderClient",
    packageName: "@msinternal/license-header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  subscriptionIdApiVersion: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "SubscriptionIdApiVersionClient",
    packageName: "@msinternal/subscriptionid-apiversion",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyFormData: {
    swaggerOrConfig: "body-formdata.json",
    clientName: "BodyFormDataClient",
    packageName: "@msinternal/body-formdata",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  validation: {
    swaggerOrConfig: "validation.json",
    clientName: "ValidationClient",
    packageName: "@msinternal/validation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  extensibleEnums: {
    swaggerOrConfig: "test/integration/swaggers/extensibleEnums.md",
    clientName: "ExtensibleEnumsClient",
    packageName: "@msinternal/extensible-enums",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  xmsErrorResponses: {
    swaggerOrConfig: "test/integration/swaggers/xmsErrorResponses.md",
    clientName: "XmsErrorResponsesClient",
    packageName: "@msinternal/xms-error-responses",
    licenseHeader: true,
    addCredentials: false,
    useCoreV2: true,
    isTestPackage: true
  },
  odataDiscriminator: {
    swaggerOrConfig: "test/integration/swaggers/odata-discriminator.json",
    clientName: "ODataDiscriminatorClient",
    packageName: "@msinternal/odata-discriminator",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  appconfiguration: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "@msinternal/appconfiguration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  appconfigurationexport: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "@msinternal/appconfiguration",
    licenseHeader: true,
    hideClients: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mapperrequired: {
    swaggerOrConfig: "test/integration/swaggers/mapperrequired.json",
    clientName: "MapperRequiredClient",
    packageName: "@msinternal/mapperrequired",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  readmeFileChecker: {
    swaggerOrConfig: "test/integration/swaggers/keyvaults-secrets.md",
    clientName: "KeyVaultClient",
    packageName: "@msinternal/keyvault-secrets",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  nameChecker: {
    swaggerOrConfig: "test/integration/swaggers/Data.md",
    clientName: "SearchClient",
    packageName: "@msinternal/search-documents",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  polymorphicSkipNormalize: {
    swaggerOrConfig:
      "test/integration/swaggers/MediaServices_polymorphic_skipNormalize.md",
    clientName: "MediaServicesClient",
    packageName: "@msinternal/media-services",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  petstore: {
    swaggerOrConfig: "test/integration/swaggers/petstore.json",
    clientName: "PetStore",
    packageName: "@msinternal/petstore",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  textanalytics: {
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.md",
    clientName: "GeneratedClient",
    packageName: "@msinternal/textanalytics",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  constantParam: {
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.json",
    clientName: "GeneratedClient",
    packageName: "@msinternal/constantParam",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  storagefileshare: {
    swaggerOrConfig: "test/integration/swaggers/storagefileshare.json",
    clientName: "StorageFileShareClient",
    packageName: "@msinternal/storagefileshare",
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  optionalnull: {
    swaggerOrConfig: "test/integration/swaggers/optionalnull.json",
    clientName: "OptionalNullClient",
    packageName: "@msinternal/optionalnull",
    ignoreNullableOnOptional: true,
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  storageblob: {
    swaggerOrConfig: "test/integration/swaggers/storageblob.json",
    clientName: "StorageBlobClient",
    packageName: "@msinternal/storageblob",
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  headerprefix: {
    swaggerOrConfig: "test/integration/swaggers/headerprefix.json",
    clientName: "HeaderPrefixClient",
    packageName: "@msinternal/headerprefix",
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  operationgroupclash: {
    swaggerOrConfig: "test/integration/swaggers/operationGroupClash.json",
    clientName: "OperationGroupClashClient",
    packageName: "@msinternal/operationgroupclash",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  useragentcorev1: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "UserAgentCoreV1Client",
    packageName: "@msinternal/useragent-corev1",
    licenseHeader: true,
    useCoreV2: false,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  useragentcorev2: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "UserAgentCoreV2Client",
    packageName: "@msinternal/useragent-corev2",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  iotspaces: {
    swaggerOrConfig: "test/integration/swaggers/iotspaces.json",
    clientName: "IoTSpacesClient",
    packageName: "@msinternal/iotspaces",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: true,
    isTestPackage: true
  },
  resources: {
    swaggerOrConfig: "test/integration/swaggers/resources.json",
    clientName: "ResourcesClient",
    packageName: "@msinternal/resources",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: true,
    headAsBoolean: true,
    isTestPackage: true
  },
  sealedchoice: {
    swaggerOrConfig: "test/integration/swaggers/sealedchoice.json",
    clientName: "SealedChoiceClient",
    packageName: "@msinternal/sealedchoice",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  datalakestorage: {
    swaggerOrConfig: "test/integration/swaggers/datalakestorage.json",
    clientName: "DataLakeStorageClient",
    packageName: "@msinternal/datalakestorage",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  // TEST REST LEVEL CLIENTS
  lroRest: {
    swaggerOrConfig: "lro.json",
    clientName: "LRORestClient",
    packageName: "@msinternal/lro-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true
  },
  bodyStringRest: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringRest",
    packageName: "@msinternal/body-string-rest",
    addCredentials: false,
    restLevelClient: true,
    licenseHeader: true,
    isTestPackage: true
  },
  bodyComplexRest: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "BodyComplexRestClient",
    packageName: "@msinternal/body-complex-rest",
    licenseHeader: true,
    restLevelClient: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  pagingRest: {
    swaggerOrConfig: "paging.json",
    clientName: "Paging",
    packageName: "@msinternal/paging-service",
    licenseHeader: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true
  },
  multipleInheritanceRest: {
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceRestClient",
    packageName: "@msinternal/multiple-inheritance-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    restLevelClient: true,
    isTestPackage: true
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
      restLevelClient,
      headAsBoolean,
      isTestPackage,
      generateTest
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
        restLevelClient,
        headAsBoolean,
        isTestPackage,
        generateTest
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
