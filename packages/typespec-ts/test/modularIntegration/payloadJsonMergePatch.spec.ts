import { assert } from "chai";
import { JsonMergePatchClient } from "./generated/payload/json-merge-patch/src/index.js";

describe("Single Server Path Client", () => {
  let client: JsonMergePatchClient;

  beforeEach(() => {
    client = new JsonMergePatchClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });
  const expectedCreateBody = {
    name: "Madge",
    description: "desc",
    map: {
      key: {
        name: "InnerMadge",
        description: "innerDesc",
      },
    },
    array: [
      {
        name: "InnerMadge",
        description: "innerDesc",
      },
    ],
    intValue: 1,
    floatValue: 1.1,
    innerModel: {
      name: "InnerMadge",
      description: "innerDesc",
    },
    intArray: [1, 2, 3],
  };
  const expectedUpdateBody = {
    description: null,
    map: {
      key: {
        name: "InnerMadge",
        description: null,
      },
      key2: null,
    },
    array: null,
    intValue: null,
    floatValue: null,
    innerModel: null,
    intArray: null,
  };
  it.only("should create json merge patch resource", async () => {
    try {
      const result = await client.createResource(expectedCreateBody);
      console.log(result)
    //   assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.only("should update json merge patch resource", async () => {
    try {
      const result = await client.updateResource(expectedUpdateBody);
      console.log(result)
    //   assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.only("should create json merge patch optional resource", async () => {
    try {
      const result = await client.updateOptionalResource(expectedCreateBody);
      console.log(result)
    //   assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

