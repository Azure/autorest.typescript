import NestedDiscriminatorClientFactory, {
  GoblinShark,
  NestedDiscriminatorClient,
  Salmon,
  SalmonOutput,
  SharkOutput
} from "./generated/type/model/inheritance/nested-discriminator/src/index.js";
import { assert } from "chai";

describe("NestedDiscriminatorClient Rest Client", () => {
  let client: NestedDiscriminatorClient;

  beforeEach(() => {
    client = NestedDiscriminatorClientFactory({
      endpoint: "http://localhost:3005",
      allowInsecureConnection: true
    });
  });

  const validBody: GoblinShark = {
    age: 1,
    kind: "shark",
    sharktype: "goblin"
  };
  it("should get valid", async () => {
    const result = await client
      .path("/type/model/inheritance/nested-discriminator/model")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.age, 1);
    if (result.body.kind === "shark") {
      assert.strictEqual((result.body as SharkOutput).sharktype, "goblin");
    }
  });

  it("should put valid", async () => {
    const result = await client
      .path("/type/model/inheritance/nested-discriminator/model")
      .put({
        body: validBody
      });
    assert.strictEqual(result.status, "204");
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
    const result = await client
      .path("/type/model/inheritance/nested-discriminator/recursivemodel")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(
      JSON.stringify(result.body),
      JSON.stringify(validRecursiveBody)
    );
    if (result.body.kind === "salmon") {
      assert.strictEqual(
        (result.body as SalmonOutput).partner?.kind,
        validRecursiveBody.partner?.kind
      );
    }
  });

  it("should put recursive body", async () => {
    const result = await client
      .path("/type/model/inheritance/nested-discriminator/recursivemodel")
      .put({
        body: validRecursiveBody
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get missing discriminator body", async () => {
    const result = await client
      .path(
        "/type/model/inheritance/nested-discriminator/missingdiscriminator"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.age, 1);
    assert.isUndefined(result.body.kind);
  });

  it("should get wrong discriminator body", async () => {
    const result = await client
      .path("/type/model/inheritance/nested-discriminator/wrongdiscriminator")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.age, 1);
    assert.strictEqual(result.body.kind, "wrongKind");
  });
});
