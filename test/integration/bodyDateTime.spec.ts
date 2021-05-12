import { BodyDateTimeClient } from "./generated/bodyDateTime/src";
import { expect } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("BodyDateTime Client", function() {
  let testClient: BodyDateTimeClient;

  beforeEach(() => {
    testClient = new BodyDateTimeClient({ allowInsecureConnection: true });
  });

  it("should get null datetime", async () => {
    const { body: date } = await testClient.datetime.getNull();
    expect(date).to.equal(undefined);
  });

  it("should get invalid datetime", async () => {
    const { body: date } = await testClient.datetime.getInvalid();
    expect(isNaN(date.valueOf())).to.equal(true);
  });

  it("should get uppercase UTC max date time", async () => {
    const {
      body: date
    } = await testClient.datetime.getUtcUppercaseMaxDateTime();

    expect(date.getUTCFullYear()).to.equal(9999);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(23);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
    expect(date.getUTCMilliseconds()).to.equal(999);
  });

  it("should get lowercase UTC min date time", async () => {
    const {
      body: date
    } = await testClient.datetime.getUtcLowercaseMaxDateTime();

    expect(date.getUTCFullYear()).to.equal(9999);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(23);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
    expect(date.getUTCMilliseconds()).to.equal(999);
  });

  it("should get UTC min datetime", async () => {
    const { body: date } = await testClient.datetime.getUtcMinDateTime();

    expect(date.getUTCFullYear()).to.equal(1);
    expect(date.getUTCMonth()).to.equal(0);
    expect(date.getUTCDate()).to.equal(1);
    expect(date.getUTCHours()).to.equal(0);
    expect(date.getUTCMinutes()).to.equal(0);
    expect(date.getUTCSeconds()).to.equal(0);
    expect(date.getUTCMilliseconds()).to.equal(0);
  });

  it("should get local negative offset Min DateTime value", async () => {
    const {
      body: date
    } = await testClient.datetime.getLocalNegativeOffsetMinDateTime();

    expect(date.toISOString()).to.equal("0001-01-01T14:00:00.000Z");
  });

  it("should get local no offset Min DateTime value", async () => {
    const {
      body: date
    } = await testClient.datetime.getLocalNoOffsetMinDateTime();

    expect(date.toISOString()).to.equal(
      new Date("0001-01-01T00:00:00").toISOString()
    );
  });

  it("should get local positive offset Min DateTime value", async () => {
    const {
      body: date
    } = await testClient.datetime.getLocalPositiveOffsetMinDateTime();

    expect(date.getUTCFullYear()).to.equal(0);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(10);
    expect(date.getUTCMinutes()).to.equal(0);
    expect(date.getUTCSeconds()).to.equal(0);
    expect(date.getUTCMilliseconds()).to.equal(0);
  });

  it("should get local negative offset lowercase Max DateTime", async () => {
    const {
      body: date
    } = await testClient.datetime.getLocalNegativeOffsetLowercaseMaxDateTime();

    expect(date.getUTCFullYear()).to.equal(10000);
    expect(date.getUTCMonth()).to.equal(0);
    expect(date.getUTCDate()).to.equal(1);
    expect(date.getUTCHours()).to.equal(13);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
    expect(date.getUTCMilliseconds()).to.equal(999);
  });

  it("should get local negative offset uppercase Max DateTime", async () => {
    const {
      body: date
    } = await testClient.datetime.getLocalNegativeOffsetUppercaseMaxDateTime();

    expect(date.getUTCFullYear()).to.equal(10000);
    expect(date.getUTCMonth()).to.equal(0);
    expect(date.getUTCDate()).to.equal(1);
    expect(date.getUTCHours()).to.equal(13);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
    expect(date.getUTCMilliseconds()).to.equal(999);
  });

  it("should get local positive offset lowercase Max DateTime", async () => {
    const {
      body: date
    } = await testClient.datetime.getLocalPositiveOffsetLowercaseMaxDateTime();

    expect(date.getUTCFullYear()).to.equal(9999);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(9);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
    expect(date.getUTCMilliseconds()).to.equal(999);
  });

  it("should get local positive offset uppercase Max DateTime", async () => {
    const {
      body: date
    } = await testClient.datetime.getLocalPositiveOffsetUppercaseMaxDateTime();

    expect(date).to.deep.equal(new Date("9999-12-31T23:59:59.9999999+14:00"));
    expect(date.getUTCFullYear()).to.equal(9999);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(9);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
    expect(date.getUTCMilliseconds()).to.equal(999);
  });

  it("should get overflow", async () => {
    const { body: date } = await testClient.datetime.getOverflow();
    expect(date.getUTCFullYear()).to.equal(10000);
    expect(date.getUTCMonth()).to.equal(0);
    expect(date.getUTCDate()).to.equal(1);
    expect(date.getUTCHours()).to.equal(13);
    expect(date.getUTCMinutes()).to.equal(59);
    expect(date.getUTCSeconds()).to.equal(59);
    expect(date.getUTCMilliseconds()).to.equal(999);
  });

  it("should get underflow", async () => {
    const { body: date } = await testClient.datetime.getUnderflow();
    expect(isNaN(date.valueOf())).to.equal(true);
  });

  it("should put UTC min date time", async () => {
    await testClient.datetime.putUtcMinDateTime(
      new Date("0001-01-01T00:00:00Z"),
      responseStatusChecker
    );
  });

  it("should put UTC max date time", async () => {
    await testClient.datetime.putUtcMaxDateTime(
      new Date("9999-12-31T23:59:59.9999999Z"),
      responseStatusChecker
    );
  });

  it("should put local negative and positive offset min DateTime", async function() {
    await testClient.datetime.putLocalNegativeOffsetMinDateTime(
      new Date("0001-01-01T00:00:00-14:00"),
      responseStatusChecker
    );
  });

  it("should put local negative and positive offset min DateTime", async function() {
    await testClient.datetime.putLocalPositiveOffsetMinDateTime(
      new Date("0001-01-01T00:00:00+14:00"),
      responseStatusChecker
    );
  });

  it("should put local negative offset max DateTime", async () => {
    await testClient.datetime.putLocalNegativeOffsetMaxDateTime(
      new Date("9999-12-31T23:59:59.9999999-14:00"),
      responseStatusChecker
    );
  });

  it("should put local positive offset max Date", async function() {
    await testClient.datetime.putLocalPositiveOffsetMaxDateTime(
      new Date("9999-12-31t23:59:59.9999999+14:00"),
      responseStatusChecker
    );
  });
});
