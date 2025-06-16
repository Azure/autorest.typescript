// // Copyright (c) Microsoft Corporation.
// // Licensed under the MIT License.

// import { assert } from "chai";
// import {
//     HeaderParamClient,
//     MultipleParamsClient,
//     MixedParamsClient,
//     PathParamClient,
//     ParamAliasClient,
//     ParentClient,
//     ChildClient,
//     Input,
//     BlobProperties
// } from "./generated/azure/client-generator-core/client-initialization/src/index.js";
// describe.only("HeaderParam Scenario", () => {
//     let client: HeaderParamClient;

//     beforeEach(() => {
//         client = new HeaderParamClient("test-name-value", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });
//     });

//     it("should elevate header parameter to client level - withQuery", async () => {
//         // The name parameter should be moved to client initialization
//         // so we don't need to pass it in the operation call
//         const result = await client.withQuery("test-id");
//         assert.isUndefined(result);
//     });

//     it("should elevate header parameter to client level - withBody", async () => {
//         const input: Input = { name: "test-name" };

//         // The name parameter should be moved to client initialization
//         // so we don't need to pass it in the operation call
//         const result = await client.withBody(input);
//         assert.isUndefined(result);
//     });
// });

// describe("MultipleParams Scenario", () => {
//     let client: MultipleParamsClient;

//     beforeEach(() => {
//         client = new MultipleParamsClient("test-name-value", "us-west", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });
//     });

//     it("should elevate header and query parameters to client level - withQuery", async () => {
//         // Both name and region parameters should be moved to client initialization
//         // so we don't need to pass them in the operation call
//         const result = await client.withQuery("test-id");
//         assert.isUndefined(result);
//     });

//     it("should elevate header and query parameters to client level - withBody", async () => {
//         const input: Input = { name: "test-name" };

//         // Both name and region parameters should be moved to client initialization
//         // so we don't need to pass them in the operation call
//         const result = await client.withBody(input);
//         assert.isUndefined(result);
//     });
// });
// describe("MixedParams Scenario", () => {
//     let client: MixedParamsClient;

//     beforeEach(() => {
//         client = new MixedParamsClient("test-name-value", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });
//     });
//     it("should elevate header parameter to client level with query parameter remaining - withQuery", async () => {
//         // The name parameter should be moved to client initialization
//         // but region stays as operation parameter
//         const result = await client.withQuery("us-west", "test-id");
//         assert.isUndefined(result);
//     });

//     it("should elevate header parameter to client level with query parameter remaining - withBody", async () => {
//         const input: Input = { name: "test-name" };

//         // The name parameter should be moved to client initialization
//         // but region stays as operation parameter
//         const result = await client.withBody("us-west", input);
//         assert.isUndefined(result);
//     });
// });
// describe("PathParam Scenario", () => {
//     let client: PathParamClient;

//     beforeEach(() => {
//         client = new PathParamClient("sample-blob", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });
//     });

//     it("should elevate path parameter to client level - withQuery", async () => {
//         // The blobName parameter should be moved to client initialization
//         // so we don't need to pass it in the operation call
//         const result = await client.withQuery({ format: "text" });
//         assert.isUndefined(result);
//     });

//     it("should elevate path parameter to client level - getStandalone", async () => {
//         // The blobName parameter should be moved to client initialization
//         // so we don't need to pass it in the operation call
//         const result: BlobProperties = await client.getStandalone();

//         assert.strictEqual(result.name, "sample-blob");
//         assert.strictEqual(result.size, 42);
//         assert.strictEqual(result.contentType, "text/plain");
//         assert.deepStrictEqual(result.createdOn, new Date("2025-04-01T12:00:00Z"));
//     });

//     it("should elevate path parameter to client level - deleteStandalone", async () => {
//         // The blobName parameter should be moved to client initialization
//         // so we don't need to pass it in the operation call
//         const result = await client.deleteStandalone();
//         assert.isUndefined(result);
//     });
// });
// describe("ParamAlias Scenario", () => {
//     let client: ParamAliasClient;

//     beforeEach(() => {
//         client = new ParamAliasClient("sample-blob", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });
//     });

//     it("should support parameter alias for blobName - withAliasedName", async () => {
//         // The blobName parameter should be elevated to client level
//         // using the alias "blob" in client configuration
//         const result = await client.withAliasedName();
//         assert.isUndefined(result);
//     });

//     it("should support parameter alias for blobName - withOriginalName", async () => {
//         // The blobName parameter should be elevated to client level
//         // using the original name in client configuration
//         const result = await client.withOriginalName();
//         assert.isUndefined(result);
//     });
// });
// describe("ParentClient/ChildClient Scenario", () => {
//     let parentClient: ParentClient;

//     beforeEach(() => {
//         parentClient = new ParentClient({
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });
//     });

//     it("should support child client initialization via parent client - withQuery", async () => {
//         // Get child client via parent client with blobName parameter
//         const childClient = parentClient.getChildClient("sample-blob");

//         // The blobName parameter should be moved to child client initialization
//         // so we don't need to pass it in the operation call
//         const result = await childClient.withQuery({ format: "text" });
//         assert.isUndefined(result);
//     });

//     it("should support child client initialization via parent client - getStandalone", async () => {
//         // Get child client via parent client with blobName parameter
//         const childClient = parentClient.getChildClient("sample-blob");

//         // The blobName parameter should be moved to child client initialization
//         // so we don't need to pass it in the operation call
//         const result: BlobProperties = await childClient.getStandalone();

//         assert.strictEqual(result.name, "sample-blob");
//         assert.strictEqual(result.size, 42);
//         assert.strictEqual(result.contentType, "text/plain");
//         assert.deepStrictEqual(result.createdOn, new Date("2025-04-01T12:00:00Z"));
//     });

//     it("should support child client initialization via parent client - deleteStandalone", async () => {
//         // Get child client via parent client with blobName parameter
//         const childClient = parentClient.getChildClient("sample-blob");

//         // The blobName parameter should be moved to child client initialization
//         // so we don't need to pass it in the operation call
//         const result = await childClient.deleteStandalone();
//         assert.isUndefined(result);
//     });

//     it("should support direct child client initialization - withQuery", async () => {
//         // Direct child client initialization
//         const childClient = new ChildClient("sample-blob", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });

//         // The blobName parameter should be moved to child client initialization
//         // so we don't need to pass it in the operation call
//         const result = await childClient.withQuery({ format: "text" });
//         assert.isUndefined(result);
//     });

//     it("should support direct child client initialization - getStandalone", async () => {
//         // Direct child client initialization
//         const childClient = new ChildClient("sample-blob", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });

//         // The blobName parameter should be moved to child client initialization
//         // so we don't need to pass it in the operation call
//         const result: BlobProperties = await childClient.getStandalone();

//         assert.strictEqual(result.name, "sample-blob");
//         assert.strictEqual(result.size, 42);
//         assert.strictEqual(result.contentType, "text/plain");
//         assert.deepStrictEqual(result.createdOn, new Date("2025-04-01T12:00:00Z"));
//     });

//     it("should support direct child client initialization - deleteStandalone", async () => {
//         // Direct child client initialization
//         const childClient = new ChildClient("sample-blob", {
//             endpoint: "http://localhost:3002",
//             allowInsecureConnection: true,
//             retryOptions: {
//                 maxRetries: 0
//             }
//         });

//         // The blobName parameter should be moved to child client initialization
//         // so we don't need to pass it in the operation call
//         const result = await childClient.deleteStandalone();
//         assert.isUndefined(result);
//     });
// });
