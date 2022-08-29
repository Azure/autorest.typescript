import { assert } from "chai";
import ResiliencyDevDrivenClientFactory, {
  ResiliencyDevDrivenClient
} from "./generated/resiliency/devDriven/src/index.js";
describe("HelloClient Rest Client", () => {
  let client: ResiliencyDevDrivenClient;

  beforeEach(() => {
    client = ResiliencyDevDrivenClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should return 200", async () => {
    try {
      const pathFn = client.path("/customization/model/{mode}", "raw");

      const result = await pathFn.get({});

      // TODO: why the function isUnexpected is missing
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
