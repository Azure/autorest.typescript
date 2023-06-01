import { assert } from "chai";
import EncodeDurationClientFactory, {
  EncodeDurationClient
} from "./generated/encode/src/index.js";
import { matrix } from "../util/matrix.js";
describe("EncodeDurationClient Rest Client", () => {
  let client: EncodeDurationClient;

  beforeEach(() => {
    client = EncodeDurationClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  interface TypeDetail {
    type: "default" | "float-seconds" | "int32-seconds" | "iso8601";
    defaultValue: any;
  }

  const durationData: TypeDetail[] = [
    {
      type: "default",
      defaultValue: "P40D"
    },
    {
      type: "float-seconds",
      defaultValue: 35.621
    },
    {
      type: "int32-seconds",
      defaultValue: 36
    },
    {
      type: "iso8601",
      defaultValue: "P40D"
    }
  ];

  describe("EncodeDurationClient Rest Client", () => {
    it(`should post default property`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/property/default`)
          .post({
            body: {
              value: "P40D"
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "P40D");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  matrix([durationData], async (params: TypeDetail) => {
    it(`should get ${params.type} query`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/query/${params.type}` as any)
          .get({
            queryParameters: {
              input: params.defaultValue
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
