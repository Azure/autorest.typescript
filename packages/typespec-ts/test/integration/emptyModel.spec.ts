import { assert } from "chai";
import TypeModelEmptyClientFactory, {
  EmptyClient
} from "./generated/type/model/empty/src/index.js";
describe("TypeModelEmptyClient Rest Client", () => {
  let client: EmptyClient;

  beforeEach(() => {
    client = TypeModelEmptyClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it(`should put empty model`, async () => {
    const result = await client.path("/type/model/empty/alone").put({
      body: {}
    });
    assert.strictEqual(result.status, "204");
  });

  it(`should get empty model`, async () => {
    const result = await client.path("/type/model/empty/alone").get();
    assert.strictEqual(result.status, "200");
    assert.isEmpty(result.body);
  });

  it(`should post round-trip empty model`, async () => {
    const result = await client.path("/type/model/empty/round-trip").post({
      body: {}
    });
    assert.strictEqual(result.status, "200");
    assert.isEmpty(result.body);
  });
});
