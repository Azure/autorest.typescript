import { assert } from "chai";
import { resolvePath } from "@typespec/compiler";
import MultiPartClientFactory, {
  MultiPartClient
} from "./generated/payload/multipart/src/index.js";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
describe.only("MultiPartClient Rest Client", () => {
  let client: MultiPartClient;

  beforeEach(() => {
    client = MultiPartClientFactory({
      allowInsecureConnection: true
    });
  });
  const root = resolvePath(fileURLToPath(import.meta.url), "../../../temp");
  console.log(resolve(root, "./assets/image.jpg"));
  const path = resolve(root, "./assets/image.jpg");
  
  it("client should create mixed-parts value", async () => {
    const file = await readFile(path);
    const result = await client.path("/multipart/form-data/mixed-parts").post({
      contentType: "multipart/form-data",
      body: {
        id: "123",
        profileImage: file as any
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("client should create mixed-parts value", async () => {
    const file = await readFile(path);
    console.log(file)
    const result = await client.path("/multipart/form-data/complex-parts").post({
      contentType: "multipart/form-data",
      body: {
        id: "123",
        profileImage: file as any,
        address:{ city: "X" },
        previousAddresses:[{ city: "Y" }, { city: "Z" }],
        pictures:[file as any]
      }
    });
    assert.strictEqual(result.status, "204");
  });
  it("client should create json-part value", async () => {
    const file = await readFile(path);
    const result = await client.path("/multipart/form-data/json-part").post({
        body: {
            address: { city: "X" },
            profileImage: file as any
        },
        contentType: "multipart/form-data"
    });
    assert.strictEqual(result.status, "204");
  });
  it("client should create binary-array-parts value", async () => {
    const file = await readFile(path);
    const result = await client.path("/multipart/form-data/binary-array-parts").post({
        contentType: "multipart/form-data",
        body: {
            id:"123",
            pictures:[file as any]
        }
    });
    assert.strictEqual(result.status, "204");
  });
  it("client should create multi-binary-parts value", async () => {
    const file = await readFile(path);
    const result = await client.path("/multipart/form-data/multi-binary-parts").post({
        contentType: "multipart/form-data",
        body: {
           profileImage:file as any
        }
    });
    assert.strictEqual(result.status, "204");
  });
  it("client should create json-array-parts value", async () => {
    const file = await readFile(path);
    const result = await client.path("/multipart/form-data/json-array-parts").post({
        contentType: "multipart/form-data",
        body: {
            profileImage: file as any,
            previousAddresses: [{ city: "Y" }, { city: "Z" }]
        }
    });
    assert.strictEqual(result.status, "204");
  });
});
