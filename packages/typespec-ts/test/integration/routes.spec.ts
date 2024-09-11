import RoutesClientFactory, {
  RoutesClient
} from "./generated/routes/src/index.js";
import { assert } from "chai";
describe.only("RoutesClient Rest Client", () => {
  let client: RoutesClient;

  beforeEach(() => {
    client = RoutesClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should have Routes InInterface", async () => {
    const result = await client.path("/routes/fixed").get();
    console.log(result);
    assert.strictEqual(result.status, "204");
  });

  it("should have Routes fixed", async () => {
    const result = await client.path("/routes/in-interface/fixed").get();
    console.log(result);
    assert.strictEqual(result.status, "204");
  });

  it("should have PathParameters templateOnly", async () => {
    const result = await client
      .path("/routes/path/template-only/{param}", "a")
      .get();
    console.log(result);
    assert.strictEqual(result.status, "204");
  });

  it("should have PathParameters explicit", async () => {
    const result = await client
      .path("/routes/path/explicit/{param}", "a")
      .get();
    console.log(result);
    assert.strictEqual(result.status, "204");
  });

  it("should have PathParameters annotationOnly", async () => {
    const result = await client
      .path("/routes/path/annotation-only/{param}", "a")
      .get();
    console.log(result);
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have PathParameters ReservedExpansion template", async () => {
    const result = await client
      .path("/routes/path/reserved-expansion/template/{param}", "foo/bar baz")
      .get();
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have PathParameters ReservedExpansion annotation", async () => {
    const result = await client
      .path("/routes/path/reserved-expansion/annotation/{param}", "foo/bar baz")
      .get();
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have PathParameters SimpleExpansion Standard primitive", async () => {
    const result = await client
      .path("/routes/path/simple/standard/primitive{param}", "a")
      .get();
    assert.strictEqual(result.status, "204");
  });

  //   it.skip("should have PathParameters SimpleExpansion Standard array", async () => {
  //     const result = await client
  //       .path("/routes/path/simple/standard/array{param}", "a,b")
  //       .get();
  //     assert.strictEqual(result.status, "204");
  //   });

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

  it("should have QueryParameters QueryExpansion Standard primitive", async () => {
    const result = await client
      .path("/routes/query/query-expansion/standard/primitive")
      .get({ queryParameters: { param: "a" } });
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters QueryExpansion Standard array", async () => {
    const result = await client
      .path("/routes/query/query-expansion/standard/array")
      .get({ queryParameters: { param: ["a", "b"] } });
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have QueryParameters QueryExpansion Standard record", async () => {
    const result = await client
      .path("/routes/query/query-expansion/standard/record")
      .get({ queryParameters: { param: { a: 1, b: 2 } } });
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters QueryExpansion Explode primitive", async () => {
    const result = await client
      .path("/routes/query/query-expansion/explode/primitive")
      .get({ queryParameters: { param: "a" } });
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have QueryParameters QueryExpansion Explode array", async () => {
    const result = await client
      .path("/routes/query/query-expansion/explode/array")
      .get({ queryParameters: { param: ["a", "b"] } });
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have QueryParameters QueryExpansion Explode record", async () => {
    const result = await client
      .path("/routes/query/query-expansion/explode/record")
      .get({ queryParameters: { param: { a: 1, b: 2 } } });
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters QueryContinuation Standard primitive", async () => {
    const result = await client
      .path("/routes/query/query-continuation/standard/primitive?fixed=true")
      .get({ queryParameters: { param: "a" } });
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters QueryContinuation Standard array", async () => {
    const result = await client
      .path("/routes/query/query-continuation/standard/array?fixed=true")
      .get({ queryParameters: { param: ["a", "b"] } });
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have QueryParameters QueryContinuation Standard record", async () => {
    const result = await client
      .path("/routes/query/query-continuation/standard/record?fixed=true")
      .get({ queryParameters: { param: { a: 1, b: 2 } } });
    assert.strictEqual(result.status, "204");
  });

  it("should have QueryParameters QueryContinuation Explode primitive", async () => {
    const result = await client
      .path("/routes/query/query-continuation/explode/primitive?fixed=true")
      .get({ queryParameters: { param: "a" } });
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have QueryParameters QueryContinuation Explode array", async () => {
    const result = await client
      .path("/routes/query/query-continuation/explode/array?fixed=true")
      .get({ queryParameters: { param: ["a", "b"] } });
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have QueryParameters QueryContinuation Explode record", async () => {
    const result = await client
      .path("/routes/query/query-continuation/explode/record?fixed=true")
      .get({ queryParameters: { param: { a: 1, b: 2 } } });
    assert.strictEqual(result.status, "204");
  });
});
