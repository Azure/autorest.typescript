import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "test-next",
          include: ["test-next/**/*.test.ts"]
        }
      },
      {
        test: {
          name: "unit-rlc",
          include: ["test/unit/**/*.spec.ts"],
          testTimeout: 36000
        }
      },
      {
        test: {
          name: "unit-modular",
          include: ["test/modularUnit/**/*.spec.ts"],
          testTimeout: 0,
          pool: "forks",
          poolOptions: {
            forks: {
              execArgv: ["--max-old-space-size=8192"]
            }
          }
        }
      },
      {
        test: {
          name: "integration-rlc",
          include: ["test/integration/*.spec.ts"],
          exclude: ["test/integration/versioningRemoved.spec.ts"],
          testTimeout: 36000
        }
      },
      {
        test: {
          name: "integration-azure-rlc",
          include: ["test/azureIntegration/*.spec.ts"],
          testTimeout: 36000
        }
      },
      {
        test: {
          name: "integration-modular",
          include: ["test/modularIntegration/*.spec.ts"],
          testTimeout: 36000
        }
      },
      {
        test: {
          name: "integration-azure-modular",
          include: ["test/azureModularIntegration/*.spec.ts"],
          testTimeout: 36000
        }
      }
    ],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      include: [
        "src/modular/serialization/**/*.ts",
        "src/framework/**/*.ts",
        "static/static-helpers/**/*.ts"
      ],
      exclude: ["**/*.spec.ts", "**/*.spec.tsx", ".next/*"]
    }
  }
});
