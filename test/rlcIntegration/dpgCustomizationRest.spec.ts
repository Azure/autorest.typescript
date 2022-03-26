import { assert } from "chai";
import DPGCustomization, {
  DPGCustomizationClient,
  getLongRunningPoller,
  paginate
} from "./generated/dpgCustomization/src";

describe("DPGCustomization Client", () => {
  let client: DPGCustomizationClient;

  beforeEach("create client", () => {
    client = DPGCustomization({ allowInsecureConnection: true });
  });

  describe("dpg customization with raw model", () => {
    it("should get model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "raw")
        .get();
      assert.equal(result.status, "200");
    });

    it("should post model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "raw")
        .post({ body: { hello: "world!" } });
      assert.equal(result.status, "200");
    });

    it("should get pages", async () => {
      const initialResponse = await client
        .path("/customization/paging/{mode}", "raw")
        .get();
      assert.equal(initialResponse.status, "200");
      const iterators = paginate(client, initialResponse);
      const result = [];
      for await (const item of iterators) {
        result.push(item);
      }
      assert.lengthOf(result, 2);
    });

    it("should work on long running put", async () => {
      const initialResponse = await client
        .path("/customization/lro/{mode}", "raw")
        .put();
      const poller = getLongRunningPoller(client, initialResponse);
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });
  });
  describe("dpg customization with model model", () => {
    it("should get model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "model")
        .get();
      assert.equal(result.status, "200");
    });

    it("should post model", async () => {
      const result = await client
        .path("/customization/model/{mode}", "model")
        .post({ body: { hello: "world!" } });
      assert.equal(result.status, "200");
    });

    it("should get pages", async () => {
      const initialResponse = await client
        .path("/customization/paging/{mode}", "model")
        .get();
      assert.equal(initialResponse.status, "200");
      const iterators = paginate(client, initialResponse);
      const result = [];
      for await (const item of iterators) {
        result.push(item);
      }
      assert.lengthOf(result, 2);
    });

    it("should work on long running put", async () => {
      const initialResponse = await client
        .path("/customization/lro/{mode}", "model")
        .put();
      const poller = getLongRunningPoller(client, initialResponse);
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
    });
  });
});
