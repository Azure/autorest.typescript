import TypeModelInheritanceClientFactory, {
  TypeModelInheritanceClient,
  Salmon,
  SharkOutput
} from "./generated/models/inheritance/src/index.js";
import { assert } from "chai";

describe("ModelsInheritance Rest Client", () => {
  let client: TypeModelInheritanceClient;

  beforeEach(() => {
    client = TypeModelInheritanceClientFactory({
      allowInsecureConnection: true
    });
  });

  const validBody = { name: "abc", age: 32, smart: true };
  it("should get valid", async () => {
    try {
      const result = await client.path("/type/model/inheritance/valid").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.age, 32);
      assert.strictEqual(result.body.name, "abc");
      assert.strictEqual(result.body.smart, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put valid", async () => {
    try {
      const result = await client.path("/type/model/inheritance/valid").put({
        body: validBody
      });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.age, 32);
      assert.strictEqual(result.body.name, "abc");
      assert.strictEqual(result.body.smart, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post valid", async () => {
    try {
      const result = await client.path("/type/model/inheritance/valid").post({
        body: validBody
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get polymorphic body", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/discriminated/model")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.age, 1);
      assert.strictEqual(result.body.kind, "shark");
      assert.strictEqual((result.body as SharkOutput).sharktype, "goblin");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put polymorphic body", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/discriminated/model")
        .put({
          body: {
            age: 1,
            kind: "shark",
            sharktype: "goblin"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  const validRecursiveBody = {
    age: 1,
    kind: "salmon",
    partner: {
      age: 2,
      kind: "shark",
      sharktype: "saw",
    },
    friends: [
      {
        age: 2,
        kind: "salmon",
        partner: {
          age: 3,
          kind: "salmon",
        },
        hate: {
          key1: {
            age: 4,
            kind: "salmon",
          },
          key2: {
            age: 2,
            kind: "shark",
            sharktype: "goblin",
          },
        },
      },
      {
        age: 3,
        kind: "shark",
        sharktype: "goblin",
      },
    ],
    hate: {
      key3: {
        age: 3,
        kind: "shark",
        sharktype: "saw",
      },
      key4: {
        age: 2,
        kind: "salmon",
        friends: [
          {
            age: 1,
            kind: "salmon",
          },
          {
            age: 4,
            kind: "shark",
            sharktype: "goblin",
          },
        ],
      },
    },
  };
  it("should get recursive body", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/discriminated/recursivemodel")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(JSON.stringify(result.body), JSON.stringify(validRecursiveBody));
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put recursive body", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/discriminated/recursivemodel")
        .put({
            body: validRecursiveBody as Salmon
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  
  it("should get missing discriminator body", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/discriminated/missingdiscriminator")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.age, 1);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get wrong discriminator body", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/discriminated/wrongdiscriminator")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.age, 1);
      assert.strictEqual(result.body.kind, "wrongKind")
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
