import { assert } from "chai";
import ResiliencyDevDrivenClientFactory, {
  ResiliencyDevDrivenClient
} from "./generated/resiliency/devDriven/src/index.js";
describe("ResiliencyDevDrivenClient Rest Client", () => {
  let client: ResiliencyDevDrivenClient;

  beforeEach(() => {
    client = ResiliencyDevDrivenClientFactory({
      allowInsecureConnection: true
    });
  });

  describe("dpg customization with raw model", () => {
    it("should get model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "raw")
        .get();
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "raw");
    });

    it("should post model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "raw")
        .post({ body: { hello: "world!" } });
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "raw");
    });
  });

  describe("dpg customization with model model", () => {
    it("should get model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "model")
        .get();
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "model");
    });

    it("should post model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "model")
        .post({ body: { hello: "world!" } });
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "model");
    });
  });
});
