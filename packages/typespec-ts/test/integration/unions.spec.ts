import UnionsClientFactory, {
  CatOutput,
  DogOutput,
  UnionsClient
} from "./generated/type/union/src/index.js";
import { assert } from "chai";
describe("UnionsClient Rest Client", () => {
  let client: UnionsClient;

  function isCatOutput(
    pet: CatOutput | DogOutput | "a" | number | boolean
  ): pet is CatOutput {
    return (pet as CatOutput)?.name !== undefined;
  }

  beforeEach(() => {
    client = UnionsClientFactory({ allowInsecureConnection: true });
  });

  it("should get strings only union", async () => {
    const result = await client.path("/type/union/strings-only").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "b");
  });

  it("should post strings only union", async () => {
    const result = await client.path("/type/union/strings-only").post({
      body: {
        prop: "b"
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get strings extensible union", async () => {
    const result = await client.path("/type/union/string-extensible").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "custom");
  });

  it("should post strings extensible union", async () => {
    const result = await client.path("/type/union/string-extensible").post({
      body: {
        prop: "custom"
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get strings extensible named union", async () => {
    const result = await client
      .path("/type/union/string-extensible-named")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "custom");
  });

  it("should post strings extensible named union", async () => {
    const result = await client
      .path("/type/union/string-extensible-named")
      .post({
        body: {
          prop: "custom"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get ints only union", async () => {
    const result = await client.path("/type/union/ints-only").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, 2);
  });

  it("should post ints only union", async () => {
    const result = await client.path("/type/union/ints-only").post({
      body: {
        prop: 2
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get floats only union", async () => {
    const result = await client.path("/type/union/floats-only").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, 2.2);
  });

  it("should post floats only union", async () => {
    const result = await client.path("/type/union/floats-only").post({
      body: {
        prop: 2.2
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get models only union", async () => {
    const result = await client.path("/type/union/models-only").get();
    assert.strictEqual(result.status, "200");
    if (isCatOutput(result.body.prop)) {
      assert.strictEqual(result.body.prop.name, "test");
    }
  });

  it("should post models only union", async () => {
    const result = await client.path("/type/union/models-only").post({
      body: {
        prop: { name: "test" }
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get enums only union", async () => {
    const result = await client.path("/type/union/enums-only").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop.lr, "right");
    assert.strictEqual(result.body.prop.ud, "up");
  });

  it("should post enums only union", async () => {
    const result = await client.path("/type/union/enums-only").post({
      body: {
        prop: {
          lr: "right",
          ud: "up"
        }
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get string and array union", async () => {
    const result = await client.path("/type/union/string-and-array").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop.string, "test");
    assert.strictEqual(result.body.prop.array[0], "test1");
    assert.strictEqual(result.body.prop.array[1], "test2");
  });

  it("should post string and array union", async () => {
    const result = await client.path("/type/union/string-and-array").post({
      body: {
        prop: {
          string: "test",
          array: ["test1", "test2"]
        }
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get mixed literals union", async () => {
    const result = await client.path("/type/union/mixed-literals").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop.stringLiteral, "a");
    assert.strictEqual(result.body.prop.intLiteral, 2);
    assert.strictEqual(result.body.prop.floatLiteral, 3.3);
    assert.strictEqual(result.body.prop.booleanLiteral, true);
  });

  it("should post mixed literals union", async () => {
    const result = await client.path("/type/union/mixed-literals").post({
      body: {
        prop: {
          stringLiteral: "a",
          intLiteral: 2,
          floatLiteral: 3.3,
          booleanLiteral: true
        }
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get mixed types union", async () => {
    const result = await client.path("/type/union/mixed-types").get();
    assert.strictEqual(result.status, "200");
    if (isCatOutput(result.body.prop.model)) {
      assert.strictEqual(result.body.prop.model.name, "test");
      assert.strictEqual(result.body.prop.literal, "a");
      assert.strictEqual(result.body.prop.int, 2);
      assert.strictEqual(result.body.prop.boolean, true);
    }
  });

  it("should post mixed types union", async () => {
    const result = await client.path("/type/union/mixed-types").post({
      body: {
        prop: {
          model: {
            name: "test"
          },
          literal: "a",
          int: 2,
          boolean: true,
          array: [
            {
              name: "test"
            },
            "a",
            2,
            true
          ]
        }
      }
    });
    assert.strictEqual(result.status, "204");
  });
});
