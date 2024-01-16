import {
  DaysOfWeekEnum,
  FixedClient
} from "./generated/enums/fixed/generated/src/index.js";
import { assert } from "chai";

describe.only("FixedEnums Rest Client", () => {
  let client: FixedClient;
  beforeEach(() => {
    client = new FixedClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get known value", async () => {
    try {
      const result = await client.getKnownValue();
      assert.strictEqual(result, "Monday");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put known value", async () => {
    try {
      const result = await client.putKnownValue(
        JSON.stringify("Monday") as DaysOfWeekEnum
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put unknown value", async () => {
    try {
      await client.putUnknownValue(JSON.stringify("Weekend") as DaysOfWeekEnum);
      assert.fail("Expected an error");
    } catch (err) {
      assert.isUndefined(err);
    }
  });
});
