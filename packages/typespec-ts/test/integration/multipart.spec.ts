import { assert } from "chai";
import { resolvePath } from "@typespec/compiler";
import MultiPartClientFactory, {
  MultiPartClient
} from "./generated/payload/multipart/src/index.js";
import { resolve } from "path";
// import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
// import { createFile } from "@azure/core-rest-pipeline";
describe.only("MultiPartClient Rest Client", () => {
  let client: MultiPartClient;

  beforeEach(() => {
    client = MultiPartClientFactory({
      allowInsecureConnection: true
    });
  });

  it("client should be created", async () => {
    const root = resolvePath(fileURLToPath(import.meta.url), "../../../temp");
    console.log(resolve(root, "./assets/image.png"));
    const path = resolve(root, "./assets/image.png");
    const file = await readFile(path);
    // const blob = new File([file]) as any;
    // blob.name = "image.png";
    // blob.type = "application/octet-stream";
    // const images = createFile(file, "image.png", {
    //   type: "application/octet-stream"
    // }) as any;
    const result = await client.path("/multipart/form-data/mixed-parts").post({
      contentType: "multipart/form-data",
      body: {
        id: "123",
        // profileImage: images
        profileImage: file
      }
    });
    assert.strictEqual(result.status, "204");
  });
});
