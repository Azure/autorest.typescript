import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "@typespec/versioning";
import "./versions.tsp";

using TypeSpec.Versioning;
using Azure.ResourceManager;

namespace Private.StorageDiscovery;

/**
 * Request to get StorageDiscoveryWorkspace data from ADX
 */
@added(ApiVersion.v2025_04_01_preview)
model GetReportContent {
  @doc("""
    The queries to execute against Storage Discovery data.
    Format: Base64-encoded JSON object with structure:
    {"queries":[{"name":"queryName","query":"KQL query"}]}
    For query syntax and available tables, see: https://aka.ms/storageDiscoveryQuery
    """)
  queries: string[];
}

/**
 * The response of the report operation
 */
@added(ApiVersion.v2025_04_01_preview)
model GetReportResult {
  @doc("One or more result sets, in the same order as the queries in the request body")
  @identifiers(#[])
  results: ReportResultSet[];
}

/**
 * The result set of the report operation
 */
@added(ApiVersion.v2025_04_01_preview)
model ReportResultSet {
  @doc("Array of columns object, present only if the query succeeded")
  @identifiers(#[])
  columns?: ReportResultColumn[];

  @doc("Array of all rows from ADX, present only if the query succeeded")
  @identifiers(#[])
  rows?: string[][];

  @doc("Provides an error about the query, present only if the query fails")
  errorCode?: string;
}

/**
 * The column of the response result set
 */
@added(ApiVersion.v2025_04_01_preview)
model ReportResultColumn {
  @doc("Name of the column")
  name: string;

  @doc("ADX type of the column")
  type: string;
}
