import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Diagnostics } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { DetectorResponse, DiagnosticsListHostingEnvironmentDetectorResponsesOptionalParams, DiagnosticsListSiteDetectorResponsesOptionalParams, DiagnosticCategory, DiagnosticsListSiteDiagnosticCategoriesOptionalParams, AnalysisDefinition, DiagnosticsListSiteAnalysesOptionalParams, DetectorDefinition, DiagnosticsListSiteDetectorsOptionalParams, DiagnosticsListSiteDetectorResponsesSlotOptionalParams, DiagnosticsListSiteDiagnosticCategoriesSlotOptionalParams, DiagnosticsListSiteAnalysesSlotOptionalParams, DiagnosticsListSiteDetectorsSlotOptionalParams, DiagnosticsGetHostingEnvironmentDetectorResponseOptionalParams, DiagnosticsGetHostingEnvironmentDetectorResponseResponse, DiagnosticsGetSiteDetectorResponseOptionalParams, DiagnosticsGetSiteDetectorResponseResponse, DiagnosticsGetSiteDiagnosticCategoryOptionalParams, DiagnosticsGetSiteDiagnosticCategoryResponse, DiagnosticsGetSiteAnalysisOptionalParams, DiagnosticsGetSiteAnalysisResponse, DiagnosticsExecuteSiteAnalysisOptionalParams, DiagnosticsExecuteSiteAnalysisResponse, DiagnosticsGetSiteDetectorOptionalParams, DiagnosticsGetSiteDetectorResponse, DiagnosticsExecuteSiteDetectorOptionalParams, DiagnosticsExecuteSiteDetectorResponse, DiagnosticsGetSiteDetectorResponseSlotOptionalParams, DiagnosticsGetSiteDetectorResponseSlotResponse, DiagnosticsGetSiteDiagnosticCategorySlotOptionalParams, DiagnosticsGetSiteDiagnosticCategorySlotResponse, DiagnosticsGetSiteAnalysisSlotOptionalParams, DiagnosticsGetSiteAnalysisSlotResponse, DiagnosticsExecuteSiteAnalysisSlotOptionalParams, DiagnosticsExecuteSiteAnalysisSlotResponse, DiagnosticsGetSiteDetectorSlotOptionalParams, DiagnosticsGetSiteDetectorSlotResponse, DiagnosticsExecuteSiteDetectorSlotOptionalParams, DiagnosticsExecuteSiteDetectorSlotResponse } from "../models";
/** Class representing a Diagnostics. */
export declare class DiagnosticsImpl implements Diagnostics {
    private readonly client;
    /**
     * Initialize a new instance of the class Diagnostics class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for List Hosting Environment Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site Name
     * @param options The options parameters.
     */
    listHostingEnvironmentDetectorResponses(resourceGroupName: string, name: string, options?: DiagnosticsListHostingEnvironmentDetectorResponsesOptionalParams): PagedAsyncIterableIterator<DetectorResponse>;
    private listHostingEnvironmentDetectorResponsesPagingPage;
    private listHostingEnvironmentDetectorResponsesPagingAll;
    /**
     * Description for List Site Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param options The options parameters.
     */
    listSiteDetectorResponses(resourceGroupName: string, siteName: string, options?: DiagnosticsListSiteDetectorResponsesOptionalParams): PagedAsyncIterableIterator<DetectorResponse>;
    private listSiteDetectorResponsesPagingPage;
    private listSiteDetectorResponsesPagingAll;
    /**
     * Description for Get Diagnostics Categories
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param options The options parameters.
     */
    listSiteDiagnosticCategories(resourceGroupName: string, siteName: string, options?: DiagnosticsListSiteDiagnosticCategoriesOptionalParams): PagedAsyncIterableIterator<DiagnosticCategory>;
    private listSiteDiagnosticCategoriesPagingPage;
    private listSiteDiagnosticCategoriesPagingAll;
    /**
     * Description for Get Site Analyses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    listSiteAnalyses(resourceGroupName: string, siteName: string, diagnosticCategory: string, options?: DiagnosticsListSiteAnalysesOptionalParams): PagedAsyncIterableIterator<AnalysisDefinition>;
    private listSiteAnalysesPagingPage;
    private listSiteAnalysesPagingAll;
    /**
     * Description for Get Detectors
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    listSiteDetectors(resourceGroupName: string, siteName: string, diagnosticCategory: string, options?: DiagnosticsListSiteDetectorsOptionalParams): PagedAsyncIterableIterator<DetectorDefinition>;
    private listSiteDetectorsPagingPage;
    private listSiteDetectorsPagingAll;
    /**
     * Description for List Site Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteDetectorResponsesSlot(resourceGroupName: string, siteName: string, slot: string, options?: DiagnosticsListSiteDetectorResponsesSlotOptionalParams): PagedAsyncIterableIterator<DetectorResponse>;
    private listSiteDetectorResponsesSlotPagingPage;
    private listSiteDetectorResponsesSlotPagingAll;
    /**
     * Description for Get Diagnostics Categories
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteDiagnosticCategoriesSlot(resourceGroupName: string, siteName: string, slot: string, options?: DiagnosticsListSiteDiagnosticCategoriesSlotOptionalParams): PagedAsyncIterableIterator<DiagnosticCategory>;
    private listSiteDiagnosticCategoriesSlotPagingPage;
    private listSiteDiagnosticCategoriesSlotPagingAll;
    /**
     * Description for Get Site Analyses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteAnalysesSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsListSiteAnalysesSlotOptionalParams): PagedAsyncIterableIterator<AnalysisDefinition>;
    private listSiteAnalysesSlotPagingPage;
    private listSiteAnalysesSlotPagingAll;
    /**
     * Description for Get Detectors
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    listSiteDetectorsSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsListSiteDetectorsSlotOptionalParams): PagedAsyncIterableIterator<DetectorDefinition>;
    private listSiteDetectorsSlotPagingPage;
    private listSiteDetectorsSlotPagingAll;
    /**
     * Description for List Hosting Environment Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site Name
     * @param options The options parameters.
     */
    private _listHostingEnvironmentDetectorResponses;
    /**
     * Description for Get Hosting Environment Detector Response
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name App Service Environment Name
     * @param detectorName Detector Resource Name
     * @param options The options parameters.
     */
    getHostingEnvironmentDetectorResponse(resourceGroupName: string, name: string, detectorName: string, options?: DiagnosticsGetHostingEnvironmentDetectorResponseOptionalParams): Promise<DiagnosticsGetHostingEnvironmentDetectorResponseResponse>;
    /**
     * Description for List Site Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param options The options parameters.
     */
    private _listSiteDetectorResponses;
    /**
     * Description for Get site detector response
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param options The options parameters.
     */
    getSiteDetectorResponse(resourceGroupName: string, siteName: string, detectorName: string, options?: DiagnosticsGetSiteDetectorResponseOptionalParams): Promise<DiagnosticsGetSiteDetectorResponseResponse>;
    /**
     * Description for Get Diagnostics Categories
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param options The options parameters.
     */
    private _listSiteDiagnosticCategories;
    /**
     * Description for Get Diagnostics Category
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    getSiteDiagnosticCategory(resourceGroupName: string, siteName: string, diagnosticCategory: string, options?: DiagnosticsGetSiteDiagnosticCategoryOptionalParams): Promise<DiagnosticsGetSiteDiagnosticCategoryResponse>;
    /**
     * Description for Get Site Analyses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    private _listSiteAnalyses;
    /**
     * Description for Get Site Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param analysisName Analysis Name
     * @param options The options parameters.
     */
    getSiteAnalysis(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, options?: DiagnosticsGetSiteAnalysisOptionalParams): Promise<DiagnosticsGetSiteAnalysisResponse>;
    /**
     * Description for Execute Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Category Name
     * @param analysisName Analysis Resource Name
     * @param options The options parameters.
     */
    executeSiteAnalysis(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, options?: DiagnosticsExecuteSiteAnalysisOptionalParams): Promise<DiagnosticsExecuteSiteAnalysisResponse>;
    /**
     * Description for Get Detectors
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param options The options parameters.
     */
    private _listSiteDetectors;
    /**
     * Description for Get Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param detectorName Detector Name
     * @param options The options parameters.
     */
    getSiteDetector(resourceGroupName: string, siteName: string, diagnosticCategory: string, detectorName: string, options?: DiagnosticsGetSiteDetectorOptionalParams): Promise<DiagnosticsGetSiteDetectorResponse>;
    /**
     * Description for Execute Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param diagnosticCategory Category Name
     * @param options The options parameters.
     */
    executeSiteDetector(resourceGroupName: string, siteName: string, detectorName: string, diagnosticCategory: string, options?: DiagnosticsExecuteSiteDetectorOptionalParams): Promise<DiagnosticsExecuteSiteDetectorResponse>;
    /**
     * Description for List Site Detector Responses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    private _listSiteDetectorResponsesSlot;
    /**
     * Description for Get site detector response
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    getSiteDetectorResponseSlot(resourceGroupName: string, siteName: string, detectorName: string, slot: string, options?: DiagnosticsGetSiteDetectorResponseSlotOptionalParams): Promise<DiagnosticsGetSiteDetectorResponseSlotResponse>;
    /**
     * Description for Get Diagnostics Categories
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    private _listSiteDiagnosticCategoriesSlot;
    /**
     * Description for Get Diagnostics Category
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    getSiteDiagnosticCategorySlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsGetSiteDiagnosticCategorySlotOptionalParams): Promise<DiagnosticsGetSiteDiagnosticCategorySlotResponse>;
    /**
     * Description for Get Site Analyses
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    private _listSiteAnalysesSlot;
    /**
     * Description for Get Site Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param analysisName Analysis Name
     * @param slot Slot - optional
     * @param options The options parameters.
     */
    getSiteAnalysisSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, slot: string, options?: DiagnosticsGetSiteAnalysisSlotOptionalParams): Promise<DiagnosticsGetSiteAnalysisSlotResponse>;
    /**
     * Description for Execute Analysis
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Category Name
     * @param analysisName Analysis Resource Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    executeSiteAnalysisSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, analysisName: string, slot: string, options?: DiagnosticsExecuteSiteAnalysisSlotOptionalParams): Promise<DiagnosticsExecuteSiteAnalysisSlotResponse>;
    /**
     * Description for Get Detectors
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param options The options parameters.
     */
    private _listSiteDetectorsSlot;
    /**
     * Description for Get Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param detectorName Detector Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    getSiteDetectorSlot(resourceGroupName: string, siteName: string, diagnosticCategory: string, detectorName: string, slot: string, options?: DiagnosticsGetSiteDetectorSlotOptionalParams): Promise<DiagnosticsGetSiteDetectorSlotResponse>;
    /**
     * Description for Execute Detector
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param detectorName Detector Resource Name
     * @param diagnosticCategory Category Name
     * @param slot Slot Name
     * @param options The options parameters.
     */
    executeSiteDetectorSlot(resourceGroupName: string, siteName: string, detectorName: string, diagnosticCategory: string, slot: string, options?: DiagnosticsExecuteSiteDetectorSlotOptionalParams): Promise<DiagnosticsExecuteSiteDetectorSlotResponse>;
    /**
     * ListHostingEnvironmentDetectorResponsesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Site Name
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListHostingEnvironmentDetectorResponses method.
     * @param options The options parameters.
     */
    private _listHostingEnvironmentDetectorResponsesNext;
    /**
     * ListSiteDetectorResponsesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param nextLink The nextLink from the previous successful call to the ListSiteDetectorResponses
     *                 method.
     * @param options The options parameters.
     */
    private _listSiteDetectorResponsesNext;
    /**
     * ListSiteDiagnosticCategoriesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param nextLink The nextLink from the previous successful call to the ListSiteDiagnosticCategories
     *                 method.
     * @param options The options parameters.
     */
    private _listSiteDiagnosticCategoriesNext;
    /**
     * ListSiteAnalysesNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param nextLink The nextLink from the previous successful call to the ListSiteAnalyses method.
     * @param options The options parameters.
     */
    private _listSiteAnalysesNext;
    /**
     * ListSiteDetectorsNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param nextLink The nextLink from the previous successful call to the ListSiteDetectors method.
     * @param options The options parameters.
     */
    private _listSiteDetectorsNext;
    /**
     * ListSiteDetectorResponsesSlotNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param nextLink The nextLink from the previous successful call to the ListSiteDetectorResponsesSlot
     *                 method.
     * @param options The options parameters.
     */
    private _listSiteDetectorResponsesSlotNext;
    /**
     * ListSiteDiagnosticCategoriesSlotNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param slot Slot Name
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListSiteDiagnosticCategoriesSlot method.
     * @param options The options parameters.
     */
    private _listSiteDiagnosticCategoriesSlotNext;
    /**
     * ListSiteAnalysesSlotNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param nextLink The nextLink from the previous successful call to the ListSiteAnalysesSlot method.
     * @param options The options parameters.
     */
    private _listSiteAnalysesSlotNext;
    /**
     * ListSiteDetectorsSlotNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param siteName Site Name
     * @param diagnosticCategory Diagnostic Category
     * @param slot Slot Name
     * @param nextLink The nextLink from the previous successful call to the ListSiteDetectorsSlot method.
     * @param options The options parameters.
     */
    private _listSiteDetectorsSlotNext;
}
//# sourceMappingURL=diagnostics.d.ts.map