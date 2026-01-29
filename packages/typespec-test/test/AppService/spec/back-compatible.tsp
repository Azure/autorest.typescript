import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;
using Azure.ClientGenerator.Core.Legacy;
using Microsoft.Web;

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(AppServiceEnvironmentPatchResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(PushSettings.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(ResourceMetricDefinition.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(Microsoft.Web.Usage.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(AppServicePlanPatchResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(HybridConnectionKey.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(CertificatePatchResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(DiagnosticAnalysis.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(DiagnosticDetectorResponse.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(Snapshot.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(KubeEnvironmentPatchResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(ApplicationStackResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(FunctionAppStack.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(WebAppStack.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(Recommendation.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(BillingMeter.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(CustomHostnameSites.properties);

@@clientName(IdentifierProperties.id, "value");

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(GeoRegion.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(AseRegion.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(PremierAddOnOffer.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(VnetParameters.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(VnetValidationFailureDetails.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(VnetValidationTestFailure.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(ValidateRequest.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSitesWorkflowPreviewRequest.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSitesWorkflowPreview.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(RemotePrivateEndpointConnection.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteUserProvidedFunctionApp.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSitePatchResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteUserARMResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StringDictionary.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(DatabaseConnectionPatchRequest.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteFunctionOverviewARMResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteZipDeploymentARMResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteUserInvitationRequestResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteUserInvitationResponseResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteCustomDomainRequestPropertiesARMResource.properties
);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StaticSiteResetPropertiesARMResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(SitePatchResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(CustomHostnameAnalysisResult.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(BackupRequest.properties);

@@clientName(BackupItemProperties.id, "BackupId");

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(RestoreRequest.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(SiteAuthSettings.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(AzureStoragePropertyDictionaryResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(ConnectionStringDictionary.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(SiteConfigurationSnapshotInfo.properties);

@@clientName(ContinuousWebJobProperties.detailed_status, "detailedStatus");
@@clientName(ContinuousWebJobProperties.log_url, "logUrl");
@@clientName(ContinuousWebJobProperties.run_command, "runCommand");
@@clientName(ContinuousWebJobProperties.extra_info_url, "extraInfoUrl");
@@clientName(ContinuousWebJobProperties.web_job_type, "webJobType");
@@clientName(ContinuousWebJobProperties.using_sdk, "usingSdk");

@@clientName(DeploymentProperties.author_email, "authorEmail");
@@clientName(DeploymentProperties.start_time, "startTime");
@@clientName(DeploymentProperties.end_time, "endTime");

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(MSDeploy.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(MSDeployLog.properties);

@@clientName(FunctionEnvelopeProperties.function_app_id, "functionAppId");
@@clientName(FunctionEnvelopeProperties.script_root_path_href,
  "scriptRootPathHref"
);
@@clientName(FunctionEnvelopeProperties.script_href, "scriptHref");
@@clientName(FunctionEnvelopeProperties.config_href, "configHref");
@@clientName(FunctionEnvelopeProperties.test_data_href, "testDataHref");
@@clientName(FunctionEnvelopeProperties.secrets_file_href, "secretsFileHref");
@@clientName(FunctionEnvelopeProperties.test_data, "testData");
@@clientName(FunctionEnvelopeProperties.invoke_url_template,
  "invokeUrlTemplate"
);

@@clientName(FunctionSecrets.trigger_url, "triggerUrl");

@@clientName(ProcessInfoProperties.deployment_name, "deploymentName");
@@clientName(ProcessInfoProperties.is_profile_running, "isProfileRunning");
@@clientName(ProcessInfoProperties.is_iis_profile_running,
  "isIisProfileRunning"
);
@@clientName(ProcessInfoProperties.iis_profile_timeout_in_seconds,
  "iisProfileTimeoutInSeconds"
);
@@clientName(ProcessInfoProperties.open_file_handles, "openFileHandles");
@@clientName(ProcessInfoProperties.file_name, "fileName");
@@clientName(ProcessInfoProperties.command_line, "commandLine");
@@clientName(ProcessInfoProperties.user_name, "userName");
@@clientName(ProcessInfoProperties.handle_count, "handleCount");
@@clientName(ProcessInfoProperties.module_count, "moduleCount");
@@clientName(ProcessInfoProperties.thread_count, "threadCount");
@@clientName(ProcessInfoProperties.start_time, "startTime");
@@clientName(ProcessInfoProperties.total_cpu_time, "totalCpuTime");
@@clientName(ProcessInfoProperties.user_cpu_time, "userCpuTime");
@@clientName(ProcessInfoProperties.privileged_cpu_time, "privilegedCpuTime");
@@clientName(ProcessInfoProperties.working_set, "workingSet");
@@clientName(ProcessInfoProperties.peak_working_set, "peakWorkingSet");
@@clientName(ProcessInfoProperties.private_memory, "privateMemory");
@@clientName(ProcessInfoProperties.virtual_memory, "virtualMemory");
@@clientName(ProcessInfoProperties.peak_virtual_memory, "peakVirtualMemory");
@@clientName(ProcessInfoProperties.paged_system_memory, "pagedSystemMemory");
@@clientName(ProcessInfoProperties.non_paged_system_memory,
  "nonPagedSystemMemory"
);
@@clientName(ProcessInfoProperties.paged_memory, "pagedMemory");
@@clientName(ProcessInfoProperties.peak_paged_memory, "peakPagedMemory");
@@clientName(ProcessInfoProperties.time_stamp, "timeStamp");
@@clientName(ProcessInfoProperties.environment_variables,
  "environmentVariables"
);
@@clientName(ProcessInfoProperties.is_scm_site, "isScmSite");
@@clientName(ProcessInfoProperties.is_webjob, "isWebjob");

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(ProcessThreadInfo.properties);

@@clientName(ProcessThreadInfoProperties.start_address, "startAddress");
@@clientName(ProcessThreadInfoProperties.current_priority, "currentPriority");
@@clientName(ProcessThreadInfoProperties.priority_level, "priorityLevel");
@@clientName(ProcessThreadInfoProperties.base_priority, "basePriority");
@@clientName(ProcessThreadInfoProperties.start_time, "startTime");
@@clientName(ProcessThreadInfoProperties.total_processor_time,
  "totalProcessorTime"
);
@@clientName(ProcessThreadInfoProperties.user_processor_time,
  "userProcessorTime"
);
@@clientName(ProcessThreadInfoProperties.wait_reason, "waitReason");

@@clientName(ProcessModuleInfoProperties.base_address, "baseAddress");
@@clientName(ProcessModuleInfoProperties.file_name, "fileName");
@@clientName(ProcessModuleInfoProperties.file_path, "filePath");
@@clientName(ProcessModuleInfoProperties.module_memory_size,
  "moduleMemorySize"
);
@@clientName(ProcessModuleInfoProperties.file_version, "fileVersion");
@@clientName(ProcessModuleInfoProperties.file_description, "fileDescription");
@@clientName(ProcessModuleInfoProperties.product_version, "productVersion");
@@clientName(ProcessModuleInfoProperties.is_debug, "isDebug");

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StorageMigrationOptions.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(StorageMigrationResponse.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(MigrateMySqlRequest.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(SitePhpErrorLogFlag.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(PremierAddOnPatchResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(DeletedAppRestoreRequest.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(SnapshotRestoreRequest.properties);

@@clientName(SiteExtensionInfoProperties.extension_id, "extensionId");
@@clientName(SiteExtensionInfoProperties.extension_type, "extensionType");
@@clientName(SiteExtensionInfoProperties.extension_url, "extensionUrl");
@@clientName(SiteExtensionInfoProperties.project_url, "projectUrl");
@@clientName(SiteExtensionInfoProperties.icon_url, "iconUrl");
@@clientName(SiteExtensionInfoProperties.license_url, "licenseUrl");
@@clientName(SiteExtensionInfoProperties.feed_url, "feedUrl");
@@clientName(SiteExtensionInfoProperties.installer_command_line_params,
  "installerCommandLineParams"
);
@@clientName(SiteExtensionInfoProperties.published_date_time,
  "publishedDateTime"
);
@@clientName(SiteExtensionInfoProperties.download_count, "downloadCount");
@@clientName(SiteExtensionInfoProperties.local_is_latest_version,
  "localIsLatestVersion"
);
@@clientName(SiteExtensionInfoProperties.local_path, "localPath");
@@clientName(SiteExtensionInfoProperties.installed_date_time,
  "installedDateTime"
);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(SlotDifference.properties);

@@clientName(TriggeredWebJobProperties.latest_run, "latestRun");
@@clientName(TriggeredWebJobProperties.history_url, "historyUrl");
@@clientName(TriggeredWebJobProperties.scheduler_logs_url, "schedulerLogsUrl");
@@clientName(TriggeredWebJobProperties.run_command, "runCommand");
@@clientName(TriggeredWebJobProperties.extra_info_url, "extraInfoUrl");
@@clientName(TriggeredWebJobProperties.web_job_type, "webJobType");
@@clientName(TriggeredWebJobProperties.using_sdk, "usingSdk");

@@clientName(TriggeredJobRun.web_job_id, "webJobId");
@@clientName(TriggeredJobRun.web_job_name, "webJobName");
@@clientName(TriggeredJobRun.start_time, "startTime");
@@clientName(TriggeredJobRun.end_time, "endTime");
@@clientName(TriggeredJobRun.output_url, "outputUrl");
@@clientName(TriggeredJobRun.error_url, "errorUrl");
@@clientName(TriggeredJobRun.job_name, "jobName");

@@clientName(WebJobProperties.run_command, "runCommand");
@@clientName(WebJobProperties.extra_info_url, "extraInfoUrl");
@@clientName(WebJobProperties.web_job_type, "webJobType");
@@clientName(WebJobProperties.using_sdk, "usingSdk");

@@clientName(WorkflowTriggerListCallbackUrlQueries.`api-version`, "apiVersion");

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(Workflow.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(PrivateLinkConnectionApprovalRequestResource.properties);

#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
@@flattenProperty(AppServiceEnvironmentResource.properties);
