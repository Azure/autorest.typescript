import BodyOptionalityClientFactory, {
  BodyOptionalityClient
} from "./generated/parameters/body-optionality/src/index.js";
import { assert } from "chai";
describe("BodyOptionalityClient Rest Client", () => {
  let client: BodyOptionalityClient;

  beforeEach(() => {
    client = BodyOptionalityClientFactory({ allowInsecureConnection: true });
  });

  it("should support required-explicit body", async () => {
    const result = await client
      .path("/parameters/body-optionality/required-explicit")
      .post({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should support optional-explicit body", async () => {
    const result = await client
      .path("/parameters/body-optionality/optional-explicit/set")
      .post({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should support optional-explicit omitted body", async () => {
    const result = await client
      .path("/parameters/body-optionality/optional-explicit/omit")
      .post();
    assert.strictEqual(result.status, "204");
  });

  it("should support required-implicit body", async () => {
    const result = await client
      .path("/parameters/body-optionality/required-implicit")
      .post({
        body: {
          name: "foo"
        },
        contentType: "application/json"
      });
    assert.strictEqual(result.status, "204");
  });
});
