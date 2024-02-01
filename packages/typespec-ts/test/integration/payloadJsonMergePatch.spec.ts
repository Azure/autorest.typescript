import { assert } from "chai";
import JsonMergePatchClientFactory, {
    JsonMergePatchClient, ResourcePatch
} from "./generated/payload/json-merge-patch/src/index.js";

describe("Pageable Client", () => {
  let client: JsonMergePatchClient;

  beforeEach(() => {
    client = JsonMergePatchClientFactory({
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
  const expectedUpdateBody: Partial<ResourcePatch> = {
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
  it("should create json merge patch resource", async () => {
    try {
      const result = await client
        .path("/json-merge-patch/create/resource")
        .put({body:expectedCreateBody});
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should update json merge patch resource", async () => {
    try {
      const result = await client
        .path("/json-merge-patch/update/resource")
        .patch({body:expectedUpdateBody});
      console.log(result)
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.only("should update json merge patch resource optional", async () => {
    try {
      const result = await client
        .path("/json-merge-patch/update/resource/optional")
        .patch({body:expectedUpdateBody});
      console.log(result)
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
