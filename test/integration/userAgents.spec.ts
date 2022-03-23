import {
  UserAgentCoreV1Client,
  GroupGetSampleResourceGroupResponse as GroupGetSampleResourceGroupResponseV1
} from "./generated/useragentcorev1/src";

import {
  UserAgentCoreV2Client,
  GroupGetSampleResourceGroupResponse as GroupGetSampleResourceGroupResponseV2
} from "./generated/useragentcorev2/src";

<<<<<<< HEAD
=======
import BodyStringRest, {
  BodyStringRestClient
} from "./generated/bodyStringRest/src";

>>>>>>> main
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
        /azsdk-js-useragent-corev1\/1\.0\.0-preview1 core-http\/.* Node\/v.* OS\/.*/g
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
        /CustomUserAgentPrefix azsdk-js-useragent-corev1\/1\.0\.0-preview1 core-http\/.* Node\/v.* OS\/.*/g
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
              /azsdk-js-useragent-corev2\/1\.0\.0-preview1 core-rest-pipeline\/.* Node\/v.* OS\/.*/g
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
              /CustomUserAgentPrefix azsdk-js-useragent-corev2\/1\.0\.0-preview1 core-rest-pipeline\/.* Node\/v.* OS\/.*/g
            );

          assert.equal(array!.length, 1, "Unexpected User Agent Value");
        }
      }
    );
  });
<<<<<<< HEAD
=======

  it("should send correct user agent prefix string for rlc", async () => {
    const client: BodyStringRestClient = BodyStringRest();
    const result = await client
      .path("/string/nullBase64UrlEncoding")
      .get({ allowInsecureConnection: true });
    assert.equal(result.status, "200");
    const userAgent = result.request.headers?.get("user-agent");
    assert.isTrue(userAgent !== undefined);
    if (userAgent) {
      assert.isTrue(userAgent.indexOf("azsdk-js-body-string-rest") > -1);
    }
  });
>>>>>>> main
});
