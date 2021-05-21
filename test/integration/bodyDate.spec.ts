import { BodyDateClient } from "./generated/bodyDate/src";
import { expect } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("BodyDateClient", function() {
  let testClient: BodyDateClient;

  beforeEach(() => {
    testClient = new BodyDateClient({ allowInsecureConnection: true });
  });

  it("should get min date", async () => {
    const { body: date } = await testClient.date.getMinDate();
    expect(date.getUTCFullYear()).to.equal(1);
    expect(date.getUTCMonth()).to.equal(0);
    expect(date.getUTCDate()).to.equal(1);
    expect(date.getUTCHours()).to.equal(0);
    expect(date.getUTCMinutes()).to.equal(0);
    expect(date.getUTCSeconds()).to.equal(0);
    expect(date.getUTCMilliseconds()).to.equal(0);
  });

  it("should get max date", async () => {
    const { body: date } = await testClient.date.getMaxDate();
    expect(date.getUTCFullYear()).to.equal(9999);
    expect(date.getUTCMonth()).to.equal(11);
    expect(date.getUTCDate()).to.equal(31);
    expect(date.getUTCHours()).to.equal(0);
    expect(date.getUTCMinutes()).to.equal(0);
    expect(date.getUTCSeconds()).to.equal(0);
    expect(date.getUTCMilliseconds()).to.equal(0);
  });

  it("should handle overflow date", async () => {
    const { body: date } = await testClient.date.getOverflowDate();
    expect(isNaN(date.valueOf())).to.equal(true);
  });

  it("should handle undeflow date", async () => {
    const { body: date } = await testClient.date.getUnderflowDate();
    expect(isNaN(date.valueOf())).to.equal(true);
  });

  it("should get a null value", async () => {
    const { body: date } = await testClient.date.getNull();
    expect(date).to.equal(undefined);
  });

  it("should get an invalid value", async () => {
    const { body: date } = await testClient.date.getInvalidDate();
    expect(isNaN(date.valueOf())).to.equal(true);
  });

  it("should put max date", async () => {
    const maxDate = new Date("9999-12-31");
    await testClient.date.putMaxDate(maxDate, responseStatusChecker);
  });

  it("should put min date", async () => {
    const minDate = new Date("0001-01-01");
    await testClient.date.putMinDate(minDate, responseStatusChecker);
  });
});
