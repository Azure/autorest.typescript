import { assert } from "chai";
import { resolvePath } from "@typespec/compiler";
import MultiPartClientFactory, {
  MultiPartClient
} from "./generated/payload/multipart/src/index.js";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
describe("MultiPartClient Rest Client", () => {
  let client: MultiPartClient;

  beforeEach(() => {
    client = MultiPartClientFactory({
      allowInsecureConnection: true
    });
  });
  const root = resolvePath(fileURLToPath(import.meta.url), "../../../temp");
  const imgPath = resolve(root, "./assets/image.jpg");
  const pngPath = resolve(root, "./assets/image.png");

  describe("string + bytes", () => {
    it("Buffer extends Uint8Array should be allowed", async () => {
      const file = await readFile(imgPath);
      const result = await client
        .path("/multipart/form-data/mixed-parts")
        .post({
          contentType: "multipart/form-data",
          body: [
            { name: "id", body: "123" },
            { name: "profileImage", body: file, filename: "profileImage.jpg" }
          ]
        });
      assert.strictEqual(result.status, "204");
    });

    it("supports anonymous model file upload", async () => {
      const result = await client
        .path("/multipart/form-data/anonymous-model")
        .post({
          contentType: "multipart/form-data",
          body: [
            {
              name: "profileImage",
              body: await readFile(imgPath),
              filename: "test.jpg"
            }
          ]
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("custom content type + filename", () => {
    it("raises 400 error when filename and MIME type unspecified", async () => {
      const file = await readFile(imgPath);
      const result = await client
        .path("/multipart/form-data/check-filename-and-content-type")
        .post({
          contentType: "multipart/form-data",
          body: [
            { name: "id", body: "123" },
            { name: "profileImage", body: file, filename: "profileImage.jpg" }
          ]
        });
      assert.strictEqual(result.status, "400");
      assert.strictEqual((result as any).body.expected, "image/jpg");
      assert.strictEqual(
        (result as any).body.actual,
        "application/octet-stream"
      );
    });
    it("allows specifying MIME type and filename", async () => {
      const fileContent = await readFile(imgPath);
      const filename = "hello.jpg";
      const contentType = "image/jpg";

      const result = await client
        .path("/multipart/form-data/check-filename-and-content-type")
        .post({
          contentType: "multipart/form-data",
          body: [
            { name: "id", body: "123" },
            { name: "profileImage", body: fileContent, filename, contentType }
          ]
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("bytes + bytes", () => {
    it("can upload multiple files with same part name", async () => {
      const file1 = await readFile(pngPath);
      const result = await client
        .path("/multipart/form-data/binary-array-parts")
        .post({
          contentType: "multipart/form-data",
          body: [
            { name: "id", body: "123" },
            { name: "pictures", body: file1, filename: "test1.png" },
            { name: "pictures", body: file1, filename: "test.png" }
          ]
        });
      assert.strictEqual(result.status, "204");
    });

    it("can skip uploading optional file parts", async () => {
      const file = await readFile(imgPath);
      const result = await client
        .path("/multipart/form-data/multi-binary-parts")
        .post({
          contentType: "multipart/form-data",
          body: [
            { name: "profileImage", body: file, filename: "profileImage.jpg" }
          ]
        });
      assert.strictEqual(result.status, "204");
    });

    it("can upload optional file parts", async () => {
      const file = await readFile(imgPath);
      const optionalFile = await readFile(pngPath);
      const result = await client
        .path("/multipart/form-data/multi-binary-parts")
        .post({
          contentType: "multipart/form-data",
          body: [
            { name: "profileImage", body: file, filename: "profileImage.jpg" },
            { name: "picture", body: optionalFile, filename: "aaa.png" }
          ]
        });
      assert.strictEqual(result.status, "204");
    });

    it("complex body with multiple parts of different kinds", async () => {
      const profileImage = await readFile(imgPath);
      const optionalFile = await readFile(pngPath);

      const result = await client
        .path("/multipart/form-data/complex-parts")
        .post({
          contentType: "multipart/form-data",
          body: [
            { name: "id", body: "123" },
            { name: "address", body: { city: "X" } },
            {
              name: "profileImage",
              body: profileImage,
              filename: "profileImage.jpg"
            },
            { name: "pictures", body: optionalFile, filename: "aaa.png" },
            { name: "pictures", body: optionalFile, filename: "aaa.png" }
          ]
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("JSON parts", () => {
    it("supports JSON part with file upload", async () => {
      const profileImage = await readFile(imgPath);

      const result = await client.path("/multipart/form-data/json-part").post({
        contentType: "multipart/form-data",
        body: [
          { name: "address", body: { city: "X" } },
          {
            name: "profileImage",
            body: profileImage,
            filename: "profileImage.jpg"
          }
        ]
      });

      assert.strictEqual(result.status, "204");
    });
  });
});
