import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TopLevelDomains } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { TopLevelDomain, TopLevelDomainsListOptionalParams, TldLegalAgreement, TopLevelDomainAgreementOption, TopLevelDomainsListAgreementsOptionalParams, TopLevelDomainsGetOptionalParams, TopLevelDomainsGetResponse } from "../models";
/** Class representing a TopLevelDomains. */
export declare class TopLevelDomainsImpl implements TopLevelDomains {
    private readonly client;
    /**
     * Initialize a new instance of the class TopLevelDomains class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for Get all top-level domains supported for registration.
     * @param options The options parameters.
     */
    list(options?: TopLevelDomainsListOptionalParams): PagedAsyncIterableIterator<TopLevelDomain>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
     * @param name Name of the top-level domain.
     * @param agreementOption Domain agreement options.
     * @param options The options parameters.
     */
    listAgreements(name: string, agreementOption: TopLevelDomainAgreementOption, options?: TopLevelDomainsListAgreementsOptionalParams): PagedAsyncIterableIterator<TldLegalAgreement>;
    private listAgreementsPagingPage;
    private listAgreementsPagingAll;
    /**
     * Description for Get all top-level domains supported for registration.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Description for Get details of a top-level domain.
     * @param name Name of the top-level domain.
     * @param options The options parameters.
     */
    get(name: string, options?: TopLevelDomainsGetOptionalParams): Promise<TopLevelDomainsGetResponse>;
    /**
     * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
     * @param name Name of the top-level domain.
     * @param agreementOption Domain agreement options.
     * @param options The options parameters.
     */
    private _listAgreements;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListAgreementsNext
     * @param name Name of the top-level domain.
     * @param agreementOption Domain agreement options.
     * @param nextLink The nextLink from the previous successful call to the ListAgreements method.
     * @param options The options parameters.
     */
    private _listAgreementsNext;
}
//# sourceMappingURL=topLevelDomains.d.ts.map