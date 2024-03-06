import { assert } from "chai";
import { resolvePath } from "@typespec/compiler";
import MultiPartClientFactory, {
  MultiPartClient,
  createFile,
  createFileFromStream
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
          body: {
            id: "123",
            profileImage: file
          }
        });
      assert.strictEqual(result.status, "204");
    });
    it("createFile could return file objects", async () => {
      const file = createFile(await readFile(imgPath), "test.jpg");
      const result = await client
        .path("/multipart/form-data/mixed-parts")
        .post({
          contentType: "multipart/form-data",
          body: {
            id: "123",
            profileImage: file
          }
        });
      assert.strictEqual(result.status, "204");
    });
    it("createFileFromStream could return file object", async () => {
      const content = await readFile(imgPath);
      const file = createFileFromStream(() => content, "test.jpg");
      const result = await client
        .path("/multipart/form-data/mixed-parts")
        .post({
          contentType: "multipart/form-data",
          body: {
            id: "123",
            profileImage: file
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("custom content type + filename", () => {
    it("No content type customized would throw exceptions", async () => {
      const file = await readFile(imgPath);
      const result = await client
        .path("/multipart/form-data/check-filename-and-content-type")
        .post({
          contentType: "multipart/form-data",
          body: {
            id: "123",
            profileImage: file
          }
        });
      assert.strictEqual(result.status, "400");
      assert.strictEqual((result as any).body.expected, "image/jpg");
      assert.strictEqual(
        (result as any).body.actual,
        "application/octet-stream"
      );
    });
    it("createFile could return file objects", async () => {
      const file = createFile(await readFile(imgPath), "hello.jpg", {
        type: "image/jpg"
      });
      const result = await client
        .path("/multipart/form-data/check-filename-and-content-type")
        .post({
          contentType: "multipart/form-data",
          body: {
            id: "123",
            profileImage: file
          }
        });
      assert.strictEqual(result.status, "204");
    });
    it("createFileFromStream could return file objects", async () => {
      const content = await readFile(imgPath);
      const file = createFileFromStream(() => content, "hello.jpg", {
        type: "image/jpg"
      });
      const result = await client
        .path("/multipart/form-data/check-filename-and-content-type")
        .post({
          contentType: "multipart/form-data",
          body: {
            id: "123",
            profileImage: file
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("bytes + bytes", () => {
    it("array of files could be uploaded successfully", async () => {
      const file1 = await readFile(pngPath);
      const file2 = createFile(file1, "test.png");
      const result = await client
        .path("/multipart/form-data/binary-array-parts")
        .post({
          contentType: "multipart/form-data",
          body: {
            id: "123",
            pictures: [file1, file2]
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it("optional bytes could be ignored", async () => {
      const file = await readFile(imgPath);
      const result = await client
        .path("/multipart/form-data/multi-binary-parts")
        .post({
          contentType: "multipart/form-data",
          body: {
            profileImage: file
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it("optional bytes could be uploaded", async () => {
      const file = await readFile(imgPath);
      const optionalFile = await readFile(pngPath);
      const result = await client
        .path("/multipart/form-data/multi-binary-parts")
        .post({
          contentType: "multipart/form-data",
          body: {
            profileImage: file,
            picture: optionalFile
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });
});
