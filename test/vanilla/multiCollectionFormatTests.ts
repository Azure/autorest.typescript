import { AutoRestUrlMutliCollectionFormatTestService } from "./generated/UrlMultiCollectionFormat/autoRestUrlMutliCollectionFormatTestService";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

const testClient = new AutoRestUrlMutliCollectionFormatTestService();

describe("URL multi collection format", function () {
  it("should handle UrlQueriesArrayMultiNull", async function () {
    await testClient.queries.arrayStringMultiNull({ arrayQuery: null });
  });

  it("should handle UrlQueriesArrayMultiEmpty", async function () {
    await testClient.queries.arrayStringMultiEmpty({ arrayQuery: [] });
  });

  it("should handle UrlQueriesArrayMultiValid", async function () {
    await testClient.queries.arrayStringMultiValid({ arrayQuery: ["ArrayQuery1", "begin!*'();:@ &=+$,/?#[]end", null, ""] });
  });
});