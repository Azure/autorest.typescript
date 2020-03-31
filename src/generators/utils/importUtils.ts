import { ClientDetails } from "../../models/clientDetails";

/**
 * Only import parameters module if there are any non synthetic parameters
 */
export function shouldImportParameters(clientDetails: ClientDetails) {
  return clientDetails.parameters.some(p => !p.isSynthetic);
}
