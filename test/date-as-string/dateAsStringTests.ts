import * as assert from "assert";
import { AutoRestDateTestService } from "./generated/BodyDate/autoRestDateTestService";

const testClient = new AutoRestDateTestService();
describe("--model-date-as-string=false", function () {
  it("should get a string date", async function () {
    const date = await testClient.dateModel.getMaxDate();
    assert.strictEqual(typeof date, "string");

    const reallyADate = new Date(date);
    assert.strictEqual(isNaN(reallyADate.valueOf()), false);
  });

  it("should put a string date", async function () {
    await testClient.dateModel.putMaxDate("9999-12-31");
  });
});
