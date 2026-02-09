// import { assert } from "chai";
// import { resolvePath } from "@typespec/compiler";
// import MultiPartClientFactory, {
//   MultiPartClient
// } from "./generated/payload/multipart/src/index.js";
// import { resolve } from "path";
// import { readFile } from "fs/promises";
// import { fileURLToPath } from "url";

// describe("MultiPartClient Rest Client", () => {
//   let client: MultiPartClient;

//   beforeEach(() => {
//     client = MultiPartClientFactory({
//       allowInsecureConnection: true
//     });
//   });
//   const root = resolvePath(fileURLToPath(import.meta.url), "../../../temp");
//   const imgPath = resolve(root, "./assets/image.jpg");
//   const pngPath = resolve(root, "./assets/image.png");

//   describe("string + bytes", () => {
//     it("Buffer extends Uint8Array should be allowed", async () => {
//       const file = await readFile(imgPath);
//       const result = await client
//         .path("/multipart/form-data/mixed-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "id", body: "123" },
//             { name: "profileImage", body: file, filename: "profileImage.jpg" }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });

//     it("should support wire name", async () => {
//       const file = await readFile(imgPath);
//       const result = await client
//         .path("/multipart/form-data/mixed-parts-with-wire-name")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             // Using 'as any' because generated types use TypeSpec property names ('identifier', 'image')
//             // but runtime expects wire names ('id', 'profileImage') per TypeSpec @name annotation
//             { name: "id" as any, body: "123" },
//             {
//               name: "profileImage" as any,
//               body: file,
//               filename: "profileImage.jpg"
//             }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });

//     it("supports anonymous model file upload", async () => {
//       const result = await client
//         .path("/multipart/form-data/anonymous-model")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             {
//               name: "profileImage",
//               body: await readFile(imgPath),
//               filename: "test.jpg"
//             }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });
//   });

//   describe("optional parts", () => {
//     it("should support id only", async () => {
//       const result = await client
//         .path("/multipart/form-data/optional-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [{ name: "id", body: "123" }]
//         });
//       assert.strictEqual(result.status, "204");
//     });

//     it("should support profileImage only", async () => {
//       const file = await readFile(imgPath);
//       const result = await client
//         .path("/multipart/form-data/optional-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "profileImage", body: file, filename: "profileImage.jpg" }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });

//     it("should support both id and profileImage", async () => {
//       const file = await readFile(imgPath);
//       const result = await client
//         .path("/multipart/form-data/optional-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "id", body: "123" },
//             { name: "profileImage", body: file, filename: "profileImage.jpg" }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });
//   });

//   describe("custom content type + filename", () => {
//     it("raises 400 error when filename and MIME type unspecified", async () => {
//       const file = await readFile(imgPath);
//       const result = await client
//         .path("/multipart/form-data/check-filename-and-content-type")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "id", body: "123" },
//             { name: "profileImage", body: file, filename: "profileImage.jpg" }
//           ]
//         });
//       assert.strictEqual(result.status, "400");
//       assert.strictEqual((result as any).body.expected, "image/jpg");
//       assert.strictEqual(
//         (result as any).body.actual,
//         "application/octet-stream"
//       );
//     });
//     it("allows specifying MIME type and filename", async () => {
//       const fileContent = await readFile(imgPath);
//       const filename = "hello.jpg";
//       const contentType = "image/jpg";

//       const result = await client
//         .path("/multipart/form-data/check-filename-and-content-type")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "id", body: "123" },
//             { name: "profileImage", body: fileContent, filename, contentType }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });
//   });

//   describe("bytes + bytes", () => {
//     it("can upload multiple files with same part name", async () => {
//       const file1 = await readFile(pngPath);
//       const result = await client
//         .path("/multipart/form-data/binary-array-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "id", body: "123" },
//             { name: "pictures", body: file1, filename: "test1.png" },
//             { name: "pictures", body: file1, filename: "test.png" }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });

//     it("can skip uploading optional file parts", async () => {
//       const file = await readFile(imgPath);
//       const result = await client
//         .path("/multipart/form-data/multi-binary-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "profileImage", body: file, filename: "profileImage.jpg" }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });

//     it("can upload optional file parts", async () => {
//       const file = await readFile(imgPath);
//       const optionalFile = await readFile(pngPath);
//       const result = await client
//         .path("/multipart/form-data/multi-binary-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "profileImage", body: file, filename: "profileImage.jpg" },
//             { name: "picture", body: optionalFile, filename: "aaa.png" }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });

//     it("complex body with multiple parts of different kinds", async () => {
//       const profileImage = await readFile(imgPath);
//       const optionalFile = await readFile(pngPath);

//       const result = await client
//         .path("/multipart/form-data/complex-parts")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             { name: "id", body: "123" },
//             { name: "address", body: { city: "X" } },
//             {
//               name: "profileImage",
//               body: profileImage,
//               filename: "profileImage.jpg"
//             },
//             { name: "pictures", body: optionalFile, filename: "aaa.png" },
//             { name: "pictures", body: optionalFile, filename: "aaa.png" }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });
//   });

//   describe("JSON parts", () => {
//     it("supports JSON part with file upload", async () => {
//       const profileImage = await readFile(imgPath);

//       const result = await client.path("/multipart/form-data/json-part").post({
//         contentType: "multipart/form-data",
//         body: [
//           { name: "address", body: { city: "X" } },
//           {
//             name: "profileImage",
//             body: profileImage,
//             filename: "profileImage.jpg"
//           }
//         ]
//       });

//       assert.strictEqual(result.status, "204");
//     });
//   });

//   describe("HttpPart", () => {
//     it("JSON array and file array", async () => {
//       const profileImage = await readFile(imgPath);
//       const png = await readFile(pngPath);

//       const result = await client
//         .path("/multipart/form-data/complex-parts-with-httppart")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             {
//               name: "profileImage",
//               body: profileImage,
//               filename: "image.jpg",
//               contentType: "application/octet-stream"
//             },
//             {
//               name: "pictures",
//               body: png,
//               filename: "profileImage.jpg"
//             },
//             {
//               name: "pictures",
//               body: png,
//               filename: "image.png"
//             },
//             {
//               name: "id",
//               body: "123"
//             },
//             {
//               name: "address",
//               body: {
//                 city: "X"
//               }
//             },
//             {
//               name: "previousAddresses",
//               body: [
//                 {
//                   city: "Y"
//                 },
//                 {
//                   city: "Z"
//                 }
//               ]
//             }
//           ]
//         });

//       assert.strictEqual(result.status, "204");
//     });

//     it("multipart/form-data optional content type", async () => {
//       const profileImage = await readFile(imgPath);

//       const res1 = await client
//         .path("/multipart/form-data/file-with-http-part-optional-content-type")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             {
//               name: "profileImage",
//               filename: "profileImage.jpg",
//               body: profileImage
//             }
//           ]
//         });

//       assert.strictEqual(res1.status, "204");

//       const res2 = await client
//         .path("/multipart/form-data/file-with-http-part-optional-content-type")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             {
//               name: "profileImage",
//               filename: "profileImage.jpg",
//               body: profileImage,
//               contentType: "application/octet-stream"
//             }
//           ]
//         });

//       assert.strictEqual(res2.status, "204");
//     });

//     it("required content type", async () => {
//       const profileImage = await readFile(imgPath);

//       const result = await client
//         .path(
//           "/multipart/form-data/check-filename-and-required-content-type-with-httppart"
//         )
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             {
//               name: "profileImage",
//               contentType: "application/octet-stream",
//               filename: "profileImage.jpg",
//               body: profileImage
//             }
//           ]
//         });

//       assert.strictEqual(result.status, "204");
//     });

//     it("filename and specific content type", async () => {
//       const profileImage = await readFile(imgPath);

//       const result = await client
//         .path(
//           "/multipart/form-data/check-filename-and-specific-content-type-with-httppart"
//         )
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             {
//               name: "profileImage",
//               contentType: "image/jpg",
//               filename: "hello.jpg",
//               body: profileImage
//             }
//           ]
//         });

//       assert.strictEqual(result.status, "204");
//     });

//     it("non-string float", async () => {
//       const result = await client
//         .path("/multipart/form-data/non-string-float")
//         .post({
//           contentType: "multipart/form-data",
//           body: [
//             {
//               name: "temperature",
//               body: 0.5
//             }
//           ]
//         });
//       assert.strictEqual(result.status, "204");
//     });
//   });
// });
