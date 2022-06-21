import {
  Channel,
  AutorestExtensionHost,
  Message
} from "@autorest/extension-base";
import { assert } from "chai";
import { getSecurityScopes } from "../../../src/utils/autorestOptions";

describe("transformOptions", () => {
  describe.skip("getCredentialScopes", () => {
    it("should throw an error if add-credentials is false but security-scopes are provided", async () => {
      const mockHost = {
        getValue: async (key: string) => {
          switch (key) {
            case "add-credentials":
              return false;
            case "security-scopes":
              return "https://microsoft.com/.default";
            case "azure-arm":
              return false;
            default:
              return undefined;
          }
        },
        message: (message: Message) => {}
      } as AutorestExtensionHost;
      try {
        await getSecurityScopes(mockHost);
        assert.fail("Expected to throw");
      } catch (error) {
        assert.include(
          error.message,
          "--credential-scopes must be used with the --add-credentials flag"
        );
      }
    });

    it("should set default scopes when isArm is set and no credential-scopes were passed", async () => {
      const mockHost = {
        getValue: async (key: string) => {
          switch (key) {
            case "add-credentials":
              return true;
            case "credential-scopes":
              return undefined;
            case "azure-arm":
              return true;
            default:
              return undefined;
          }
        },
        message: (message: Message) => {}
      } as AutorestExtensionHost;
      const scopes = await getSecurityScopes(mockHost);
      assert.deepEqual(scopes, ["https://management.azure.com/.default"]);
    });

    it("should log a warning when credentials is true but no scopes are passed", async () => {
      const mockHost = {
        getValue: async (key: string) => {
          switch (key) {
            case "add-credentials":
              return true;
            case "credential-scopes":
              return undefined;
            case "azure-arm":
              return false;
            default:
              return undefined;
          }
        },
        message: (message: Message) => {
          assert.include(
            message.Text,
            "You have default credential policy BearerTokenCredentialPolicy"
          );
          assert.equal(message.Channel, Channel.Warning);
        }
      } as AutorestExtensionHost;
      const scopes = await getSecurityScopes(mockHost);
      assert.equal(scopes, undefined);
    });

    it("should handle a single credential scope", async () => {
      const mockHost = {
        getValue: async (key: string) => {
          switch (key) {
            case "add-credentials":
              return true;
            case "credential-scopes":
              return "https://microsoft.com/.defaults";
            case "azure-arm":
              return false;
            default:
              return undefined;
          }
        },
        message: (message: Message) => {}
      } as AutorestExtensionHost;
      const scopes = await getSecurityScopes(mockHost);
      assert.deepEqual(scopes, ["https://microsoft.com/.defaults"]);
    });

    it("should handle a multiple credential scopes", async () => {
      const mockHost = {
        getValue: async (key: string) => {
          switch (key) {
            case "add-credentials":
              return true;
            case "credential-scopes":
              return "https://microsoft.com/.defaults,http://microsoft.com/.defaults";
            case "azure-arm":
              return false;
            default:
              return undefined;
          }
        },
        message: (message: Message) => {}
      } as AutorestExtensionHost;
      const scopes = await getSecurityScopes(mockHost);
      assert.deepEqual(scopes, [
        "https://microsoft.com/.defaults",
        "http://microsoft.com/.defaults"
      ]);
    });
  });
});
