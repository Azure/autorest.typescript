// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Contains the tables, columns & rows resulting from a query. */
export interface QueryResults {
  /** The results of the query in tabular format. */
  tables: Table[];
  /** Statistics represented in JSON format. */
  statistics?: Record<string, any>;
  /** Visualization data in JSON format. */
  render?: Record<string, any>;
  /** The code and message for an error. */
  error?: ErrorInfo;
}

export function queryResultsDeserializer(item: any): QueryResults {
  return {
    tables: tableArrayDeserializer(item["tables"]),
    statistics: item["statistics"],
    render: item["render"],
    error: !item["error"]
      ? item["error"]
      : errorInfoDeserializer(item["error"]),
  };
}

export function tableArrayDeserializer(result: Array<Table>): any[] {
  return result.map((item) => {
    return tableDeserializer(item);
  });
}

/** Contains the columns and rows for one table in a query response. */
export interface Table {
  /** The name of the table. */
  name: string;
  /** The list of columns in this table. */
  columns: Column[];
  /** The resulting rows from this query. */
  rows: any[][];
}

export function tableDeserializer(item: any): Table {
  return {
    name: item["name"],
    columns: columnArrayDeserializer(item["columns"]),
    rows: item["rows"].map((p: any) => {
      return p.map((p: any) => {
        return p;
      });
    }),
  };
}

export function columnArrayDeserializer(result: Array<Column>): any[] {
  return result.map((item) => {
    return columnDeserializer(item);
  });
}

/** A column in a table. */
export interface Column {
  /** The name of this column. */
  name: string;
  /** The data type of this column. */
  type: ColumnDataType;
}

export function columnDeserializer(item: any): Column {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** The data type of a column. */
export type ColumnDataType =
  | "bool"
  | "datetime"
  | "dynamic"
  | "int"
  | "long"
  | "real"
  | "string"
  | "guid"
  | "decimal"
  | "timespan";

/** The code and message for an error. */
export interface ErrorInfo {
  /** A machine readable error code. */
  code: string;
  /** A human readable error message. */
  message: string;
  /** error details. */
  details?: ErrorDetail[];
  /** Inner error details if they exist. */
  innererror?: ErrorInfo;
  /** Additional properties that can be provided on the error info object */
  additionalProperties?: Record<string, any>;
}

export function errorInfoDeserializer(item: any): ErrorInfo {
  return {
    code: item["code"],
    message: item["message"],
    details: !item["details"]
      ? item["details"]
      : errorDetailArrayDeserializer(item["details"]),
    innererror: !item["innererror"]
      ? item["innererror"]
      : errorInfoDeserializer(item["innererror"]),
    additionalProperties: item["additionalProperties"],
  };
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

/** Error details. */
export interface ErrorDetail {
  /** The error's code. */
  code: string;
  /** A human readable error message. */
  message: string;
  /** Indicates which property in the request is responsible for the error. */
  target?: string;
  /** Indicates which value in 'target' is responsible for the error. */
  value?: string;
  /** Indicates resources which were responsible for the error. */
  resources?: string[];
  /** Additional properties that can be provided on the error details object */
  additionalProperties?: Record<string, any>;
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    value: item["value"],
    resources: !item["resources"]
      ? item["resources"]
      : item["resources"].map((p: any) => {
          return p;
        }),
    additionalProperties: item["additionalProperties"],
  };
}

/** Contains details when the response code indicates an error. */
export interface ErrorResponse {
  /** The error details. */
  error: ErrorInfo;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: errorInfoDeserializer(item["error"]),
  };
}

/**
 * The Analytics query. Learn more about the
 * [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
 */
export interface QueryBody {
  /** The query to execute. */
  query: string;
  /**
   * Optional. The timespan over which to query data. This is an ISO8601 time period
   * value.  This timespan is applied in addition to any that are specified in the
   * query expression.
   */
  timespan?: string;
  /** A list of workspaces to query in addition to the primary workspace. */
  workspaces?: string[];
}

export function queryBodySerializer(item: QueryBody): any {
  return {
    query: item["query"],
    timespan: item["timespan"],
    workspaces: !item["workspaces"]
      ? item["workspaces"]
      : item["workspaces"].map((p: any) => {
          return p;
        }),
  };
}

/** An array of requests. */
export interface BatchRequest {
  /** An single request in a batch. */
  requests: BatchQueryRequest[];
}

export function batchRequestSerializer(item: BatchRequest): any {
  return { requests: batchQueryRequestArraySerializer(item["requests"]) };
}

export function batchQueryRequestArraySerializer(
  result: Array<BatchQueryRequest>,
): any[] {
  return result.map((item) => {
    return batchQueryRequestSerializer(item);
  });
}

/** A single request in a batch. */
export interface BatchQueryRequest {
  /** Unique ID corresponding to each request in the batch. */
  id: string;
  /**
   * Headers of the request. Can use prefer header to set server timeout and to
   * query statistics and visualization information.
   */
  headers?: Record<string, string>;
  /**
   * The Analytics query. Learn more about the
   * [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   */
  body: QueryBody;
  /** The query path of a single request in a batch. */
  path: string;
  /** The method of a single request in a batch, defaults to GET */
  method: string;
  /**
   * Primary Workspace ID of the query. This is the Workspace ID from the Properties
   * blade in the Azure portal.
   */
  workspace: string;
}

export function batchQueryRequestSerializer(item: BatchQueryRequest): any {
  return {
    id: item["id"],
    headers: item["headers"],
    body: queryBodySerializer(item["body"]),
    path: item["path"],
    method: item["method"],
    workspace: item["workspace"],
  };
}

/** Response to a batch query. */
export interface BatchResponse {
  /** An array of responses corresponding to each individual request in a batch. */
  responses?: BatchQueryResponse[];
}

export function batchResponseDeserializer(item: any): BatchResponse {
  return {
    responses: !item["responses"]
      ? item["responses"]
      : batchQueryResponseArrayDeserializer(item["responses"]),
  };
}

export function batchQueryResponseArrayDeserializer(
  result: Array<BatchQueryResponse>,
): any[] {
  return result.map((item) => {
    return batchQueryResponseDeserializer(item);
  });
}

/** Contains the batch query response and the headers, id, and status of the request */
export interface BatchQueryResponse {
  /** Unique ID corresponding to each request in the batch. */
  id?: string;
  /** The HTTP status code of the response. */
  status?: number;
  /** Contains the tables, columns & rows resulting from a query. */
  body?: BatchQueryResults;
  /** Dictionary of <string> */
  headers?: Record<string, string>;
}

export function batchQueryResponseDeserializer(item: any): BatchQueryResponse {
  return {
    id: item["id"],
    status: item["status"],
    body: !item["body"]
      ? item["body"]
      : batchQueryResultsDeserializer(item["body"]),
    headers: item["headers"],
  };
}

/** Contains the tables, columns & rows resulting from a query. */
export interface BatchQueryResults {
  /** The results of the query in tabular format. */
  tables?: Table[];
  /** Statistics represented in JSON format. */
  statistics?: Record<string, any>;
  /** Visualization data in JSON format. */
  render?: Record<string, any>;
  /** The code and message for an error. */
  error?: ErrorInfo;
}

export function batchQueryResultsDeserializer(item: any): BatchQueryResults {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : tableArrayDeserializer(item["tables"]),
    statistics: item["statistics"],
    render: item["render"],
    error: !item["error"]
      ? item["error"]
      : errorInfoDeserializer(item["error"]),
  };
}

/** The metadata response for the app, including available tables, etc. */
export interface MetadataResults {
  /** The list of categories that are referenced in this metadata response. */
  categories?: MetadataCategory[];
  /** The list of resource types that are referenced in this metadata response. */
  resourceTypes?: MetadataResourceType[];
  /** The list of Log Analytics solutions installed on the workspace. */
  solutions?: MetadataSolution[];
  /** The list of tables and columns that comprise the schema of the workspace. */
  tables?: MetadataTable[];
  /** The list of functions stored on the workspace, or introduced by solutions etc. */
  functions?: MetadataFunction[];
  /**
   * The list of saved queries stored on the workspace, or introduced by solutions,
   * resource types, etc.
   */
  queries?: MetadataQuery[];
  /**
   * The list of Application Insights apps that were referenced in the metadata
   * request.
   */
  applications?: MetadataApplication[];
  /**
   * The list of Log Analytics workspaces that were referenced in the metadata
   * request.
   */
  workspaces?: MetadataWorkspace[];
  /** The list of Azure resources that were referenced in the metadata request. */
  resources?: string[];
  /** The list of permission rules that affected the metadata request. */
  permissions?: MetadataPermissions[];
}

export function metadataResultsDeserializer(item: any): MetadataResults {
  return {
    categories: !item["categories"]
      ? item["categories"]
      : metadataCategoryArrayDeserializer(item["categories"]),
    resourceTypes: !item["resourceTypes"]
      ? item["resourceTypes"]
      : metadataResourceTypeArrayDeserializer(item["resourceTypes"]),
    solutions: !item["solutions"]
      ? item["solutions"]
      : metadataSolutionArrayDeserializer(item["solutions"]),
    tables: !item["tables"]
      ? item["tables"]
      : metadataTableArrayDeserializer(item["tables"]),
    functions: !item["functions"]
      ? item["functions"]
      : metadataFunctionArrayDeserializer(item["functions"]),
    queries: !item["queries"]
      ? item["queries"]
      : metadataQueryArrayDeserializer(item["queries"]),
    applications: !item["applications"]
      ? item["applications"]
      : metadataApplicationArrayDeserializer(item["applications"]),
    workspaces: !item["workspaces"]
      ? item["workspaces"]
      : metadataWorkspaceArrayDeserializer(item["workspaces"]),
    resources: !item["resources"]
      ? item["resources"]
      : item["resources"].map((p: any) => {
          return p;
        }),
    permissions: !item["permissions"]
      ? item["permissions"]
      : metadataPermissionsArrayDeserializer(item["permissions"]),
  };
}

export function metadataCategoryArrayDeserializer(
  result: Array<MetadataCategory>,
): any[] {
  return result.map((item) => {
    return metadataCategoryDeserializer(item);
  });
}

/** Categories are used to group other metadata entities. */
export interface MetadataCategory {
  /** The ID of the category */
  id: string;
  /** The display name of the category */
  displayName: string;
  /** The description of the category */
  description?: string;
  /** The related metadata items for the category */
  related?: MetadataCategoryRelated;
}

export function metadataCategoryDeserializer(item: any): MetadataCategory {
  return {
    id: item["id"],
    displayName: item["displayName"],
    description: item["description"],
    related: !item["related"]
      ? item["related"]
      : metadataCategoryRelatedDeserializer(item["related"]),
  };
}

/** The related metadata items for the category */
export interface MetadataCategoryRelated {
  /** The tables related to the category */
  tables?: string[];
  /** The functions related to the category */
  functions?: string[];
  /** The resource types related to the category */
  resourceTypes?: string[];
  /** The saved queries related to the category */
  queries?: string[];
  /** The Log Analytics solutions related to the category */
  solutions?: string[];
}

export function metadataCategoryRelatedDeserializer(
  item: any,
): MetadataCategoryRelated {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : item["tables"].map((p: any) => {
          return p;
        }),
    functions: !item["functions"]
      ? item["functions"]
      : item["functions"].map((p: any) => {
          return p;
        }),
    resourceTypes: !item["resourceTypes"]
      ? item["resourceTypes"]
      : item["resourceTypes"].map((p: any) => {
          return p;
        }),
    queries: !item["queries"]
      ? item["queries"]
      : item["queries"].map((p: any) => {
          return p;
        }),
    solutions: !item["solutions"]
      ? item["solutions"]
      : item["solutions"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataResourceTypeArrayDeserializer(
  result: Array<MetadataResourceType>,
): any[] {
  return result.map((item) => {
    return metadataResourceTypeDeserializer(item);
  });
}

/**
 * Metadata about types of Azure resources, containing relevant tables, functions,
 * etc.
 */
export interface MetadataResourceType {
  /** The ID of the resource-type */
  id: string;
  /** The type of the resource-type */
  type: string;
  /** The display name of the resource-type */
  displayName?: string;
  /** The description of the resource-type */
  description?: string;
  /** The user-defined labels of the resource-type */
  labels?: string[];
  /** The tags associated with the resource-type */
  tags?: Record<string, string>;
  /** The properties of the resource-type */
  properties?: Record<string, any>;
  /** The related metadata items for the resource-type */
  related?: MetadataResourceTypeRelated;
}

export function metadataResourceTypeDeserializer(
  item: any,
): MetadataResourceType {
  return {
    id: item["id"],
    type: item["type"],
    displayName: item["displayName"],
    description: item["description"],
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    tags: item["tags"],
    properties: item["properties"],
    related: !item["related"]
      ? item["related"]
      : metadataResourceTypeRelatedDeserializer(item["related"]),
  };
}

/** The related metadata items for the resource-type */
export interface MetadataResourceTypeRelated {
  /** The tables related to the resource-type */
  tables?: string[];
  /** The functions related to the resource-type */
  functions?: string[];
  /** The categories related to the resource-type */
  categories?: string[];
  /** The queries related to the resource-type */
  queries?: string[];
  /** The Log Analytics workspaces related to the resource-type */
  workspaces?: string[];
  /** The Azure resources related to the resource-type */
  resources?: string[];
}

export function metadataResourceTypeRelatedDeserializer(
  item: any,
): MetadataResourceTypeRelated {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : item["tables"].map((p: any) => {
          return p;
        }),
    functions: !item["functions"]
      ? item["functions"]
      : item["functions"].map((p: any) => {
          return p;
        }),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    queries: !item["queries"]
      ? item["queries"]
      : item["queries"].map((p: any) => {
          return p;
        }),
    workspaces: !item["workspaces"]
      ? item["workspaces"]
      : item["workspaces"].map((p: any) => {
          return p;
        }),
    resources: !item["resources"]
      ? item["resources"]
      : item["resources"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataSolutionArrayDeserializer(
  result: Array<MetadataSolution>,
): any[] {
  return result.map((item) => {
    return metadataSolutionDeserializer(item);
  });
}

/**
 * Solutions can group tables and functions that are associated with a certain
 * Azure Log Analytics offering.
 */
export interface MetadataSolution {
  /** The ID of the Log Analytics solution */
  id: string;
  /** The name of the Log Analytics solution */
  name: string;
  /** The display name of the Log Analytics solution */
  displayName?: string;
  /** The description of the Log Analytics solution */
  description?: string;
  /** The tags that are associated with the Log Analytics solution */
  tags?: Record<string, string>;
  /** The properties of the Log Analytics solution */
  properties?: Record<string, any>;
  /** The related metadata items for the Log Analytics solution */
  related: MetadataSolutionRelated;
}

export function metadataSolutionDeserializer(item: any): MetadataSolution {
  return {
    id: item["id"],
    name: item["name"],
    displayName: item["displayName"],
    description: item["description"],
    tags: item["tags"],
    properties: item["properties"],
    related: metadataSolutionRelatedDeserializer(item["related"]),
  };
}

/** The related metadata items for the Log Analytics solution */
export interface MetadataSolutionRelated {
  /** The tables related to the Log Analytics solution */
  tables: string[];
  /** The functions related to the Log Analytics solution */
  functions?: string[];
  /** The categories related to the Log Analytics solution */
  categories?: string[];
  /** The saved queries related to the Log Analytics solution */
  queries?: string[];
  /**
   * The Workspaces referenced in the metadata request that are related to the Log
   * Analytics solution
   */
  workspaces?: string[];
}

export function metadataSolutionRelatedDeserializer(
  item: any,
): MetadataSolutionRelated {
  return {
    tables: item["tables"].map((p: any) => {
      return p;
    }),
    functions: !item["functions"]
      ? item["functions"]
      : item["functions"].map((p: any) => {
          return p;
        }),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    queries: !item["queries"]
      ? item["queries"]
      : item["queries"].map((p: any) => {
          return p;
        }),
    workspaces: !item["workspaces"]
      ? item["workspaces"]
      : item["workspaces"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataTableArrayDeserializer(
  result: Array<MetadataTable>,
): any[] {
  return result.map((item) => {
    return metadataTableDeserializer(item);
  });
}

/**
 * Tables are part of the workspace schema, and contain a list of columns and a
 * reference to other relevant metadata items.
 */
export interface MetadataTable {
  /** The ID of the table */
  id: string;
  /** The name of the table */
  name: string;
  /** The description of the table */
  description?: string;
  /** The column associated with the timespan query parameter for the table */
  timespanColumn?: string;
  /** The user defined labels of the table */
  labels?: string[];
  /** The tags associated with the table */
  tags?: Record<string, string>;
  /** The properties of the table */
  properties?: Record<string, any>;
  /** The list of columns defined on the table */
  columns?: MetadataTableColumnsItem[];
  /** The related metadata items for the table */
  related?: MetadataTableRelated;
}

export function metadataTableDeserializer(item: any): MetadataTable {
  return {
    id: item["id"],
    name: item["name"],
    description: item["description"],
    timespanColumn: item["timespanColumn"],
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    tags: item["tags"],
    properties: item["properties"],
    columns: !item["columns"]
      ? item["columns"]
      : metadataTableColumnsItemArrayDeserializer(item["columns"]),
    related: !item["related"]
      ? item["related"]
      : metadataTableRelatedDeserializer(item["related"]),
  };
}

export function metadataTableColumnsItemArrayDeserializer(
  result: Array<MetadataTableColumnsItem>,
): any[] {
  return result.map((item) => {
    return metadataTableColumnsItemDeserializer(item);
  });
}

/** A column in a metadata table. */
export interface MetadataTableColumnsItem {
  /** The name of the column */
  name: string;
  /** The description of the column */
  description?: string;
  /** The data type of the column */
  type: ColumnDataType;
  /** A flag indicating this column is a preferred facet */
  isPreferredFacet?: boolean;
  /**
   * An indication of the source of the column, used only when multiple workspaces
   * have conflicting definition for the column
   */
  source?: Record<string, any>;
}

export function metadataTableColumnsItemDeserializer(
  item: any,
): MetadataTableColumnsItem {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    isPreferredFacet: item["isPreferredFacet"],
    source: item["source"],
  };
}

/** The related metadata items for the table */
export interface MetadataTableRelated {
  /** The related categories for the table */
  categories?: string[];
  /** The related Log Analytics solutions for the table */
  solutions?: string[];
  /** The related resource types for the table */
  resourceTypes?: string[];
  /** The related Log Analytics workspaces for the table */
  workspaces?: string[];
  /** The related functions for the table */
  functions?: string[];
  /** The related saved queries for the table */
  queries?: string[];
}

export function metadataTableRelatedDeserializer(
  item: any,
): MetadataTableRelated {
  return {
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    solutions: !item["solutions"]
      ? item["solutions"]
      : item["solutions"].map((p: any) => {
          return p;
        }),
    resourceTypes: !item["resourceTypes"]
      ? item["resourceTypes"]
      : item["resourceTypes"].map((p: any) => {
          return p;
        }),
    workspaces: !item["workspaces"]
      ? item["workspaces"]
      : item["workspaces"].map((p: any) => {
          return p;
        }),
    functions: !item["functions"]
      ? item["functions"]
      : item["functions"].map((p: any) => {
          return p;
        }),
    queries: !item["queries"]
      ? item["queries"]
      : item["queries"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataFunctionArrayDeserializer(
  result: Array<MetadataFunction>,
): any[] {
  return result.map((item) => {
    return metadataFunctionDeserializer(item);
  });
}

/**
 * Functions are stored Kusto queries that can be specified as part of queries by
 * using their name.
 */
export interface MetadataFunction {
  /** The ID of the function. */
  id: string;
  /** The name of the function, to be used in queries. */
  name: string;
  /** The parameters/arguments of the function, if any. */
  parameters?: string;
  /** The display name of the function. */
  displayName?: string;
  /** The description of the function. */
  description?: string;
  /** The KQL body of the function. */
  body: string;
  /** The tags associated with the function. */
  tags?: Record<string, string>;
  /** The properties of the function. */
  properties?: Record<string, any>;
  /** The related metadata items for the function. */
  related?: MetadataFunctionRelated;
}

export function metadataFunctionDeserializer(item: any): MetadataFunction {
  return {
    id: item["id"],
    name: item["name"],
    parameters: item["parameters"],
    displayName: item["displayName"],
    description: item["description"],
    body: item["body"],
    tags: item["tags"],
    properties: item["properties"],
    related: !item["related"]
      ? item["related"]
      : metadataFunctionRelatedDeserializer(item["related"]),
  };
}

/** The related metadata items for the function. */
export interface MetadataFunctionRelated {
  /** The related tables for the function. */
  tables?: string[];
  /** The related Log Analytics solutions for the function. */
  solutions?: string[];
  /** The related resource types for the function. */
  resourceTypes?: string[];
  /** The related categories for the function. */
  categories?: string[];
  /** The related workspaces for the function. */
  workspaces?: string[];
}

export function metadataFunctionRelatedDeserializer(
  item: any,
): MetadataFunctionRelated {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : item["tables"].map((p: any) => {
          return p;
        }),
    solutions: !item["solutions"]
      ? item["solutions"]
      : item["solutions"].map((p: any) => {
          return p;
        }),
    resourceTypes: !item["resourceTypes"]
      ? item["resourceTypes"]
      : item["resourceTypes"].map((p: any) => {
          return p;
        }),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    workspaces: !item["workspaces"]
      ? item["workspaces"]
      : item["workspaces"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataQueryArrayDeserializer(
  result: Array<MetadataQuery>,
): any[] {
  return result.map((item) => {
    return metadataQueryDeserializer(item);
  });
}

/** Queries are stored pieces of KQL, along with a list of relevant metadata items. */
export interface MetadataQuery {
  /** The ID of the query. */
  id: string;
  /** The display name of the query. */
  displayName?: string;
  /** The description of the query. */
  description?: string;
  /** The KQL body of the query. */
  body: string;
  /** The user defined labels associated with the query. */
  labels?: string[];
  /** The tags associated with the query. */
  tags?: Record<string, string>;
  /** The properties of the query. */
  properties?: Record<string, any>;
  /** The related metadata items for the query. */
  related?: MetadataQueryRelated;
}

export function metadataQueryDeserializer(item: any): MetadataQuery {
  return {
    id: item["id"],
    displayName: item["displayName"],
    description: item["description"],
    body: item["body"],
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    tags: item["tags"],
    properties: item["properties"],
    related: !item["related"]
      ? item["related"]
      : metadataQueryRelatedDeserializer(item["related"]),
  };
}

/** The related metadata items for the query. */
export interface MetadataQueryRelated {
  /** The related categories for the query. */
  categories?: string[];
  /** The related Log Analytics solutions for the query. */
  solutions?: string[];
  /** The related resource types for the query. */
  resourceTypes?: string[];
  /** The related tables for the query. */
  tables?: string[];
}

export function metadataQueryRelatedDeserializer(
  item: any,
): MetadataQueryRelated {
  return {
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    solutions: !item["solutions"]
      ? item["solutions"]
      : item["solutions"].map((p: any) => {
          return p;
        }),
    resourceTypes: !item["resourceTypes"]
      ? item["resourceTypes"]
      : item["resourceTypes"].map((p: any) => {
          return p;
        }),
    tables: !item["tables"]
      ? item["tables"]
      : item["tables"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataApplicationArrayDeserializer(
  result: Array<MetadataApplication>,
): any[] {
  return result.map((item) => {
    return metadataApplicationDeserializer(item);
  });
}

/**
 * Application Insights apps that were part of the metadata request and that the
 * user has access to.
 */
export interface MetadataApplication {
  /** The ID of the Application Insights app. */
  id: string;
  /** The ARM resource ID of the Application Insights app. */
  resourceId: string;
  /** The name of the Application Insights app. */
  name: string;
  /** The Azure region of the Application Insights app. */
  region: string;
  /** The related metadata items for the Application Insights app. */
  related?: MetadataApplicationRelated;
}

export function metadataApplicationDeserializer(
  item: any,
): MetadataApplication {
  return {
    id: item["id"],
    resourceId: item["resourceId"],
    name: item["name"],
    region: item["region"],
    related: !item["related"]
      ? item["related"]
      : metadataApplicationRelatedDeserializer(item["related"]),
  };
}

/** The related metadata items for the Application Insights app. */
export interface MetadataApplicationRelated {
  /** The related tables for the Application Insights app. */
  tables?: string[];
  /** The related functions for the Application Insights app. */
  functions?: string[];
}

export function metadataApplicationRelatedDeserializer(
  item: any,
): MetadataApplicationRelated {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : item["tables"].map((p: any) => {
          return p;
        }),
    functions: !item["functions"]
      ? item["functions"]
      : item["functions"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataWorkspaceArrayDeserializer(
  result: Array<MetadataWorkspace>,
): any[] {
  return result.map((item) => {
    return metadataWorkspaceDeserializer(item);
  });
}

/**
 * Log Analytics workspaces that were part of the metadata request and that the
 * user has access to.
 */
export interface MetadataWorkspace {
  /** The ID of the Log Analytics workspace. */
  id: string;
  /** The ARM resource ID of the Log Analytics workspace. */
  resourceId: string;
  /** The name of the Log Analytics workspace. */
  name: string;
  /** The Azure region of the Log Analytics workspace. */
  region: string;
  /** The related metadata items for the Log Analytics workspace. */
  related?: MetadataWorkspaceRelated;
}

export function metadataWorkspaceDeserializer(item: any): MetadataWorkspace {
  return {
    id: item["id"],
    resourceId: item["resourceId"],
    name: item["name"],
    region: item["region"],
    related: !item["related"]
      ? item["related"]
      : metadataWorkspaceRelatedDeserializer(item["related"]),
  };
}

/** The related metadata items for the Log Analytics workspace. */
export interface MetadataWorkspaceRelated {
  /** The related tables for the Log Analytics workspace. */
  tables?: string[];
  /** The related Log Analytics solutions for the Log Analytics workspace. */
  solutions?: string[];
  /** The related resource types for the Log Analytics workspace. */
  resourceTypes?: string[];
  /** The related functions for the Log Analytics workspace. */
  functions?: string[];
  /** The related Azure resources for the Log Analytics workspace. */
  resources?: string[];
}

export function metadataWorkspaceRelatedDeserializer(
  item: any,
): MetadataWorkspaceRelated {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : item["tables"].map((p: any) => {
          return p;
        }),
    solutions: !item["solutions"]
      ? item["solutions"]
      : item["solutions"].map((p: any) => {
          return p;
        }),
    resourceTypes: !item["resourceTypes"]
      ? item["resourceTypes"]
      : item["resourceTypes"].map((p: any) => {
          return p;
        }),
    functions: !item["functions"]
      ? item["functions"]
      : item["functions"].map((p: any) => {
          return p;
        }),
    resources: !item["resources"]
      ? item["resources"]
      : item["resources"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataPermissionsArrayDeserializer(
  result: Array<MetadataPermissions>,
): any[] {
  return result.map((item) => {
    return metadataPermissionsDeserializer(item);
  });
}

/**
 * Permission information for the metadata call, includes apps/workspaces/resource
 * the user didn't have access to.
 */
export interface MetadataPermissions {
  /** The permission indication for the workspaces on the metadata request. */
  workspaces: MetadataPermissionsWorkspacesItem[];
  /** The permission indication for the Azure resources on the metadata request. */
  resources?: MetadataPermissionsResourcesItem[];
  /**
   * The permission indication for the Application Insights apps on the metadata
   * request.
   */
  applications?: MetadataPermissionsApplicationsItem[];
}

export function metadataPermissionsDeserializer(
  item: any,
): MetadataPermissions {
  return {
    workspaces: metadataPermissionsWorkspacesItemArrayDeserializer(
      item["workspaces"],
    ),
    resources: !item["resources"]
      ? item["resources"]
      : metadataPermissionsResourcesItemArrayDeserializer(item["resources"]),
    applications: !item["applications"]
      ? item["applications"]
      : metadataPermissionsApplicationsItemArrayDeserializer(
          item["applications"],
        ),
  };
}

export function metadataPermissionsWorkspacesItemArrayDeserializer(
  result: Array<MetadataPermissionsWorkspacesItem>,
): any[] {
  return result.map((item) => {
    return metadataPermissionsWorkspacesItemDeserializer(item);
  });
}

/** The permission indication for the workspaces on the metadata request. */
export interface MetadataPermissionsWorkspacesItem {
  /** The resource ID on the permission indication. */
  resourceId: string;
  /** The list of tables that were denied access for the resource ID. */
  denyTables?: string[];
}

export function metadataPermissionsWorkspacesItemDeserializer(
  item: any,
): MetadataPermissionsWorkspacesItem {
  return {
    resourceId: item["resourceId"],
    denyTables: !item["denyTables"]
      ? item["denyTables"]
      : item["denyTables"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataPermissionsResourcesItemArrayDeserializer(
  result: Array<MetadataPermissionsResourcesItem>,
): any[] {
  return result.map((item) => {
    return metadataPermissionsResourcesItemDeserializer(item);
  });
}

/** The permission indication for the Azure resources on the metadata request. */
export interface MetadataPermissionsResourcesItem {
  /** The resource ID on the permission indication. */
  resourceId: string;
  /** The list of tables that were denied access for the resource ID. */
  denyTables?: string[];
}

export function metadataPermissionsResourcesItemDeserializer(
  item: any,
): MetadataPermissionsResourcesItem {
  return {
    resourceId: item["resourceId"],
    denyTables: !item["denyTables"]
      ? item["denyTables"]
      : item["denyTables"].map((p: any) => {
          return p;
        }),
  };
}

export function metadataPermissionsApplicationsItemArrayDeserializer(
  result: Array<MetadataPermissionsApplicationsItem>,
): any[] {
  return result.map((item) => {
    return metadataPermissionsApplicationsItemDeserializer(item);
  });
}

/** The permission indication for the Application Insights apps on the metadata request. */
export interface MetadataPermissionsApplicationsItem {
  /** The resource ID on the permission indication. */
  resourceId: string;
}

export function metadataPermissionsApplicationsItemDeserializer(
  item: any,
): MetadataPermissionsApplicationsItem {
  return {
    resourceId: item["resourceId"],
  };
}

/** Service API versions */
export type Versions = "v1";
