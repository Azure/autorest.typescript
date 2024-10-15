import RoutesClientFactory, {
  RoutesClient,
  buildAllowReservedValue,
  buildUnexplodedFormStyleValue
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

  it("should have allowReserved: true", async () => {
    const result = await client
      .path("/routes/path/reserved-expansion/template/{param}", {
        value: "foo/bar baz",
        allowReserved: true
      })
      .get();
    assert.strictEqual(result.status, "204");
  });

  it("should have allowReserved: true with helper", async () => {
    const result = await client
      .path(
        "/routes/path/reserved-expansion/template/{param}",
        buildAllowReservedValue("foo/bar baz")
      )
      .get();
    assert.strictEqual(result.status, "204");
  });

  it.skip("should have explode: true array", async () => {
    const result = await client
      .path("/routes/query/query-expansion/explode/array")
      .get({
        queryParameters: {
          param: {
            value: ["a", "b"],
            explode: true,
            style: "form"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should have explode: true record", async () => {
    const result = await client
      .path("/routes/query/query-expansion/explode/record")
      .get({
        queryParameters: {
          param: {
            value: { a: 1, b: 2 },
            explode: true,
            style: "form"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should have explode: true primitive", async () => {
    const result = await client
      .path("/routes/query/query-expansion/explode/primitive")
      .get({
        queryParameters: {
          param: "a"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should have explode: false array", async () => {
    const result = await client
      .path("/routes/query/query-expansion/standard/array")
      .get({
        queryParameters: {
          param: ["a", "b"]
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should have explode: false record", async () => {
    const result = await client
      .path("/routes/query/query-expansion/standard/record")
      .get({
        queryParameters: {
          param: buildUnexplodedFormStyleValue({ a: 1, b: 2 })
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should have explode: false primitive", async () => {
    const result = await client
      .path("/routes/query/query-expansion/standard/primitive")
      .get({
        queryParameters: {
          param: "a"
        }
      });
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
