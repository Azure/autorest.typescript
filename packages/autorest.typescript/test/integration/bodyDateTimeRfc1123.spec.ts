import { BodyDateTimeRfc1123Client } from "./generated/bodyDateTimeRfc1123/src";
import { expect } from "chai";
import { isNil } from "lodash";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("BodyDateTimeRfc1123Client", function() {
  let testClient: BodyDateTimeRfc1123Client;

  beforeEach(() => {
    testClient = new BodyDateTimeRfc1123Client({
      allowInsecureConnection: true
    });
  });

  it("should properly handle null value for DateTimeRfc1123", async () => {
    const { body: date } = await testClient.datetimerfc1123.getNull();
    expect(date).to.equal(undefined);
  });

  it("should properly handle invalid value for DateTimeRfc1123", async () => {
    const { body: date } = await testClient.datetimerfc1123.getInvalid();
    expect(isNaN(date.valueOf())).to.equal(true);
  });

  it("should get uppercase UTC max date time dateTimeRfc1123", async () => {
    const {
      body: date
    } = await testClient.datetimerfc1123.getUtcUppercaseMaxDateTime();

    expect(date.getUTCFullYear()).to.equal(9999);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(23);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
  });

  it("should get lower UTC max date time dateTimeRfc1123", async () => {
    const {
      body: date
    } = await testClient.datetimerfc1123.getUtcLowercaseMaxDateTime();

    expect(date.getUTCFullYear()).to.equal(9999);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(23);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
  });

  it("should get UTC min dateTimeRfc1123 value", async () => {
    const { body: date } = await testClient.datetimerfc1123.getUtcMinDateTime();

    // Parsing the minimum date 'Mon, 01 Jan 0001 00:00:00 GMT' doesn't
    // work properly in nodejs, so we'll just test that the result exists
    expect(isNil(date)).to.equal(false);
  });

  it("should get overflow", async () => {
    const { body: date } = await testClient.datetimerfc1123.getOverflow();
    expect(date.getUTCFullYear()).to.equal(10000);
    expect(date.getUTCMonth()).to.equal(0);
    expect(date.getUTCDate()).to.equal(1);
    expect(date.getUTCHours()).to.equal(0);
    expect(date.getUTCMinutes()).to.equal(0);
    expect(date.getUTCSeconds()).to.equal(0);
  });

  it("should get underflow", async () => {
    const { body: date } = await testClient.datetimerfc1123.getUnderflow();
    expect(isNaN(date.valueOf())).to.equal(true);
  });

  it("should put UTC min dateTimeRfc1123", async () => {
    const result = await testClient.datetimerfc1123.putUtcMinDateTime(
      new Date("Mon, 01 Jan 0001 00:00:00 GMT"),
      responseStatusChecker
    );
  });

  it("should put UTC max dateTimeRfc1123", async () => {
    const result = await testClient.datetimerfc1123.putUtcMaxDateTime(
      new Date("Fri, 31 Dec 9999 23:59:59 GMT"),
      responseStatusChecker
    );
  });
});
