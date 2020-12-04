import { Channel, Host, Message } from "@azure-tools/autorest-extension-base";
import { assert } from "chai";
import { getCredentialScopes } from "../../../src/transforms/optionsTransforms";

describe("transformOptions", () => {
  describe("getCredentialScopes", () => {
    it("should throw an error if credentials is false but credential-scopes are provided", async () => {
      const mockHost = {
        GetValue: async (key: string) => {
          switch (key) {
            case "add-credentials":
              return false;
            case "credential-scopes":
              return "https://microsoft.com/.default";
            case "azure-arm":
              return false;
            default:
              return undefined;
          }
        },
        Message: (message: Message) => {}
      } as Host;
      try {
        await getCredentialScopes(mockHost);
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
        GetValue: async (key: string) => {
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
        Message: (message: Message) => {}
      } as Host;
      const scopes = await getCredentialScopes(mockHost);
      assert.deepEqual(scopes, ["https://management.azure.com/.default"]);
    });

    it("should log a warning when credentials is true but no scopes are passed", async () => {
      const mockHost = {
        GetValue: async (key: string) => {
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
        Message: (message: Message) => {
          assert.include(
            message.Text,
            "You have default credential policy BearerTokenCredentialPolicy"
          );
          assert.equal(message.Channel, Channel.Warning);
        }
      } as Host;
      const scopes = await getCredentialScopes(mockHost);
      assert.equal(scopes, undefined);
    });

    it("should handle a single credential scope", async () => {
      const mockHost = {
        GetValue: async (key: string) => {
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
        Message: (message: Message) => {}
      } as Host;
      const scopes = await getCredentialScopes(mockHost);
      assert.deepEqual(scopes, ["https://microsoft.com/.defaults"]);
    });

    it("should handle a multiple credential scopes", async () => {
      const mockHost = {
        GetValue: async (key: string) => {
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
        Message: (message: Message) => {}
      } as Host;
      const scopes = await getCredentialScopes(mockHost);
      assert.deepEqual(scopes, [
        "https://microsoft.com/.defaults",
        "http://microsoft.com/.defaults"
      ]);
    });
  });
});
