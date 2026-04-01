import { describe, it, beforeEach, assert } from "vitest";

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
    const chunks: Uint8Array[] = [];
    for await (const chunk of result.readableStreamBody!) {
      chunks.push(chunk as Uint8Array);
    }
    const buffer = Buffer.concat(chunks);
    assert.strictEqual(
      uint8ArrayToString(buffer, "base64"),
      uint8ArrayToString(pngFile, "base64")
    );
  });

  it("should get image/jpeg for same body in content negotiation", async () => {
    const result = await client.sameBody.getAvatarAsJpeg();
    const chunks: Uint8Array[] = [];
    for await (const chunk of result.readableStreamBody!) {
      chunks.push(chunk as Uint8Array);
    }
    const buffer = Buffer.concat(chunks);
    assert.strictEqual(
      uint8ArrayToString(buffer, "base64"),
      uint8ArrayToString(jpegImage, "base64")
    );
  });

  it("should get image/png for different body in content negotiation", async () => {
    const result = await client.differentBody.getAvatarAsPng();
    const chunks: Uint8Array[] = [];
    for await (const chunk of result.readableStreamBody!) {
      chunks.push(chunk as Uint8Array);
    }
    const buffer = Buffer.concat(chunks);
    assert.strictEqual(
      uint8ArrayToString(buffer, "base64"),
      uint8ArrayToString(pngFile, "base64")
    );
  });

  it("should get application/json for different body in content negotiation", async () => {
    const result = await client.differentBody.getAvatarAsJson();
    assert.strictEqual(
      uint8ArrayToString(result.content, "utf-8"),
      pngFile.toString()
    );
  });
});
