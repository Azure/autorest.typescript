import { assert } from "chai";
import ContentNegotiationClientFactory, {
  ContentNegotiationClient
} from "./generated/payload/content-negotiation/src/index.js";

import { readFileSync } from "fs";
import { resolvePath } from "@typespec/compiler";
import { fileURLToPath } from "url";

const root = resolvePath(fileURLToPath(import.meta.url), "../../../../../");
const pngFile = readFileSync(resolvePath(root, "assets/image.png"));
const jpegImage = readFileSync(resolvePath(root, "assets/image.jpg"));
describe("Content Negotiation Client", () => {
  let client: ContentNegotiationClient;

  beforeEach(() => {
    client = ContentNegotiationClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get image/png for same body in content negotiation", async () => {
    try {
      const result = await client
        .path("/content-negotiation/same-body")
        .get({ headers: { accept: "image/png" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.contentType, "image/png");
      assert.strictEqual(result.body.rawContent, pngFile);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get image/jpeg for same body in content negotiation", async () => {
    try {
      const result = await client
        .path("/content-negotiation/same-body")
        .get({ headers: { accept: "image/jpeg" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.contentType, "image/jpeg");
      assert.strictEqual(result.body.rawContent, jpegImage);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should return error if put wrong accept for same body in content negotiation", async () => {
    try {
      const result = await client
        .path("/content-negotiation/same-body")
        .get({ headers: { accept: "wrongAccept" } });
      assert.strictEqual(
        (result.body as any).message,
        "Unsupported Accept header"
      );
      assert.strictEqual(
        (result.body as any).expected,
        `"image/png" | "image/jpeg"`
      );
      assert.strictEqual((result.body as any).actual, "wrongAccept");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get image/png for different body in content negotiation", async () => {
    try {
      const result = await client
        .path("/content-negotiation/different-body")
        .get({ headers: { accept: "image/png" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.contentType, "image/jpeg");
      assert.strictEqual(result.body.rawContent, jpegImage);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get application/json for different body in content negotiation", async () => {
    try {
      const result = await client
        .path("/content-negotiation/different-body")
        .get({ headers: { accept: "application/json" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.content, pngFile.toString("base64"));
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should return error if put wrong accept for different body in content negotiation", async () => {
    try {
      const result = await client
        .path("/content-negotiation/different-body")
        .get({ headers: { accept: "wrongAccept" } });
      assert.strictEqual(
        (result.body as any).message,
        "Unsupported Accept header"
      );
      assert.strictEqual(
        (result.body as any).expected,
        `"image/png" | "application/json"`
      );
      assert.strictEqual((result.body as any).actual, "wrongAccept");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
