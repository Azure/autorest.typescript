import { assert, describe, it, beforeEach } from "vitest";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import { MultiPartClient } from "./generated/payload/multipart/src/index.js";

const root = path.resolve(fileURLToPath(import.meta.url), "../../..");
const imgPath = path.resolve(root, "temp/assets/image.jpg");
const pngPath = path.resolve(root, "temp/assets/image.png");

describe("MultiPart FormData Client", () => {
  let client: MultiPartClient;

  beforeEach(() => {
    client = new MultiPartClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  it("Payload_MultiPart_FormData_basic", async () => {
    await client.formData.basic({
      id: "123",
      profileImage: fs.createReadStream(imgPath)
    });
  });

  it("Payload_MultiPart_FormData_withWireName", async () => {
    await client.formData.withWireName({
      identifier: "123",
      image: fs.createReadStream(imgPath)
    });
  });

  describe("optionalParts", () => {
    it("Payload_MultiPart_FormData_optionalParts - id only", async () => {
      await client.formData.optionalParts({ id: "123" });
    });

    it("Payload_MultiPart_FormData_optionalParts - profileImage only", async () => {
      await client.formData.optionalParts({
        profileImage: fs.createReadStream(imgPath)
      });
    });

    it("Payload_MultiPart_FormData_optionalParts - both", async () => {
      await client.formData.optionalParts({
        id: "123",
        profileImage: fs.createReadStream(imgPath)
      });
    });
  });

  it("Payload_MultiPart_FormData_checkFileNameAndContentType", async () => {
    await client.formData.checkFileNameAndContentType({
      id: "123",
      profileImage: {
        contents: fs.createReadStream(imgPath),
        filename: "hello.jpg",
        contentType: "image/jpg"
      }
    });
  });

  it("Payload_MultiPart_FormData_fileArrayAndBasic", async () => {
    await client.formData.fileArrayAndBasic({
      id: "123",
      address: { city: "X" },
      profileImage: {
        contents: fs.createReadStream(imgPath),
        filename: "hello.jpg"
      },
      pictures: [
        { contents: fs.createReadStream(pngPath), filename: "test1.png" },
        { contents: fs.createReadStream(pngPath), filename: "test2.png" }
      ]
    });
  });

  it("Payload_MultiPart_FormData_jsonPart", async () => {
    await client.formData.jsonPart({
      address: { city: "X" },
      profileImage: {
        contents: fs.createReadStream(imgPath),
        filename: "hello.jpg"
      }
    });
  });

  it("Payload_MultiPart_FormData_binaryArrayParts", async () => {
    await client.formData.binaryArrayParts({
      id: "123",
      pictures: [
        { contents: fs.createReadStream(pngPath), filename: "test1.png" },
        { contents: fs.createReadStream(pngPath), filename: "test2.png" }
      ]
    });
  });

  describe("multiBinaryParts", () => {
    it("Payload_MultiPart_FormData_multiBinaryParts - profileImage only", async () => {
      await client.formData.multiBinaryParts({
        profileImage: {
          contents: fs.createReadStream(imgPath),
          filename: "hello.jpg"
        }
      });
    });

    it("Payload_MultiPart_FormData_multiBinaryParts - both", async () => {
      await client.formData.multiBinaryParts({
        profileImage: {
          contents: fs.createReadStream(imgPath),
          filename: "hello.jpg"
        },
        picture: {
          contents: fs.createReadStream(pngPath),
          filename: "test1.png"
        }
      });
    });
  });

  it("Payload_MultiPart_FormData_anonymousModel", async () => {
    const jpgBuffer = fs.readFileSync(imgPath);
    await client.formData.anonymousModel({ profileImage: jpgBuffer });
  });

  describe("HttpParts", () => {
    it("Payload_MultiPart_FormData_HttpParts_jsonArrayAndFileArray", async () => {
      await client.formData.httpParts.jsonArrayAndFileArray({
        id: "123",
        address: { city: "X" },
        profileImage: {
          contents: fs.createReadStream(imgPath),
          filename: "test.jpg"
        },
        previousAddresses: [{ city: "Y" }, { city: "Z" }],
        pictures: [
          { contents: fs.createReadStream(pngPath), filename: "test1.png" },
          { contents: fs.createReadStream(pngPath), filename: "test2.png" }
        ]
      });
    });

    // Serialization issue with float httpPart
    it.skip("Payload_MultiPart_FormData_HttpParts_NonString_float", async () => {
      await client.formData.httpParts.nonString.float({ temperature: 0.5 });
    });

    describe("ContentType", () => {
      it("Payload_MultiPart_FormData_HttpParts_ContentType_imageJpegContentType", async () => {
        await client.formData.httpParts.contentType.imageJpegContentType({
          profileImage: {
            contents: fs.createReadStream(imgPath),
            filename: "hello.jpg",
            contentType: "image/jpg"
          }
        });
      });

      it("Payload_MultiPart_FormData_HttpParts_ContentType_optionalContentType - no contentType", async () => {
        await client.formData.httpParts.contentType.optionalContentType({
          profileImage: {
            contents: fs.createReadStream(imgPath),
            filename: "hello.jpg"
          }
        });
      });

      it("Payload_MultiPart_FormData_HttpParts_ContentType_optionalContentType - with contentType", async () => {
        await client.formData.httpParts.contentType.optionalContentType({
          profileImage: {
            contents: fs.createReadStream(imgPath),
            filename: "hello.jpg",
            contentType: "application/octet-stream"
          }
        });
      });

      it("Payload_MultiPart_FormData_HttpParts_ContentType_requiredContentType", async () => {
        await client.formData.httpParts.contentType.requiredContentType({
          profileImage: {
            contents: fs.createReadStream(imgPath),
            filename: "hello.jpg",
            contentType: "application/octet-stream"
          }
        });
      });
    });
  });
});
