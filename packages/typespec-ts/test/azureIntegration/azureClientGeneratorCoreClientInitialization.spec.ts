// import { assert } from "chai";
// import ServiceClientFactory, {
//   ServiceClient
// } from "./generated/azure/client-generator-core/client-initialization/src/index.js";

// describe("Azure Client Generator Core Client Initialization", () => {
//   let client: ServiceClient;

//   beforeEach(() => {
//     client = ServiceClientFactory({
//       allowInsecureConnection: true
//     });
//   });

//   describe("HeaderParam scenarios", () => {
//     it("should handle header param with query", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/header-param/with-query"
//         )
//         .get({
//           queryParameters: {
//             id: "test-id"
//           },
//           headers: {
//             name: "test-name-value"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });

//     it("should handle header param with body", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/header-param/with-body"
//         )
//         .post({
//           headers: {
//             name: "test-name-value"
//           },
//           body: {
//             name: "test-name"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });
//   });

//   describe("MultipleParams scenarios", () => {
//     it("should handle multiple params with query", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/multiple-params/with-query"
//         )
//         .get({
//           queryParameters: {
//             id: "test-id",
//             region: "us-west"
//           },
//           headers: {
//             name: "test-name-value"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });

//     it("should handle multiple params with body", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/multiple-params/with-body"
//         )
//         .post({
//           queryParameters: {
//             region: "us-west"
//           },
//           headers: {
//             name: "test-name-value"
//           },
//           body: {
//             name: "test-name"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });
//   });

//   describe("MixedParams scenarios", () => {
//     it("should handle mixed params with query", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/mixed-params/with-query"
//         )
//         .get({
//           queryParameters: {
//             id: "test-id",
//             region: "us-west"
//           },
//           headers: {
//             name: "test-name-value"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });

//     it("should handle mixed params with body", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/mixed-params/with-body"
//         )
//         .post({
//           queryParameters: {
//             region: "us-west"
//           },
//           headers: {
//             name: "test-name-value"
//           },
//           body: {
//             name: "test-name"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });
//   });

//   describe("PathParam scenarios", () => {
//     it("should handle path param with query", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/path/{blobName}/with-query",
//           "sample-blob"
//         )
//         .get({
//           queryParameters: {
//             format: "text"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });

//     it("should handle path param get standalone", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/path/{blobName}/get-standalone",
//           "sample-blob"
//         )
//         .get();

//       assert.strictEqual(response.status, "200");
//       assert.deepEqual(response.body, {
//         name: "sample-blob",
//         size: 42,
//         contentType: "text/plain",
//         createdOn: "2025-04-01T12:00:00Z"
//       });
//     });

//     it("should handle path param delete standalone", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/path/{blobName}",
//           "sample-blob"
//         )
//         .delete();

//       assert.strictEqual(response.status, "204");
//     });
//   });

//   describe("ParamAlias scenarios", () => {
//     it("should handle param alias with aliased name", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/param-alias/{blob}/with-aliased-name",
//           "sample-blob"
//         )
//         .get();

//       assert.strictEqual(response.status, "204");
//     });

//     it("should handle param alias with original name", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/param-alias/{blobName}/with-original-name",
//           "sample-blob"
//         )
//         .get();

//       assert.strictEqual(response.status, "204");
//     });
//   });

//   describe("ChildClient scenarios", () => {
//     it("should handle child client with query", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/child-client/{blobName}/with-query",
//           "sample-blob"
//         )
//         .get({
//           queryParameters: {
//             format: "text"
//           }
//         });

//       assert.strictEqual(response.status, "204");
//     });

//     it("should handle child client get standalone", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/child-client/{blobName}/get-standalone",
//           "sample-blob"
//         )
//         .get();

//       assert.strictEqual(response.status, "200");
//       assert.deepEqual(response.body, {
//         name: "sample-blob",
//         size: 42,
//         contentType: "text/plain",
//         createdOn: "2025-04-01T12:00:00Z"
//       });
//     });

//     it("should handle child client delete standalone", async () => {
//       const response = await client
//         .path(
//           "/azure/client-generator-core/client-initialization/child-client/{blobName}",
//           "sample-blob"
//         )
//         .delete();

//       assert.strictEqual(response.status, "204");
//     });
//   });
// });
