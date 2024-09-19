import RoutesClientFactory, {
  RoutesClient
} from "./generated/routes/src/index.js";
import { assert } from "chai";
describe("RoutesClient Rest Client", () => {
  let client: RoutesClient;

  beforeEach(() => {
    client = RoutesClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should have PathParameters templateOnly", async () => {
    const result = await client
      .path("/routes/path/template-only/{param}", "a")
      .get();
    assert.strictEqual(result.status, "204");
  });

  it("should have PathParameters explicit", async () => {
    const result = await client
      .path("/routes/path/explicit/{param}", "a")
      .get();
    assert.strictEqual(result.status, "204");
  });

  it("should have PathParameters annotationOnly", async () => {
    const result = await client
      .path("/routes/path/annotation-only/{param}", "a")
      .get();
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have PathParameters SimpleExpansion Standard primitive", async () => {
    const result = await client
      .path("/routes/path/simple/standard/primitive{param}", "a")
      .get();
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters templateOnly", async () => {
    const result = await client
      .path("/routes/query/template-only")
      .get({ queryParameters: { param: "a" } });
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters explicit", async () => {
    const result = await client
      .path("/routes/query/explicit")
      .get({ queryParameters: { param: "a" } });
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters annotationOnly", async () => {
    const result = await client
      .path("/routes/query/annotation-only")
      .get({ queryParameters: { param: "a" } });
    assert.strictEqual(result.status, "204");
  });
});
