import {
  UserAgentCoreV1Client,
  GroupGetSampleResourceGroupResponse as GroupGetSampleResourceGroupResponseV1
} from "./generated/useragentcorev1/src";

import {
  UserAgentCoreV2Client,
  GroupGetSampleResourceGroupResponse as GroupGetSampleResourceGroupResponseV2
} from "./generated/useragentcorev2/src";

import { assert } from "chai";

describe("Integration tests for User Agents", () => {
  it("should send correct user agent string with no custom string for core v1", async () => {
    const subscriptionId: string = "sampleSubscriptionId";
    let client = new UserAgentCoreV1Client(subscriptionId);
    const result: GroupGetSampleResourceGroupResponseV1 = await client.group.getSampleResourceGroup(
      "testgroup101"
    );

    const array = result._response.request.headers
      .get("user-agent")!
      .match(
        /useragent-corev1\/1\.0\.0-preview1 core-http\/.* Node\/v.* OS\/.*/g
      );

    assert.equal(array!.length, 1, "Unexpected User Agent Value");
  });

  it("should send correct user agent string with custom string for core v1", async () => {
    const subscriptionId: string = "sampleSubscriptionId";
    let client = new UserAgentCoreV1Client(subscriptionId, {
      userAgent: "CustomUserAgentPrefix"
    });
    const result: GroupGetSampleResourceGroupResponseV1 = await client.group.getSampleResourceGroup(
      "testgroup101"
    );

    const array = result._response.request.headers
      .get("user-agent")!
      .match(
        /CustomUserAgentPrefix useragent-corev1\/1\.0\.0-preview1 core-http\/.* Node\/v.* OS\/.*/g
      );

    assert.equal(array!.length, 1, "Unexpected User Agent Value");
  });

  it("should send correct user agent string with no custom string for core v2", async () => {
    const subscriptionId: string = "sampleSubscriptionId";
    let client = new UserAgentCoreV2Client(subscriptionId, {
      allowInsecureConnection: true
    });
    const result: GroupGetSampleResourceGroupResponseV2 = await client.group.getSampleResourceGroup(
      "testgroup101",
      {
        onResponse: (response: any) => {
          const array = response.request.headers
            .get("user-agent")!
            .match(
              /useragent-corev2\/1\.0\.0-preview1 core-rest-pipeline\/.* Node\/v.* OS\/.*/g
            );

          assert.equal(array!.length, 1, "Unexpected User Agent Value");
        }
      }
    );
  });

  it("should send correct user agent string with custom string for core v2", async () => {
    const subscriptionId: string = "sampleSubscriptionId";
    let client = new UserAgentCoreV2Client(subscriptionId, {
      allowInsecureConnection: true,
      userAgentOptions: {
        userAgentPrefix: "CustomUserAgentPrefix"
      }
    });
    const result: GroupGetSampleResourceGroupResponseV2 = await client.group.getSampleResourceGroup(
      "testgroup101",
      {
        onResponse: (response: any) => {
          const array = response.request.headers
            .get("user-agent")!
            .match(
              /CustomUserAgentPrefix useragent-corev2\/1\.0\.0-preview1 core-rest-pipeline\/.* Node\/v.* OS\/.*/g
            );

          assert.equal(array!.length, 1, "Unexpected User Agent Value");
        }
      }
    );
  });
});
