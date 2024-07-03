// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TestProfile } from "./models/models.js";
import {
  CreateOrUpdateTestProfileOptionalParams,
  DeleteTestProfileOptionalParams,
  GetTestProfileOptionalParams,
  ListTestProfilesOptionalParams,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createOrUpdateTestProfile,
  deleteTestProfile,
  getTestProfile,
  listTestProfiles,
  createTestProfileAdministrationOperations,
  TestProfileAdministrationOperationsClientOptions,
  LoadTestServiceContext,
} from "./api/index.js";

export { TestProfileAdministrationOperationsClientOptions } from "./api/testProfileAdministrationOperationsContext.js";

export class TestProfileAdministrationOperationsClient {
  private _client: LoadTestServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: TestProfileAdministrationOperationsClientOptions = {},
  ) {
    this._client = createTestProfileAdministrationOperations(
      endpointParam,
      credential,
      options,
    );
    this.pipeline = this._client.pipeline;
  }

  /** Create a new test profile or update an existing test profile by providing the test profile Id. */
  createOrUpdateTestProfile(
    testProfileId: string,
    body: TestProfile,
    options: CreateOrUpdateTestProfileOptionalParams = { requestOptions: {} },
  ): Promise<TestProfile> {
    return createOrUpdateTestProfile(
      this._client,
      testProfileId,
      body,
      options,
    );
  }

  /** Delete a test profile by its test profile Id. */
  deleteTestProfile(
    testProfileId: string,
    options: DeleteTestProfileOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTestProfile(this._client, testProfileId, options);
  }

  /** Get load test profile details by test profile Id. */
  getTestProfile(
    testProfileId: string,
    options: GetTestProfileOptionalParams = { requestOptions: {} },
  ): Promise<TestProfile> {
    return getTestProfile(this._client, testProfileId, options);
  }

  /** Get all test profiles for the given filters. */
  listTestProfiles(
    options: ListTestProfilesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TestProfile> {
    return listTestProfiles(this._client, options);
  }
}
