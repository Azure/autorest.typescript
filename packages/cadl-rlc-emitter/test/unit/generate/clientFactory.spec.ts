import { assert } from "chai";
import { emitClientFactoryFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Client Factory generation testing", () => {
  describe("handling url parameters", () => {
    it("should handle zero parameter", async () => {
      const models = await emitClientFactoryFromCadl(`
      @server(
        "localhost",
        "Language Service"
      )
      @serviceTitle("PetStoreClient")
      namespace PetStore;
      `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
        import { getClient, ClientOptions } from "@azure-rest/core-client";
        import { testClient } from "./clientDefinitions";
        
        export default function createClient(options: ClientOptions = {}): testClient {
        const baseUrl = options.baseUrl ?? \`localhost\`;
        
        const userAgentInfo = \`azsdk-js--rest/1.0.0-beta.1\`;
        const userAgentPrefix =
            options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
            : \`\${userAgentInfo}\`;
        options = {
            ...options,
            userAgentOptions: {
            userAgentPrefix,
            },
        };
        
        const client = getClient(baseUrl, options) as testClient;
        
        return client;
    }
    `);
    });
    it("should handle one parameter", async () => {
      const models = await emitClientFactoryFromCadl(`
          @server(
            "{Endpoint}/language",
            "Language Service",
            {
              Endpoint: Endpoint,
            }
          )
          @serviceTitle("PetStoreClient")
          namespace PetStore;
          @doc("The endpoint to use.")
          model Endpoint is string;
          `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
          import { getClient, ClientOptions } from "@azure-rest/core-client";
          import { testClient } from "./clientDefinitions";
          
          export default function createClient(
            Endpoint: string,
            options: ClientOptions = {}
          ): testClient {
            const baseUrl = options.baseUrl ?? \`\${Endpoint}/language\`;
          
            const userAgentInfo = \`azsdk-js--rest/1.0.0-beta.1\`;
            const userAgentPrefix =
              options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                : \`\${userAgentInfo}\`;
            options = {
              ...options,
              userAgentOptions: {
                userAgentPrefix,
              },
            };
          
            const client = getClient(baseUrl, options) as testClient;
          
            return client;
        }
        `
      );
    });

    it("should handle two parameters", async () => {
        const models = await emitClientFactoryFromCadl(`
            @server(
              "{Endpoint}/language/{Version}",
              "Language Service",
              {
                Endpoint: Endpoint,
                Version: Version
              }
            )
            @serviceTitle("PetStoreClient")
            namespace PetStore;
            @doc("The endpoint to use.")
            model Endpoint is string;
            @doc("The version to use")
            enum Version {
              V1,
              V2
            }
            `);
        assert.ok(models);
        assertEqualContent(
          models!.content,
          `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { testClient } from "./clientDefinitions";
            
            export default function createClient(
              Endpoint: string,
              Version: "V1" | "V2",
              options: ClientOptions = {}
            ): testClient {
              const baseUrl = options.baseUrl ?? \`\${Endpoint}/language/\${Version}\`;
            
              const userAgentInfo = \`azsdk-js--rest/1.0.0-beta.1\`;
              const userAgentPrefix =
                options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                  ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                  : \`\${userAgentInfo}\`;
              options = {
                ...options,
                userAgentOptions: {
                  userAgentPrefix,
                },
              };
            
              const client = getClient(baseUrl, options) as testClient;
            
              return client;
          }
          `
        );
      });
  });
});
