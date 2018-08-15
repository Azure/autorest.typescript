import { AutoRestComplexTestService } from "./generated/BodyComplex/autoRestComplexTestService";
import { RestError } from 'ms-rest-js';
import { AutoRestSwaggerBATXMLService } from './generated/Xml/autoRestSwaggerBATXMLService';

describe("--client-side-validation=false", function () {
  it("should not perform client-side validation", async function () {
    try {
      const client = new AutoRestComplexTestService();
      await client.primitive.putDate({ field: "not-a-date" as any });
      throw new Error("operation did not throw an exception");
    } catch (err) {
      (err as RestError).response.status.should.equal(400);
    }
  });

  it("should not perform client-side validation for XML clients", async function () {
    try {
      const client = new AutoRestSwaggerBATXMLService();
      await client.xml.putSimple({ prop: 42 } as any, { timeout: 100 });
      throw new Error("operation did not throw an exception");
    } catch (err) {
      err.should.be.instanceof(RestError);
      (err as RestError).response.status.should.equal(400);
    }
  });
});
