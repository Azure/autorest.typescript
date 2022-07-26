import { DeviceProvisioningClient } from "./generated/deviceprovisioningservice/src";
import { assert } from "chai";

describe("Device Provisioning Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = new DeviceProvisioningClient("subscriptionId");
    assert.isDefined(client);
  });
});
