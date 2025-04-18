import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;

@useAuth(AzureAuth)
@service(#{
  title: "Azure Schema Registry",
})

// Supported operations.
//  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups?api-version={apiVersion}
//  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups/$schemas/{id}?api-version={apiVersion}
//  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}/versions/?api-version={apiVersion}
//  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}/versions/{schemaVersion}?api-version={apiVersion}
//  POST https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}/:get-id?api-version={apiVersion}
//  PUT https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}?api-version={apiVersion}
@server(
  "{fullyQualifiedNamespace}",
  "The Schema Registry service endpoint.",
  {
    @doc("The Schema Registry service endpoint, for example 'my-namespace.servicebus.windows.net'.")
    fullyQualifiedNamespace: url,
  }
)
@versioned(ServiceApiVersions)
@doc("SchemaRegistryClient is a client for registering and retrieving schemas from the Azure Schema Registry service.")
namespace Azure.SchemaRegistry;

@doc("Represents the Schema Registry API version to use for requests.")
enum ServiceApiVersions {
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  @doc("Azure Schema Registry 2021-10 Version")
  V2021_10: "2021-10",

  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  @doc("Azure Schema Registry 2022-10 Version")
  V2022_10: "2022-10",

  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  @doc("Azure Schema Registry 2023-07-01 Version. This is the default version.")
  V2023_07_01: "2023-07-01",
}

@doc("Azure Active Directory OAuth2 Flow")
model AzureAuth
  is OAuth2Auth<[
    {
      type: OAuth2FlowType.implicit;
      authorizationUrl: "https://login.microsoftonline.com/common/oauth2/authorize";

      // add description to below: "impersonate your user account"
      scopes: ["https://eventhubs.azure.net/.default"];
    }
  ]>;

// ROUTES
alias resourceOperations = Azure.Core.StandardResourceOperations;

interface SchemaOperations {
  //  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups?api-version={apiVersion}
  @summary("Get list of schema groups.")
  @doc("Gets the list of schema groups user is authorized to access.")
  @sharedRoute
  listSchemaGroups is resourceOperations.ResourceList<SchemaGroup>;

  //  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups/$schemas/{id}?api-version={apiVersion}
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Standard read operation w/ SchemaId resource doesn't allow returning binary schema and headers."
  @summary("Get a registered schema by its unique ID reference.")
  @doc("Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested.")
  @route("/$schemaGroups/$schemas/{id}")
  @get
  getSchemaById is Azure.Core.Foundations.Operation<
    Azure.Core.Foundations.ItemKeysOf<SchemaId>,
    OkResponse & SchemaHeaders & SchemaContent & SchemaContentType
  >;

  //  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}/versions/?api-version={apiVersion}
  @summary("List schema versions.")
  @doc("Gets the list of all versions of one schema.")
  listSchemaVersions is resourceOperations.ResourceList<Version>;

  //  GET https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}/versions/{schemaVersion}?api-version={apiVersion}
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Standard read operation w/ Version resource doesn't allow returning non-version response."
  @summary("Get specific schema versions.")
  @doc("Gets one specific version of one schema.")
  @route("/$schemaGroups/{groupName}/schemas/{name}/versions/{schemaVersion}")
  @get
  getSchemaByVersion is Azure.Core.Foundations.Operation<
    Azure.Core.Foundations.ItemKeysOf<Version>,
    OkResponse & SchemaHeaders & SchemaContent & SchemaContentType
  >;

  //  POST https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}:get-id?api-version={apiVersion}
  @summary("Get ID for existing schema.")
  @doc("Gets the ID referencing an existing schema within the specified schema group, as matched by schema content comparison.")
  @action("get-id")
  getSchemaIdByContent is resourceOperations.ResourceAction<
    SchemaNameContent,
    {
      ...SchemaContentType;

      @doc("String representation (UTF-8) of the registered schema.")
      @body
      schemaContent: bytes;
    },
    SchemaHeaders & { @statusCode _: 204; }
  >;

  //  PUT https://{namespaceName}.servicebus.windows.net/$schemaGroups/{groupName}/schemas/{name}?api-version={apiVersion}
  #suppress "@azure-tools/typespec-azure-core/use-standard-names" "Register operation does not use create/replace naming"
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "Standard createOrReplace operation does not allow passing in binary body to request."
  @summary("Register new schema")
  @doc("Register new schema. If schema of specified name does not exist in specified group, schema is created at version 1. If schema of specified name exists already in specified group, schema is created at latest version + 1.")
  @route("/$schemaGroups/{groupName}/schemas/{name}")
  @put
  registerSchema is Azure.Core.Foundations.Operation<
    Azure.Core.Foundations.ItemKeysOf<SchemaNameContent> &
      SchemaContent &
      SchemaContentType,
    NoContentResponse<SchemaHeaders>
  >;
}

// Models

alias NoContentResponse<T> = TypeSpec.Http.Response<204> & T;

union SchemaContentTypeValues {
  avro: "application/json; serialization=Avro",
  @added(ServiceApiVersions.V2022_10)
  json: "application/json; serialization=json",
  @added(ServiceApiVersions.V2022_10)
  custom: "text/plain; charset=utf-8",
  @added(ServiceApiVersions.V2023_07_01)
  protobuf: "text/vnd.ms.protobuf",
}

@doc("The content type for the schema.")
enum ContentTypeEnum {
  @doc("The custom schema content type.")
  custom: "application/octet-stream",
  @doc("The Avro schema content type.")
  avro: "application/json; serialization=Avro",
  @doc("The JSON schema content type.")
  @added(ServiceApiVersions.V2022_10)
  json: "application/json; serialization=json",
  @doc("The protobuf schema content type.")
  @added(ServiceApiVersions.V2023_07_01)
  protobuf: "text/vnd.ms.protobuf",
}

@doc("Represents the format of the schema to be stored by the Schema Registry service.")
enum SchemaFormat {
  @doc("Represents the Apache Avro schema format.")
  avro: "Avro",
  @doc("Represents the JSON schema format.")
  @added(ServiceApiVersions.V2022_10)
  json: "Json",
  @doc("Represents a custom schema format.")
  @added(ServiceApiVersions.V2022_10)
  custom: "Custom",
  @added(ServiceApiVersions.V2023_07_01)
  @doc("Represents a protobuf schema format.")
  protobuf: "Protobuf",
}

@doc("Meta properties of a schema.")
model SchemaProperties {
  @doc("References a specific schema in the registry namespace.")
  id: string;

  @doc("Format for the schema being stored.")
  format: SchemaFormat;

  @doc("Schema group under which schema is stored.")
  groupName: string;

  @doc("Name of schema.")
  name: string;

  @doc("Version of schema.")
  version: int32;
}

@doc("The schema content of a schema, along with id and meta properties.")
model Schema {
  @doc("The content of the schema.")
  definition: string;

  @doc("The properties of the schema.")
  properties: SchemaProperties;
}

@doc("The content type for given schema. Each schema type has an associated content-type.")
model SchemaContentType {
  @doc("The content type for given schema.")
  @header("Content-Type")
  contentType: SchemaContentTypeValues;
}

@doc("Content of the schema.")
model SchemaContent {
  @body
  @doc("String representation (UTF-8) of the schema.")
  content: bytes;
}

@doc("Headers for metadata of a schema.")
model SchemaHeaders {
  @doc("URL location of schema, identified by schema group, schema name, and version.")
  @header("Location")
  location: string;

  @doc("References specific schema in registry namespace.")
  @header("Schema-Id")
  schemaId: string;

  @doc("URL location of schema, identified by schema ID.")
  @header("Schema-Id-Location")
  schemaIdLocation: string;

  @doc("References schema group.")
  @header("Schema-Group-Name")
  schemaGroupName: string;

  @doc("References schema name.")
  @header("Schema-Name")
  schemaName: string;

  @doc("Version of the returned schema.")
  @header("Schema-Version")
  schemaVersion: int32;
}

@doc("Object received from the registry containing schema identifiers.")
@resource("$schemaGroups/$schemas")
model SchemaId {
  @key("id")
  @doc("Schema ID that uniquely identifies a schema in the registry namespace.")
  @visibility(Lifecycle.Read)
  id: string;
}

@doc("Schema Group resource.")
@resource("$schemaGroups")
model SchemaGroup {
  @key("groupName")
  @doc("Name of schema group.")
  @visibility(Lifecycle.Read)
  groupName: string;
}

@doc("Schemas resource.")
@resource("schemas")
@parentResource(SchemaGroup)
model SchemaNameContent {
  @key("name")
  @doc("Name of schema.")
  @visibility(Lifecycle.Read)
  @maxLength(50)
  @pattern("^[A-Za-z0-9][^\\\\/$:]*$")
  name: string;

  @doc("String representation (UTF-8) of the registered schema.")
  schemaContent: bytes;
}

@doc("Schema versions resource.")
@resource("versions")
@parentResource(SchemaNameContent)
model Version {
  @key("schemaVersion")
  @doc("Version number of specific schema.")
  @visibility(Lifecycle.Read)
  schemaVersion: int32;
}
