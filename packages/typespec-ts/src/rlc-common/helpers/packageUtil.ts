import { RLCModel, RLCOptions } from "../interfaces.js";

export function isAzurePackage(model: { options?: RLCOptions }): boolean {
  return Boolean(model.options?.flavor === "azure");
}

export function isAzureMonorepoPackage(model: RLCModel): boolean {
  return Boolean(model.options?.azureSdkForJs) && isAzurePackage(model);
}

export function isAzureStandalonePackage(model: RLCModel): boolean {
  return isAzurePackage(model) && !model.options?.azureSdkForJs;
}
