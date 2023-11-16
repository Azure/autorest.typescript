import { assert } from "chai";
import AzureCoreClientFactory, {
  AzureCoreClient
} from "./generated/azure/clientGeneratorCore/access/src/index.js";
import { matrix } from "../util/matrix.js";
describe("Scalar Projected Client", () => {
  let client: AzureCoreClient;

  interface UrlDetail {
    type: string;
    value: string;
  }

  const testedUrl: UrlDetail[] = [
    {
      type: "publicOperation",
      value: "noDecoratorInPublic"
    },
    {
      type: "publicOperation",
      value: "publicDecoratorInPublic"
    },
    {
      type: "internalOperation",
      value: "noDecoratorInInternal"
    },
    {
      type: "internalOperation",
      value: "internalDecoratorInInternal"
    },
    {
      type: "internalOperation",
      value: "publicDecoratorInInternal"
    },
    {
      type: "sharedModelInOperation",
      value: "public"
    },
    { type: "sharedModelInOperation", value: "internal" }
  ];

  beforeEach(() => {
    client = AzureCoreClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  matrix([testedUrl], async (params: UrlDetail) => {
    it(`should access ${params.value} in ${params.type}`, async () => {
      try {
        const result = await client
          .path(
            `/azure/client-generator-core/access/${params.type}/${params.value}` as any
          )
          .get({ queryParameters: { name: "myname" } });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(
          JSON.stringify(result.body),
          JSON.stringify({ name: "myname" })
        );
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  it(`should access relative model in operation`, async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/relativeModelInOperation/operation"
        )
        .get({ queryParameters: { name: "Madge", inner: { name: "Madge" } } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(
        JSON.stringify(result.body),
        JSON.stringify({ name: "Madge", inner: { name: "Madge" } })
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should access relative model in operation`, async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/relativeModelInOperation/discriminator"
        )
        .get({ queryParameters: { name: "Madge", kind: "real" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(
        JSON.stringify(result.body),
        JSON.stringify({ name: "Madge", kind: "real" })
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
