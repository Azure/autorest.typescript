import { ModularEmitterOptions } from "./interfaces.js";
import { SdkContext } from "../utils/interfaces.js";

let CASING: "camel" | "snake" = "snake";

export function transformModularEmitterOptions(
  dpgContext: SdkContext,
  modularSourcesRoot: string,
  options: { casing: "snake" | "camel" } = { casing: "snake" }
): ModularEmitterOptions {
  CASING = options.casing ?? CASING;
  const emitterOptions: ModularEmitterOptions = {
    options: dpgContext.rlcOptions ?? {},
    modularOptions: {
      sourceRoot: modularSourcesRoot,
      compatibilityMode: !!dpgContext.rlcOptions?.compatibilityMode,
      experimentalExtensibleEnums:
        !!dpgContext.rlcOptions?.experimentalExtensibleEnums
    }
  };

  return emitterOptions;
}
