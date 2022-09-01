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
    // comment out these test cases because the server is not ready
    // https://github.com/Azure/autorest.typescript/issues/1535
    xit("should get model", async () => {
      const result = await client
        .path("/resilency/devdriven/customization/model/{mode}", "raw")
        .get();
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "raw");
    });

    xit("should post model", async () => {
      const result = await client
        .path("/resilency/devdriven/customization/model/{mode}", "raw")
        .post({ body: { hello: "world!" } });
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "raw");
    });
  });

  describe("dpg customization with model model", () => {
    xit("should get model", async () => {
      const result = await client
        .path("/resilency/devdriven/customization/model/{mode}", "model")
        .get();
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "model");
    });

    xit("should post model", async () => {
      const result = await client
        .path("/resilency/devdriven/customization/model/{mode}", "model")
        .post({ body: { hello: "world!" } });
      assert.equal(result.status, "200");
      assert.equal(result.body.received, "model");
    });
  });
});
