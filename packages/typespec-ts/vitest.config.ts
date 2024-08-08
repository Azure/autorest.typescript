import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      all: true,
      include: [
        "src/modular/serialization/**/*.ts",
        "src/framework/**/*.ts",
        "src/modular/static-helpers/**/*.ts"
      ],
      exclude: ["**/*.spec.ts", "**/*.spec.tsx", ".next/*"]
    }
  }
});
