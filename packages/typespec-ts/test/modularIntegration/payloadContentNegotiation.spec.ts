import { assert } from "chai";
import { uint8ArrayToString } from "@azure/core-util";
import { ContentNegotiationClient } from "./generated/payload/content-negotiation/src/index.js";

import { readFileSync } from "fs";
import { resolvePath } from "@typespec/compiler";
import { fileURLToPath } from "url";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
const root = resolvePath(fileURLToPath(import.meta.url), "../../../temp");
const pngFile = readFileSync(resolvePath(root, "assets/image.png"));
const jpegImage = readFileSync(resolvePath(root, "assets/image.jpg"));

describe("Payload Content Negotiation Client", () => {
  let client: ContentNegotiationClient;

  beforeEach(() => {
    client = new ContentNegotiationClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should get image/png for same body in content negotiation", async () => {
    const result = await client.sameBody.getAvatarAsPng({
      accept: "image/png"
    });
    assert.strictEqual(uint8ArrayToString(result, "utf-8"), pngFile.toString());
  });

  it("should get image/jpeg for same body in content negotiation", async () => {
    const result = await client.sameBody.getAvatarAsJpeg({
      accept: "image/jpeg"
    });
    assert.strictEqual(
      uint8ArrayToString(result, "utf-8"),
      jpegImage.toString()
    );
  });

  it("should get image/png for different body in content negotiation", async () => {
    const result = await client.differentBody.getAvatarAsPng({
      accept: "image/png"
    });
    assert.strictEqual(uint8ArrayToString(result, "utf-8"), pngFile.toString());
  });

  it("should get application/json for different body in content negotiation", async () => {
    const result = await client.differentBody.getAvatarAsJson({
      accept: "application/json"
    });
    assert.strictEqual(
      uint8ArrayToString(result.content, "utf-8"),
      pngFile.toString()
    );
  });
});
