import { assert } from "chai";
import { uint8ArrayToString } from "@azure/core-util";
import { ContentNegotiationClient } from "./generated/payload/content-negotiation/src/index.js";

import { readFileSync } from "fs";
import { resolvePath } from "@typespec/compiler";
import { fileURLToPath } from "url";

const root = resolvePath(fileURLToPath(import.meta.url), "../../../temp");
const pngFile = readFileSync(resolvePath(root, "assets/image.png"));
const jpegImage = readFileSync(resolvePath(root, "assets/image.jpg"));

describe("Payload Content Negotiation Client", () => {
  let client: ContentNegotiationClient;

  beforeEach(() => {
    client = new ContentNegotiationClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should get image/png for same body in content negotiation", async () => {
    const result = await client.sameBody.getAvatarAsPng();
    const blob = await result.blobBody!;
    const arrayBuffer = await blob.arrayBuffer();
    assert.deepStrictEqual(new Uint8Array(arrayBuffer), pngFile);
  });

  it("should get image/jpeg for same body in content negotiation", async () => {
    const result = await client.sameBody.getAvatarAsJpeg();
    const blob = await result.blobBody!;
    const arrayBuffer = await blob.arrayBuffer();
    assert.deepStrictEqual(new Uint8Array(arrayBuffer), jpegImage);
  });

  it("should get image/png for different body in content negotiation", async () => {
    const result = await client.differentBody.getAvatarAsPng();
    const blob = await result.blobBody!;
    const arrayBuffer = await blob.arrayBuffer();
    assert.deepStrictEqual(new Uint8Array(arrayBuffer), pngFile);
  });

  it("should get application/json for different body in content negotiation", async () => {
    const result = await client.differentBody.getAvatarAsJson();
    assert.strictEqual(
      uint8ArrayToString(result.content, "utf-8"),
      pngFile.toString()
    );
  });
});
