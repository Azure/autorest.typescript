import { assert } from "chai";
import { emitClientFactoryFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Client Factory generation testing", () => {
  describe("should handle url parameters", () => {
    it("should handle zero parameter", async () => {
      const models = await emitClientFactoryFromCadl(`
      @server(
        "localhost",
        "Language Service"
      )
      @service( {title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
        import { getClient, ClientOptions } from "@azure-rest/core-client";
        import { testClient } from "./clientDefinitions";
        
        /**
         * Initialize a new instance of the class testClient class.
         *
         */
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
    `
      );
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
          @service( {title: "PetStoreClient"})
          namespace PetStore;
          @doc("The endpoint to use.")
          scalar Endpoint extends string;
          `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
          import { getClient, ClientOptions } from "@azure-rest/core-client";
          import { testClient } from "./clientDefinitions";

          /**
           * Initialize a new instance of the class testClient class.
           * @param Endpoint type: string The endpoint to use.
           */
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
            @service( {title: "PetStoreClient"})
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            #suppress "@azure-tools/cadl-azure-core/use-extensible-enum" "for test"
            @doc("The version to use")
            @fixed
            enum Version {
              V1,
              V2
            }
            `,
            true);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { testClient } from "./clientDefinitions";
            
            /**
             * Initialize a new instance of the class testClient class.
             * @param Endpoint type: string The endpoint to use.
             * @param Version type: "V1"|"V2" The version to use
             */
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
    it("should handle extensible enums in host parameters", async () => {
      const models = await emitClientFactoryFromCadl(`
            @server(
              "{Endpoint}/language/{Version}",
              "Language Service",
              {
                Endpoint: Endpoint,
                Version: Versions
              }
            )
            @service( {title: "PetStoreClient"})
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            @doc("The version to use.")
            enum Versions {
              v1_1: "v1.1",
            }
            `,
            true);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { testClient } from "./clientDefinitions";
            
            /**
             * Initialize a new instance of the class testClient class.
             * @param Endpoint type: string The endpoint to use.
             * @param Version type: string The version to use. Possible values: v1.1
             */
            export default function createClient(
              Endpoint: string,
              Version: string,
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

  describe("should handle apiVersion correctly", () => {
    describe("apiVersion as query parameter", () => {
      it("should set the default value in options", async () => {
        const models = await emitClientFactoryFromCadl(`
            @server(
              "{Endpoint}/language",
              "Language Service",
              {
                Endpoint: Endpoint
              }
            )
            @service({
              title: "PetStoreClient",
              version: "2022-05-15-preview",
            })
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;
            `);
        assert.ok(models);
        assertEqualContent(
          models!.content,
          `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { testClient } from "./clientDefinitions";
            
            /**
             * Initialize a new instance of the class testClient class.
             * @param Endpoint type: string The endpoint to use.
             */
            export default function createClient(
              Endpoint: string,
              options: ClientOptions = {}
            ): testClient {
              const baseUrl = options.baseUrl ?? \`\${Endpoint}/language\`;
              options.apiVersion = options.apiVersion ?? "2022-05-15-preview";
            
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
    describe("apiVersion as path parameter", () => {
      it("should set the default value in customized options", async () => {
        const models = await emitClientFactoryFromCadl(`
            @versioned(Versions)
            @server(
              "{Endpoint}/anomalydetector/{ApiVersion}",
              "Language Service",
              {
                Endpoint: Endpoint,
                @doc("Api Version")
                @path
                ApiVersion: APIVersion,
              }
            )
            @service({
              title: "PetStoreClient"
            })
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            enum Versions {
              v1_1: "v1.1",
            }
            @knownValues(Versions)
            scalar APIVersion extends string;
            `);
        assert.ok(models);
        assertEqualContent(
          models!.content,
          `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { testClient } from "./clientDefinitions";
            
            export interface testClientOptions extends ClientOptions {
              ApiVersion?: string;
            }

            /**
             * Initialize a new instance of the class testClient class.
             * @param Endpoint type: string The endpoint to use.
             */
            export default function createClient(
              Endpoint: string,
              options: testClientOptions = {}
            ): testClient {
              const ApiVersion = options.ApiVersion ?? "v1.1";
              const baseUrl = options.baseUrl ?? \`\${Endpoint}/anomalydetector/\${ApiVersion}\`;
            
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
    describe("mixed apiVersion in path & query parameter", () => {});
  });

  describe("should handle no @server definition", () => {
    it("should set default endpoint parameter when no @server", async () => {
      const models = await emitClientFactoryFromCadl(`
      @service( {title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
        import { getClient, ClientOptions } from "@azure-rest/core-client";
        import { testClient } from "./clientDefinitions";
        
        /**
         * Initialize a new instance of the class testClient class.
         * @param endpoint type: string
         */
        export default function createClient(endpoint: string, options: ClientOptions = {}): testClient {
        const baseUrl = options.baseUrl ?? \`\${endpoint}\`;
        
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
