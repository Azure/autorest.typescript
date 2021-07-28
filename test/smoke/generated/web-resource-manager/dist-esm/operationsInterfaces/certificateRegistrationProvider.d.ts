import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CsmOperationDescription, CertificateRegistrationProviderListOperationsOptionalParams } from "../models";
/** Interface representing a CertificateRegistrationProvider. */
export interface CertificateRegistrationProvider {
    /**
     * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
     * resource provider
     * @param options The options parameters.
     */
    listOperations(options?: CertificateRegistrationProviderListOperationsOptionalParams): PagedAsyncIterableIterator<CsmOperationDescription>;
}
//# sourceMappingURL=certificateRegistrationProvider.d.ts.map