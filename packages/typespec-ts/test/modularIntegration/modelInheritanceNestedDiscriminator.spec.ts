import {
  GoblinShark,
  NestedDiscriminatorClient,
  Salmon,
  Shark
} from "./generated/type/model/inheritance/nested-discriminator/src/index.js";
import { assert } from "chai";

describe("NestedDiscriminatorClient Rest Client", () => {
  let client: NestedDiscriminatorClient;

  beforeEach(() => {
    client = new NestedDiscriminatorClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  const validBody: GoblinShark = {
    age: 1,
    kind: "shark",
    sharktype: "goblin"
  };
  it("should get valid", async () => {
    try {
      const result = await client.getModel();
      assert.strictEqual(result.age, 1);
      assert.strictEqual(result.kind, "shark");
      assert.strictEqual((result as Shark).sharktype, "goblin");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put valid", async () => {
    try {
      const result = await client.putModel(validBody);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  const validRecursiveBody: Salmon = {
    age: 1,
    kind: "salmon",
    partner: {
      age: 2,
      kind: "shark",
      sharktype: "saw"
    },
    friends: [
      {
        age: 2,
        kind: "salmon",
        partner: {
          age: 3,
          kind: "salmon"
        },
        hate: {
          key1: {
            age: 4,
            kind: "salmon"
          },
          key2: {
            age: 2,
            kind: "shark",
            sharktype: "goblin"
          }
        }
      },
      {
        age: 3,
        kind: "shark",
        sharktype: "goblin"
      }
    ],
    hate: {
      key3: {
        age: 3,
        kind: "shark",
        sharktype: "saw"
      },
      key4: {
        age: 2,
        kind: "salmon",
        friends: [
          {
            age: 1,
            kind: "salmon"
          },
          {
            age: 4,
            kind: "shark",
            sharktype: "goblin"
          }
        ]
      }
    }
  };
  it("should get recursive body", async () => {
    try {
      const result = await client.getRecursiveModel();
      assert.strictEqual(
        JSON.stringify(result, Object.keys(result).sort()),
        JSON.stringify(validRecursiveBody, Object.keys(validRecursiveBody).sort())
      );
      if (result.kind === "salmon") {
        assert.strictEqual(
          (result as Salmon).partner?.kind,
          validRecursiveBody.partner?.kind
        );
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put recursive body", async () => {
    try {
      const result = await client.putRecursiveModel(validRecursiveBody);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get missing discriminator body", async () => {
    try {
      const result = await client.getMissingDiscriminator();
      assert.strictEqual(result.age, 1);
      assert.isUndefined(result.kind);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get wrong discriminator body", async () => {
    try {
      const result = await client.getWrongDiscriminator();
      assert.strictEqual(result.age, 1);
      assert.strictEqual(result.kind, "wrongKind");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
