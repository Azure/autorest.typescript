import * as assert from "assert";
import { AutoRestDateTimeTestService } from "./generated/BodyDateTime/autoRestDateTimeTestService";
import { AutoRestDateTestService } from "./generated/BodyDate/autoRestDateTestService";
import { AutoRestRFC1123DateTimeTestService } from './generated/BodyDateTimeRfc1123/autoRestRFC1123DateTimeTestService';

const testClient = new AutoRestDateTimeTestService();
describe("--model-date-time-as-string=true", function () {
  it("should get a string date-time", async function () {
    const date = await testClient.datetime.getUtcMinDateTime();
    assert.strictEqual(typeof date, "string");

    const reallyADate = new Date(date);
    assert.strictEqual(isNaN(reallyADate.valueOf()), false);
  });

  it("should put a string date-time", async function () {
    await testClient.datetime.putUtcMinDateTime("9999-12-31");
  });

  it('should get a Date for "format": "date"', async function () {
    const dateClient = new AutoRestDateTestService();
    const date = await dateClient.dateModel.getMinDate();
    assert(date instanceof Date);
  });

  it('should get a Date for "format": "date-time-rfc1123"', async function () {
    const dateClient = new AutoRestRFC1123DateTimeTestService();
    const date = await dateClient.datetimerfc1123.getUtcMinDateTime();
    assert(date instanceof Date);
  });
});
