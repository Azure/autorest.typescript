import { spawn } from "child_process";
import { TracingInfo } from "../../src/models/clientDetails";
import { onExit } from "./childProcessOnExit";
import { runAutorest } from "./run";

interface SwaggerConfig {
  swaggerOrConfig: string;
  clientName: string;
  packageName: string;
  addCredentials?: boolean;
  security?: string;
  licenseHeader?: boolean;
  securityScopes?: string;
  tracing?: TracingInfo;
  disableAsyncIterators?: boolean;
  hideClients?: boolean;
  ignoreNullableOnOptional?: boolean;
  useCoreV2?: boolean;
  allowInsecureConnection?: boolean;
  restLevelClient?: boolean;
  azureSdkForJs?: boolean;
  rlcShortcut?: boolean;
  headAsBoolean?: boolean;
  isTestPackage?: boolean;
  generateTest?: boolean;
  coreHttpCompatMode?: boolean;
  generateSample?: boolean;
  lenientModelDeduplication?: boolean;
  moduleKind?: "cjs" | "esm";
}

const package_version = "1.0.0-preview1";
let whiteList: string[] = [];

let testSwaggers: { [name: string]: SwaggerConfig } = {
  additionalProperties: {
    moduleKind: "cjs",
    swaggerOrConfig: "additionalProperties.json",
    clientName: "AdditionalPropertiesClient",
    packageName: "additional-properties",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateTest: true,
    azureSdkForJs: false
  },
  arrayConstraints: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/arrayConstraints.md",
    clientName: "ArrayConstraintsClient",
    packageName: "array-constraints-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  attestation: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/attestation.json",
    clientName: "GeneratedClient",
    packageName: "attestation",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  azureParameterGrouping: {
    moduleKind: "cjs",
    swaggerOrConfig: "azure-parameter-grouping.json",
    clientName: "AzureParameterGroupingClient",
    packageName: "azure-parameter-grouping",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  azureReport: {
    moduleKind: "cjs",
    swaggerOrConfig: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  azureSpecialProperties: {
    moduleKind: "cjs",
    swaggerOrConfig: "azure-special-properties.json",
    clientName: "AzureSpecialPropertiesClient",
    packageName: "azure-special-properties",
    licenseHeader: true,
    addCredentials: true,
    security: "AADToken",
    securityScopes:
      "https://microsoft.com/.default,http://microsoft.com/.default",
    useCoreV2: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  bodyArray: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-array.json",
    clientName: "BodyArrayClient",
    packageName: "body-array",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyBoolean: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-boolean.json",
    clientName: "BodyBooleanClient",
    packageName: "body-boolean",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyBooleanQuirks: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-boolean.quirks.json",
    clientName: "BodyBooleanQuirksClient",
    packageName: "body-boolean-quirks",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyByte: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-byte.json",
    clientName: "BodyByteClient",
    packageName: "body-byte",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyComplex: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "BodyComplexClient",
    packageName: "body-complex",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyComplexWithTracing: {
    moduleKind: "cjs",
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
    addCredentials: false,
    isTestPackage: true
  },
  bodyDate: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-date.json",
    clientName: "BodyDateClient",
    packageName: "body-date",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDateTime: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-datetime.json",
    clientName: "BodyDateTimeClient",
    packageName: "body-datetime",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDateTimeRfc1123: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-datetime-rfc1123.json",
    clientName: "BodyDateTimeRfc1123Client",
    packageName: "body-datetime-rfc1123",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDictionary: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-dictionary.json",
    clientName: "BodyDictionaryClient",
    packageName: "body-dictionary",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyDuration: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-duration.json",
    clientName: "BodyDurationClient",
    packageName: "body-duration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyFile: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-file.json",
    clientName: "BodyFileClient",
    packageName: "body-file",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyInteger: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-integer.json",
    clientName: "BodyIntegerClient",
    packageName: "body-integer",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyNumber: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-number.json",
    clientName: "BodyNumberClient",
    packageName: "body-number",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyString: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringClient",
    packageName: "body-string",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyTime: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-time.json",
    clientName: "BodyTimeClient",
    packageName: "body-time",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  customUrl: {
    moduleKind: "cjs",
    swaggerOrConfig: "custom-baseUrl.json",
    clientName: "CustomUrlClient",
    packageName: "custom-url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  customUrlMoreOptions: {
    moduleKind: "cjs",
    swaggerOrConfig: "custom-baseUrl-more-options.json",
    clientName: "CustomUrlMoreOptionsClient",
    packageName: "custom-url-MoreOptions",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  customUrlPaging: {
    moduleKind: "cjs",
    swaggerOrConfig: "custom-baseUrl-paging.json",
    clientName: "CustomUrlPagingClient",
    packageName: "custom-url-paging",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  header: {
    moduleKind: "cjs",
    swaggerOrConfig: "header.json",
    clientName: "HeaderClient",
    packageName: "header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  httpInfrastructure: {
    moduleKind: "cjs",
    swaggerOrConfig: "httpInfrastructure.json",
    clientName: "HttpInfrastructureClient",
    packageName: "httpInfrastructure",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  lro: {
    moduleKind: "cjs",
    swaggerOrConfig: "lro.json",
    clientName: "LROClient",
    packageName: "lro",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    tracing: {
      namespace: "Microsoft.Autorest.LRO",
      packagePrefix: "Azure.Autorest.LRO"
    }
  },
  lroParametrizedEndpoints: {
    moduleKind: "cjs",
    swaggerOrConfig: "lro-parameterized-endpoints.json",
    clientName: "LroParametrizedEndpointsClient",
    packageName: "lro-parameterized-endpoints",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mediaTypes: {
    moduleKind: "cjs",
    swaggerOrConfig: "media_types.json",
    clientName: "MediaTypesClient",
    packageName: "media-types-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    lenientModelDeduplication: true
  },
  mediaTypesWithTracing: {
    moduleKind: "cjs",
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
    addCredentials: false,
    isTestPackage: true,
    lenientModelDeduplication: true
  },
  mediaTypesV3: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/media-types-v3.json",
    clientName: "MediaTypesV3Client",
    packageName: "media-types-v3-client",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mediaTypesV3Lro: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/media-types-v3-lro.json",
    clientName: "MediaTypesV3LROClient",
    packageName: "media-types-v3-lro-client",
    licenseHeader: true,
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  modelFlattening: {
    moduleKind: "cjs",
    swaggerOrConfig: "model-flattening.json",
    clientName: "ModelFlatteningClient",
    packageName: "model-flattening",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  multipleInheritance: {
    moduleKind: "cjs",
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceClient",
    packageName: "multiple-inheritance",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  noMappers: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/no-mappers.json",
    clientName: "NoMappersClient",
    packageName: "no-mappers",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  noOperation: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/noOperation.json",
    clientName: "NoOperationsClient",
    packageName: "no-operation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  nonStringEnum: {
    moduleKind: "cjs",
    swaggerOrConfig: "non-string-enum.json",
    clientName: "NonStringEnumClient",
    packageName: "non-string-num",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  objectType: {
    moduleKind: "cjs",
    swaggerOrConfig: "object-type.json",
    clientName: "ObjectTypeClient",
    packageName: "object-type",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  paging: {
    moduleKind: "cjs",
    swaggerOrConfig: "paging.json",
    clientName: "PagingClient",
    packageName: "paging-service",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Media.Types",
      packagePrefix: "Azure.Media.Types"
    },
    useCoreV2: true,
    addCredentials: false,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  pagingNoIterators: {
    moduleKind: "cjs",
    swaggerOrConfig: "paging.json",
    clientName: "PagingNoIteratorsClient",
    packageName: "paging-no-iterators",
    licenseHeader: true,
    disableAsyncIterators: true,
    allowInsecureConnection: true,
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  requiredOptional: {
    moduleKind: "cjs",
    swaggerOrConfig: "required-optional.json",
    clientName: "RequiredOptionalClient",
    packageName: "required-optional",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  regexConstraint: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/regex-constraint.json",
    clientName: "RegexConstraint",
    packageName: "regex-constraint",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  report: {
    moduleKind: "cjs",
    swaggerOrConfig: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  uuid: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/uuid.json",
    clientName: "UuidClient",
    packageName: "uuid",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  url: {
    moduleKind: "cjs",
    swaggerOrConfig: "url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  urlMulti: {
    moduleKind: "cjs",
    swaggerOrConfig: "url-multi-collectionFormat.json",
    clientName: "UrlMultiClient",
    packageName: "url-multi",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  url2: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  xmlservice: {
    moduleKind: "cjs",
    swaggerOrConfig: "xml-service.json",
    clientName: "XmlServiceClient",
    packageName: "xml-service",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  noLicenseHeader: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "NoLicenseHeaderClient",
    packageName: "nolicense-header",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  licenseHeader: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "LicenseHeaderClient",
    packageName: "license-header",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  subscriptionIdApiVersion: {
    moduleKind: "cjs",
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "SubscriptionIdApiVersionClient",
    packageName: "subscriptionid-apiversion",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  bodyFormData: {
    moduleKind: "cjs",
    swaggerOrConfig: "body-formdata.json",
    clientName: "BodyFormDataClient",
    packageName: "body-formdata",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  validation: {
    moduleKind: "cjs",
    swaggerOrConfig: "validation.json",
    clientName: "ValidationClient",
    packageName: "validation",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  extensibleEnums: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/extensibleEnums.md",
    clientName: "ExtensibleEnumsClient",
    packageName: "extensible-enums",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  xmsErrorResponses: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/xmsErrorResponses.md",
    clientName: "XmsErrorResponsesClient",
    packageName: "xms-error-responses",
    licenseHeader: true,
    addCredentials: false,
    allowInsecureConnection: true,
    useCoreV2: true,
    isTestPackage: true
  },
  odataDiscriminator: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/odata-discriminator.json",
    clientName: "ODataDiscriminatorClient",
    packageName: "odata-discriminator",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  appconfiguration: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  appconfigurationexport: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    hideClients: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  mapperrequired: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/mapperrequired.json",
    clientName: "MapperRequiredClient",
    packageName: "mapperrequired",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  readmeFileChecker: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/keyvaults-secrets.md",
    clientName: "KeyVaultClient",
    packageName: "keyvault-secrets",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  nameChecker: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/Data.md",
    clientName: "SearchClient",
    packageName: "search-documents",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  polymorphicSkipNormalize: {
    moduleKind: "cjs",
    swaggerOrConfig:
      "test/integration/swaggers/MediaServices_polymorphic_skipNormalize.md",
    clientName: "MediaServicesClient",
    packageName: "media-services",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  petstore: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/petstore.json",
    clientName: "PetStore",
    packageName: "petstore",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  textanalytics: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.md",
    clientName: "GeneratedClient",
    packageName: "textanalytics",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  constantParam: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.json",
    clientName: "GeneratedClient",
    packageName: "constantParam",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  storagefileshare: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/storagefileshare.json",
    clientName: "StorageFileShareClient",
    packageName: "storagefileshare",
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  optionalnull: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/optionalnull.json",
    clientName: "OptionalNullClient",
    packageName: "optionalnull",
    ignoreNullableOnOptional: true,
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  storageblob: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/storageblob.json",
    clientName: "StorageBlobClient",
    packageName: "storageblob",
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  headerprefix: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/headerprefix.json",
    clientName: "HeaderPrefixClient",
    packageName: "headerprefix",
    useCoreV2: true,
    addCredentials: false,
    isTestPackage: true
  },
  operationgroupclash: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/operationGroupClash.json",
    clientName: "OperationGroupClashClient",
    packageName: "operationgroupclash",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  domainservices: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/domainservices.md",
    clientName: "DomainServicesClient",
    packageName: "domainservices",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  deviceprovisioningservice: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/deviceprovisioningservices.md",
    clientName: "DeviceProvisioningClient",
    packageName: "deviceprovisioning",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  datafactory: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/datafactory.md",
    clientName: "DataFactoryClient",
    packageName: "datafactory",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  healthcareapis: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/healthcareapis.md",
    clientName: "HealthCareApisClient",
    packageName: "healthcareapis",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  useragentcorev1: {
    moduleKind: "cjs",
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "UserAgentCoreV1Client",
    packageName: "useragent-corev1",
    licenseHeader: true,
    useCoreV2: false,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  useragentcorev2: {
    moduleKind: "cjs",
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "UserAgentCoreV2Client",
    packageName: "useragent-corev2",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  iotspaces: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/iotspaces.json",
    clientName: "IoTSpacesClient",
    packageName: "iotspaces",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: true,
    security: "AADToken",
    isTestPackage: true
  },
  resources: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/resources.json",
    clientName: "ResourcesClient",
    packageName: "resources",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: true,
    security: "AADToken",
    headAsBoolean: true,
    isTestPackage: true
  },
  sealedchoice: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/sealedchoice.json",
    clientName: "SealedChoiceClient",
    packageName: "sealedchoice",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  datalakestorage: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/datalakestorage.json",
    clientName: "DataLakeStorageClient",
    packageName: "datalakestorage",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  corecompattest: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/petstore.json",
    clientName: "PetStore",
    packageName: "petstore",
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: true,
    isTestPackage: true,
    coreHttpCompatMode: true
  },
  datasearch: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/dataSearch.json",
    clientName: "DataSearchClient",
    packageName: "data-search",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateTest: true,
    coreHttpCompatMode: true,
    azureSdkForJs: false
  },
  patterntest: {
    moduleKind: "cjs",
    swaggerOrConfig: "test/integration/swaggers/patterntest.yml",
    clientName: "PatternTestClient",
    packageName: "pattern-test",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateTest: true,
    coreHttpCompatMode: true,
    azureSdkForJs: false
  }
};

const rlcTestSwaggers: { [name: string]: SwaggerConfig } = {
  // TEST REST LEVEL CLIENTS
  lroRest: {
    swaggerOrConfig: "lro.json",
    clientName: "LRORestClient",
    packageName: "lro-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: false
  },
  dpgCustomization: {
    swaggerOrConfig: "dpg-customization.json",
    clientName: "DPGCustomizationClient",
    packageName: "dpg-customization-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: true
  },
  bodyStringRest: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringRest",
    packageName: "body-string-rest",
    addCredentials: false,
    restLevelClient: true,
    azureSdkForJs: false,
    licenseHeader: true,
    isTestPackage: true,
    generateTest: true,
    generateSample: true
  },
  bodyComplexRest: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "BodyComplexRestClient",
    packageName: "body-complex-rest",
    licenseHeader: true,
    restLevelClient: true,
    azureSdkForJs: false,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: false
  },
  pagingRest: {
    swaggerOrConfig: "paging.json",
    clientName: "Paging",
    packageName: "paging-service",
    licenseHeader: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: false
  },
  multipleInheritanceRest: {
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceRestClient",
    packageName: "multiple-inheritance-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    restLevelClient: true,
    azureSdkForJs: false,
    rlcShortcut: true,
    isTestPackage: true,
    generateSample: true
  },
  mediaTypesRest: {
    swaggerOrConfig: "media_types.json",
    clientName: "MediaTypes",
    packageName: "media-types-service-rest",
    licenseHeader: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: true
  },
  bodyFileRest: {
    swaggerOrConfig: "body-file.json",
    clientName: "BodyFile",
    packageName: "body-file",
    licenseHeader: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: false
  },
  headerRest: {
    swaggerOrConfig: "header.json",
    clientName: "HeaderRestClient",
    packageName: "header-rest",
    licenseHeader: true,
    restLevelClient: true,
    azureSdkForJs: false,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: true
  },
  urlRest: {
    swaggerOrConfig: "url.json",
    clientName: "UrlRestClient",
    packageName: "url-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    azureSdkForJs: false,
    generateSample: false
  },
  bodyFormDataRest: {
    swaggerOrConfig: "body-formdata.json",
    clientName: "BodyFormData",
    packageName: "body-formdata-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: false
  },
  customUrlRest: {
    swaggerOrConfig: "custom-baseUrl.json",
    clientName: "CustomUrlRestClient",
    packageName: "custom-url-rest",
    licenseHeader: true,
    restLevelClient: true,
    azureSdkForJs: false,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: false // have issues in custom url samples
  },
  httpInfrastructureRest: {
    swaggerOrConfig: "httpInfrastructure.json",
    clientName: "HttpInfrastructureRestClient",
    packageName: "http-infrastructure-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: false
  },
  securityAADRest: {
    swaggerOrConfig: "security-aad.json",
    clientName: "SecurityAADRestClient",
    packageName: "security-aad-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  securityKeyRest: {
    swaggerOrConfig: "security-key.json",
    clientName: "SecurityKeyRestClient",
    packageName: "security-key-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  multipleUrlParameters: {
    swaggerOrConfig: "test/rlcIntegration/swaggers/multipleUrlParameter.json",
    clientName: "MultipleUrlParameterRestClient",
    packageName: "multiple-url-parameter-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  azureReport: {
    moduleKind: "cjs",
    swaggerOrConfig: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  report: {
    moduleKind: "cjs",
    swaggerOrConfig: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    azureSdkForJs: false
  }
};

const generateSwaggers = async (
  whiteList?: string[],
  isDebugging?: boolean,
  isRlc?: boolean
) => {
  if (isRlc) {
    testSwaggers = rlcTestSwaggers;
  }
  const swaggers = Object.keys(testSwaggers).filter(name => {
    if (!whiteList || !whiteList.length) {
      return true;
    }
    return whiteList.includes(name);
  });

  for (let name of swaggers) {
    const {
      addCredentials,
      security,
      clientName,
      swaggerOrConfig,
      packageName,
      licenseHeader,
      tracing,
      disableAsyncIterators,
      securityScopes,
      hideClients,
      ignoreNullableOnOptional,
      useCoreV2,
      allowInsecureConnection,
      restLevelClient,
      azureSdkForJs,
      headAsBoolean,
      isTestPackage,
      generateTest,
      rlcShortcut,
      coreHttpCompatMode,
      generateSample,
      moduleKind
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
        security,
        securityScopes:
          security && securityScopes && security.length > 0
            ? securityScopes
            : undefined,
        srcPath: "",
        licenseHeader: !!licenseHeader,
        addCredentials,
        outputPath: isRlc
          ? `./test/rlcIntegration/generated/${name}`
          : `./test/integration/generated/${name}`,
        title: clientName,
        packageDetails: {
          name:
            packageName.split("/").length === 1
              ? `@msinternal/${packageName}`
              : packageName,
          version: package_version,
          nameWithoutScope: ""
        },
        hideClients,
        ignoreNullableOnOptional,
        useCoreV2,
        allowInsecureConnection,
        restLevelClient,
        azureSdkForJs: azureSdkForJs,
        rlcShortcut,
        headAsBoolean,
        isTestPackage,
        generateTest,
        coreHttpCompatMode,
        generateSample,
        moduleKind
      },
      isDebugging
    );
  }
};

const buildWhitelist = () => {
  if (process.argv.find(arg => arg === "--all-rlc")) {
    console.log("Generating all RLC test clients");
    for (const swagger in testSwaggers) {
      if (testSwaggers[swagger].restLevelClient) {
        whiteList.push(swagger);
      }
    }

    return;
  }

  if (process.argv.find(arg => arg === "--non-hlc")) {
    console.log("Generating all non-RLC test clients");

    for (const swagger in testSwaggers) {
      if (!testSwaggers[swagger].restLevelClient) {
        whiteList.push(swagger);
      }
    }

    return;
  }

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
};
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
  const isRlc = process.argv.indexOf("rlc") !== -1;
  buildWhitelist();
  await logAutorestInfo();
  await buildAutorest();
  await generateSwaggers(whiteList, isDebugging, isRlc);
};

run().catch(error => {
  console.error(error);
  process.exit(-1000);
});