// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../../../../../static-helpers/serialization/serialize-record.js";
import {
  azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionSerializer,
  azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionDeserializer,
  KnowledgeRetrievalReasoningEffortUnion,
  AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalOutputMode,
} from "../knowledgeBase/models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Represents a synonym map definition. */
export interface AzureSearchDocumentsIndexesSynonymMap {
  /** The name of the synonym map. */
  name: string;
  /** The format of the synonym map. Only the 'solr' format is currently supported. */
  format: "solr";
  /** A series of synonym rules in the specified synonym map format. The rules must be separated by newlines. */
  synonyms: string;
  /** A description of an encryption key that you create in Azure Key Vault. This key is used to provide an additional level of encryption-at-rest for your data when you want full assurance that no one, not even Microsoft, can decrypt your data. Once you have encrypted your data, it will always remain encrypted. The search service will ignore attempts to set this property to null. You can change this property as needed if you want to rotate your encryption key; Your data will be unaffected. Encryption with customer-managed keys is not available for free search services, and is only available for paid services created on or after January 1, 2019. */
  encryptionKey?: AzureSearchDocumentsIndexesSearchResourceEncryptionKey;
  /** The ETag of the synonym map. */
  eTag?: string;
}

export function azureSearchDocumentsIndexesSynonymMapSerializer(
  item: AzureSearchDocumentsIndexesSynonymMap,
): any {
  return {
    name: item["name"],
    format: item["format"],
    synonyms: item["synonyms"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
    "@odata.etag": item["eTag"],
  };
}

export function azureSearchDocumentsIndexesSynonymMapDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSynonymMap {
  return {
    name: item["name"],
    format: item["format"],
    synonyms: item["synonyms"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
    eTag: item["@odata.etag"],
  };
}

/** A customer-managed encryption key in Azure Key Vault. Keys that you create and manage can be used to encrypt or decrypt data-at-rest, such as indexes and synonym maps. */
export interface AzureSearchDocumentsIndexesSearchResourceEncryptionKey {
  /** The name of your Azure Key Vault key to be used to encrypt your data at rest. */
  keyName: string;
  /** The version of your Azure Key Vault key to be used to encrypt your data at rest. */
  keyVersion?: string;
  /** The URI of your Azure Key Vault, also referred to as DNS name, that contains the key to be used to encrypt your data at rest. An example URI might be `https://my-keyvault-name.vault.azure.net`. */
  vaultUri: string;
  /** Optional Azure Active Directory credentials used for accessing your Azure Key Vault. Not required if using managed identity instead. */
  accessCredentials?: AzureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentials;
  /** An explicit managed identity to use for this encryption key. If not specified and the access credentials property is null, the system-assigned managed identity is used. On update to the resource, if the explicit identity is unspecified, it remains unchanged. If "none" is specified, the value of this property is cleared. */
  identity?: SearchIndexerDataIdentityUnion;
}

export function azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
  item: AzureSearchDocumentsIndexesSearchResourceEncryptionKey,
): any {
  return {
    keyVaultKeyName: item["keyName"],
    keyVaultKeyVersion: item["keyVersion"],
    keyVaultUri: item["vaultUri"],
    accessCredentials: !item["accessCredentials"]
      ? item["accessCredentials"]
      : azureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentialsSerializer(
          item["accessCredentials"],
        ),
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["identity"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchResourceEncryptionKey {
  return {
    keyName: item["keyVaultKeyName"],
    keyVersion: item["keyVaultKeyVersion"],
    vaultUri: item["keyVaultUri"],
    accessCredentials: !item["accessCredentials"]
      ? item["accessCredentials"]
      : azureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentialsDeserializer(
          item["accessCredentials"],
        ),
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["identity"],
        ),
  };
}

/** Credentials of a registered application created for your search service, used for authenticated access to the encryption keys stored in Azure Key Vault. */
export interface AzureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentials {
  /** An AAD Application ID that was granted the required access permissions to the Azure Key Vault that is to be used when encrypting your data at rest. The Application ID should not be confused with the Object ID for your AAD Application. */
  applicationId: string;
  /** The authentication key of the specified AAD application. */
  applicationSecret?: string;
}

export function azureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentialsSerializer(
  item: AzureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentials,
): any {
  return {
    applicationId: item["applicationId"],
    applicationSecret: item["applicationSecret"],
  };
}

export function azureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentialsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureActiveDirectoryApplicationCredentials {
  return {
    applicationId: item["applicationId"],
    applicationSecret: item["applicationSecret"],
  };
}

/** Abstract base type for data identities. */
export interface AzureSearchDocumentsIndexesSearchIndexerDataIdentity {
  /** A URI fragment specifying the type of identity. */
  /** The discriminator possible values: #Microsoft.Azure.Search.DataNoneIdentity, #Microsoft.Azure.Search.DataUserAssignedIdentity */
  odataType: string;
}

export function azureSearchDocumentsIndexesSearchIndexerDataIdentitySerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerDataIdentity,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesSearchIndexerDataIdentityDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerDataIdentity {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for SearchIndexerDataIdentityUnion */
export type SearchIndexerDataIdentityUnion =
  | AzureSearchDocumentsIndexesSearchIndexerDataNoneIdentity
  | AzureSearchDocumentsIndexesSearchIndexerDataUserAssignedIdentity
  | AzureSearchDocumentsIndexesSearchIndexerDataIdentity;

export function azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
  item: SearchIndexerDataIdentityUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DataNoneIdentity":
      return searchIndexerDataNoneIdentitySerializer(
        item as SearchIndexerDataNoneIdentity,
      );

    case "#Microsoft.Azure.Search.DataUserAssignedIdentity":
      return searchIndexerDataUserAssignedIdentitySerializer(
        item as SearchIndexerDataUserAssignedIdentity,
      );

    default:
      return azureSearchDocumentsIndexesSearchIndexerDataIdentitySerializer(
        item,
      );
  }
}

export function azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
  item: any,
): SearchIndexerDataIdentityUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DataNoneIdentity":
      return searchIndexerDataNoneIdentityDeserializer(
        item as SearchIndexerDataNoneIdentity,
      );

    case "#Microsoft.Azure.Search.DataUserAssignedIdentity":
      return searchIndexerDataUserAssignedIdentityDeserializer(
        item as SearchIndexerDataUserAssignedIdentity,
      );

    default:
      return azureSearchDocumentsIndexesSearchIndexerDataIdentityDeserializer(
        item,
      );
  }
}

/** Clears the identity property of a datasource. */
export interface AzureSearchDocumentsIndexesSearchIndexerDataNoneIdentity
  extends AzureSearchDocumentsIndexesSearchIndexerDataIdentity {
  /** The discriminator for derived types. */
  odataType: "#Microsoft.Azure.Search.DataNoneIdentity";
}

export function azureSearchDocumentsIndexesSearchIndexerDataNoneIdentitySerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerDataNoneIdentity,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesSearchIndexerDataNoneIdentityDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerDataNoneIdentity {
  return {
    odataType: item["@odata.type"],
  };
}

/** Specifies the identity for a datasource to use. */
export interface AzureSearchDocumentsIndexesSearchIndexerDataUserAssignedIdentity
  extends AzureSearchDocumentsIndexesSearchIndexerDataIdentity {
  /** The fully qualified Azure resource Id of a user assigned managed identity typically in the form "/subscriptions/12345678-1234-1234-1234-1234567890ab/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId" that should have been assigned to the search service. */
  resourceId: string;
  /** A URI fragment specifying the type of identity. */
  odataType: "#Microsoft.Azure.Search.DataUserAssignedIdentity";
}

export function azureSearchDocumentsIndexesSearchIndexerDataUserAssignedIdentitySerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerDataUserAssignedIdentity,
): any {
  return {
    "@odata.type": item["odataType"],
    userAssignedIdentity: item["resourceId"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerDataUserAssignedIdentityDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerDataUserAssignedIdentity {
  return {
    odataType: item["@odata.type"],
    resourceId: item["userAssignedIdentity"],
  };
}

/** Response from a List SynonymMaps request. If successful, it includes the full definitions of all synonym maps. */
export interface AzureSearchDocumentsIndexesListSynonymMapsResult {
  /** The synonym maps in the Search service. */
  synonymMaps: AzureSearchDocumentsIndexesSynonymMap[];
}

export function azureSearchDocumentsIndexesListSynonymMapsResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexesListSynonymMapsResult {
  return {
    synonymMaps: azureSearchDocumentsIndexesSynonymMapArrayDeserializer(
      item["value"],
    ),
  };
}

export function azureSearchDocumentsIndexesSynonymMapArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSynonymMap>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSynonymMapSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSynonymMapArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSynonymMap>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSynonymMapDeserializer(item);
  });
}

/** Represents a search index definition, which describes the fields and search behavior of an index. */
export interface AzureSearchDocumentsIndexesSearchIndex {
  /** The name of the index. */
  name: string;
  /** The description of the index. */
  description?: string;
  /** The fields of the index. */
  fields: AzureSearchDocumentsIndexesSearchField[];
  /** The scoring profiles for the index. */
  scoringProfiles?: AzureSearchDocumentsIndexesScoringProfile[];
  /** The name of the scoring profile to use if none is specified in the query. If this property is not set and no scoring profile is specified in the query, then default scoring (tf-idf) will be used. */
  defaultScoringProfile?: string;
  /** Options to control Cross-Origin Resource Sharing (CORS) for the index. */
  corsOptions?: AzureSearchDocumentsIndexesCorsOptions;
  /** The suggesters for the index. */
  suggesters?: AzureSearchDocumentsIndexesSearchSuggester[];
  /** The analyzers for the index. */
  analyzers?: LexicalAnalyzerUnion[];
  /** The tokenizers for the index. */
  tokenizers?: LexicalTokenizerUnion[];
  /** The token filters for the index. */
  tokenFilters?: TokenFilterUnion[];
  /** The character filters for the index. */
  charFilters?: CharFilterUnion[];
  /** The normalizers for the index. */
  normalizers?: LexicalNormalizerUnion[];
  /** A description of an encryption key that you create in Azure Key Vault. This key is used to provide an additional level of encryption-at-rest for your data when you want full assurance that no one, not even Microsoft, can decrypt your data. Once you have encrypted your data, it will always remain encrypted. The search service will ignore attempts to set this property to null. You can change this property as needed if you want to rotate your encryption key; Your data will be unaffected. Encryption with customer-managed keys is not available for free search services, and is only available for paid services created on or after January 1, 2019. */
  encryptionKey?: AzureSearchDocumentsIndexesSearchResourceEncryptionKey;
  /** The type of similarity algorithm to be used when scoring and ranking the documents matching a search query. The similarity algorithm can only be defined at index creation time and cannot be modified on existing indexes. If null, the ClassicSimilarity algorithm is used. */
  similarity?: SimilarityAlgorithmUnion;
  /** Defines parameters for a search index that influence semantic capabilities. */
  semanticSearch?: AzureSearchDocumentsIndexesSemanticSearch;
  /** Contains configuration options related to vector search. */
  vectorSearch?: AzureSearchDocumentsIndexesVectorSearch;
  /** A value indicating whether permission filtering is enabled for the index. */
  permissionFilterOption?: AzureSearchDocumentsIndexesSearchIndexPermissionFilterOption;
  /** The ETag of the index. */
  eTag?: string;
}

export function azureSearchDocumentsIndexesSearchIndexSerializer(
  item: AzureSearchDocumentsIndexesSearchIndex,
): any {
  return {
    name: item["name"],
    description: item["description"],
    fields: azureSearchDocumentsIndexesSearchFieldArraySerializer(
      item["fields"],
    ),
    scoringProfiles: !item["scoringProfiles"]
      ? item["scoringProfiles"]
      : azureSearchDocumentsIndexesScoringProfileArraySerializer(
          item["scoringProfiles"],
        ),
    defaultScoringProfile: item["defaultScoringProfile"],
    corsOptions: !item["corsOptions"]
      ? item["corsOptions"]
      : azureSearchDocumentsIndexesCorsOptionsSerializer(item["corsOptions"]),
    suggesters: !item["suggesters"]
      ? item["suggesters"]
      : azureSearchDocumentsIndexesSearchSuggesterArraySerializer(
          item["suggesters"],
        ),
    analyzers: !item["analyzers"]
      ? item["analyzers"]
      : azureSearchDocumentsIndexesLexicalAnalyzerUnionArraySerializer(
          item["analyzers"],
        ),
    tokenizers: !item["tokenizers"]
      ? item["tokenizers"]
      : azureSearchDocumentsIndexesLexicalTokenizerUnionArraySerializer(
          item["tokenizers"],
        ),
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : azureSearchDocumentsIndexesTokenFilterUnionArraySerializer(
          item["tokenFilters"],
        ),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : azureSearchDocumentsIndexesCharFilterUnionArraySerializer(
          item["charFilters"],
        ),
    normalizers: !item["normalizers"]
      ? item["normalizers"]
      : azureSearchDocumentsIndexesLexicalNormalizerUnionArraySerializer(
          item["normalizers"],
        ),
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
    similarity: !item["similarity"]
      ? item["similarity"]
      : azureSearchDocumentsIndexesSimilarityAlgorithmUnionSerializer(
          item["similarity"],
        ),
    semantic: !item["semanticSearch"]
      ? item["semanticSearch"]
      : azureSearchDocumentsIndexesSemanticSearchSerializer(
          item["semanticSearch"],
        ),
    vectorSearch: !item["vectorSearch"]
      ? item["vectorSearch"]
      : azureSearchDocumentsIndexesVectorSearchSerializer(item["vectorSearch"]),
    permissionFilterOption: item["permissionFilterOption"],
    "@odata.etag": item["eTag"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndex {
  return {
    name: item["name"],
    description: item["description"],
    fields: azureSearchDocumentsIndexesSearchFieldArrayDeserializer(
      item["fields"],
    ),
    scoringProfiles: !item["scoringProfiles"]
      ? item["scoringProfiles"]
      : azureSearchDocumentsIndexesScoringProfileArrayDeserializer(
          item["scoringProfiles"],
        ),
    defaultScoringProfile: item["defaultScoringProfile"],
    corsOptions: !item["corsOptions"]
      ? item["corsOptions"]
      : azureSearchDocumentsIndexesCorsOptionsDeserializer(item["corsOptions"]),
    suggesters: !item["suggesters"]
      ? item["suggesters"]
      : azureSearchDocumentsIndexesSearchSuggesterArrayDeserializer(
          item["suggesters"],
        ),
    analyzers: !item["analyzers"]
      ? item["analyzers"]
      : azureSearchDocumentsIndexesLexicalAnalyzerUnionArrayDeserializer(
          item["analyzers"],
        ),
    tokenizers: !item["tokenizers"]
      ? item["tokenizers"]
      : azureSearchDocumentsIndexesLexicalTokenizerUnionArrayDeserializer(
          item["tokenizers"],
        ),
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : azureSearchDocumentsIndexesTokenFilterUnionArrayDeserializer(
          item["tokenFilters"],
        ),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : azureSearchDocumentsIndexesCharFilterUnionArrayDeserializer(
          item["charFilters"],
        ),
    normalizers: !item["normalizers"]
      ? item["normalizers"]
      : azureSearchDocumentsIndexesLexicalNormalizerUnionArrayDeserializer(
          item["normalizers"],
        ),
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
    similarity: !item["similarity"]
      ? item["similarity"]
      : azureSearchDocumentsIndexesSimilarityAlgorithmUnionDeserializer(
          item["similarity"],
        ),
    semanticSearch: !item["semantic"]
      ? item["semantic"]
      : azureSearchDocumentsIndexesSemanticSearchDeserializer(item["semantic"]),
    vectorSearch: !item["vectorSearch"]
      ? item["vectorSearch"]
      : azureSearchDocumentsIndexesVectorSearchDeserializer(
          item["vectorSearch"],
        ),
    permissionFilterOption: item["permissionFilterOption"],
    eTag: item["@odata.etag"],
  };
}

export function azureSearchDocumentsIndexesSearchFieldArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchField>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchFieldSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSearchFieldArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchField>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchFieldDeserializer(item);
  });
}

/** Represents a field in an index definition, which describes the name, data type, and search behavior of a field. */
export interface AzureSearchDocumentsIndexesSearchField {
  /** The name of the field, which must be unique within the fields collection of the index or parent field. */
  name: string;
  /** The data type of the field. */
  type: AzureSearchDocumentsIndexesSearchFieldDataType;
  /** A value indicating whether the field uniquely identifies documents in the index. Exactly one top-level field in each index must be chosen as the key field and it must be of type Edm.String. Key fields can be used to look up documents directly and update or delete specific documents. Default is false for simple fields and null for complex fields. */
  key?: boolean;
  /** A value indicating whether the field can be returned in a search result. You can disable this option if you want to use a field (for example, margin) as a filter, sorting, or scoring mechanism but do not want the field to be visible to the end user. This property must be true for key fields, and it must be null for complex fields. This property can be changed on existing fields. Enabling this property does not cause any increase in index storage requirements. Default is true for simple fields, false for vector fields, and null for complex fields. */
  retrievable?: boolean;
  /** An immutable value indicating whether the field will be persisted separately on disk to be returned in a search result. You can disable this option if you don't plan to return the field contents in a search response to save on storage overhead. This can only be set during index creation and only for vector fields. This property cannot be changed for existing fields or set as false for new fields. If this property is set as false, the property 'retrievable' must also be set to false. This property must be true or unset for key fields, for new fields, and for non-vector fields, and it must be null for complex fields. Disabling this property will reduce index storage requirements. The default is true for vector fields. */
  stored?: boolean;
  /** A value indicating whether the field is full-text searchable. This means it will undergo analysis such as word-breaking during indexing. If you set a searchable field to a value like "sunny day", internally it will be split into the individual tokens "sunny" and "day". This enables full-text searches for these terms. Fields of type Edm.String or Collection(Edm.String) are searchable by default. This property must be false for simple fields of other non-string data types, and it must be null for complex fields. Note: searchable fields consume extra space in your index to accommodate additional tokenized versions of the field value for full-text searches. If you want to save space in your index and you don't need a field to be included in searches, set searchable to false. */
  searchable?: boolean;
  /** A value indicating whether to enable the field to be referenced in $filter queries. filterable differs from searchable in how strings are handled. Fields of type Edm.String or Collection(Edm.String) that are filterable do not undergo word-breaking, so comparisons are for exact matches only. For example, if you set such a field f to "sunny day", $filter=f eq 'sunny' will find no matches, but $filter=f eq 'sunny day' will. This property must be null for complex fields. Default is true for simple fields and null for complex fields. */
  filterable?: boolean;
  /** A value indicating whether to enable the field to be referenced in $orderby expressions. By default, the search engine sorts results by score, but in many experiences users will want to sort by fields in the documents. A simple field can be sortable only if it is single-valued (it has a single value in the scope of the parent document). Simple collection fields cannot be sortable, since they are multi-valued. Simple sub-fields of complex collections are also multi-valued, and therefore cannot be sortable. This is true whether it's an immediate parent field, or an ancestor field, that's the complex collection. Complex fields cannot be sortable and the sortable property must be null for such fields. The default for sortable is true for single-valued simple fields, false for multi-valued simple fields, and null for complex fields. */
  sortable?: boolean;
  /** A value indicating whether to enable the field to be referenced in facet queries. Typically used in a presentation of search results that includes hit count by category (for example, search for digital cameras and see hits by brand, by megapixels, by price, and so on). This property must be null for complex fields. Fields of type Edm.GeographyPoint or Collection(Edm.GeographyPoint) cannot be facetable. Default is true for all other simple fields. */
  facetable?: boolean;
  /** A value indicating whether the field should be used as a permission filter. */
  permissionFilter?: AzureSearchDocumentsIndexesPermissionFilter;
  /** The name of the analyzer to use for the field. This option can be used only with searchable fields and it can't be set together with either searchAnalyzer or indexAnalyzer. Once the analyzer is chosen, it cannot be changed for the field. Must be null for complex fields. */
  analyzerName?: AzureSearchDocumentsIndexesLexicalAnalyzerName;
  /** The name of the analyzer used at search time for the field. This option can be used only with searchable fields. It must be set together with indexAnalyzer and it cannot be set together with the analyzer option. This property cannot be set to the name of a language analyzer; use the analyzer property instead if you need a language analyzer. This analyzer can be updated on an existing field. Must be null for complex fields. */
  searchAnalyzerName?: AzureSearchDocumentsIndexesLexicalAnalyzerName;
  /** The name of the analyzer used at indexing time for the field. This option can be used only with searchable fields. It must be set together with searchAnalyzer and it cannot be set together with the analyzer option.  This property cannot be set to the name of a language analyzer; use the analyzer property instead if you need a language analyzer. Once the analyzer is chosen, it cannot be changed for the field. Must be null for complex fields. */
  indexAnalyzerName?: AzureSearchDocumentsIndexesLexicalAnalyzerName;
  /** The name of the normalizer to use for the field. This option can be used only with fields with filterable, sortable, or facetable enabled. Once the normalizer is chosen, it cannot be changed for the field. Must be null for complex fields. */
  normalizerName?: AzureSearchDocumentsIndexesLexicalNormalizerName;
  /** The dimensionality of the vector field. */
  vectorSearchDimensions?: number;
  /** The name of the vector search profile that specifies the algorithm and vectorizer to use when searching the vector field. */
  vectorSearchProfileName?: string;
  /** The encoding format to interpret the field contents. */
  vectorEncodingFormat?: AzureSearchDocumentsIndexesVectorEncodingFormat;
  /** A list of the names of synonym maps to associate with this field. This option can be used only with searchable fields. Currently only one synonym map per field is supported. Assigning a synonym map to a field ensures that query terms targeting that field are expanded at query-time using the rules in the synonym map. This attribute can be changed on existing fields. Must be null or an empty collection for complex fields. */
  synonymMapNames?: string[];
  /** A list of sub-fields if this is a field of type Edm.ComplexType or Collection(Edm.ComplexType). Must be null or empty for simple fields. */
  fields?: AzureSearchDocumentsIndexesSearchField[];
}

export function azureSearchDocumentsIndexesSearchFieldSerializer(
  item: AzureSearchDocumentsIndexesSearchField,
): any {
  return {
    name: item["name"],
    type: item["type"],
    key: item["key"],
    retrievable: item["retrievable"],
    stored: item["stored"],
    searchable: item["searchable"],
    filterable: item["filterable"],
    sortable: item["sortable"],
    facetable: item["facetable"],
    permissionFilter: item["permissionFilter"],
    analyzer: item["analyzerName"],
    searchAnalyzer: item["searchAnalyzerName"],
    indexAnalyzer: item["indexAnalyzerName"],
    normalizer: item["normalizerName"],
    dimensions: item["vectorSearchDimensions"],
    vectorSearchProfile: item["vectorSearchProfileName"],
    vectorEncoding: item["vectorEncodingFormat"],
    synonymMaps: !item["synonymMapNames"]
      ? item["synonymMapNames"]
      : item["synonymMapNames"].map((p: any) => {
          return p;
        }),
    fields: !item["fields"]
      ? item["fields"]
      : azureSearchDocumentsIndexesSearchFieldArraySerializer(item["fields"]),
  };
}

export function azureSearchDocumentsIndexesSearchFieldDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchField {
  return {
    name: item["name"],
    type: item["type"],
    key: item["key"],
    retrievable: item["retrievable"],
    stored: item["stored"],
    searchable: item["searchable"],
    filterable: item["filterable"],
    sortable: item["sortable"],
    facetable: item["facetable"],
    permissionFilter: item["permissionFilter"],
    analyzerName: item["analyzer"],
    searchAnalyzerName: item["searchAnalyzer"],
    indexAnalyzerName: item["indexAnalyzer"],
    normalizerName: item["normalizer"],
    vectorSearchDimensions: item["dimensions"],
    vectorSearchProfileName: item["vectorSearchProfile"],
    vectorEncodingFormat: item["vectorEncoding"],
    synonymMapNames: !item["synonymMaps"]
      ? item["synonymMaps"]
      : item["synonymMaps"].map((p: any) => {
          return p;
        }),
    fields: !item["fields"]
      ? item["fields"]
      : azureSearchDocumentsIndexesSearchFieldArrayDeserializer(item["fields"]),
  };
}

/** Defines the data type of a field in a search index. */
export enum KnownAzureSearchDocumentsIndexesSearchFieldDataType {
  /** Indicates that a field contains a string. */
  String = "Edm.String",
  /** Indicates that a field contains a 32-bit signed integer. */
  Int32 = "Edm.Int32",
  /** Indicates that a field contains a 64-bit signed integer. */
  Int64 = "Edm.Int64",
  /** Indicates that a field contains an IEEE double-precision floating point number. */
  Double = "Edm.Double",
  /** Indicates that a field contains a Boolean value (true or false). */
  Boolean = "Edm.Boolean",
  /** Indicates that a field contains a date/time value, including timezone information. */
  DateTimeOffset = "Edm.DateTimeOffset",
  /** Indicates that a field contains a geo-location in terms of longitude and latitude. */
  GeographyPoint = "Edm.GeographyPoint",
  /** Indicates that a field contains one or more complex objects that in turn have sub-fields of other types. */
  Complex = "Edm.ComplexType",
  /** Indicates that a field contains a single-precision floating point number. This is only valid when used with Collection(Edm.Single). */
  Single = "Edm.Single",
  /** Indicates that a field contains a half-precision floating point number. This is only valid when used with Collection(Edm.Half). */
  Half = "Edm.Half",
  /** Indicates that a field contains a 16-bit signed integer. This is only valid when used with Collection(Edm.Int16). */
  Int16 = "Edm.Int16",
  /** Indicates that a field contains a 8-bit signed integer. This is only valid when used with Collection(Edm.SByte). */
  SByte = "Edm.SByte",
  /** Indicates that a field contains a 8-bit unsigned integer. This is only valid when used with Collection(Edm.Byte). */
  Byte = "Edm.Byte",
}

/**
 * Defines the data type of a field in a search index. \
 * {@link KnownAzureSearchDocumentsIndexesSearchFieldDataType} can be used interchangeably with AzureSearchDocumentsIndexesSearchFieldDataType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Edm.String**: Indicates that a field contains a string. \
 * **Edm.Int32**: Indicates that a field contains a 32-bit signed integer. \
 * **Edm.Int64**: Indicates that a field contains a 64-bit signed integer. \
 * **Edm.Double**: Indicates that a field contains an IEEE double-precision floating point number. \
 * **Edm.Boolean**: Indicates that a field contains a Boolean value (true or false). \
 * **Edm.DateTimeOffset**: Indicates that a field contains a date\/time value, including timezone information. \
 * **Edm.GeographyPoint**: Indicates that a field contains a geo-location in terms of longitude and latitude. \
 * **Edm.ComplexType**: Indicates that a field contains one or more complex objects that in turn have sub-fields of other types. \
 * **Edm.Single**: Indicates that a field contains a single-precision floating point number. This is only valid when used with Collection(Edm.Single). \
 * **Edm.Half**: Indicates that a field contains a half-precision floating point number. This is only valid when used with Collection(Edm.Half). \
 * **Edm.Int16**: Indicates that a field contains a 16-bit signed integer. This is only valid when used with Collection(Edm.Int16). \
 * **Edm.SByte**: Indicates that a field contains a 8-bit signed integer. This is only valid when used with Collection(Edm.SByte). \
 * **Edm.Byte**: Indicates that a field contains a 8-bit unsigned integer. This is only valid when used with Collection(Edm.Byte).
 */
export type AzureSearchDocumentsIndexesSearchFieldDataType = string;

/** A value indicating whether the field should be used as a permission filter. */
export enum KnownAzureSearchDocumentsIndexesPermissionFilter {
  /** Field represents user IDs that should be used to filter document access on queries. */
  UserIds = "userIds",
  /** Field represents group IDs that should be used to filter document access on queries. */
  GroupIds = "groupIds",
  /** Field represents an RBAC scope that should be used to filter document access on queries. */
  RbacScope = "rbacScope",
}

/**
 * A value indicating whether the field should be used as a permission filter. \
 * {@link KnownAzureSearchDocumentsIndexesPermissionFilter} can be used interchangeably with AzureSearchDocumentsIndexesPermissionFilter,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **userIds**: Field represents user IDs that should be used to filter document access on queries. \
 * **groupIds**: Field represents group IDs that should be used to filter document access on queries. \
 * **rbacScope**: Field represents an RBAC scope that should be used to filter document access on queries.
 */
export type AzureSearchDocumentsIndexesPermissionFilter = string;

/** Defines the names of all text analyzers supported by the search engine. */
export enum KnownAzureSearchDocumentsIndexesLexicalAnalyzerName {
  /** Microsoft analyzer for Arabic. */
  ArMicrosoft = "ar.microsoft",
  /** Lucene analyzer for Arabic. */
  ArLucene = "ar.lucene",
  /** Lucene analyzer for Armenian. */
  HyLucene = "hy.lucene",
  /** Microsoft analyzer for Bangla. */
  BnMicrosoft = "bn.microsoft",
  /** Lucene analyzer for Basque. */
  EuLucene = "eu.lucene",
  /** Microsoft analyzer for Bulgarian. */
  BgMicrosoft = "bg.microsoft",
  /** Lucene analyzer for Bulgarian. */
  BgLucene = "bg.lucene",
  /** Microsoft analyzer for Catalan. */
  CaMicrosoft = "ca.microsoft",
  /** Lucene analyzer for Catalan. */
  CaLucene = "ca.lucene",
  /** Microsoft analyzer for Chinese (Simplified). */
  ZhHansMicrosoft = "zh-Hans.microsoft",
  /** Lucene analyzer for Chinese (Simplified). */
  ZhHansLucene = "zh-Hans.lucene",
  /** Microsoft analyzer for Chinese (Traditional). */
  ZhHantMicrosoft = "zh-Hant.microsoft",
  /** Lucene analyzer for Chinese (Traditional). */
  ZhHantLucene = "zh-Hant.lucene",
  /** Microsoft analyzer for Croatian. */
  HrMicrosoft = "hr.microsoft",
  /** Microsoft analyzer for Czech. */
  CsMicrosoft = "cs.microsoft",
  /** Lucene analyzer for Czech. */
  CsLucene = "cs.lucene",
  /** Microsoft analyzer for Danish. */
  DaMicrosoft = "da.microsoft",
  /** Lucene analyzer for Danish. */
  DaLucene = "da.lucene",
  /** Microsoft analyzer for Dutch. */
  NlMicrosoft = "nl.microsoft",
  /** Lucene analyzer for Dutch. */
  NlLucene = "nl.lucene",
  /** Microsoft analyzer for English. */
  EnMicrosoft = "en.microsoft",
  /** Lucene analyzer for English. */
  EnLucene = "en.lucene",
  /** Microsoft analyzer for Estonian. */
  EtMicrosoft = "et.microsoft",
  /** Microsoft analyzer for Finnish. */
  FiMicrosoft = "fi.microsoft",
  /** Lucene analyzer for Finnish. */
  FiLucene = "fi.lucene",
  /** Microsoft analyzer for French. */
  FrMicrosoft = "fr.microsoft",
  /** Lucene analyzer for French. */
  FrLucene = "fr.lucene",
  /** Lucene analyzer for Galician. */
  GlLucene = "gl.lucene",
  /** Microsoft analyzer for German. */
  DeMicrosoft = "de.microsoft",
  /** Lucene analyzer for German. */
  DeLucene = "de.lucene",
  /** Microsoft analyzer for Greek. */
  ElMicrosoft = "el.microsoft",
  /** Lucene analyzer for Greek. */
  ElLucene = "el.lucene",
  /** Microsoft analyzer for Gujarati. */
  GuMicrosoft = "gu.microsoft",
  /** Microsoft analyzer for Hebrew. */
  HeMicrosoft = "he.microsoft",
  /** Microsoft analyzer for Hindi. */
  HiMicrosoft = "hi.microsoft",
  /** Lucene analyzer for Hindi. */
  HiLucene = "hi.lucene",
  /** Microsoft analyzer for Hungarian. */
  HuMicrosoft = "hu.microsoft",
  /** Lucene analyzer for Hungarian. */
  HuLucene = "hu.lucene",
  /** Microsoft analyzer for Icelandic. */
  IsMicrosoft = "is.microsoft",
  /** Microsoft analyzer for Indonesian (Bahasa). */
  IdMicrosoft = "id.microsoft",
  /** Lucene analyzer for Indonesian. */
  IdLucene = "id.lucene",
  /** Lucene analyzer for Irish. */
  GaLucene = "ga.lucene",
  /** Microsoft analyzer for Italian. */
  ItMicrosoft = "it.microsoft",
  /** Lucene analyzer for Italian. */
  ItLucene = "it.lucene",
  /** Microsoft analyzer for Japanese. */
  JaMicrosoft = "ja.microsoft",
  /** Lucene analyzer for Japanese. */
  JaLucene = "ja.lucene",
  /** Microsoft analyzer for Kannada. */
  KnMicrosoft = "kn.microsoft",
  /** Microsoft analyzer for Korean. */
  KoMicrosoft = "ko.microsoft",
  /** Lucene analyzer for Korean. */
  KoLucene = "ko.lucene",
  /** Microsoft analyzer for Latvian. */
  LvMicrosoft = "lv.microsoft",
  /** Lucene analyzer for Latvian. */
  LvLucene = "lv.lucene",
  /** Microsoft analyzer for Lithuanian. */
  LtMicrosoft = "lt.microsoft",
  /** Microsoft analyzer for Malayalam. */
  MlMicrosoft = "ml.microsoft",
  /** Microsoft analyzer for Malay (Latin). */
  MsMicrosoft = "ms.microsoft",
  /** Microsoft analyzer for Marathi. */
  MrMicrosoft = "mr.microsoft",
  /** Microsoft analyzer for Norwegian (BokmÃ¥l). */
  NbMicrosoft = "nb.microsoft",
  /** Lucene analyzer for Norwegian. */
  NoLucene = "no.lucene",
  /** Lucene analyzer for Persian. */
  FaLucene = "fa.lucene",
  /** Microsoft analyzer for Polish. */
  PlMicrosoft = "pl.microsoft",
  /** Lucene analyzer for Polish. */
  PlLucene = "pl.lucene",
  /** Microsoft analyzer for Portuguese (Brazil). */
  PtBrMicrosoft = "pt-BR.microsoft",
  /** Lucene analyzer for Portuguese (Brazil). */
  PtBrLucene = "pt-BR.lucene",
  /** Microsoft analyzer for Portuguese (Portugal). */
  PtPtMicrosoft = "pt-PT.microsoft",
  /** Lucene analyzer for Portuguese (Portugal). */
  PtPtLucene = "pt-PT.lucene",
  /** Microsoft analyzer for Punjabi. */
  PaMicrosoft = "pa.microsoft",
  /** Microsoft analyzer for Romanian. */
  RoMicrosoft = "ro.microsoft",
  /** Lucene analyzer for Romanian. */
  RoLucene = "ro.lucene",
  /** Microsoft analyzer for Russian. */
  RuMicrosoft = "ru.microsoft",
  /** Lucene analyzer for Russian. */
  RuLucene = "ru.lucene",
  /** Microsoft analyzer for Serbian (Cyrillic). */
  SrCyrillicMicrosoft = "sr-cyrillic.microsoft",
  /** Microsoft analyzer for Serbian (Latin). */
  SrLatinMicrosoft = "sr-latin.microsoft",
  /** Microsoft analyzer for Slovak. */
  SkMicrosoft = "sk.microsoft",
  /** Microsoft analyzer for Slovenian. */
  SlMicrosoft = "sl.microsoft",
  /** Microsoft analyzer for Spanish. */
  EsMicrosoft = "es.microsoft",
  /** Lucene analyzer for Spanish. */
  EsLucene = "es.lucene",
  /** Microsoft analyzer for Swedish. */
  SvMicrosoft = "sv.microsoft",
  /** Lucene analyzer for Swedish. */
  SvLucene = "sv.lucene",
  /** Microsoft analyzer for Tamil. */
  TaMicrosoft = "ta.microsoft",
  /** Microsoft analyzer for Telugu. */
  TeMicrosoft = "te.microsoft",
  /** Microsoft analyzer for Thai. */
  ThMicrosoft = "th.microsoft",
  /** Lucene analyzer for Thai. */
  ThLucene = "th.lucene",
  /** Microsoft analyzer for Turkish. */
  TrMicrosoft = "tr.microsoft",
  /** Lucene analyzer for Turkish. */
  TrLucene = "tr.lucene",
  /** Microsoft analyzer for Ukrainian. */
  UkMicrosoft = "uk.microsoft",
  /** Microsoft analyzer for Urdu. */
  UrMicrosoft = "ur.microsoft",
  /** Microsoft analyzer for Vietnamese. */
  ViMicrosoft = "vi.microsoft",
  /** Standard Lucene analyzer. */
  StandardLucene = "standard.lucene",
  /** Standard ASCII Folding Lucene analyzer. See https://learn.microsoft.com/rest/api/searchservice/Custom-analyzers-in-Azure-Search#Analyzers */
  StandardAsciiFoldingLucene = "standardasciifolding.lucene",
  /** Treats the entire content of a field as a single token. This is useful for data like zip codes, ids, and some product names. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/KeywordAnalyzer.html */
  Keyword = "keyword",
  /** Flexibly separates text into terms via a regular expression pattern. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/PatternAnalyzer.html */
  Pattern = "pattern",
  /** Divides text at non-letters and converts them to lower case. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/SimpleAnalyzer.html */
  Simple = "simple",
  /** Divides text at non-letters; Applies the lowercase and stopword token filters. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/StopAnalyzer.html */
  Stop = "stop",
  /** An analyzer that uses the whitespace tokenizer. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/WhitespaceAnalyzer.html */
  Whitespace = "whitespace",
}

/**
 * Defines the names of all text analyzers supported by the search engine. \
 * {@link KnownAzureSearchDocumentsIndexesLexicalAnalyzerName} can be used interchangeably with AzureSearchDocumentsIndexesLexicalAnalyzerName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ar.microsoft**: Microsoft analyzer for Arabic. \
 * **ar.lucene**: Lucene analyzer for Arabic. \
 * **hy.lucene**: Lucene analyzer for Armenian. \
 * **bn.microsoft**: Microsoft analyzer for Bangla. \
 * **eu.lucene**: Lucene analyzer for Basque. \
 * **bg.microsoft**: Microsoft analyzer for Bulgarian. \
 * **bg.lucene**: Lucene analyzer for Bulgarian. \
 * **ca.microsoft**: Microsoft analyzer for Catalan. \
 * **ca.lucene**: Lucene analyzer for Catalan. \
 * **zh-Hans.microsoft**: Microsoft analyzer for Chinese (Simplified). \
 * **zh-Hans.lucene**: Lucene analyzer for Chinese (Simplified). \
 * **zh-Hant.microsoft**: Microsoft analyzer for Chinese (Traditional). \
 * **zh-Hant.lucene**: Lucene analyzer for Chinese (Traditional). \
 * **hr.microsoft**: Microsoft analyzer for Croatian. \
 * **cs.microsoft**: Microsoft analyzer for Czech. \
 * **cs.lucene**: Lucene analyzer for Czech. \
 * **da.microsoft**: Microsoft analyzer for Danish. \
 * **da.lucene**: Lucene analyzer for Danish. \
 * **nl.microsoft**: Microsoft analyzer for Dutch. \
 * **nl.lucene**: Lucene analyzer for Dutch. \
 * **en.microsoft**: Microsoft analyzer for English. \
 * **en.lucene**: Lucene analyzer for English. \
 * **et.microsoft**: Microsoft analyzer for Estonian. \
 * **fi.microsoft**: Microsoft analyzer for Finnish. \
 * **fi.lucene**: Lucene analyzer for Finnish. \
 * **fr.microsoft**: Microsoft analyzer for French. \
 * **fr.lucene**: Lucene analyzer for French. \
 * **gl.lucene**: Lucene analyzer for Galician. \
 * **de.microsoft**: Microsoft analyzer for German. \
 * **de.lucene**: Lucene analyzer for German. \
 * **el.microsoft**: Microsoft analyzer for Greek. \
 * **el.lucene**: Lucene analyzer for Greek. \
 * **gu.microsoft**: Microsoft analyzer for Gujarati. \
 * **he.microsoft**: Microsoft analyzer for Hebrew. \
 * **hi.microsoft**: Microsoft analyzer for Hindi. \
 * **hi.lucene**: Lucene analyzer for Hindi. \
 * **hu.microsoft**: Microsoft analyzer for Hungarian. \
 * **hu.lucene**: Lucene analyzer for Hungarian. \
 * **is.microsoft**: Microsoft analyzer for Icelandic. \
 * **id.microsoft**: Microsoft analyzer for Indonesian (Bahasa). \
 * **id.lucene**: Lucene analyzer for Indonesian. \
 * **ga.lucene**: Lucene analyzer for Irish. \
 * **it.microsoft**: Microsoft analyzer for Italian. \
 * **it.lucene**: Lucene analyzer for Italian. \
 * **ja.microsoft**: Microsoft analyzer for Japanese. \
 * **ja.lucene**: Lucene analyzer for Japanese. \
 * **kn.microsoft**: Microsoft analyzer for Kannada. \
 * **ko.microsoft**: Microsoft analyzer for Korean. \
 * **ko.lucene**: Lucene analyzer for Korean. \
 * **lv.microsoft**: Microsoft analyzer for Latvian. \
 * **lv.lucene**: Lucene analyzer for Latvian. \
 * **lt.microsoft**: Microsoft analyzer for Lithuanian. \
 * **ml.microsoft**: Microsoft analyzer for Malayalam. \
 * **ms.microsoft**: Microsoft analyzer for Malay (Latin). \
 * **mr.microsoft**: Microsoft analyzer for Marathi. \
 * **nb.microsoft**: Microsoft analyzer for Norwegian (BokmÃ¥l). \
 * **no.lucene**: Lucene analyzer for Norwegian. \
 * **fa.lucene**: Lucene analyzer for Persian. \
 * **pl.microsoft**: Microsoft analyzer for Polish. \
 * **pl.lucene**: Lucene analyzer for Polish. \
 * **pt-BR.microsoft**: Microsoft analyzer for Portuguese (Brazil). \
 * **pt-BR.lucene**: Lucene analyzer for Portuguese (Brazil). \
 * **pt-PT.microsoft**: Microsoft analyzer for Portuguese (Portugal). \
 * **pt-PT.lucene**: Lucene analyzer for Portuguese (Portugal). \
 * **pa.microsoft**: Microsoft analyzer for Punjabi. \
 * **ro.microsoft**: Microsoft analyzer for Romanian. \
 * **ro.lucene**: Lucene analyzer for Romanian. \
 * **ru.microsoft**: Microsoft analyzer for Russian. \
 * **ru.lucene**: Lucene analyzer for Russian. \
 * **sr-cyrillic.microsoft**: Microsoft analyzer for Serbian (Cyrillic). \
 * **sr-latin.microsoft**: Microsoft analyzer for Serbian (Latin). \
 * **sk.microsoft**: Microsoft analyzer for Slovak. \
 * **sl.microsoft**: Microsoft analyzer for Slovenian. \
 * **es.microsoft**: Microsoft analyzer for Spanish. \
 * **es.lucene**: Lucene analyzer for Spanish. \
 * **sv.microsoft**: Microsoft analyzer for Swedish. \
 * **sv.lucene**: Lucene analyzer for Swedish. \
 * **ta.microsoft**: Microsoft analyzer for Tamil. \
 * **te.microsoft**: Microsoft analyzer for Telugu. \
 * **th.microsoft**: Microsoft analyzer for Thai. \
 * **th.lucene**: Lucene analyzer for Thai. \
 * **tr.microsoft**: Microsoft analyzer for Turkish. \
 * **tr.lucene**: Lucene analyzer for Turkish. \
 * **uk.microsoft**: Microsoft analyzer for Ukrainian. \
 * **ur.microsoft**: Microsoft analyzer for Urdu. \
 * **vi.microsoft**: Microsoft analyzer for Vietnamese. \
 * **standard.lucene**: Standard Lucene analyzer. \
 * **standardasciifolding.lucene**: Standard ASCII Folding Lucene analyzer. See https:\//learn.microsoft.com\/rest\/api\/searchservice\/Custom-analyzers-in-Azure-Search#Analyzers \
 * **keyword**: Treats the entire content of a field as a single token. This is useful for data like zip codes, ids, and some product names. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/KeywordAnalyzer.html \
 * **pattern**: Flexibly separates text into terms via a regular expression pattern. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/PatternAnalyzer.html \
 * **simple**: Divides text at non-letters and converts them to lower case. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/SimpleAnalyzer.html \
 * **stop**: Divides text at non-letters; Applies the lowercase and stopword token filters. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/StopAnalyzer.html \
 * **whitespace**: An analyzer that uses the whitespace tokenizer. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/WhitespaceAnalyzer.html
 */
export type AzureSearchDocumentsIndexesLexicalAnalyzerName = string;

/** Defines the names of all text normalizers supported by the search engine. */
export enum KnownAzureSearchDocumentsIndexesLexicalNormalizerName {
  /** Converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if such equivalents exist. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.html */
  AsciiFolding = "asciifolding",
  /** Removes elisions. For example, "l'avion" (the plane) will be converted to "avion" (plane). See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/util/ElisionFilter.html */
  Elision = "elision",
  /** Normalizes token text to lowercase. See https://lucene.apache.org/core/6_6_1/analyzers-common/org/apache/lucene/analysis/core/LowerCaseFilter.html */
  Lowercase = "lowercase",
  /** Standard normalizer, which consists of lowercase and asciifolding. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/reverse/ReverseStringFilter.html */
  Standard = "standard",
  /** Normalizes token text to uppercase. See https://lucene.apache.org/core/6_6_1/analyzers-common/org/apache/lucene/analysis/core/UpperCaseFilter.html */
  Uppercase = "uppercase",
}

/**
 * Defines the names of all text normalizers supported by the search engine. \
 * {@link KnownAzureSearchDocumentsIndexesLexicalNormalizerName} can be used interchangeably with AzureSearchDocumentsIndexesLexicalNormalizerName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **asciifolding**: Converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if such equivalents exist. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/ASCIIFoldingFilter.html \
 * **elision**: Removes elisions. For example, "l'avion" (the plane) will be converted to "avion" (plane). See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/util\/ElisionFilter.html \
 * **lowercase**: Normalizes token text to lowercase. See https:\//lucene.apache.org\/core\/6_6_1\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/LowerCaseFilter.html \
 * **standard**: Standard normalizer, which consists of lowercase and asciifolding. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/reverse\/ReverseStringFilter.html \
 * **uppercase**: Normalizes token text to uppercase. See https:\//lucene.apache.org\/core\/6_6_1\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/UpperCaseFilter.html
 */
export type AzureSearchDocumentsIndexesLexicalNormalizerName = string;

/** The encoding format for interpreting vector field contents. */
export enum KnownAzureSearchDocumentsIndexesVectorEncodingFormat {
  /** Encoding format representing bits packed into a wider data type. */
  PackedBit = "packedBit",
}

/**
 * The encoding format for interpreting vector field contents. \
 * {@link KnownAzureSearchDocumentsIndexesVectorEncodingFormat} can be used interchangeably with AzureSearchDocumentsIndexesVectorEncodingFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **packedBit**: Encoding format representing bits packed into a wider data type.
 */
export type AzureSearchDocumentsIndexesVectorEncodingFormat = string;

export function azureSearchDocumentsIndexesScoringProfileArraySerializer(
  result: Array<AzureSearchDocumentsIndexesScoringProfile>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesScoringProfileSerializer(item);
  });
}

export function azureSearchDocumentsIndexesScoringProfileArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesScoringProfile>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesScoringProfileDeserializer(item);
  });
}

/** Defines parameters for a search index that influence scoring in search queries. */
export interface AzureSearchDocumentsIndexesScoringProfile {
  /** The name of the scoring profile. */
  name: string;
  /** Parameters that boost scoring based on text matches in certain index fields. */
  textWeights?: AzureSearchDocumentsIndexesTextWeights;
  /** The collection of functions that influence the scoring of documents. */
  functions?: ScoringFunctionUnion[];
  /** A value indicating how the results of individual scoring functions should be combined. Defaults to "Sum". Ignored if there are no scoring functions. */
  functionAggregation?: AzureSearchDocumentsIndexesScoringFunctionAggregation;
}

export function azureSearchDocumentsIndexesScoringProfileSerializer(
  item: AzureSearchDocumentsIndexesScoringProfile,
): any {
  return {
    name: item["name"],
    text: !item["textWeights"]
      ? item["textWeights"]
      : azureSearchDocumentsIndexesTextWeightsSerializer(item["textWeights"]),
    functions: !item["functions"]
      ? item["functions"]
      : azureSearchDocumentsIndexesScoringFunctionUnionArraySerializer(
          item["functions"],
        ),
    functionAggregation: item["functionAggregation"],
  };
}

export function azureSearchDocumentsIndexesScoringProfileDeserializer(
  item: any,
): AzureSearchDocumentsIndexesScoringProfile {
  return {
    name: item["name"],
    textWeights: !item["text"]
      ? item["text"]
      : azureSearchDocumentsIndexesTextWeightsDeserializer(item["text"]),
    functions: !item["functions"]
      ? item["functions"]
      : azureSearchDocumentsIndexesScoringFunctionUnionArrayDeserializer(
          item["functions"],
        ),
    functionAggregation: item["functionAggregation"],
  };
}

/** Defines weights on index fields for which matches should boost scoring in search queries. */
export interface AzureSearchDocumentsIndexesTextWeights {
  /** The dictionary of per-field weights to boost document scoring. The keys are field names and the values are the weights for each field. */
  weights: Record<string, number>;
}

export function azureSearchDocumentsIndexesTextWeightsSerializer(
  item: AzureSearchDocumentsIndexesTextWeights,
): any {
  return { weights: item["weights"] };
}

export function azureSearchDocumentsIndexesTextWeightsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesTextWeights {
  return {
    weights: item["weights"],
  };
}

export function azureSearchDocumentsIndexesScoringFunctionUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesScoringFunctionUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesScoringFunctionUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesScoringFunctionUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesScoringFunctionUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesScoringFunctionUnionDeserializer(item);
  });
}

/** Base type for functions that can modify document scores during ranking. */
export interface AzureSearchDocumentsIndexesScoringFunction {
  /** The name of the field used as input to the scoring function. */
  fieldName: string;
  /** A multiplier for the raw score. Must be a positive number not equal to 1.0. */
  boost: number;
  /** A value indicating how boosting will be interpolated across document scores; defaults to "Linear". */
  interpolation?: AzureSearchDocumentsIndexesScoringFunctionInterpolation;
  /** Type of ScoringFunction. */
  /** The discriminator possible values: distance, freshness, magnitude, tag */
  type: string;
}

export function azureSearchDocumentsIndexesScoringFunctionSerializer(
  item: AzureSearchDocumentsIndexesScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
  };
}

export function azureSearchDocumentsIndexesScoringFunctionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
  };
}

/** Alias for ScoringFunctionUnion */
export type ScoringFunctionUnion =
  | AzureSearchDocumentsIndexesDistanceScoringFunction
  | AzureSearchDocumentsIndexesFreshnessScoringFunction
  | AzureSearchDocumentsIndexesMagnitudeScoringFunction
  | AzureSearchDocumentsIndexesTagScoringFunction
  | AzureSearchDocumentsIndexesScoringFunction;

export function azureSearchDocumentsIndexesScoringFunctionUnionSerializer(
  item: ScoringFunctionUnion,
): any {
  switch (item.type) {
    case "distance":
      return distanceScoringFunctionSerializer(item as DistanceScoringFunction);

    case "freshness":
      return freshnessScoringFunctionSerializer(
        item as FreshnessScoringFunction,
      );

    case "magnitude":
      return magnitudeScoringFunctionSerializer(
        item as MagnitudeScoringFunction,
      );

    case "tag":
      return tagScoringFunctionSerializer(item as TagScoringFunction);

    default:
      return azureSearchDocumentsIndexesScoringFunctionSerializer(item);
  }
}

export function azureSearchDocumentsIndexesScoringFunctionUnionDeserializer(
  item: any,
): ScoringFunctionUnion {
  switch (item.type) {
    case "distance":
      return distanceScoringFunctionDeserializer(
        item as DistanceScoringFunction,
      );

    case "freshness":
      return freshnessScoringFunctionDeserializer(
        item as FreshnessScoringFunction,
      );

    case "magnitude":
      return magnitudeScoringFunctionDeserializer(
        item as MagnitudeScoringFunction,
      );

    case "tag":
      return tagScoringFunctionDeserializer(item as TagScoringFunction);

    default:
      return azureSearchDocumentsIndexesScoringFunctionDeserializer(item);
  }
}

/** Defines the function used to interpolate score boosting across a range of documents. */
export enum KnownAzureSearchDocumentsIndexesScoringFunctionInterpolation {
  /** Boosts scores by a linearly decreasing amount. This is the default interpolation for scoring functions. */
  Linear = "linear",
  /** Boosts scores by a constant factor. */
  Constant = "constant",
  /** Boosts scores by an amount that decreases quadratically. Boosts decrease slowly for higher scores, and more quickly as the scores decrease. This interpolation option is not allowed in tag scoring functions. */
  Quadratic = "quadratic",
  /** Boosts scores by an amount that decreases logarithmically. Boosts decrease quickly for higher scores, and more slowly as the scores decrease. This interpolation option is not allowed in tag scoring functions. */
  Logarithmic = "logarithmic",
}

/**
 * Defines the function used to interpolate score boosting across a range of documents. \
 * {@link KnownAzureSearchDocumentsIndexesScoringFunctionInterpolation} can be used interchangeably with AzureSearchDocumentsIndexesScoringFunctionInterpolation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **linear**: Boosts scores by a linearly decreasing amount. This is the default interpolation for scoring functions. \
 * **constant**: Boosts scores by a constant factor. \
 * **quadratic**: Boosts scores by an amount that decreases quadratically. Boosts decrease slowly for higher scores, and more quickly as the scores decrease. This interpolation option is not allowed in tag scoring functions. \
 * **logarithmic**: Boosts scores by an amount that decreases logarithmically. Boosts decrease quickly for higher scores, and more slowly as the scores decrease. This interpolation option is not allowed in tag scoring functions.
 */
export type AzureSearchDocumentsIndexesScoringFunctionInterpolation = string;

/** Defines a function that boosts scores based on distance from a geographic location. */
export interface AzureSearchDocumentsIndexesDistanceScoringFunction
  extends AzureSearchDocumentsIndexesScoringFunction {
  /** Parameter values for the distance scoring function. */
  parameters: AzureSearchDocumentsIndexesDistanceScoringParameters;
  /** Indicates the type of function to use. Valid values include magnitude, freshness, distance, and tag. The function type must be lower case. */
  type: "distance";
}

export function azureSearchDocumentsIndexesDistanceScoringFunctionSerializer(
  item: AzureSearchDocumentsIndexesDistanceScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    distance: azureSearchDocumentsIndexesDistanceScoringParametersSerializer(
      item["parameters"],
    ),
  };
}

export function azureSearchDocumentsIndexesDistanceScoringFunctionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDistanceScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters:
      azureSearchDocumentsIndexesDistanceScoringParametersDeserializer(
        item["distance"],
      ),
  };
}

/** Provides parameter values to a distance scoring function. */
export interface AzureSearchDocumentsIndexesDistanceScoringParameters {
  /** The name of the parameter passed in search queries to specify the reference location. */
  referencePointParameter: string;
  /** The distance in kilometers from the reference location where the boosting range ends. */
  boostingDistance: number;
}

export function azureSearchDocumentsIndexesDistanceScoringParametersSerializer(
  item: AzureSearchDocumentsIndexesDistanceScoringParameters,
): any {
  return {
    referencePointParameter: item["referencePointParameter"],
    boostingDistance: item["boostingDistance"],
  };
}

export function azureSearchDocumentsIndexesDistanceScoringParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDistanceScoringParameters {
  return {
    referencePointParameter: item["referencePointParameter"],
    boostingDistance: item["boostingDistance"],
  };
}

/** Defines a function that boosts scores based on the value of a date-time field. */
export interface AzureSearchDocumentsIndexesFreshnessScoringFunction
  extends AzureSearchDocumentsIndexesScoringFunction {
  /** Parameter values for the freshness scoring function. */
  parameters: AzureSearchDocumentsIndexesFreshnessScoringParameters;
  /** Indicates the type of function to use. Valid values include magnitude, freshness, distance, and tag. The function type must be lower case. */
  type: "freshness";
}

export function azureSearchDocumentsIndexesFreshnessScoringFunctionSerializer(
  item: AzureSearchDocumentsIndexesFreshnessScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    freshness: azureSearchDocumentsIndexesFreshnessScoringParametersSerializer(
      item["parameters"],
    ),
  };
}

export function azureSearchDocumentsIndexesFreshnessScoringFunctionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesFreshnessScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters:
      azureSearchDocumentsIndexesFreshnessScoringParametersDeserializer(
        item["freshness"],
      ),
  };
}

/** Provides parameter values to a freshness scoring function. */
export interface AzureSearchDocumentsIndexesFreshnessScoringParameters {
  /** The expiration period after which boosting will stop for a particular document. */
  boostingDuration: string;
}

export function azureSearchDocumentsIndexesFreshnessScoringParametersSerializer(
  item: AzureSearchDocumentsIndexesFreshnessScoringParameters,
): any {
  return { boostingDuration: item["boostingDuration"] };
}

export function azureSearchDocumentsIndexesFreshnessScoringParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesFreshnessScoringParameters {
  return {
    boostingDuration: item["boostingDuration"],
  };
}

/** Defines a function that boosts scores based on the magnitude of a numeric field. */
export interface AzureSearchDocumentsIndexesMagnitudeScoringFunction
  extends AzureSearchDocumentsIndexesScoringFunction {
  /** Parameter values for the magnitude scoring function. */
  parameters: AzureSearchDocumentsIndexesMagnitudeScoringParameters;
  /** Indicates the type of function to use. Valid values include magnitude, freshness, distance, and tag. The function type must be lower case. */
  type: "magnitude";
}

export function azureSearchDocumentsIndexesMagnitudeScoringFunctionSerializer(
  item: AzureSearchDocumentsIndexesMagnitudeScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    magnitude: azureSearchDocumentsIndexesMagnitudeScoringParametersSerializer(
      item["parameters"],
    ),
  };
}

export function azureSearchDocumentsIndexesMagnitudeScoringFunctionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesMagnitudeScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters:
      azureSearchDocumentsIndexesMagnitudeScoringParametersDeserializer(
        item["magnitude"],
      ),
  };
}

/** Provides parameter values to a magnitude scoring function. */
export interface AzureSearchDocumentsIndexesMagnitudeScoringParameters {
  /** The field value at which boosting starts. */
  boostingRangeStart: number;
  /** The field value at which boosting ends. */
  boostingRangeEnd: number;
  /** A value indicating whether to apply a constant boost for field values beyond the range end value; default is false. */
  shouldBoostBeyondRangeByConstant?: boolean;
}

export function azureSearchDocumentsIndexesMagnitudeScoringParametersSerializer(
  item: AzureSearchDocumentsIndexesMagnitudeScoringParameters,
): any {
  return {
    boostingRangeStart: item["boostingRangeStart"],
    boostingRangeEnd: item["boostingRangeEnd"],
    constantBoostBeyondRange: item["shouldBoostBeyondRangeByConstant"],
  };
}

export function azureSearchDocumentsIndexesMagnitudeScoringParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesMagnitudeScoringParameters {
  return {
    boostingRangeStart: item["boostingRangeStart"],
    boostingRangeEnd: item["boostingRangeEnd"],
    shouldBoostBeyondRangeByConstant: item["constantBoostBeyondRange"],
  };
}

/** Defines a function that boosts scores of documents with string values matching a given list of tags. */
export interface AzureSearchDocumentsIndexesTagScoringFunction
  extends AzureSearchDocumentsIndexesScoringFunction {
  /** Parameter values for the tag scoring function. */
  parameters: AzureSearchDocumentsIndexesTagScoringParameters;
  /** Indicates the type of function to use. Valid values include magnitude, freshness, distance, and tag. The function type must be lower case. */
  type: "tag";
}

export function azureSearchDocumentsIndexesTagScoringFunctionSerializer(
  item: AzureSearchDocumentsIndexesTagScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    tag: azureSearchDocumentsIndexesTagScoringParametersSerializer(
      item["parameters"],
    ),
  };
}

export function azureSearchDocumentsIndexesTagScoringFunctionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesTagScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters: azureSearchDocumentsIndexesTagScoringParametersDeserializer(
      item["tag"],
    ),
  };
}

/** Provides parameter values to a tag scoring function. */
export interface AzureSearchDocumentsIndexesTagScoringParameters {
  /** The name of the parameter passed in search queries to specify the list of tags to compare against the target field. */
  tagsParameter: string;
}

export function azureSearchDocumentsIndexesTagScoringParametersSerializer(
  item: AzureSearchDocumentsIndexesTagScoringParameters,
): any {
  return { tagsParameter: item["tagsParameter"] };
}

export function azureSearchDocumentsIndexesTagScoringParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesTagScoringParameters {
  return {
    tagsParameter: item["tagsParameter"],
  };
}

/** Defines the aggregation function used to combine the results of all the scoring functions in a scoring profile. */
export enum KnownAzureSearchDocumentsIndexesScoringFunctionAggregation {
  /** Boost scores by the sum of all scoring function results. */
  Sum = "sum",
  /** Boost scores by the average of all scoring function results. */
  Average = "average",
  /** Boost scores by the minimum of all scoring function results. */
  Minimum = "minimum",
  /** Boost scores by the maximum of all scoring function results. */
  Maximum = "maximum",
  /** Boost scores using the first applicable scoring function in the scoring profile. */
  FirstMatching = "firstMatching",
}

/**
 * Defines the aggregation function used to combine the results of all the scoring functions in a scoring profile. \
 * {@link KnownAzureSearchDocumentsIndexesScoringFunctionAggregation} can be used interchangeably with AzureSearchDocumentsIndexesScoringFunctionAggregation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **sum**: Boost scores by the sum of all scoring function results. \
 * **average**: Boost scores by the average of all scoring function results. \
 * **minimum**: Boost scores by the minimum of all scoring function results. \
 * **maximum**: Boost scores by the maximum of all scoring function results. \
 * **firstMatching**: Boost scores using the first applicable scoring function in the scoring profile.
 */
export type AzureSearchDocumentsIndexesScoringFunctionAggregation = string;

/** Defines options to control Cross-Origin Resource Sharing (CORS) for an index. */
export interface AzureSearchDocumentsIndexesCorsOptions {
  /** The list of origins from which JavaScript code will be granted access to your index. Can contain a list of hosts of the form {protocol}://{fully-qualified-domain-name}[:{port#}], or a single '*' to allow all origins (not recommended). */
  allowedOrigins: string[];
  /** The duration for which browsers should cache CORS preflight responses. Defaults to 5 minutes. */
  maxAgeInSeconds?: number;
}

export function azureSearchDocumentsIndexesCorsOptionsSerializer(
  item: AzureSearchDocumentsIndexesCorsOptions,
): any {
  return {
    allowedOrigins: item["allowedOrigins"].map((p: any) => {
      return p;
    }),
    maxAgeInSeconds: item["maxAgeInSeconds"],
  };
}

export function azureSearchDocumentsIndexesCorsOptionsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCorsOptions {
  return {
    allowedOrigins: item["allowedOrigins"].map((p: any) => {
      return p;
    }),
    maxAgeInSeconds: item["maxAgeInSeconds"],
  };
}

export function azureSearchDocumentsIndexesSearchSuggesterArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchSuggester>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchSuggesterSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSearchSuggesterArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchSuggester>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchSuggesterDeserializer(item);
  });
}

/** Defines how the Suggest API should apply to a group of fields in the index. */
export interface AzureSearchDocumentsIndexesSearchSuggester {
  /** The name of the suggester. */
  name: string;
  /** A value indicating the capabilities of the suggester. */
  searchMode: "analyzingInfixMatching";
  /** The list of field names to which the suggester applies. Each field must be searchable. */
  sourceFields: string[];
}

export function azureSearchDocumentsIndexesSearchSuggesterSerializer(
  item: AzureSearchDocumentsIndexesSearchSuggester,
): any {
  return {
    name: item["name"],
    searchMode: item["searchMode"],
    sourceFields: item["sourceFields"].map((p: any) => {
      return p;
    }),
  };
}

export function azureSearchDocumentsIndexesSearchSuggesterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchSuggester {
  return {
    name: item["name"],
    searchMode: item["searchMode"],
    sourceFields: item["sourceFields"].map((p: any) => {
      return p;
    }),
  };
}

export function azureSearchDocumentsIndexesLexicalAnalyzerUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesLexicalAnalyzerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesLexicalAnalyzerUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesLexicalAnalyzerUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesLexicalAnalyzerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesLexicalAnalyzerUnionDeserializer(item);
  });
}

/** Base type for analyzers. */
export interface AzureSearchDocumentsIndexesLexicalAnalyzer {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.CustomAnalyzer, #Microsoft.Azure.Search.PatternAnalyzer, #Microsoft.Azure.Search.StandardAnalyzer, #Microsoft.Azure.Search.StopAnalyzer */
  odataType: string;
  /** The name of the analyzer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters. */
  name: string;
}

export function azureSearchDocumentsIndexesLexicalAnalyzerSerializer(
  item: AzureSearchDocumentsIndexesLexicalAnalyzer,
): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function azureSearchDocumentsIndexesLexicalAnalyzerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLexicalAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for LexicalAnalyzerUnion */
export type LexicalAnalyzerUnion =
  | AzureSearchDocumentsIndexesCustomAnalyzer
  | AzureSearchDocumentsIndexesPatternAnalyzer
  | AzureSearchDocumentsIndexesLuceneStandardAnalyzer
  | AzureSearchDocumentsIndexesStopAnalyzer
  | AzureSearchDocumentsIndexesLexicalAnalyzer;

export function azureSearchDocumentsIndexesLexicalAnalyzerUnionSerializer(
  item: LexicalAnalyzerUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomAnalyzer":
      return customAnalyzerSerializer(item as CustomAnalyzer);

    case "#Microsoft.Azure.Search.PatternAnalyzer":
      return patternAnalyzerSerializer(item as PatternAnalyzer);

    case "#Microsoft.Azure.Search.StandardAnalyzer":
      return luceneStandardAnalyzerSerializer(item as LuceneStandardAnalyzer);

    case "#Microsoft.Azure.Search.StopAnalyzer":
      return stopAnalyzerSerializer(item as StopAnalyzer);

    default:
      return azureSearchDocumentsIndexesLexicalAnalyzerSerializer(item);
  }
}

export function azureSearchDocumentsIndexesLexicalAnalyzerUnionDeserializer(
  item: any,
): LexicalAnalyzerUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomAnalyzer":
      return customAnalyzerDeserializer(item as CustomAnalyzer);

    case "#Microsoft.Azure.Search.PatternAnalyzer":
      return patternAnalyzerDeserializer(item as PatternAnalyzer);

    case "#Microsoft.Azure.Search.StandardAnalyzer":
      return luceneStandardAnalyzerDeserializer(item as LuceneStandardAnalyzer);

    case "#Microsoft.Azure.Search.StopAnalyzer":
      return stopAnalyzerDeserializer(item as StopAnalyzer);

    default:
      return azureSearchDocumentsIndexesLexicalAnalyzerDeserializer(item);
  }
}

/** Allows you to take control over the process of converting text into indexable/searchable tokens. It's a user-defined configuration consisting of a single predefined tokenizer and one or more filters. The tokenizer is responsible for breaking text into tokens, and the filters for modifying tokens emitted by the tokenizer. */
export interface AzureSearchDocumentsIndexesCustomAnalyzer
  extends AzureSearchDocumentsIndexesLexicalAnalyzer {
  /** The name of the tokenizer to use to divide continuous text into a sequence of tokens, such as breaking a sentence into words. */
  tokenizer: AzureSearchDocumentsIndexesLexicalTokenizerName;
  /** A list of token filters used to filter out or modify the tokens generated by a tokenizer. For example, you can specify a lowercase filter that converts all characters to lowercase. The filters are run in the order in which they are listed. */
  tokenFilters?: AzureSearchDocumentsIndexesTokenFilterName[];
  /** A list of character filters used to prepare input text before it is processed by the tokenizer. For instance, they can replace certain characters or symbols. The filters are run in the order in which they are listed. */
  charFilters?: AzureSearchDocumentsIndexesCharFilterName[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.CustomAnalyzer";
}

export function azureSearchDocumentsIndexesCustomAnalyzerSerializer(
  item: AzureSearchDocumentsIndexesCustomAnalyzer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    tokenizer: item["tokenizer"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesCustomAnalyzerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCustomAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    tokenizer: item["tokenizer"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

/** Defines the names of all tokenizers supported by the search engine. */
export enum KnownAzureSearchDocumentsIndexesLexicalTokenizerName {
  /** Grammar-based tokenizer that is suitable for processing most European-language documents. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/standard/ClassicTokenizer.html */
  Classic = "classic",
  /** Tokenizes the input from an edge into n-grams of the given size(s). See https://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/ngram/EdgeNGramTokenizer.html */
  EdgeNGram = "edgeNGram",
  /** Emits the entire input as a single token. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/KeywordTokenizer.html */
  Keyword = "keyword_v2",
  /** Divides text at non-letters. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/LetterTokenizer.html */
  Letter = "letter",
  /** Divides text at non-letters and converts them to lower case. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/LowerCaseTokenizer.html */
  Lowercase = "lowercase",
  /** Divides text using language-specific rules. */
  MicrosoftLanguageTokenizer = "microsoft_language_tokenizer",
  /** Divides text using language-specific rules and reduces words to their base forms. */
  MicrosoftLanguageStemmingTokenizer = "microsoft_language_stemming_tokenizer",
  /** Tokenizes the input into n-grams of the given size(s). See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/ngram/NGramTokenizer.html */
  NGram = "nGram",
  /** Tokenizer for path-like hierarchies. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/path/PathHierarchyTokenizer.html */
  PathHierarchy = "path_hierarchy_v2",
  /** Tokenizer that uses regex pattern matching to construct distinct tokens. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/pattern/PatternTokenizer.html */
  Pattern = "pattern",
  /** Standard Lucene analyzer; Composed of the standard tokenizer, lowercase filter and stop filter. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/standard/StandardTokenizer.html */
  Standard = "standard_v2",
  /** Tokenizes urls and emails as one token. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/standard/UAX29URLEmailTokenizer.html */
  UaxUrlEmail = "uax_url_email",
  /** Divides text at whitespace. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/WhitespaceTokenizer.html */
  Whitespace = "whitespace",
}

/**
 * Defines the names of all tokenizers supported by the search engine. \
 * {@link KnownAzureSearchDocumentsIndexesLexicalTokenizerName} can be used interchangeably with AzureSearchDocumentsIndexesLexicalTokenizerName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **classic**: Grammar-based tokenizer that is suitable for processing most European-language documents. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/standard\/ClassicTokenizer.html \
 * **edgeNGram**: Tokenizes the input from an edge into n-grams of the given size(s). See https:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/ngram\/EdgeNGramTokenizer.html \
 * **keyword_v2**: Emits the entire input as a single token. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/KeywordTokenizer.html \
 * **letter**: Divides text at non-letters. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/LetterTokenizer.html \
 * **lowercase**: Divides text at non-letters and converts them to lower case. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/LowerCaseTokenizer.html \
 * **microsoft_language_tokenizer**: Divides text using language-specific rules. \
 * **microsoft_language_stemming_tokenizer**: Divides text using language-specific rules and reduces words to their base forms. \
 * **nGram**: Tokenizes the input into n-grams of the given size(s). See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/ngram\/NGramTokenizer.html \
 * **path_hierarchy_v2**: Tokenizer for path-like hierarchies. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/path\/PathHierarchyTokenizer.html \
 * **pattern**: Tokenizer that uses regex pattern matching to construct distinct tokens. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/pattern\/PatternTokenizer.html \
 * **standard_v2**: Standard Lucene analyzer; Composed of the standard tokenizer, lowercase filter and stop filter. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/standard\/StandardTokenizer.html \
 * **uax_url_email**: Tokenizes urls and emails as one token. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/standard\/UAX29URLEmailTokenizer.html \
 * **whitespace**: Divides text at whitespace. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/WhitespaceTokenizer.html
 */
export type AzureSearchDocumentsIndexesLexicalTokenizerName = string;

/** Defines the names of all token filters supported by the search engine. */
export enum KnownAzureSearchDocumentsIndexesTokenFilterName {
  /** A token filter that applies the Arabic normalizer to normalize the orthography. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/ar/ArabicNormalizationFilter.html */
  ArabicNormalization = "arabic_normalization",
  /** Strips all characters after an apostrophe (including the apostrophe itself). See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/tr/ApostropheFilter.html */
  Apostrophe = "apostrophe",
  /** Converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if such equivalents exist. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/ASCIIFoldingFilter.html */
  AsciiFolding = "asciifolding",
  /** Forms bigrams of CJK terms that are generated from the standard tokenizer. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/cjk/CJKBigramFilter.html */
  CjkBigram = "cjk_bigram",
  /** Normalizes CJK width differences. Folds full-width ASCII variants into the equivalent basic Latin, and half-width Katakana variants into the equivalent Kana. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/cjk/CJKWidthFilter.html */
  CjkWidth = "cjk_width",
  /** Removes English possessives, and dots from acronyms. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/standard/ClassicFilter.html */
  Classic = "classic",
  /** Construct bigrams for frequently occurring terms while indexing. Single terms are still indexed too, with bigrams overlaid. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/commongrams/CommonGramsFilter.html */
  CommonGram = "common_grams",
  /** Generates n-grams of the given size(s) starting from the front or the back of an input token. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/ngram/EdgeNGramTokenFilter.html */
  EdgeNGram = "edgeNGram_v2",
  /** Removes elisions. For example, "l'avion" (the plane) will be converted to "avion" (plane). See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/util/ElisionFilter.html */
  Elision = "elision",
  /** Normalizes German characters according to the heuristics of the German2 snowball algorithm. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/de/GermanNormalizationFilter.html */
  GermanNormalization = "german_normalization",
  /** Normalizes text in Hindi to remove some differences in spelling variations. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/hi/HindiNormalizationFilter.html */
  HindiNormalization = "hindi_normalization",
  /** Normalizes the Unicode representation of text in Indian languages. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/in/IndicNormalizationFilter.html */
  IndicNormalization = "indic_normalization",
  /** Emits each incoming token twice, once as keyword and once as non-keyword. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/KeywordRepeatFilter.html */
  KeywordRepeat = "keyword_repeat",
  /** A high-performance kstem filter for English. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/en/KStemFilter.html */
  KStem = "kstem",
  /** Removes words that are too long or too short. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/LengthFilter.html */
  Length = "length",
  /** Limits the number of tokens while indexing. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/LimitTokenCountFilter.html */
  Limit = "limit",
  /** Normalizes token text to lower case. See https://lucene.apache.org/core/6_6_1/analyzers-common/org/apache/lucene/analysis/core/LowerCaseFilter.html */
  Lowercase = "lowercase",
  /** Generates n-grams of the given size(s). See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/ngram/NGramTokenFilter.html */
  NGram = "nGram_v2",
  /** Applies normalization for Persian. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/fa/PersianNormalizationFilter.html */
  PersianNormalization = "persian_normalization",
  /** Create tokens for phonetic matches. See https://lucene.apache.org/core/4_10_3/analyzers-phonetic/org/apache/lucene/analysis/phonetic/package-tree.html */
  Phonetic = "phonetic",
  /** Uses the Porter stemming algorithm to transform the token stream. See http://tartarus.org/~martin/PorterStemmer */
  PorterStem = "porter_stem",
  /** Reverses the token string. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/reverse/ReverseStringFilter.html */
  Reverse = "reverse",
  /** Normalizes use of the interchangeable Scandinavian characters. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/ScandinavianNormalizationFilter.html */
  ScandinavianNormalization = "scandinavian_normalization",
  /** Folds Scandinavian characters Ã¥Ã…Ã¤Ã¦Ã„Ã†-&gt;a and Ã¶Ã–Ã¸Ã˜-&gt;o. It also discriminates against use of double vowels aa, ae, ao, oe and oo, leaving just the first one. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/ScandinavianFoldingFilter.html */
  ScandinavianFoldingNormalization = "scandinavian_folding",
  /** Creates combinations of tokens as a single token. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/shingle/ShingleFilter.html */
  Shingle = "shingle",
  /** A filter that stems words using a Snowball-generated stemmer. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/snowball/SnowballFilter.html */
  Snowball = "snowball",
  /** Normalizes the Unicode representation of Sorani text. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/ckb/SoraniNormalizationFilter.html */
  SoraniNormalization = "sorani_normalization",
  /** Language specific stemming filter. See https://learn.microsoft.com/rest/api/searchservice/Custom-analyzers-in-Azure-Search#TokenFilters */
  Stemmer = "stemmer",
  /** Removes stop words from a token stream. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/core/StopFilter.html */
  Stopwords = "stopwords",
  /** Trims leading and trailing whitespace from tokens. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/TrimFilter.html */
  Trim = "trim",
  /** Truncates the terms to a specific length. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/TruncateTokenFilter.html */
  Truncate = "truncate",
  /** Filters out tokens with same text as the previous token. See http://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/miscellaneous/RemoveDuplicatesTokenFilter.html */
  Unique = "unique",
  /** Normalizes token text to upper case. See https://lucene.apache.org/core/6_6_1/analyzers-common/org/apache/lucene/analysis/core/UpperCaseFilter.html */
  Uppercase = "uppercase",
  /** Splits words into subwords and performs optional transformations on subword groups. */
  WordDelimiter = "word_delimiter",
}

/**
 * Defines the names of all token filters supported by the search engine. \
 * {@link KnownAzureSearchDocumentsIndexesTokenFilterName} can be used interchangeably with AzureSearchDocumentsIndexesTokenFilterName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **arabic_normalization**: A token filter that applies the Arabic normalizer to normalize the orthography. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/ar\/ArabicNormalizationFilter.html \
 * **apostrophe**: Strips all characters after an apostrophe (including the apostrophe itself). See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/tr\/ApostropheFilter.html \
 * **asciifolding**: Converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if such equivalents exist. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/ASCIIFoldingFilter.html \
 * **cjk_bigram**: Forms bigrams of CJK terms that are generated from the standard tokenizer. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/cjk\/CJKBigramFilter.html \
 * **cjk_width**: Normalizes CJK width differences. Folds full-width ASCII variants into the equivalent basic Latin, and half-width Katakana variants into the equivalent Kana. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/cjk\/CJKWidthFilter.html \
 * **classic**: Removes English possessives, and dots from acronyms. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/standard\/ClassicFilter.html \
 * **common_grams**: Construct bigrams for frequently occurring terms while indexing. Single terms are still indexed too, with bigrams overlaid. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/commongrams\/CommonGramsFilter.html \
 * **edgeNGram_v2**: Generates n-grams of the given size(s) starting from the front or the back of an input token. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/ngram\/EdgeNGramTokenFilter.html \
 * **elision**: Removes elisions. For example, "l'avion" (the plane) will be converted to "avion" (plane). See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/util\/ElisionFilter.html \
 * **german_normalization**: Normalizes German characters according to the heuristics of the German2 snowball algorithm. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/de\/GermanNormalizationFilter.html \
 * **hindi_normalization**: Normalizes text in Hindi to remove some differences in spelling variations. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/hi\/HindiNormalizationFilter.html \
 * **indic_normalization**: Normalizes the Unicode representation of text in Indian languages. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/in\/IndicNormalizationFilter.html \
 * **keyword_repeat**: Emits each incoming token twice, once as keyword and once as non-keyword. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/KeywordRepeatFilter.html \
 * **kstem**: A high-performance kstem filter for English. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/en\/KStemFilter.html \
 * **length**: Removes words that are too long or too short. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/LengthFilter.html \
 * **limit**: Limits the number of tokens while indexing. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/LimitTokenCountFilter.html \
 * **lowercase**: Normalizes token text to lower case. See https:\//lucene.apache.org\/core\/6_6_1\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/LowerCaseFilter.html \
 * **nGram_v2**: Generates n-grams of the given size(s). See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/ngram\/NGramTokenFilter.html \
 * **persian_normalization**: Applies normalization for Persian. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/fa\/PersianNormalizationFilter.html \
 * **phonetic**: Create tokens for phonetic matches. See https:\//lucene.apache.org\/core\/4_10_3\/analyzers-phonetic\/org\/apache\/lucene\/analysis\/phonetic\/package-tree.html \
 * **porter_stem**: Uses the Porter stemming algorithm to transform the token stream. See http:\//tartarus.org\/~martin\/PorterStemmer \
 * **reverse**: Reverses the token string. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/reverse\/ReverseStringFilter.html \
 * **scandinavian_normalization**: Normalizes use of the interchangeable Scandinavian characters. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/ScandinavianNormalizationFilter.html \
 * **scandinavian_folding**: Folds Scandinavian characters Ã¥Ã…Ã¤Ã¦Ã„Ã†-&gt;a and Ã¶Ã–Ã¸Ã˜-&gt;o. It also discriminates against use of double vowels aa, ae, ao, oe and oo, leaving just the first one. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/ScandinavianFoldingFilter.html \
 * **shingle**: Creates combinations of tokens as a single token. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/shingle\/ShingleFilter.html \
 * **snowball**: A filter that stems words using a Snowball-generated stemmer. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/snowball\/SnowballFilter.html \
 * **sorani_normalization**: Normalizes the Unicode representation of Sorani text. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/ckb\/SoraniNormalizationFilter.html \
 * **stemmer**: Language specific stemming filter. See https:\//learn.microsoft.com\/rest\/api\/searchservice\/Custom-analyzers-in-Azure-Search#TokenFilters \
 * **stopwords**: Removes stop words from a token stream. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/StopFilter.html \
 * **trim**: Trims leading and trailing whitespace from tokens. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/TrimFilter.html \
 * **truncate**: Truncates the terms to a specific length. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/TruncateTokenFilter.html \
 * **unique**: Filters out tokens with same text as the previous token. See http:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/miscellaneous\/RemoveDuplicatesTokenFilter.html \
 * **uppercase**: Normalizes token text to upper case. See https:\//lucene.apache.org\/core\/6_6_1\/analyzers-common\/org\/apache\/lucene\/analysis\/core\/UpperCaseFilter.html \
 * **word_delimiter**: Splits words into subwords and performs optional transformations on subword groups.
 */
export type AzureSearchDocumentsIndexesTokenFilterName = string;

/** Defines the names of all character filters supported by the search engine. */
export enum KnownAzureSearchDocumentsIndexesCharFilterName {
  /** A character filter that attempts to strip out HTML constructs. See https://lucene.apache.org/core/4_10_3/analyzers-common/org/apache/lucene/analysis/charfilter/HTMLStripCharFilter.html */
  HtmlStrip = "html_strip",
}

/**
 * Defines the names of all character filters supported by the search engine. \
 * {@link KnownAzureSearchDocumentsIndexesCharFilterName} can be used interchangeably with AzureSearchDocumentsIndexesCharFilterName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **html_strip**: A character filter that attempts to strip out HTML constructs. See https:\//lucene.apache.org\/core\/4_10_3\/analyzers-common\/org\/apache\/lucene\/analysis\/charfilter\/HTMLStripCharFilter.html
 */
export type AzureSearchDocumentsIndexesCharFilterName = string;

/** Flexibly separates text into terms via a regular expression pattern. This analyzer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesPatternAnalyzer
  extends AzureSearchDocumentsIndexesLexicalAnalyzer {
  /** A value indicating whether terms should be lower-cased. Default is true. */
  lowerCaseTerms?: boolean;
  /** A regular expression pattern to match token separators. Default is an expression that matches one or more non-word characters. */
  pattern?: string;
  /** Regular expression flags. */
  flags?: AzureSearchDocumentsIndexesRegexFlags;
  /** A list of stopwords. */
  stopwords?: string[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.PatternAnalyzer";
}

export function azureSearchDocumentsIndexesPatternAnalyzerSerializer(
  item: AzureSearchDocumentsIndexesPatternAnalyzer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    lowercase: item["lowerCaseTerms"],
    pattern: item["pattern"],
    flags: item["flags"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesPatternAnalyzerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPatternAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    lowerCaseTerms: item["lowercase"],
    pattern: item["pattern"],
    flags: item["flags"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

/** Defines flags that can be combined to control how regular expressions are used in the pattern analyzer and pattern tokenizer. */
export enum KnownAzureSearchDocumentsIndexesRegexFlags {
  /** Enables canonical equivalence. */
  CanonEq = "CANON_EQ",
  /** Enables case-insensitive matching. */
  CaseInsensitive = "CASE_INSENSITIVE",
  /** Permits whitespace and comments in the pattern. */
  Comments = "COMMENTS",
  /** Enables dotall mode. */
  DotAll = "DOTALL",
  /** Enables literal parsing of the pattern. */
  Literal = "LITERAL",
  /** Enables multiline mode. */
  Multiline = "MULTILINE",
  /** Enables Unicode-aware case folding. */
  UnicodeCase = "UNICODE_CASE",
  /** Enables Unix lines mode. */
  UnixLines = "UNIX_LINES",
}

/**
 * Defines flags that can be combined to control how regular expressions are used in the pattern analyzer and pattern tokenizer. \
 * {@link KnownAzureSearchDocumentsIndexesRegexFlags} can be used interchangeably with AzureSearchDocumentsIndexesRegexFlags,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CANON_EQ**: Enables canonical equivalence. \
 * **CASE_INSENSITIVE**: Enables case-insensitive matching. \
 * **COMMENTS**: Permits whitespace and comments in the pattern. \
 * **DOTALL**: Enables dotall mode. \
 * **LITERAL**: Enables literal parsing of the pattern. \
 * **MULTILINE**: Enables multiline mode. \
 * **UNICODE_CASE**: Enables Unicode-aware case folding. \
 * **UNIX_LINES**: Enables Unix lines mode.
 */
export type AzureSearchDocumentsIndexesRegexFlags = string;

/** Standard Apache Lucene analyzer; Composed of the standard tokenizer, lowercase filter and stop filter. */
export interface AzureSearchDocumentsIndexesLuceneStandardAnalyzer
  extends AzureSearchDocumentsIndexesLexicalAnalyzer {
  /** The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters. */
  maxTokenLength?: number;
  /** A list of stopwords. */
  stopwords?: string[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.StandardAnalyzer";
}

export function azureSearchDocumentsIndexesLuceneStandardAnalyzerSerializer(
  item: AzureSearchDocumentsIndexesLuceneStandardAnalyzer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesLuceneStandardAnalyzerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLuceneStandardAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

/** Divides text at non-letters; Applies the lowercase and stopword token filters. This analyzer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesStopAnalyzer
  extends AzureSearchDocumentsIndexesLexicalAnalyzer {
  /** A list of stopwords. */
  stopwords?: string[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.StopAnalyzer";
}

export function azureSearchDocumentsIndexesStopAnalyzerSerializer(
  item: AzureSearchDocumentsIndexesStopAnalyzer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesStopAnalyzerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesStopAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesLexicalTokenizerUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesLexicalTokenizerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesLexicalTokenizerUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesLexicalTokenizerUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesLexicalTokenizerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesLexicalTokenizerUnionDeserializer(item);
  });
}

/** Base type for tokenizers. */
export interface AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.ClassicTokenizer, #Microsoft.Azure.Search.EdgeNGramTokenizer, #Microsoft.Azure.Search.KeywordTokenizerV2, #Microsoft.Azure.Search.MicrosoftLanguageTokenizer, #Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer, #Microsoft.Azure.Search.NGramTokenizer, #Microsoft.Azure.Search.PathHierarchyTokenizerV2, #Microsoft.Azure.Search.PatternTokenizer, #Microsoft.Azure.Search.StandardTokenizerV2, #Microsoft.Azure.Search.UaxUrlEmailTokenizer */
  odataType: string;
  /** The name of the tokenizer. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters. */
  name: string;
}

export function azureSearchDocumentsIndexesLexicalTokenizerSerializer(
  item: AzureSearchDocumentsIndexesLexicalTokenizer,
): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function azureSearchDocumentsIndexesLexicalTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLexicalTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for LexicalTokenizerUnion */
export type LexicalTokenizerUnion =
  | AzureSearchDocumentsIndexesClassicTokenizer
  | AzureSearchDocumentsIndexesEdgeNGramTokenizer
  | AzureSearchDocumentsIndexesKeywordTokenizer
  | AzureSearchDocumentsIndexesMicrosoftLanguageTokenizer
  | AzureSearchDocumentsIndexesMicrosoftLanguageStemmingTokenizer
  | AzureSearchDocumentsIndexesNGramTokenizer
  | AzureSearchDocumentsIndexesPathHierarchyTokenizer
  | AzureSearchDocumentsIndexesPatternTokenizer
  | AzureSearchDocumentsIndexesLuceneStandardTokenizer
  | AzureSearchDocumentsIndexesUaxUrlEmailTokenizer
  | AzureSearchDocumentsIndexesLexicalTokenizer;

export function azureSearchDocumentsIndexesLexicalTokenizerUnionSerializer(
  item: LexicalTokenizerUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicTokenizer":
      return classicTokenizerSerializer(item as ClassicTokenizer);

    case "#Microsoft.Azure.Search.EdgeNGramTokenizer":
      return edgeNGramTokenizerSerializer(item as EdgeNGramTokenizer);

    case "#Microsoft.Azure.Search.KeywordTokenizerV2":
      return keywordTokenizerSerializer(item as KeywordTokenizer);

    case "#Microsoft.Azure.Search.MicrosoftLanguageTokenizer":
      return microsoftLanguageTokenizerSerializer(
        item as MicrosoftLanguageTokenizer,
      );

    case "#Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer":
      return microsoftLanguageStemmingTokenizerSerializer(
        item as MicrosoftLanguageStemmingTokenizer,
      );

    case "#Microsoft.Azure.Search.NGramTokenizer":
      return nGramTokenizerSerializer(item as NGramTokenizer);

    case "#Microsoft.Azure.Search.PathHierarchyTokenizerV2":
      return pathHierarchyTokenizerSerializer(item as PathHierarchyTokenizer);

    case "#Microsoft.Azure.Search.PatternTokenizer":
      return patternTokenizerSerializer(item as PatternTokenizer);

    case "#Microsoft.Azure.Search.StandardTokenizerV2":
      return luceneStandardTokenizerSerializer(item as LuceneStandardTokenizer);

    case "#Microsoft.Azure.Search.UaxUrlEmailTokenizer":
      return uaxUrlEmailTokenizerSerializer(item as UaxUrlEmailTokenizer);

    default:
      return azureSearchDocumentsIndexesLexicalTokenizerSerializer(item);
  }
}

export function azureSearchDocumentsIndexesLexicalTokenizerUnionDeserializer(
  item: any,
): LexicalTokenizerUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicTokenizer":
      return classicTokenizerDeserializer(item as ClassicTokenizer);

    case "#Microsoft.Azure.Search.EdgeNGramTokenizer":
      return edgeNGramTokenizerDeserializer(item as EdgeNGramTokenizer);

    case "#Microsoft.Azure.Search.KeywordTokenizerV2":
      return keywordTokenizerDeserializer(item as KeywordTokenizer);

    case "#Microsoft.Azure.Search.MicrosoftLanguageTokenizer":
      return microsoftLanguageTokenizerDeserializer(
        item as MicrosoftLanguageTokenizer,
      );

    case "#Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer":
      return microsoftLanguageStemmingTokenizerDeserializer(
        item as MicrosoftLanguageStemmingTokenizer,
      );

    case "#Microsoft.Azure.Search.NGramTokenizer":
      return nGramTokenizerDeserializer(item as NGramTokenizer);

    case "#Microsoft.Azure.Search.PathHierarchyTokenizerV2":
      return pathHierarchyTokenizerDeserializer(item as PathHierarchyTokenizer);

    case "#Microsoft.Azure.Search.PatternTokenizer":
      return patternTokenizerDeserializer(item as PatternTokenizer);

    case "#Microsoft.Azure.Search.StandardTokenizerV2":
      return luceneStandardTokenizerDeserializer(
        item as LuceneStandardTokenizer,
      );

    case "#Microsoft.Azure.Search.UaxUrlEmailTokenizer":
      return uaxUrlEmailTokenizerDeserializer(item as UaxUrlEmailTokenizer);

    default:
      return azureSearchDocumentsIndexesLexicalTokenizerDeserializer(item);
  }
}

/** Grammar-based tokenizer that is suitable for processing most European-language documents. This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesClassicTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters. */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.ClassicTokenizer";
}

export function azureSearchDocumentsIndexesClassicTokenizerSerializer(
  item: AzureSearchDocumentsIndexesClassicTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function azureSearchDocumentsIndexesClassicTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesClassicTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

/** Tokenizes the input from an edge into n-grams of the given size(s). This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesEdgeNGramTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram. */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /** Character classes to keep in the tokens. */
  tokenChars?: AzureSearchDocumentsIndexesTokenCharacterKind[];
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.EdgeNGramTokenizer";
}

export function azureSearchDocumentsIndexesEdgeNGramTokenizerSerializer(
  item: AzureSearchDocumentsIndexesEdgeNGramTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesEdgeNGramTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesEdgeNGramTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

/** Represents classes of characters on which a token filter can operate. */
export enum KnownAzureSearchDocumentsIndexesTokenCharacterKind {
  /** Keeps letters in tokens. */
  Letter = "letter",
  /** Keeps digits in tokens. */
  Digit = "digit",
  /** Keeps whitespace in tokens. */
  Whitespace = "whitespace",
  /** Keeps punctuation in tokens. */
  Punctuation = "punctuation",
  /** Keeps symbols in tokens. */
  Symbol = "symbol",
}

/**
 * Represents classes of characters on which a token filter can operate. \
 * {@link KnownAzureSearchDocumentsIndexesTokenCharacterKind} can be used interchangeably with AzureSearchDocumentsIndexesTokenCharacterKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **letter**: Keeps letters in tokens. \
 * **digit**: Keeps digits in tokens. \
 * **whitespace**: Keeps whitespace in tokens. \
 * **punctuation**: Keeps punctuation in tokens. \
 * **symbol**: Keeps symbols in tokens.
 */
export type AzureSearchDocumentsIndexesTokenCharacterKind = string;

/** Emits the entire input as a single token. This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesKeywordTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The maximum token length. Default is 256. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters. */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.KeywordTokenizerV2";
}

export function azureSearchDocumentsIndexesKeywordTokenizerSerializer(
  item: AzureSearchDocumentsIndexesKeywordTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function azureSearchDocumentsIndexesKeywordTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKeywordTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

/** Divides text using language-specific rules. */
export interface AzureSearchDocumentsIndexesMicrosoftLanguageTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The maximum token length. Tokens longer than the maximum length are split. Maximum token length that can be used is 300 characters. Tokens longer than 300 characters are first split into tokens of length 300 and then each of those tokens is split based on the max token length set. Default is 255. */
  maxTokenLength?: number;
  /** A value indicating how the tokenizer is used. Set to true if used as the search tokenizer, set to false if used as the indexing tokenizer. Default is false. */
  isSearchTokenizer?: boolean;
  /** The language to use. The default is English. */
  language?: AzureSearchDocumentsIndexesMicrosoftTokenizerLanguage;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.MicrosoftLanguageTokenizer";
}

export function azureSearchDocumentsIndexesMicrosoftLanguageTokenizerSerializer(
  item: AzureSearchDocumentsIndexesMicrosoftLanguageTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

export function azureSearchDocumentsIndexesMicrosoftLanguageTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesMicrosoftLanguageTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

/** Lists the languages supported by the Microsoft language tokenizer. */
export enum KnownAzureSearchDocumentsIndexesMicrosoftTokenizerLanguage {
  /** Selects the Microsoft tokenizer for Bangla. */
  Bangla = "bangla",
  /** Selects the Microsoft tokenizer for Bulgarian. */
  Bulgarian = "bulgarian",
  /** Selects the Microsoft tokenizer for Catalan. */
  Catalan = "catalan",
  /** Selects the Microsoft tokenizer for Chinese (Simplified). */
  ChineseSimplified = "chineseSimplified",
  /** Selects the Microsoft tokenizer for Chinese (Traditional). */
  ChineseTraditional = "chineseTraditional",
  /** Selects the Microsoft tokenizer for Croatian. */
  Croatian = "croatian",
  /** Selects the Microsoft tokenizer for Czech. */
  Czech = "czech",
  /** Selects the Microsoft tokenizer for Danish. */
  Danish = "danish",
  /** Selects the Microsoft tokenizer for Dutch. */
  Dutch = "dutch",
  /** Selects the Microsoft tokenizer for English. */
  English = "english",
  /** Selects the Microsoft tokenizer for French. */
  French = "french",
  /** Selects the Microsoft tokenizer for German. */
  German = "german",
  /** Selects the Microsoft tokenizer for Greek. */
  Greek = "greek",
  /** Selects the Microsoft tokenizer for Gujarati. */
  Gujarati = "gujarati",
  /** Selects the Microsoft tokenizer for Hindi. */
  Hindi = "hindi",
  /** Selects the Microsoft tokenizer for Icelandic. */
  Icelandic = "icelandic",
  /** Selects the Microsoft tokenizer for Indonesian. */
  Indonesian = "indonesian",
  /** Selects the Microsoft tokenizer for Italian. */
  Italian = "italian",
  /** Selects the Microsoft tokenizer for Japanese. */
  Japanese = "japanese",
  /** Selects the Microsoft tokenizer for Kannada. */
  Kannada = "kannada",
  /** Selects the Microsoft tokenizer for Korean. */
  Korean = "korean",
  /** Selects the Microsoft tokenizer for Malay. */
  Malay = "malay",
  /** Selects the Microsoft tokenizer for Malayalam. */
  Malayalam = "malayalam",
  /** Selects the Microsoft tokenizer for Marathi. */
  Marathi = "marathi",
  /** Selects the Microsoft tokenizer for Norwegian (BokmÃ¥l). */
  NorwegianBokmaal = "norwegianBokmaal",
  /** Selects the Microsoft tokenizer for Polish. */
  Polish = "polish",
  /** Selects the Microsoft tokenizer for Portuguese. */
  Portuguese = "portuguese",
  /** Selects the Microsoft tokenizer for Portuguese (Brazil). */
  PortugueseBrazilian = "portugueseBrazilian",
  /** Selects the Microsoft tokenizer for Punjabi. */
  Punjabi = "punjabi",
  /** Selects the Microsoft tokenizer for Romanian. */
  Romanian = "romanian",
  /** Selects the Microsoft tokenizer for Russian. */
  Russian = "russian",
  /** Selects the Microsoft tokenizer for Serbian (Cyrillic). */
  SerbianCyrillic = "serbianCyrillic",
  /** Selects the Microsoft tokenizer for Serbian (Latin). */
  SerbianLatin = "serbianLatin",
  /** Selects the Microsoft tokenizer for Slovenian. */
  Slovenian = "slovenian",
  /** Selects the Microsoft tokenizer for Spanish. */
  Spanish = "spanish",
  /** Selects the Microsoft tokenizer for Swedish. */
  Swedish = "swedish",
  /** Selects the Microsoft tokenizer for Tamil. */
  Tamil = "tamil",
  /** Selects the Microsoft tokenizer for Telugu. */
  Telugu = "telugu",
  /** Selects the Microsoft tokenizer for Thai. */
  Thai = "thai",
  /** Selects the Microsoft tokenizer for Ukrainian. */
  Ukrainian = "ukrainian",
  /** Selects the Microsoft tokenizer for Urdu. */
  Urdu = "urdu",
  /** Selects the Microsoft tokenizer for Vietnamese. */
  Vietnamese = "vietnamese",
}

/**
 * Lists the languages supported by the Microsoft language tokenizer. \
 * {@link KnownAzureSearchDocumentsIndexesMicrosoftTokenizerLanguage} can be used interchangeably with AzureSearchDocumentsIndexesMicrosoftTokenizerLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **bangla**: Selects the Microsoft tokenizer for Bangla. \
 * **bulgarian**: Selects the Microsoft tokenizer for Bulgarian. \
 * **catalan**: Selects the Microsoft tokenizer for Catalan. \
 * **chineseSimplified**: Selects the Microsoft tokenizer for Chinese (Simplified). \
 * **chineseTraditional**: Selects the Microsoft tokenizer for Chinese (Traditional). \
 * **croatian**: Selects the Microsoft tokenizer for Croatian. \
 * **czech**: Selects the Microsoft tokenizer for Czech. \
 * **danish**: Selects the Microsoft tokenizer for Danish. \
 * **dutch**: Selects the Microsoft tokenizer for Dutch. \
 * **english**: Selects the Microsoft tokenizer for English. \
 * **french**: Selects the Microsoft tokenizer for French. \
 * **german**: Selects the Microsoft tokenizer for German. \
 * **greek**: Selects the Microsoft tokenizer for Greek. \
 * **gujarati**: Selects the Microsoft tokenizer for Gujarati. \
 * **hindi**: Selects the Microsoft tokenizer for Hindi. \
 * **icelandic**: Selects the Microsoft tokenizer for Icelandic. \
 * **indonesian**: Selects the Microsoft tokenizer for Indonesian. \
 * **italian**: Selects the Microsoft tokenizer for Italian. \
 * **japanese**: Selects the Microsoft tokenizer for Japanese. \
 * **kannada**: Selects the Microsoft tokenizer for Kannada. \
 * **korean**: Selects the Microsoft tokenizer for Korean. \
 * **malay**: Selects the Microsoft tokenizer for Malay. \
 * **malayalam**: Selects the Microsoft tokenizer for Malayalam. \
 * **marathi**: Selects the Microsoft tokenizer for Marathi. \
 * **norwegianBokmaal**: Selects the Microsoft tokenizer for Norwegian (BokmÃ¥l). \
 * **polish**: Selects the Microsoft tokenizer for Polish. \
 * **portuguese**: Selects the Microsoft tokenizer for Portuguese. \
 * **portugueseBrazilian**: Selects the Microsoft tokenizer for Portuguese (Brazil). \
 * **punjabi**: Selects the Microsoft tokenizer for Punjabi. \
 * **romanian**: Selects the Microsoft tokenizer for Romanian. \
 * **russian**: Selects the Microsoft tokenizer for Russian. \
 * **serbianCyrillic**: Selects the Microsoft tokenizer for Serbian (Cyrillic). \
 * **serbianLatin**: Selects the Microsoft tokenizer for Serbian (Latin). \
 * **slovenian**: Selects the Microsoft tokenizer for Slovenian. \
 * **spanish**: Selects the Microsoft tokenizer for Spanish. \
 * **swedish**: Selects the Microsoft tokenizer for Swedish. \
 * **tamil**: Selects the Microsoft tokenizer for Tamil. \
 * **telugu**: Selects the Microsoft tokenizer for Telugu. \
 * **thai**: Selects the Microsoft tokenizer for Thai. \
 * **ukrainian**: Selects the Microsoft tokenizer for Ukrainian. \
 * **urdu**: Selects the Microsoft tokenizer for Urdu. \
 * **vietnamese**: Selects the Microsoft tokenizer for Vietnamese.
 */
export type AzureSearchDocumentsIndexesMicrosoftTokenizerLanguage = string;

/** Divides text using language-specific rules and reduces words to their base forms. */
export interface AzureSearchDocumentsIndexesMicrosoftLanguageStemmingTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The maximum token length. Tokens longer than the maximum length are split. Maximum token length that can be used is 300 characters. Tokens longer than 300 characters are first split into tokens of length 300 and then each of those tokens is split based on the max token length set. Default is 255. */
  maxTokenLength?: number;
  /** A value indicating how the tokenizer is used. Set to true if used as the search tokenizer, set to false if used as the indexing tokenizer. Default is false. */
  isSearchTokenizer?: boolean;
  /** The language to use. The default is English. */
  language?: AzureSearchDocumentsIndexesMicrosoftStemmingTokenizerLanguage;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer";
}

export function azureSearchDocumentsIndexesMicrosoftLanguageStemmingTokenizerSerializer(
  item: AzureSearchDocumentsIndexesMicrosoftLanguageStemmingTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

export function azureSearchDocumentsIndexesMicrosoftLanguageStemmingTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesMicrosoftLanguageStemmingTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

/** Lists the languages supported by the Microsoft language stemming tokenizer. */
export enum KnownAzureSearchDocumentsIndexesMicrosoftStemmingTokenizerLanguage {
  /** Selects the Microsoft stemming tokenizer for Arabic. */
  Arabic = "arabic",
  /** Selects the Microsoft stemming tokenizer for Bangla. */
  Bangla = "bangla",
  /** Selects the Microsoft stemming tokenizer for Bulgarian. */
  Bulgarian = "bulgarian",
  /** Selects the Microsoft stemming tokenizer for Catalan. */
  Catalan = "catalan",
  /** Selects the Microsoft stemming tokenizer for Croatian. */
  Croatian = "croatian",
  /** Selects the Microsoft stemming tokenizer for Czech. */
  Czech = "czech",
  /** Selects the Microsoft stemming tokenizer for Danish. */
  Danish = "danish",
  /** Selects the Microsoft stemming tokenizer for Dutch. */
  Dutch = "dutch",
  /** Selects the Microsoft stemming tokenizer for English. */
  English = "english",
  /** Selects the Microsoft stemming tokenizer for Estonian. */
  Estonian = "estonian",
  /** Selects the Microsoft stemming tokenizer for Finnish. */
  Finnish = "finnish",
  /** Selects the Microsoft stemming tokenizer for French. */
  French = "french",
  /** Selects the Microsoft stemming tokenizer for German. */
  German = "german",
  /** Selects the Microsoft stemming tokenizer for Greek. */
  Greek = "greek",
  /** Selects the Microsoft stemming tokenizer for Gujarati. */
  Gujarati = "gujarati",
  /** Selects the Microsoft stemming tokenizer for Hebrew. */
  Hebrew = "hebrew",
  /** Selects the Microsoft stemming tokenizer for Hindi. */
  Hindi = "hindi",
  /** Selects the Microsoft stemming tokenizer for Hungarian. */
  Hungarian = "hungarian",
  /** Selects the Microsoft stemming tokenizer for Icelandic. */
  Icelandic = "icelandic",
  /** Selects the Microsoft stemming tokenizer for Indonesian. */
  Indonesian = "indonesian",
  /** Selects the Microsoft stemming tokenizer for Italian. */
  Italian = "italian",
  /** Selects the Microsoft stemming tokenizer for Kannada. */
  Kannada = "kannada",
  /** Selects the Microsoft stemming tokenizer for Latvian. */
  Latvian = "latvian",
  /** Selects the Microsoft stemming tokenizer for Lithuanian. */
  Lithuanian = "lithuanian",
  /** Selects the Microsoft stemming tokenizer for Malay. */
  Malay = "malay",
  /** Selects the Microsoft stemming tokenizer for Malayalam. */
  Malayalam = "malayalam",
  /** Selects the Microsoft stemming tokenizer for Marathi. */
  Marathi = "marathi",
  /** Selects the Microsoft stemming tokenizer for Norwegian (BokmÃ¥l). */
  NorwegianBokmaal = "norwegianBokmaal",
  /** Selects the Microsoft stemming tokenizer for Polish. */
  Polish = "polish",
  /** Selects the Microsoft stemming tokenizer for Portuguese. */
  Portuguese = "portuguese",
  /** Selects the Microsoft stemming tokenizer for Portuguese (Brazil). */
  PortugueseBrazilian = "portugueseBrazilian",
  /** Selects the Microsoft stemming tokenizer for Punjabi. */
  Punjabi = "punjabi",
  /** Selects the Microsoft stemming tokenizer for Romanian. */
  Romanian = "romanian",
  /** Selects the Microsoft stemming tokenizer for Russian. */
  Russian = "russian",
  /** Selects the Microsoft stemming tokenizer for Serbian (Cyrillic). */
  SerbianCyrillic = "serbianCyrillic",
  /** Selects the Microsoft stemming tokenizer for Serbian (Latin). */
  SerbianLatin = "serbianLatin",
  /** Selects the Microsoft stemming tokenizer for Slovak. */
  Slovak = "slovak",
  /** Selects the Microsoft stemming tokenizer for Slovenian. */
  Slovenian = "slovenian",
  /** Selects the Microsoft stemming tokenizer for Spanish. */
  Spanish = "spanish",
  /** Selects the Microsoft stemming tokenizer for Swedish. */
  Swedish = "swedish",
  /** Selects the Microsoft stemming tokenizer for Tamil. */
  Tamil = "tamil",
  /** Selects the Microsoft stemming tokenizer for Telugu. */
  Telugu = "telugu",
  /** Selects the Microsoft stemming tokenizer for Turkish. */
  Turkish = "turkish",
  /** Selects the Microsoft stemming tokenizer for Ukrainian. */
  Ukrainian = "ukrainian",
  /** Selects the Microsoft stemming tokenizer for Urdu. */
  Urdu = "urdu",
}

/**
 * Lists the languages supported by the Microsoft language stemming tokenizer. \
 * {@link KnownAzureSearchDocumentsIndexesMicrosoftStemmingTokenizerLanguage} can be used interchangeably with AzureSearchDocumentsIndexesMicrosoftStemmingTokenizerLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **arabic**: Selects the Microsoft stemming tokenizer for Arabic. \
 * **bangla**: Selects the Microsoft stemming tokenizer for Bangla. \
 * **bulgarian**: Selects the Microsoft stemming tokenizer for Bulgarian. \
 * **catalan**: Selects the Microsoft stemming tokenizer for Catalan. \
 * **croatian**: Selects the Microsoft stemming tokenizer for Croatian. \
 * **czech**: Selects the Microsoft stemming tokenizer for Czech. \
 * **danish**: Selects the Microsoft stemming tokenizer for Danish. \
 * **dutch**: Selects the Microsoft stemming tokenizer for Dutch. \
 * **english**: Selects the Microsoft stemming tokenizer for English. \
 * **estonian**: Selects the Microsoft stemming tokenizer for Estonian. \
 * **finnish**: Selects the Microsoft stemming tokenizer for Finnish. \
 * **french**: Selects the Microsoft stemming tokenizer for French. \
 * **german**: Selects the Microsoft stemming tokenizer for German. \
 * **greek**: Selects the Microsoft stemming tokenizer for Greek. \
 * **gujarati**: Selects the Microsoft stemming tokenizer for Gujarati. \
 * **hebrew**: Selects the Microsoft stemming tokenizer for Hebrew. \
 * **hindi**: Selects the Microsoft stemming tokenizer for Hindi. \
 * **hungarian**: Selects the Microsoft stemming tokenizer for Hungarian. \
 * **icelandic**: Selects the Microsoft stemming tokenizer for Icelandic. \
 * **indonesian**: Selects the Microsoft stemming tokenizer for Indonesian. \
 * **italian**: Selects the Microsoft stemming tokenizer for Italian. \
 * **kannada**: Selects the Microsoft stemming tokenizer for Kannada. \
 * **latvian**: Selects the Microsoft stemming tokenizer for Latvian. \
 * **lithuanian**: Selects the Microsoft stemming tokenizer for Lithuanian. \
 * **malay**: Selects the Microsoft stemming tokenizer for Malay. \
 * **malayalam**: Selects the Microsoft stemming tokenizer for Malayalam. \
 * **marathi**: Selects the Microsoft stemming tokenizer for Marathi. \
 * **norwegianBokmaal**: Selects the Microsoft stemming tokenizer for Norwegian (BokmÃ¥l). \
 * **polish**: Selects the Microsoft stemming tokenizer for Polish. \
 * **portuguese**: Selects the Microsoft stemming tokenizer for Portuguese. \
 * **portugueseBrazilian**: Selects the Microsoft stemming tokenizer for Portuguese (Brazil). \
 * **punjabi**: Selects the Microsoft stemming tokenizer for Punjabi. \
 * **romanian**: Selects the Microsoft stemming tokenizer for Romanian. \
 * **russian**: Selects the Microsoft stemming tokenizer for Russian. \
 * **serbianCyrillic**: Selects the Microsoft stemming tokenizer for Serbian (Cyrillic). \
 * **serbianLatin**: Selects the Microsoft stemming tokenizer for Serbian (Latin). \
 * **slovak**: Selects the Microsoft stemming tokenizer for Slovak. \
 * **slovenian**: Selects the Microsoft stemming tokenizer for Slovenian. \
 * **spanish**: Selects the Microsoft stemming tokenizer for Spanish. \
 * **swedish**: Selects the Microsoft stemming tokenizer for Swedish. \
 * **tamil**: Selects the Microsoft stemming tokenizer for Tamil. \
 * **telugu**: Selects the Microsoft stemming tokenizer for Telugu. \
 * **turkish**: Selects the Microsoft stemming tokenizer for Turkish. \
 * **ukrainian**: Selects the Microsoft stemming tokenizer for Ukrainian. \
 * **urdu**: Selects the Microsoft stemming tokenizer for Urdu.
 */
export type AzureSearchDocumentsIndexesMicrosoftStemmingTokenizerLanguage =
  string;

/** Tokenizes the input into n-grams of the given size(s). This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesNGramTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram. */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /** Character classes to keep in the tokens. */
  tokenChars?: AzureSearchDocumentsIndexesTokenCharacterKind[];
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.NGramTokenizer";
}

export function azureSearchDocumentsIndexesNGramTokenizerSerializer(
  item: AzureSearchDocumentsIndexesNGramTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesNGramTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesNGramTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

/** Tokenizer for path-like hierarchies. This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesPathHierarchyTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The delimiter character to use. Default is "/". */
  delimiter?: string;
  /** A value that, if set, replaces the delimiter character. Default is "/". */
  replacement?: string;
  /** The maximum token length. Default and maximum is 300. */
  maxTokenLength?: number;
  /** A value indicating whether to generate tokens in reverse order. Default is false. */
  reverseTokenOrder?: boolean;
  /** The number of initial tokens to skip. Default is 0. */
  numberOfTokensToSkip?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.PathHierarchyTokenizerV2";
}

export function azureSearchDocumentsIndexesPathHierarchyTokenizerSerializer(
  item: AzureSearchDocumentsIndexesPathHierarchyTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    delimiter: item["delimiter"],
    replacement: item["replacement"],
    maxTokenLength: item["maxTokenLength"],
    reverse: item["reverseTokenOrder"],
    skip: item["numberOfTokensToSkip"],
  };
}

export function azureSearchDocumentsIndexesPathHierarchyTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPathHierarchyTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    delimiter: item["delimiter"],
    replacement: item["replacement"],
    maxTokenLength: item["maxTokenLength"],
    reverseTokenOrder: item["reverse"],
    numberOfTokensToSkip: item["skip"],
  };
}

/** Tokenizer that uses regex pattern matching to construct distinct tokens. This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesPatternTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** A regular expression pattern to match token separators. Default is an expression that matches one or more non-word characters. */
  pattern?: string;
  /** Regular expression flags. */
  flags?: AzureSearchDocumentsIndexesRegexFlags;
  /** The zero-based ordinal of the matching group in the regular expression pattern to extract into tokens. Use -1 if you want to use the entire pattern to split the input into tokens, irrespective of matching groups. Default is -1. */
  group?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.PatternTokenizer";
}

export function azureSearchDocumentsIndexesPatternTokenizerSerializer(
  item: AzureSearchDocumentsIndexesPatternTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    pattern: item["pattern"],
    flags: item["flags"],
    group: item["group"],
  };
}

export function azureSearchDocumentsIndexesPatternTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPatternTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    pattern: item["pattern"],
    flags: item["flags"],
    group: item["group"],
  };
}

/** Breaks text following the Unicode Text Segmentation rules. This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesLuceneStandardTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters. */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.StandardTokenizerV2";
}

export function azureSearchDocumentsIndexesLuceneStandardTokenizerSerializer(
  item: AzureSearchDocumentsIndexesLuceneStandardTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function azureSearchDocumentsIndexesLuceneStandardTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLuceneStandardTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

/** Tokenizes urls and emails as one token. This tokenizer is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesUaxUrlEmailTokenizer
  extends AzureSearchDocumentsIndexesLexicalTokenizer {
  /** The maximum token length. Default is 255. Tokens longer than the maximum length are split. The maximum token length that can be used is 300 characters. */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.UaxUrlEmailTokenizer";
}

export function azureSearchDocumentsIndexesUaxUrlEmailTokenizerSerializer(
  item: AzureSearchDocumentsIndexesUaxUrlEmailTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function azureSearchDocumentsIndexesUaxUrlEmailTokenizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesUaxUrlEmailTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function azureSearchDocumentsIndexesTokenFilterUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesTokenFilterUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesTokenFilterUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesTokenFilterUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesTokenFilterUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesTokenFilterUnionDeserializer(item);
  });
}

/** Base type for token filters. */
export interface AzureSearchDocumentsIndexesTokenFilter {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.AsciiFoldingTokenFilter, #Microsoft.Azure.Search.CjkBigramTokenFilter, #Microsoft.Azure.Search.CommonGramTokenFilter, #Microsoft.Azure.Search.DictionaryDecompounderTokenFilter, #Microsoft.Azure.Search.EdgeNGramTokenFilterV2, #Microsoft.Azure.Search.ElisionTokenFilter, #Microsoft.Azure.Search.KeepTokenFilter, #Microsoft.Azure.Search.KeywordMarkerTokenFilter, #Microsoft.Azure.Search.LengthTokenFilter, #Microsoft.Azure.Search.LimitTokenFilter, #Microsoft.Azure.Search.NGramTokenFilterV2, #Microsoft.Azure.Search.PatternCaptureTokenFilter, #Microsoft.Azure.Search.PatternReplaceTokenFilter, #Microsoft.Azure.Search.PhoneticTokenFilter, #Microsoft.Azure.Search.ShingleTokenFilter, #Microsoft.Azure.Search.SnowballTokenFilter, #Microsoft.Azure.Search.StemmerTokenFilter, #Microsoft.Azure.Search.StemmerOverrideTokenFilter, #Microsoft.Azure.Search.StopwordsTokenFilter, #Microsoft.Azure.Search.SynonymTokenFilter, #Microsoft.Azure.Search.TruncateTokenFilter, #Microsoft.Azure.Search.UniqueTokenFilter, #Microsoft.Azure.Search.WordDelimiterTokenFilter */
  odataType: string;
  /** The name of the token filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters. */
  name: string;
}

export function azureSearchDocumentsIndexesTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesTokenFilter,
): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function azureSearchDocumentsIndexesTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for TokenFilterUnion */
export type TokenFilterUnion =
  | AzureSearchDocumentsIndexesAsciiFoldingTokenFilter
  | AzureSearchDocumentsIndexesCjkBigramTokenFilter
  | AzureSearchDocumentsIndexesCommonGramTokenFilter
  | AzureSearchDocumentsIndexesDictionaryDecompounderTokenFilter
  | AzureSearchDocumentsIndexesEdgeNGramTokenFilter
  | AzureSearchDocumentsIndexesElisionTokenFilter
  | AzureSearchDocumentsIndexesKeepTokenFilter
  | AzureSearchDocumentsIndexesKeywordMarkerTokenFilter
  | AzureSearchDocumentsIndexesLengthTokenFilter
  | AzureSearchDocumentsIndexesLimitTokenFilter
  | AzureSearchDocumentsIndexesNGramTokenFilter
  | AzureSearchDocumentsIndexesPatternCaptureTokenFilter
  | AzureSearchDocumentsIndexesPatternReplaceTokenFilter
  | AzureSearchDocumentsIndexesPhoneticTokenFilter
  | AzureSearchDocumentsIndexesShingleTokenFilter
  | AzureSearchDocumentsIndexesSnowballTokenFilter
  | AzureSearchDocumentsIndexesStemmerTokenFilter
  | AzureSearchDocumentsIndexesStemmerOverrideTokenFilter
  | AzureSearchDocumentsIndexesStopwordsTokenFilter
  | AzureSearchDocumentsIndexesSynonymTokenFilter
  | AzureSearchDocumentsIndexesTruncateTokenFilter
  | AzureSearchDocumentsIndexesUniqueTokenFilter
  | AzureSearchDocumentsIndexesWordDelimiterTokenFilter
  | AzureSearchDocumentsIndexesTokenFilter;

export function azureSearchDocumentsIndexesTokenFilterUnionSerializer(
  item: TokenFilterUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.AsciiFoldingTokenFilter":
      return asciiFoldingTokenFilterSerializer(item as AsciiFoldingTokenFilter);

    case "#Microsoft.Azure.Search.CjkBigramTokenFilter":
      return cjkBigramTokenFilterSerializer(item as CjkBigramTokenFilter);

    case "#Microsoft.Azure.Search.CommonGramTokenFilter":
      return commonGramTokenFilterSerializer(item as CommonGramTokenFilter);

    case "#Microsoft.Azure.Search.DictionaryDecompounderTokenFilter":
      return dictionaryDecompounderTokenFilterSerializer(
        item as DictionaryDecompounderTokenFilter,
      );

    case "#Microsoft.Azure.Search.EdgeNGramTokenFilterV2":
      return edgeNGramTokenFilterSerializer(item as EdgeNGramTokenFilter);

    case "#Microsoft.Azure.Search.ElisionTokenFilter":
      return elisionTokenFilterSerializer(item as ElisionTokenFilter);

    case "#Microsoft.Azure.Search.KeepTokenFilter":
      return keepTokenFilterSerializer(item as KeepTokenFilter);

    case "#Microsoft.Azure.Search.KeywordMarkerTokenFilter":
      return keywordMarkerTokenFilterSerializer(
        item as KeywordMarkerTokenFilter,
      );

    case "#Microsoft.Azure.Search.LengthTokenFilter":
      return lengthTokenFilterSerializer(item as LengthTokenFilter);

    case "#Microsoft.Azure.Search.LimitTokenFilter":
      return limitTokenFilterSerializer(item as LimitTokenFilter);

    case "#Microsoft.Azure.Search.NGramTokenFilterV2":
      return nGramTokenFilterSerializer(item as NGramTokenFilter);

    case "#Microsoft.Azure.Search.PatternCaptureTokenFilter":
      return patternCaptureTokenFilterSerializer(
        item as PatternCaptureTokenFilter,
      );

    case "#Microsoft.Azure.Search.PatternReplaceTokenFilter":
      return patternReplaceTokenFilterSerializer(
        item as PatternReplaceTokenFilter,
      );

    case "#Microsoft.Azure.Search.PhoneticTokenFilter":
      return phoneticTokenFilterSerializer(item as PhoneticTokenFilter);

    case "#Microsoft.Azure.Search.ShingleTokenFilter":
      return shingleTokenFilterSerializer(item as ShingleTokenFilter);

    case "#Microsoft.Azure.Search.SnowballTokenFilter":
      return snowballTokenFilterSerializer(item as SnowballTokenFilter);

    case "#Microsoft.Azure.Search.StemmerTokenFilter":
      return stemmerTokenFilterSerializer(item as StemmerTokenFilter);

    case "#Microsoft.Azure.Search.StemmerOverrideTokenFilter":
      return stemmerOverrideTokenFilterSerializer(
        item as StemmerOverrideTokenFilter,
      );

    case "#Microsoft.Azure.Search.StopwordsTokenFilter":
      return stopwordsTokenFilterSerializer(item as StopwordsTokenFilter);

    case "#Microsoft.Azure.Search.SynonymTokenFilter":
      return synonymTokenFilterSerializer(item as SynonymTokenFilter);

    case "#Microsoft.Azure.Search.TruncateTokenFilter":
      return truncateTokenFilterSerializer(item as TruncateTokenFilter);

    case "#Microsoft.Azure.Search.UniqueTokenFilter":
      return uniqueTokenFilterSerializer(item as UniqueTokenFilter);

    case "#Microsoft.Azure.Search.WordDelimiterTokenFilter":
      return wordDelimiterTokenFilterSerializer(
        item as WordDelimiterTokenFilter,
      );

    default:
      return azureSearchDocumentsIndexesTokenFilterSerializer(item);
  }
}

export function azureSearchDocumentsIndexesTokenFilterUnionDeserializer(
  item: any,
): TokenFilterUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.AsciiFoldingTokenFilter":
      return asciiFoldingTokenFilterDeserializer(
        item as AsciiFoldingTokenFilter,
      );

    case "#Microsoft.Azure.Search.CjkBigramTokenFilter":
      return cjkBigramTokenFilterDeserializer(item as CjkBigramTokenFilter);

    case "#Microsoft.Azure.Search.CommonGramTokenFilter":
      return commonGramTokenFilterDeserializer(item as CommonGramTokenFilter);

    case "#Microsoft.Azure.Search.DictionaryDecompounderTokenFilter":
      return dictionaryDecompounderTokenFilterDeserializer(
        item as DictionaryDecompounderTokenFilter,
      );

    case "#Microsoft.Azure.Search.EdgeNGramTokenFilterV2":
      return edgeNGramTokenFilterDeserializer(item as EdgeNGramTokenFilter);

    case "#Microsoft.Azure.Search.ElisionTokenFilter":
      return elisionTokenFilterDeserializer(item as ElisionTokenFilter);

    case "#Microsoft.Azure.Search.KeepTokenFilter":
      return keepTokenFilterDeserializer(item as KeepTokenFilter);

    case "#Microsoft.Azure.Search.KeywordMarkerTokenFilter":
      return keywordMarkerTokenFilterDeserializer(
        item as KeywordMarkerTokenFilter,
      );

    case "#Microsoft.Azure.Search.LengthTokenFilter":
      return lengthTokenFilterDeserializer(item as LengthTokenFilter);

    case "#Microsoft.Azure.Search.LimitTokenFilter":
      return limitTokenFilterDeserializer(item as LimitTokenFilter);

    case "#Microsoft.Azure.Search.NGramTokenFilterV2":
      return nGramTokenFilterDeserializer(item as NGramTokenFilter);

    case "#Microsoft.Azure.Search.PatternCaptureTokenFilter":
      return patternCaptureTokenFilterDeserializer(
        item as PatternCaptureTokenFilter,
      );

    case "#Microsoft.Azure.Search.PatternReplaceTokenFilter":
      return patternReplaceTokenFilterDeserializer(
        item as PatternReplaceTokenFilter,
      );

    case "#Microsoft.Azure.Search.PhoneticTokenFilter":
      return phoneticTokenFilterDeserializer(item as PhoneticTokenFilter);

    case "#Microsoft.Azure.Search.ShingleTokenFilter":
      return shingleTokenFilterDeserializer(item as ShingleTokenFilter);

    case "#Microsoft.Azure.Search.SnowballTokenFilter":
      return snowballTokenFilterDeserializer(item as SnowballTokenFilter);

    case "#Microsoft.Azure.Search.StemmerTokenFilter":
      return stemmerTokenFilterDeserializer(item as StemmerTokenFilter);

    case "#Microsoft.Azure.Search.StemmerOverrideTokenFilter":
      return stemmerOverrideTokenFilterDeserializer(
        item as StemmerOverrideTokenFilter,
      );

    case "#Microsoft.Azure.Search.StopwordsTokenFilter":
      return stopwordsTokenFilterDeserializer(item as StopwordsTokenFilter);

    case "#Microsoft.Azure.Search.SynonymTokenFilter":
      return synonymTokenFilterDeserializer(item as SynonymTokenFilter);

    case "#Microsoft.Azure.Search.TruncateTokenFilter":
      return truncateTokenFilterDeserializer(item as TruncateTokenFilter);

    case "#Microsoft.Azure.Search.UniqueTokenFilter":
      return uniqueTokenFilterDeserializer(item as UniqueTokenFilter);

    case "#Microsoft.Azure.Search.WordDelimiterTokenFilter":
      return wordDelimiterTokenFilterDeserializer(
        item as WordDelimiterTokenFilter,
      );

    default:
      return azureSearchDocumentsIndexesTokenFilterDeserializer(item);
  }
}

/** Converts alphabetic, numeric, and symbolic Unicode characters which are not in the first 127 ASCII characters (the "Basic Latin" Unicode block) into their ASCII equivalents, if such equivalents exist. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesAsciiFoldingTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A value indicating whether the original token will be kept. Default is false. */
  preserveOriginal?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.AsciiFoldingTokenFilter";
}

export function azureSearchDocumentsIndexesAsciiFoldingTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesAsciiFoldingTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    preserveOriginal: item["preserveOriginal"],
  };
}

export function azureSearchDocumentsIndexesAsciiFoldingTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAsciiFoldingTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    preserveOriginal: item["preserveOriginal"],
  };
}

/** Forms bigrams of CJK terms that are generated from the standard tokenizer. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesCjkBigramTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The scripts to ignore. */
  ignoreScripts?: AzureSearchDocumentsIndexesCjkBigramTokenFilterScripts[];
  /** A value indicating whether to output both unigrams and bigrams (if true), or just bigrams (if false). Default is false. */
  outputUnigrams?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.CjkBigramTokenFilter";
}

export function azureSearchDocumentsIndexesCjkBigramTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesCjkBigramTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    ignoreScripts: !item["ignoreScripts"]
      ? item["ignoreScripts"]
      : item["ignoreScripts"].map((p: any) => {
          return p;
        }),
    outputUnigrams: item["outputUnigrams"],
  };
}

export function azureSearchDocumentsIndexesCjkBigramTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCjkBigramTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    ignoreScripts: !item["ignoreScripts"]
      ? item["ignoreScripts"]
      : item["ignoreScripts"].map((p: any) => {
          return p;
        }),
    outputUnigrams: item["outputUnigrams"],
  };
}

/** Scripts that can be ignored by CjkBigramTokenFilter. */
export enum KnownAzureSearchDocumentsIndexesCjkBigramTokenFilterScripts {
  /** Ignore Han script when forming bigrams of CJK terms. */
  Han = "han",
  /** Ignore Hiragana script when forming bigrams of CJK terms. */
  Hiragana = "hiragana",
  /** Ignore Katakana script when forming bigrams of CJK terms. */
  Katakana = "katakana",
  /** Ignore Hangul script when forming bigrams of CJK terms. */
  Hangul = "hangul",
}

/**
 * Scripts that can be ignored by CjkBigramTokenFilter. \
 * {@link KnownAzureSearchDocumentsIndexesCjkBigramTokenFilterScripts} can be used interchangeably with AzureSearchDocumentsIndexesCjkBigramTokenFilterScripts,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **han**: Ignore Han script when forming bigrams of CJK terms. \
 * **hiragana**: Ignore Hiragana script when forming bigrams of CJK terms. \
 * **katakana**: Ignore Katakana script when forming bigrams of CJK terms. \
 * **hangul**: Ignore Hangul script when forming bigrams of CJK terms.
 */
export type AzureSearchDocumentsIndexesCjkBigramTokenFilterScripts = string;

/** Construct bigrams for frequently occurring terms while indexing. Single terms are still indexed too, with bigrams overlaid. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesCommonGramTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The set of common words. */
  commonWords: string[];
  /** A value indicating whether common words matching will be case insensitive. Default is false. */
  ignoreCase?: boolean;
  /** A value that indicates whether the token filter is in query mode. When in query mode, the token filter generates bigrams and then removes common words and single terms followed by a common word. Default is false. */
  useQueryMode?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.CommonGramTokenFilter";
}

export function azureSearchDocumentsIndexesCommonGramTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesCommonGramTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    commonWords: item["commonWords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    queryMode: item["useQueryMode"],
  };
}

export function azureSearchDocumentsIndexesCommonGramTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCommonGramTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    commonWords: item["commonWords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    useQueryMode: item["queryMode"],
  };
}

/** Decomposes compound words found in many Germanic languages. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesDictionaryDecompounderTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The list of words to match against. */
  wordList: string[];
  /** The minimum word size. Only words longer than this get processed. Default is 5. Maximum is 300. */
  minWordSize?: number;
  /** The minimum subword size. Only subwords longer than this are outputted. Default is 2. Maximum is 300. */
  minSubwordSize?: number;
  /** The maximum subword size. Only subwords shorter than this are outputted. Default is 15. Maximum is 300. */
  maxSubwordSize?: number;
  /** A value indicating whether to add only the longest matching subword to the output. Default is false. */
  onlyLongestMatch?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.DictionaryDecompounderTokenFilter";
}

export function azureSearchDocumentsIndexesDictionaryDecompounderTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesDictionaryDecompounderTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    wordList: item["wordList"].map((p: any) => {
      return p;
    }),
    minWordSize: item["minWordSize"],
    minSubwordSize: item["minSubwordSize"],
    maxSubwordSize: item["maxSubwordSize"],
    onlyLongestMatch: item["onlyLongestMatch"],
  };
}

export function azureSearchDocumentsIndexesDictionaryDecompounderTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDictionaryDecompounderTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    wordList: item["wordList"].map((p: any) => {
      return p;
    }),
    minWordSize: item["minWordSize"],
    minSubwordSize: item["minSubwordSize"],
    maxSubwordSize: item["maxSubwordSize"],
    onlyLongestMatch: item["onlyLongestMatch"],
  };
}

/** Generates n-grams of the given size(s) starting from the front or the back of an input token. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesEdgeNGramTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram. */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /** Specifies which side of the input the n-gram should be generated from. Default is "front". */
  side?: AzureSearchDocumentsIndexesEdgeNGramTokenFilterSide;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.EdgeNGramTokenFilterV2";
}

export function azureSearchDocumentsIndexesEdgeNGramTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesEdgeNGramTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    side: item["side"],
  };
}

export function azureSearchDocumentsIndexesEdgeNGramTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesEdgeNGramTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    side: item["side"],
  };
}

/** Specifies which side of the input an n-gram should be generated from. */
export enum KnownAzureSearchDocumentsIndexesEdgeNGramTokenFilterSide {
  /** Specifies that the n-gram should be generated from the front of the input. */
  Front = "front",
  /** Specifies that the n-gram should be generated from the back of the input. */
  Back = "back",
}

/**
 * Specifies which side of the input an n-gram should be generated from. \
 * {@link KnownAzureSearchDocumentsIndexesEdgeNGramTokenFilterSide} can be used interchangeably with AzureSearchDocumentsIndexesEdgeNGramTokenFilterSide,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **front**: Specifies that the n-gram should be generated from the front of the input. \
 * **back**: Specifies that the n-gram should be generated from the back of the input.
 */
export type AzureSearchDocumentsIndexesEdgeNGramTokenFilterSide = string;

/** Removes elisions. For example, "l'avion" (the plane) will be converted to "avion" (plane). This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesElisionTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The set of articles to remove. */
  articles?: string[];
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.ElisionTokenFilter";
}

export function azureSearchDocumentsIndexesElisionTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesElisionTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    articles: !item["articles"]
      ? item["articles"]
      : item["articles"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesElisionTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesElisionTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    articles: !item["articles"]
      ? item["articles"]
      : item["articles"].map((p: any) => {
          return p;
        }),
  };
}

/** A token filter that only keeps tokens with text contained in a specified list of words. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesKeepTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The list of words to keep. */
  keepWords: string[];
  /** A value indicating whether to lower case all words first. Default is false. */
  lowerCaseKeepWords?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.KeepTokenFilter";
}

export function azureSearchDocumentsIndexesKeepTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesKeepTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    keepWords: item["keepWords"].map((p: any) => {
      return p;
    }),
    keepWordsCase: item["lowerCaseKeepWords"],
  };
}

export function azureSearchDocumentsIndexesKeepTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKeepTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    keepWords: item["keepWords"].map((p: any) => {
      return p;
    }),
    lowerCaseKeepWords: item["keepWordsCase"],
  };
}

/** Marks terms as keywords. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesKeywordMarkerTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A list of words to mark as keywords. */
  keywords: string[];
  /** A value indicating whether to ignore case. If true, all words are converted to lower case first. Default is false. */
  ignoreCase?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.KeywordMarkerTokenFilter";
}

export function azureSearchDocumentsIndexesKeywordMarkerTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesKeywordMarkerTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    keywords: item["keywords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
  };
}

export function azureSearchDocumentsIndexesKeywordMarkerTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKeywordMarkerTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    keywords: item["keywords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
  };
}

/** Removes words that are too long or too short. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesLengthTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The minimum length in characters. Default is 0. Maximum is 300. Must be less than the value of max. */
  minLength?: number;
  /** The maximum length in characters. Default and maximum is 300. */
  maxLength?: number;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.LengthTokenFilter";
}

export function azureSearchDocumentsIndexesLengthTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesLengthTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    min: item["minLength"],
    max: item["maxLength"],
  };
}

export function azureSearchDocumentsIndexesLengthTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLengthTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minLength: item["min"],
    maxLength: item["max"],
  };
}

/** Limits the number of tokens while indexing. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesLimitTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The maximum number of tokens to produce. Default is 1. */
  maxTokenCount?: number;
  /** A value indicating whether all tokens from the input must be consumed even if maxTokenCount is reached. Default is false. */
  consumeAllTokens?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.LimitTokenFilter";
}

export function azureSearchDocumentsIndexesLimitTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesLimitTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenCount: item["maxTokenCount"],
    consumeAllTokens: item["consumeAllTokens"],
  };
}

export function azureSearchDocumentsIndexesLimitTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLimitTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenCount: item["maxTokenCount"],
    consumeAllTokens: item["consumeAllTokens"],
  };
}

/** Generates n-grams of the given size(s). This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesNGramTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the value of maxGram. */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.NGramTokenFilterV2";
}

export function azureSearchDocumentsIndexesNGramTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesNGramTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
  };
}

export function azureSearchDocumentsIndexesNGramTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesNGramTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
  };
}

/** Uses Java regexes to emit multiple tokens - one for each capture group in one or more patterns. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesPatternCaptureTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A list of patterns to match against each token. */
  patterns: string[];
  /** A value indicating whether to return the original token even if one of the patterns matches. Default is true. */
  preserveOriginal?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.PatternCaptureTokenFilter";
}

export function azureSearchDocumentsIndexesPatternCaptureTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesPatternCaptureTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    patterns: item["patterns"].map((p: any) => {
      return p;
    }),
    preserveOriginal: item["preserveOriginal"],
  };
}

export function azureSearchDocumentsIndexesPatternCaptureTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPatternCaptureTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    patterns: item["patterns"].map((p: any) => {
      return p;
    }),
    preserveOriginal: item["preserveOriginal"],
  };
}

/** A character filter that replaces characters in the input string. It uses a regular expression to identify character sequences to preserve and a replacement pattern to identify characters to replace. For example, given the input text "aa bb aa bb", pattern "(aa)\s+(bb)", and replacement "$1#$2", the result would be "aa#bb aa#bb". This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesPatternReplaceTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A regular expression pattern. */
  pattern: string;
  /** The replacement text. */
  replacement: string;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.PatternReplaceTokenFilter";
}

export function azureSearchDocumentsIndexesPatternReplaceTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesPatternReplaceTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

export function azureSearchDocumentsIndexesPatternReplaceTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPatternReplaceTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

/** Create tokens for phonetic matches. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesPhoneticTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The phonetic encoder to use. Default is "metaphone". */
  encoder?: AzureSearchDocumentsIndexesPhoneticEncoder;
  /** A value indicating whether encoded tokens should replace original tokens. If false, encoded tokens are added as synonyms. Default is true. */
  replaceOriginalTokens?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.PhoneticTokenFilter";
}

export function azureSearchDocumentsIndexesPhoneticTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesPhoneticTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    encoder: item["encoder"],
    replace: item["replaceOriginalTokens"],
  };
}

export function azureSearchDocumentsIndexesPhoneticTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPhoneticTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    encoder: item["encoder"],
    replaceOriginalTokens: item["replace"],
  };
}

/** Identifies the type of phonetic encoder to use with a PhoneticTokenFilter. */
export enum KnownAzureSearchDocumentsIndexesPhoneticEncoder {
  /** Encodes a token into a Metaphone value. */
  Metaphone = "metaphone",
  /** Encodes a token into a double metaphone value. */
  DoubleMetaphone = "doubleMetaphone",
  /** Encodes a token into a Soundex value. */
  Soundex = "soundex",
  /** Encodes a token into a Refined Soundex value. */
  RefinedSoundex = "refinedSoundex",
  /** Encodes a token into a Caverphone 1.0 value. */
  Caverphone1 = "caverphone1",
  /** Encodes a token into a Caverphone 2.0 value. */
  Caverphone2 = "caverphone2",
  /** Encodes a token into a Cologne Phonetic value. */
  Cologne = "cologne",
  /** Encodes a token into a NYSIIS value. */
  Nysiis = "nysiis",
  /** Encodes a token using the KÃ¶lner Phonetik algorithm. */
  KoelnerPhonetik = "koelnerPhonetik",
  /** Encodes a token using the Haase refinement of the KÃ¶lner Phonetik algorithm. */
  HaasePhonetik = "haasePhonetik",
  /** Encodes a token into a Beider-Morse value. */
  BeiderMorse = "beiderMorse",
}

/**
 * Identifies the type of phonetic encoder to use with a PhoneticTokenFilter. \
 * {@link KnownAzureSearchDocumentsIndexesPhoneticEncoder} can be used interchangeably with AzureSearchDocumentsIndexesPhoneticEncoder,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **metaphone**: Encodes a token into a Metaphone value. \
 * **doubleMetaphone**: Encodes a token into a double metaphone value. \
 * **soundex**: Encodes a token into a Soundex value. \
 * **refinedSoundex**: Encodes a token into a Refined Soundex value. \
 * **caverphone1**: Encodes a token into a Caverphone 1.0 value. \
 * **caverphone2**: Encodes a token into a Caverphone 2.0 value. \
 * **cologne**: Encodes a token into a Cologne Phonetic value. \
 * **nysiis**: Encodes a token into a NYSIIS value. \
 * **koelnerPhonetik**: Encodes a token using the KÃ¶lner Phonetik algorithm. \
 * **haasePhonetik**: Encodes a token using the Haase refinement of the KÃ¶lner Phonetik algorithm. \
 * **beiderMorse**: Encodes a token into a Beider-Morse value.
 */
export type AzureSearchDocumentsIndexesPhoneticEncoder = string;

/** Creates combinations of tokens as a single token. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesShingleTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The maximum shingle size. Default and minimum value is 2. */
  maxShingleSize?: number;
  /** The minimum shingle size. Default and minimum value is 2. Must be less than the value of maxShingleSize. */
  minShingleSize?: number;
  /** A value indicating whether the output stream will contain the input tokens (unigrams) as well as shingles. Default is true. */
  outputUnigrams?: boolean;
  /** A value indicating whether to output unigrams for those times when no shingles are available. This property takes precedence when outputUnigrams is set to false. Default is false. */
  outputUnigramsIfNoShingles?: boolean;
  /** The string to use when joining adjacent tokens to form a shingle. Default is a single space (" "). */
  tokenSeparator?: string;
  /** The string to insert for each position at which there is no token. Default is an underscore ("_"). */
  filterToken?: string;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.ShingleTokenFilter";
}

export function azureSearchDocumentsIndexesShingleTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesShingleTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxShingleSize: item["maxShingleSize"],
    minShingleSize: item["minShingleSize"],
    outputUnigrams: item["outputUnigrams"],
    outputUnigramsIfNoShingles: item["outputUnigramsIfNoShingles"],
    tokenSeparator: item["tokenSeparator"],
    filterToken: item["filterToken"],
  };
}

export function azureSearchDocumentsIndexesShingleTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesShingleTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxShingleSize: item["maxShingleSize"],
    minShingleSize: item["minShingleSize"],
    outputUnigrams: item["outputUnigrams"],
    outputUnigramsIfNoShingles: item["outputUnigramsIfNoShingles"],
    tokenSeparator: item["tokenSeparator"],
    filterToken: item["filterToken"],
  };
}

/** A filter that stems words using a Snowball-generated stemmer. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesSnowballTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The language to use. */
  language: AzureSearchDocumentsIndexesSnowballTokenFilterLanguage;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.SnowballTokenFilter";
}

export function azureSearchDocumentsIndexesSnowballTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesSnowballTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    language: item["language"],
  };
}

export function azureSearchDocumentsIndexesSnowballTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSnowballTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    language: item["language"],
  };
}

/** The language to use for a Snowball token filter. */
export enum KnownAzureSearchDocumentsIndexesSnowballTokenFilterLanguage {
  /** Selects the Lucene Snowball stemming tokenizer for Armenian. */
  Armenian = "armenian",
  /** Selects the Lucene Snowball stemming tokenizer for Basque. */
  Basque = "basque",
  /** Selects the Lucene Snowball stemming tokenizer for Catalan. */
  Catalan = "catalan",
  /** Selects the Lucene Snowball stemming tokenizer for Danish. */
  Danish = "danish",
  /** Selects the Lucene Snowball stemming tokenizer for Dutch. */
  Dutch = "dutch",
  /** Selects the Lucene Snowball stemming tokenizer for English. */
  English = "english",
  /** Selects the Lucene Snowball stemming tokenizer for Finnish. */
  Finnish = "finnish",
  /** Selects the Lucene Snowball stemming tokenizer for French. */
  French = "french",
  /** Selects the Lucene Snowball stemming tokenizer for German. */
  German = "german",
  /** Selects the Lucene Snowball stemming tokenizer that uses the German variant algorithm. */
  German2 = "german2",
  /** Selects the Lucene Snowball stemming tokenizer for Hungarian. */
  Hungarian = "hungarian",
  /** Selects the Lucene Snowball stemming tokenizer for Italian. */
  Italian = "italian",
  /** Selects the Lucene Snowball stemming tokenizer for Dutch that uses the Kraaij-Pohlmann stemming algorithm. */
  Kp = "kp",
  /** Selects the Lucene Snowball stemming tokenizer for English that uses the Lovins stemming algorithm. */
  Lovins = "lovins",
  /** Selects the Lucene Snowball stemming tokenizer for Norwegian. */
  Norwegian = "norwegian",
  /** Selects the Lucene Snowball stemming tokenizer for English that uses the Porter stemming algorithm. */
  Porter = "porter",
  /** Selects the Lucene Snowball stemming tokenizer for Portuguese. */
  Portuguese = "portuguese",
  /** Selects the Lucene Snowball stemming tokenizer for Romanian. */
  Romanian = "romanian",
  /** Selects the Lucene Snowball stemming tokenizer for Russian. */
  Russian = "russian",
  /** Selects the Lucene Snowball stemming tokenizer for Spanish. */
  Spanish = "spanish",
  /** Selects the Lucene Snowball stemming tokenizer for Swedish. */
  Swedish = "swedish",
  /** Selects the Lucene Snowball stemming tokenizer for Turkish. */
  Turkish = "turkish",
}

/**
 * The language to use for a Snowball token filter. \
 * {@link KnownAzureSearchDocumentsIndexesSnowballTokenFilterLanguage} can be used interchangeably with AzureSearchDocumentsIndexesSnowballTokenFilterLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **armenian**: Selects the Lucene Snowball stemming tokenizer for Armenian. \
 * **basque**: Selects the Lucene Snowball stemming tokenizer for Basque. \
 * **catalan**: Selects the Lucene Snowball stemming tokenizer for Catalan. \
 * **danish**: Selects the Lucene Snowball stemming tokenizer for Danish. \
 * **dutch**: Selects the Lucene Snowball stemming tokenizer for Dutch. \
 * **english**: Selects the Lucene Snowball stemming tokenizer for English. \
 * **finnish**: Selects the Lucene Snowball stemming tokenizer for Finnish. \
 * **french**: Selects the Lucene Snowball stemming tokenizer for French. \
 * **german**: Selects the Lucene Snowball stemming tokenizer for German. \
 * **german2**: Selects the Lucene Snowball stemming tokenizer that uses the German variant algorithm. \
 * **hungarian**: Selects the Lucene Snowball stemming tokenizer for Hungarian. \
 * **italian**: Selects the Lucene Snowball stemming tokenizer for Italian. \
 * **kp**: Selects the Lucene Snowball stemming tokenizer for Dutch that uses the Kraaij-Pohlmann stemming algorithm. \
 * **lovins**: Selects the Lucene Snowball stemming tokenizer for English that uses the Lovins stemming algorithm. \
 * **norwegian**: Selects the Lucene Snowball stemming tokenizer for Norwegian. \
 * **porter**: Selects the Lucene Snowball stemming tokenizer for English that uses the Porter stemming algorithm. \
 * **portuguese**: Selects the Lucene Snowball stemming tokenizer for Portuguese. \
 * **romanian**: Selects the Lucene Snowball stemming tokenizer for Romanian. \
 * **russian**: Selects the Lucene Snowball stemming tokenizer for Russian. \
 * **spanish**: Selects the Lucene Snowball stemming tokenizer for Spanish. \
 * **swedish**: Selects the Lucene Snowball stemming tokenizer for Swedish. \
 * **turkish**: Selects the Lucene Snowball stemming tokenizer for Turkish.
 */
export type AzureSearchDocumentsIndexesSnowballTokenFilterLanguage = string;

/** Language specific stemming filter. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesStemmerTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The language to use. */
  language: AzureSearchDocumentsIndexesStemmerTokenFilterLanguage;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.StemmerTokenFilter";
}

export function azureSearchDocumentsIndexesStemmerTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesStemmerTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    language: item["language"],
  };
}

export function azureSearchDocumentsIndexesStemmerTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesStemmerTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    language: item["language"],
  };
}

/** The language to use for a stemmer token filter. */
export enum KnownAzureSearchDocumentsIndexesStemmerTokenFilterLanguage {
  /** Selects the Lucene stemming tokenizer for Arabic. */
  Arabic = "arabic",
  /** Selects the Lucene stemming tokenizer for Armenian. */
  Armenian = "armenian",
  /** Selects the Lucene stemming tokenizer for Basque. */
  Basque = "basque",
  /** Selects the Lucene stemming tokenizer for Portuguese (Brazil). */
  Brazilian = "brazilian",
  /** Selects the Lucene stemming tokenizer for Bulgarian. */
  Bulgarian = "bulgarian",
  /** Selects the Lucene stemming tokenizer for Catalan. */
  Catalan = "catalan",
  /** Selects the Lucene stemming tokenizer for Czech. */
  Czech = "czech",
  /** Selects the Lucene stemming tokenizer for Danish. */
  Danish = "danish",
  /** Selects the Lucene stemming tokenizer for Dutch. */
  Dutch = "dutch",
  /** Selects the Lucene stemming tokenizer for Dutch that uses the Kraaij-Pohlmann stemming algorithm. */
  DutchKp = "dutchKp",
  /** Selects the Lucene stemming tokenizer for English. */
  English = "english",
  /** Selects the Lucene stemming tokenizer for English that does light stemming. */
  LightEnglish = "lightEnglish",
  /** Selects the Lucene stemming tokenizer for English that does minimal stemming. */
  MinimalEnglish = "minimalEnglish",
  /** Selects the Lucene stemming tokenizer for English that removes trailing possessives from words. */
  PossessiveEnglish = "possessiveEnglish",
  /** Selects the Lucene stemming tokenizer for English that uses the Porter2 stemming algorithm. */
  Porter2 = "porter2",
  /** Selects the Lucene stemming tokenizer for English that uses the Lovins stemming algorithm. */
  Lovins = "lovins",
  /** Selects the Lucene stemming tokenizer for Finnish. */
  Finnish = "finnish",
  /** Selects the Lucene stemming tokenizer for Finnish that does light stemming. */
  LightFinnish = "lightFinnish",
  /** Selects the Lucene stemming tokenizer for French. */
  French = "french",
  /** Selects the Lucene stemming tokenizer for French that does light stemming. */
  LightFrench = "lightFrench",
  /** Selects the Lucene stemming tokenizer for French that does minimal stemming. */
  MinimalFrench = "minimalFrench",
  /** Selects the Lucene stemming tokenizer for Galician. */
  Galician = "galician",
  /** Selects the Lucene stemming tokenizer for Galician that does minimal stemming. */
  MinimalGalician = "minimalGalician",
  /** Selects the Lucene stemming tokenizer for German. */
  German = "german",
  /** Selects the Lucene stemming tokenizer that uses the German variant algorithm. */
  German2 = "german2",
  /** Selects the Lucene stemming tokenizer for German that does light stemming. */
  LightGerman = "lightGerman",
  /** Selects the Lucene stemming tokenizer for German that does minimal stemming. */
  MinimalGerman = "minimalGerman",
  /** Selects the Lucene stemming tokenizer for Greek. */
  Greek = "greek",
  /** Selects the Lucene stemming tokenizer for Hindi. */
  Hindi = "hindi",
  /** Selects the Lucene stemming tokenizer for Hungarian. */
  Hungarian = "hungarian",
  /** Selects the Lucene stemming tokenizer for Hungarian that does light stemming. */
  LightHungarian = "lightHungarian",
  /** Selects the Lucene stemming tokenizer for Indonesian. */
  Indonesian = "indonesian",
  /** Selects the Lucene stemming tokenizer for Irish. */
  Irish = "irish",
  /** Selects the Lucene stemming tokenizer for Italian. */
  Italian = "italian",
  /** Selects the Lucene stemming tokenizer for Italian that does light stemming. */
  LightItalian = "lightItalian",
  /** Selects the Lucene stemming tokenizer for Sorani. */
  Sorani = "sorani",
  /** Selects the Lucene stemming tokenizer for Latvian. */
  Latvian = "latvian",
  /** Selects the Lucene stemming tokenizer for Norwegian (BokmÃ¥l). */
  Norwegian = "norwegian",
  /** Selects the Lucene stemming tokenizer for Norwegian (BokmÃ¥l) that does light stemming. */
  LightNorwegian = "lightNorwegian",
  /** Selects the Lucene stemming tokenizer for Norwegian (BokmÃ¥l) that does minimal stemming. */
  MinimalNorwegian = "minimalNorwegian",
  /** Selects the Lucene stemming tokenizer for Norwegian (Nynorsk) that does light stemming. */
  LightNynorsk = "lightNynorsk",
  /** Selects the Lucene stemming tokenizer for Norwegian (Nynorsk) that does minimal stemming. */
  MinimalNynorsk = "minimalNynorsk",
  /** Selects the Lucene stemming tokenizer for Portuguese. */
  Portuguese = "portuguese",
  /** Selects the Lucene stemming tokenizer for Portuguese that does light stemming. */
  LightPortuguese = "lightPortuguese",
  /** Selects the Lucene stemming tokenizer for Portuguese that does minimal stemming. */
  MinimalPortuguese = "minimalPortuguese",
  /** Selects the Lucene stemming tokenizer for Portuguese that uses the RSLP stemming algorithm. */
  PortugueseRslp = "portugueseRslp",
  /** Selects the Lucene stemming tokenizer for Romanian. */
  Romanian = "romanian",
  /** Selects the Lucene stemming tokenizer for Russian. */
  Russian = "russian",
  /** Selects the Lucene stemming tokenizer for Russian that does light stemming. */
  LightRussian = "lightRussian",
  /** Selects the Lucene stemming tokenizer for Spanish. */
  Spanish = "spanish",
  /** Selects the Lucene stemming tokenizer for Spanish that does light stemming. */
  LightSpanish = "lightSpanish",
  /** Selects the Lucene stemming tokenizer for Swedish. */
  Swedish = "swedish",
  /** Selects the Lucene stemming tokenizer for Swedish that does light stemming. */
  LightSwedish = "lightSwedish",
  /** Selects the Lucene stemming tokenizer for Turkish. */
  Turkish = "turkish",
}

/**
 * The language to use for a stemmer token filter. \
 * {@link KnownAzureSearchDocumentsIndexesStemmerTokenFilterLanguage} can be used interchangeably with AzureSearchDocumentsIndexesStemmerTokenFilterLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **arabic**: Selects the Lucene stemming tokenizer for Arabic. \
 * **armenian**: Selects the Lucene stemming tokenizer for Armenian. \
 * **basque**: Selects the Lucene stemming tokenizer for Basque. \
 * **brazilian**: Selects the Lucene stemming tokenizer for Portuguese (Brazil). \
 * **bulgarian**: Selects the Lucene stemming tokenizer for Bulgarian. \
 * **catalan**: Selects the Lucene stemming tokenizer for Catalan. \
 * **czech**: Selects the Lucene stemming tokenizer for Czech. \
 * **danish**: Selects the Lucene stemming tokenizer for Danish. \
 * **dutch**: Selects the Lucene stemming tokenizer for Dutch. \
 * **dutchKp**: Selects the Lucene stemming tokenizer for Dutch that uses the Kraaij-Pohlmann stemming algorithm. \
 * **english**: Selects the Lucene stemming tokenizer for English. \
 * **lightEnglish**: Selects the Lucene stemming tokenizer for English that does light stemming. \
 * **minimalEnglish**: Selects the Lucene stemming tokenizer for English that does minimal stemming. \
 * **possessiveEnglish**: Selects the Lucene stemming tokenizer for English that removes trailing possessives from words. \
 * **porter2**: Selects the Lucene stemming tokenizer for English that uses the Porter2 stemming algorithm. \
 * **lovins**: Selects the Lucene stemming tokenizer for English that uses the Lovins stemming algorithm. \
 * **finnish**: Selects the Lucene stemming tokenizer for Finnish. \
 * **lightFinnish**: Selects the Lucene stemming tokenizer for Finnish that does light stemming. \
 * **french**: Selects the Lucene stemming tokenizer for French. \
 * **lightFrench**: Selects the Lucene stemming tokenizer for French that does light stemming. \
 * **minimalFrench**: Selects the Lucene stemming tokenizer for French that does minimal stemming. \
 * **galician**: Selects the Lucene stemming tokenizer for Galician. \
 * **minimalGalician**: Selects the Lucene stemming tokenizer for Galician that does minimal stemming. \
 * **german**: Selects the Lucene stemming tokenizer for German. \
 * **german2**: Selects the Lucene stemming tokenizer that uses the German variant algorithm. \
 * **lightGerman**: Selects the Lucene stemming tokenizer for German that does light stemming. \
 * **minimalGerman**: Selects the Lucene stemming tokenizer for German that does minimal stemming. \
 * **greek**: Selects the Lucene stemming tokenizer for Greek. \
 * **hindi**: Selects the Lucene stemming tokenizer for Hindi. \
 * **hungarian**: Selects the Lucene stemming tokenizer for Hungarian. \
 * **lightHungarian**: Selects the Lucene stemming tokenizer for Hungarian that does light stemming. \
 * **indonesian**: Selects the Lucene stemming tokenizer for Indonesian. \
 * **irish**: Selects the Lucene stemming tokenizer for Irish. \
 * **italian**: Selects the Lucene stemming tokenizer for Italian. \
 * **lightItalian**: Selects the Lucene stemming tokenizer for Italian that does light stemming. \
 * **sorani**: Selects the Lucene stemming tokenizer for Sorani. \
 * **latvian**: Selects the Lucene stemming tokenizer for Latvian. \
 * **norwegian**: Selects the Lucene stemming tokenizer for Norwegian (BokmÃ¥l). \
 * **lightNorwegian**: Selects the Lucene stemming tokenizer for Norwegian (BokmÃ¥l) that does light stemming. \
 * **minimalNorwegian**: Selects the Lucene stemming tokenizer for Norwegian (BokmÃ¥l) that does minimal stemming. \
 * **lightNynorsk**: Selects the Lucene stemming tokenizer for Norwegian (Nynorsk) that does light stemming. \
 * **minimalNynorsk**: Selects the Lucene stemming tokenizer for Norwegian (Nynorsk) that does minimal stemming. \
 * **portuguese**: Selects the Lucene stemming tokenizer for Portuguese. \
 * **lightPortuguese**: Selects the Lucene stemming tokenizer for Portuguese that does light stemming. \
 * **minimalPortuguese**: Selects the Lucene stemming tokenizer for Portuguese that does minimal stemming. \
 * **portugueseRslp**: Selects the Lucene stemming tokenizer for Portuguese that uses the RSLP stemming algorithm. \
 * **romanian**: Selects the Lucene stemming tokenizer for Romanian. \
 * **russian**: Selects the Lucene stemming tokenizer for Russian. \
 * **lightRussian**: Selects the Lucene stemming tokenizer for Russian that does light stemming. \
 * **spanish**: Selects the Lucene stemming tokenizer for Spanish. \
 * **lightSpanish**: Selects the Lucene stemming tokenizer for Spanish that does light stemming. \
 * **swedish**: Selects the Lucene stemming tokenizer for Swedish. \
 * **lightSwedish**: Selects the Lucene stemming tokenizer for Swedish that does light stemming. \
 * **turkish**: Selects the Lucene stemming tokenizer for Turkish.
 */
export type AzureSearchDocumentsIndexesStemmerTokenFilterLanguage = string;

/** Provides the ability to override other stemming filters with custom dictionary-based stemming. Any dictionary-stemmed terms will be marked as keywords so that they will not be stemmed with stemmers down the chain. Must be placed before any stemming filters. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesStemmerOverrideTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A list of stemming rules in the following format: "word => stem", for example: "ran => run". */
  rules: string[];
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.StemmerOverrideTokenFilter";
}

export function azureSearchDocumentsIndexesStemmerOverrideTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesStemmerOverrideTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    rules: item["rules"].map((p: any) => {
      return p;
    }),
  };
}

export function azureSearchDocumentsIndexesStemmerOverrideTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesStemmerOverrideTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    rules: item["rules"].map((p: any) => {
      return p;
    }),
  };
}

/** Removes stop words from a token stream. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesStopwordsTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The list of stopwords. This property and the stopwords list property cannot both be set. */
  stopwords?: string[];
  /** A predefined list of stopwords to use. This property and the stopwords property cannot both be set. Default is English. */
  stopwordsList?: AzureSearchDocumentsIndexesStopwordsList;
  /** A value indicating whether to ignore case. If true, all words are converted to lower case first. Default is false. */
  ignoreCase?: boolean;
  /** A value indicating whether to ignore the last search term if it's a stop word. Default is true. */
  removeTrailingStopWords?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.StopwordsTokenFilter";
}

export function azureSearchDocumentsIndexesStopwordsTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesStopwordsTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
    stopwordsList: item["stopwordsList"],
    ignoreCase: item["ignoreCase"],
    removeTrailing: item["removeTrailingStopWords"],
  };
}

export function azureSearchDocumentsIndexesStopwordsTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesStopwordsTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
    stopwordsList: item["stopwordsList"],
    ignoreCase: item["ignoreCase"],
    removeTrailingStopWords: item["removeTrailing"],
  };
}

/** Identifies a predefined list of language-specific stopwords. */
export enum KnownAzureSearchDocumentsIndexesStopwordsList {
  /** Selects the stopword list for Arabic. */
  Arabic = "arabic",
  /** Selects the stopword list for Armenian. */
  Armenian = "armenian",
  /** Selects the stopword list for Basque. */
  Basque = "basque",
  /** Selects the stopword list for Portuguese (Brazil). */
  Brazilian = "brazilian",
  /** Selects the stopword list for Bulgarian. */
  Bulgarian = "bulgarian",
  /** Selects the stopword list for Catalan. */
  Catalan = "catalan",
  /** Selects the stopword list for Czech. */
  Czech = "czech",
  /** Selects the stopword list for Danish. */
  Danish = "danish",
  /** Selects the stopword list for Dutch. */
  Dutch = "dutch",
  /** Selects the stopword list for English. */
  English = "english",
  /** Selects the stopword list for Finnish. */
  Finnish = "finnish",
  /** Selects the stopword list for French. */
  French = "french",
  /** Selects the stopword list for Galician. */
  Galician = "galician",
  /** Selects the stopword list for German. */
  German = "german",
  /** Selects the stopword list for Greek. */
  Greek = "greek",
  /** Selects the stopword list for Hindi. */
  Hindi = "hindi",
  /** Selects the stopword list for Hungarian. */
  Hungarian = "hungarian",
  /** Selects the stopword list for Indonesian. */
  Indonesian = "indonesian",
  /** Selects the stopword list for Irish. */
  Irish = "irish",
  /** Selects the stopword list for Italian. */
  Italian = "italian",
  /** Selects the stopword list for Latvian. */
  Latvian = "latvian",
  /** Selects the stopword list for Norwegian. */
  Norwegian = "norwegian",
  /** Selects the stopword list for Persian. */
  Persian = "persian",
  /** Selects the stopword list for Portuguese. */
  Portuguese = "portuguese",
  /** Selects the stopword list for Romanian. */
  Romanian = "romanian",
  /** Selects the stopword list for Russian. */
  Russian = "russian",
  /** Selects the stopword list for Sorani. */
  Sorani = "sorani",
  /** Selects the stopword list for Spanish. */
  Spanish = "spanish",
  /** Selects the stopword list for Swedish. */
  Swedish = "swedish",
  /** Selects the stopword list for Thai. */
  Thai = "thai",
  /** Selects the stopword list for Turkish. */
  Turkish = "turkish",
}

/**
 * Identifies a predefined list of language-specific stopwords. \
 * {@link KnownAzureSearchDocumentsIndexesStopwordsList} can be used interchangeably with AzureSearchDocumentsIndexesStopwordsList,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **arabic**: Selects the stopword list for Arabic. \
 * **armenian**: Selects the stopword list for Armenian. \
 * **basque**: Selects the stopword list for Basque. \
 * **brazilian**: Selects the stopword list for Portuguese (Brazil). \
 * **bulgarian**: Selects the stopword list for Bulgarian. \
 * **catalan**: Selects the stopword list for Catalan. \
 * **czech**: Selects the stopword list for Czech. \
 * **danish**: Selects the stopword list for Danish. \
 * **dutch**: Selects the stopword list for Dutch. \
 * **english**: Selects the stopword list for English. \
 * **finnish**: Selects the stopword list for Finnish. \
 * **french**: Selects the stopword list for French. \
 * **galician**: Selects the stopword list for Galician. \
 * **german**: Selects the stopword list for German. \
 * **greek**: Selects the stopword list for Greek. \
 * **hindi**: Selects the stopword list for Hindi. \
 * **hungarian**: Selects the stopword list for Hungarian. \
 * **indonesian**: Selects the stopword list for Indonesian. \
 * **irish**: Selects the stopword list for Irish. \
 * **italian**: Selects the stopword list for Italian. \
 * **latvian**: Selects the stopword list for Latvian. \
 * **norwegian**: Selects the stopword list for Norwegian. \
 * **persian**: Selects the stopword list for Persian. \
 * **portuguese**: Selects the stopword list for Portuguese. \
 * **romanian**: Selects the stopword list for Romanian. \
 * **russian**: Selects the stopword list for Russian. \
 * **sorani**: Selects the stopword list for Sorani. \
 * **spanish**: Selects the stopword list for Spanish. \
 * **swedish**: Selects the stopword list for Swedish. \
 * **thai**: Selects the stopword list for Thai. \
 * **turkish**: Selects the stopword list for Turkish.
 */
export type AzureSearchDocumentsIndexesStopwordsList = string;

/** Matches single or multi-word synonyms in a token stream. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesSynonymTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A list of synonyms in following one of two formats: 1. incredible, unbelievable, fabulous => amazing - all terms on the left side of => symbol will be replaced with all terms on its right side; 2. incredible, unbelievable, fabulous, amazing - comma separated list of equivalent words. Set the expand option to change how this list is interpreted. */
  synonyms: string[];
  /** A value indicating whether to case-fold input for matching. Default is false. */
  ignoreCase?: boolean;
  /** A value indicating whether all words in the list of synonyms (if => notation is not used) will map to one another. If true, all words in the list of synonyms (if => notation is not used) will map to one another. The following list: incredible, unbelievable, fabulous, amazing is equivalent to: incredible, unbelievable, fabulous, amazing => incredible, unbelievable, fabulous, amazing. If false, the following list: incredible, unbelievable, fabulous, amazing will be equivalent to: incredible, unbelievable, fabulous, amazing => incredible. Default is true. */
  expand?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.SynonymTokenFilter";
}

export function azureSearchDocumentsIndexesSynonymTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesSynonymTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    synonyms: item["synonyms"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    expand: item["expand"],
  };
}

export function azureSearchDocumentsIndexesSynonymTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSynonymTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    synonyms: item["synonyms"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    expand: item["expand"],
  };
}

/** Truncates the terms to a specific length. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesTruncateTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** The length at which terms will be truncated. Default and maximum is 300. */
  length?: number;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.TruncateTokenFilter";
}

export function azureSearchDocumentsIndexesTruncateTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesTruncateTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    length: item["length"],
  };
}

export function azureSearchDocumentsIndexesTruncateTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesTruncateTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    length: item["length"],
  };
}

/** Filters out tokens with same text as the previous token. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesUniqueTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A value indicating whether to remove duplicates only at the same position. Default is false. */
  onlyOnSamePosition?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.UniqueTokenFilter";
}

export function azureSearchDocumentsIndexesUniqueTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesUniqueTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    onlyOnSamePosition: item["onlyOnSamePosition"],
  };
}

export function azureSearchDocumentsIndexesUniqueTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesUniqueTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    onlyOnSamePosition: item["onlyOnSamePosition"],
  };
}

/** Splits words into subwords and performs optional transformations on subword groups. This token filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesWordDelimiterTokenFilter
  extends AzureSearchDocumentsIndexesTokenFilter {
  /** A value indicating whether to generate part words. If set, causes parts of words to be generated; for example "AzureSearch" becomes "Azure" "Search". Default is true. */
  generateWordParts?: boolean;
  /** A value indicating whether to generate number subwords. Default is true. */
  generateNumberParts?: boolean;
  /** A value indicating whether maximum runs of word parts will be catenated. For example, if this is set to true, "Azure-Search" becomes "AzureSearch". Default is false. */
  catenateWords?: boolean;
  /** A value indicating whether maximum runs of number parts will be catenated. For example, if this is set to true, "1-2" becomes "12". Default is false. */
  catenateNumbers?: boolean;
  /** A value indicating whether all subword parts will be catenated. For example, if this is set to true, "Azure-Search-1" becomes "AzureSearch1". Default is false. */
  catenateAll?: boolean;
  /** A value indicating whether to split words on caseChange. For example, if this is set to true, "AzureSearch" becomes "Azure" "Search". Default is true. */
  splitOnCaseChange?: boolean;
  /** A value indicating whether original words will be preserved and added to the subword list. Default is false. */
  preserveOriginal?: boolean;
  /** A value indicating whether to split on numbers. For example, if this is set to true, "Azure1Search" becomes "Azure" "1" "Search". Default is true. */
  splitOnNumerics?: boolean;
  /** A value indicating whether to remove trailing "'s" for each subword. Default is true. */
  stemEnglishPossessive?: boolean;
  /** A list of tokens to protect from being delimited. */
  protectedWords?: string[];
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.WordDelimiterTokenFilter";
}

export function azureSearchDocumentsIndexesWordDelimiterTokenFilterSerializer(
  item: AzureSearchDocumentsIndexesWordDelimiterTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    generateWordParts: item["generateWordParts"],
    generateNumberParts: item["generateNumberParts"],
    catenateWords: item["catenateWords"],
    catenateNumbers: item["catenateNumbers"],
    catenateAll: item["catenateAll"],
    splitOnCaseChange: item["splitOnCaseChange"],
    preserveOriginal: item["preserveOriginal"],
    splitOnNumerics: item["splitOnNumerics"],
    stemEnglishPossessive: item["stemEnglishPossessive"],
    protectedWords: !item["protectedWords"]
      ? item["protectedWords"]
      : item["protectedWords"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesWordDelimiterTokenFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesWordDelimiterTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    generateWordParts: item["generateWordParts"],
    generateNumberParts: item["generateNumberParts"],
    catenateWords: item["catenateWords"],
    catenateNumbers: item["catenateNumbers"],
    catenateAll: item["catenateAll"],
    splitOnCaseChange: item["splitOnCaseChange"],
    preserveOriginal: item["preserveOriginal"],
    splitOnNumerics: item["splitOnNumerics"],
    stemEnglishPossessive: item["stemEnglishPossessive"],
    protectedWords: !item["protectedWords"]
      ? item["protectedWords"]
      : item["protectedWords"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesCharFilterUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesCharFilterUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesCharFilterUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesCharFilterUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesCharFilterUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesCharFilterUnionDeserializer(item);
  });
}

/** Base type for character filters. */
export interface AzureSearchDocumentsIndexesCharFilter {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.MappingCharFilter, #Microsoft.Azure.Search.PatternReplaceCharFilter */
  odataType: string;
  /** The name of the char filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters. */
  name: string;
}

export function azureSearchDocumentsIndexesCharFilterSerializer(
  item: AzureSearchDocumentsIndexesCharFilter,
): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function azureSearchDocumentsIndexesCharFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCharFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for CharFilterUnion */
export type CharFilterUnion =
  | AzureSearchDocumentsIndexesMappingCharFilter
  | AzureSearchDocumentsIndexesPatternReplaceCharFilter
  | AzureSearchDocumentsIndexesCharFilter;

export function azureSearchDocumentsIndexesCharFilterUnionSerializer(
  item: CharFilterUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.MappingCharFilter":
      return mappingCharFilterSerializer(item as MappingCharFilter);

    case "#Microsoft.Azure.Search.PatternReplaceCharFilter":
      return patternReplaceCharFilterSerializer(
        item as PatternReplaceCharFilter,
      );

    default:
      return azureSearchDocumentsIndexesCharFilterSerializer(item);
  }
}

export function azureSearchDocumentsIndexesCharFilterUnionDeserializer(
  item: any,
): CharFilterUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.MappingCharFilter":
      return mappingCharFilterDeserializer(item as MappingCharFilter);

    case "#Microsoft.Azure.Search.PatternReplaceCharFilter":
      return patternReplaceCharFilterDeserializer(
        item as PatternReplaceCharFilter,
      );

    default:
      return azureSearchDocumentsIndexesCharFilterDeserializer(item);
  }
}

/** A character filter that applies mappings defined with the mappings option. Matching is greedy (longest pattern matching at a given point wins). Replacement is allowed to be the empty string. This character filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesMappingCharFilter
  extends AzureSearchDocumentsIndexesCharFilter {
  /** A list of mappings of the following format: "a=>b" (all occurrences of the character "a" will be replaced with character "b"). */
  mappings: string[];
  /** A URI fragment specifying the type of char filter. */
  odataType: "#Microsoft.Azure.Search.MappingCharFilter";
}

export function azureSearchDocumentsIndexesMappingCharFilterSerializer(
  item: AzureSearchDocumentsIndexesMappingCharFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    mappings: item["mappings"].map((p: any) => {
      return p;
    }),
  };
}

export function azureSearchDocumentsIndexesMappingCharFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesMappingCharFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    mappings: item["mappings"].map((p: any) => {
      return p;
    }),
  };
}

/** A character filter that replaces characters in the input string. It uses a regular expression to identify character sequences to preserve and a replacement pattern to identify characters to replace. For example, given the input text "aa bb aa bb", pattern "(aa)\s+(bb)", and replacement "$1#$2", the result would be "aa#bb aa#bb". This character filter is implemented using Apache Lucene. */
export interface AzureSearchDocumentsIndexesPatternReplaceCharFilter
  extends AzureSearchDocumentsIndexesCharFilter {
  /** A regular expression pattern. */
  pattern: string;
  /** The replacement text. */
  replacement: string;
  /** A URI fragment specifying the type of char filter. */
  odataType: "#Microsoft.Azure.Search.PatternReplaceCharFilter";
}

export function azureSearchDocumentsIndexesPatternReplaceCharFilterSerializer(
  item: AzureSearchDocumentsIndexesPatternReplaceCharFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

export function azureSearchDocumentsIndexesPatternReplaceCharFilterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPatternReplaceCharFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

export function azureSearchDocumentsIndexesLexicalNormalizerUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesLexicalNormalizerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesLexicalNormalizerUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesLexicalNormalizerUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesLexicalNormalizerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesLexicalNormalizerUnionDeserializer(item);
  });
}

/** Base type for normalizers. */
export interface AzureSearchDocumentsIndexesLexicalNormalizer {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.CustomNormalizer */
  odataType: string;
  /** The name of the char filter. It must only contain letters, digits, spaces, dashes or underscores, can only start and end with alphanumeric characters, and is limited to 128 characters. */
  name: string;
}

export function azureSearchDocumentsIndexesLexicalNormalizerSerializer(
  item: AzureSearchDocumentsIndexesLexicalNormalizer,
): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function azureSearchDocumentsIndexesLexicalNormalizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLexicalNormalizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for LexicalNormalizerUnion */
export type LexicalNormalizerUnion =
  | AzureSearchDocumentsIndexesCustomNormalizer
  | AzureSearchDocumentsIndexesLexicalNormalizer;

export function azureSearchDocumentsIndexesLexicalNormalizerUnionSerializer(
  item: LexicalNormalizerUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomNormalizer":
      return customNormalizerSerializer(item as CustomNormalizer);

    default:
      return azureSearchDocumentsIndexesLexicalNormalizerSerializer(item);
  }
}

export function azureSearchDocumentsIndexesLexicalNormalizerUnionDeserializer(
  item: any,
): LexicalNormalizerUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomNormalizer":
      return customNormalizerDeserializer(item as CustomNormalizer);

    default:
      return azureSearchDocumentsIndexesLexicalNormalizerDeserializer(item);
  }
}

/** Allows you to configure normalization for filterable, sortable, and facetable fields, which by default operate with strict matching. This is a user-defined configuration consisting of at least one or more filters, which modify the token that is stored. */
export interface AzureSearchDocumentsIndexesCustomNormalizer
  extends AzureSearchDocumentsIndexesLexicalNormalizer {
  /** A list of token filters used to filter out or modify the input token. For example, you can specify a lowercase filter that converts all characters to lowercase. The filters are run in the order in which they are listed. */
  tokenFilters?: AzureSearchDocumentsIndexesTokenFilterName[];
  /** A list of character filters used to prepare input text before it is processed. For instance, they can replace certain characters or symbols. The filters are run in the order in which they are listed. */
  charFilters?: AzureSearchDocumentsIndexesCharFilterName[];
  /** A URI fragment specifying the type of normalizer. */
  odataType: "#Microsoft.Azure.Search.CustomNormalizer";
}

export function azureSearchDocumentsIndexesCustomNormalizerSerializer(
  item: AzureSearchDocumentsIndexesCustomNormalizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesCustomNormalizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCustomNormalizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

/** Base type for similarity algorithms. Similarity algorithms are used to calculate scores that tie queries to documents. The higher the score, the more relevant the document is to that specific query. Those scores are used to rank the search results. */
export interface AzureSearchDocumentsIndexesSimilarityAlgorithm {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.ClassicSimilarity, #Microsoft.Azure.Search.BM25Similarity */
  odataType: string;
}

export function azureSearchDocumentsIndexesSimilarityAlgorithmSerializer(
  item: AzureSearchDocumentsIndexesSimilarityAlgorithm,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesSimilarityAlgorithmDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSimilarityAlgorithm {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for SimilarityAlgorithmUnion */
export type SimilarityAlgorithmUnion =
  | AzureSearchDocumentsIndexesClassicSimilarityAlgorithm
  | AzureSearchDocumentsIndexesBM25SimilarityAlgorithm
  | AzureSearchDocumentsIndexesSimilarityAlgorithm;

export function azureSearchDocumentsIndexesSimilarityAlgorithmUnionSerializer(
  item: SimilarityAlgorithmUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicSimilarity":
      return classicSimilarityAlgorithmSerializer(
        item as ClassicSimilarityAlgorithm,
      );

    case "#Microsoft.Azure.Search.BM25Similarity":
      return bm25SimilarityAlgorithmSerializer(item as BM25SimilarityAlgorithm);

    default:
      return azureSearchDocumentsIndexesSimilarityAlgorithmSerializer(item);
  }
}

export function azureSearchDocumentsIndexesSimilarityAlgorithmUnionDeserializer(
  item: any,
): SimilarityAlgorithmUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicSimilarity":
      return classicSimilarityAlgorithmDeserializer(
        item as ClassicSimilarityAlgorithm,
      );

    case "#Microsoft.Azure.Search.BM25Similarity":
      return bm25SimilarityAlgorithmDeserializer(
        item as BM25SimilarityAlgorithm,
      );

    default:
      return azureSearchDocumentsIndexesSimilarityAlgorithmDeserializer(item);
  }
}

/** Legacy similarity algorithm which uses the Lucene TFIDFSimilarity implementation of TF-IDF. This variation of TF-IDF introduces static document length normalization as well as coordinating factors that penalize documents that only partially match the searched queries. */
export interface AzureSearchDocumentsIndexesClassicSimilarityAlgorithm
  extends AzureSearchDocumentsIndexesSimilarityAlgorithm {
  /** The discriminator for derived types. */
  odataType: "#Microsoft.Azure.Search.ClassicSimilarity";
}

export function azureSearchDocumentsIndexesClassicSimilarityAlgorithmSerializer(
  item: AzureSearchDocumentsIndexesClassicSimilarityAlgorithm,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesClassicSimilarityAlgorithmDeserializer(
  item: any,
): AzureSearchDocumentsIndexesClassicSimilarityAlgorithm {
  return {
    odataType: item["@odata.type"],
  };
}

/** Ranking function based on the Okapi BM25 similarity algorithm. BM25 is a TF-IDF-like algorithm that includes length normalization (controlled by the 'b' parameter) as well as term frequency saturation (controlled by the 'k1' parameter). */
export interface AzureSearchDocumentsIndexesBM25SimilarityAlgorithm
  extends AzureSearchDocumentsIndexesSimilarityAlgorithm {
  /** This property controls the scaling function between the term frequency of each matching terms and the final relevance score of a document-query pair. By default, a value of 1.2 is used. A value of 0.0 means the score does not scale with an increase in term frequency. */
  k1?: number;
  /** This property controls how the length of a document affects the relevance score. By default, a value of 0.75 is used. A value of 0.0 means no length normalization is applied, while a value of 1.0 means the score is fully normalized by the length of the document. */
  b?: number;
  /** The discriminator for derived types. */
  odataType: "#Microsoft.Azure.Search.BM25Similarity";
}

export function azureSearchDocumentsIndexesBM25SimilarityAlgorithmSerializer(
  item: AzureSearchDocumentsIndexesBM25SimilarityAlgorithm,
): any {
  return { "@odata.type": item["odataType"], k1: item["k1"], b: item["b"] };
}

export function azureSearchDocumentsIndexesBM25SimilarityAlgorithmDeserializer(
  item: any,
): AzureSearchDocumentsIndexesBM25SimilarityAlgorithm {
  return {
    odataType: item["@odata.type"],
    k1: item["k1"],
    b: item["b"],
  };
}

/** Defines parameters for a search index that influence semantic capabilities. */
export interface AzureSearchDocumentsIndexesSemanticSearch {
  /** Allows you to set the name of a default semantic configuration in your index, making it optional to pass it on as a query parameter every time. */
  defaultConfigurationName?: string;
  /** The semantic configurations for the index. */
  configurations?: AzureSearchDocumentsIndexesSemanticConfiguration[];
}

export function azureSearchDocumentsIndexesSemanticSearchSerializer(
  item: AzureSearchDocumentsIndexesSemanticSearch,
): any {
  return {
    defaultConfiguration: item["defaultConfigurationName"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : azureSearchDocumentsIndexesSemanticConfigurationArraySerializer(
          item["configurations"],
        ),
  };
}

export function azureSearchDocumentsIndexesSemanticSearchDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSemanticSearch {
  return {
    defaultConfigurationName: item["defaultConfiguration"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : azureSearchDocumentsIndexesSemanticConfigurationArrayDeserializer(
          item["configurations"],
        ),
  };
}

export function azureSearchDocumentsIndexesSemanticConfigurationArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSemanticConfiguration>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSemanticConfigurationSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSemanticConfigurationArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSemanticConfiguration>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSemanticConfigurationDeserializer(item);
  });
}

/** Defines a specific configuration to be used in the context of semantic capabilities. */
export interface AzureSearchDocumentsIndexesSemanticConfiguration {
  /** The name of the semantic configuration. */
  name: string;
  /** Describes the title, content, and keyword fields to be used for semantic ranking, captions, highlights, and answers. At least one of the three sub properties (titleField, prioritizedKeywordsFields and prioritizedContentFields) need to be set. */
  prioritizedFields: AzureSearchDocumentsIndexesSemanticPrioritizedFields;
  /** Specifies the score type to be used for the sort order of the search results. */
  rankingOrder?: AzureSearchDocumentsIndexesRankingOrder;
  /** Determines which semantic or query rewrite models to use during model flighting/upgrades. */
  flightingOptIn?: boolean;
}

export function azureSearchDocumentsIndexesSemanticConfigurationSerializer(
  item: AzureSearchDocumentsIndexesSemanticConfiguration,
): any {
  return {
    name: item["name"],
    prioritizedFields:
      azureSearchDocumentsIndexesSemanticPrioritizedFieldsSerializer(
        item["prioritizedFields"],
      ),
    rankingOrder: item["rankingOrder"],
    flightingOptIn: item["flightingOptIn"],
  };
}

export function azureSearchDocumentsIndexesSemanticConfigurationDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSemanticConfiguration {
  return {
    name: item["name"],
    prioritizedFields:
      azureSearchDocumentsIndexesSemanticPrioritizedFieldsDeserializer(
        item["prioritizedFields"],
      ),
    rankingOrder: item["rankingOrder"],
    flightingOptIn: item["flightingOptIn"],
  };
}

/** Describes the title, content, and keywords fields to be used for semantic ranking, captions, highlights, and answers. */
export interface AzureSearchDocumentsIndexesSemanticPrioritizedFields {
  /** Defines the title field to be used for semantic ranking, captions, highlights, and answers. If you don't have a title field in your index, leave this blank. */
  titleField?: AzureSearchDocumentsIndexesSemanticField;
  /** Defines the content fields to be used for semantic ranking, captions, highlights, and answers. For the best result, the selected fields should contain text in natural language form. The order of the fields in the array represents their priority. Fields with lower priority may get truncated if the content is long. */
  contentFields?: AzureSearchDocumentsIndexesSemanticField[];
  /** Defines the keyword fields to be used for semantic ranking, captions, highlights, and answers. For the best result, the selected fields should contain a list of keywords. The order of the fields in the array represents their priority. Fields with lower priority may get truncated if the content is long. */
  keywordsFields?: AzureSearchDocumentsIndexesSemanticField[];
}

export function azureSearchDocumentsIndexesSemanticPrioritizedFieldsSerializer(
  item: AzureSearchDocumentsIndexesSemanticPrioritizedFields,
): any {
  return {
    titleField: !item["titleField"]
      ? item["titleField"]
      : azureSearchDocumentsIndexesSemanticFieldSerializer(item["titleField"]),
    prioritizedContentFields: !item["contentFields"]
      ? item["contentFields"]
      : azureSearchDocumentsIndexesSemanticFieldArraySerializer(
          item["contentFields"],
        ),
    prioritizedKeywordsFields: !item["keywordsFields"]
      ? item["keywordsFields"]
      : azureSearchDocumentsIndexesSemanticFieldArraySerializer(
          item["keywordsFields"],
        ),
  };
}

export function azureSearchDocumentsIndexesSemanticPrioritizedFieldsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSemanticPrioritizedFields {
  return {
    titleField: !item["titleField"]
      ? item["titleField"]
      : azureSearchDocumentsIndexesSemanticFieldDeserializer(
          item["titleField"],
        ),
    contentFields: !item["prioritizedContentFields"]
      ? item["prioritizedContentFields"]
      : azureSearchDocumentsIndexesSemanticFieldArrayDeserializer(
          item["prioritizedContentFields"],
        ),
    keywordsFields: !item["prioritizedKeywordsFields"]
      ? item["prioritizedKeywordsFields"]
      : azureSearchDocumentsIndexesSemanticFieldArrayDeserializer(
          item["prioritizedKeywordsFields"],
        ),
  };
}

/** A field that is used as part of the semantic configuration. */
export interface AzureSearchDocumentsIndexesSemanticField {
  /** File name */
  fieldName: string;
}

export function azureSearchDocumentsIndexesSemanticFieldSerializer(
  item: AzureSearchDocumentsIndexesSemanticField,
): any {
  return { fieldName: item["fieldName"] };
}

export function azureSearchDocumentsIndexesSemanticFieldDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSemanticField {
  return {
    fieldName: item["fieldName"],
  };
}

export function azureSearchDocumentsIndexesSemanticFieldArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSemanticField>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSemanticFieldSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSemanticFieldArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSemanticField>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSemanticFieldDeserializer(item);
  });
}

/** Represents score to use for sort order of documents. */
export enum KnownAzureSearchDocumentsIndexesRankingOrder {
  /** Sets sort order as BoostedRerankerScore */
  BoostedRerankerScore = "BoostedRerankerScore",
  /** Sets sort order as ReRankerScore */
  RerankerScore = "RerankerScore",
}

/**
 * Represents score to use for sort order of documents. \
 * {@link KnownAzureSearchDocumentsIndexesRankingOrder} can be used interchangeably with AzureSearchDocumentsIndexesRankingOrder,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **BoostedRerankerScore**: Sets sort order as BoostedRerankerScore \
 * **RerankerScore**: Sets sort order as ReRankerScore
 */
export type AzureSearchDocumentsIndexesRankingOrder = string;

/** Contains configuration options related to vector search. */
export interface AzureSearchDocumentsIndexesVectorSearch {
  /** Defines combinations of configurations to use with vector search. */
  profiles?: AzureSearchDocumentsIndexesVectorSearchProfile[];
  /** Contains configuration options specific to the algorithm used during indexing or querying. */
  algorithms?: VectorSearchAlgorithmConfigurationUnion[];
  /** Contains configuration options on how to vectorize text vector queries. */
  vectorizers?: VectorSearchVectorizerUnion[];
  /** Contains configuration options specific to the compression method used during indexing or querying. */
  compressions?: VectorSearchCompressionUnion[];
}

export function azureSearchDocumentsIndexesVectorSearchSerializer(
  item: AzureSearchDocumentsIndexesVectorSearch,
): any {
  return {
    profiles: !item["profiles"]
      ? item["profiles"]
      : azureSearchDocumentsIndexesVectorSearchProfileArraySerializer(
          item["profiles"],
        ),
    algorithms: !item["algorithms"]
      ? item["algorithms"]
      : azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionArraySerializer(
          item["algorithms"],
        ),
    vectorizers: !item["vectorizers"]
      ? item["vectorizers"]
      : azureSearchDocumentsIndexesVectorSearchVectorizerUnionArraySerializer(
          item["vectorizers"],
        ),
    compressions: !item["compressions"]
      ? item["compressions"]
      : azureSearchDocumentsIndexesVectorSearchCompressionUnionArraySerializer(
          item["compressions"],
        ),
  };
}

export function azureSearchDocumentsIndexesVectorSearchDeserializer(
  item: any,
): AzureSearchDocumentsIndexesVectorSearch {
  return {
    profiles: !item["profiles"]
      ? item["profiles"]
      : azureSearchDocumentsIndexesVectorSearchProfileArrayDeserializer(
          item["profiles"],
        ),
    algorithms: !item["algorithms"]
      ? item["algorithms"]
      : azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionArrayDeserializer(
          item["algorithms"],
        ),
    vectorizers: !item["vectorizers"]
      ? item["vectorizers"]
      : azureSearchDocumentsIndexesVectorSearchVectorizerUnionArrayDeserializer(
          item["vectorizers"],
        ),
    compressions: !item["compressions"]
      ? item["compressions"]
      : azureSearchDocumentsIndexesVectorSearchCompressionUnionArrayDeserializer(
          item["compressions"],
        ),
  };
}

export function azureSearchDocumentsIndexesVectorSearchProfileArraySerializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchProfile>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchProfileSerializer(item);
  });
}

export function azureSearchDocumentsIndexesVectorSearchProfileArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchProfile>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchProfileDeserializer(item);
  });
}

/** Defines a combination of configurations to use with vector search. */
export interface AzureSearchDocumentsIndexesVectorSearchProfile {
  /** The name to associate with this particular vector search profile. */
  name: string;
  /** The name of the vector search algorithm configuration that specifies the algorithm and optional parameters. */
  algorithmConfigurationName: string;
  /** The name of the vectorization being configured for use with vector search. */
  vectorizerName?: string;
  /** The name of the compression method configuration that specifies the compression method and optional parameters. */
  compressionName?: string;
}

export function azureSearchDocumentsIndexesVectorSearchProfileSerializer(
  item: AzureSearchDocumentsIndexesVectorSearchProfile,
): any {
  return {
    name: item["name"],
    algorithm: item["algorithmConfigurationName"],
    vectorizer: item["vectorizerName"],
    compression: item["compressionName"],
  };
}

export function azureSearchDocumentsIndexesVectorSearchProfileDeserializer(
  item: any,
): AzureSearchDocumentsIndexesVectorSearchProfile {
  return {
    name: item["name"],
    algorithmConfigurationName: item["algorithm"],
    vectorizerName: item["vectorizer"],
    compressionName: item["compression"],
  };
}

export function azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionDeserializer(
      item,
    );
  });
}

/** Contains configuration options specific to the algorithm used during indexing or querying. */
export interface AzureSearchDocumentsIndexesVectorSearchAlgorithmConfiguration {
  /** The name to associate with this particular configuration. */
  name: string;
  /** Type of VectorSearchAlgorithmConfiguration. */
  /** The discriminator possible values: hnsw, exhaustiveKnn */
  kind: AzureSearchDocumentsIndexesVectorSearchAlgorithmKind;
}

export function azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationSerializer(
  item: AzureSearchDocumentsIndexesVectorSearchAlgorithmConfiguration,
): any {
  return { name: item["name"], kind: item["kind"] };
}

export function azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationDeserializer(
  item: any,
): AzureSearchDocumentsIndexesVectorSearchAlgorithmConfiguration {
  return {
    name: item["name"],
    kind: item["kind"],
  };
}

/** Alias for VectorSearchAlgorithmConfigurationUnion */
export type VectorSearchAlgorithmConfigurationUnion =
  | AzureSearchDocumentsIndexesHnswAlgorithmConfiguration
  | AzureSearchDocumentsIndexesExhaustiveKnnAlgorithmConfiguration
  | AzureSearchDocumentsIndexesVectorSearchAlgorithmConfiguration;

export function azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionSerializer(
  item: VectorSearchAlgorithmConfigurationUnion,
): any {
  switch (item.kind) {
    case "hnsw":
      return hnswAlgorithmConfigurationSerializer(
        item as HnswAlgorithmConfiguration,
      );

    case "exhaustiveKnn":
      return exhaustiveKnnAlgorithmConfigurationSerializer(
        item as ExhaustiveKnnAlgorithmConfiguration,
      );

    default:
      return azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationSerializer(
        item,
      );
  }
}

export function azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationUnionDeserializer(
  item: any,
): VectorSearchAlgorithmConfigurationUnion {
  switch (item.kind) {
    case "hnsw":
      return hnswAlgorithmConfigurationDeserializer(
        item as HnswAlgorithmConfiguration,
      );

    case "exhaustiveKnn":
      return exhaustiveKnnAlgorithmConfigurationDeserializer(
        item as ExhaustiveKnnAlgorithmConfiguration,
      );

    default:
      return azureSearchDocumentsIndexesVectorSearchAlgorithmConfigurationDeserializer(
        item,
      );
  }
}

/** The algorithm used for indexing and querying. */
export enum KnownAzureSearchDocumentsIndexesVectorSearchAlgorithmKind {
  /** HNSW (Hierarchical Navigable Small World), a type of approximate nearest neighbors algorithm. */
  Hnsw = "hnsw",
  /** Exhaustive KNN algorithm which will perform brute-force search. */
  ExhaustiveKnn = "exhaustiveKnn",
}

/**
 * The algorithm used for indexing and querying. \
 * {@link KnownAzureSearchDocumentsIndexesVectorSearchAlgorithmKind} can be used interchangeably with AzureSearchDocumentsIndexesVectorSearchAlgorithmKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **hnsw**: HNSW (Hierarchical Navigable Small World), a type of approximate nearest neighbors algorithm. \
 * **exhaustiveKnn**: Exhaustive KNN algorithm which will perform brute-force search.
 */
export type AzureSearchDocumentsIndexesVectorSearchAlgorithmKind = string;

/** Contains configuration options specific to the HNSW approximate nearest neighbors algorithm used during indexing and querying. The HNSW algorithm offers a tunable trade-off between search speed and accuracy. */
export interface AzureSearchDocumentsIndexesHnswAlgorithmConfiguration
  extends AzureSearchDocumentsIndexesVectorSearchAlgorithmConfiguration {
  /** Contains the parameters specific to HNSW algorithm. */
  parameters?: AzureSearchDocumentsIndexesHnswParameters;
  /** The name of the kind of algorithm being configured for use with vector search. */
  kind: "hnsw";
}

export function azureSearchDocumentsIndexesHnswAlgorithmConfigurationSerializer(
  item: AzureSearchDocumentsIndexesHnswAlgorithmConfiguration,
): any {
  return {
    name: item["name"],
    kind: item["kind"],
    hnswParameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesHnswParametersSerializer(item["parameters"]),
  };
}

export function azureSearchDocumentsIndexesHnswAlgorithmConfigurationDeserializer(
  item: any,
): AzureSearchDocumentsIndexesHnswAlgorithmConfiguration {
  return {
    name: item["name"],
    kind: item["kind"],
    parameters: !item["hnswParameters"]
      ? item["hnswParameters"]
      : azureSearchDocumentsIndexesHnswParametersDeserializer(
          item["hnswParameters"],
        ),
  };
}

/** Contains the parameters specific to the HNSW algorithm. */
export interface AzureSearchDocumentsIndexesHnswParameters {
  /** The number of bi-directional links created for every new element during construction. Increasing this parameter value may improve recall and reduce retrieval times for datasets with high intrinsic dimensionality at the expense of increased memory consumption and longer indexing time. */
  m?: number;
  /** The size of the dynamic list containing the nearest neighbors, which is used during index time. Increasing this parameter may improve index quality, at the expense of increased indexing time. At a certain point, increasing this parameter leads to diminishing returns. */
  efConstruction?: number;
  /** The size of the dynamic list containing the nearest neighbors, which is used during search time. Increasing this parameter may improve search results, at the expense of slower search. At a certain point, increasing this parameter leads to diminishing returns. */
  efSearch?: number;
  /** The similarity metric to use for vector comparisons. */
  metric?: AzureSearchDocumentsIndexesVectorSearchAlgorithmMetric;
}

export function azureSearchDocumentsIndexesHnswParametersSerializer(
  item: AzureSearchDocumentsIndexesHnswParameters,
): any {
  return {
    m: item["m"],
    efConstruction: item["efConstruction"],
    efSearch: item["efSearch"],
    metric: item["metric"],
  };
}

export function azureSearchDocumentsIndexesHnswParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesHnswParameters {
  return {
    m: item["m"],
    efConstruction: item["efConstruction"],
    efSearch: item["efSearch"],
    metric: item["metric"],
  };
}

/** The similarity metric to use for vector comparisons. It is recommended to choose the same similarity metric as the embedding model was trained on. */
export enum KnownAzureSearchDocumentsIndexesVectorSearchAlgorithmMetric {
  /** Measures the angle between vectors to quantify their similarity, disregarding magnitude. The smaller the angle, the closer the similarity. */
  Cosine = "cosine",
  /** Computes the straight-line distance between vectors in a multi-dimensional space. The smaller the distance, the closer the similarity. */
  Euclidean = "euclidean",
  /** Calculates the sum of element-wise products to gauge alignment and magnitude similarity. The larger and more positive, the closer the similarity. */
  DotProduct = "dotProduct",
  /** Only applicable to bit-packed binary data types. Determines dissimilarity by counting differing positions in binary vectors. The fewer differences, the closer the similarity. */
  Hamming = "hamming",
}

/**
 * The similarity metric to use for vector comparisons. It is recommended to choose the same similarity metric as the embedding model was trained on. \
 * {@link KnownAzureSearchDocumentsIndexesVectorSearchAlgorithmMetric} can be used interchangeably with AzureSearchDocumentsIndexesVectorSearchAlgorithmMetric,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **cosine**: Measures the angle between vectors to quantify their similarity, disregarding magnitude. The smaller the angle, the closer the similarity. \
 * **euclidean**: Computes the straight-line distance between vectors in a multi-dimensional space. The smaller the distance, the closer the similarity. \
 * **dotProduct**: Calculates the sum of element-wise products to gauge alignment and magnitude similarity. The larger and more positive, the closer the similarity. \
 * **hamming**: Only applicable to bit-packed binary data types. Determines dissimilarity by counting differing positions in binary vectors. The fewer differences, the closer the similarity.
 */
export type AzureSearchDocumentsIndexesVectorSearchAlgorithmMetric = string;

/** Contains configuration options specific to the exhaustive KNN algorithm used during querying, which will perform brute-force search across the entire vector index. */
export interface AzureSearchDocumentsIndexesExhaustiveKnnAlgorithmConfiguration
  extends AzureSearchDocumentsIndexesVectorSearchAlgorithmConfiguration {
  /** Contains the parameters specific to exhaustive KNN algorithm. */
  parameters?: AzureSearchDocumentsIndexesExhaustiveKnnParameters;
  /** The name of the kind of algorithm being configured for use with vector search. */
  kind: "exhaustiveKnn";
}

export function azureSearchDocumentsIndexesExhaustiveKnnAlgorithmConfigurationSerializer(
  item: AzureSearchDocumentsIndexesExhaustiveKnnAlgorithmConfiguration,
): any {
  return {
    name: item["name"],
    kind: item["kind"],
    exhaustiveKnnParameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesExhaustiveKnnParametersSerializer(
          item["parameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesExhaustiveKnnAlgorithmConfigurationDeserializer(
  item: any,
): AzureSearchDocumentsIndexesExhaustiveKnnAlgorithmConfiguration {
  return {
    name: item["name"],
    kind: item["kind"],
    parameters: !item["exhaustiveKnnParameters"]
      ? item["exhaustiveKnnParameters"]
      : azureSearchDocumentsIndexesExhaustiveKnnParametersDeserializer(
          item["exhaustiveKnnParameters"],
        ),
  };
}

/** Contains the parameters specific to exhaustive KNN algorithm. */
export interface AzureSearchDocumentsIndexesExhaustiveKnnParameters {
  /** The similarity metric to use for vector comparisons. */
  metric?: AzureSearchDocumentsIndexesVectorSearchAlgorithmMetric;
}

export function azureSearchDocumentsIndexesExhaustiveKnnParametersSerializer(
  item: AzureSearchDocumentsIndexesExhaustiveKnnParameters,
): any {
  return { metric: item["metric"] };
}

export function azureSearchDocumentsIndexesExhaustiveKnnParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesExhaustiveKnnParameters {
  return {
    metric: item["metric"],
  };
}

export function azureSearchDocumentsIndexesVectorSearchVectorizerUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchVectorizerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchVectorizerUnionSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesVectorSearchVectorizerUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchVectorizerUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchVectorizerUnionDeserializer(
      item,
    );
  });
}

/** Specifies the vectorization method to be used during query time. */
export interface AzureSearchDocumentsIndexesVectorSearchVectorizer {
  /** The name to associate with this particular vectorization method. */
  vectorizerName: string;
  /** Type of VectorSearchVectorizer. */
  /** The discriminator possible values: azureOpenAI, customWebApi, aiServicesVision, aml */
  kind: AzureSearchDocumentsIndexesVectorSearchVectorizerKind;
}

export function azureSearchDocumentsIndexesVectorSearchVectorizerSerializer(
  item: AzureSearchDocumentsIndexesVectorSearchVectorizer,
): any {
  return { name: item["vectorizerName"], kind: item["kind"] };
}

export function azureSearchDocumentsIndexesVectorSearchVectorizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesVectorSearchVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
  };
}

/** Alias for VectorSearchVectorizerUnion */
export type VectorSearchVectorizerUnion =
  | AzureSearchDocumentsIndexesAzureOpenAIVectorizer
  | AzureSearchDocumentsIndexesWebApiVectorizer
  | AzureSearchDocumentsIndexesAIServicesVisionVectorizer
  | AzureSearchDocumentsIndexesAzureMachineLearningVectorizer
  | AzureSearchDocumentsIndexesVectorSearchVectorizer;

export function azureSearchDocumentsIndexesVectorSearchVectorizerUnionSerializer(
  item: VectorSearchVectorizerUnion,
): any {
  switch (item.kind) {
    case "azureOpenAI":
      return azureOpenAIVectorizerSerializer(item as AzureOpenAIVectorizer);

    case "customWebApi":
      return webApiVectorizerSerializer(item as WebApiVectorizer);

    case "aiServicesVision":
      return aiServicesVisionVectorizerSerializer(
        item as AIServicesVisionVectorizer,
      );

    case "aml":
      return azureMachineLearningVectorizerSerializer(
        item as AzureMachineLearningVectorizer,
      );

    default:
      return azureSearchDocumentsIndexesVectorSearchVectorizerSerializer(item);
  }
}

export function azureSearchDocumentsIndexesVectorSearchVectorizerUnionDeserializer(
  item: any,
): VectorSearchVectorizerUnion {
  switch (item.kind) {
    case "azureOpenAI":
      return azureOpenAIVectorizerDeserializer(item as AzureOpenAIVectorizer);

    case "customWebApi":
      return webApiVectorizerDeserializer(item as WebApiVectorizer);

    case "aiServicesVision":
      return aiServicesVisionVectorizerDeserializer(
        item as AIServicesVisionVectorizer,
      );

    case "aml":
      return azureMachineLearningVectorizerDeserializer(
        item as AzureMachineLearningVectorizer,
      );

    default:
      return azureSearchDocumentsIndexesVectorSearchVectorizerDeserializer(
        item,
      );
  }
}

/** The vectorization method to be used during query time. */
export enum KnownAzureSearchDocumentsIndexesVectorSearchVectorizerKind {
  /** Generate embeddings using an Azure OpenAI resource at query time. */
  AzureOpenAI = "azureOpenAI",
  /** Generate embeddings using a custom web endpoint at query time. */
  CustomWebApi = "customWebApi",
  /** Generate embeddings for an image or text input at query time using the Azure AI Services Vision Vectorize API. */
  AIServicesVision = "aiServicesVision",
  /** Generate embeddings using an Azure Machine Learning endpoint deployed via the Azure AI Foundry Model Catalog at query time. */
  AML = "aml",
}

/**
 * The vectorization method to be used during query time. \
 * {@link KnownAzureSearchDocumentsIndexesVectorSearchVectorizerKind} can be used interchangeably with AzureSearchDocumentsIndexesVectorSearchVectorizerKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **azureOpenAI**: Generate embeddings using an Azure OpenAI resource at query time. \
 * **customWebApi**: Generate embeddings using a custom web endpoint at query time. \
 * **aiServicesVision**: Generate embeddings for an image or text input at query time using the Azure AI Services Vision Vectorize API. \
 * **aml**: Generate embeddings using an Azure Machine Learning endpoint deployed via the Azure AI Foundry Model Catalog at query time.
 */
export type AzureSearchDocumentsIndexesVectorSearchVectorizerKind = string;

/** Specifies the Azure OpenAI resource used to vectorize a query string. */
export interface AzureSearchDocumentsIndexesAzureOpenAIVectorizer
  extends AzureSearchDocumentsIndexesVectorSearchVectorizer {
  /** Contains the parameters specific to Azure OpenAI embedding vectorization. */
  parameters?: AzureSearchDocumentsIndexesAzureOpenAIVectorizerParameters;
  /** The name of the kind of vectorization method being configured for use with vector search. */
  kind: "azureOpenAI";
}

export function azureSearchDocumentsIndexesAzureOpenAIVectorizerSerializer(
  item: AzureSearchDocumentsIndexesAzureOpenAIVectorizer,
): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    azureOpenAIParameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesAzureOpenAIVectorizerParametersSerializer(
          item["parameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesAzureOpenAIVectorizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureOpenAIVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    parameters: !item["azureOpenAIParameters"]
      ? item["azureOpenAIParameters"]
      : azureSearchDocumentsIndexesAzureOpenAIVectorizerParametersDeserializer(
          item["azureOpenAIParameters"],
        ),
  };
}

/** Specifies the parameters for connecting to the Azure OpenAI resource. */
export interface AzureSearchDocumentsIndexesAzureOpenAIVectorizerParameters {
  /** The resource URI of the Azure OpenAI resource. */
  resourceUrl?: string;
  /** ID of the Azure OpenAI model deployment on the designated resource. */
  deploymentName?: string;
  /** API key of the designated Azure OpenAI resource. */
  apiKey?: string;
  /** The user-assigned managed identity used for outbound connections. */
  authIdentity?: SearchIndexerDataIdentityUnion;
  /** The name of the embedding model that is deployed at the provided deploymentId path. */
  modelName?: AzureSearchDocumentsIndexesAzureOpenAIModelName;
}

export function azureSearchDocumentsIndexesAzureOpenAIVectorizerParametersSerializer(
  item: AzureSearchDocumentsIndexesAzureOpenAIVectorizerParameters,
): any {
  return {
    resourceUri: item["resourceUrl"],
    deploymentId: item["deploymentName"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["authIdentity"],
        ),
    modelName: item["modelName"],
  };
}

export function azureSearchDocumentsIndexesAzureOpenAIVectorizerParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureOpenAIVectorizerParameters {
  return {
    resourceUrl: item["resourceUri"],
    deploymentName: item["deploymentId"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["authIdentity"],
        ),
    modelName: item["modelName"],
  };
}

/** The Azure Open AI model name that will be called. */
export enum KnownAzureSearchDocumentsIndexesAzureOpenAIModelName {
  /** TextEmbeddingAda002 model. */
  TextEmbeddingAda002 = "text-embedding-ada-002",
  /** TextEmbedding3Large model. */
  TextEmbedding3Large = "text-embedding-3-large",
  /** TextEmbedding3Small model. */
  TextEmbedding3Small = "text-embedding-3-small",
}

/**
 * The Azure Open AI model name that will be called. \
 * {@link KnownAzureSearchDocumentsIndexesAzureOpenAIModelName} can be used interchangeably with AzureSearchDocumentsIndexesAzureOpenAIModelName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **text-embedding-ada-002**: TextEmbeddingAda002 model. \
 * **text-embedding-3-large**: TextEmbedding3Large model. \
 * **text-embedding-3-small**: TextEmbedding3Small model.
 */
export type AzureSearchDocumentsIndexesAzureOpenAIModelName = string;

/** Specifies a user-defined vectorizer for generating the vector embedding of a query string. Integration of an external vectorizer is achieved using the custom Web API interface of a skillset. */
export interface AzureSearchDocumentsIndexesWebApiVectorizer
  extends AzureSearchDocumentsIndexesVectorSearchVectorizer {
  /** Specifies the properties of the user-defined vectorizer. */
  webApiParameters?: AzureSearchDocumentsIndexesWebApiVectorizerParameters;
  /** The name of the kind of vectorization method being configured for use with vector search. */
  kind: "customWebApi";
}

export function azureSearchDocumentsIndexesWebApiVectorizerSerializer(
  item: AzureSearchDocumentsIndexesWebApiVectorizer,
): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    customWebApiParameters: !item["webApiParameters"]
      ? item["webApiParameters"]
      : azureSearchDocumentsIndexesWebApiVectorizerParametersSerializer(
          item["webApiParameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesWebApiVectorizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesWebApiVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    webApiParameters: !item["customWebApiParameters"]
      ? item["customWebApiParameters"]
      : azureSearchDocumentsIndexesWebApiVectorizerParametersDeserializer(
          item["customWebApiParameters"],
        ),
  };
}

/** Specifies the properties for connecting to a user-defined vectorizer. */
export interface AzureSearchDocumentsIndexesWebApiVectorizerParameters {
  /** The URI of the Web API providing the vectorizer. */
  url?: string;
  /** The headers required to make the HTTP request. */
  httpHeaders?: Record<string, string>;
  /** The method for the HTTP request. */
  httpMethod?: string;
  /** The desired timeout for the request. Default is 30 seconds. */
  timeout?: string;
  /** Applies to custom endpoints that connect to external code in an Azure function or some other application that provides the transformations. This value should be the application ID created for the function or app when it was registered with Azure Active Directory. When specified, the vectorization connects to the function or app using a managed ID (either system or user-assigned) of the search service and the access token of the function or app, using this value as the resource id for creating the scope of the access token. */
  authResourceId?: string;
  /** The user-assigned managed identity used for outbound connections. If an authResourceId is provided and it's not specified, the system-assigned managed identity is used. On updates to the indexer, if the identity is unspecified, the value remains unchanged. If set to "none", the value of this property is cleared. */
  authIdentity?: SearchIndexerDataIdentityUnion;
}

export function azureSearchDocumentsIndexesWebApiVectorizerParametersSerializer(
  item: AzureSearchDocumentsIndexesWebApiVectorizerParameters,
): any {
  return {
    uri: item["url"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["authIdentity"],
        ),
  };
}

export function azureSearchDocumentsIndexesWebApiVectorizerParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesWebApiVectorizerParameters {
  return {
    url: item["uri"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["authIdentity"],
        ),
  };
}

/** Clears the identity property of a datasource. */
export interface AzureSearchDocumentsIndexesAIServicesVisionVectorizer
  extends AzureSearchDocumentsIndexesVectorSearchVectorizer {
  /** Contains the parameters specific to AI Services Vision embedding vectorization. */
  aiServicesVisionParameters?: AzureSearchDocumentsIndexesAIServicesVisionParameters;
  /** The name of the kind of vectorization method being configured for use with vector search. */
  kind: "aiServicesVision";
}

export function azureSearchDocumentsIndexesAIServicesVisionVectorizerSerializer(
  item: AzureSearchDocumentsIndexesAIServicesVisionVectorizer,
): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    AIServicesVisionParameters: !item["aiServicesVisionParameters"]
      ? item["aiServicesVisionParameters"]
      : azureSearchDocumentsIndexesAIServicesVisionParametersSerializer(
          item["aiServicesVisionParameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesAIServicesVisionVectorizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAIServicesVisionVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    aiServicesVisionParameters: !item["AIServicesVisionParameters"]
      ? item["AIServicesVisionParameters"]
      : azureSearchDocumentsIndexesAIServicesVisionParametersDeserializer(
          item["AIServicesVisionParameters"],
        ),
  };
}

/** Specifies the AI Services Vision parameters for vectorizing a query image or text. */
export interface AzureSearchDocumentsIndexesAIServicesVisionParameters {
  /** The version of the model to use when calling the AI Services Vision service. It will default to the latest available when not specified. */
  modelVersion: string;
  /** The resource URI of the AI Services resource. */
  resourceUri: string;
  /** API key of the designated AI Services resource. */
  apiKey?: string;
  /** The user-assigned managed identity used for outbound connections. If an authResourceId is provided and it's not specified, the system-assigned managed identity is used. On updates to the index, if the identity is unspecified, the value remains unchanged. If set to "none", the value of this property is cleared. */
  authIdentity?: SearchIndexerDataIdentityUnion;
}

export function azureSearchDocumentsIndexesAIServicesVisionParametersSerializer(
  item: AzureSearchDocumentsIndexesAIServicesVisionParameters,
): any {
  return {
    modelVersion: item["modelVersion"],
    resourceUri: item["resourceUri"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["authIdentity"],
        ),
  };
}

export function azureSearchDocumentsIndexesAIServicesVisionParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAIServicesVisionParameters {
  return {
    modelVersion: item["modelVersion"],
    resourceUri: item["resourceUri"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["authIdentity"],
        ),
  };
}

/** Specifies an Azure Machine Learning endpoint deployed via the Azure AI Foundry Model Catalog for generating the vector embedding of a query string. */
export interface AzureSearchDocumentsIndexesAzureMachineLearningVectorizer
  extends AzureSearchDocumentsIndexesVectorSearchVectorizer {
  /** Specifies the properties of the AML vectorizer. */
  amlParameters?: AzureSearchDocumentsIndexesAzureMachineLearningParameters;
  /** The name of the kind of vectorization method being configured for use with vector search. */
  kind: "aml";
}

export function azureSearchDocumentsIndexesAzureMachineLearningVectorizerSerializer(
  item: AzureSearchDocumentsIndexesAzureMachineLearningVectorizer,
): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    amlParameters: !item["amlParameters"]
      ? item["amlParameters"]
      : azureSearchDocumentsIndexesAzureMachineLearningParametersSerializer(
          item["amlParameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesAzureMachineLearningVectorizerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureMachineLearningVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    amlParameters: !item["amlParameters"]
      ? item["amlParameters"]
      : azureSearchDocumentsIndexesAzureMachineLearningParametersDeserializer(
          item["amlParameters"],
        ),
  };
}

/** Specifies the properties for connecting to an AML vectorizer. */
export interface AzureSearchDocumentsIndexesAzureMachineLearningParameters {
  /** (Required for no authentication or key authentication) The scoring URI of the AML service to which the JSON payload will be sent. Only the https URI scheme is allowed. */
  scoringUri: string;
  /** (Required for key authentication) The key for the AML service. */
  authenticationKey?: string;
  /** (Required for token authentication). The Azure Resource Manager resource ID of the AML service. It should be in the format subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.MachineLearningServices/workspaces/{workspace-name}/services/{service_name}. */
  resourceId?: string;
  /** (Optional) When specified, indicates the timeout for the http client making the API call. */
  timeout?: string;
  /** (Optional for token authentication). The region the AML service is deployed in. */
  region?: string;
  /** The name of the embedding model from the Azure AI Foundry Catalog that is deployed at the provided endpoint. */
  modelName?: AzureSearchDocumentsIndexesAIFoundryModelCatalogName;
}

export function azureSearchDocumentsIndexesAzureMachineLearningParametersSerializer(
  item: AzureSearchDocumentsIndexesAzureMachineLearningParameters,
): any {
  return {
    uri: item["scoringUri"],
    key: item["authenticationKey"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    modelName: item["modelName"],
  };
}

export function azureSearchDocumentsIndexesAzureMachineLearningParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureMachineLearningParameters {
  return {
    scoringUri: item["uri"],
    authenticationKey: item["key"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    modelName: item["modelName"],
  };
}

/** The name of the embedding model from the Azure AI Foundry Catalog that will be called. */
export enum KnownAzureSearchDocumentsIndexesAIFoundryModelCatalogName {
  /** OpenAI-CLIP-Image-Text-Embeddings-vit-base-patch32 */
  OpenAiclipImageTextEmbeddingsVitBasePatch32 = "OpenAI-CLIP-Image-Text-Embeddings-vit-base-patch32",
  /** OpenAI-CLIP-Image-Text-Embeddings-ViT-Large-Patch14-336 */
  OpenAiclipImageTextEmbeddingsViTLargePatch14336 = "OpenAI-CLIP-Image-Text-Embeddings-ViT-Large-Patch14-336",
  /** Facebook-DinoV2-Image-Embeddings-ViT-Base */
  FacebookDinoV2ImageEmbeddingsViTBase = "Facebook-DinoV2-Image-Embeddings-ViT-Base",
  /** Facebook-DinoV2-Image-Embeddings-ViT-Giant */
  FacebookDinoV2ImageEmbeddingsViTGiant = "Facebook-DinoV2-Image-Embeddings-ViT-Giant",
  /** Cohere-embed-v3-english */
  CohereEmbedV3English = "Cohere-embed-v3-english",
  /** Cohere-embed-v3-multilingual */
  CohereEmbedV3Multilingual = "Cohere-embed-v3-multilingual",
}

/**
 * The name of the embedding model from the Azure AI Foundry Catalog that will be called. \
 * {@link KnownAzureSearchDocumentsIndexesAIFoundryModelCatalogName} can be used interchangeably with AzureSearchDocumentsIndexesAIFoundryModelCatalogName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **OpenAI-CLIP-Image-Text-Embeddings-vit-base-patch32**: OpenAI-CLIP-Image-Text-Embeddings-vit-base-patch32 \
 * **OpenAI-CLIP-Image-Text-Embeddings-ViT-Large-Patch14-336**: OpenAI-CLIP-Image-Text-Embeddings-ViT-Large-Patch14-336 \
 * **Facebook-DinoV2-Image-Embeddings-ViT-Base**: Facebook-DinoV2-Image-Embeddings-ViT-Base \
 * **Facebook-DinoV2-Image-Embeddings-ViT-Giant**: Facebook-DinoV2-Image-Embeddings-ViT-Giant \
 * **Cohere-embed-v3-english**: Cohere-embed-v3-english \
 * **Cohere-embed-v3-multilingual**: Cohere-embed-v3-multilingual
 */
export type AzureSearchDocumentsIndexesAIFoundryModelCatalogName = string;

export function azureSearchDocumentsIndexesVectorSearchCompressionUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchCompressionUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchCompressionUnionSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesVectorSearchCompressionUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesVectorSearchCompressionUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesVectorSearchCompressionUnionDeserializer(
      item,
    );
  });
}

/** Contains configuration options specific to the compression method used during indexing or querying. */
export interface AzureSearchDocumentsIndexesVectorSearchCompression {
  /** The name to associate with this particular configuration. */
  compressionName: string;
  /** If set to true, once the ordered set of results calculated using compressed vectors are obtained, they will be reranked again by recalculating the full-precision similarity scores. This will improve recall at the expense of latency. */
  rerankWithOriginalVectors?: boolean;
  /** Default oversampling factor. Oversampling will internally request more documents (specified by this multiplier) in the initial search. This increases the set of results that will be reranked using recomputed similarity scores from full-precision vectors. Minimum value is 1, meaning no oversampling (1x). This parameter can only be set when rerankWithOriginalVectors is true. Higher values improve recall at the expense of latency. */
  defaultOversampling?: number;
  /** Contains the options for rescoring. */
  rescoringOptions?: AzureSearchDocumentsIndexesRescoringOptions;
  /** The number of dimensions to truncate the vectors to. Truncating the vectors reduces the size of the vectors and the amount of data that needs to be transferred during search. This can save storage cost and improve search performance at the expense of recall. It should be only used for embeddings trained with Matryoshka Representation Learning (MRL) such as OpenAI text-embedding-3-large (small). The default value is null, which means no truncation. */
  truncationDimension?: number;
  /** Type of VectorSearchCompression. */
  /** The discriminator possible values: scalarQuantization, binaryQuantization */
  kind: AzureSearchDocumentsIndexesVectorSearchCompressionKind;
}

export function azureSearchDocumentsIndexesVectorSearchCompressionSerializer(
  item: AzureSearchDocumentsIndexesVectorSearchCompression,
): any {
  return {
    name: item["compressionName"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : azureSearchDocumentsIndexesRescoringOptionsSerializer(
          item["rescoringOptions"],
        ),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

export function azureSearchDocumentsIndexesVectorSearchCompressionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesVectorSearchCompression {
  return {
    compressionName: item["name"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : azureSearchDocumentsIndexesRescoringOptionsDeserializer(
          item["rescoringOptions"],
        ),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

/** Alias for VectorSearchCompressionUnion */
export type VectorSearchCompressionUnion =
  | AzureSearchDocumentsIndexesScalarQuantizationCompression
  | AzureSearchDocumentsIndexesBinaryQuantizationCompression
  | AzureSearchDocumentsIndexesVectorSearchCompression;

export function azureSearchDocumentsIndexesVectorSearchCompressionUnionSerializer(
  item: VectorSearchCompressionUnion,
): any {
  switch (item.kind) {
    case "scalarQuantization":
      return scalarQuantizationCompressionSerializer(
        item as ScalarQuantizationCompression,
      );

    case "binaryQuantization":
      return binaryQuantizationCompressionSerializer(
        item as BinaryQuantizationCompression,
      );

    default:
      return azureSearchDocumentsIndexesVectorSearchCompressionSerializer(item);
  }
}

export function azureSearchDocumentsIndexesVectorSearchCompressionUnionDeserializer(
  item: any,
): VectorSearchCompressionUnion {
  switch (item.kind) {
    case "scalarQuantization":
      return scalarQuantizationCompressionDeserializer(
        item as ScalarQuantizationCompression,
      );

    case "binaryQuantization":
      return binaryQuantizationCompressionDeserializer(
        item as BinaryQuantizationCompression,
      );

    default:
      return azureSearchDocumentsIndexesVectorSearchCompressionDeserializer(
        item,
      );
  }
}

/** Contains the options for rescoring. */
export interface AzureSearchDocumentsIndexesRescoringOptions {
  /** If set to true, after the initial search on the compressed vectors, the similarity scores are recalculated using the full-precision vectors. This will improve recall at the expense of latency. */
  enableRescoring?: boolean;
  /** Default oversampling factor. Oversampling retrieves a greater set of potential documents to offset the resolution loss due to quantization. This increases the set of results that will be rescored on full-precision vectors. Minimum value is 1, meaning no oversampling (1x). This parameter can only be set when 'enableRescoring' is true. Higher values improve recall at the expense of latency. */
  defaultOversampling?: number;
  /** Controls the storage method for original vectors. This setting is immutable. */
  rescoreStorageMethod?: AzureSearchDocumentsIndexesVectorSearchCompressionRescoreStorageMethod;
}

export function azureSearchDocumentsIndexesRescoringOptionsSerializer(
  item: AzureSearchDocumentsIndexesRescoringOptions,
): any {
  return {
    enableRescoring: item["enableRescoring"],
    defaultOversampling: item["defaultOversampling"],
    rescoreStorageMethod: item["rescoreStorageMethod"],
  };
}

export function azureSearchDocumentsIndexesRescoringOptionsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesRescoringOptions {
  return {
    enableRescoring: item["enableRescoring"],
    defaultOversampling: item["defaultOversampling"],
    rescoreStorageMethod: item["rescoreStorageMethod"],
  };
}

/** The storage method for the original full-precision vectors used for rescoring and internal index operations. */
export enum KnownAzureSearchDocumentsIndexesVectorSearchCompressionRescoreStorageMethod {
  /** This option preserves the original full-precision vectors. Choose this option for maximum flexibility and highest quality of compressed search results. This consumes more storage but allows for rescoring and oversampling. */
  PreserveOriginals = "preserveOriginals",
  /** This option discards the original full-precision vectors. Choose this option for maximum storage savings. Since this option does not allow for rescoring and oversampling, it will often cause slight to moderate reductions in quality. */
  DiscardOriginals = "discardOriginals",
}

/**
 * The storage method for the original full-precision vectors used for rescoring and internal index operations. \
 * {@link KnownAzureSearchDocumentsIndexesVectorSearchCompressionRescoreStorageMethod} can be used interchangeably with AzureSearchDocumentsIndexesVectorSearchCompressionRescoreStorageMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **preserveOriginals**: This option preserves the original full-precision vectors. Choose this option for maximum flexibility and highest quality of compressed search results. This consumes more storage but allows for rescoring and oversampling. \
 * **discardOriginals**: This option discards the original full-precision vectors. Choose this option for maximum storage savings. Since this option does not allow for rescoring and oversampling, it will often cause slight to moderate reductions in quality.
 */
export type AzureSearchDocumentsIndexesVectorSearchCompressionRescoreStorageMethod =
  string;

/** The compression method used for indexing and querying. */
export enum KnownAzureSearchDocumentsIndexesVectorSearchCompressionKind {
  /** Scalar Quantization, a type of compression method. In scalar quantization, the original vectors values are compressed to a narrower type by discretizing and representing each component of a vector using a reduced set of quantized values, thereby reducing the overall data size. */
  ScalarQuantization = "scalarQuantization",
  /** Binary Quantization, a type of compression method. In binary quantization, the original vectors values are compressed to the narrower binary type by discretizing and representing each component of a vector using binary values, thereby reducing the overall data size. */
  BinaryQuantization = "binaryQuantization",
}

/**
 * The compression method used for indexing and querying. \
 * {@link KnownAzureSearchDocumentsIndexesVectorSearchCompressionKind} can be used interchangeably with AzureSearchDocumentsIndexesVectorSearchCompressionKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **scalarQuantization**: Scalar Quantization, a type of compression method. In scalar quantization, the original vectors values are compressed to a narrower type by discretizing and representing each component of a vector using a reduced set of quantized values, thereby reducing the overall data size. \
 * **binaryQuantization**: Binary Quantization, a type of compression method. In binary quantization, the original vectors values are compressed to the narrower binary type by discretizing and representing each component of a vector using binary values, thereby reducing the overall data size.
 */
export type AzureSearchDocumentsIndexesVectorSearchCompressionKind = string;

/** Contains configuration options specific to the scalar quantization compression method used during indexing and querying. */
export interface AzureSearchDocumentsIndexesScalarQuantizationCompression
  extends AzureSearchDocumentsIndexesVectorSearchCompression {
  /** Contains the parameters specific to Scalar Quantization. */
  parameters?: AzureSearchDocumentsIndexesScalarQuantizationParameters;
  /** The name of the kind of compression method being configured for use with vector search. */
  kind: "scalarQuantization";
}

export function azureSearchDocumentsIndexesScalarQuantizationCompressionSerializer(
  item: AzureSearchDocumentsIndexesScalarQuantizationCompression,
): any {
  return {
    name: item["compressionName"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : azureSearchDocumentsIndexesRescoringOptionsSerializer(
          item["rescoringOptions"],
        ),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
    scalarQuantizationParameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesScalarQuantizationParametersSerializer(
          item["parameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesScalarQuantizationCompressionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesScalarQuantizationCompression {
  return {
    compressionName: item["name"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : azureSearchDocumentsIndexesRescoringOptionsDeserializer(
          item["rescoringOptions"],
        ),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
    parameters: !item["scalarQuantizationParameters"]
      ? item["scalarQuantizationParameters"]
      : azureSearchDocumentsIndexesScalarQuantizationParametersDeserializer(
          item["scalarQuantizationParameters"],
        ),
  };
}

/** Contains the parameters specific to Scalar Quantization. */
export interface AzureSearchDocumentsIndexesScalarQuantizationParameters {
  /** The quantized data type of compressed vector values. */
  quantizedDataType?: AzureSearchDocumentsIndexesVectorSearchCompressionTarget;
}

export function azureSearchDocumentsIndexesScalarQuantizationParametersSerializer(
  item: AzureSearchDocumentsIndexesScalarQuantizationParameters,
): any {
  return { quantizedDataType: item["quantizedDataType"] };
}

export function azureSearchDocumentsIndexesScalarQuantizationParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesScalarQuantizationParameters {
  return {
    quantizedDataType: item["quantizedDataType"],
  };
}

/** The quantized data type of compressed vector values. */
export enum KnownAzureSearchDocumentsIndexesVectorSearchCompressionTarget {
  /** 8-bit signed integer. */
  Int8 = "int8",
}

/**
 * The quantized data type of compressed vector values. \
 * {@link KnownAzureSearchDocumentsIndexesVectorSearchCompressionTarget} can be used interchangeably with AzureSearchDocumentsIndexesVectorSearchCompressionTarget,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **int8**: 8-bit signed integer.
 */
export type AzureSearchDocumentsIndexesVectorSearchCompressionTarget = string;

/** Contains configuration options specific to the binary quantization compression method used during indexing and querying. */
export interface AzureSearchDocumentsIndexesBinaryQuantizationCompression
  extends AzureSearchDocumentsIndexesVectorSearchCompression {
  /** The name of the kind of compression method being configured for use with vector search. */
  kind: "binaryQuantization";
}

export function azureSearchDocumentsIndexesBinaryQuantizationCompressionSerializer(
  item: AzureSearchDocumentsIndexesBinaryQuantizationCompression,
): any {
  return {
    name: item["compressionName"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : azureSearchDocumentsIndexesRescoringOptionsSerializer(
          item["rescoringOptions"],
        ),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

export function azureSearchDocumentsIndexesBinaryQuantizationCompressionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesBinaryQuantizationCompression {
  return {
    compressionName: item["name"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : azureSearchDocumentsIndexesRescoringOptionsDeserializer(
          item["rescoringOptions"],
        ),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

/** A value indicating whether permission filtering is enabled for the index. */
export enum KnownAzureSearchDocumentsIndexesSearchIndexPermissionFilterOption {
  /** enabled. */
  Enabled = "enabled",
  /** disabled. */
  Disabled = "disabled",
}

/**
 * A value indicating whether permission filtering is enabled for the index. \
 * {@link KnownAzureSearchDocumentsIndexesSearchIndexPermissionFilterOption} can be used interchangeably with AzureSearchDocumentsIndexesSearchIndexPermissionFilterOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **enabled**: enabled. \
 * **disabled**: disabled.
 */
export type AzureSearchDocumentsIndexesSearchIndexPermissionFilterOption =
  string;

/** Response from a List Indexes request. If successful, it includes the full definitions of all indexes. */
export interface _AzureSearchDocumentsIndexesListIndexesResult {
  /** The indexes in the Search service. */
  readonly indexes: AzureSearchDocumentsIndexesSearchIndex[];
}

export function _azureSearchDocumentsIndexesListIndexesResultDeserializer(
  item: any,
): _AzureSearchDocumentsIndexesListIndexesResult {
  return {
    indexes: azureSearchDocumentsIndexesSearchIndexArrayDeserializer(
      item["value"],
    ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndex>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSearchIndexArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndex>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexDeserializer(item);
  });
}

/** Statistics for a given index. Statistics are collected periodically and are not guaranteed to always be up-to-date. */
export interface AzureSearchDocumentsIndexesGetIndexStatisticsResult {
  /** The number of documents in the index. */
  documentCount: number;
  /** The amount of storage in bytes consumed by the index. */
  storageSize: number;
  /** The amount of memory in bytes consumed by vectors in the index. */
  vectorIndexSize: number;
}

export function azureSearchDocumentsIndexesGetIndexStatisticsResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexesGetIndexStatisticsResult {
  return {
    documentCount: item["documentCount"],
    storageSize: item["storageSize"],
    vectorIndexSize: item["vectorIndexSize"],
  };
}

/** Specifies some text and analysis components used to break that text into tokens. */
export interface AzureSearchDocumentsIndexesAnalyzeTextOptions {
  /** The text to break into tokens. */
  text: string;
  /** The name of the analyzer to use to break the given text. If this parameter is not specified, you must specify a tokenizer instead. The tokenizer and analyzer parameters are mutually exclusive. */
  analyzerName?: AzureSearchDocumentsIndexesLexicalAnalyzerName;
  /** The name of the tokenizer to use to break the given text. If this parameter is not specified, you must specify an analyzer instead. The tokenizer and analyzer parameters are mutually exclusive. */
  tokenizerName?: AzureSearchDocumentsIndexesLexicalTokenizerName;
  /** The name of the normalizer to use to normalize the given text. */
  normalizerName?: AzureSearchDocumentsIndexesLexicalNormalizerName;
  /** An optional list of token filters to use when breaking the given text. This parameter can only be set when using the tokenizer parameter. */
  tokenFilters?: AzureSearchDocumentsIndexesTokenFilterName[];
  /** An optional list of character filters to use when breaking the given text. This parameter can only be set when using the tokenizer parameter. */
  charFilters?: AzureSearchDocumentsIndexesCharFilterName[];
}

export function azureSearchDocumentsIndexesAnalyzeTextOptionsSerializer(
  item: AzureSearchDocumentsIndexesAnalyzeTextOptions,
): any {
  return {
    text: item["text"],
    analyzer: item["analyzerName"],
    tokenizer: item["tokenizerName"],
    normalizer: item["normalizerName"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

/** The result of testing an analyzer on text. */
export interface AzureSearchDocumentsIndexesAnalyzeResult {
  /** The list of tokens returned by the analyzer specified in the request. */
  tokens: AzureSearchDocumentsIndexesAnalyzedTokenInfo[];
}

export function azureSearchDocumentsIndexesAnalyzeResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAnalyzeResult {
  return {
    tokens: azureSearchDocumentsIndexesAnalyzedTokenInfoArrayDeserializer(
      item["tokens"],
    ),
  };
}

export function azureSearchDocumentsIndexesAnalyzedTokenInfoArraySerializer(
  result: Array<AzureSearchDocumentsIndexesAnalyzedTokenInfo>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesAnalyzedTokenInfoSerializer(item);
  });
}

export function azureSearchDocumentsIndexesAnalyzedTokenInfoArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesAnalyzedTokenInfo>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesAnalyzedTokenInfoDeserializer(item);
  });
}

/** Information about a token returned by an analyzer. */
export interface AzureSearchDocumentsIndexesAnalyzedTokenInfo {
  /** The token returned by the analyzer. */
  token: string;
  /** The index of the first character of the token in the input text. */
  startOffset: number;
  /** The index of the last character of the token in the input text. */
  endOffset: number;
  /** The position of the token in the input text relative to other tokens. The first token in the input text has position 0, the next has position 1, and so on. Depending on the analyzer used, some tokens might have the same position, for example if they are synonyms of each other. */
  position: number;
}

export function azureSearchDocumentsIndexesAnalyzedTokenInfoSerializer(
  item: AzureSearchDocumentsIndexesAnalyzedTokenInfo,
): any {
  return {
    token: item["token"],
    startOffset: item["startOffset"],
    endOffset: item["endOffset"],
    position: item["position"],
  };
}

export function azureSearchDocumentsIndexesAnalyzedTokenInfoDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAnalyzedTokenInfo {
  return {
    token: item["token"],
    startOffset: item["startOffset"],
    endOffset: item["endOffset"],
    position: item["position"],
  };
}

/** Represents an index alias, which describes a mapping from the alias name to an index. The alias name can be used in place of the index name for supported operations. */
export interface AzureSearchDocumentsIndexesSearchAlias {
  /** The name of the alias. */
  name: string;
  /** The name of the index this alias maps to. Only one index name may be specified. */
  indexes: string[];
  /** The ETag of the alias. */
  eTag?: string;
}

export function azureSearchDocumentsIndexesSearchAliasSerializer(
  item: AzureSearchDocumentsIndexesSearchAlias,
): any {
  return {
    name: item["name"],
    indexes: item["indexes"].map((p: any) => {
      return p;
    }),
    "@odata.etag": item["eTag"],
  };
}

export function azureSearchDocumentsIndexesSearchAliasDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchAlias {
  return {
    name: item["name"],
    indexes: item["indexes"].map((p: any) => {
      return p;
    }),
    eTag: item["@odata.etag"],
  };
}

/** Response from a List Aliases request. If successful, it includes the associated index mappings for all aliases. */
export interface _AzureSearchDocumentsIndexesListAliasesResult {
  /** The aliases in the Search service. */
  readonly aliases: AzureSearchDocumentsIndexesSearchAlias[];
}

export function _azureSearchDocumentsIndexesListAliasesResultDeserializer(
  item: any,
): _AzureSearchDocumentsIndexesListAliasesResult {
  return {
    aliases: azureSearchDocumentsIndexesSearchAliasArrayDeserializer(
      item["value"],
    ),
  };
}

export function azureSearchDocumentsIndexesSearchAliasArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchAlias>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchAliasSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSearchAliasArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchAlias>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchAliasDeserializer(item);
  });
}

/** Represents a knowledge base definition. */
export interface AzureSearchDocumentsIndexesKnowledgeBase {
  /** The name of the knowledge base. */
  readonly name: string;
  /** Knowledge sources referenced by this knowledge base. */
  knowledgeSources: AzureSearchDocumentsIndexesKnowledgeSourceReference[];
  /** Contains configuration options on how to connect to AI models. */
  models?: KnowledgeBaseModelUnion[];
  /** The retrieval reasoning effort configuration. */
  retrievalReasoningEffort?: KnowledgeRetrievalReasoningEffortUnion;
  /** The output mode for the knowledge base. */
  outputMode?: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalOutputMode;
  /** The ETag of the knowledge base. */
  eTag?: string;
  /** A description of an encryption key that you create in Azure Key Vault. */
  encryptionKey?: AzureSearchDocumentsIndexesSearchResourceEncryptionKey;
  /** The description of the knowledge base. */
  description?: string;
  /** Instructions considered by the knowledge base when developing query plan. */
  retrievalInstructions?: string;
  /** Instructions considered by the knowledge base when generating answers. */
  answerInstructions?: string;
}

export function azureSearchDocumentsIndexesKnowledgeBaseSerializer(
  item: AzureSearchDocumentsIndexesKnowledgeBase,
): any {
  return {
    knowledgeSources:
      azureSearchDocumentsIndexesKnowledgeSourceReferenceArraySerializer(
        item["knowledgeSources"],
      ),
    models: !item["models"]
      ? item["models"]
      : azureSearchDocumentsIndexesKnowledgeBaseModelUnionArraySerializer(
          item["models"],
        ),
    retrievalReasoningEffort: !item["retrievalReasoningEffort"]
      ? item["retrievalReasoningEffort"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionSerializer(
          item["retrievalReasoningEffort"],
        ),
    outputMode: item["outputMode"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
    description: item["description"],
    retrievalInstructions: item["retrievalInstructions"],
    answerInstructions: item["answerInstructions"],
  };
}

export function azureSearchDocumentsIndexesKnowledgeBaseDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKnowledgeBase {
  return {
    name: item["name"],
    knowledgeSources:
      azureSearchDocumentsIndexesKnowledgeSourceReferenceArrayDeserializer(
        item["knowledgeSources"],
      ),
    models: !item["models"]
      ? item["models"]
      : azureSearchDocumentsIndexesKnowledgeBaseModelUnionArrayDeserializer(
          item["models"],
        ),
    retrievalReasoningEffort: !item["retrievalReasoningEffort"]
      ? item["retrievalReasoningEffort"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionDeserializer(
          item["retrievalReasoningEffort"],
        ),
    outputMode: item["outputMode"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
    description: item["description"],
    retrievalInstructions: item["retrievalInstructions"],
    answerInstructions: item["answerInstructions"],
  };
}

export function azureSearchDocumentsIndexesKnowledgeSourceReferenceArraySerializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeSourceReference>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeSourceReferenceSerializer(item);
  });
}

export function azureSearchDocumentsIndexesKnowledgeSourceReferenceArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeSourceReference>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeSourceReferenceDeserializer(
      item,
    );
  });
}

/** Reference to a knowledge source. */
export interface AzureSearchDocumentsIndexesKnowledgeSourceReference {
  /** The name of the knowledge source. */
  name: string;
}

export function azureSearchDocumentsIndexesKnowledgeSourceReferenceSerializer(
  item: AzureSearchDocumentsIndexesKnowledgeSourceReference,
): any {
  return { name: item["name"] };
}

export function azureSearchDocumentsIndexesKnowledgeSourceReferenceDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKnowledgeSourceReference {
  return {
    name: item["name"],
  };
}

export function azureSearchDocumentsIndexesKnowledgeBaseModelUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeBaseModelUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeBaseModelUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesKnowledgeBaseModelUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeBaseModelUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeBaseModelUnionDeserializer(item);
  });
}

/** Specifies the connection parameters for the model to use for query planning. */
export interface AzureSearchDocumentsIndexesKnowledgeBaseModel {
  /** The AI model to be used for query planning. */
  /** The discriminator possible values: azureOpenAI */
  kind: AzureSearchDocumentsIndexesKnowledgeBaseModelKind;
}

export function azureSearchDocumentsIndexesKnowledgeBaseModelSerializer(
  item: AzureSearchDocumentsIndexesKnowledgeBaseModel,
): any {
  return { kind: item["kind"] };
}

export function azureSearchDocumentsIndexesKnowledgeBaseModelDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKnowledgeBaseModel {
  return {
    kind: item["kind"],
  };
}

/** Alias for KnowledgeBaseModelUnion */
export type KnowledgeBaseModelUnion =
  | AzureSearchDocumentsIndexesKnowledgeBaseAzureOpenAIModel
  | AzureSearchDocumentsIndexesKnowledgeBaseModel;

export function azureSearchDocumentsIndexesKnowledgeBaseModelUnionSerializer(
  item: KnowledgeBaseModelUnion,
): any {
  switch (item.kind) {
    case "azureOpenAI":
      return knowledgeBaseAzureOpenAIModelSerializer(
        item as KnowledgeBaseAzureOpenAIModel,
      );

    default:
      return azureSearchDocumentsIndexesKnowledgeBaseModelSerializer(item);
  }
}

export function azureSearchDocumentsIndexesKnowledgeBaseModelUnionDeserializer(
  item: any,
): KnowledgeBaseModelUnion {
  switch (item.kind) {
    case "azureOpenAI":
      return knowledgeBaseAzureOpenAIModelDeserializer(
        item as KnowledgeBaseAzureOpenAIModel,
      );

    default:
      return azureSearchDocumentsIndexesKnowledgeBaseModelDeserializer(item);
  }
}

/** The AI model to be used for query planning. */
export enum KnownAzureSearchDocumentsIndexesKnowledgeBaseModelKind {
  /** Use Azure Open AI models for query planning. */
  AzureOpenAI = "azureOpenAI",
}

/**
 * The AI model to be used for query planning. \
 * {@link KnownAzureSearchDocumentsIndexesKnowledgeBaseModelKind} can be used interchangeably with AzureSearchDocumentsIndexesKnowledgeBaseModelKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **azureOpenAI**: Use Azure Open AI models for query planning.
 */
export type AzureSearchDocumentsIndexesKnowledgeBaseModelKind = string;

/** Specifies the Azure OpenAI resource used to do query planning. */
export interface AzureSearchDocumentsIndexesKnowledgeBaseAzureOpenAIModel
  extends AzureSearchDocumentsIndexesKnowledgeBaseModel {
  kind: "azureOpenAI";
  /** Azure OpenAI parameters. */
  azureOpenAIParameters: AzureSearchDocumentsIndexesAzureOpenAiParameters;
}

export function azureSearchDocumentsIndexesKnowledgeBaseAzureOpenAIModelSerializer(
  item: AzureSearchDocumentsIndexesKnowledgeBaseAzureOpenAIModel,
): any {
  return {
    kind: item["kind"],
    azureOpenAIParameters:
      azureSearchDocumentsIndexesAzureOpenAiParametersSerializer(
        item["azureOpenAIParameters"],
      ),
  };
}

export function azureSearchDocumentsIndexesKnowledgeBaseAzureOpenAIModelDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKnowledgeBaseAzureOpenAIModel {
  return {
    kind: item["kind"],
    azureOpenAIParameters:
      azureSearchDocumentsIndexesAzureOpenAiParametersDeserializer(
        item["azureOpenAIParameters"],
      ),
  };
}

/** Specifies the parameters for connecting to the Azure OpenAI resource. */
export interface AzureSearchDocumentsIndexesAzureOpenAiParameters {
  /** The resource URI of the Azure OpenAI resource. */
  resourceUri: string;
  /** ID of the Azure OpenAI model deployment on the designated resource. */
  deploymentId: string;
  /** API key of the designated Azure OpenAI resource. */
  apiKey?: string;
  /** The user-assigned managed identity used for outbound connections. */
  authIdentity?: string;
  /** The name of the embedding model that is deployed at the provided deploymentId path. */
  modelName?: AzureSearchDocumentsIndexesAzureOpenAIModelName;
  /** The authentication method to use when connecting to the Azure OpenAI resource. */
  authenticationMethod?: string;
}

export function azureSearchDocumentsIndexesAzureOpenAiParametersSerializer(
  item: AzureSearchDocumentsIndexesAzureOpenAiParameters,
): any {
  return {
    resourceUri: item["resourceUri"],
    deploymentId: item["deploymentId"],
    apiKey: item["apiKey"],
    authIdentity: item["authIdentity"],
    modelName: item["modelName"],
    authenticationMethod: item["authenticationMethod"],
  };
}

export function azureSearchDocumentsIndexesAzureOpenAiParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureOpenAiParameters {
  return {
    resourceUri: item["resourceUri"],
    deploymentId: item["deploymentId"],
    apiKey: item["apiKey"],
    authIdentity: item["authIdentity"],
    modelName: item["modelName"],
    authenticationMethod: item["authenticationMethod"],
  };
}

/** Result from listing knowledge bases. */
export interface _AzureSearchDocumentsIndexesListKnowledgeBasesResult {
  /** The knowledge bases in the service. */
  value: AzureSearchDocumentsIndexesKnowledgeBase[];
}

export function _azureSearchDocumentsIndexesListKnowledgeBasesResultDeserializer(
  item: any,
): _AzureSearchDocumentsIndexesListKnowledgeBasesResult {
  return {
    value: azureSearchDocumentsIndexesKnowledgeBaseArrayDeserializer(
      item["value"],
    ),
  };
}

export function azureSearchDocumentsIndexesKnowledgeBaseArraySerializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeBase>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeBaseSerializer(item);
  });
}

export function azureSearchDocumentsIndexesKnowledgeBaseArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeBase>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeBaseDeserializer(item);
  });
}

/** Represents a knowledge source definition. */
export interface AzureSearchDocumentsIndexesKnowledgeSource {
  /** The name of the knowledge source. */
  readonly name: string;
  /** Optional user-defined description. */
  description?: string;
  /** The type of the knowledge source. */
  /** The discriminator possible values: searchIndex, azureBlob */
  kind: AzureSearchDocumentsIndexesKnowledgeSourceKind;
  /** The ETag of the agent. */
  eTag?: string;
  /** A description of an encryption key that you create in Azure Key Vault. */
  encryptionKey?: AzureSearchDocumentsIndexesSearchResourceEncryptionKey;
}

export function azureSearchDocumentsIndexesKnowledgeSourceSerializer(
  item: AzureSearchDocumentsIndexesKnowledgeSource,
): any {
  return {
    description: item["description"],
    kind: item["kind"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
  };
}

export function azureSearchDocumentsIndexesKnowledgeSourceDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKnowledgeSource {
  return {
    name: item["name"],
    description: item["description"],
    kind: item["kind"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
  };
}

/** Alias for KnowledgeSourceUnion */
export type KnowledgeSourceUnion =
  | AzureSearchDocumentsIndexesSearchIndexKnowledgeSource
  | AzureSearchDocumentsIndexesAzureBlobKnowledgeSource
  | AzureSearchDocumentsIndexesKnowledgeSource;

export function azureSearchDocumentsIndexesKnowledgeSourceUnionSerializer(
  item: KnowledgeSourceUnion,
): any {
  switch (item.kind) {
    case "searchIndex":
      return searchIndexKnowledgeSourceSerializer(
        item as SearchIndexKnowledgeSource,
      );

    case "azureBlob":
      return azureBlobKnowledgeSourceSerializer(
        item as AzureBlobKnowledgeSource,
      );

    default:
      return azureSearchDocumentsIndexesKnowledgeSourceSerializer(item);
  }
}

export function azureSearchDocumentsIndexesKnowledgeSourceUnionDeserializer(
  item: any,
): KnowledgeSourceUnion {
  switch (item.kind) {
    case "searchIndex":
      return searchIndexKnowledgeSourceDeserializer(
        item as SearchIndexKnowledgeSource,
      );

    case "azureBlob":
      return azureBlobKnowledgeSourceDeserializer(
        item as AzureBlobKnowledgeSource,
      );

    default:
      return azureSearchDocumentsIndexesKnowledgeSourceDeserializer(item);
  }
}

/** The kind of the knowledge source. */
export enum KnownAzureSearchDocumentsIndexesKnowledgeSourceKind {
  /** A knowledge source that reads data from a Search Index. */
  SearchIndex = "searchIndex",
  /** A knowledge source that read and ingest data from Azure Blob Storage to a Search Index. */
  AzureBlob = "azureBlob",
  /** A knowledge source that reads data from indexed SharePoint. */
  IndexedSharePoint = "indexedSharePoint",
  /** A knowledge source that reads data from indexed OneLake. */
  IndexedOneLake = "indexedOneLake",
  /** A knowledge source that reads data from the web. */
  Web = "web",
  /** A knowledge source that reads data from remote SharePoint. */
  RemoteSharePoint = "remoteSharePoint",
}

/**
 * The kind of the knowledge source. \
 * {@link KnownAzureSearchDocumentsIndexesKnowledgeSourceKind} can be used interchangeably with AzureSearchDocumentsIndexesKnowledgeSourceKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **searchIndex**: A knowledge source that reads data from a Search Index. \
 * **azureBlob**: A knowledge source that read and ingest data from Azure Blob Storage to a Search Index. \
 * **indexedSharePoint**: A knowledge source that reads data from indexed SharePoint. \
 * **indexedOneLake**: A knowledge source that reads data from indexed OneLake. \
 * **web**: A knowledge source that reads data from the web. \
 * **remoteSharePoint**: A knowledge source that reads data from remote SharePoint.
 */
export type AzureSearchDocumentsIndexesKnowledgeSourceKind = string;

/** Knowledge Source targeting a search index. */
export interface AzureSearchDocumentsIndexesSearchIndexKnowledgeSource
  extends AzureSearchDocumentsIndexesKnowledgeSource {
  kind: "searchIndex";
  /** The parameters for the knowledge source. */
  searchIndexParameters: AzureSearchDocumentsIndexesSearchIndexKnowledgeSourceParameters;
}

export function azureSearchDocumentsIndexesSearchIndexKnowledgeSourceSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexKnowledgeSource,
): any {
  return {
    description: item["description"],
    kind: item["kind"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
    searchIndexParameters:
      azureSearchDocumentsIndexesSearchIndexKnowledgeSourceParametersSerializer(
        item["searchIndexParameters"],
      ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexKnowledgeSourceDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexKnowledgeSource {
  return {
    name: item["name"],
    description: item["description"],
    kind: item["kind"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
    searchIndexParameters:
      azureSearchDocumentsIndexesSearchIndexKnowledgeSourceParametersDeserializer(
        item["searchIndexParameters"],
      ),
  };
}

/** Parameters for search index knowledge source. */
export interface AzureSearchDocumentsIndexesSearchIndexKnowledgeSourceParameters {
  /** The name of the Search index. */
  searchIndexName: string;
  /** Used to request additional fields for referenced source data. */
  sourceDataSelect?: string;
}

export function azureSearchDocumentsIndexesSearchIndexKnowledgeSourceParametersSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexKnowledgeSourceParameters,
): any {
  return {
    searchIndexName: item["searchIndexName"],
    sourceDataSelect: item["sourceDataSelect"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexKnowledgeSourceParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexKnowledgeSourceParameters {
  return {
    searchIndexName: item["searchIndexName"],
    sourceDataSelect: item["sourceDataSelect"],
  };
}

/** Configuration for Azure Blob Storage knowledge source. */
export interface AzureSearchDocumentsIndexesAzureBlobKnowledgeSource
  extends AzureSearchDocumentsIndexesKnowledgeSource {
  kind: "azureBlob";
  /** The type of the knowledge source. */
  azureBlobParameters: AzureSearchDocumentsIndexesAzureBlobKnowledgeSourceParameters;
}

export function azureSearchDocumentsIndexesAzureBlobKnowledgeSourceSerializer(
  item: AzureSearchDocumentsIndexesAzureBlobKnowledgeSource,
): any {
  return {
    description: item["description"],
    kind: item["kind"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
    azureBlobParameters:
      azureSearchDocumentsIndexesAzureBlobKnowledgeSourceParametersSerializer(
        item["azureBlobParameters"],
      ),
  };
}

export function azureSearchDocumentsIndexesAzureBlobKnowledgeSourceDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureBlobKnowledgeSource {
  return {
    name: item["name"],
    description: item["description"],
    kind: item["kind"],
    eTag: item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
    azureBlobParameters:
      azureSearchDocumentsIndexesAzureBlobKnowledgeSourceParametersDeserializer(
        item["azureBlobParameters"],
      ),
  };
}

/** Parameters for Azure Blob Storage knowledge source. */
export interface AzureSearchDocumentsIndexesAzureBlobKnowledgeSourceParameters {
  /** An explicit identity to use for this knowledge source. */
  identity?: SearchIndexerDataIdentityUnion;
  /** Key-based connection string or the ResourceId format if using a managed identity. */
  connectionString: string;
  /** The name of the blob storage container. */
  containerName: string;
  /** Optional folder path within the container. */
  folderPath?: string;
  /** Optional vectorizer configuration for vectorizing content. */
  embeddingModel?: VectorSearchVectorizerUnion;
  /** Optional chat completion model for image verbalization or context extraction. */
  chatCompletionModel?: KnowledgeBaseModelUnion;
  /** Optional schedule for data ingestion. */
  ingestionSchedule?: AzureSearchDocumentsIndexesIndexingSchedule;
  /** Resources created by the knowledge source. */
  readonly createdResources?: AzureSearchDocumentsIndexesCreatedResources;
  /** Indicates whether image verbalization should be disabled. */
  disableImageVerbalization?: boolean;
}

export function azureSearchDocumentsIndexesAzureBlobKnowledgeSourceParametersSerializer(
  item: AzureSearchDocumentsIndexesAzureBlobKnowledgeSourceParameters,
): any {
  return {
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["identity"],
        ),
    connectionString: item["connectionString"],
    containerName: item["containerName"],
    folderPath: item["folderPath"],
    embeddingModel: !item["embeddingModel"]
      ? item["embeddingModel"]
      : azureSearchDocumentsIndexesVectorSearchVectorizerUnionSerializer(
          item["embeddingModel"],
        ),
    chatCompletionModel: !item["chatCompletionModel"]
      ? item["chatCompletionModel"]
      : azureSearchDocumentsIndexesKnowledgeBaseModelUnionSerializer(
          item["chatCompletionModel"],
        ),
    ingestionSchedule: !item["ingestionSchedule"]
      ? item["ingestionSchedule"]
      : azureSearchDocumentsIndexesIndexingScheduleSerializer(
          item["ingestionSchedule"],
        ),
    disableImageVerbalization: item["disableImageVerbalization"],
  };
}

export function azureSearchDocumentsIndexesAzureBlobKnowledgeSourceParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureBlobKnowledgeSourceParameters {
  return {
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["identity"],
        ),
    connectionString: item["connectionString"],
    containerName: item["containerName"],
    folderPath: item["folderPath"],
    embeddingModel: !item["embeddingModel"]
      ? item["embeddingModel"]
      : azureSearchDocumentsIndexesVectorSearchVectorizerUnionDeserializer(
          item["embeddingModel"],
        ),
    chatCompletionModel: !item["chatCompletionModel"]
      ? item["chatCompletionModel"]
      : azureSearchDocumentsIndexesKnowledgeBaseModelUnionDeserializer(
          item["chatCompletionModel"],
        ),
    ingestionSchedule: !item["ingestionSchedule"]
      ? item["ingestionSchedule"]
      : azureSearchDocumentsIndexesIndexingScheduleDeserializer(
          item["ingestionSchedule"],
        ),
    createdResources: !item["createdResources"]
      ? item["createdResources"]
      : azureSearchDocumentsIndexesCreatedResourcesDeserializer(
          item["createdResources"],
        ),
    disableImageVerbalization: item["disableImageVerbalization"],
  };
}

/** Represents a schedule for indexer execution. */
export interface AzureSearchDocumentsIndexesIndexingSchedule {
  /** The interval of time between indexer executions. */
  interval: string;
  /** The time when an indexer should start running. */
  startTime?: Date;
}

export function azureSearchDocumentsIndexesIndexingScheduleSerializer(
  item: AzureSearchDocumentsIndexesIndexingSchedule,
): any {
  return {
    interval: item["interval"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : item["startTime"].toISOString(),
  };
}

export function azureSearchDocumentsIndexesIndexingScheduleDeserializer(
  item: any,
): AzureSearchDocumentsIndexesIndexingSchedule {
  return {
    interval: item["interval"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : new Date(item["startTime"]),
  };
}

/** Resources created by the knowledge source. Keys represent resource types (e.g., 'datasource', 'indexer', 'skillset', 'index') and values represent resource names. */
export interface AzureSearchDocumentsIndexesCreatedResources {
  /** Additional properties */
  additionalProperties?: Record<string, string>;
}

export function azureSearchDocumentsIndexesCreatedResourcesDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCreatedResources {
  return {
    additionalProperties: serializeRecord(item, []),
  };
}

/** Result from listing knowledge sources. */
export interface _AzureSearchDocumentsIndexesListKnowledgeSourcesResult {
  /** The knowledge sources in the service. */
  value: KnowledgeSourceUnion[];
}

export function _azureSearchDocumentsIndexesListKnowledgeSourcesResultDeserializer(
  item: any,
): _AzureSearchDocumentsIndexesListKnowledgeSourcesResult {
  return {
    value: azureSearchDocumentsIndexesKnowledgeSourceUnionArrayDeserializer(
      item["value"],
    ),
  };
}

export function azureSearchDocumentsIndexesKnowledgeSourceUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeSourceUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeSourceUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesKnowledgeSourceUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesKnowledgeSourceUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesKnowledgeSourceUnionDeserializer(item);
  });
}

/** Response from a get service statistics request. If successful, it includes service level counters and limits. */
export interface AzureSearchDocumentsIndexesSearchServiceStatistics {
  /** Service level resource counters. */
  counters: AzureSearchDocumentsIndexesSearchServiceCounters;
  /** Service level general limits. */
  limits: AzureSearchDocumentsIndexesSearchServiceLimits;
}

export function azureSearchDocumentsIndexesSearchServiceStatisticsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchServiceStatistics {
  return {
    counters: azureSearchDocumentsIndexesSearchServiceCountersDeserializer(
      item["counters"],
    ),
    limits: azureSearchDocumentsIndexesSearchServiceLimitsDeserializer(
      item["limits"],
    ),
  };
}

/** Represents service-level resource counters and quotas. */
export interface AzureSearchDocumentsIndexesSearchServiceCounters {
  /** Total number of aliases. */
  aliasCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total number of documents across all indexes in the service. */
  documentCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total number of indexes. */
  indexCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total number of indexers. */
  indexerCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total number of data sources. */
  dataSourceCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total size of used storage in bytes. */
  storageSizeCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total number of synonym maps. */
  synonymMapCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total number of skillsets. */
  skillsetCounter: AzureSearchDocumentsIndexesResourceCounter;
  /** Total memory consumption of all vector indexes within the service, in bytes. */
  vectorIndexSizeCounter: AzureSearchDocumentsIndexesResourceCounter;
}

export function azureSearchDocumentsIndexesSearchServiceCountersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchServiceCounters {
  return {
    aliasCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["aliasesCount"],
    ),
    documentCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["documentCount"],
    ),
    indexCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["indexesCount"],
    ),
    indexerCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["indexersCount"],
    ),
    dataSourceCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["dataSourcesCount"],
    ),
    storageSizeCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["storageSize"],
    ),
    synonymMapCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["synonymMaps"],
    ),
    skillsetCounter: azureSearchDocumentsIndexesResourceCounterDeserializer(
      item["skillsetCount"],
    ),
    vectorIndexSizeCounter:
      azureSearchDocumentsIndexesResourceCounterDeserializer(
        item["vectorIndexSize"],
      ),
  };
}

/** Represents a resource's usage and quota. */
export interface AzureSearchDocumentsIndexesResourceCounter {
  /** The resource usage amount. */
  usage: number;
  /** The resource amount quota. */
  quota?: number;
}

export function azureSearchDocumentsIndexesResourceCounterDeserializer(
  item: any,
): AzureSearchDocumentsIndexesResourceCounter {
  return {
    usage: item["usage"],
    quota: item["quota"],
  };
}

/** Represents various service level limits. */
export interface AzureSearchDocumentsIndexesSearchServiceLimits {
  /** The maximum allowed fields per index. */
  maxFieldsPerIndex?: number;
  /** The maximum depth which you can nest sub-fields in an index, including the top-level complex field. For example, a/b/c has a nesting depth of 3. */
  maxFieldNestingDepthPerIndex?: number;
  /** The maximum number of fields of type Collection(Edm.ComplexType) allowed in an index. */
  maxComplexCollectionFieldsPerIndex?: number;
  /** The maximum number of objects in complex collections allowed per document. */
  maxComplexObjectsInCollectionsPerDocument?: number;
  /** The maximum amount of storage in bytes allowed per index. */
  maxStoragePerIndexInBytes?: number;
}

export function azureSearchDocumentsIndexesSearchServiceLimitsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchServiceLimits {
  return {
    maxFieldsPerIndex: item["maxFieldsPerIndex"],
    maxFieldNestingDepthPerIndex: item["maxFieldNestingDepthPerIndex"],
    maxComplexCollectionFieldsPerIndex:
      item["maxComplexCollectionFieldsPerIndex"],
    maxComplexObjectsInCollectionsPerDocument:
      item["maxComplexObjectsInCollectionsPerDocument"],
    maxStoragePerIndexInBytes: item["maxStoragePerIndex"],
  };
}

/** Response from a request to retrieve stats summary of all indexes. If successful, it includes the stats of each index in the service. */
export interface _AzureSearchDocumentsIndexesListIndexStatsSummary {
  /** The Statistics summary of all indexes in the Search service. */
  readonly indexesStatistics: AzureSearchDocumentsIndexesIndexStatisticsSummary[];
}

export function _azureSearchDocumentsIndexesListIndexStatsSummaryDeserializer(
  item: any,
): _AzureSearchDocumentsIndexesListIndexStatsSummary {
  return {
    indexesStatistics:
      azureSearchDocumentsIndexesIndexStatisticsSummaryArrayDeserializer(
        item["value"],
      ),
  };
}

export function azureSearchDocumentsIndexesIndexStatisticsSummaryArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesIndexStatisticsSummary>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesIndexStatisticsSummaryDeserializer(item);
  });
}

/** Statistics for a given index. Statistics are collected periodically and are not guaranteed to always be up-to-date. */
export interface AzureSearchDocumentsIndexesIndexStatisticsSummary {
  /** The name of the index. */
  readonly name: string;
  /** The number of documents in the index. */
  readonly documentCount: number;
  /** The amount of storage in bytes consumed by the index. */
  readonly storageSize: number;
  /** The amount of memory in bytes consumed by vectors in the index. */
  readonly vectorIndexSize?: number;
}

export function azureSearchDocumentsIndexesIndexStatisticsSummaryDeserializer(
  item: any,
): AzureSearchDocumentsIndexesIndexStatisticsSummary {
  return {
    name: item["name"],
    documentCount: item["documentCount"],
    storageSize: item["storageSize"],
    vectorIndexSize: item["vectorIndexSize"],
  };
}

/** Represents a datasource definition, which can be used to configure an indexer. */
export interface AzureSearchDocumentsIndexesSearchIndexerDataSourceConnection {
  /** The name of the datasource. */
  name: string;
  /** The description of the datasource. */
  description?: string;
  /** The type of the datasource. */
  type: AzureSearchDocumentsIndexesSearchIndexerDataSourceType;
  /** A specific type of the data source, in case the resource is capable of different modalities. For example, 'MongoDb' for certain 'cosmosDb' accounts. */
  subType?: string;
  /** Credentials for the datasource. */
  credentials: AzureSearchDocumentsIndexesDataSourceCredentials;
  /** The data container for the datasource. */
  container: AzureSearchDocumentsIndexesSearchIndexerDataContainer;
  /** An explicit managed identity to use for this datasource. If not specified and the connection string is a managed identity, the system-assigned managed identity is used. If not specified, the value remains unchanged. If "none" is specified, the value of this property is cleared. */
  identity?: SearchIndexerDataIdentityUnion;
  /** Ingestion options with various types of permission data. */
  indexerPermissionOptions?: AzureSearchDocumentsIndexesIndexerPermissionOption[];
  /** The data change detection policy for the datasource. */
  dataChangeDetectionPolicy?: DataChangeDetectionPolicyUnion;
  /** The data deletion detection policy for the datasource. */
  dataDeletionDetectionPolicy?: DataDeletionDetectionPolicyUnion;
  /** The ETag of the data source. */
  eTag?: string;
  /** A description of an encryption key that you create in Azure Key Vault. This key is used to provide an additional level of encryption-at-rest for your datasource definition when you want full assurance that no one, not even Microsoft, can decrypt your data source definition. Once you have encrypted your data source definition, it will always remain encrypted. The search service will ignore attempts to set this property to null. You can change this property as needed if you want to rotate your encryption key; Your datasource definition will be unaffected. Encryption with customer-managed keys is not available for free search services, and is only available for paid services created on or after January 1, 2019. */
  encryptionKey?: AzureSearchDocumentsIndexesSearchResourceEncryptionKey;
}

export function azureSearchDocumentsIndexesSearchIndexerDataSourceConnectionSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerDataSourceConnection,
): any {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    subType: item["subType"],
    credentials: azureSearchDocumentsIndexesDataSourceCredentialsSerializer(
      item["credentials"],
    ),
    container: azureSearchDocumentsIndexesSearchIndexerDataContainerSerializer(
      item["container"],
    ),
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["identity"],
        ),
    indexerPermissionOptions: !item["indexerPermissionOptions"]
      ? item["indexerPermissionOptions"]
      : item["indexerPermissionOptions"].map((p: any) => {
          return p;
        }),
    dataChangeDetectionPolicy: !item["dataChangeDetectionPolicy"]
      ? item["dataChangeDetectionPolicy"]
      : azureSearchDocumentsIndexesDataChangeDetectionPolicyUnionSerializer(
          item["dataChangeDetectionPolicy"],
        ),
    dataDeletionDetectionPolicy: !item["dataDeletionDetectionPolicy"]
      ? item["dataDeletionDetectionPolicy"]
      : azureSearchDocumentsIndexesDataDeletionDetectionPolicyUnionSerializer(
          item["dataDeletionDetectionPolicy"],
        ),
    "@odata.etag": item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerDataSourceConnectionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerDataSourceConnection {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    subType: item["subType"],
    credentials: azureSearchDocumentsIndexesDataSourceCredentialsDeserializer(
      item["credentials"],
    ),
    container:
      azureSearchDocumentsIndexesSearchIndexerDataContainerDeserializer(
        item["container"],
      ),
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["identity"],
        ),
    indexerPermissionOptions: !item["indexerPermissionOptions"]
      ? item["indexerPermissionOptions"]
      : item["indexerPermissionOptions"].map((p: any) => {
          return p;
        }),
    dataChangeDetectionPolicy: !item["dataChangeDetectionPolicy"]
      ? item["dataChangeDetectionPolicy"]
      : azureSearchDocumentsIndexesDataChangeDetectionPolicyUnionDeserializer(
          item["dataChangeDetectionPolicy"],
        ),
    dataDeletionDetectionPolicy: !item["dataDeletionDetectionPolicy"]
      ? item["dataDeletionDetectionPolicy"]
      : azureSearchDocumentsIndexesDataDeletionDetectionPolicyUnionDeserializer(
          item["dataDeletionDetectionPolicy"],
        ),
    eTag: item["@odata.etag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
  };
}

/** Defines the type of a datasource. */
export enum KnownAzureSearchDocumentsIndexesSearchIndexerDataSourceType {
  /** Indicates an Azure SQL datasource. */
  AzureSql = "azuresql",
  /** Indicates a CosmosDB datasource. */
  CosmosDb = "cosmosdb",
  /** Indicates an Azure Blob datasource. */
  AzureBlob = "azureblob",
  /** Indicates an Azure Table datasource. */
  AzureTable = "azuretable",
  /** Indicates a MySql datasource. */
  MySql = "mysql",
  /** Indicates an ADLS Gen2 datasource. */
  AdlsGen2 = "adlsgen2",
  /** Indicates a Microsoft Fabric OneLake datasource. */
  OneLake = "onelake",
}

/**
 * Defines the type of a datasource. \
 * {@link KnownAzureSearchDocumentsIndexesSearchIndexerDataSourceType} can be used interchangeably with AzureSearchDocumentsIndexesSearchIndexerDataSourceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **azuresql**: Indicates an Azure SQL datasource. \
 * **cosmosdb**: Indicates a CosmosDB datasource. \
 * **azureblob**: Indicates an Azure Blob datasource. \
 * **azuretable**: Indicates an Azure Table datasource. \
 * **mysql**: Indicates a MySql datasource. \
 * **adlsgen2**: Indicates an ADLS Gen2 datasource. \
 * **onelake**: Indicates a Microsoft Fabric OneLake datasource.
 */
export type AzureSearchDocumentsIndexesSearchIndexerDataSourceType = string;

/** Represents credentials that can be used to connect to a datasource. */
export interface AzureSearchDocumentsIndexesDataSourceCredentials {
  /** The connection string for the datasource. Set to `<unchanged>` (with brackets) if you don't want the connection string updated. Set to `<redacted>` if you want to remove the connection string value from the datasource. */
  connectionString?: string;
}

export function azureSearchDocumentsIndexesDataSourceCredentialsSerializer(
  item: AzureSearchDocumentsIndexesDataSourceCredentials,
): any {
  return { connectionString: item["connectionString"] };
}

export function azureSearchDocumentsIndexesDataSourceCredentialsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDataSourceCredentials {
  return {
    connectionString: item["connectionString"],
  };
}

/** Represents information about the entity (such as Azure SQL table or CosmosDB collection) that will be indexed. */
export interface AzureSearchDocumentsIndexesSearchIndexerDataContainer {
  /** The name of the table or view (for Azure SQL data source) or collection (for CosmosDB data source) that will be indexed. */
  name: string;
  /** A query that is applied to this data container. The syntax and meaning of this parameter is datasource-specific. Not supported by Azure SQL datasources. */
  query?: string;
}

export function azureSearchDocumentsIndexesSearchIndexerDataContainerSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerDataContainer,
): any {
  return { name: item["name"], query: item["query"] };
}

export function azureSearchDocumentsIndexesSearchIndexerDataContainerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerDataContainer {
  return {
    name: item["name"],
    query: item["query"],
  };
}

/** Options with various types of permission data to index. */
export enum KnownAzureSearchDocumentsIndexesIndexerPermissionOption {
  /** Indexer to ingest ACL userIds from data source to index. */
  UserIds = "userIds",
  /** Indexer to ingest ACL groupIds from data source to index. */
  GroupIds = "groupIds",
  /** Indexer to ingest Azure RBAC scope from data source to index. */
  RbacScope = "rbacScope",
}

/**
 * Options with various types of permission data to index. \
 * {@link KnownAzureSearchDocumentsIndexesIndexerPermissionOption} can be used interchangeably with AzureSearchDocumentsIndexesIndexerPermissionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **userIds**: Indexer to ingest ACL userIds from data source to index. \
 * **groupIds**: Indexer to ingest ACL groupIds from data source to index. \
 * **rbacScope**: Indexer to ingest Azure RBAC scope from data source to index.
 */
export type AzureSearchDocumentsIndexesIndexerPermissionOption = string;

/** Base type for data change detection policies. */
export interface AzureSearchDocumentsIndexesDataChangeDetectionPolicy {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy, #Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy */
  odataType: string;
}

export function azureSearchDocumentsIndexesDataChangeDetectionPolicySerializer(
  item: AzureSearchDocumentsIndexesDataChangeDetectionPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesDataChangeDetectionPolicyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDataChangeDetectionPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for DataChangeDetectionPolicyUnion */
export type DataChangeDetectionPolicyUnion =
  | AzureSearchDocumentsIndexesHighWaterMarkChangeDetectionPolicy
  | AzureSearchDocumentsIndexesSqlIntegratedChangeTrackingPolicy
  | AzureSearchDocumentsIndexesDataChangeDetectionPolicy;

export function azureSearchDocumentsIndexesDataChangeDetectionPolicyUnionSerializer(
  item: DataChangeDetectionPolicyUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy":
      return highWaterMarkChangeDetectionPolicySerializer(
        item as HighWaterMarkChangeDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy":
      return sqlIntegratedChangeTrackingPolicySerializer(
        item as SqlIntegratedChangeTrackingPolicy,
      );

    default:
      return azureSearchDocumentsIndexesDataChangeDetectionPolicySerializer(
        item,
      );
  }
}

export function azureSearchDocumentsIndexesDataChangeDetectionPolicyUnionDeserializer(
  item: any,
): DataChangeDetectionPolicyUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy":
      return highWaterMarkChangeDetectionPolicyDeserializer(
        item as HighWaterMarkChangeDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy":
      return sqlIntegratedChangeTrackingPolicyDeserializer(
        item as SqlIntegratedChangeTrackingPolicy,
      );

    default:
      return azureSearchDocumentsIndexesDataChangeDetectionPolicyDeserializer(
        item,
      );
  }
}

/** Defines a data change detection policy that captures changes based on the value of a high water mark column. */
export interface AzureSearchDocumentsIndexesHighWaterMarkChangeDetectionPolicy
  extends AzureSearchDocumentsIndexesDataChangeDetectionPolicy {
  /** The name of the high water mark column. */
  highWaterMarkColumnName: string;
  /** A URI fragment specifying the type of data change detection policy. */
  odataType: "#Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy";
}

export function azureSearchDocumentsIndexesHighWaterMarkChangeDetectionPolicySerializer(
  item: AzureSearchDocumentsIndexesHighWaterMarkChangeDetectionPolicy,
): any {
  return {
    "@odata.type": item["odataType"],
    highWaterMarkColumnName: item["highWaterMarkColumnName"],
  };
}

export function azureSearchDocumentsIndexesHighWaterMarkChangeDetectionPolicyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesHighWaterMarkChangeDetectionPolicy {
  return {
    odataType: item["@odata.type"],
    highWaterMarkColumnName: item["highWaterMarkColumnName"],
  };
}

/** Defines a data change detection policy that captures changes using the Integrated Change Tracking feature of Azure SQL Database. */
export interface AzureSearchDocumentsIndexesSqlIntegratedChangeTrackingPolicy
  extends AzureSearchDocumentsIndexesDataChangeDetectionPolicy {
  /** A URI fragment specifying the type of data change detection policy. */
  odataType: "#Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy";
}

export function azureSearchDocumentsIndexesSqlIntegratedChangeTrackingPolicySerializer(
  item: AzureSearchDocumentsIndexesSqlIntegratedChangeTrackingPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesSqlIntegratedChangeTrackingPolicyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSqlIntegratedChangeTrackingPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/** Base type for data deletion detection policies. */
export interface AzureSearchDocumentsIndexesDataDeletionDetectionPolicy {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy, #Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy */
  odataType: string;
}

export function azureSearchDocumentsIndexesDataDeletionDetectionPolicySerializer(
  item: AzureSearchDocumentsIndexesDataDeletionDetectionPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesDataDeletionDetectionPolicyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDataDeletionDetectionPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for DataDeletionDetectionPolicyUnion */
export type DataDeletionDetectionPolicyUnion =
  | AzureSearchDocumentsIndexesSoftDeleteColumnDeletionDetectionPolicy
  | AzureSearchDocumentsIndexesNativeBlobSoftDeleteDeletionDetectionPolicy
  | AzureSearchDocumentsIndexesDataDeletionDetectionPolicy;

export function azureSearchDocumentsIndexesDataDeletionDetectionPolicyUnionSerializer(
  item: DataDeletionDetectionPolicyUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy":
      return softDeleteColumnDeletionDetectionPolicySerializer(
        item as SoftDeleteColumnDeletionDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy":
      return nativeBlobSoftDeleteDeletionDetectionPolicySerializer(
        item as NativeBlobSoftDeleteDeletionDetectionPolicy,
      );

    default:
      return azureSearchDocumentsIndexesDataDeletionDetectionPolicySerializer(
        item,
      );
  }
}

export function azureSearchDocumentsIndexesDataDeletionDetectionPolicyUnionDeserializer(
  item: any,
): DataDeletionDetectionPolicyUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy":
      return softDeleteColumnDeletionDetectionPolicyDeserializer(
        item as SoftDeleteColumnDeletionDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy":
      return nativeBlobSoftDeleteDeletionDetectionPolicyDeserializer(
        item as NativeBlobSoftDeleteDeletionDetectionPolicy,
      );

    default:
      return azureSearchDocumentsIndexesDataDeletionDetectionPolicyDeserializer(
        item,
      );
  }
}

/** Defines a data deletion detection policy that implements a soft-deletion strategy. It determines whether an item should be deleted based on the value of a designated 'soft delete' column. */
export interface AzureSearchDocumentsIndexesSoftDeleteColumnDeletionDetectionPolicy
  extends AzureSearchDocumentsIndexesDataDeletionDetectionPolicy {
  /** The name of the column to use for soft-deletion detection. */
  softDeleteColumnName?: string;
  /** The marker value that identifies an item as deleted. */
  softDeleteMarkerValue?: string;
  /** A URI fragment specifying the type of data deletion detection policy. */
  odataType: "#Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy";
}

export function azureSearchDocumentsIndexesSoftDeleteColumnDeletionDetectionPolicySerializer(
  item: AzureSearchDocumentsIndexesSoftDeleteColumnDeletionDetectionPolicy,
): any {
  return {
    "@odata.type": item["odataType"],
    softDeleteColumnName: item["softDeleteColumnName"],
    softDeleteMarkerValue: item["softDeleteMarkerValue"],
  };
}

export function azureSearchDocumentsIndexesSoftDeleteColumnDeletionDetectionPolicyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSoftDeleteColumnDeletionDetectionPolicy {
  return {
    odataType: item["@odata.type"],
    softDeleteColumnName: item["softDeleteColumnName"],
    softDeleteMarkerValue: item["softDeleteMarkerValue"],
  };
}

/** Defines a data deletion detection policy utilizing Azure Blob Storage's native soft delete feature for deletion detection. */
export interface AzureSearchDocumentsIndexesNativeBlobSoftDeleteDeletionDetectionPolicy
  extends AzureSearchDocumentsIndexesDataDeletionDetectionPolicy {
  /** A URI fragment specifying the type of data deletion detection policy. */
  odataType: "#Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy";
}

export function azureSearchDocumentsIndexesNativeBlobSoftDeleteDeletionDetectionPolicySerializer(
  item: AzureSearchDocumentsIndexesNativeBlobSoftDeleteDeletionDetectionPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function azureSearchDocumentsIndexesNativeBlobSoftDeleteDeletionDetectionPolicyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesNativeBlobSoftDeleteDeletionDetectionPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/** Response from a List Datasources request. If successful, it includes the full definitions of all datasources. */
export interface AzureSearchDocumentsIndexesListDataSourcesResult {
  /** The datasources in the Search service. */
  dataSources: AzureSearchDocumentsIndexesSearchIndexerDataSourceConnection[];
}

export function azureSearchDocumentsIndexesListDataSourcesResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexesListDataSourcesResult {
  return {
    dataSources:
      azureSearchDocumentsIndexesSearchIndexerDataSourceConnectionArrayDeserializer(
        item["value"],
      ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerDataSourceConnectionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerDataSourceConnection>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerDataSourceConnectionSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesSearchIndexerDataSourceConnectionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerDataSourceConnection>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerDataSourceConnectionDeserializer(
      item,
    );
  });
}

/** The type of the keysOrIds. */
export interface AzureSearchDocumentsIndexesDocumentKeysOrIds {
  /** document keys to be reset */
  documentKeys?: string[];
  /** datasource document identifiers to be reset */
  datasourceDocumentIds?: string[];
}

export function azureSearchDocumentsIndexesDocumentKeysOrIdsSerializer(
  item: AzureSearchDocumentsIndexesDocumentKeysOrIds,
): any {
  return {
    documentKeys: !item["documentKeys"]
      ? item["documentKeys"]
      : item["documentKeys"].map((p: any) => {
          return p;
        }),
    datasourceDocumentIds: !item["datasourceDocumentIds"]
      ? item["datasourceDocumentIds"]
      : item["datasourceDocumentIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Represents an indexer. */
export interface AzureSearchDocumentsIndexesSearchIndexer {
  /** The name of the indexer. */
  name: string;
  /** The description of the indexer. */
  description?: string;
  /** The name of the datasource from which this indexer reads data. */
  dataSourceName: string;
  /** The name of the skillset executing with this indexer. */
  skillsetName?: string;
  /** The name of the index to which this indexer writes data. */
  targetIndexName: string;
  /** The schedule for this indexer. */
  schedule?: AzureSearchDocumentsIndexesIndexingSchedule;
  /** Parameters for indexer execution. */
  parameters?: AzureSearchDocumentsIndexesIndexingParameters;
  /** Defines mappings between fields in the data source and corresponding target fields in the index. */
  fieldMappings?: AzureSearchDocumentsIndexesFieldMapping[];
  /** Output field mappings are applied after enrichment and immediately before indexing. */
  outputFieldMappings?: AzureSearchDocumentsIndexesFieldMapping[];
  /** A value indicating whether the indexer is disabled. Default is false. */
  isDisabled?: boolean;
  /** The ETag of the indexer. */
  eTag?: string;
  /** A description of an encryption key that you create in Azure Key Vault. This key is used to provide an additional level of encryption-at-rest for your indexer definition (as well as indexer execution status) when you want full assurance that no one, not even Microsoft, can decrypt them. Once you have encrypted your indexer definition, it will always remain encrypted. The search service will ignore attempts to set this property to null. You can change this property as needed if you want to rotate your encryption key; Your indexer definition (and indexer execution status) will be unaffected. Encryption with customer-managed keys is not available for free search services, and is only available for paid services created on or after January 1, 2019. */
  encryptionKey?: AzureSearchDocumentsIndexesSearchResourceEncryptionKey;
  /** Adds caching to an enrichment pipeline to allow for incremental modification steps without having to rebuild the index every time. */
  cache?: AzureSearchDocumentsIndexesSearchIndexerCache;
}

export function azureSearchDocumentsIndexesSearchIndexerSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexer,
): any {
  return {
    name: item["name"],
    description: item["description"],
    dataSourceName: item["dataSourceName"],
    skillsetName: item["skillsetName"],
    targetIndexName: item["targetIndexName"],
    schedule: !item["schedule"]
      ? item["schedule"]
      : azureSearchDocumentsIndexesIndexingScheduleSerializer(item["schedule"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesIndexingParametersSerializer(
          item["parameters"],
        ),
    fieldMappings: !item["fieldMappings"]
      ? item["fieldMappings"]
      : azureSearchDocumentsIndexesFieldMappingArraySerializer(
          item["fieldMappings"],
        ),
    outputFieldMappings: !item["outputFieldMappings"]
      ? item["outputFieldMappings"]
      : azureSearchDocumentsIndexesFieldMappingArraySerializer(
          item["outputFieldMappings"],
        ),
    disabled: item["isDisabled"],
    "@odata.etag": item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
    cache: !item["cache"]
      ? item["cache"]
      : azureSearchDocumentsIndexesSearchIndexerCacheSerializer(item["cache"]),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexer {
  return {
    name: item["name"],
    description: item["description"],
    dataSourceName: item["dataSourceName"],
    skillsetName: item["skillsetName"],
    targetIndexName: item["targetIndexName"],
    schedule: !item["schedule"]
      ? item["schedule"]
      : azureSearchDocumentsIndexesIndexingScheduleDeserializer(
          item["schedule"],
        ),
    parameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesIndexingParametersDeserializer(
          item["parameters"],
        ),
    fieldMappings: !item["fieldMappings"]
      ? item["fieldMappings"]
      : azureSearchDocumentsIndexesFieldMappingArrayDeserializer(
          item["fieldMappings"],
        ),
    outputFieldMappings: !item["outputFieldMappings"]
      ? item["outputFieldMappings"]
      : azureSearchDocumentsIndexesFieldMappingArrayDeserializer(
          item["outputFieldMappings"],
        ),
    isDisabled: item["disabled"],
    eTag: item["@odata.etag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
    cache: !item["cache"]
      ? item["cache"]
      : azureSearchDocumentsIndexesSearchIndexerCacheDeserializer(
          item["cache"],
        ),
  };
}

/** Represents parameters for indexer execution. */
export interface AzureSearchDocumentsIndexesIndexingParameters {
  /** The number of items that are read from the data source and indexed as a single batch in order to improve performance. The default depends on the data source type. */
  batchSize?: number;
  /** The maximum number of items that can fail indexing for indexer execution to still be considered successful. -1 means no limit. Default is 0. */
  maxFailedItems?: number;
  /** The maximum number of items in a single batch that can fail indexing for the batch to still be considered successful. -1 means no limit. Default is 0. */
  maxFailedItemsPerBatch?: number;
  /** A dictionary of indexer-specific configuration properties. Each name is the name of a specific property. Each value must be of a primitive type. */
  configuration?: AzureSearchDocumentsIndexesIndexingParametersConfiguration;
}

export function azureSearchDocumentsIndexesIndexingParametersSerializer(
  item: AzureSearchDocumentsIndexesIndexingParameters,
): any {
  return {
    batchSize: item["batchSize"],
    maxFailedItems: item["maxFailedItems"],
    maxFailedItemsPerBatch: item["maxFailedItemsPerBatch"],
    configuration: !item["configuration"]
      ? item["configuration"]
      : azureSearchDocumentsIndexesIndexingParametersConfigurationSerializer(
          item["configuration"],
        ),
  };
}

export function azureSearchDocumentsIndexesIndexingParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesIndexingParameters {
  return {
    batchSize: item["batchSize"],
    maxFailedItems: item["maxFailedItems"],
    maxFailedItemsPerBatch: item["maxFailedItemsPerBatch"],
    configuration: !item["configuration"]
      ? item["configuration"]
      : azureSearchDocumentsIndexesIndexingParametersConfigurationDeserializer(
          item["configuration"],
        ),
  };
}

/** A dictionary of indexer-specific configuration properties. Each name is the name of a specific property. Each value must be of a primitive type. */
export interface AzureSearchDocumentsIndexesIndexingParametersConfiguration {
  /** Represents the parsing mode for indexing from an Azure blob data source. */
  parsingMode?: AzureSearchDocumentsIndexesBlobIndexerParsingMode;
  /** Comma-delimited list of filename extensions to ignore when processing from Azure blob storage.  For example, you could exclude ".png, .mp4" to skip over those files during indexing. */
  excludedFileNameExtensions?: string;
  /** Comma-delimited list of filename extensions to select when processing from Azure blob storage.  For example, you could focus indexing on specific application files ".docx, .pptx, .msg" to specifically include those file types. */
  indexedFileNameExtensions?: string;
  /** For Azure blobs, set to false if you want to continue indexing when an unsupported content type is encountered, and you don't know all the content types (file extensions) in advance. */
  failOnUnsupportedContentType?: boolean;
  /** For Azure blobs, set to false if you want to continue indexing if a document fails indexing. */
  failOnUnprocessableDocument?: boolean;
  /** For Azure blobs, set this property to true to still index storage metadata for blob content that is too large to process. Oversized blobs are treated as errors by default. For limits on blob size, see https://learn.microsoft.com/azure/search/search-limits-quotas-capacity. */
  indexStorageMetadataOnlyForOversizedDocuments?: boolean;
  /** For CSV blobs, specifies a comma-delimited list of column headers, useful for mapping source fields to destination fields in an index. */
  delimitedTextHeaders?: string;
  /** For CSV blobs, specifies the end-of-line single-character delimiter for CSV files where each line starts a new document (for example, "|"). */
  delimitedTextDelimiter?: string;
  /** For CSV blobs, indicates that the first (non-blank) line of each blob contains headers. */
  firstLineContainsHeaders?: boolean;
  /** Specifies the submode that will determine whether a markdown file will be parsed into exactly one search document or multiple search documents. Default is `oneToMany`. */
  markdownParsingSubmode?: AzureSearchDocumentsIndexesMarkdownParsingSubmode;
  /** Specifies the max header depth that will be considered while grouping markdown content. Default is `h6`. */
  markdownHeaderDepth?: AzureSearchDocumentsIndexesMarkdownHeaderDepth;
  /** For JSON arrays, given a structured or semi-structured document, you can specify a path to the array using this property. */
  documentRoot?: string;
  /** Specifies the data to extract from Azure blob storage and tells the indexer which data to extract from image content when "imageAction" is set to a value other than "none".  This applies to embedded image content in a .PDF or other application, or image files such as .jpg and .png, in Azure blobs. */
  dataToExtract?: AzureSearchDocumentsIndexesBlobIndexerDataToExtract;
  /** Determines how to process embedded images and image files in Azure blob storage.  Setting the "imageAction" configuration to any value other than "none" requires that a skillset also be attached to that indexer. */
  imageAction?: AzureSearchDocumentsIndexesBlobIndexerImageAction;
  /** If true, will create a path //document//file_data that is an object representing the original file data downloaded from your blob data source. This allows you to pass the original file data to a custom skill for processing within the enrichment pipeline, or to the Document Extraction skill. */
  allowSkillsetToReadFileData?: boolean;
  /** Determines algorithm for text extraction from PDF files in Azure blob storage. */
  pdfTextRotationAlgorithm?: AzureSearchDocumentsIndexesBlobIndexerPDFTextRotationAlgorithm;
  /** Specifies the environment in which the indexer should execute. */
  executionEnvironment?: AzureSearchDocumentsIndexesIndexerExecutionEnvironment;
  /** Increases the timeout beyond the 5-minute default for Azure SQL database data sources, specified in the format "hh:mm:ss". */
  queryTimeout?: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsIndexesIndexingParametersConfigurationSerializer(
  item: AzureSearchDocumentsIndexesIndexingParametersConfiguration,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    parsingMode: item["parsingMode"],
    excludedFileNameExtensions: item["excludedFileNameExtensions"],
    indexedFileNameExtensions: item["indexedFileNameExtensions"],
    failOnUnsupportedContentType: item["failOnUnsupportedContentType"],
    failOnUnprocessableDocument: item["failOnUnprocessableDocument"],
    indexStorageMetadataOnlyForOversizedDocuments:
      item["indexStorageMetadataOnlyForOversizedDocuments"],
    delimitedTextHeaders: item["delimitedTextHeaders"],
    delimitedTextDelimiter: item["delimitedTextDelimiter"],
    firstLineContainsHeaders: item["firstLineContainsHeaders"],
    markdownParsingSubmode: item["markdownParsingSubmode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
    documentRoot: item["documentRoot"],
    dataToExtract: item["dataToExtract"],
    imageAction: item["imageAction"],
    allowSkillsetToReadFileData: item["allowSkillsetToReadFileData"],
    pdfTextRotationAlgorithm: item["pdfTextRotationAlgorithm"],
    executionEnvironment: item["executionEnvironment"],
    queryTimeout: item["queryTimeout"],
  };
}

export function azureSearchDocumentsIndexesIndexingParametersConfigurationDeserializer(
  item: any,
): AzureSearchDocumentsIndexesIndexingParametersConfiguration {
  return {
    additionalProperties: serializeRecord(item, [
      "parsingMode",
      "excludedFileNameExtensions",
      "indexedFileNameExtensions",
      "failOnUnsupportedContentType",
      "failOnUnprocessableDocument",
      "indexStorageMetadataOnlyForOversizedDocuments",
      "delimitedTextHeaders",
      "delimitedTextDelimiter",
      "firstLineContainsHeaders",
      "markdownParsingSubmode",
      "markdownHeaderDepth",
      "documentRoot",
      "dataToExtract",
      "imageAction",
      "allowSkillsetToReadFileData",
      "pdfTextRotationAlgorithm",
      "executionEnvironment",
      "queryTimeout",
    ]),
    parsingMode: item["parsingMode"],
    excludedFileNameExtensions: item["excludedFileNameExtensions"],
    indexedFileNameExtensions: item["indexedFileNameExtensions"],
    failOnUnsupportedContentType: item["failOnUnsupportedContentType"],
    failOnUnprocessableDocument: item["failOnUnprocessableDocument"],
    indexStorageMetadataOnlyForOversizedDocuments:
      item["indexStorageMetadataOnlyForOversizedDocuments"],
    delimitedTextHeaders: item["delimitedTextHeaders"],
    delimitedTextDelimiter: item["delimitedTextDelimiter"],
    firstLineContainsHeaders: item["firstLineContainsHeaders"],
    markdownParsingSubmode: item["markdownParsingSubmode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
    documentRoot: item["documentRoot"],
    dataToExtract: item["dataToExtract"],
    imageAction: item["imageAction"],
    allowSkillsetToReadFileData: item["allowSkillsetToReadFileData"],
    pdfTextRotationAlgorithm: item["pdfTextRotationAlgorithm"],
    executionEnvironment: item["executionEnvironment"],
    queryTimeout: item["queryTimeout"],
  };
}

/** Represents the parsing mode for indexing from an Azure blob data source. */
export enum KnownAzureSearchDocumentsIndexesBlobIndexerParsingMode {
  /** Set to default for normal file processing. */
  Default = "default",
  /** Set to text to improve indexing performance on plain text files in blob storage. */
  Text = "text",
  /** Set to delimitedText when blobs are plain CSV files. */
  DelimitedText = "delimitedText",
  /** Set to json to extract structured content from JSON files. */
  Json = "json",
  /** Set to jsonArray to extract individual elements of a JSON array as separate documents. */
  JsonArray = "jsonArray",
  /** Set to jsonLines to extract individual JSON entities, separated by a new line, as separate documents. */
  JsonLines = "jsonLines",
  /** Set to markdown to extract content from markdown files. */
  Markdown = "markdown",
}

/**
 * Represents the parsing mode for indexing from an Azure blob data source. \
 * {@link KnownAzureSearchDocumentsIndexesBlobIndexerParsingMode} can be used interchangeably with AzureSearchDocumentsIndexesBlobIndexerParsingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**: Set to default for normal file processing. \
 * **text**: Set to text to improve indexing performance on plain text files in blob storage. \
 * **delimitedText**: Set to delimitedText when blobs are plain CSV files. \
 * **json**: Set to json to extract structured content from JSON files. \
 * **jsonArray**: Set to jsonArray to extract individual elements of a JSON array as separate documents. \
 * **jsonLines**: Set to jsonLines to extract individual JSON entities, separated by a new line, as separate documents. \
 * **markdown**: Set to markdown to extract content from markdown files.
 */
export type AzureSearchDocumentsIndexesBlobIndexerParsingMode = string;

/** Specifies the submode that will determine whether a markdown file will be parsed into exactly one search document or multiple search documents. Default is `oneToMany`. */
export enum KnownAzureSearchDocumentsIndexesMarkdownParsingSubmode {
  /** Indicates that each section of the markdown file (up to a specified depth) will be parsed into individual search documents. This can result in a single markdown file producing multiple search documents. This is the default sub-mode. */
  OneToMany = "oneToMany",
  /** Indicates that each markdown file will be parsed into a single search document. */
  OneToOne = "oneToOne",
}

/**
 * Specifies the submode that will determine whether a markdown file will be parsed into exactly one search document or multiple search documents. Default is `oneToMany`. \
 * {@link KnownAzureSearchDocumentsIndexesMarkdownParsingSubmode} can be used interchangeably with AzureSearchDocumentsIndexesMarkdownParsingSubmode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **oneToMany**: Indicates that each section of the markdown file (up to a specified depth) will be parsed into individual search documents. This can result in a single markdown file producing multiple search documents. This is the default sub-mode. \
 * **oneToOne**: Indicates that each markdown file will be parsed into a single search document.
 */
export type AzureSearchDocumentsIndexesMarkdownParsingSubmode = string;

/** Specifies the max header depth that will be considered while grouping markdown content. Default is `h6`. */
export enum KnownAzureSearchDocumentsIndexesMarkdownHeaderDepth {
  /** Indicates that headers up to a level of h1 will be considered while grouping markdown content. */
  H1 = "h1",
  /** Indicates that headers up to a level of h2 will be considered while grouping markdown content. */
  H2 = "h2",
  /** Indicates that headers up to a level of h3 will be considered while grouping markdown content. */
  H3 = "h3",
  /** Indicates that headers up to a level of h4 will be considered while grouping markdown content. */
  H4 = "h4",
  /** Indicates that headers up to a level of h5 will be considered while grouping markdown content. */
  H5 = "h5",
  /** Indicates that headers up to a level of h6 will be considered while grouping markdown content. This is the default. */
  H6 = "h6",
}

/**
 * Specifies the max header depth that will be considered while grouping markdown content. Default is `h6`. \
 * {@link KnownAzureSearchDocumentsIndexesMarkdownHeaderDepth} can be used interchangeably with AzureSearchDocumentsIndexesMarkdownHeaderDepth,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **h1**: Indicates that headers up to a level of h1 will be considered while grouping markdown content. \
 * **h2**: Indicates that headers up to a level of h2 will be considered while grouping markdown content. \
 * **h3**: Indicates that headers up to a level of h3 will be considered while grouping markdown content. \
 * **h4**: Indicates that headers up to a level of h4 will be considered while grouping markdown content. \
 * **h5**: Indicates that headers up to a level of h5 will be considered while grouping markdown content. \
 * **h6**: Indicates that headers up to a level of h6 will be considered while grouping markdown content. This is the default.
 */
export type AzureSearchDocumentsIndexesMarkdownHeaderDepth = string;

/** Specifies the data to extract from Azure blob storage and tells the indexer which data to extract from image content when "imageAction" is set to a value other than "none".  This applies to embedded image content in a .PDF or other application, or image files such as .jpg and .png, in Azure blobs. */
export enum KnownAzureSearchDocumentsIndexesBlobIndexerDataToExtract {
  /** Indexes just the standard blob properties and user-specified metadata. */
  StorageMetadata = "storageMetadata",
  /** Extracts metadata provided by the Azure blob storage subsystem and the content-type specific metadata (for example, metadata unique to just .png files are indexed). */
  AllMetadata = "allMetadata",
  /** Extracts all metadata and textual content from each blob. */
  ContentAndMetadata = "contentAndMetadata",
}

/**
 * Specifies the data to extract from Azure blob storage and tells the indexer which data to extract from image content when "imageAction" is set to a value other than "none".  This applies to embedded image content in a .PDF or other application, or image files such as .jpg and .png, in Azure blobs. \
 * {@link KnownAzureSearchDocumentsIndexesBlobIndexerDataToExtract} can be used interchangeably with AzureSearchDocumentsIndexesBlobIndexerDataToExtract,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **storageMetadata**: Indexes just the standard blob properties and user-specified metadata. \
 * **allMetadata**: Extracts metadata provided by the Azure blob storage subsystem and the content-type specific metadata (for example, metadata unique to just .png files are indexed). \
 * **contentAndMetadata**: Extracts all metadata and textual content from each blob.
 */
export type AzureSearchDocumentsIndexesBlobIndexerDataToExtract = string;

/** Determines how to process embedded images and image files in Azure blob storage.  Setting the "imageAction" configuration to any value other than "none" requires that a skillset also be attached to that indexer. */
export enum KnownAzureSearchDocumentsIndexesBlobIndexerImageAction {
  /** Ignores embedded images or image files in the data set.  This is the default. */
  None = "none",
  /** Extracts text from images (for example, the word "STOP" from a traffic stop sign), and embeds it into the content field.  This action requires that "dataToExtract" is set to "contentAndMetadata".  A normalized image refers to additional processing resulting in uniform image output, sized and rotated to promote consistent rendering when you include images in visual search results. This information is generated for each image when you use this option. */
  GenerateNormalizedImages = "generateNormalizedImages",
  /** Extracts text from images (for example, the word "STOP" from a traffic stop sign), and embeds it into the content field, but treats PDF files differently in that each page will be rendered as an image and normalized accordingly, instead of extracting embedded images.  Non-PDF file types will be treated the same as if "generateNormalizedImages" was set. */
  GenerateNormalizedImagePerPage = "generateNormalizedImagePerPage",
}

/**
 * Determines how to process embedded images and image files in Azure blob storage.  Setting the "imageAction" configuration to any value other than "none" requires that a skillset also be attached to that indexer. \
 * {@link KnownAzureSearchDocumentsIndexesBlobIndexerImageAction} can be used interchangeably with AzureSearchDocumentsIndexesBlobIndexerImageAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: Ignores embedded images or image files in the data set.  This is the default. \
 * **generateNormalizedImages**: Extracts text from images (for example, the word "STOP" from a traffic stop sign), and embeds it into the content field.  This action requires that "dataToExtract" is set to "contentAndMetadata".  A normalized image refers to additional processing resulting in uniform image output, sized and rotated to promote consistent rendering when you include images in visual search results. This information is generated for each image when you use this option. \
 * **generateNormalizedImagePerPage**: Extracts text from images (for example, the word "STOP" from a traffic stop sign), and embeds it into the content field, but treats PDF files differently in that each page will be rendered as an image and normalized accordingly, instead of extracting embedded images.  Non-PDF file types will be treated the same as if "generateNormalizedImages" was set.
 */
export type AzureSearchDocumentsIndexesBlobIndexerImageAction = string;

/** Determines algorithm for text extraction from PDF files in Azure blob storage. */
export enum KnownAzureSearchDocumentsIndexesBlobIndexerPDFTextRotationAlgorithm {
  /** Leverages normal text extraction.  This is the default. */
  None = "none",
  /** May produce better and more readable text extraction from PDF files that have rotated text within them.  Note that there may be a small performance speed impact when this parameter is used.  This parameter only applies to PDF files, and only to PDFs with embedded text.  If the rotated text appears within an embedded image in the PDF, this parameter does not apply. */
  DetectAngles = "detectAngles",
}

/**
 * Determines algorithm for text extraction from PDF files in Azure blob storage. \
 * {@link KnownAzureSearchDocumentsIndexesBlobIndexerPDFTextRotationAlgorithm} can be used interchangeably with AzureSearchDocumentsIndexesBlobIndexerPDFTextRotationAlgorithm,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: Leverages normal text extraction.  This is the default. \
 * **detectAngles**: May produce better and more readable text extraction from PDF files that have rotated text within them.  Note that there may be a small performance speed impact when this parameter is used.  This parameter only applies to PDF files, and only to PDFs with embedded text.  If the rotated text appears within an embedded image in the PDF, this parameter does not apply.
 */
export type AzureSearchDocumentsIndexesBlobIndexerPDFTextRotationAlgorithm =
  string;

/** Specifies the environment in which the indexer should execute. */
export enum KnownAzureSearchDocumentsIndexesIndexerExecutionEnvironment {
  /** Indicates that the search service can determine where the indexer should execute. This is the default environment when nothing is specified and is the recommended value. */
  Standard = "standard",
  /** Indicates that the indexer should run with the environment provisioned specifically for the search service. This should only be specified as the execution environment if the indexer needs to access resources securely over shared private link resources. */
  Private = "private",
}

/**
 * Specifies the environment in which the indexer should execute. \
 * {@link KnownAzureSearchDocumentsIndexesIndexerExecutionEnvironment} can be used interchangeably with AzureSearchDocumentsIndexesIndexerExecutionEnvironment,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **standard**: Indicates that the search service can determine where the indexer should execute. This is the default environment when nothing is specified and is the recommended value. \
 * **private**: Indicates that the indexer should run with the environment provisioned specifically for the search service. This should only be specified as the execution environment if the indexer needs to access resources securely over shared private link resources.
 */
export type AzureSearchDocumentsIndexesIndexerExecutionEnvironment = string;

export function azureSearchDocumentsIndexesFieldMappingArraySerializer(
  result: Array<AzureSearchDocumentsIndexesFieldMapping>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesFieldMappingSerializer(item);
  });
}

export function azureSearchDocumentsIndexesFieldMappingArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesFieldMapping>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesFieldMappingDeserializer(item);
  });
}

/** Defines a mapping between a field in a data source and a target field in an index. */
export interface AzureSearchDocumentsIndexesFieldMapping {
  /** The name of the field in the data source. */
  sourceFieldName: string;
  /** The name of the target field in the index. Same as the source field name by default. */
  targetFieldName?: string;
  /** A function to apply to each source field value before indexing. */
  mappingFunction?: AzureSearchDocumentsIndexesFieldMappingFunction;
}

export function azureSearchDocumentsIndexesFieldMappingSerializer(
  item: AzureSearchDocumentsIndexesFieldMapping,
): any {
  return {
    sourceFieldName: item["sourceFieldName"],
    targetFieldName: item["targetFieldName"],
    mappingFunction: !item["mappingFunction"]
      ? item["mappingFunction"]
      : azureSearchDocumentsIndexesFieldMappingFunctionSerializer(
          item["mappingFunction"],
        ),
  };
}

export function azureSearchDocumentsIndexesFieldMappingDeserializer(
  item: any,
): AzureSearchDocumentsIndexesFieldMapping {
  return {
    sourceFieldName: item["sourceFieldName"],
    targetFieldName: item["targetFieldName"],
    mappingFunction: !item["mappingFunction"]
      ? item["mappingFunction"]
      : azureSearchDocumentsIndexesFieldMappingFunctionDeserializer(
          item["mappingFunction"],
        ),
  };
}

/** Represents a function that transforms a value from a data source before indexing. */
export interface AzureSearchDocumentsIndexesFieldMappingFunction {
  /** The name of the field mapping function. */
  name: string;
  /** A dictionary of parameter name/value pairs to pass to the function. Each value must be of a primitive type. */
  parameters?: Record<string, any>;
}

export function azureSearchDocumentsIndexesFieldMappingFunctionSerializer(
  item: AzureSearchDocumentsIndexesFieldMappingFunction,
): any {
  return { name: item["name"], parameters: item["parameters"] };
}

export function azureSearchDocumentsIndexesFieldMappingFunctionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesFieldMappingFunction {
  return {
    name: item["name"],
    parameters: item["parameters"],
  };
}

/** The type of the cache. */
export interface AzureSearchDocumentsIndexesSearchIndexerCache {
  /** The connection string to the storage account where the cache data will be persisted. */
  storageConnectionString?: string;
  /** Specifies whether incremental reprocessing is enabled. */
  enableReprocessing?: boolean;
  /** The user-assigned managed identity used for connections to the enrichment cache.  If the connection string indicates an identity (ResourceId) and it's not specified, the system-assigned managed identity is used. On updates to the indexer, if the identity is unspecified, the value remains unchanged. If set to "none", the value of this property is cleared. */
  identity?: SearchIndexerDataIdentityUnion;
  /** A guid for the SearchIndexerCache. */
  id?: string;
}

export function azureSearchDocumentsIndexesSearchIndexerCacheSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerCache,
): any {
  return {
    storageConnectionString: item["storageConnectionString"],
    enableReprocessing: item["enableReprocessing"],
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["identity"],
        ),
    id: item["id"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerCacheDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerCache {
  return {
    storageConnectionString: item["storageConnectionString"],
    enableReprocessing: item["enableReprocessing"],
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["identity"],
        ),
    id: item["id"],
  };
}

/** Response from a List Indexers request. If successful, it includes the full definitions of all indexers. */
export interface AzureSearchDocumentsIndexesListIndexersResult {
  /** The indexers in the Search service. */
  indexers: AzureSearchDocumentsIndexesSearchIndexer[];
}

export function azureSearchDocumentsIndexesListIndexersResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexesListIndexersResult {
  return {
    indexers: azureSearchDocumentsIndexesSearchIndexerArrayDeserializer(
      item["value"],
    ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexer>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSearchIndexerArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexer>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerDeserializer(item);
  });
}

/** Represents the current status and execution history of an indexer. */
export interface AzureSearchDocumentsIndexesSearchIndexerStatus {
  /** The name of the indexer. */
  name: string;
  /** Overall indexer status. */
  status: AzureSearchDocumentsIndexesIndexerStatus;
  /** The result of the most recent or an in-progress indexer execution. */
  lastResult?: AzureSearchDocumentsIndexesIndexerExecutionResult;
  /** History of the recent indexer executions, sorted in reverse chronological order. */
  executionHistory: AzureSearchDocumentsIndexesIndexerExecutionResult[];
  /** The execution limits for the indexer. */
  limits: AzureSearchDocumentsIndexesSearchIndexerLimits;
}

export function azureSearchDocumentsIndexesSearchIndexerStatusDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerStatus {
  return {
    name: item["name"],
    status: item["status"],
    lastResult: !item["lastResult"]
      ? item["lastResult"]
      : azureSearchDocumentsIndexesIndexerExecutionResultDeserializer(
          item["lastResult"],
        ),
    executionHistory:
      azureSearchDocumentsIndexesIndexerExecutionResultArrayDeserializer(
        item["executionHistory"],
      ),
    limits: azureSearchDocumentsIndexesSearchIndexerLimitsDeserializer(
      item["limits"],
    ),
  };
}

/** Represents the overall indexer status. */
export enum KnownAzureSearchDocumentsIndexesIndexerStatus {
  /** Indicates that the indexer is in an unknown state. */
  Unknown = "unknown",
  /** Indicates that the indexer experienced an error that cannot be corrected without human intervention. */
  Error = "error",
  /** Indicates that the indexer is running normally. */
  Running = "running",
}

/**
 * Represents the overall indexer status. \
 * {@link KnownAzureSearchDocumentsIndexesIndexerStatus} can be used interchangeably with AzureSearchDocumentsIndexesIndexerStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **unknown**: Indicates that the indexer is in an unknown state. \
 * **error**: Indicates that the indexer experienced an error that cannot be corrected without human intervention. \
 * **running**: Indicates that the indexer is running normally.
 */
export type AzureSearchDocumentsIndexesIndexerStatus = string;

/** Represents the result of an individual indexer execution. */
export interface AzureSearchDocumentsIndexesIndexerExecutionResult {
  /** The outcome of this indexer execution. */
  status: AzureSearchDocumentsIndexesIndexerExecutionStatus;
  /** The outcome of this indexer execution. */
  readonly statusDetail?: AzureSearchDocumentsIndexesIndexerExecutionStatusDetail;
  /** The mode the indexer is running in. */
  readonly mode?: AzureSearchDocumentsIndexesIndexingMode;
  /** All of the state that defines and dictates the indexer's current execution. */
  readonly currentState?: AzureSearchDocumentsIndexesIndexerCurrentState;
  /** The error message indicating the top-level error, if any. */
  errorMessage?: string;
  /** The start time of this indexer execution. */
  startTime?: Date;
  /** The end time of this indexer execution, if the execution has already completed. */
  endTime?: Date;
  /** The item-level indexing errors. */
  errors: AzureSearchDocumentsIndexesSearchIndexerError[];
  /** The item-level indexing warnings. */
  warnings: AzureSearchDocumentsIndexesSearchIndexerWarning[];
  /** The number of items that were processed during this indexer execution. This includes both successfully processed items and items where indexing was attempted but failed. */
  itemCount: number;
  /** The number of items that failed to be indexed during this indexer execution. */
  failedItemCount: number;
  /** Change tracking state with which an indexer execution started. */
  initialTrackingState?: string;
  /** Change tracking state with which an indexer execution finished. */
  finalTrackingState?: string;
}

export function azureSearchDocumentsIndexesIndexerExecutionResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexesIndexerExecutionResult {
  return {
    status: item["status"],
    statusDetail: item["statusDetail"],
    mode: item["mode"],
    currentState: !item["currentState"]
      ? item["currentState"]
      : azureSearchDocumentsIndexesIndexerCurrentStateDeserializer(
          item["currentState"],
        ),
    errorMessage: item["errorMessage"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    errors: azureSearchDocumentsIndexesSearchIndexerErrorArrayDeserializer(
      item["errors"],
    ),
    warnings: azureSearchDocumentsIndexesSearchIndexerWarningArrayDeserializer(
      item["warnings"],
    ),
    itemCount: item["itemsProcessed"],
    failedItemCount: item["itemsFailed"],
    initialTrackingState: item["initialTrackingState"],
    finalTrackingState: item["finalTrackingState"],
  };
}

/** Represents the status of an individual indexer execution. */
export enum KnownAzureSearchDocumentsIndexesIndexerExecutionStatus {
  /** An indexer invocation has failed, but the failure may be transient. Indexer invocations will continue per schedule. */
  TransientFailure = "transientFailure",
  /** Indexer execution completed successfully. */
  Success = "success",
  /** Indexer execution is in progress. */
  InProgress = "inProgress",
  /** Indexer has been reset. */
  Reset = "reset",
}

/**
 * Represents the status of an individual indexer execution. \
 * {@link KnownAzureSearchDocumentsIndexesIndexerExecutionStatus} can be used interchangeably with AzureSearchDocumentsIndexesIndexerExecutionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **transientFailure**: An indexer invocation has failed, but the failure may be transient. Indexer invocations will continue per schedule. \
 * **success**: Indexer execution completed successfully. \
 * **inProgress**: Indexer execution is in progress. \
 * **reset**: Indexer has been reset.
 */
export type AzureSearchDocumentsIndexesIndexerExecutionStatus = string;

/** Details the status of an individual indexer execution. */
export enum KnownAzureSearchDocumentsIndexesIndexerExecutionStatusDetail {
  /** Indicates that the reset that occurred was for a call to ResetDocs. */
  ResetDocs = "resetDocs",
  /** Indicates to selectively resync based on option(s) from data source. */
  Resync = "resync",
}

/**
 * Details the status of an individual indexer execution. \
 * {@link KnownAzureSearchDocumentsIndexesIndexerExecutionStatusDetail} can be used interchangeably with AzureSearchDocumentsIndexesIndexerExecutionStatusDetail,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **resetDocs**: Indicates that the reset that occurred was for a call to ResetDocs. \
 * **resync**: Indicates to selectively resync based on option(s) from data source.
 */
export type AzureSearchDocumentsIndexesIndexerExecutionStatusDetail = string;

/** Represents the mode the indexer is executing in. */
export enum KnownAzureSearchDocumentsIndexesIndexingMode {
  /** The indexer is indexing all documents in the datasource. */
  IndexingAllDocs = "indexingAllDocs",
  /** The indexer is indexing selective, reset documents in the datasource. The documents being indexed are defined on indexer status. */
  IndexingResetDocs = "indexingResetDocs",
  /** The indexer is resyncing and indexing selective option(s) from the datasource. */
  IndexingResync = "indexingResync",
}

/**
 * Represents the mode the indexer is executing in. \
 * {@link KnownAzureSearchDocumentsIndexesIndexingMode} can be used interchangeably with AzureSearchDocumentsIndexesIndexingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **indexingAllDocs**: The indexer is indexing all documents in the datasource. \
 * **indexingResetDocs**: The indexer is indexing selective, reset documents in the datasource. The documents being indexed are defined on indexer status. \
 * **indexingResync**: The indexer is resyncing and indexing selective option(s) from the datasource.
 */
export type AzureSearchDocumentsIndexesIndexingMode = string;

/** Represents all of the state that defines and dictates the indexer's current execution. */
export interface AzureSearchDocumentsIndexesIndexerCurrentState {
  /** The mode the indexer is running in. */
  readonly mode?: AzureSearchDocumentsIndexesIndexingMode;
  /** Change tracking state used when indexing starts on all documents in the datasource. */
  readonly allDocsInitialTrackingState?: string;
  /** Change tracking state value when indexing finishes on all documents in the datasource. */
  readonly allDocsFinalTrackingState?: string;
  /** Change tracking state used when indexing starts on select, reset documents in the datasource. */
  readonly resetDocsInitialTrackingState?: string;
  /** Change tracking state value when indexing finishes on select, reset documents in the datasource. */
  readonly resetDocsFinalTrackingState?: string;
  /** Change tracking state used when indexing starts on selective options from the datasource. */
  readonly resyncInitialTrackingState?: string;
  /** Change tracking state value when indexing finishes on selective options from the datasource. */
  readonly resyncFinalTrackingState?: string;
  /** The list of document keys that have been reset. The document key is the document's unique identifier for the data in the search index. The indexer will prioritize selectively re-ingesting these keys. */
  readonly resetDocumentKeys?: string[];
  /** The list of datasource document ids that have been reset. The datasource document id is the unique identifier for the data in the datasource. The indexer will prioritize selectively re-ingesting these ids. */
  readonly resetDatasourceDocumentIds?: string[];
}

export function azureSearchDocumentsIndexesIndexerCurrentStateDeserializer(
  item: any,
): AzureSearchDocumentsIndexesIndexerCurrentState {
  return {
    mode: item["mode"],
    allDocsInitialTrackingState: item["allDocsInitialTrackingState"],
    allDocsFinalTrackingState: item["allDocsFinalTrackingState"],
    resetDocsInitialTrackingState: item["resetDocsInitialTrackingState"],
    resetDocsFinalTrackingState: item["resetDocsFinalTrackingState"],
    resyncInitialTrackingState: item["resyncInitialTrackingState"],
    resyncFinalTrackingState: item["resyncFinalTrackingState"],
    resetDocumentKeys: !item["resetDocumentKeys"]
      ? item["resetDocumentKeys"]
      : item["resetDocumentKeys"].map((p: any) => {
          return p;
        }),
    resetDatasourceDocumentIds: !item["resetDatasourceDocumentIds"]
      ? item["resetDatasourceDocumentIds"]
      : item["resetDatasourceDocumentIds"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerErrorArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerError>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerErrorDeserializer(item);
  });
}

/** Represents an item- or document-level indexing error. */
export interface AzureSearchDocumentsIndexesSearchIndexerError {
  /** The key of the item for which indexing failed. */
  key?: string;
  /** The message describing the error that occurred while processing the item. */
  errorMessage: string;
  /** The status code indicating why the indexing operation failed. Possible values include: 400 for a malformed input document, 404 for document not found, 409 for a version conflict, 422 when the index is temporarily unavailable, or 503 for when the service is too busy. */
  statusCode: number;
  /** The name of the source at which the error originated. For example, this could refer to a particular skill in the attached skillset. This may not be always available. */
  name?: string;
  /** Additional, verbose details about the error to assist in debugging the indexer. This may not be always available. */
  details?: string;
  /** A link to a troubleshooting guide for these classes of errors. This may not be always available. */
  documentationLink?: string;
}

export function azureSearchDocumentsIndexesSearchIndexerErrorDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerError {
  return {
    key: item["key"],
    errorMessage: item["errorMessage"],
    statusCode: item["statusCode"],
    name: item["name"],
    details: item["details"],
    documentationLink: item["documentationLink"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerWarningArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerWarning>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerWarningDeserializer(item);
  });
}

/** Represents an item-level warning. */
export interface AzureSearchDocumentsIndexesSearchIndexerWarning {
  /** The key of the item which generated a warning. */
  key?: string;
  /** The message describing the warning that occurred while processing the item. */
  message: string;
  /** The name of the source at which the warning originated. For example, this could refer to a particular skill in the attached skillset. This may not be always available. */
  name?: string;
  /** Additional, verbose details about the warning to assist in debugging the indexer. This may not be always available. */
  details?: string;
  /** A link to a troubleshooting guide for these classes of warnings. This may not be always available. */
  documentationLink?: string;
}

export function azureSearchDocumentsIndexesSearchIndexerWarningDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerWarning {
  return {
    key: item["key"],
    message: item["message"],
    name: item["name"],
    details: item["details"],
    documentationLink: item["documentationLink"],
  };
}

export function azureSearchDocumentsIndexesIndexerExecutionResultArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesIndexerExecutionResult>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesIndexerExecutionResultDeserializer(item);
  });
}

/** Represents the limits that can be applied to an indexer. */
export interface AzureSearchDocumentsIndexesSearchIndexerLimits {
  /** The maximum duration that the indexer is permitted to run for one execution. */
  maxRunTime?: string;
  /** The maximum size of a document, in bytes, which will be considered valid for indexing. */
  maxDocumentExtractionSize?: number;
  /** The maximum number of characters that will be extracted from a document picked up for indexing. */
  maxDocumentContentCharactersToExtract?: number;
}

export function azureSearchDocumentsIndexesSearchIndexerLimitsDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerLimits {
  return {
    maxRunTime: item["maxRunTime"],
    maxDocumentExtractionSize: item["maxDocumentExtractionSize"],
    maxDocumentContentCharactersToExtract:
      item["maxDocumentContentCharactersToExtract"],
  };
}

/** A list of skills. */
export interface AzureSearchDocumentsIndexesSearchIndexerSkillset {
  /** The name of the skillset. */
  name: string;
  /** The description of the skillset. */
  description?: string;
  /** A list of skills in the skillset. */
  skills: SearchIndexerSkillUnion[];
  /** Details about the Azure AI service to be used when running skills. */
  cognitiveServicesAccount?: CognitiveServicesAccountUnion;
  /** Definition of additional projections to Azure blob, table, or files, of enriched data. */
  knowledgeStore?: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStore;
  /** Definition of additional projections to secondary search index(es). */
  indexProjection?: AzureSearchDocumentsIndexesSearchIndexerIndexProjection;
  /** The ETag of the skillset. */
  eTag?: string;
  /** A description of an encryption key that you create in Azure Key Vault. This key is used to provide an additional level of encryption-at-rest for your skillset definition when you want full assurance that no one, not even Microsoft, can decrypt your skillset definition. Once you have encrypted your skillset definition, it will always remain encrypted. The search service will ignore attempts to set this property to null. You can change this property as needed if you want to rotate your encryption key; Your skillset definition will be unaffected. Encryption with customer-managed keys is not available for free search services, and is only available for paid services created on or after January 1, 2019. */
  encryptionKey?: AzureSearchDocumentsIndexesSearchResourceEncryptionKey;
}

export function azureSearchDocumentsIndexesSearchIndexerSkillsetSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerSkillset,
): any {
  return {
    name: item["name"],
    description: item["description"],
    skills: azureSearchDocumentsIndexesSearchIndexerSkillUnionArraySerializer(
      item["skills"],
    ),
    cognitiveServices: !item["cognitiveServicesAccount"]
      ? item["cognitiveServicesAccount"]
      : azureSearchDocumentsIndexesCognitiveServicesAccountUnionSerializer(
          item["cognitiveServicesAccount"],
        ),
    knowledgeStore: !item["knowledgeStore"]
      ? item["knowledgeStore"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreSerializer(
          item["knowledgeStore"],
        ),
    indexProjections: !item["indexProjection"]
      ? item["indexProjection"]
      : azureSearchDocumentsIndexesSearchIndexerIndexProjectionSerializer(
          item["indexProjection"],
        ),
    "@odata.etag": item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeySerializer(
          item["encryptionKey"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerSkillsetDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerSkillset {
  return {
    name: item["name"],
    description: item["description"],
    skills: azureSearchDocumentsIndexesSearchIndexerSkillUnionArrayDeserializer(
      item["skills"],
    ),
    cognitiveServicesAccount: !item["cognitiveServices"]
      ? item["cognitiveServices"]
      : azureSearchDocumentsIndexesCognitiveServicesAccountUnionDeserializer(
          item["cognitiveServices"],
        ),
    knowledgeStore: !item["knowledgeStore"]
      ? item["knowledgeStore"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreDeserializer(
          item["knowledgeStore"],
        ),
    indexProjection: !item["indexProjections"]
      ? item["indexProjections"]
      : azureSearchDocumentsIndexesSearchIndexerIndexProjectionDeserializer(
          item["indexProjections"],
        ),
    eTag: item["@odata.etag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : azureSearchDocumentsIndexesSearchResourceEncryptionKeyDeserializer(
          item["encryptionKey"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerSkillUnionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerSkillUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerSkillUnionSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSearchIndexerSkillUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerSkillUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerSkillUnionDeserializer(item);
  });
}

/** Base type for skills. */
export interface AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Skills.Util.ConditionalSkill, #Microsoft.Skills.Text.KeyPhraseExtractionSkill, #Microsoft.Skills.Vision.OcrSkill, #Microsoft.Skills.Vision.ImageAnalysisSkill, #Microsoft.Skills.Text.LanguageDetectionSkill, #Microsoft.Skills.Util.ShaperSkill, #Microsoft.Skills.Text.MergeSkill, #Microsoft.Skills.Text.EntityRecognitionSkill, #Microsoft.Skills.Text.SentimentSkill, #Microsoft.Skills.Text.V3.SentimentSkill, #Microsoft.Skills.Text.V3.EntityLinkingSkill, #Microsoft.Skills.Text.V3.EntityRecognitionSkill, #Microsoft.Skills.Text.PIIDetectionSkill, #Microsoft.Skills.Text.SplitSkill, #Microsoft.Skills.Text.CustomEntityLookupSkill, #Microsoft.Skills.Text.TranslationSkill, #Microsoft.Skills.Util.DocumentExtractionSkill, #Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill, #Microsoft.Skills.Custom.WebApiSkill, #Microsoft.Skills.Custom.AmlSkill, #Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill, #Microsoft.Skills.Vision.VectorizeSkill, #Microsoft.Skills.Custom.ChatCompletionSkill */
  odataType: string;
  /** The name of the skill which uniquely identifies it within the skillset. A skill with no name defined will be given a default name of its 1-based index in the skills array, prefixed with the character '#'. */
  name?: string;
  /** The description of the skill which describes the inputs, outputs, and usage of the skill. */
  description?: string;
  /** Represents the level at which operations take place, such as the document root or document content (for example, /document or /document/content). The default is /document. */
  context?: string;
  /** Inputs of the skills could be a column in the source data set, or the output of an upstream skill. */
  inputs: AzureSearchDocumentsIndexesInputFieldMappingEntry[];
  /** The output of a skill is either a field in a search index, or a value that can be consumed as an input by another skill. */
  outputs: AzureSearchDocumentsIndexesOutputFieldMappingEntry[];
}

export function azureSearchDocumentsIndexesSearchIndexerSkillSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
  };
}

/** Alias for SearchIndexerSkillUnion */
export type SearchIndexerSkillUnion =
  | AzureSearchDocumentsIndexesConditionalSkill
  | AzureSearchDocumentsIndexesKeyPhraseExtractionSkill
  | AzureSearchDocumentsIndexesOcrSkill
  | AzureSearchDocumentsIndexesImageAnalysisSkill
  | AzureSearchDocumentsIndexesLanguageDetectionSkill
  | AzureSearchDocumentsIndexesShaperSkill
  | AzureSearchDocumentsIndexesMergeSkill
  | AzureSearchDocumentsIndexesEntityRecognitionSkill
  | AzureSearchDocumentsIndexesSentimentSkill
  | AzureSearchDocumentsIndexesSentimentSkillV3
  | AzureSearchDocumentsIndexesEntityLinkingSkill
  | AzureSearchDocumentsIndexesEntityRecognitionSkillV3
  | AzureSearchDocumentsIndexesPIIDetectionSkill
  | AzureSearchDocumentsIndexesSplitSkill
  | AzureSearchDocumentsIndexesCustomEntityLookupSkill
  | AzureSearchDocumentsIndexesTextTranslationSkill
  | AzureSearchDocumentsIndexesDocumentExtractionSkill
  | AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkill
  | AzureSearchDocumentsIndexesWebApiSkill
  | AzureSearchDocumentsIndexesAzureMachineLearningSkill
  | AzureSearchDocumentsIndexesAzureOpenAIEmbeddingSkill
  | AzureSearchDocumentsIndexesVisionVectorizeSkill
  | AzureSearchDocumentsIndexesChatCompletionSkill
  | AzureSearchDocumentsIndexesSearchIndexerSkill;

export function azureSearchDocumentsIndexesSearchIndexerSkillUnionSerializer(
  item: SearchIndexerSkillUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Skills.Util.ConditionalSkill":
      return conditionalSkillSerializer(item as ConditionalSkill);

    case "#Microsoft.Skills.Text.KeyPhraseExtractionSkill":
      return keyPhraseExtractionSkillSerializer(
        item as KeyPhraseExtractionSkill,
      );

    case "#Microsoft.Skills.Vision.OcrSkill":
      return ocrSkillSerializer(item as OcrSkill);

    case "#Microsoft.Skills.Vision.ImageAnalysisSkill":
      return imageAnalysisSkillSerializer(item as ImageAnalysisSkill);

    case "#Microsoft.Skills.Text.LanguageDetectionSkill":
      return languageDetectionSkillSerializer(item as LanguageDetectionSkill);

    case "#Microsoft.Skills.Util.ShaperSkill":
      return shaperSkillSerializer(item as ShaperSkill);

    case "#Microsoft.Skills.Text.MergeSkill":
      return mergeSkillSerializer(item as MergeSkill);

    case "#Microsoft.Skills.Text.EntityRecognitionSkill":
      return entityRecognitionSkillSerializer(item as EntityRecognitionSkill);

    case "#Microsoft.Skills.Text.SentimentSkill":
      return sentimentSkillSerializer(item as SentimentSkill);

    case "#Microsoft.Skills.Text.V3.SentimentSkill":
      return sentimentSkillV3Serializer(item as SentimentSkillV3);

    case "#Microsoft.Skills.Text.V3.EntityLinkingSkill":
      return entityLinkingSkillSerializer(item as EntityLinkingSkill);

    case "#Microsoft.Skills.Text.V3.EntityRecognitionSkill":
      return entityRecognitionSkillV3Serializer(
        item as EntityRecognitionSkillV3,
      );

    case "#Microsoft.Skills.Text.PIIDetectionSkill":
      return piiDetectionSkillSerializer(item as PIIDetectionSkill);

    case "#Microsoft.Skills.Text.SplitSkill":
      return splitSkillSerializer(item as SplitSkill);

    case "#Microsoft.Skills.Text.CustomEntityLookupSkill":
      return customEntityLookupSkillSerializer(item as CustomEntityLookupSkill);

    case "#Microsoft.Skills.Text.TranslationSkill":
      return textTranslationSkillSerializer(item as TextTranslationSkill);

    case "#Microsoft.Skills.Util.DocumentExtractionSkill":
      return documentExtractionSkillSerializer(item as DocumentExtractionSkill);

    case "#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill":
      return documentIntelligenceLayoutSkillSerializer(
        item as DocumentIntelligenceLayoutSkill,
      );

    case "#Microsoft.Skills.Custom.WebApiSkill":
      return webApiSkillSerializer(item as WebApiSkill);

    case "#Microsoft.Skills.Custom.AmlSkill":
      return azureMachineLearningSkillSerializer(
        item as AzureMachineLearningSkill,
      );

    case "#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill":
      return azureOpenAIEmbeddingSkillSerializer(
        item as AzureOpenAIEmbeddingSkill,
      );

    case "#Microsoft.Skills.Vision.VectorizeSkill":
      return visionVectorizeSkillSerializer(item as VisionVectorizeSkill);

    case "#Microsoft.Skills.Custom.ChatCompletionSkill":
      return chatCompletionSkillSerializer(item as ChatCompletionSkill);

    default:
      return azureSearchDocumentsIndexesSearchIndexerSkillSerializer(item);
  }
}

export function azureSearchDocumentsIndexesSearchIndexerSkillUnionDeserializer(
  item: any,
): SearchIndexerSkillUnion {
  switch (item.odataType) {
    case "#Microsoft.Skills.Util.ConditionalSkill":
      return conditionalSkillDeserializer(item as ConditionalSkill);

    case "#Microsoft.Skills.Text.KeyPhraseExtractionSkill":
      return keyPhraseExtractionSkillDeserializer(
        item as KeyPhraseExtractionSkill,
      );

    case "#Microsoft.Skills.Vision.OcrSkill":
      return ocrSkillDeserializer(item as OcrSkill);

    case "#Microsoft.Skills.Vision.ImageAnalysisSkill":
      return imageAnalysisSkillDeserializer(item as ImageAnalysisSkill);

    case "#Microsoft.Skills.Text.LanguageDetectionSkill":
      return languageDetectionSkillDeserializer(item as LanguageDetectionSkill);

    case "#Microsoft.Skills.Util.ShaperSkill":
      return shaperSkillDeserializer(item as ShaperSkill);

    case "#Microsoft.Skills.Text.MergeSkill":
      return mergeSkillDeserializer(item as MergeSkill);

    case "#Microsoft.Skills.Text.EntityRecognitionSkill":
      return entityRecognitionSkillDeserializer(item as EntityRecognitionSkill);

    case "#Microsoft.Skills.Text.SentimentSkill":
      return sentimentSkillDeserializer(item as SentimentSkill);

    case "#Microsoft.Skills.Text.V3.SentimentSkill":
      return sentimentSkillV3Deserializer(item as SentimentSkillV3);

    case "#Microsoft.Skills.Text.V3.EntityLinkingSkill":
      return entityLinkingSkillDeserializer(item as EntityLinkingSkill);

    case "#Microsoft.Skills.Text.V3.EntityRecognitionSkill":
      return entityRecognitionSkillV3Deserializer(
        item as EntityRecognitionSkillV3,
      );

    case "#Microsoft.Skills.Text.PIIDetectionSkill":
      return piiDetectionSkillDeserializer(item as PIIDetectionSkill);

    case "#Microsoft.Skills.Text.SplitSkill":
      return splitSkillDeserializer(item as SplitSkill);

    case "#Microsoft.Skills.Text.CustomEntityLookupSkill":
      return customEntityLookupSkillDeserializer(
        item as CustomEntityLookupSkill,
      );

    case "#Microsoft.Skills.Text.TranslationSkill":
      return textTranslationSkillDeserializer(item as TextTranslationSkill);

    case "#Microsoft.Skills.Util.DocumentExtractionSkill":
      return documentExtractionSkillDeserializer(
        item as DocumentExtractionSkill,
      );

    case "#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill":
      return documentIntelligenceLayoutSkillDeserializer(
        item as DocumentIntelligenceLayoutSkill,
      );

    case "#Microsoft.Skills.Custom.WebApiSkill":
      return webApiSkillDeserializer(item as WebApiSkill);

    case "#Microsoft.Skills.Custom.AmlSkill":
      return azureMachineLearningSkillDeserializer(
        item as AzureMachineLearningSkill,
      );

    case "#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill":
      return azureOpenAIEmbeddingSkillDeserializer(
        item as AzureOpenAIEmbeddingSkill,
      );

    case "#Microsoft.Skills.Vision.VectorizeSkill":
      return visionVectorizeSkillDeserializer(item as VisionVectorizeSkill);

    case "#Microsoft.Skills.Custom.ChatCompletionSkill":
      return chatCompletionSkillDeserializer(item as ChatCompletionSkill);

    default:
      return azureSearchDocumentsIndexesSearchIndexerSkillDeserializer(item);
  }
}

export function azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
  result: Array<AzureSearchDocumentsIndexesInputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesInputFieldMappingEntrySerializer(item);
  });
}

export function azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesInputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesInputFieldMappingEntryDeserializer(item);
  });
}

/** Input field mapping for a skill. */
export interface AzureSearchDocumentsIndexesInputFieldMappingEntry {
  /** The name of the input. */
  name: string;
  /** The source of the input. */
  source?: string;
  /** The source context used for selecting recursive inputs. */
  sourceContext?: string;
  /** The recursive inputs used when creating a complex type. */
  inputs?: AzureSearchDocumentsIndexesInputFieldMappingEntry[];
}

export function azureSearchDocumentsIndexesInputFieldMappingEntrySerializer(
  item: AzureSearchDocumentsIndexesInputFieldMappingEntry,
): any {
  return {
    name: item["name"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
          item["inputs"],
        ),
  };
}

export function azureSearchDocumentsIndexesInputFieldMappingEntryDeserializer(
  item: any,
): AzureSearchDocumentsIndexesInputFieldMappingEntry {
  return {
    name: item["name"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
          item["inputs"],
        ),
  };
}

export function azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
  result: Array<AzureSearchDocumentsIndexesOutputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesOutputFieldMappingEntrySerializer(item);
  });
}

export function azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesOutputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesOutputFieldMappingEntryDeserializer(item);
  });
}

/** Output field mapping for a skill. */
export interface AzureSearchDocumentsIndexesOutputFieldMappingEntry {
  /** The name of the output defined by the skill. */
  name: string;
  /** The target name of the output. It is optional and default to name. */
  targetName?: string;
}

export function azureSearchDocumentsIndexesOutputFieldMappingEntrySerializer(
  item: AzureSearchDocumentsIndexesOutputFieldMappingEntry,
): any {
  return { name: item["name"], targetName: item["targetName"] };
}

export function azureSearchDocumentsIndexesOutputFieldMappingEntryDeserializer(
  item: any,
): AzureSearchDocumentsIndexesOutputFieldMappingEntry {
  return {
    name: item["name"],
    targetName: item["targetName"],
  };
}

/** A skill that enables scenarios that require a Boolean operation to determine the data to assign to an output. */
export interface AzureSearchDocumentsIndexesConditionalSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.ConditionalSkill";
}

export function azureSearchDocumentsIndexesConditionalSkillSerializer(
  item: AzureSearchDocumentsIndexesConditionalSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
  };
}

export function azureSearchDocumentsIndexesConditionalSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesConditionalSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
  };
}

/** A skill that uses text analytics for key phrase extraction. */
export interface AzureSearchDocumentsIndexesKeyPhraseExtractionSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: AzureSearchDocumentsIndexesKeyPhraseExtractionSkillLanguage;
  /** A number indicating how many key phrases to return. If absent, all identified key phrases will be returned. */
  maxKeyPhraseCount?: number;
  /** The version of the model to use when calling the Text Analytics service. It will default to the latest available when not specified. We recommend you do not specify this value unless absolutely necessary. */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.KeyPhraseExtractionSkill";
}

export function azureSearchDocumentsIndexesKeyPhraseExtractionSkillSerializer(
  item: AzureSearchDocumentsIndexesKeyPhraseExtractionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    maxKeyPhraseCount: item["maxKeyPhraseCount"],
    modelVersion: item["modelVersion"],
  };
}

export function azureSearchDocumentsIndexesKeyPhraseExtractionSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesKeyPhraseExtractionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    maxKeyPhraseCount: item["maxKeyPhraseCount"],
    modelVersion: item["modelVersion"],
  };
}

/** The language codes supported for input text by KeyPhraseExtractionSkill. */
export enum KnownAzureSearchDocumentsIndexesKeyPhraseExtractionSkillLanguage {
  /** Danish */
  Da = "da",
  /** Dutch */
  Nl = "nl",
  /** English */
  En = "en",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** German */
  De = "de",
  /** Italian */
  It = "it",
  /** Japanese */
  Ja = "ja",
  /** Korean */
  Ko = "ko",
  /** Norwegian (Bokmaal) */
  No = "no",
  /** Polish */
  Pl = "pl",
  /** Portuguese (Portugal) */
  PtPT = "pt-PT",
  /** Portuguese (Brazil) */
  PtBR = "pt-BR",
  /** Russian */
  Ru = "ru",
  /** Spanish */
  Es = "es",
  /** Swedish */
  Sv = "sv",
}

/**
 * The language codes supported for input text by KeyPhraseExtractionSkill. \
 * {@link KnownAzureSearchDocumentsIndexesKeyPhraseExtractionSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesKeyPhraseExtractionSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **da**: Danish \
 * **nl**: Dutch \
 * **en**: English \
 * **fi**: Finnish \
 * **fr**: French \
 * **de**: German \
 * **it**: Italian \
 * **ja**: Japanese \
 * **ko**: Korean \
 * **no**: Norwegian (Bokmaal) \
 * **pl**: Polish \
 * **pt-PT**: Portuguese (Portugal) \
 * **pt-BR**: Portuguese (Brazil) \
 * **ru**: Russian \
 * **es**: Spanish \
 * **sv**: Swedish
 */
export type AzureSearchDocumentsIndexesKeyPhraseExtractionSkillLanguage =
  string;

/** A skill that extracts text from image files. */
export interface AzureSearchDocumentsIndexesOcrSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: AzureSearchDocumentsIndexesOcrSkillLanguage;
  /** A value indicating to turn orientation detection on or not. Default is false. */
  shouldDetectOrientation?: boolean;
  /** Defines the sequence of characters to use between the lines of text recognized by the OCR skill. The default value is "space". */
  lineEnding?: AzureSearchDocumentsIndexesOcrLineEnding;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Vision.OcrSkill";
}

export function azureSearchDocumentsIndexesOcrSkillSerializer(
  item: AzureSearchDocumentsIndexesOcrSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    detectOrientation: item["shouldDetectOrientation"],
    lineEnding: item["lineEnding"],
  };
}

export function azureSearchDocumentsIndexesOcrSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesOcrSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    shouldDetectOrientation: item["detectOrientation"],
    lineEnding: item["lineEnding"],
  };
}

/** The language codes supported for input by OcrSkill. */
export enum KnownAzureSearchDocumentsIndexesOcrSkillLanguage {
  /** Afrikaans */
  Af = "af",
  /** Albanian */
  Sq = "sq",
  /** Angika (Devanagiri) */
  Anp = "anp",
  /** Arabic */
  Ar = "ar",
  /** Asturian */
  Ast = "ast",
  /** Awadhi-Hindi (Devanagiri) */
  Awa = "awa",
  /** Azerbaijani (Latin) */
  Az = "az",
  /** Bagheli */
  Bfy = "bfy",
  /** Basque */
  Eu = "eu",
  /** Belarusian (Cyrillic and Latin) */
  Be = "be",
  /** Belarusian (Cyrillic) */
  BeCyrl = "be-cyrl",
  /** Belarusian (Latin) */
  BeLatn = "be-latn",
  /** Bhojpuri-Hindi (Devanagiri) */
  Bho = "bho",
  /** Bislama */
  Bi = "bi",
  /** Bodo (Devanagiri) */
  Brx = "brx",
  /** Bosnian Latin */
  Bs = "bs",
  /** Brajbha */
  Bra = "bra",
  /** Breton */
  Br = "br",
  /** Bulgarian */
  Bg = "bg",
  /** Bundeli */
  Bns = "bns",
  /** Buryat (Cyrillic) */
  Bua = "bua",
  /** Catalan */
  Ca = "ca",
  /** Cebuano */
  Ceb = "ceb",
  /** Chamling */
  Rab = "rab",
  /** Chamorro */
  Ch = "ch",
  /** Chhattisgarhi (Devanagiri) */
  Hne = "hne",
  /** Chinese Simplified */
  ZhHans = "zh-Hans",
  /** Chinese Traditional */
  ZhHant = "zh-Hant",
  /** Cornish */
  Kw = "kw",
  /** Corsican */
  Co = "co",
  /** Crimean Tatar (Latin) */
  Crh = "crh",
  /** Croatian */
  Hr = "hr",
  /** Czech */
  Cs = "cs",
  /** Danish */
  Da = "da",
  /** Dari */
  Prs = "prs",
  /** Dhimal (Devanagiri) */
  Dhi = "dhi",
  /** Dogri (Devanagiri) */
  Doi = "doi",
  /** Dutch */
  Nl = "nl",
  /** English */
  En = "en",
  /** Erzya (Cyrillic) */
  Myv = "myv",
  /** Estonian */
  Et = "et",
  /** Faroese */
  Fo = "fo",
  /** Fijian */
  Fj = "fj",
  /** Filipino */
  Fil = "fil",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** Frulian */
  Fur = "fur",
  /** Gagauz (Latin) */
  Gag = "gag",
  /** Galician */
  Gl = "gl",
  /** German */
  De = "de",
  /** Gilbertese */
  Gil = "gil",
  /** Gondi (Devanagiri) */
  Gon = "gon",
  /** Greek */
  El = "el",
  /** Greenlandic */
  Kl = "kl",
  /** Gurung (Devanagiri) */
  Gvr = "gvr",
  /** Haitian Creole */
  Ht = "ht",
  /** Halbi (Devanagiri) */
  Hlb = "hlb",
  /** Hani */
  Hni = "hni",
  /** Haryanvi */
  Bgc = "bgc",
  /** Hawaiian */
  Haw = "haw",
  /** Hindi */
  Hi = "hi",
  /** Hmong Daw (Latin) */
  Mww = "mww",
  /** Ho (Devanagiri) */
  Hoc = "hoc",
  /** Hungarian */
  Hu = "hu",
  /** Icelandic */
  Is = "is",
  /** Inari Sami */
  Smn = "smn",
  /** Indonesian */
  Id = "id",
  /** Interlingua */
  Ia = "ia",
  /** Inuktitut (Latin) */
  Iu = "iu",
  /** Irish */
  Ga = "ga",
  /** Italian */
  It = "it",
  /** Japanese */
  Ja = "ja",
  /** Jaunsari (Devanagiri) */
  Jns = "Jns",
  /** Javanese */
  Jv = "jv",
  /** Kabuverdianu */
  Kea = "kea",
  /** Kachin (Latin) */
  Kac = "kac",
  /** Kangri (Devanagiri) */
  Xnr = "xnr",
  /** Karachay-Balkar */
  Krc = "krc",
  /** Kara-Kalpak (Cyrillic) */
  KaaCyrl = "kaa-cyrl",
  /** Kara-Kalpak (Latin) */
  Kaa = "kaa",
  /** Kashubian */
  Csb = "csb",
  /** Kazakh (Cyrillic) */
  KkCyrl = "kk-cyrl",
  /** Kazakh (Latin) */
  KkLatn = "kk-latn",
  /** Khaling */
  Klr = "klr",
  /** Khasi */
  Kha = "kha",
  /** K'iche' */
  Quc = "quc",
  /** Korean */
  Ko = "ko",
  /** Korku */
  Kfq = "kfq",
  /** Koryak */
  Kpy = "kpy",
  /** Kosraean */
  Kos = "kos",
  /** Kumyk (Cyrillic) */
  Kum = "kum",
  /** Kurdish (Arabic) */
  KuArab = "ku-arab",
  /** Kurdish (Latin) */
  KuLatn = "ku-latn",
  /** Kurukh (Devanagiri) */
  Kru = "kru",
  /** Kyrgyz (Cyrillic) */
  Ky = "ky",
  /** Lakota */
  Lkt = "lkt",
  /** Latin */
  La = "la",
  /** Lithuanian */
  Lt = "lt",
  /** Lower Sorbian */
  Dsb = "dsb",
  /** Lule Sami */
  Smj = "smj",
  /** Luxembourgish */
  Lb = "lb",
  /** Mahasu Pahari (Devanagiri) */
  Bfz = "bfz",
  /** Malay (Latin) */
  Ms = "ms",
  /** Maltese */
  Mt = "mt",
  /** Malto (Devanagiri) */
  Kmj = "kmj",
  /** Manx */
  Gv = "gv",
  /** Maori */
  Mi = "mi",
  /** Marathi */
  Mr = "mr",
  /** Mongolian (Cyrillic) */
  Mn = "mn",
  /** Montenegrin (Cyrillic) */
  CnrCyrl = "cnr-cyrl",
  /** Montenegrin (Latin) */
  CnrLatn = "cnr-latn",
  /** Neapolitan */
  Nap = "nap",
  /** Nepali */
  Ne = "ne",
  /** Niuean */
  Niu = "niu",
  /** Nogay */
  Nog = "nog",
  /** Northern Sami (Latin) */
  Sme = "sme",
  /** Norwegian */
  Nb = "nb",
  /** Norwegian */
  No = "no",
  /** Occitan */
  Oc = "oc",
  /** Ossetic */
  Os = "os",
  /** Pashto */
  Ps = "ps",
  /** Persian */
  Fa = "fa",
  /** Polish */
  Pl = "pl",
  /** Portuguese */
  Pt = "pt",
  /** Punjabi (Arabic) */
  Pa = "pa",
  /** Ripuarian */
  Ksh = "ksh",
  /** Romanian */
  Ro = "ro",
  /** Romansh */
  Rm = "rm",
  /** Russian */
  Ru = "ru",
  /** Sadri (Devanagiri) */
  Sck = "sck",
  /** Samoan (Latin) */
  Sm = "sm",
  /** Sanskrit (Devanagiri) */
  Sa = "sa",
  /** Santali (Devanagiri) */
  Sat = "sat",
  /** Scots */
  Sco = "sco",
  /** Scottish Gaelic */
  Gd = "gd",
  /** Serbian (Latin) */
  Sr = "sr",
  /** Serbian (Cyrillic) */
  SrCyrl = "sr-Cyrl",
  /** Serbian (Latin) */
  SrLatn = "sr-Latn",
  /** Sherpa (Devanagiri) */
  Xsr = "xsr",
  /** Sirmauri (Devanagiri) */
  Srx = "srx",
  /** Skolt Sami */
  Sms = "sms",
  /** Slovak */
  Sk = "sk",
  /** Slovenian */
  Sl = "sl",
  /** Somali (Arabic) */
  So = "so",
  /** Southern Sami */
  Sma = "sma",
  /** Spanish */
  Es = "es",
  /** Swahili (Latin) */
  Sw = "sw",
  /** Swedish */
  Sv = "sv",
  /** Tajik (Cyrillic) */
  Tg = "tg",
  /** Tatar (Latin) */
  Tt = "tt",
  /** Tetum */
  Tet = "tet",
  /** Thangmi */
  Thf = "thf",
  /** Tongan */
  To = "to",
  /** Turkish */
  Tr = "tr",
  /** Turkmen (Latin) */
  Tk = "tk",
  /** Tuvan */
  Tyv = "tyv",
  /** Upper Sorbian */
  Hsb = "hsb",
  /** Urdu */
  Ur = "ur",
  /** Uyghur (Arabic) */
  Ug = "ug",
  /** Uzbek (Arabic) */
  UzArab = "uz-arab",
  /** Uzbek (Cyrillic) */
  UzCyrl = "uz-cyrl",
  /** Uzbek (Latin) */
  Uz = "uz",
  /** VolapÃ¼k */
  Vo = "vo",
  /** Walser */
  Wae = "wae",
  /** Welsh */
  Cy = "cy",
  /** Western Frisian */
  Fy = "fy",
  /** Yucatec Maya */
  Yua = "yua",
  /** Zhuang */
  Za = "za",
  /** Zulu */
  Zu = "zu",
  /** Unknown (All) */
  Unk = "unk",
}

/**
 * The language codes supported for input by OcrSkill. \
 * {@link KnownAzureSearchDocumentsIndexesOcrSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesOcrSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **af**: Afrikaans \
 * **sq**: Albanian \
 * **anp**: Angika (Devanagiri) \
 * **ar**: Arabic \
 * **ast**: Asturian \
 * **awa**: Awadhi-Hindi (Devanagiri) \
 * **az**: Azerbaijani (Latin) \
 * **bfy**: Bagheli \
 * **eu**: Basque \
 * **be**: Belarusian (Cyrillic and Latin) \
 * **be-cyrl**: Belarusian (Cyrillic) \
 * **be-latn**: Belarusian (Latin) \
 * **bho**: Bhojpuri-Hindi (Devanagiri) \
 * **bi**: Bislama \
 * **brx**: Bodo (Devanagiri) \
 * **bs**: Bosnian Latin \
 * **bra**: Brajbha \
 * **br**: Breton \
 * **bg**: Bulgarian \
 * **bns**: Bundeli \
 * **bua**: Buryat (Cyrillic) \
 * **ca**: Catalan \
 * **ceb**: Cebuano \
 * **rab**: Chamling \
 * **ch**: Chamorro \
 * **hne**: Chhattisgarhi (Devanagiri) \
 * **zh-Hans**: Chinese Simplified \
 * **zh-Hant**: Chinese Traditional \
 * **kw**: Cornish \
 * **co**: Corsican \
 * **crh**: Crimean Tatar (Latin) \
 * **hr**: Croatian \
 * **cs**: Czech \
 * **da**: Danish \
 * **prs**: Dari \
 * **dhi**: Dhimal (Devanagiri) \
 * **doi**: Dogri (Devanagiri) \
 * **nl**: Dutch \
 * **en**: English \
 * **myv**: Erzya (Cyrillic) \
 * **et**: Estonian \
 * **fo**: Faroese \
 * **fj**: Fijian \
 * **fil**: Filipino \
 * **fi**: Finnish \
 * **fr**: French \
 * **fur**: Frulian \
 * **gag**: Gagauz (Latin) \
 * **gl**: Galician \
 * **de**: German \
 * **gil**: Gilbertese \
 * **gon**: Gondi (Devanagiri) \
 * **el**: Greek \
 * **kl**: Greenlandic \
 * **gvr**: Gurung (Devanagiri) \
 * **ht**: Haitian Creole \
 * **hlb**: Halbi (Devanagiri) \
 * **hni**: Hani \
 * **bgc**: Haryanvi \
 * **haw**: Hawaiian \
 * **hi**: Hindi \
 * **mww**: Hmong Daw (Latin) \
 * **hoc**: Ho (Devanagiri) \
 * **hu**: Hungarian \
 * **is**: Icelandic \
 * **smn**: Inari Sami \
 * **id**: Indonesian \
 * **ia**: Interlingua \
 * **iu**: Inuktitut (Latin) \
 * **ga**: Irish \
 * **it**: Italian \
 * **ja**: Japanese \
 * **Jns**: Jaunsari (Devanagiri) \
 * **jv**: Javanese \
 * **kea**: Kabuverdianu \
 * **kac**: Kachin (Latin) \
 * **xnr**: Kangri (Devanagiri) \
 * **krc**: Karachay-Balkar \
 * **kaa-cyrl**: Kara-Kalpak (Cyrillic) \
 * **kaa**: Kara-Kalpak (Latin) \
 * **csb**: Kashubian \
 * **kk-cyrl**: Kazakh (Cyrillic) \
 * **kk-latn**: Kazakh (Latin) \
 * **klr**: Khaling \
 * **kha**: Khasi \
 * **quc**: K'iche' \
 * **ko**: Korean \
 * **kfq**: Korku \
 * **kpy**: Koryak \
 * **kos**: Kosraean \
 * **kum**: Kumyk (Cyrillic) \
 * **ku-arab**: Kurdish (Arabic) \
 * **ku-latn**: Kurdish (Latin) \
 * **kru**: Kurukh (Devanagiri) \
 * **ky**: Kyrgyz (Cyrillic) \
 * **lkt**: Lakota \
 * **la**: Latin \
 * **lt**: Lithuanian \
 * **dsb**: Lower Sorbian \
 * **smj**: Lule Sami \
 * **lb**: Luxembourgish \
 * **bfz**: Mahasu Pahari (Devanagiri) \
 * **ms**: Malay (Latin) \
 * **mt**: Maltese \
 * **kmj**: Malto (Devanagiri) \
 * **gv**: Manx \
 * **mi**: Maori \
 * **mr**: Marathi \
 * **mn**: Mongolian (Cyrillic) \
 * **cnr-cyrl**: Montenegrin (Cyrillic) \
 * **cnr-latn**: Montenegrin (Latin) \
 * **nap**: Neapolitan \
 * **ne**: Nepali \
 * **niu**: Niuean \
 * **nog**: Nogay \
 * **sme**: Northern Sami (Latin) \
 * **nb**: Norwegian \
 * **no**: Norwegian \
 * **oc**: Occitan \
 * **os**: Ossetic \
 * **ps**: Pashto \
 * **fa**: Persian \
 * **pl**: Polish \
 * **pt**: Portuguese \
 * **pa**: Punjabi (Arabic) \
 * **ksh**: Ripuarian \
 * **ro**: Romanian \
 * **rm**: Romansh \
 * **ru**: Russian \
 * **sck**: Sadri (Devanagiri) \
 * **sm**: Samoan (Latin) \
 * **sa**: Sanskrit (Devanagiri) \
 * **sat**: Santali (Devanagiri) \
 * **sco**: Scots \
 * **gd**: Scottish Gaelic \
 * **sr**: Serbian (Latin) \
 * **sr-Cyrl**: Serbian (Cyrillic) \
 * **sr-Latn**: Serbian (Latin) \
 * **xsr**: Sherpa (Devanagiri) \
 * **srx**: Sirmauri (Devanagiri) \
 * **sms**: Skolt Sami \
 * **sk**: Slovak \
 * **sl**: Slovenian \
 * **so**: Somali (Arabic) \
 * **sma**: Southern Sami \
 * **es**: Spanish \
 * **sw**: Swahili (Latin) \
 * **sv**: Swedish \
 * **tg**: Tajik (Cyrillic) \
 * **tt**: Tatar (Latin) \
 * **tet**: Tetum \
 * **thf**: Thangmi \
 * **to**: Tongan \
 * **tr**: Turkish \
 * **tk**: Turkmen (Latin) \
 * **tyv**: Tuvan \
 * **hsb**: Upper Sorbian \
 * **ur**: Urdu \
 * **ug**: Uyghur (Arabic) \
 * **uz-arab**: Uzbek (Arabic) \
 * **uz-cyrl**: Uzbek (Cyrillic) \
 * **uz**: Uzbek (Latin) \
 * **vo**: VolapÃ¼k \
 * **wae**: Walser \
 * **cy**: Welsh \
 * **fy**: Western Frisian \
 * **yua**: Yucatec Maya \
 * **za**: Zhuang \
 * **zu**: Zulu \
 * **unk**: Unknown (All)
 */
export type AzureSearchDocumentsIndexesOcrSkillLanguage = string;

/** Defines the sequence of characters to use between the lines of text recognized by the OCR skill. The default value is "space". */
export enum KnownAzureSearchDocumentsIndexesOcrLineEnding {
  /** Lines are separated by a single space character. */
  Space = "space",
  /** Lines are separated by a carriage return ('
') character. */
  CarriageReturn = "carriageReturn",
  /**
   * Lines are separated by a single line feed ('
   * ') character.
   */
  LineFeed = "lineFeed",
  /**
   * Lines are separated by a carriage return and a line feed ('
   * ') character.
   */
  CarriageReturnLineFeed = "carriageReturnLineFeed",
}

/**
 * Defines the sequence of characters to use between the lines of text recognized by the OCR skill. The default value is "space". \ 
 * {@link KnownAzureSearchDocumentsIndexesOcrLineEnding} can be used interchangeably with AzureSearchDocumentsIndexesOcrLineEnding,
 *  this enum contains the known values that the service supports. 
 * ### Known values supported by the service 
 * **space**: Lines are separated by a single space character. \
 * **carriageReturn**: Lines are separated by a carriage return ('
') character. \
 * **lineFeed**: Lines are separated by a single line feed ('
 * ') character. \
 * **carriageReturnLineFeed**: Lines are separated by a carriage return and a line feed ('
 * ') character.
 */
export type AzureSearchDocumentsIndexesOcrLineEnding = string;

/** A skill that analyzes image files. It extracts a rich set of visual features based on the image content. */
export interface AzureSearchDocumentsIndexesImageAnalysisSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: AzureSearchDocumentsIndexesImageAnalysisSkillLanguage;
  /** A list of visual features. */
  visualFeatures?: AzureSearchDocumentsIndexesVisualFeature[];
  /** A string indicating which domain-specific details to return. */
  details?: AzureSearchDocumentsIndexesImageDetail[];
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Vision.ImageAnalysisSkill";
}

export function azureSearchDocumentsIndexesImageAnalysisSkillSerializer(
  item: AzureSearchDocumentsIndexesImageAnalysisSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    visualFeatures: !item["visualFeatures"]
      ? item["visualFeatures"]
      : item["visualFeatures"].map((p: any) => {
          return p;
        }),
    details: !item["details"]
      ? item["details"]
      : item["details"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesImageAnalysisSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesImageAnalysisSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    visualFeatures: !item["visualFeatures"]
      ? item["visualFeatures"]
      : item["visualFeatures"].map((p: any) => {
          return p;
        }),
    details: !item["details"]
      ? item["details"]
      : item["details"].map((p: any) => {
          return p;
        }),
  };
}

/** The language codes supported for input by ImageAnalysisSkill. */
export enum KnownAzureSearchDocumentsIndexesImageAnalysisSkillLanguage {
  /** Arabic */
  Ar = "ar",
  /** Azerbaijani */
  Az = "az",
  /** Bulgarian */
  Bg = "bg",
  /** Bosnian Latin */
  Bs = "bs",
  /** Catalan */
  Ca = "ca",
  /** Czech */
  Cs = "cs",
  /** Welsh */
  Cy = "cy",
  /** Danish */
  Da = "da",
  /** German */
  De = "de",
  /** Greek */
  El = "el",
  /** English */
  En = "en",
  /** Spanish */
  Es = "es",
  /** Estonian */
  Et = "et",
  /** Basque */
  Eu = "eu",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** Irish */
  Ga = "ga",
  /** Galician */
  Gl = "gl",
  /** Hebrew */
  He = "he",
  /** Hindi */
  Hi = "hi",
  /** Croatian */
  Hr = "hr",
  /** Hungarian */
  Hu = "hu",
  /** Indonesian */
  Id = "id",
  /** Italian */
  It = "it",
  /** Japanese */
  Ja = "ja",
  /** Kazakh */
  Kk = "kk",
  /** Korean */
  Ko = "ko",
  /** Lithuanian */
  Lt = "lt",
  /** Latvian */
  Lv = "lv",
  /** Macedonian */
  Mk = "mk",
  /** Malay Malaysia */
  Ms = "ms",
  /** Norwegian (Bokmal) */
  Nb = "nb",
  /** Dutch */
  Nl = "nl",
  /** Polish */
  Pl = "pl",
  /** Dari */
  Prs = "prs",
  /** Portuguese-Brazil */
  PtBR = "pt-BR",
  /** Portuguese-Portugal */
  Pt = "pt",
  /** Portuguese-Portugal */
  PtPT = "pt-PT",
  /** Romanian */
  Ro = "ro",
  /** Russian */
  Ru = "ru",
  /** Slovak */
  Sk = "sk",
  /** Slovenian */
  Sl = "sl",
  /** Serbian - Cyrillic RS */
  SrCyrl = "sr-Cyrl",
  /** Serbian - Latin RS */
  SrLatn = "sr-Latn",
  /** Swedish */
  Sv = "sv",
  /** Thai */
  Th = "th",
  /** Turkish */
  Tr = "tr",
  /** Ukrainian */
  Uk = "uk",
  /** Vietnamese */
  Vi = "vi",
  /** Chinese Simplified */
  Zh = "zh",
  /** Chinese Simplified */
  ZhHans = "zh-Hans",
  /** Chinese Traditional */
  ZhHant = "zh-Hant",
}

/**
 * The language codes supported for input by ImageAnalysisSkill. \
 * {@link KnownAzureSearchDocumentsIndexesImageAnalysisSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesImageAnalysisSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ar**: Arabic \
 * **az**: Azerbaijani \
 * **bg**: Bulgarian \
 * **bs**: Bosnian Latin \
 * **ca**: Catalan \
 * **cs**: Czech \
 * **cy**: Welsh \
 * **da**: Danish \
 * **de**: German \
 * **el**: Greek \
 * **en**: English \
 * **es**: Spanish \
 * **et**: Estonian \
 * **eu**: Basque \
 * **fi**: Finnish \
 * **fr**: French \
 * **ga**: Irish \
 * **gl**: Galician \
 * **he**: Hebrew \
 * **hi**: Hindi \
 * **hr**: Croatian \
 * **hu**: Hungarian \
 * **id**: Indonesian \
 * **it**: Italian \
 * **ja**: Japanese \
 * **kk**: Kazakh \
 * **ko**: Korean \
 * **lt**: Lithuanian \
 * **lv**: Latvian \
 * **mk**: Macedonian \
 * **ms**: Malay Malaysia \
 * **nb**: Norwegian (Bokmal) \
 * **nl**: Dutch \
 * **pl**: Polish \
 * **prs**: Dari \
 * **pt-BR**: Portuguese-Brazil \
 * **pt**: Portuguese-Portugal \
 * **pt-PT**: Portuguese-Portugal \
 * **ro**: Romanian \
 * **ru**: Russian \
 * **sk**: Slovak \
 * **sl**: Slovenian \
 * **sr-Cyrl**: Serbian - Cyrillic RS \
 * **sr-Latn**: Serbian - Latin RS \
 * **sv**: Swedish \
 * **th**: Thai \
 * **tr**: Turkish \
 * **uk**: Ukrainian \
 * **vi**: Vietnamese \
 * **zh**: Chinese Simplified \
 * **zh-Hans**: Chinese Simplified \
 * **zh-Hant**: Chinese Traditional
 */
export type AzureSearchDocumentsIndexesImageAnalysisSkillLanguage = string;

/** The strings indicating what visual feature types to return. */
export enum KnownAzureSearchDocumentsIndexesVisualFeature {
  /** Visual features recognized as adult persons. */
  Adult = "adult",
  /** Visual features recognized as commercial brands. */
  Brands = "brands",
  /** Categories. */
  Categories = "categories",
  /** Description. */
  Description = "description",
  /** Visual features recognized as people faces. */
  Faces = "faces",
  /** Visual features recognized as objects. */
  Objects = "objects",
  /** Tags. */
  Tags = "tags",
}

/**
 * The strings indicating what visual feature types to return. \
 * {@link KnownAzureSearchDocumentsIndexesVisualFeature} can be used interchangeably with AzureSearchDocumentsIndexesVisualFeature,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **adult**: Visual features recognized as adult persons. \
 * **brands**: Visual features recognized as commercial brands. \
 * **categories**: Categories. \
 * **description**: Description. \
 * **faces**: Visual features recognized as people faces. \
 * **objects**: Visual features recognized as objects. \
 * **tags**: Tags.
 */
export type AzureSearchDocumentsIndexesVisualFeature = string;

/** A string indicating which domain-specific details to return. */
export enum KnownAzureSearchDocumentsIndexesImageDetail {
  /** Details recognized as celebrities. */
  Celebrities = "celebrities",
  /** Details recognized as landmarks. */
  Landmarks = "landmarks",
}

/**
 * A string indicating which domain-specific details to return. \
 * {@link KnownAzureSearchDocumentsIndexesImageDetail} can be used interchangeably with AzureSearchDocumentsIndexesImageDetail,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **celebrities**: Details recognized as celebrities. \
 * **landmarks**: Details recognized as landmarks.
 */
export type AzureSearchDocumentsIndexesImageDetail = string;

/** A skill that detects the language of input text and reports a single language code for every document submitted on the request. The language code is paired with a score indicating the confidence of the analysis. */
export interface AzureSearchDocumentsIndexesLanguageDetectionSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A country code to use as a hint to the language detection model if it cannot disambiguate the language. */
  defaultCountryHint?: string;
  /** The version of the model to use when calling the Text Analytics service. It will default to the latest available when not specified. We recommend you do not specify this value unless absolutely necessary. */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.LanguageDetectionSkill";
}

export function azureSearchDocumentsIndexesLanguageDetectionSkillSerializer(
  item: AzureSearchDocumentsIndexesLanguageDetectionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultCountryHint: item["defaultCountryHint"],
    modelVersion: item["modelVersion"],
  };
}

export function azureSearchDocumentsIndexesLanguageDetectionSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesLanguageDetectionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultCountryHint: item["defaultCountryHint"],
    modelVersion: item["modelVersion"],
  };
}

/** A skill for reshaping the outputs. It creates a complex type to support composite fields (also known as multipart fields). */
export interface AzureSearchDocumentsIndexesShaperSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.ShaperSkill";
}

export function azureSearchDocumentsIndexesShaperSkillSerializer(
  item: AzureSearchDocumentsIndexesShaperSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
  };
}

export function azureSearchDocumentsIndexesShaperSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesShaperSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
  };
}

/** A skill for merging two or more strings into a single unified string, with an optional user-defined delimiter separating each component part. */
export interface AzureSearchDocumentsIndexesMergeSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The tag indicates the start of the merged text. By default, the tag is an empty space. */
  insertPreTag?: string;
  /** The tag indicates the end of the merged text. By default, the tag is an empty space. */
  insertPostTag?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.MergeSkill";
}

export function azureSearchDocumentsIndexesMergeSkillSerializer(
  item: AzureSearchDocumentsIndexesMergeSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    insertPreTag: item["insertPreTag"],
    insertPostTag: item["insertPostTag"],
  };
}

export function azureSearchDocumentsIndexesMergeSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesMergeSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    insertPreTag: item["insertPreTag"],
    insertPostTag: item["insertPostTag"],
  };
}

/** This skill is deprecated. Use the V3.EntityRecognitionSkill instead. */
export interface AzureSearchDocumentsIndexesEntityRecognitionSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A list of entity categories that should be extracted. */
  categories?: AzureSearchDocumentsIndexesEntityCategory[];
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: AzureSearchDocumentsIndexesEntityRecognitionSkillLanguage;
  /** Determines whether or not to include entities which are well known but don't conform to a pre-defined type. If this configuration is not set (default), set to null or set to false, entities which don't conform to one of the pre-defined types will not be surfaced. */
  includeTypelessEntities?: boolean;
  /** A value between 0 and 1 that be used to only include entities whose confidence score is greater than the value specified. If not set (default), or if explicitly set to null, all entities will be included. */
  minimumPrecision?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.EntityRecognitionSkill";
}

export function azureSearchDocumentsIndexesEntityRecognitionSkillSerializer(
  item: AzureSearchDocumentsIndexesEntityRecognitionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeTypelessEntities: item["includeTypelessEntities"],
    minimumPrecision: item["minimumPrecision"],
  };
}

export function azureSearchDocumentsIndexesEntityRecognitionSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesEntityRecognitionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeTypelessEntities: item["includeTypelessEntities"],
    minimumPrecision: item["minimumPrecision"],
  };
}

/** A string indicating what entity categories to return. */
export enum KnownAzureSearchDocumentsIndexesEntityCategory {
  /** Entities describing a physical location. */
  Location = "location",
  /** Entities describing an organization. */
  Organization = "organization",
  /** Entities describing a person. */
  Person = "person",
  /** Entities describing a quantity. */
  Quantity = "quantity",
  /** Entities describing a date and time. */
  Datetime = "datetime",
  /** Entities describing a URL. */
  Url = "url",
  /** Entities describing an email address. */
  Email = "email",
}

/**
 * A string indicating what entity categories to return. \
 * {@link KnownAzureSearchDocumentsIndexesEntityCategory} can be used interchangeably with AzureSearchDocumentsIndexesEntityCategory,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **location**: Entities describing a physical location. \
 * **organization**: Entities describing an organization. \
 * **person**: Entities describing a person. \
 * **quantity**: Entities describing a quantity. \
 * **datetime**: Entities describing a date and time. \
 * **url**: Entities describing a URL. \
 * **email**: Entities describing an email address.
 */
export type AzureSearchDocumentsIndexesEntityCategory = string;

/** Deprecated. The language codes supported for input text by EntityRecognitionSkill. */
export enum KnownAzureSearchDocumentsIndexesEntityRecognitionSkillLanguage {
  /** Arabic */
  Ar = "ar",
  /** Czech */
  Cs = "cs",
  /** Chinese-Simplified */
  ZhHans = "zh-Hans",
  /** Chinese-Traditional */
  ZhHant = "zh-Hant",
  /** Danish */
  Da = "da",
  /** Dutch */
  Nl = "nl",
  /** English */
  En = "en",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** German */
  De = "de",
  /** Greek */
  El = "el",
  /** Hungarian */
  Hu = "hu",
  /** Italian */
  It = "it",
  /** Japanese */
  Ja = "ja",
  /** Korean */
  Ko = "ko",
  /** Norwegian (Bokmaal) */
  No = "no",
  /** Polish */
  Pl = "pl",
  /** Portuguese (Portugal) */
  PtPT = "pt-PT",
  /** Portuguese (Brazil) */
  PtBR = "pt-BR",
  /** Russian */
  Ru = "ru",
  /** Spanish */
  Es = "es",
  /** Swedish */
  Sv = "sv",
  /** Turkish */
  Tr = "tr",
}

/**
 * Deprecated. The language codes supported for input text by EntityRecognitionSkill. \
 * {@link KnownAzureSearchDocumentsIndexesEntityRecognitionSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesEntityRecognitionSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ar**: Arabic \
 * **cs**: Czech \
 * **zh-Hans**: Chinese-Simplified \
 * **zh-Hant**: Chinese-Traditional \
 * **da**: Danish \
 * **nl**: Dutch \
 * **en**: English \
 * **fi**: Finnish \
 * **fr**: French \
 * **de**: German \
 * **el**: Greek \
 * **hu**: Hungarian \
 * **it**: Italian \
 * **ja**: Japanese \
 * **ko**: Korean \
 * **no**: Norwegian (Bokmaal) \
 * **pl**: Polish \
 * **pt-PT**: Portuguese (Portugal) \
 * **pt-BR**: Portuguese (Brazil) \
 * **ru**: Russian \
 * **es**: Spanish \
 * **sv**: Swedish \
 * **tr**: Turkish
 */
export type AzureSearchDocumentsIndexesEntityRecognitionSkillLanguage = string;

/** This skill is deprecated. Use the V3.SentimentSkill instead. */
export interface AzureSearchDocumentsIndexesSentimentSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: AzureSearchDocumentsIndexesSentimentSkillLanguage;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.SentimentSkill";
}

export function azureSearchDocumentsIndexesSentimentSkillSerializer(
  item: AzureSearchDocumentsIndexesSentimentSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
  };
}

export function azureSearchDocumentsIndexesSentimentSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSentimentSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
  };
}

/** Deprecated. The language codes supported for input text by SentimentSkill. */
export enum KnownAzureSearchDocumentsIndexesSentimentSkillLanguage {
  /** Danish */
  Da = "da",
  /** Dutch */
  Nl = "nl",
  /** English */
  En = "en",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** German */
  De = "de",
  /** Greek */
  El = "el",
  /** Italian */
  It = "it",
  /** Norwegian (Bokmaal) */
  No = "no",
  /** Polish */
  Pl = "pl",
  /** Portuguese (Portugal) */
  PtPT = "pt-PT",
  /** Russian */
  Ru = "ru",
  /** Spanish */
  Es = "es",
  /** Swedish */
  Sv = "sv",
  /** Turkish */
  Tr = "tr",
}

/**
 * Deprecated. The language codes supported for input text by SentimentSkill. \
 * {@link KnownAzureSearchDocumentsIndexesSentimentSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesSentimentSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **da**: Danish \
 * **nl**: Dutch \
 * **en**: English \
 * **fi**: Finnish \
 * **fr**: French \
 * **de**: German \
 * **el**: Greek \
 * **it**: Italian \
 * **no**: Norwegian (Bokmaal) \
 * **pl**: Polish \
 * **pt-PT**: Portuguese (Portugal) \
 * **ru**: Russian \
 * **es**: Spanish \
 * **sv**: Swedish \
 * **tr**: Turkish
 */
export type AzureSearchDocumentsIndexesSentimentSkillLanguage = string;

/** Using the Text Analytics API, evaluates unstructured text and for each record, provides sentiment labels (such as "negative", "neutral" and "positive") based on the highest confidence score found by the service at a sentence and document-level. */
export interface AzureSearchDocumentsIndexesSentimentSkillV3
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /** If set to true, the skill output will include information from Text Analytics for opinion mining, namely targets (nouns or verbs) and their associated assessment (adjective) in the text. Default is false. */
  includeOpinionMining?: boolean;
  /** The version of the model to use when calling the Text Analytics service. It will default to the latest available when not specified. We recommend you do not specify this value unless absolutely necessary. */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.V3.SentimentSkill";
}

export function azureSearchDocumentsIndexesSentimentSkillV3Serializer(
  item: AzureSearchDocumentsIndexesSentimentSkillV3,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeOpinionMining: item["includeOpinionMining"],
    modelVersion: item["modelVersion"],
  };
}

export function azureSearchDocumentsIndexesSentimentSkillV3Deserializer(
  item: any,
): AzureSearchDocumentsIndexesSentimentSkillV3 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeOpinionMining: item["includeOpinionMining"],
    modelVersion: item["modelVersion"],
  };
}

/** Using the Text Analytics API, extracts linked entities from text. */
export interface AzureSearchDocumentsIndexesEntityLinkingSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /** A value between 0 and 1 that be used to only include entities whose confidence score is greater than the value specified. If not set (default), or if explicitly set to null, all entities will be included. */
  minimumPrecision?: number;
  /** The version of the model to use when calling the Text Analytics service. It will default to the latest available when not specified. We recommend you do not specify this value unless absolutely necessary. */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.V3.EntityLinkingSkill";
}

export function azureSearchDocumentsIndexesEntityLinkingSkillSerializer(
  item: AzureSearchDocumentsIndexesEntityLinkingSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

export function azureSearchDocumentsIndexesEntityLinkingSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesEntityLinkingSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

/** Using the Text Analytics API, extracts entities of different types from text. */
export interface AzureSearchDocumentsIndexesEntityRecognitionSkillV3
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A list of entity categories that should be extracted. */
  categories?: string[];
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /** A value between 0 and 1 that be used to only include entities whose confidence score is greater than the value specified. If not set (default), or if explicitly set to null, all entities will be included. */
  minimumPrecision?: number;
  /** The version of the model to use when calling the Text Analytics API. It will default to the latest available when not specified. We recommend you do not specify this value unless absolutely necessary. */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.V3.EntityRecognitionSkill";
}

export function azureSearchDocumentsIndexesEntityRecognitionSkillV3Serializer(
  item: AzureSearchDocumentsIndexesEntityRecognitionSkillV3,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

export function azureSearchDocumentsIndexesEntityRecognitionSkillV3Deserializer(
  item: any,
): AzureSearchDocumentsIndexesEntityRecognitionSkillV3 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

/** Using the Text Analytics API, extracts personal information from an input text and gives you the option of masking it. */
export interface AzureSearchDocumentsIndexesPIIDetectionSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /** A value between 0 and 1 that be used to only include entities whose confidence score is greater than the value specified. If not set (default), or if explicitly set to null, all entities will be included. */
  minimumPrecision?: number;
  /** A parameter that provides various ways to mask the personal information detected in the input text. Default is 'none'. */
  maskingMode?: AzureSearchDocumentsIndexesPIIDetectionSkillMaskingMode;
  /** The character used to mask the text if the maskingMode parameter is set to replace. Default is '*'. */
  mask?: string;
  /** The version of the model to use when calling the Text Analytics service. It will default to the latest available when not specified. We recommend you do not specify this value unless absolutely necessary. */
  modelVersion?: string;
  /** A list of PII entity categories that should be extracted and masked. */
  piiCategories?: string[];
  /** If specified, will set the PII domain to include only a subset of the entity categories. Possible values include: 'phi', 'none'. Default is 'none'. */
  domain?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.PIIDetectionSkill";
}

export function azureSearchDocumentsIndexesPIIDetectionSkillSerializer(
  item: AzureSearchDocumentsIndexesPIIDetectionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    maskingMode: item["maskingMode"],
    maskingCharacter: item["mask"],
    modelVersion: item["modelVersion"],
    piiCategories: !item["piiCategories"]
      ? item["piiCategories"]
      : item["piiCategories"].map((p: any) => {
          return p;
        }),
    domain: item["domain"],
  };
}

export function azureSearchDocumentsIndexesPIIDetectionSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesPIIDetectionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    maskingMode: item["maskingMode"],
    mask: item["maskingCharacter"],
    modelVersion: item["modelVersion"],
    piiCategories: !item["piiCategories"]
      ? item["piiCategories"]
      : item["piiCategories"].map((p: any) => {
          return p;
        }),
    domain: item["domain"],
  };
}

/** A string indicating what maskingMode to use to mask the personal information detected in the input text. */
export enum KnownAzureSearchDocumentsIndexesPIIDetectionSkillMaskingMode {
  /** No masking occurs and the maskedText output will not be returned. */
  None = "none",
  /** Replaces the detected entities with the character given in the maskingCharacter parameter. The character will be repeated to the length of the detected entity so that the offsets will correctly correspond to both the input text as well as the output maskedText. */
  Replace = "replace",
}

/**
 * A string indicating what maskingMode to use to mask the personal information detected in the input text. \
 * {@link KnownAzureSearchDocumentsIndexesPIIDetectionSkillMaskingMode} can be used interchangeably with AzureSearchDocumentsIndexesPIIDetectionSkillMaskingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none**: No masking occurs and the maskedText output will not be returned. \
 * **replace**: Replaces the detected entities with the character given in the maskingCharacter parameter. The character will be repeated to the length of the detected entity so that the offsets will correctly correspond to both the input text as well as the output maskedText.
 */
export type AzureSearchDocumentsIndexesPIIDetectionSkillMaskingMode = string;

/** A skill to split a string into chunks of text. */
export interface AzureSearchDocumentsIndexesSplitSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: AzureSearchDocumentsIndexesSplitSkillLanguage;
  /** A value indicating which split mode to perform. */
  textSplitMode?: AzureSearchDocumentsIndexesTextSplitMode;
  /** The desired maximum page length. Default is 10000. */
  maximumPageLength?: number;
  /** Only applicable when textSplitMode is set to 'pages'. If specified, n+1th chunk will start with this number of characters/tokens from the end of the nth chunk. */
  pageOverlapLength?: number;
  /** Only applicable when textSplitMode is set to 'pages'. If specified, the SplitSkill will discontinue splitting after processing the first 'maximumPagesToTake' pages, in order to improve performance when only a few initial pages are needed from each document. */
  maximumPagesToTake?: number;
  /** Only applies if textSplitMode is set to pages. There are two possible values. The choice of the values will decide the length (maximumPageLength and pageOverlapLength) measurement. The default is 'characters', which means the length will be measured by character. */
  unit?: AzureSearchDocumentsIndexesSplitSkillUnit;
  /** Only applies if the unit is set to azureOpenAITokens. If specified, the splitSkill will use these parameters when performing the tokenization. The parameters are a valid 'encoderModelName' and an optional 'allowedSpecialTokens' property. */
  azureOpenAITokenizerParameters?: AzureSearchDocumentsIndexesAzureOpenAITokenizerParameters;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.SplitSkill";
}

export function azureSearchDocumentsIndexesSplitSkillSerializer(
  item: AzureSearchDocumentsIndexesSplitSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    textSplitMode: item["textSplitMode"],
    maximumPageLength: item["maximumPageLength"],
    pageOverlapLength: item["pageOverlapLength"],
    maximumPagesToTake: item["maximumPagesToTake"],
    unit: item["unit"],
    azureOpenAITokenizerParameters: !item["azureOpenAITokenizerParameters"]
      ? item["azureOpenAITokenizerParameters"]
      : azureSearchDocumentsIndexesAzureOpenAITokenizerParametersSerializer(
          item["azureOpenAITokenizerParameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesSplitSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSplitSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    textSplitMode: item["textSplitMode"],
    maximumPageLength: item["maximumPageLength"],
    pageOverlapLength: item["pageOverlapLength"],
    maximumPagesToTake: item["maximumPagesToTake"],
    unit: item["unit"],
    azureOpenAITokenizerParameters: !item["azureOpenAITokenizerParameters"]
      ? item["azureOpenAITokenizerParameters"]
      : azureSearchDocumentsIndexesAzureOpenAITokenizerParametersDeserializer(
          item["azureOpenAITokenizerParameters"],
        ),
  };
}

/** The language codes supported for input text by SplitSkill. */
export enum KnownAzureSearchDocumentsIndexesSplitSkillLanguage {
  /** Amharic */
  Am = "am",
  /** Bosnian */
  Bs = "bs",
  /** Czech */
  Cs = "cs",
  /** Danish */
  Da = "da",
  /** German */
  De = "de",
  /** English */
  En = "en",
  /** Spanish */
  Es = "es",
  /** Estonian */
  Et = "et",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** Hebrew */
  He = "he",
  /** Hindi */
  Hi = "hi",
  /** Croatian */
  Hr = "hr",
  /** Hungarian */
  Hu = "hu",
  /** Indonesian */
  Id = "id",
  /** Icelandic */
  Is = "is",
  /** Italian */
  It = "it",
  /** Japanese */
  Ja = "ja",
  /** Korean */
  Ko = "ko",
  /** Latvian */
  Lv = "lv",
  /** Norwegian */
  Nb = "nb",
  /** Dutch */
  Nl = "nl",
  /** Polish */
  Pl = "pl",
  /** Portuguese (Portugal) */
  Pt = "pt",
  /** Portuguese (Brazil) */
  PtBr = "pt-br",
  /** Russian */
  Ru = "ru",
  /** Slovak */
  Sk = "sk",
  /** Slovenian */
  Sl = "sl",
  /** Serbian */
  Sr = "sr",
  /** Swedish */
  Sv = "sv",
  /** Turkish */
  Tr = "tr",
  /** Urdu */
  Ur = "ur",
  /** Chinese (Simplified) */
  Zh = "zh",
}

/**
 * The language codes supported for input text by SplitSkill. \
 * {@link KnownAzureSearchDocumentsIndexesSplitSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesSplitSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **am**: Amharic \
 * **bs**: Bosnian \
 * **cs**: Czech \
 * **da**: Danish \
 * **de**: German \
 * **en**: English \
 * **es**: Spanish \
 * **et**: Estonian \
 * **fi**: Finnish \
 * **fr**: French \
 * **he**: Hebrew \
 * **hi**: Hindi \
 * **hr**: Croatian \
 * **hu**: Hungarian \
 * **id**: Indonesian \
 * **is**: Icelandic \
 * **it**: Italian \
 * **ja**: Japanese \
 * **ko**: Korean \
 * **lv**: Latvian \
 * **nb**: Norwegian \
 * **nl**: Dutch \
 * **pl**: Polish \
 * **pt**: Portuguese (Portugal) \
 * **pt-br**: Portuguese (Brazil) \
 * **ru**: Russian \
 * **sk**: Slovak \
 * **sl**: Slovenian \
 * **sr**: Serbian \
 * **sv**: Swedish \
 * **tr**: Turkish \
 * **ur**: Urdu \
 * **zh**: Chinese (Simplified)
 */
export type AzureSearchDocumentsIndexesSplitSkillLanguage = string;

/** A value indicating which split mode to perform. */
export enum KnownAzureSearchDocumentsIndexesTextSplitMode {
  /** Split the text into individual pages. */
  Pages = "pages",
  /** Split the text into individual sentences. */
  Sentences = "sentences",
}

/**
 * A value indicating which split mode to perform. \
 * {@link KnownAzureSearchDocumentsIndexesTextSplitMode} can be used interchangeably with AzureSearchDocumentsIndexesTextSplitMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **pages**: Split the text into individual pages. \
 * **sentences**: Split the text into individual sentences.
 */
export type AzureSearchDocumentsIndexesTextSplitMode = string;

/** A value indicating which unit to use. */
export enum KnownAzureSearchDocumentsIndexesSplitSkillUnit {
  /** The length will be measured by character. */
  Characters = "characters",
  /** The length will be measured by an AzureOpenAI tokenizer from the tiktoken library. */
  AzureOpenAITokens = "azureOpenAITokens",
}

/**
 * A value indicating which unit to use. \
 * {@link KnownAzureSearchDocumentsIndexesSplitSkillUnit} can be used interchangeably with AzureSearchDocumentsIndexesSplitSkillUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **characters**: The length will be measured by character. \
 * **azureOpenAITokens**: The length will be measured by an AzureOpenAI tokenizer from the tiktoken library.
 */
export type AzureSearchDocumentsIndexesSplitSkillUnit = string;

/** Azure OpenAI Tokenizer parameters. */
export interface AzureSearchDocumentsIndexesAzureOpenAITokenizerParameters {
  /** Only applies if the unit is set to azureOpenAITokens. Options include 'R50k_base', 'P50k_base', 'P50k_edit' and 'CL100k_base'. The default value is 'CL100k_base'. */
  encoderModelName?: AzureSearchDocumentsIndexesSplitSkillEncoderModelName;
  /** (Optional) Only applies if the unit is set to azureOpenAITokens. This parameter defines a collection of special tokens that are permitted within the tokenization process. */
  allowedSpecialTokens?: string[];
}

export function azureSearchDocumentsIndexesAzureOpenAITokenizerParametersSerializer(
  item: AzureSearchDocumentsIndexesAzureOpenAITokenizerParameters,
): any {
  return {
    encoderModelName: item["encoderModelName"],
    allowedSpecialTokens: !item["allowedSpecialTokens"]
      ? item["allowedSpecialTokens"]
      : item["allowedSpecialTokens"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesAzureOpenAITokenizerParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureOpenAITokenizerParameters {
  return {
    encoderModelName: item["encoderModelName"],
    allowedSpecialTokens: !item["allowedSpecialTokens"]
      ? item["allowedSpecialTokens"]
      : item["allowedSpecialTokens"].map((p: any) => {
          return p;
        }),
  };
}

/** A value indicating which tokenizer to use. */
export enum KnownAzureSearchDocumentsIndexesSplitSkillEncoderModelName {
  /** Refers to a base model trained with a 50,000 token vocabulary, often used in general natural language processing tasks. */
  R50KBase = "r50k_base",
  /** A base model with a 50,000 token vocabulary, optimized for prompt-based tasks. */
  P50KBase = "p50k_base",
  /** Similar to p50k_base but fine-tuned for editing or rephrasing tasks with a 50,000 token vocabulary. */
  P50KEdit = "p50k_edit",
  /** A base model with a 100,000 token vocabulary. */
  CL100KBase = "cl100k_base",
}

/**
 * A value indicating which tokenizer to use. \
 * {@link KnownAzureSearchDocumentsIndexesSplitSkillEncoderModelName} can be used interchangeably with AzureSearchDocumentsIndexesSplitSkillEncoderModelName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **r50k_base**: Refers to a base model trained with a 50,000 token vocabulary, often used in general natural language processing tasks. \
 * **p50k_base**: A base model with a 50,000 token vocabulary, optimized for prompt-based tasks. \
 * **p50k_edit**: Similar to p50k_base but fine-tuned for editing or rephrasing tasks with a 50,000 token vocabulary. \
 * **cl100k_base**: A base model with a 100,000 token vocabulary.
 */
export type AzureSearchDocumentsIndexesSplitSkillEncoderModelName = string;

/** A skill looks for text from a custom, user-defined list of words and phrases. */
export interface AzureSearchDocumentsIndexesCustomEntityLookupSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: AzureSearchDocumentsIndexesCustomEntityLookupSkillLanguage;
  /** Path to a JSON or CSV file containing all the target text to match against. This entity definition is read at the beginning of an indexer run. Any updates to this file during an indexer run will not take effect until subsequent runs. This config must be accessible over HTTPS. */
  entitiesDefinitionUri?: string;
  /** The inline CustomEntity definition. */
  inlineEntitiesDefinition?: AzureSearchDocumentsIndexesCustomEntity[];
  /** A global flag for CaseSensitive. If CaseSensitive is not set in CustomEntity, this value will be the default value. */
  globalDefaultCaseSensitive?: boolean;
  /** A global flag for AccentSensitive. If AccentSensitive is not set in CustomEntity, this value will be the default value. */
  globalDefaultAccentSensitive?: boolean;
  /** A global flag for FuzzyEditDistance. If FuzzyEditDistance is not set in CustomEntity, this value will be the default value. */
  globalDefaultFuzzyEditDistance?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.CustomEntityLookupSkill";
}

export function azureSearchDocumentsIndexesCustomEntityLookupSkillSerializer(
  item: AzureSearchDocumentsIndexesCustomEntityLookupSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultLanguageCode: item["defaultLanguageCode"],
    entitiesDefinitionUri: item["entitiesDefinitionUri"],
    inlineEntitiesDefinition: !item["inlineEntitiesDefinition"]
      ? item["inlineEntitiesDefinition"]
      : azureSearchDocumentsIndexesCustomEntityArraySerializer(
          item["inlineEntitiesDefinition"],
        ),
    globalDefaultCaseSensitive: item["globalDefaultCaseSensitive"],
    globalDefaultAccentSensitive: item["globalDefaultAccentSensitive"],
    globalDefaultFuzzyEditDistance: item["globalDefaultFuzzyEditDistance"],
  };
}

export function azureSearchDocumentsIndexesCustomEntityLookupSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCustomEntityLookupSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultLanguageCode: item["defaultLanguageCode"],
    entitiesDefinitionUri: item["entitiesDefinitionUri"],
    inlineEntitiesDefinition: !item["inlineEntitiesDefinition"]
      ? item["inlineEntitiesDefinition"]
      : azureSearchDocumentsIndexesCustomEntityArrayDeserializer(
          item["inlineEntitiesDefinition"],
        ),
    globalDefaultCaseSensitive: item["globalDefaultCaseSensitive"],
    globalDefaultAccentSensitive: item["globalDefaultAccentSensitive"],
    globalDefaultFuzzyEditDistance: item["globalDefaultFuzzyEditDistance"],
  };
}

/** The language codes supported for input text by CustomEntityLookupSkill. */
export enum KnownAzureSearchDocumentsIndexesCustomEntityLookupSkillLanguage {
  /** Danish */
  Da = "da",
  /** German */
  De = "de",
  /** English */
  En = "en",
  /** Spanish */
  Es = "es",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** Italian */
  It = "it",
  /** Korean */
  Ko = "ko",
  /** Portuguese */
  Pt = "pt",
}

/**
 * The language codes supported for input text by CustomEntityLookupSkill. \
 * {@link KnownAzureSearchDocumentsIndexesCustomEntityLookupSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesCustomEntityLookupSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **da**: Danish \
 * **de**: German \
 * **en**: English \
 * **es**: Spanish \
 * **fi**: Finnish \
 * **fr**: French \
 * **it**: Italian \
 * **ko**: Korean \
 * **pt**: Portuguese
 */
export type AzureSearchDocumentsIndexesCustomEntityLookupSkillLanguage = string;

export function azureSearchDocumentsIndexesCustomEntityArraySerializer(
  result: Array<AzureSearchDocumentsIndexesCustomEntity>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesCustomEntitySerializer(item);
  });
}

export function azureSearchDocumentsIndexesCustomEntityArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesCustomEntity>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesCustomEntityDeserializer(item);
  });
}

/** An object that contains information about the matches that were found, and related metadata. */
export interface AzureSearchDocumentsIndexesCustomEntity {
  /** The top-level entity descriptor. Matches in the skill output will be grouped by this name, and it should represent the "normalized" form of the text being found. */
  name: string;
  /** This field can be used as a passthrough for custom metadata about the matched text(s). The value of this field will appear with every match of its entity in the skill output. */
  description?: string;
  /** This field can be used as a passthrough for custom metadata about the matched text(s). The value of this field will appear with every match of its entity in the skill output. */
  type?: string;
  /** This field can be used as a passthrough for custom metadata about the matched text(s). The value of this field will appear with every match of its entity in the skill output. */
  subtype?: string;
  /** This field can be used as a passthrough for custom metadata about the matched text(s). The value of this field will appear with every match of its entity in the skill output. */
  id?: string;
  /** Defaults to false. Boolean value denoting whether comparisons with the entity name should be sensitive to character casing. Sample case insensitive matches of "Microsoft" could be: microsoft, microSoft, MICROSOFT. */
  caseSensitive?: boolean;
  /** Defaults to false. Boolean value denoting whether comparisons with the entity name should be sensitive to accent. */
  accentSensitive?: boolean;
  /** Defaults to 0. Maximum value of 5. Denotes the acceptable number of divergent characters that would still constitute a match with the entity name. The smallest possible fuzziness for any given match is returned. For instance, if the edit distance is set to 3, "Windows10" would still match "Windows", "Windows10" and "Windows 7". When case sensitivity is set to false, case differences do NOT count towards fuzziness tolerance, but otherwise do. */
  fuzzyEditDistance?: number;
  /** Changes the default case sensitivity value for this entity. It be used to change the default value of all aliases caseSensitive values. */
  defaultCaseSensitive?: boolean;
  /** Changes the default accent sensitivity value for this entity. It be used to change the default value of all aliases accentSensitive values. */
  defaultAccentSensitive?: boolean;
  /** Changes the default fuzzy edit distance value for this entity. It can be used to change the default value of all aliases fuzzyEditDistance values. */
  defaultFuzzyEditDistance?: number;
  /** An array of complex objects that can be used to specify alternative spellings or synonyms to the root entity name. */
  aliases?: AzureSearchDocumentsIndexesCustomEntityAlias[];
}

export function azureSearchDocumentsIndexesCustomEntitySerializer(
  item: AzureSearchDocumentsIndexesCustomEntity,
): any {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    subtype: item["subtype"],
    id: item["id"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
    defaultCaseSensitive: item["defaultCaseSensitive"],
    defaultAccentSensitive: item["defaultAccentSensitive"],
    defaultFuzzyEditDistance: item["defaultFuzzyEditDistance"],
    aliases: !item["aliases"]
      ? item["aliases"]
      : azureSearchDocumentsIndexesCustomEntityAliasArraySerializer(
          item["aliases"],
        ),
  };
}

export function azureSearchDocumentsIndexesCustomEntityDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCustomEntity {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    subtype: item["subtype"],
    id: item["id"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
    defaultCaseSensitive: item["defaultCaseSensitive"],
    defaultAccentSensitive: item["defaultAccentSensitive"],
    defaultFuzzyEditDistance: item["defaultFuzzyEditDistance"],
    aliases: !item["aliases"]
      ? item["aliases"]
      : azureSearchDocumentsIndexesCustomEntityAliasArrayDeserializer(
          item["aliases"],
        ),
  };
}

export function azureSearchDocumentsIndexesCustomEntityAliasArraySerializer(
  result: Array<AzureSearchDocumentsIndexesCustomEntityAlias>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesCustomEntityAliasSerializer(item);
  });
}

export function azureSearchDocumentsIndexesCustomEntityAliasArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesCustomEntityAlias>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesCustomEntityAliasDeserializer(item);
  });
}

/** A complex object that can be used to specify alternative spellings or synonyms to the root entity name. */
export interface AzureSearchDocumentsIndexesCustomEntityAlias {
  /** The text of the alias. */
  text: string;
  /** Determine if the alias is case sensitive. */
  caseSensitive?: boolean;
  /** Determine if the alias is accent sensitive. */
  accentSensitive?: boolean;
  /** Determine the fuzzy edit distance of the alias. */
  fuzzyEditDistance?: number;
}

export function azureSearchDocumentsIndexesCustomEntityAliasSerializer(
  item: AzureSearchDocumentsIndexesCustomEntityAlias,
): any {
  return {
    text: item["text"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
  };
}

export function azureSearchDocumentsIndexesCustomEntityAliasDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCustomEntityAlias {
  return {
    text: item["text"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
  };
}

/** A skill to translate text from one language to another. */
export interface AzureSearchDocumentsIndexesTextTranslationSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The language code to translate documents into for documents that don't specify the to language explicitly. */
  defaultToLanguageCode: AzureSearchDocumentsIndexesTextTranslationSkillLanguage;
  /** The language code to translate documents from for documents that don't specify the from language explicitly. */
  defaultFromLanguageCode?: AzureSearchDocumentsIndexesTextTranslationSkillLanguage;
  /** The language code to translate documents from when neither the fromLanguageCode input nor the defaultFromLanguageCode parameter are provided, and the automatic language detection is unsuccessful. Default is `en`. */
  suggestedFrom?: AzureSearchDocumentsIndexesTextTranslationSkillLanguage;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.TranslationSkill";
}

export function azureSearchDocumentsIndexesTextTranslationSkillSerializer(
  item: AzureSearchDocumentsIndexesTextTranslationSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    defaultToLanguageCode: item["defaultToLanguageCode"],
    defaultFromLanguageCode: item["defaultFromLanguageCode"],
    suggestedFrom: item["suggestedFrom"],
  };
}

export function azureSearchDocumentsIndexesTextTranslationSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesTextTranslationSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    defaultToLanguageCode: item["defaultToLanguageCode"],
    defaultFromLanguageCode: item["defaultFromLanguageCode"],
    suggestedFrom: item["suggestedFrom"],
  };
}

/** The language codes supported for input text by TextTranslationSkill. */
export enum KnownAzureSearchDocumentsIndexesTextTranslationSkillLanguage {
  /** Afrikaans */
  Af = "af",
  /** Arabic */
  Ar = "ar",
  /** Bangla */
  Bn = "bn",
  /** Bosnian (Latin) */
  Bs = "bs",
  /** Bulgarian */
  Bg = "bg",
  /** Cantonese (Traditional) */
  Yue = "yue",
  /** Catalan */
  Ca = "ca",
  /** Chinese Simplified */
  ZhHans = "zh-Hans",
  /** Chinese Traditional */
  ZhHant = "zh-Hant",
  /** Croatian */
  Hr = "hr",
  /** Czech */
  Cs = "cs",
  /** Danish */
  Da = "da",
  /** Dutch */
  Nl = "nl",
  /** English */
  En = "en",
  /** Estonian */
  Et = "et",
  /** Fijian */
  Fj = "fj",
  /** Filipino */
  Fil = "fil",
  /** Finnish */
  Fi = "fi",
  /** French */
  Fr = "fr",
  /** German */
  De = "de",
  /** Greek */
  El = "el",
  /** Haitian Creole */
  Ht = "ht",
  /** Hebrew */
  He = "he",
  /** Hindi */
  Hi = "hi",
  /** Hmong Daw */
  Mww = "mww",
  /** Hungarian */
  Hu = "hu",
  /** Icelandic */
  Is = "is",
  /** Indonesian */
  Id = "id",
  /** Italian */
  It = "it",
  /** Japanese */
  Ja = "ja",
  /** Kiswahili */
  Sw = "sw",
  /** Klingon */
  Tlh = "tlh",
  /** Klingon (Latin script) */
  TlhLatn = "tlh-Latn",
  /** Klingon (Klingon script) */
  TlhPiqd = "tlh-Piqd",
  /** Korean */
  Ko = "ko",
  /** Latvian */
  Lv = "lv",
  /** Lithuanian */
  Lt = "lt",
  /** Malagasy */
  Mg = "mg",
  /** Malay */
  Ms = "ms",
  /** Maltese */
  Mt = "mt",
  /** Norwegian */
  Nb = "nb",
  /** Persian */
  Fa = "fa",
  /** Polish */
  Pl = "pl",
  /** Portuguese */
  Pt = "pt",
  /** Portuguese (Brazil) */
  PtBr = "pt-br",
  /** Portuguese (Portugal) */
  PtPT = "pt-PT",
  /** Queretaro Otomi */
  Otq = "otq",
  /** Romanian */
  Ro = "ro",
  /** Russian */
  Ru = "ru",
  /** Samoan */
  Sm = "sm",
  /** Serbian (Cyrillic) */
  SrCyrl = "sr-Cyrl",
  /** Serbian (Latin) */
  SrLatn = "sr-Latn",
  /** Slovak */
  Sk = "sk",
  /** Slovenian */
  Sl = "sl",
  /** Spanish */
  Es = "es",
  /** Swedish */
  Sv = "sv",
  /** Tahitian */
  Ty = "ty",
  /** Tamil */
  Ta = "ta",
  /** Telugu */
  Te = "te",
  /** Thai */
  Th = "th",
  /** Tongan */
  To = "to",
  /** Turkish */
  Tr = "tr",
  /** Ukrainian */
  Uk = "uk",
  /** Urdu */
  Ur = "ur",
  /** Vietnamese */
  Vi = "vi",
  /** Welsh */
  Cy = "cy",
  /** Yucatec Maya */
  Yua = "yua",
  /** Irish */
  Ga = "ga",
  /** Kannada */
  Kn = "kn",
  /** Maori */
  Mi = "mi",
  /** Malayalam */
  Ml = "ml",
  /** Punjabi */
  Pa = "pa",
}

/**
 * The language codes supported for input text by TextTranslationSkill. \
 * {@link KnownAzureSearchDocumentsIndexesTextTranslationSkillLanguage} can be used interchangeably with AzureSearchDocumentsIndexesTextTranslationSkillLanguage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **af**: Afrikaans \
 * **ar**: Arabic \
 * **bn**: Bangla \
 * **bs**: Bosnian (Latin) \
 * **bg**: Bulgarian \
 * **yue**: Cantonese (Traditional) \
 * **ca**: Catalan \
 * **zh-Hans**: Chinese Simplified \
 * **zh-Hant**: Chinese Traditional \
 * **hr**: Croatian \
 * **cs**: Czech \
 * **da**: Danish \
 * **nl**: Dutch \
 * **en**: English \
 * **et**: Estonian \
 * **fj**: Fijian \
 * **fil**: Filipino \
 * **fi**: Finnish \
 * **fr**: French \
 * **de**: German \
 * **el**: Greek \
 * **ht**: Haitian Creole \
 * **he**: Hebrew \
 * **hi**: Hindi \
 * **mww**: Hmong Daw \
 * **hu**: Hungarian \
 * **is**: Icelandic \
 * **id**: Indonesian \
 * **it**: Italian \
 * **ja**: Japanese \
 * **sw**: Kiswahili \
 * **tlh**: Klingon \
 * **tlh-Latn**: Klingon (Latin script) \
 * **tlh-Piqd**: Klingon (Klingon script) \
 * **ko**: Korean \
 * **lv**: Latvian \
 * **lt**: Lithuanian \
 * **mg**: Malagasy \
 * **ms**: Malay \
 * **mt**: Maltese \
 * **nb**: Norwegian \
 * **fa**: Persian \
 * **pl**: Polish \
 * **pt**: Portuguese \
 * **pt-br**: Portuguese (Brazil) \
 * **pt-PT**: Portuguese (Portugal) \
 * **otq**: Queretaro Otomi \
 * **ro**: Romanian \
 * **ru**: Russian \
 * **sm**: Samoan \
 * **sr-Cyrl**: Serbian (Cyrillic) \
 * **sr-Latn**: Serbian (Latin) \
 * **sk**: Slovak \
 * **sl**: Slovenian \
 * **es**: Spanish \
 * **sv**: Swedish \
 * **ty**: Tahitian \
 * **ta**: Tamil \
 * **te**: Telugu \
 * **th**: Thai \
 * **to**: Tongan \
 * **tr**: Turkish \
 * **uk**: Ukrainian \
 * **ur**: Urdu \
 * **vi**: Vietnamese \
 * **cy**: Welsh \
 * **yua**: Yucatec Maya \
 * **ga**: Irish \
 * **kn**: Kannada \
 * **mi**: Maori \
 * **ml**: Malayalam \
 * **pa**: Punjabi
 */
export type AzureSearchDocumentsIndexesTextTranslationSkillLanguage = string;

/** A skill that extracts content from a file within the enrichment pipeline. */
export interface AzureSearchDocumentsIndexesDocumentExtractionSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The parsingMode for the skill. Will be set to 'default' if not defined. */
  parsingMode?: string;
  /** The type of data to be extracted for the skill. Will be set to 'contentAndMetadata' if not defined. */
  dataToExtract?: string;
  /** A dictionary of configurations for the skill. */
  configuration?: Record<string, any>;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.DocumentExtractionSkill";
}

export function azureSearchDocumentsIndexesDocumentExtractionSkillSerializer(
  item: AzureSearchDocumentsIndexesDocumentExtractionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    parsingMode: item["parsingMode"],
    dataToExtract: item["dataToExtract"],
    configuration: item["configuration"],
  };
}

export function azureSearchDocumentsIndexesDocumentExtractionSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDocumentExtractionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    parsingMode: item["parsingMode"],
    dataToExtract: item["dataToExtract"],
    configuration: item["configuration"],
  };
}

/** A skill that extracts content and layout information, via Azure AI Services, from files within the enrichment pipeline. */
export interface AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** Controls the cardinality of the output produced by the skill. Default is 'oneToMany'. */
  outputFormat?: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputFormat;
  /** Controls the cardinality of the output produced by the skill. Default is 'oneToMany'. */
  outputMode?: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputMode;
  /** The depth of headers in the markdown output. Default is h6. */
  markdownHeaderDepth?: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillMarkdownHeaderDepth;
  /** Controls the cardinality of the content extracted from the document by the skill. */
  extractionOptions?: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillExtractionOptions[];
  /** Controls the cardinality for chunking the content. */
  chunkingProperties?: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingProperties;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill";
}

export function azureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillSerializer(
  item: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    outputFormat: item["outputFormat"],
    outputMode: item["outputMode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
    extractionOptions: !item["extractionOptions"]
      ? item["extractionOptions"]
      : item["extractionOptions"].map((p: any) => {
          return p;
        }),
    chunkingProperties: !item["chunkingProperties"]
      ? item["chunkingProperties"]
      : azureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingPropertiesSerializer(
          item["chunkingProperties"],
        ),
  };
}

export function azureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    outputFormat: item["outputFormat"],
    outputMode: item["outputMode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
    extractionOptions: !item["extractionOptions"]
      ? item["extractionOptions"]
      : item["extractionOptions"].map((p: any) => {
          return p;
        }),
    chunkingProperties: !item["chunkingProperties"]
      ? item["chunkingProperties"]
      : azureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingPropertiesDeserializer(
          item["chunkingProperties"],
        ),
  };
}

/** Controls the cardinality of the output format. Default is 'markdown'. */
export enum KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputFormat {
  /** Specify the format of the output as text. */
  Text = "text",
  /** Specify the format of the output as markdown. */
  Markdown = "markdown",
}

/**
 * Controls the cardinality of the output format. Default is 'markdown'. \
 * {@link KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputFormat} can be used interchangeably with AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **text**: Specify the format of the output as text. \
 * **markdown**: Specify the format of the output as markdown.
 */
export type AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputFormat =
  string;

/** Controls the cardinality of the output produced by the skill. Default is 'oneToMany'. */
export enum KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputMode {
  /** Specify that the output should be parsed as 'oneToMany'. */
  OneToMany = "oneToMany",
}

/**
 * Controls the cardinality of the output produced by the skill. Default is 'oneToMany'. \
 * {@link KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputMode} can be used interchangeably with AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **oneToMany**: Specify that the output should be parsed as 'oneToMany'.
 */
export type AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillOutputMode =
  string;

/** The depth of headers in the markdown output. Default is h6. */
export enum KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillMarkdownHeaderDepth {
  /** Header level 1. */
  H1 = "h1",
  /** Header level 2. */
  H2 = "h2",
  /** Header level 3. */
  H3 = "h3",
  /** Header level 4. */
  H4 = "h4",
  /** Header level 5. */
  H5 = "h5",
  /** Header level 6. */
  H6 = "h6",
}

/**
 * The depth of headers in the markdown output. Default is h6. \
 * {@link KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillMarkdownHeaderDepth} can be used interchangeably with AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillMarkdownHeaderDepth,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **h1**: Header level 1. \
 * **h2**: Header level 2. \
 * **h3**: Header level 3. \
 * **h4**: Header level 4. \
 * **h5**: Header level 5. \
 * **h6**: Header level 6.
 */
export type AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillMarkdownHeaderDepth =
  string;

/** Controls the cardinality of the content extracted from the document by the skill. */
export enum KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillExtractionOptions {
  /** Specify that image content should be extracted from the document. */
  Images = "images",
  /** Specify that location metadata should be extracted from the document. */
  LocationMetadata = "locationMetadata",
}

/**
 * Controls the cardinality of the content extracted from the document by the skill. \
 * {@link KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillExtractionOptions} can be used interchangeably with AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillExtractionOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **images**: Specify that image content should be extracted from the document. \
 * **locationMetadata**: Specify that location metadata should be extracted from the document.
 */
export type AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillExtractionOptions =
  string;

/** Controls the cardinality for chunking the content. */
export interface AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingProperties {
  /** The unit of the chunk. */
  unit?: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingUnit;
  /** The maximum chunk length in characters. Default is 500. */
  maximumLength?: number;
  /** The length of overlap provided between two text chunks. Default is 0. */
  overlapLength?: number;
}

export function azureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingPropertiesSerializer(
  item: AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingProperties,
): any {
  return {
    unit: item["unit"],
    maximumLength: item["maximumLength"],
    overlapLength: item["overlapLength"],
  };
}

export function azureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingPropertiesDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingProperties {
  return {
    unit: item["unit"],
    maximumLength: item["maximumLength"],
    overlapLength: item["overlapLength"],
  };
}

/** Controls the cardinality of the chunk unit. Default is 'characters' */
export enum KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingUnit {
  /** Specifies chunk by characters. */
  Characters = "characters",
}

/**
 * Controls the cardinality of the chunk unit. Default is 'characters' \
 * {@link KnownAzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingUnit} can be used interchangeably with AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **characters**: Specifies chunk by characters.
 */
export type AzureSearchDocumentsIndexesDocumentIntelligenceLayoutSkillChunkingUnit =
  string;

/** A skill that can call a Web API endpoint, allowing you to extend a skillset by having it call your custom code. */
export interface AzureSearchDocumentsIndexesWebApiSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The url for the Web API. */
  uri: string;
  /** The headers required to make the http request. */
  httpHeaders?: Record<string, string>;
  /** The method for the http request. */
  httpMethod?: string;
  /** The desired timeout for the request. Default is 30 seconds. */
  timeout?: string;
  /** The desired batch size which indicates number of documents. */
  batchSize?: number;
  /** If set, the number of parallel calls that can be made to the Web API. */
  degreeOfParallelism?: number;
  /** Applies to custom skills that connect to external code in an Azure function or some other application that provides the transformations. This value should be the application ID created for the function or app when it was registered with Azure Active Directory. When specified, the custom skill connects to the function or app using a managed ID (either system or user-assigned) of the search service and the access token of the function or app, using this value as the resource id for creating the scope of the access token. */
  authResourceId?: string;
  /** The user-assigned managed identity used for outbound connections. If an authResourceId is provided and it's not specified, the system-assigned managed identity is used. On updates to the indexer, if the identity is unspecified, the value remains unchanged. If set to "none", the value of this property is cleared. */
  authIdentity?: SearchIndexerDataIdentityUnion;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Custom.WebApiSkill";
}

export function azureSearchDocumentsIndexesWebApiSkillSerializer(
  item: AzureSearchDocumentsIndexesWebApiSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    uri: item["uri"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    batchSize: item["batchSize"],
    degreeOfParallelism: item["degreeOfParallelism"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["authIdentity"],
        ),
  };
}

export function azureSearchDocumentsIndexesWebApiSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesWebApiSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    uri: item["uri"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    batchSize: item["batchSize"],
    degreeOfParallelism: item["degreeOfParallelism"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["authIdentity"],
        ),
  };
}

/** The AML skill allows you to extend AI enrichment with a custom Azure Machine Learning (AML) model. Once an AML model is trained and deployed, an AML skill integrates it into AI enrichment. */
export interface AzureSearchDocumentsIndexesAzureMachineLearningSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** (Required for no authentication or key authentication) The scoring URI of the AML service to which the JSON payload will be sent. Only the https URI scheme is allowed. */
  scoringUri?: string;
  /** (Required for key authentication) The key for the AML service. */
  authenticationKey?: string;
  /** (Required for token authentication). The Azure Resource Manager resource ID of the AML service. It should be in the format subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.MachineLearningServices/workspaces/{workspace-name}/services/{service_name}. */
  resourceId?: string;
  /** (Optional) When specified, indicates the timeout for the http client making the API call. */
  timeout?: string;
  /** (Optional for token authentication). The region the AML service is deployed in. */
  region?: string;
  /** (Optional) When specified, indicates the number of calls the indexer will make in parallel to the endpoint you have provided. You can decrease this value if your endpoint is failing under too high of a request load, or raise it if your endpoint is able to accept more requests and you would like an increase in the performance of the indexer. If not set, a default value of 5 is used. The degreeOfParallelism can be set to a maximum of 10 and a minimum of 1. */
  degreeOfParallelism?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Custom.AmlSkill";
}

export function azureSearchDocumentsIndexesAzureMachineLearningSkillSerializer(
  item: AzureSearchDocumentsIndexesAzureMachineLearningSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    uri: item["scoringUri"],
    key: item["authenticationKey"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    degreeOfParallelism: item["degreeOfParallelism"],
  };
}

export function azureSearchDocumentsIndexesAzureMachineLearningSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureMachineLearningSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    scoringUri: item["uri"],
    authenticationKey: item["key"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    degreeOfParallelism: item["degreeOfParallelism"],
  };
}

/** Allows you to generate a vector embedding for a given text input using the Azure OpenAI resource. */
export interface AzureSearchDocumentsIndexesAzureOpenAIEmbeddingSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The resource URI of the Azure OpenAI resource. */
  resourceUrl?: string;
  /** ID of the Azure OpenAI model deployment on the designated resource. */
  deploymentName?: string;
  /** API key of the designated Azure OpenAI resource. */
  apiKey?: string;
  /** The user-assigned managed identity used for outbound connections. */
  authIdentity?: SearchIndexerDataIdentityUnion;
  /** The name of the embedding model that is deployed at the provided deploymentId path. */
  modelName?: AzureSearchDocumentsIndexesAzureOpenAIModelName;
  /** The number of dimensions the resulting output embeddings should have. Only supported in text-embedding-3 and later models. */
  dimensions?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill";
}

export function azureSearchDocumentsIndexesAzureOpenAIEmbeddingSkillSerializer(
  item: AzureSearchDocumentsIndexesAzureOpenAIEmbeddingSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    resourceUri: item["resourceUrl"],
    deploymentId: item["deploymentName"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["authIdentity"],
        ),
    modelName: item["modelName"],
    dimensions: item["dimensions"],
  };
}

export function azureSearchDocumentsIndexesAzureOpenAIEmbeddingSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAzureOpenAIEmbeddingSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    resourceUrl: item["resourceUri"],
    deploymentName: item["deploymentId"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["authIdentity"],
        ),
    modelName: item["modelName"],
    dimensions: item["dimensions"],
  };
}

/** Allows you to generate a vector embedding for a given image or text input using the Azure AI Services Vision Vectorize API. */
export interface AzureSearchDocumentsIndexesVisionVectorizeSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The version of the model to use when calling the AI Services Vision service. It will default to the latest available when not specified. */
  modelVersion: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Vision.VectorizeSkill";
}

export function azureSearchDocumentsIndexesVisionVectorizeSkillSerializer(
  item: AzureSearchDocumentsIndexesVisionVectorizeSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    modelVersion: item["modelVersion"],
  };
}

export function azureSearchDocumentsIndexesVisionVectorizeSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesVisionVectorizeSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    modelVersion: item["modelVersion"],
  };
}

/** A skill that calls a language model via Azure AI Foundry's Chat Completions endpoint. */
export interface AzureSearchDocumentsIndexesChatCompletionSkill
  extends AzureSearchDocumentsIndexesSearchIndexerSkill {
  /** The url for the Web API. */
  uri: string;
  /** The headers required to make the http request. */
  httpHeaders?: AzureSearchDocumentsIndexesWebApiHttpHeaders;
  /** The method for the http request. */
  httpMethod?: string;
  /** The desired timeout for the request. Default is 30 seconds. */
  timeout?: string;
  /** The desired batch size which indicates number of documents. */
  batchSize?: number;
  /** If set, the number of parallel calls that can be made to the Web API. */
  degreeOfParallelism?: number;
  /** Applies to custom skills that connect to external code in an Azure function or some other application that provides the transformations. */
  authResourceId?: string;
  /** The user-assigned managed identity used for outbound connections. */
  authIdentity?: SearchIndexerDataIdentityUnion;
  /** API key for authenticating to the model. Both apiKey and authIdentity cannot be specified at the same time. */
  apiKey?: string;
  /** Common language model parameters that customers can tweak. If omitted, reasonable defaults will be applied. */
  commonModelParameters?: AzureSearchDocumentsIndexesChatCompletionCommonModelParameters;
  /** Open-type dictionary for model-specific parameters that should be appended to the chat completions call. Follows Azure AI Foundry's extensibility pattern. */
  extraParameters?: Record<string, any>;
  /** How extra parameters are handled by Azure AI Foundry. Default is 'error'. */
  extraParametersBehavior?: AzureSearchDocumentsIndexesChatCompletionExtraParametersBehavior;
  /** Determines how the LLM should format its response. Defaults to 'text' response type. */
  responseFormat?: AzureSearchDocumentsIndexesChatCompletionResponseFormat;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Custom.ChatCompletionSkill";
}

export function azureSearchDocumentsIndexesChatCompletionSkillSerializer(
  item: AzureSearchDocumentsIndexesChatCompletionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["inputs"],
    ),
    outputs: azureSearchDocumentsIndexesOutputFieldMappingEntryArraySerializer(
      item["outputs"],
    ),
    uri: item["uri"],
    httpHeaders: !item["httpHeaders"]
      ? item["httpHeaders"]
      : azureSearchDocumentsIndexesWebApiHttpHeadersSerializer(
          item["httpHeaders"],
        ),
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    batchSize: item["batchSize"],
    degreeOfParallelism: item["degreeOfParallelism"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["authIdentity"],
        ),
    apiKey: item["apiKey"],
    commonModelParameters: !item["commonModelParameters"]
      ? item["commonModelParameters"]
      : azureSearchDocumentsIndexesChatCompletionCommonModelParametersSerializer(
          item["commonModelParameters"],
        ),
    extraParameters: item["extraParameters"],
    extraParametersBehavior: item["extraParametersBehavior"],
    responseFormat: !item["responseFormat"]
      ? item["responseFormat"]
      : azureSearchDocumentsIndexesChatCompletionResponseFormatSerializer(
          item["responseFormat"],
        ),
    "@odata.type": item["odataType"],
  };
}

export function azureSearchDocumentsIndexesChatCompletionSkillDeserializer(
  item: any,
): AzureSearchDocumentsIndexesChatCompletionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
      item["inputs"],
    ),
    outputs:
      azureSearchDocumentsIndexesOutputFieldMappingEntryArrayDeserializer(
        item["outputs"],
      ),
    uri: item["uri"],
    httpHeaders: !item["httpHeaders"]
      ? item["httpHeaders"]
      : azureSearchDocumentsIndexesWebApiHttpHeadersDeserializer(
          item["httpHeaders"],
        ),
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    batchSize: item["batchSize"],
    degreeOfParallelism: item["degreeOfParallelism"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["authIdentity"],
        ),
    apiKey: item["apiKey"],
    commonModelParameters: !item["commonModelParameters"]
      ? item["commonModelParameters"]
      : azureSearchDocumentsIndexesChatCompletionCommonModelParametersDeserializer(
          item["commonModelParameters"],
        ),
    extraParameters: item["extraParameters"],
    extraParametersBehavior: item["extraParametersBehavior"],
    responseFormat: !item["responseFormat"]
      ? item["responseFormat"]
      : azureSearchDocumentsIndexesChatCompletionResponseFormatDeserializer(
          item["responseFormat"],
        ),
    odataType: item["@odata.type"],
  };
}

/** A dictionary of http request headers. */
export interface AzureSearchDocumentsIndexesWebApiHttpHeaders {
  /** Additional properties */
  additionalProperties?: Record<string, string>;
}

export function azureSearchDocumentsIndexesWebApiHttpHeadersSerializer(
  item: AzureSearchDocumentsIndexesWebApiHttpHeaders,
): any {
  return { ...serializeRecord(item.additionalProperties ?? {}) };
}

export function azureSearchDocumentsIndexesWebApiHttpHeadersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesWebApiHttpHeaders {
  return {
    additionalProperties: serializeRecord(item, []),
  };
}

/** Common language model parameters for Chat Completions. If omitted, default values are used. */
export interface AzureSearchDocumentsIndexesChatCompletionCommonModelParameters {
  /** The name of the model to use (e.g., 'gpt-4o', etc.). Default is null if not specified. */
  modelName?: string;
  /** A float in the range [-2,2] that reduces or increases likelihood of repeated tokens. Default is 0. */
  frequencyPenalty?: number;
  /** A float in the range [-2,2] that penalizes new tokens based on their existing presence. Default is 0. */
  presencePenalty?: number;
  /** Maximum number of tokens to generate. */
  maxTokens?: number;
  /** Sampling temperature. Default is 0.7. */
  temperature?: number;
  /** Random seed for controlling deterministic outputs. If omitted, randomization is used. */
  seed?: number;
  /** List of stop sequences that will cut off text generation. Default is none. */
  stop?: string[];
}

export function azureSearchDocumentsIndexesChatCompletionCommonModelParametersSerializer(
  item: AzureSearchDocumentsIndexesChatCompletionCommonModelParameters,
): any {
  return {
    modelName: item["modelName"],
    frequencyPenalty: item["frequencyPenalty"],
    presencePenalty: item["presencePenalty"],
    maxTokens: item["maxTokens"],
    temperature: item["temperature"],
    seed: item["seed"],
    stop: !item["stop"]
      ? item["stop"]
      : item["stop"].map((p: any) => {
          return p;
        }),
  };
}

export function azureSearchDocumentsIndexesChatCompletionCommonModelParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesChatCompletionCommonModelParameters {
  return {
    modelName: item["modelName"],
    frequencyPenalty: item["frequencyPenalty"],
    presencePenalty: item["presencePenalty"],
    maxTokens: item["maxTokens"],
    temperature: item["temperature"],
    seed: item["seed"],
    stop: !item["stop"]
      ? item["stop"]
      : item["stop"].map((p: any) => {
          return p;
        }),
  };
}

/** Specifies how 'extraParameters' should be handled by Azure AI Foundry. Defaults to 'error'. */
export enum KnownAzureSearchDocumentsIndexesChatCompletionExtraParametersBehavior {
  /** Passes any extra parameters directly to the model. */
  PassThrough = "passThrough",
  /** Drops all extra parameters. */
  Drop = "drop",
  /** Raises an error if any extra parameter is present. */
  Error = "error",
}

/**
 * Specifies how 'extraParameters' should be handled by Azure AI Foundry. Defaults to 'error'. \
 * {@link KnownAzureSearchDocumentsIndexesChatCompletionExtraParametersBehavior} can be used interchangeably with AzureSearchDocumentsIndexesChatCompletionExtraParametersBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **passThrough**: Passes any extra parameters directly to the model. \
 * **drop**: Drops all extra parameters. \
 * **error**: Raises an error if any extra parameter is present.
 */
export type AzureSearchDocumentsIndexesChatCompletionExtraParametersBehavior =
  string;

/** Determines how the language model's response should be serialized. Defaults to 'text'. */
export interface AzureSearchDocumentsIndexesChatCompletionResponseFormat {
  /** Specifies how the LLM should format the response. */
  type?: AzureSearchDocumentsIndexesChatCompletionResponseFormatType;
  /** An open dictionary for extended properties. Required if 'type' == 'json_schema' */
  jsonSchemaProperties?: AzureSearchDocumentsIndexesChatCompletionSchemaProperties;
}

export function azureSearchDocumentsIndexesChatCompletionResponseFormatSerializer(
  item: AzureSearchDocumentsIndexesChatCompletionResponseFormat,
): any {
  return {
    type: item["type"],
    jsonSchemaProperties: !item["jsonSchemaProperties"]
      ? item["jsonSchemaProperties"]
      : azureSearchDocumentsIndexesChatCompletionSchemaPropertiesSerializer(
          item["jsonSchemaProperties"],
        ),
  };
}

export function azureSearchDocumentsIndexesChatCompletionResponseFormatDeserializer(
  item: any,
): AzureSearchDocumentsIndexesChatCompletionResponseFormat {
  return {
    type: item["type"],
    jsonSchemaProperties: !item["jsonSchemaProperties"]
      ? item["jsonSchemaProperties"]
      : azureSearchDocumentsIndexesChatCompletionSchemaPropertiesDeserializer(
          item["jsonSchemaProperties"],
        ),
  };
}

/** Specifies how the LLM should format the response. */
export enum KnownAzureSearchDocumentsIndexesChatCompletionResponseFormatType {
  /** Plain text response format. */
  Text = "text",
  /** Arbitrary JSON object response format. */
  JsonObject = "jsonObject",
  /** JSON schema-adhering response format. */
  JsonSchema = "jsonSchema",
}

/**
 * Specifies how the LLM should format the response. \
 * {@link KnownAzureSearchDocumentsIndexesChatCompletionResponseFormatType} can be used interchangeably with AzureSearchDocumentsIndexesChatCompletionResponseFormatType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **text**: Plain text response format. \
 * **jsonObject**: Arbitrary JSON object response format. \
 * **jsonSchema**: JSON schema-adhering response format.
 */
export type AzureSearchDocumentsIndexesChatCompletionResponseFormatType =
  string;

/** Properties for JSON schema response format. */
export interface AzureSearchDocumentsIndexesChatCompletionSchemaProperties {
  /** Name of the json schema the model will adhere to. */
  name?: string;
  /** Description of the json schema the model will adhere to. */
  description?: string;
  /** Whether or not the model's response should use structured outputs. Default is true. */
  strict?: boolean;
  /** The schema definition. */
  schema?: AzureSearchDocumentsIndexesChatCompletionSchema;
}

export function azureSearchDocumentsIndexesChatCompletionSchemaPropertiesSerializer(
  item: AzureSearchDocumentsIndexesChatCompletionSchemaProperties,
): any {
  return {
    name: item["name"],
    description: item["description"],
    strict: item["strict"],
    schema: !item["schema"]
      ? item["schema"]
      : azureSearchDocumentsIndexesChatCompletionSchemaSerializer(
          item["schema"],
        ),
  };
}

export function azureSearchDocumentsIndexesChatCompletionSchemaPropertiesDeserializer(
  item: any,
): AzureSearchDocumentsIndexesChatCompletionSchemaProperties {
  return {
    name: item["name"],
    description: item["description"],
    strict: item["strict"],
    schema: !item["schema"]
      ? item["schema"]
      : azureSearchDocumentsIndexesChatCompletionSchemaDeserializer(
          item["schema"],
        ),
  };
}

/** Object defining the custom schema the model will use to structure its output. */
export interface AzureSearchDocumentsIndexesChatCompletionSchema {
  /** Type of schema representation. Usually 'object'. Default is 'object'. */
  type?: string;
  /** A JSON-formatted string that defines the output schema's properties and constraints for the model. */
  properties?: string;
  /** An array of the property names that are required to be part of the model's response. */
  required?: string[];
  /** Controls whether it is allowable for an object to contain additional keys / values that were not defined in the JSON Schema. Default is false. */
  additionalProperties?: boolean;
}

export function azureSearchDocumentsIndexesChatCompletionSchemaSerializer(
  item: AzureSearchDocumentsIndexesChatCompletionSchema,
): any {
  return {
    type: item["type"],
    properties: item["properties"],
    required: !item["required"]
      ? item["required"]
      : item["required"].map((p: any) => {
          return p;
        }),
    additionalProperties: item["additionalProperties"],
  };
}

export function azureSearchDocumentsIndexesChatCompletionSchemaDeserializer(
  item: any,
): AzureSearchDocumentsIndexesChatCompletionSchema {
  return {
    type: item["type"],
    properties: item["properties"],
    required: !item["required"]
      ? item["required"]
      : item["required"].map((p: any) => {
          return p;
        }),
    additionalProperties: item["additionalProperties"],
  };
}

/** Base type for describing any Azure AI service resource attached to a skillset. */
export interface AzureSearchDocumentsIndexesCognitiveServicesAccount {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.DefaultCognitiveServices, #Microsoft.Azure.Search.CognitiveServicesByKey, #Microsoft.Azure.Search.AIServicesByKey, #Microsoft.Azure.Search.AIServicesByIdentity */
  odataType: string;
  /** Description of the Azure AI service resource attached to a skillset. */
  description?: string;
}

export function azureSearchDocumentsIndexesCognitiveServicesAccountSerializer(
  item: AzureSearchDocumentsIndexesCognitiveServicesAccount,
): any {
  return { "@odata.type": item["odataType"], description: item["description"] };
}

export function azureSearchDocumentsIndexesCognitiveServicesAccountDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCognitiveServicesAccount {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
  };
}

/** Alias for CognitiveServicesAccountUnion */
export type CognitiveServicesAccountUnion =
  | AzureSearchDocumentsIndexesDefaultCognitiveServicesAccount
  | AzureSearchDocumentsIndexesCognitiveServicesAccountKey
  | AzureSearchDocumentsIndexesAIServicesAccountKey
  | AzureSearchDocumentsIndexesAIServicesAccountIdentity
  | AzureSearchDocumentsIndexesCognitiveServicesAccount;

export function azureSearchDocumentsIndexesCognitiveServicesAccountUnionSerializer(
  item: CognitiveServicesAccountUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DefaultCognitiveServices":
      return defaultCognitiveServicesAccountSerializer(
        item as DefaultCognitiveServicesAccount,
      );

    case "#Microsoft.Azure.Search.CognitiveServicesByKey":
      return cognitiveServicesAccountKeySerializer(
        item as CognitiveServicesAccountKey,
      );

    case "#Microsoft.Azure.Search.AIServicesByKey":
      return aiServicesAccountKeySerializer(item as AIServicesAccountKey);

    case "#Microsoft.Azure.Search.AIServicesByIdentity":
      return aiServicesAccountIdentitySerializer(
        item as AIServicesAccountIdentity,
      );

    default:
      return azureSearchDocumentsIndexesCognitiveServicesAccountSerializer(
        item,
      );
  }
}

export function azureSearchDocumentsIndexesCognitiveServicesAccountUnionDeserializer(
  item: any,
): CognitiveServicesAccountUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DefaultCognitiveServices":
      return defaultCognitiveServicesAccountDeserializer(
        item as DefaultCognitiveServicesAccount,
      );

    case "#Microsoft.Azure.Search.CognitiveServicesByKey":
      return cognitiveServicesAccountKeyDeserializer(
        item as CognitiveServicesAccountKey,
      );

    case "#Microsoft.Azure.Search.AIServicesByKey":
      return aiServicesAccountKeyDeserializer(item as AIServicesAccountKey);

    case "#Microsoft.Azure.Search.AIServicesByIdentity":
      return aiServicesAccountIdentityDeserializer(
        item as AIServicesAccountIdentity,
      );

    default:
      return azureSearchDocumentsIndexesCognitiveServicesAccountDeserializer(
        item,
      );
  }
}

/** An empty object that represents the default Azure AI service resource for a skillset. */
export interface AzureSearchDocumentsIndexesDefaultCognitiveServicesAccount
  extends AzureSearchDocumentsIndexesCognitiveServicesAccount {
  /** A URI fragment specifying the type of Azure AI service resource attached to a skillset. */
  odataType: "#Microsoft.Azure.Search.DefaultCognitiveServices";
}

export function azureSearchDocumentsIndexesDefaultCognitiveServicesAccountSerializer(
  item: AzureSearchDocumentsIndexesDefaultCognitiveServicesAccount,
): any {
  return { "@odata.type": item["odataType"], description: item["description"] };
}

export function azureSearchDocumentsIndexesDefaultCognitiveServicesAccountDeserializer(
  item: any,
): AzureSearchDocumentsIndexesDefaultCognitiveServicesAccount {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
  };
}

/** The multi-region account key of an Azure AI service resource that's attached to a skillset. */
export interface AzureSearchDocumentsIndexesCognitiveServicesAccountKey
  extends AzureSearchDocumentsIndexesCognitiveServicesAccount {
  /** The key used to provision the Azure AI service resource attached to a skillset. */
  key: string;
  /** A URI fragment specifying the type of Azure AI service resource attached to a skillset. */
  odataType: "#Microsoft.Azure.Search.CognitiveServicesByKey";
}

export function azureSearchDocumentsIndexesCognitiveServicesAccountKeySerializer(
  item: AzureSearchDocumentsIndexesCognitiveServicesAccountKey,
): any {
  return {
    "@odata.type": item["odataType"],
    description: item["description"],
    key: item["key"],
  };
}

export function azureSearchDocumentsIndexesCognitiveServicesAccountKeyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesCognitiveServicesAccountKey {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
    key: item["key"],
  };
}

/** The account key of an Azure AI service resource that's attached to a skillset, to be used with the resource's subdomain. */
export interface AzureSearchDocumentsIndexesAIServicesAccountKey
  extends AzureSearchDocumentsIndexesCognitiveServicesAccount {
  /** The key used to provision the Azure AI service resource attached to a skillset. */
  key: string;
  /** The subdomain url for the corresponding AI Service. */
  subdomainUrl: string;
  /** A URI fragment specifying the type of Azure AI service resource attached to a skillset. */
  odataType: "#Microsoft.Azure.Search.AIServicesByKey";
}

export function azureSearchDocumentsIndexesAIServicesAccountKeySerializer(
  item: AzureSearchDocumentsIndexesAIServicesAccountKey,
): any {
  return {
    "@odata.type": item["odataType"],
    description: item["description"],
    key: item["key"],
    subdomainUrl: item["subdomainUrl"],
  };
}

export function azureSearchDocumentsIndexesAIServicesAccountKeyDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAIServicesAccountKey {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
    key: item["key"],
    subdomainUrl: item["subdomainUrl"],
  };
}

/** The multi-region account of an Azure AI service resource that's attached to a skillset. */
export interface AzureSearchDocumentsIndexesAIServicesAccountIdentity
  extends AzureSearchDocumentsIndexesCognitiveServicesAccount {
  /** The user-assigned managed identity used for connections to AI Service. If not specified, the system-assigned managed identity is used. On updates to the skillset, if the identity is unspecified, the value remains unchanged. If set to "none", the value of this property is cleared. */
  identity?: SearchIndexerDataIdentityUnion;
  /** The subdomain url for the corresponding AI Service. */
  subdomainUrl: string;
  /** A URI fragment specifying the type of Azure AI service resource attached to a skillset. */
  odataType: "#Microsoft.Azure.Search.AIServicesByIdentity";
}

export function azureSearchDocumentsIndexesAIServicesAccountIdentitySerializer(
  item: AzureSearchDocumentsIndexesAIServicesAccountIdentity,
): any {
  return {
    "@odata.type": item["odataType"],
    description: item["description"],
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["identity"],
        ),
    subdomainUrl: item["subdomainUrl"],
  };
}

export function azureSearchDocumentsIndexesAIServicesAccountIdentityDeserializer(
  item: any,
): AzureSearchDocumentsIndexesAIServicesAccountIdentity {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["identity"],
        ),
    subdomainUrl: item["subdomainUrl"],
  };
}

/** Definition of additional projections to azure blob, table, or files, of enriched data. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStore {
  /** The connection string to the storage account projections will be stored in. */
  storageConnectionString: string;
  /** A list of additional projections to perform during indexing. */
  projections: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjection[];
  /** The user-assigned managed identity used for connections to Azure Storage when writing knowledge store projections. If the connection string indicates an identity (ResourceId) and it's not specified, the system-assigned managed identity is used. On updates to the indexer, if the identity is unspecified, the value remains unchanged. If set to "none", the value of this property is cleared. */
  identity?: SearchIndexerDataIdentityUnion;
  /** A dictionary of knowledge store-specific configuration properties. Each name is the name of a specific property. Each value must be of a primitive type. */
  parameters?: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParameters;
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStore,
): any {
  return {
    storageConnectionString: item["storageConnectionString"],
    projections:
      azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionArraySerializer(
        item["projections"],
      ),
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionSerializer(
          item["identity"],
        ),
    parameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParametersSerializer(
          item["parameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStore {
  return {
    storageConnectionString: item["storageConnectionString"],
    projections:
      azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionArrayDeserializer(
        item["projections"],
      ),
    identity: !item["identity"]
      ? item["identity"]
      : azureSearchDocumentsIndexesSearchIndexerDataIdentityUnionDeserializer(
          item["identity"],
        ),
    parameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParametersDeserializer(
          item["parameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjection>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjection>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionDeserializer(
      item,
    );
  });
}

/** Container object for various projection selectors. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjection {
  /** Projections to Azure Table storage. */
  tables?: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelector[];
  /** Projections to Azure Blob storage. */
  objects?: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelector[];
  /** Projections to Azure File storage. */
  files?: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelector[];
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjection,
): any {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorArraySerializer(
          item["tables"],
        ),
    objects: !item["objects"]
      ? item["objects"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorArraySerializer(
          item["objects"],
        ),
    files: !item["files"]
      ? item["files"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorArraySerializer(
          item["files"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjection {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorArrayDeserializer(
          item["tables"],
        ),
    objects: !item["objects"]
      ? item["objects"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorArrayDeserializer(
          item["objects"],
        ),
    files: !item["files"]
      ? item["files"]
      : azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorArrayDeserializer(
          item["files"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorDeserializer(
      item,
    );
  });
}

/** Description for what data to store in Azure Tables. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelector
  extends AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSelector {
  /** Name of the Azure table to store projected data in. */
  tableName: string;
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelector,
): any {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
          item["inputs"],
        ),
    tableName: item["tableName"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelectorDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreTableProjectionSelector {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
          item["inputs"],
        ),
    tableName: item["tableName"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorDeserializer(
      item,
    );
  });
}

/** Projection definition for what data to store in Azure Blob. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelector
  extends AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreBlobProjectionSelector {}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelector,
): any {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
          item["inputs"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelectorDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreObjectProjectionSelector {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
          item["inputs"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorDeserializer(
      item,
    );
  });
}

/** Projection definition for what data to store in Azure Files. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelector
  extends AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreBlobProjectionSelector {}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelector,
): any {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
          item["inputs"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelectorDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreFileProjectionSelector {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
          item["inputs"],
        ),
  };
}

/** A dictionary of knowledge store-specific configuration properties. Each name is the name of a specific property. Each value must be of a primitive type. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParameters {
  /** Whether or not projections should synthesize a generated key name if one isn't already present. */
  synthesizeGeneratedKeyName?: boolean;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParametersSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParameters,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    synthesizeGeneratedKeyName: item["synthesizeGeneratedKeyName"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreParameters {
  return {
    additionalProperties: serializeRecord(item, ["synthesizeGeneratedKeyName"]),
    synthesizeGeneratedKeyName: item["synthesizeGeneratedKeyName"],
  };
}

/** Definition of additional projections to secondary search indexes. */
export interface AzureSearchDocumentsIndexesSearchIndexerIndexProjection {
  /** A list of projections to be performed to secondary search indexes. */
  selectors: AzureSearchDocumentsIndexesSearchIndexerIndexProjectionSelector[];
  /** A dictionary of index projection-specific configuration properties. Each name is the name of a specific property. Each value must be of a primitive type. */
  parameters?: AzureSearchDocumentsIndexesSearchIndexerIndexProjectionsParameters;
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerIndexProjection,
): any {
  return {
    selectors:
      azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorArraySerializer(
        item["selectors"],
      ),
    parameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesSearchIndexerIndexProjectionsParametersSerializer(
          item["parameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerIndexProjection {
  return {
    selectors:
      azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorArrayDeserializer(
        item["selectors"],
      ),
    parameters: !item["parameters"]
      ? item["parameters"]
      : azureSearchDocumentsIndexesSearchIndexerIndexProjectionsParametersDeserializer(
          item["parameters"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerIndexProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerIndexProjectionSelector>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorDeserializer(
      item,
    );
  });
}

/** Description for what data to store in the designated search index. */
export interface AzureSearchDocumentsIndexesSearchIndexerIndexProjectionSelector {
  /** Name of the search index to project to. Must have a key field with the 'keyword' analyzer set. */
  targetIndexName: string;
  /** Name of the field in the search index to map the parent document's key value to. Must be a string field that is filterable and not the key field. */
  parentKeyFieldName: string;
  /** Source context for the projections. Represents the cardinality at which the document will be split into multiple sub documents. */
  sourceContext: string;
  /** Mappings for the projection, or which source should be mapped to which field in the target index. */
  mappings: AzureSearchDocumentsIndexesInputFieldMappingEntry[];
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerIndexProjectionSelector,
): any {
  return {
    targetIndexName: item["targetIndexName"],
    parentKeyFieldName: item["parentKeyFieldName"],
    sourceContext: item["sourceContext"],
    mappings: azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
      item["mappings"],
    ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionSelectorDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerIndexProjectionSelector {
  return {
    targetIndexName: item["targetIndexName"],
    parentKeyFieldName: item["parentKeyFieldName"],
    sourceContext: item["sourceContext"],
    mappings:
      azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
        item["mappings"],
      ),
  };
}

/** A dictionary of index projection-specific configuration properties. Each name is the name of a specific property. Each value must be of a primitive type. */
export interface AzureSearchDocumentsIndexesSearchIndexerIndexProjectionsParameters {
  /** Defines behavior of the index projections in relation to the rest of the indexer. */
  projectionMode?: AzureSearchDocumentsIndexesIndexProjectionMode;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionsParametersSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerIndexProjectionsParameters,
): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    projectionMode: item["projectionMode"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerIndexProjectionsParametersDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerIndexProjectionsParameters {
  return {
    additionalProperties: serializeRecord(item, ["projectionMode"]),
    projectionMode: item["projectionMode"],
  };
}

/** Defines behavior of the index projections in relation to the rest of the indexer. */
export enum KnownAzureSearchDocumentsIndexesIndexProjectionMode {
  /** The source document will be skipped from writing into the indexer's target index. */
  SkipIndexingParentDocuments = "skipIndexingParentDocuments",
  /** The source document will be written into the indexer's target index. This is the default pattern. */
  IncludeIndexingParentDocuments = "includeIndexingParentDocuments",
}

/**
 * Defines behavior of the index projections in relation to the rest of the indexer. \
 * {@link KnownAzureSearchDocumentsIndexesIndexProjectionMode} can be used interchangeably with AzureSearchDocumentsIndexesIndexProjectionMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **skipIndexingParentDocuments**: The source document will be skipped from writing into the indexer's target index. \
 * **includeIndexingParentDocuments**: The source document will be written into the indexer's target index. This is the default pattern.
 */
export type AzureSearchDocumentsIndexesIndexProjectionMode = string;

/** Abstract class to share properties between concrete selectors. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSelector {
  /** Name of reference key to different projection. */
  referenceKeyName?: string;
  /** Name of generated key to store projection under. */
  generatedKeyName?: string;
  /** Source data to project. */
  source?: string;
  /** Source context for complex projections. */
  sourceContext?: string;
  /** Nested inputs for complex projections. */
  inputs?: AzureSearchDocumentsIndexesInputFieldMappingEntry[];
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSelectorSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSelector,
): any {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
          item["inputs"],
        ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSelectorDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSelector {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
          item["inputs"],
        ),
  };
}

/** Abstract class to share properties between concrete selectors. */
export interface AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreBlobProjectionSelector
  extends AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreProjectionSelector {
  /** Blob container to store projections in. */
  storageContainer: string;
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreBlobProjectionSelectorSerializer(
  item: AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreBlobProjectionSelector,
): any {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArraySerializer(
          item["inputs"],
        ),
    storageContainer: item["storageContainer"],
  };
}

export function azureSearchDocumentsIndexesSearchIndexerKnowledgeStoreBlobProjectionSelectorDeserializer(
  item: any,
): AzureSearchDocumentsIndexesSearchIndexerKnowledgeStoreBlobProjectionSelector {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : azureSearchDocumentsIndexesInputFieldMappingEntryArrayDeserializer(
          item["inputs"],
        ),
    storageContainer: item["storageContainer"],
  };
}

/** Response from a list skillset request. If successful, it includes the full definitions of all skillsets. */
export interface AzureSearchDocumentsIndexesListSkillsetsResult {
  /** The skillsets defined in the Search service. */
  skillsets: AzureSearchDocumentsIndexesSearchIndexerSkillset[];
}

export function azureSearchDocumentsIndexesListSkillsetsResultDeserializer(
  item: any,
): AzureSearchDocumentsIndexesListSkillsetsResult {
  return {
    skillsets:
      azureSearchDocumentsIndexesSearchIndexerSkillsetArrayDeserializer(
        item["value"],
      ),
  };
}

export function azureSearchDocumentsIndexesSearchIndexerSkillsetArraySerializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerSkillset>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerSkillsetSerializer(item);
  });
}

export function azureSearchDocumentsIndexesSearchIndexerSkillsetArrayDeserializer(
  result: Array<AzureSearchDocumentsIndexesSearchIndexerSkillset>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsIndexesSearchIndexerSkillsetDeserializer(item);
  });
}

/** The type of the skill names. */
export interface AzureSearchDocumentsIndexesSkillNames {
  /** the names of skills to be reset. */
  skillNames?: string[];
}

export function azureSearchDocumentsIndexesSkillNamesSerializer(
  item: AzureSearchDocumentsIndexesSkillNames,
): any {
  return {
    skillNames: !item["skillNames"]
      ? item["skillNames"]
      : item["skillNames"].map((p: any) => {
          return p;
        }),
  };
}

/** Request body for resync indexer operation. */
export interface AzureSearchDocumentsIndexesIndexerResyncBody {
  /** Indexer to re-ingest pre-selected permissions data from data source to index. */
  options?: AzureSearchDocumentsIndexesIndexerResyncOption[];
}

export function azureSearchDocumentsIndexesIndexerResyncBodySerializer(
  item: AzureSearchDocumentsIndexesIndexerResyncBody,
): any {
  return {
    options: !item["options"]
      ? item["options"]
      : item["options"].map((p: any) => {
          return p;
        }),
  };
}

/** Options with various types of permission data to index. */
export enum KnownAzureSearchDocumentsIndexesIndexerResyncOption {
  /** Indexer to re-ingest pre-selected permissions data from data source to index. */
  Permissions = "permissions",
}

/**
 * Options with various types of permission data to index. \
 * {@link KnownAzureSearchDocumentsIndexesIndexerResyncOption} can be used interchangeably with AzureSearchDocumentsIndexesIndexerResyncOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **permissions**: Indexer to re-ingest pre-selected permissions data from data source to index.
 */
export type AzureSearchDocumentsIndexesIndexerResyncOption = string;
