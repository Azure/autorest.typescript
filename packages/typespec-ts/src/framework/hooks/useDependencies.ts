import { provideContext, useContext } from "../../contextManager.js";
import { DEFAULT_DEPENDENCIES, ExternalDependencies } from "../dependency.js";

export function provideDependencies(
  customDependencies: Partial<ExternalDependencies> = {}
) {
  const dependencies = {
    ...DEFAULT_DEPENDENCIES,
    ...customDependencies
  } as ExternalDependencies;

  provideContext("dependencies", dependencies);
}

export function useDependencies(): ExternalDependencies {
  return useContext("dependencies");
}
