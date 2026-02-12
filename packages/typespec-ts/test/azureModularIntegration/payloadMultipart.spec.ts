// import { resolvePath } from "@typespec/compiler";
// import { MultiPartClient } from "./generated/payload/multipart/src/index.js";
// import { fileURLToPath } from "node:url";
// import path from "node:path";
// import fs from "node:fs";

// describe("Multipart Client", () => {
//   let client: MultiPartClient;

//   const root = resolvePath(fileURLToPath(import.meta.url), "../../../temp");
//   const imgPath = path.resolve(root, "./assets/image.jpg");
//   const pngPath = path.resolve(root, "./assets/image.png");

//   beforeEach(() => {
//     client = new MultiPartClient({
//       endpoint: "http://localhost:3002",
//       allowInsecureConnection: true
//     });
//   });

//   it("basic multipart request", async () => {
//     await client.formData.basic({
//       id: "123",
//       profileImage: {
//         contents: fs.createReadStream(imgPath),
//         // must specify a filename due to cadl-ranch limitations
//         filename: "test.jpg"
//       }
//     });
//   });

//   it("multipart request with wire name", async () => {
//     await client.formData.withWireName({
//       identifier: "123",
//       image: {
//         contents: fs.createReadStream(imgPath),
//         filename: "test.jpg"
//       }
//     });
//   });

//   it("optional parts - id only", async () => {
//     await client.formData.optionalParts({
//       id: "123"
//     });
//   });

//   it("optional parts - profileImage only", async () => {
//     await client.formData.optionalParts({
//       profileImage: {
//         contents: fs.createReadStream(imgPath),
//         filename: "test.jpg"
//       }
//     });
//   });

//   it("optional parts - both id and profileImage", async () => {
//     await client.formData.optionalParts({
//       id: "123",
//       profileImage: {
//         contents: fs.createReadStream(imgPath),
//         filename: "test.jpg"
//       }
//     });
//   });

//   // TODO not supported
//   it.skip("anonymous model", async () => {
//     // @ts-ignore - not supported yet
//     await client.formData.anonymousModel(fs.createReadStream(imgPath));
//   });

//   it("binary array parts", async () => {
//     await client.formData.binaryArrayParts({
//       id: "123",
//       pictures: [
//         { filename: "test1.png", contents: fs.createReadStream(pngPath) },
//         { filename: "test2.png", contents: fs.createReadStream(pngPath) }
//       ]
//     });
//   });

//   it("filename and content type", async () => {
//     await client.formData.checkFileNameAndContentType({
//       id: "123",
//       // This is the legacy non-httppart test which does not provide for default content type so we need to set it here
//       profileImage: {
//         filename: "hello.jpg",
//         contentType: "image/jpg",
//         contents: fs.createReadStream(imgPath)
//       }
//     });
//   });

//   it("file array and basic", async () => {
//     await client.formData.fileArrayAndBasic({
//       id: "123",
//       address: {
//         city: "X"
//       },
//       profileImage: {
//         filename: "hello.jpg",
//         contents: fs.createReadStream(imgPath)
//       },
//       pictures: [
//         { filename: "test1.png", contents: fs.createReadStream(pngPath) },
//         { filename: "test2.png", contents: fs.createReadStream(pngPath) }
//       ]
//     });
//   });

//   it("json part", async () => {
//     await client.formData.jsonPart({
//       address: {
//         city: "X"
//       },
//       profileImage: {
//         filename: "hello.jpg",
//         contents: fs.createReadStream(imgPath)
//       }
//     });
//   });

//   it("multi binary parts", async () => {
//     await client.formData.multiBinaryParts({
//       profileImage: {
//         filename: "hello.jpg",
//         contents: fs.createReadStream(imgPath)
//       }
//     });

//     await client.formData.multiBinaryParts({
//       profileImage: {
//         filename: "hello.jpg",
//         contents: fs.createReadStream(imgPath)
//       },
//       picture: {
//         filename: "test1.png",
//         contents: fs.createReadStream(pngPath)
//       }
//     });
//   });

//   describe("using HttpPart", () => {
//     it("JSON array and file array", async () => {
//       await client.formData.httpParts.jsonArrayAndFileArray({
//         id: "123",
//         address: {
//           city: "X"
//         },
//         profileImage: {
//           filename: "test.jpg",
//           contents: fs.createReadStream(imgPath)
//         },
//         previousAddresses: [{ city: "Y" }, { city: "Z" }],
//         pictures: [
//           { filename: "test1.png", contents: fs.createReadStream(pngPath) },
//           { filename: "test2.png", contents: fs.createReadStream(pngPath) }
//         ]
//       });
//     });

//     // TODO fix the serialization
//     it.skip("non-string (float value)", async () => {
//       // the generation is correct now, but the serialization is not
//       await client.formData.httpParts.nonString.float({ temperature: 0.5 });
//     });

//     describe("Content type", () => {
//       it("jpg image", async () => {
//         await client.formData.httpParts.contentType.imageJpegContentType({
//           profileImage: {
//             contents: fs.createReadStream(imgPath),
//             filename: "hello.jpg"
//           }
//         });
//       });

//       it("optional content type", async () => {
//         await client.formData.httpParts.contentType.optionalContentType({
//           profileImage: {
//             contents: fs.createReadStream(imgPath),
//             filename: "hello.jpg"
//           }
//         });
//         await client.formData.httpParts.contentType.optionalContentType({
//           profileImage: {
//             contents: fs.createReadStream(imgPath),
//             filename: "hello.jpg",
//             contentType: "application/octet-stream"
//           }
//         });
//       });

//       it("required content type", async () => {
//         await client.formData.httpParts.contentType.requiredContentType({
//           profileImage: {
//             contents: fs.createReadStream(imgPath),
//             filename: "hello.jpg",
//             contentType: "application/octet-stream"
//           }
//         });
//       });
//     });
//   });
// });
