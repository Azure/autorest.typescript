import * as assert from "assert";
import { AutoRestDateTimeTestService } from "./generated/BodyDateTime/autoRestDateTimeTestService";

const testClient = new AutoRestDateTimeTestService();
describe("--model-date-time-as-string=false", function () {
  it("should get a string date-time", async function () {
    const date = await testClient.datetime.getUtcMinDateTime();
    assert.strictEqual(typeof date, "string");

    const reallyADate = new Date(date);
    assert.strictEqual(isNaN(reallyADate.valueOf()), false);
  });

  it("should put a string date-time", async function () {
    await testClient.datetime.putUtcMinDateTime("9999-12-31");
  });
});
