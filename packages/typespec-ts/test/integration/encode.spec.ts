import { assert } from "chai";
import EncodeDurationClientFactory, {
  DurationClient
} from "./generated/encode/src/index.js";
import { matrix } from "../util/matrix.js";
describe("EncodeDurationClient Rest Client", () => {
  let client: DurationClient;

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

  matrix([durationData], async (params: TypeDetail) => {
    it(`should post ${params.type} property`, async () => {
      try {
        const result = await (
          client.path(`/encode/duration/property/${params.type}` as any) as any
        ).post({
          body: {
            value: params.defaultValue as any
          }
        });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, params.defaultValue);
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
