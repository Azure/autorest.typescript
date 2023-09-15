// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import {
  PassFailCriteria,
  Secret,
  CertificateMetadata,
  LoadTestConfiguration,
  TestInputArtifacts,
  ResourceMetric,
  FileType,
} from "./models.js";

export interface CreateOrUpdateTestOptions extends OperationOptions {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteria;
  /**
   * Secrets can be stored in an Azure Key Vault or any other secret store. If the
   * secret is stored in an Azure Key Vault, the value should be the secret
   * identifier and the type should be AKV_SECRET_URI. If the secret is stored
   * elsewhere, the secret value should be provided directly and the type should be
   * SECRET_VALUE.
   */
  secrets?: Record<string, Secret>;
  /** Certificates metadata */
  certificate?: CertificateMetadata;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfiguration;
  /** The input artifacts for the test. */
  inputArtifacts?: TestInputArtifacts;
  /** Unique test name as identifier. */
  testId?: string;
  /** The test description. */
  description?: string;
  /** Display name of a test. */
  displayName?: string;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** Type of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityType?: string;
  /** Resource Id of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: string;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: string;
  /** The user that last modified. */
  lastModifiedBy?: string;
  contentType?: string;
}

export interface CreateOrUpdateAppComponentsOptions extends OperationOptions {
  /** Test identifier */
  testId?: string;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: string;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: string;
  /** The user that last modified. */
  lastModifiedBy?: string;
  contentType?: string;
}

export interface CreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  /** Test identifier */
  testId?: string;
  /**
   * Azure resource metrics collection {metric id : metrics object} (Refer :
   * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition
   * for metric id).
   */
  metrics?: Record<string, ResourceMetric>;
  /** The creation datetime(ISO 8601 literal format). */
  createdDateTime?: string;
  /** The user that created. */
  createdBy?: string;
  /** The last Modified datetime(ISO 8601 literal format). */
  lastModifiedDateTime?: string;
  /** The user that last modified. */
  lastModifiedBy?: string;
  contentType?: string;
}

export interface GetAppComponentsOptions extends OperationOptions {}

export interface GetServerMetricsConfigOptions extends OperationOptions {}

export interface GetTestOptions extends OperationOptions {}

export interface GetTestFileOptions extends OperationOptions {}

export interface ListTestFilesOptions extends OperationOptions {}

export interface ListTestsOptions extends OperationOptions {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg:
   * lastModifiedDateTime asc. Supported fields - lastModifiedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - displayName,
   * createdBy. For example, to search for a test, with display name is Login Test,
   * the search parameter can be Login.
   */
  search?: string;
  /**
   * Start DateTime(ISO 8601 literal format) of the last updated time range to
   * filter tests.
   */
  lastModifiedStartTime?: string;
  /**
   * End DateTime(ISO 8601 literal format) of the last updated time range to filter
   * tests.
   */
  lastModifiedEndTime?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface UploadTestFileOptions extends OperationOptions {
  contentType?: string;
  /** File type */
  fileType?: FileType;
}

export interface DeleteTestFileOptions extends OperationOptions {}

export interface DeleteTestOptions extends OperationOptions {}
