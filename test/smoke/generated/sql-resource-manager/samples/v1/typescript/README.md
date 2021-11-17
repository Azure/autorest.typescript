# A generated TypeScript SDK samples for @msinternal/sql-resource-manager

These sample programs show how to use the TypeScript client libraries for @msinternal/sql-resource-manager in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [getARecoverableDatabase.ts][getARecoverableDatabase] | Gets a recoverable database, which is a resource representing a database's geo backup |  
| [getListOfRestorableDroppedDatabases.ts][getListOfRestorableDroppedDatabases] | Gets a list of recoverable databases |  
| [getARestorableDroppedDatabase.ts][getARestorableDroppedDatabase] | Gets a deleted database that can be restored |  
| [getListOfRestorableDroppedDatabases.ts][getListOfRestorableDroppedDatabases] | Gets a list of deleted databases that can be restored |  
| [createOrUpdateAServersSecureConnectionPolicy.ts][createOrUpdateAServersSecureConnectionPolicy] | Creates or updates the server's connection policy. |  
| [getAServersSecureConnectionPolicy.ts][getAServersSecureConnectionPolicy] | Gets the server's secure connection policy. |  
| [getDatabaseSecurityAlertPolicy.ts][getDatabaseSecurityAlertPolicy] | Gets a database's threat detection policy. |  
| [createDatabaseSecurityAlertPolicyMax.ts][createDatabaseSecurityAlertPolicyMax] | Creates or updates a database's threat detection policy. |  
| [createDatabaseSecurityAlertPolicyMin.ts][createDatabaseSecurityAlertPolicyMin] | Creates or updates a database's threat detection policy. |  
| [createOrUpdateDataMaskingPolicyMax.ts][createOrUpdateDataMaskingPolicyMax] | Creates or updates a database data masking policy |  
| [createOrUpdateDataMaskingPolicyMin.ts][createOrUpdateDataMaskingPolicyMin] | Creates or updates a database data masking policy |  
| [getDataMaskingPolicy.ts][getDataMaskingPolicy] | Gets a database data masking policy. |  
| [createOrUpdateDataMaskingRuleForDefaultMax.ts][createOrUpdateDataMaskingRuleForDefaultMax] | Creates or updates a database data masking rule. |  
| [createOrUpdateDataMaskingRuleForDefaultMin.ts][createOrUpdateDataMaskingRuleForDefaultMin] | Creates or updates a database data masking rule. |  
| [createOrUpdateDataMaskingRuleForNumbers.ts][createOrUpdateDataMaskingRuleForNumbers] | Creates or updates a database data masking rule. |  
| [createOrUpdateDataMaskingRuleForText.ts][createOrUpdateDataMaskingRuleForText] | Creates or updates a database data masking rule. |  
| [listDataMaskingRules.ts][listDataMaskingRules] | Gets a list of database data masking rules. |  
| [createAFirewallRuleMaxOrMin.ts][createAFirewallRuleMaxOrMin] | Creates or updates a firewall rule. |  
| [updateAFirewallRuleMaxOrMin.ts][updateAFirewallRuleMaxOrMin] | Creates or updates a firewall rule. |  
| [deleteAFirewallRule.ts][deleteAFirewallRule] | Deletes a firewall rule. |  
| [getFirewallRule.ts][getFirewallRule] | Gets a firewall rule. |  
| [listFirewallRules.ts][listFirewallRules] | Returns a list of firewall rules. |  
| [updateGeoBackupPolicy.ts][updateGeoBackupPolicy] | Updates a database geo backup policy. |  
| [getGeoBackupPolicy.ts][getGeoBackupPolicy] | Gets a geo backup policy. |  
| [listGeoBackupPolicies.ts][listGeoBackupPolicies] | Returns a list of geo backup policies. |  
| [importBacpacIntoNewDatabaseMaxWithSasKey.ts][importBacpacIntoNewDatabaseMaxWithSasKey] | Imports a bacpac into a new database.  |  
| [importBacpacIntoNewDatabaseMaxWithStorageKey.ts][importBacpacIntoNewDatabaseMaxWithStorageKey] | Imports a bacpac into a new database.  |  
| [importBacpacIntoNewDatabaseMinWithSasKey.ts][importBacpacIntoNewDatabaseMinWithSasKey] | Imports a bacpac into a new database.  |  
| [importBacpacIntoNewDatabaseMinWithStorageKey.ts][importBacpacIntoNewDatabaseMinWithStorageKey] | Imports a bacpac into a new database.  |  
| [importBacpacIntoAnExistingDatabaseMaxWithSasKey.ts][importBacpacIntoAnExistingDatabaseMaxWithSasKey] | Creates an import operation that imports a bacpac into an existing database. The existing database must be empty. |  
| [importBacpacIntoAnExistingDatabaseMaxWithStorageKey.ts][importBacpacIntoAnExistingDatabaseMaxWithStorageKey] | Creates an import operation that imports a bacpac into an existing database. The existing database must be empty. |  
| [importBacpacIntoAnExistingDatabaseMinWithSasKey.ts][importBacpacIntoAnExistingDatabaseMinWithSasKey] | Creates an import operation that imports a bacpac into an existing database. The existing database must be empty. |  
| [importBacpacIntoAnExistingDatabaseMinWithStorageKey.ts][importBacpacIntoAnExistingDatabaseMinWithStorageKey] | Creates an import operation that imports a bacpac into an existing database. The existing database must be empty. |  
| [exportADatabaseIntoANewBacpacFileWithSasKey.ts][exportADatabaseIntoANewBacpacFileWithSasKey] | Exports a database to a bacpac. |  
| [exportADatabaseIntoANewBacpacFileWithStorageKey.ts][exportADatabaseIntoANewBacpacFileWithStorageKey] | Exports a database to a bacpac. |  
| [listDatabaseUsageMetrics.ts][listDatabaseUsageMetrics] | Returns database metrics. |  
| [listDatabaseUsageMetrics.ts][listDatabaseUsageMetrics] | Returns database metric definitions. |  
| [getsAListOfDatabases.ts][getsAListOfDatabases] | Gets a list of databases. |  
| [getsADatabase.ts][getsADatabase] | Gets a database. |  
| [createsAHyperscaleDatabaseAndSpecifiesTheNumberOfReadonlyReplicas.ts][createsAHyperscaleDatabaseAndSpecifiesTheNumberOfReadonlyReplicas] | Creates a new database or updates an existing database. |  
| [createsAVCoreDatabaseBySpecifyingServiceObjectiveName.ts][createsAVCoreDatabaseBySpecifyingServiceObjectiveName] | Creates a new database or updates an existing database. |  
| [createsAVCoreDatabaseBySpecifyingSkuNameAndCapacity.ts][createsAVCoreDatabaseBySpecifyingSkuNameAndCapacity] | Creates a new database or updates an existing database. |  
| [createsAVCoreDatabaseBySpecifyingSkuName.ts][createsAVCoreDatabaseBySpecifyingSkuName] | Creates a new database or updates an existing database. |  
| [createsADataWarehouseBySpecifyingServiceObjectiveName.ts][createsADataWarehouseBySpecifyingServiceObjectiveName] | Creates a new database or updates an existing database. |  
| [createsADatabaseAsACopy.ts][createsADatabaseAsACopy] | Creates a new database or updates an existing database. |  
| [createsADatabaseAsAnOnLineSecondary.ts][createsADatabaseAsAnOnLineSecondary] | Creates a new database or updates an existing database. |  
| [createsADatabaseFromPointInTimeRestore.ts][createsADatabaseFromPointInTimeRestore] | Creates a new database or updates an existing database. |  
| [createsADatabaseFromRecoverableDatabaseId.ts][createsADatabaseFromRecoverableDatabaseId] | Creates a new database or updates an existing database. |  
| [createsADatabaseFromRestoreWithDatabaseDeletionTime.ts][createsADatabaseFromRestoreWithDatabaseDeletionTime] | Creates a new database or updates an existing database. |  
| [createsADatabaseFromRestoreWithRestorableDroppedDatabaseId.ts][createsADatabaseFromRestoreWithRestorableDroppedDatabaseId] | Creates a new database or updates an existing database. |  
| [createsADatabaseWithDefaultMode.ts][createsADatabaseWithDefaultMode] | Creates a new database or updates an existing database. |  
| [createsADatabaseWithMinimumNumberOfParameters.ts][createsADatabaseWithMinimumNumberOfParameters] | Creates a new database or updates an existing database. |  
| [deletesADatabase.ts][deletesADatabase] | Deletes the database. |  
| [updatesADatabase.ts][updatesADatabase] | Updates an existing database. |  
| [getsAListOfDatabasesInAnElasticPool.ts][getsAListOfDatabasesInAnElasticPool] | Gets a list of databases in an elastic pool. |  
| [pausesADatabase.ts][pausesADatabase] | Pauses a database. |  
| [resumesADatabase.ts][resumesADatabase] | Resumes a database. |  
| [upgradesADataWarehouse.ts][upgradesADataWarehouse] | Upgrades a data warehouse. |  
| [renamesADatabase.ts][renamesADatabase] | Renames a database. |  
| [failoverAnDatabase.ts][failoverAnDatabase] | Failovers a database. |  
| [listDatabaseUsageMetrics.ts][listDatabaseUsageMetrics] | Returns elastic pool  metrics. |  
| [listDatabaseUsageMetrics.ts][listDatabaseUsageMetrics] | Returns elastic pool metric definitions. |  
| [getAllElasticPoolsInAServer.ts][getAllElasticPoolsInAServer] | Gets all elastic pools in a server. |  
| [getAnElasticPool.ts][getAnElasticPool] | Gets an elastic pool. |  
| [createOrUpdateElasticPoolWithAllParameter.ts][createOrUpdateElasticPoolWithAllParameter] | Creates or updates an elastic pool. |  
| [createOrUpdateElasticPoolWithMinimumParameters.ts][createOrUpdateElasticPoolWithMinimumParameters] | Creates or updates an elastic pool. |  
| [deleteAnElasticPool.ts][deleteAnElasticPool] | Deletes an elastic pool. |  
| [updateAnElasticPoolWithAllParameter.ts][updateAnElasticPoolWithAllParameter] | Updates an elastic pool. |  
| [updateAnElasticPoolWithMinimumParameters.ts][updateAnElasticPoolWithMinimumParameters] | Updates an elastic pool. |  
| [failoverAnElasticPool.ts][failoverAnElasticPool] | Failovers an elastic pool. |  
| [getARecommendedElasticPool.ts][getARecommendedElasticPool] | Gets a recommended elastic pool. |  
| [listRecommendedElasticPools.ts][listRecommendedElasticPools] | Returns recommended elastic pools. |  
| [getRecommendedElasticPoolMetrics.ts][getRecommendedElasticPoolMetrics] | Returns recommended elastic pool metrics. |  
| [deleteAReplicationLink.ts][deleteAReplicationLink] | Deletes a database replication link. Cannot be done during failover. |  
| [getAReplicationLink.ts][getAReplicationLink] | Gets a database replication link. |  
| [failoverAReplicationLink.ts][failoverAReplicationLink] | Sets which replica database is primary by failing over from the current primary replica database. |  
| [failoverAReplicationLink.ts][failoverAReplicationLink] | Sets which replica database is primary by failing over from the current primary replica database. This operation might result in data loss. |  
| [deleteReplicationLink.ts][deleteReplicationLink] | Deletes a database replication link in forced or friendly way. |  
| [listReplicationLinks.ts][listReplicationLinks] | Lists a database's replication links. |  
| [deleteAServerCommunicationLink.ts][deleteAServerCommunicationLink] | Deletes a server communication link. |  
| [getAServerCommunicationLink.ts][getAServerCommunicationLink] | Returns a server communication link. |  
| [createAServerCommunicationLink.ts][createAServerCommunicationLink] | Creates a server communication link. |  
| [listServerCommunicationLinks.ts][listServerCommunicationLinks] | Gets a list of server communication links. |  
| [getAServiceObjective.ts][getAServiceObjective] | Gets a database service objective. |  
| [listServiceObjectives.ts][listServiceObjectives] | Returns database service objectives. |  
| [listElasticPoolActivity.ts][listElasticPoolActivity] | Returns elastic pool activities. |  
| [listElasticPoolDatabaseActivity.ts][listElasticPoolDatabaseActivity] | Returns activity on databases inside of an elastic pool. |  
| [getAServiceTierAdvisor.ts][getAServiceTierAdvisor] | Gets a service tier advisor. |  
| [getAListOfAServiceTierAdvisors.ts][getAListOfAServiceTierAdvisors] | Returns service tier advisors for specified database. |  
| [createOrUpdateADatabasesTransparentDataEncryptionConfiguration.ts][createOrUpdateADatabasesTransparentDataEncryptionConfiguration] | Creates or updates a database's transparent data encryption configuration. |  
| [getADatabasesTransparentDataEncryptionConfiguration.ts][getADatabasesTransparentDataEncryptionConfiguration] | Gets a database's transparent data encryption configuration. |  
| [listADatabasesTransparentDataEncryptionActivities.ts][listADatabasesTransparentDataEncryptionActivities] | Returns a database's transparent data encryption operation result. |  
| [listServersUsages.ts][listServersUsages] | Returns server usages. |  
| [listDatabaseUsageMetrics.ts][listDatabaseUsageMetrics] | Returns database usages. |  
| [getADatabasesAutomaticTuningSettings.ts][getADatabasesAutomaticTuningSettings] | Gets a database's automatic tuning. |  
| [updatesDatabaseAutomaticTuningSettingsWithAllProperties.ts][updatesDatabaseAutomaticTuningSettingsWithAllProperties] | Update automatic tuning properties for target database. |  
| [updatesDatabaseAutomaticTuningSettingsWithMinimalProperties.ts][updatesDatabaseAutomaticTuningSettingsWithMinimalProperties] | Update automatic tuning properties for target database. |  
| [revalidatesTheEncryptionProtector.ts][revalidatesTheEncryptionProtector] | Revalidates an existing encryption protector. |  
| [listEncryptionProtectorsByServer.ts][listEncryptionProtectorsByServer] | Gets a list of server encryption protectors |  
| [getTheEncryptionProtector.ts][getTheEncryptionProtector] | Gets a server encryption protector. |  
| [updateTheEncryptionProtectorToKeyVault.ts][updateTheEncryptionProtectorToKeyVault] | Updates an existing encryption protector. |  
| [updateTheEncryptionProtectorToServiceManaged.ts][updateTheEncryptionProtectorToServiceManaged] | Updates an existing encryption protector. |  
| [getFailoverGroup.ts][getFailoverGroup] | Gets a failover group. |  
| [createFailoverGroup.ts][createFailoverGroup] | Creates or updates a failover group. |  
| [deleteFailoverGroup.ts][deleteFailoverGroup] | Deletes a failover group. |  
| [updateFailoverGroup.ts][updateFailoverGroup] | Updates a failover group. |  
| [listFailoverGroup.ts][listFailoverGroup] | Lists the failover groups in a server. |  
| [plannedFailoverOfAFailoverGroup.ts][plannedFailoverOfAFailoverGroup] | Fails over from the current primary server to this server. |  
| [forcedFailoverOfAFailoverGroupAllowingDataLoss.ts][forcedFailoverOfAFailoverGroupAllowingDataLoss] | Fails over from the current primary server to this server. This operation might result in data loss. |  
| [listTheServerKeysByServer.ts][listTheServerKeysByServer] | Gets a list of server keys. |  
| [getTheServerKey.ts][getTheServerKey] | Gets a server key. |  
| [createsOrUpdatesAServerKey.ts][createsOrUpdatesAServerKey] | Creates or updates a server key. |  
| [deleteTheServerKey.ts][deleteTheServerKey] | Deletes the server key with the given name. |  
| [getASyncAgent.ts][getASyncAgent] | Gets a sync agent. |  
| [createANewSyncAgent.ts][createANewSyncAgent] | Creates or updates a sync agent. |  
| [updateASyncAgent.ts][updateASyncAgent] | Creates or updates a sync agent. |  
| [deleteASyncAgent.ts][deleteASyncAgent] | Deletes a sync agent. |  
| [getSyncAgentsUnderAServer.ts][getSyncAgentsUnderAServer] | Lists sync agents in a server. |  
| [generateASyncAgentKey.ts][generateASyncAgentKey] | Generates a sync agent key. |  
| [getSyncAgentLinkedDatabases.ts][getSyncAgentLinkedDatabases] | Lists databases linked to a sync agent. |  
| [getASyncDatabaseId.ts][getASyncDatabaseId] | Gets a collection of sync database ids. |  
| [refreshAHubDatabaseSchema.ts][refreshAHubDatabaseSchema] | Refreshes a hub database schema. |  
| [getAHubDatabaseSchema.ts][getAHubDatabaseSchema] | Gets a collection of hub database schemas. |  
| [getSyncGroupLogs.ts][getSyncGroupLogs] | Gets a collection of sync group logs. |  
| [cancelASyncGroupSynchronization.ts][cancelASyncGroupSynchronization] | Cancels a sync group synchronization. |  
| [triggerASyncGroupSynchronization.ts][triggerASyncGroupSynchronization] | Triggers a sync group synchronization. |  
| [getASyncGroup.ts][getASyncGroup] | Gets a sync group. |  
| [createASyncGroup.ts][createASyncGroup] | Creates or updates a sync group. |  
| [updateASyncGroup.ts][updateASyncGroup] | Creates or updates a sync group. |  
| [deleteASyncGroup.ts][deleteASyncGroup] | Deletes a sync group. |  
| [updateASyncGroup.ts][updateASyncGroup] | Updates a sync group. |  
| [listSyncGroupsUnderAGivenDatabase.ts][listSyncGroupsUnderAGivenDatabase] | Lists sync groups under a hub database. |  
| [getASyncMember.ts][getASyncMember] | Gets a sync member. |  
| [createANewSyncMember.ts][createANewSyncMember] | Creates or updates a sync member. |  
| [updateASyncMember.ts][updateASyncMember] | Creates or updates a sync member. |  
| [deleteASyncMember.ts][deleteASyncMember] | Deletes a sync member. |  
| [updateAnExistingSyncMember.ts][updateAnExistingSyncMember] | Updates an existing sync member. |  
| [listSyncMembersUnderASyncGroup.ts][listSyncMembersUnderASyncGroup] | Lists sync members in the given sync group. |  
| [getASyncMemberSchema.ts][getASyncMemberSchema] | Gets a sync member database schema. |  
| [refreshASyncMemberDatabaseSchema.ts][refreshASyncMemberDatabaseSchema] | Refreshes a sync member database schema. |  
| [listSubscriptionUsagesInTheGivenLocation.ts][listSubscriptionUsagesInTheGivenLocation] | Gets all subscription usage metrics in a given location. |  
| [getSpecificSubscriptionUsageInTheGivenLocation.ts][getSpecificSubscriptionUsageInTheGivenLocation] | Gets a subscription usage metric. |  
| [listVirtualClusters.ts][listVirtualClusters] | Gets a list of all virtualClusters in the subscription. |  
| [listVirtualClustersByResourceGroup.ts][listVirtualClustersByResourceGroup] | Gets a list of virtual clusters in a resource group. |  
| [getVirtualCluster.ts][getVirtualCluster] | Gets a virtual cluster. |  
| [deleteVirtualCluster.ts][deleteVirtualCluster] | Deletes a virtual cluster. |  
| [updateVirtualClusterWithTags.ts][updateVirtualClusterWithTags] | Updates a virtual cluster. |  
| [getsAVirtualNetworkRule.ts][getsAVirtualNetworkRule] | Gets a virtual network rule. |  
| [createOrUpdateAVirtualNetworkRule.ts][createOrUpdateAVirtualNetworkRule] | Creates or updates an existing virtual network rule. |  
| [deleteAVirtualNetworkRule.ts][deleteAVirtualNetworkRule] | Deletes the virtual network rule with the given name. |  
| [listVirtualNetworkRules.ts][listVirtualNetworkRules] | Gets a list of virtual network rules in a server. |  
| [getAnExtendedDatabasesBlobAuditingPolicy.ts][getAnExtendedDatabasesBlobAuditingPolicy] | Gets an extended database's blob auditing policy. |  
| [createOrUpdateAnExtendedDatabasesAzureMonitorAuditingPolicyWithMinimalParameters.ts][createOrUpdateAnExtendedDatabasesAzureMonitorAuditingPolicyWithMinimalParameters] | Creates or updates an extended database's blob auditing policy. |  
| [createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithAllParameters.ts][createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithAllParameters] | Creates or updates an extended database's blob auditing policy. |  
| [createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithMinimalParameters.ts][createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithMinimalParameters] | Creates or updates an extended database's blob auditing policy. |  
| [listExtendedAuditingSettingsOfADatabase.ts][listExtendedAuditingSettingsOfADatabase] | Lists extended auditing settings of a database. |  
| [getAServersBlobExtendedAuditingPolicy.ts][getAServersBlobExtendedAuditingPolicy] | Gets an extended server's blob auditing policy. |  
| [updateAServersExtendedBlobAuditingPolicyWithAllParameters.ts][updateAServersExtendedBlobAuditingPolicyWithAllParameters] | Creates or updates an extended server's blob auditing policy. |  
| [updateAServersExtendedBlobAuditingPolicyWithMinimalParameters.ts][updateAServersExtendedBlobAuditingPolicyWithMinimalParameters] | Creates or updates an extended server's blob auditing policy. |  
| [listExtendedAuditingSettingsOfAServer.ts][listExtendedAuditingSettingsOfAServer] | Lists extended auditing settings of a server. |  
| [getAServersBlobAuditingPolicy.ts][getAServersBlobAuditingPolicy] | Gets a server's blob auditing policy. |  
| [updateAServersBlobAuditingPolicyWithAllParameters.ts][updateAServersBlobAuditingPolicyWithAllParameters] | Creates or updates a server's blob auditing policy. |  
| [updateAServersBlobAuditingPolicyWithMinimalParameters.ts][updateAServersBlobAuditingPolicyWithMinimalParameters] | Creates or updates a server's blob auditing policy. |  
| [listAuditingSettingsOfAServer.ts][listAuditingSettingsOfAServer] | Lists auditing settings of a server. |  
| [getADatabasesBlobAuditingPolicy.ts][getADatabasesBlobAuditingPolicy] | Gets a database's blob auditing policy. |  
| [createOrUpdateADatabasesAzureMonitorAuditingPolicyWithMinimalParameters.ts][createOrUpdateADatabasesAzureMonitorAuditingPolicyWithMinimalParameters] | Creates or updates a database's blob auditing policy. |  
| [createOrUpdateADatabasesBlobAuditingPolicyWithAllParameters.ts][createOrUpdateADatabasesBlobAuditingPolicyWithAllParameters] | Creates or updates a database's blob auditing policy. |  
| [createOrUpdateADatabasesBlobAuditingPolicyWithMinimalParameters.ts][createOrUpdateADatabasesBlobAuditingPolicyWithMinimalParameters] | Creates or updates a database's blob auditing policy. |  
| [listAuditSettingsOfADatabase.ts][listAuditSettingsOfADatabase] | Lists auditing settings of a database. |  
| [getsADatabasesVulnerabilityAssessmentRuleBaseline.ts][getsADatabasesVulnerabilityAssessmentRuleBaseline] | Gets a database's vulnerability assessment rule baseline. |  
| [createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline.ts][createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline] | Creates or updates a database's vulnerability assessment rule baseline. |  
| [removesADatabasesVulnerabilityAssessmentRuleBaseline.ts][removesADatabasesVulnerabilityAssessmentRuleBaseline] | Removes the database's vulnerability assessment rule baseline. |  
| [getADatabasesVulnerabilityAssessment.ts][getADatabasesVulnerabilityAssessment] | Gets the database's vulnerability assessment. |  
| [createADatabasesVulnerabilityAssessmentWithAllParameters.ts][createADatabasesVulnerabilityAssessmentWithAllParameters] | Creates or updates the database's vulnerability assessment. |  
| [createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified.ts][createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified] | Creates or updates the database's vulnerability assessment. |  
| [createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified.ts][createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified] | Creates or updates the database's vulnerability assessment. |  
| [removeADatabasesVulnerabilityAssessment.ts][removeADatabasesVulnerabilityAssessment] | Removes the database's vulnerability assessment. |  
| [getTheDatabasesVulnerabilityAssessmentPolicies.ts][getTheDatabasesVulnerabilityAssessmentPolicies] | Lists the vulnerability assessment policies associated with a database. |  
| [listJobAgentsInAServer.ts][listJobAgentsInAServer] | Gets a list of job agents in a server. |  
| [getAJobAgent.ts][getAJobAgent] | Gets a job agent. |  
| [createOrUpdateAJobAgentWithAllProperties.ts][createOrUpdateAJobAgentWithAllProperties] | Creates or updates a job agent. |  
| [createOrUpdateAJobAgentWithMinimumProperties.ts][createOrUpdateAJobAgentWithMinimumProperties] | Creates or updates a job agent. |  
| [deleteAJobAgent.ts][deleteAJobAgent] | Deletes a job agent. |  
| [updateAJobAgentsTags.ts][updateAJobAgentsTags] | Updates a job agent. |  
| [listCredentialsInAJobAgent.ts][listCredentialsInAJobAgent] | Gets a list of jobs credentials. |  
| [getACredential.ts][getACredential] | Gets a jobs credential. |  
| [createOrUpdateACredential.ts][createOrUpdateACredential] | Creates or updates a job credential. |  
| [deleteACredential.ts][deleteACredential] | Deletes a job credential. |  
| [listAllJobExecutionsInAJobAgentWithFiltering.ts][listAllJobExecutionsInAJobAgentWithFiltering] | Lists all executions in a job agent. |  
| [listAllJobExecutionsInAJobAgent.ts][listAllJobExecutionsInAJobAgent] | Lists all executions in a job agent. |  
| [cancelAJobExecution.ts][cancelAJobExecution] | Requests cancellation of a job execution. |  
| [startAJobExecution.ts][startAJobExecution] | Starts an elastic job execution. |  
| [listAJobsExecutions.ts][listAJobsExecutions] | Lists a job's executions. |  
| [getAJobExecution.ts][getAJobExecution] | Gets a job execution. |  
| [createJobExecution.ts][createJobExecution] | Creates or updates a job execution. |  
| [listJobsInAJobAgent.ts][listJobsInAJobAgent] | Gets a list of jobs. |  
| [getAJob.ts][getAJob] | Gets a job. |  
| [createAJobWithAllPropertiesSpecified.ts][createAJobWithAllPropertiesSpecified] | Creates or updates a job. |  
| [createAJobWithDefaultProperties.ts][createAJobWithDefaultProperties] | Creates or updates a job. |  
| [deleteAJob.ts][deleteAJob] | Deletes a job. |  
| [listJobStepExecutions.ts][listJobStepExecutions] | Lists the step executions of a job execution. |  
| [getAJobStepExecution.ts][getAJobStepExecution] | Gets a step execution of a job execution. |  
| [listJobStepsForTheSpecifiedVersionOfAJob.ts][listJobStepsForTheSpecifiedVersionOfAJob] | Gets all job steps in the specified job version. |  
| [getTheSpecifiedVersionOfAJobStep.ts][getTheSpecifiedVersionOfAJobStep] | Gets the specified version of a job step. |  
| [listJobStepsForTheLatestVersionOfAJob.ts][listJobStepsForTheLatestVersionOfAJob] | Gets all job steps for a job's current version. |  
| [getTheLatestVersionOfAJobStep.ts][getTheLatestVersionOfAJobStep] | Gets a job step in a job's current version. |  
| [createOrUpdateAJobStepWithAllPropertiesSpecified.ts][createOrUpdateAJobStepWithAllPropertiesSpecified] | Creates or updates a job step. This will implicitly create a new job version. |  
| [createOrUpdateAJobStepWithMinimalPropertiesSpecified.ts][createOrUpdateAJobStepWithMinimalPropertiesSpecified] | Creates or updates a job step. This will implicitly create a new job version. |  
| [deleteAJobStep.ts][deleteAJobStep] | Deletes a job step. This will implicitly create a new job version. |  
| [listJobStepTargetExecutions.ts][listJobStepTargetExecutions] | Lists target executions for all steps of a job execution. |  
| [listJobStepTargetExecutions.ts][listJobStepTargetExecutions] | Lists the target executions of a job step execution. |  
| [getAJobStepTargetExecution.ts][getAJobStepTargetExecution] | Gets a target execution. |  
| [getAllTargetGroupsInAnAgent.ts][getAllTargetGroupsInAnAgent] | Gets all target groups in an agent. |  
| [getATargetGroup.ts][getATargetGroup] | Gets a target group. |  
| [createOrUpdateATargetGroupWithAllProperties.ts][createOrUpdateATargetGroupWithAllProperties] | Creates or updates a target group. |  
| [createOrUpdateATargetGroupWithMinimalProperties.ts][createOrUpdateATargetGroupWithMinimalProperties] | Creates or updates a target group. |  
| [deleteATargetGroup.ts][deleteATargetGroup] | Deletes a target group. |  
| [getAllVersionsOfAJob.ts][getAllVersionsOfAJob] | Gets all versions of a job. |  
| [getAVersionOfAJob.ts][getAVersionOfAJob] | Gets a job version. |  
| [getTheLongTermRetentionBackup.ts][getTheLongTermRetentionBackup] | Gets a long term retention backup. |  
| [deleteTheLongTermRetentionBackup.ts][deleteTheLongTermRetentionBackup] | Deletes a long term retention backup. |  
| [getAllLongTermRetentionBackupsUnderTheDatabase.ts][getAllLongTermRetentionBackupsUnderTheDatabase] | Lists all long term retention backups for a database. |  
| [getAllLongTermRetentionBackupsUnderTheLocation.ts][getAllLongTermRetentionBackupsUnderTheLocation] | Lists the long term retention backups for a given location. |  
| [getAllLongTermRetentionBackupsUnderTheServer.ts][getAllLongTermRetentionBackupsUnderTheServer] | Lists the long term retention backups for a given server. |  
| [getTheLongTermRetentionBackup.ts][getTheLongTermRetentionBackup] | Gets a long term retention backup. |  
| [deleteTheLongTermRetentionBackup.ts][deleteTheLongTermRetentionBackup] | Deletes a long term retention backup. |  
| [getAllLongTermRetentionBackupsUnderTheDatabase.ts][getAllLongTermRetentionBackupsUnderTheDatabase] | Lists all long term retention backups for a database. |  
| [getAllLongTermRetentionBackupsUnderTheLocation.ts][getAllLongTermRetentionBackupsUnderTheLocation] | Lists the long term retention backups for a given location. |  
| [getAllLongTermRetentionBackupsUnderTheServer.ts][getAllLongTermRetentionBackupsUnderTheServer] | Lists the long term retention backups for a given server. |  
| [getTheLongTermRetentionPolicyForTheDatabase.ts][getTheLongTermRetentionPolicyForTheDatabase] | Gets a database's long term retention policy. |  
| [createOrUpdateTheLongTermRetentionPolicyForTheDatabase.ts][createOrUpdateTheLongTermRetentionPolicyForTheDatabase] | Sets a database's long term retention policy. |  
| [getTheLongTermRetentionPolicyForTheDatabase.ts][getTheLongTermRetentionPolicyForTheDatabase] | Gets a database's long term retention policy. |  
| [getTheShortTermRetentionPolicyForTheDatabase.ts][getTheShortTermRetentionPolicyForTheDatabase] | Gets a managed database's short term retention policy. |  
| [updateTheShortTermRetentionPolicyForTheDatabase.ts][updateTheShortTermRetentionPolicyForTheDatabase] | Updates a managed database's short term retention policy. |  
| [updateTheShortTermRetentionPolicyForTheDatabase.ts][updateTheShortTermRetentionPolicyForTheDatabase] | Updates a managed database's short term retention policy. |  
| [getTheShortTermRetentionPolicyListForTheDatabase.ts][getTheShortTermRetentionPolicyListForTheDatabase] | Gets a managed database's short term retention policy list. |  
| [getTheShortTermRetentionPolicyForTheDatabase.ts][getTheShortTermRetentionPolicyForTheDatabase] | Gets a dropped database's short term retention policy. |  
| [updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase.ts][updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase] | Sets a database's long term retention policy. |  
| [updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase.ts][updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase] | Sets a database's long term retention policy. |  
| [getTheShortTermRetentionPolicyListForTheDatabase.ts][getTheShortTermRetentionPolicyListForTheDatabase] | Gets a dropped database's short term retention policy list. |  
| [getAServersAutomaticTuningSettings.ts][getAServersAutomaticTuningSettings] | Retrieves server automatic tuning options. |  
| [updatesServerAutomaticTuningSettingsWithAllProperties.ts][updatesServerAutomaticTuningSettingsWithAllProperties] | Update automatic tuning options on server. |  
| [updatesServerAutomaticTuningSettingsWithMinimalProperties.ts][updatesServerAutomaticTuningSettingsWithMinimalProperties] | Update automatic tuning options on server. |  
| [getServerDnsAlias.ts][getServerDnsAlias] | Gets a server DNS alias. |  
| [createServerDnsAlias.ts][createServerDnsAlias] | Creates a server dns alias. |  
| [deleteServerDnsAlias.ts][deleteServerDnsAlias] | Deletes the server DNS alias with the given name. |  
| [listServerDnsAliases.ts][listServerDnsAliases] | Gets a list of server DNS aliases for a server. |  
| [acquireServerDnsAlias.ts][acquireServerDnsAlias] | Acquires server DNS alias from another server. |  
| [getAServersThreatDetectionPolicy.ts][getAServersThreatDetectionPolicy] | Get a server's security alert policy. |  
| [updateAServersThreatDetectionPolicyWithAllParameters.ts][updateAServersThreatDetectionPolicyWithAllParameters] | Creates or updates a threat detection policy. |  
| [updateAServersThreatDetectionPolicyWithMinimalParameters.ts][updateAServersThreatDetectionPolicyWithMinimalParameters] | Creates or updates a threat detection policy. |  
| [listTheServersThreatDetectionPolicies.ts][listTheServersThreatDetectionPolicies] | Get the server's threat detection policies. |  
| [listRestorableDroppedDatabasesByManagedInstances.ts][listRestorableDroppedDatabasesByManagedInstances] | Gets a list of restorable dropped managed databases. |  
| [getsARestorableDroppedManagedDatabase.ts][getsARestorableDroppedManagedDatabase] | Gets a restorable dropped managed database. |  
| [listDatabaseRestorePoints.ts][listDatabaseRestorePoints] | Gets a list of database restore points. |  
| [listDatawarehouseDatabaseRestorePoints.ts][listDatawarehouseDatabaseRestorePoints] | Gets a list of database restore points. |  
| [createsDatawarehouseDatabaseRestorePoint.ts][createsDatawarehouseDatabaseRestorePoint] | Creates a restore point for a data warehouse. |  
| [getsADatabaseRestorePoint.ts][getsADatabaseRestorePoint] | Gets a restore point. |  
| [getsADatawarehouseDatabaseRestorePoint.ts][getsADatawarehouseDatabaseRestorePoint] | Gets a restore point. |  
| [deletesARestorePoint.ts][deletesARestorePoint] | Deletes a restore point. |  
| [getADatabasesThreatDetectionPolicy.ts][getADatabasesThreatDetectionPolicy] | Gets a managed database's security alert policy. |  
| [updateADatabasesThreatDetectionPolicyWithAllParameters.ts][updateADatabasesThreatDetectionPolicyWithAllParameters] | Creates or updates a database's security alert policy. |  
| [updateADatabasesThreatDetectionPolicyWithMinimalParameters.ts][updateADatabasesThreatDetectionPolicyWithMinimalParameters] | Creates or updates a database's security alert policy. |  
| [getAListOfTheDatabasesThreatDetectionPolicies.ts][getAListOfTheDatabasesThreatDetectionPolicies] | Gets a list of managed database's security alert policies. |  
| [getAManagedServersThreatDetectionPolicy.ts][getAManagedServersThreatDetectionPolicy] | Get a managed server's threat detection policy. |  
| [updateAServersThreatDetectionPolicyWithAllParameters.ts][updateAServersThreatDetectionPolicyWithAllParameters] | Creates or updates a threat detection policy. |  
| [updateAServersThreatDetectionPolicyWithMinimalParameters.ts][updateAServersThreatDetectionPolicyWithMinimalParameters] | Creates or updates a threat detection policy. |  
| [getTheManagedServersThreatDetectionPolicies.ts][getTheManagedServersThreatDetectionPolicies] | Get the managed server's threat detection policies. |  
| [getsTheCurrentSensitivityLabelsOfAGivenDatabase.ts][getsTheCurrentSensitivityLabelsOfAGivenDatabase] | Gets the sensitivity labels of a given database |  
| [getsTheRecommendedSensitivityLabelsOfAGivenDatabase.ts][getsTheRecommendedSensitivityLabelsOfAGivenDatabase] | Gets the sensitivity labels of a given database |  
| [enablesSensitivityRecommendationsOnAGivenColumn.ts][enablesSensitivityRecommendationsOnAGivenColumn] | Enables sensitivity recommendations on a given column (recommendations are enabled by default on all columns) |  
| [disablesSensitivityRecommendationsOnAGivenColumn.ts][disablesSensitivityRecommendationsOnAGivenColumn] | Disables sensitivity recommendations on a given column |  
| [getsTheSensitivityLabelOfAGivenColumn.ts][getsTheSensitivityLabelOfAGivenColumn] | Gets the sensitivity label of a given column |  
| [updatesTheSensitivityLabelOfAGivenColumnWithAllParameters.ts][updatesTheSensitivityLabelOfAGivenColumnWithAllParameters] | Creates or updates the sensitivity label of a given column |  
| [deletesTheSensitivityLabelOfAGivenColumn.ts][deletesTheSensitivityLabelOfAGivenColumn] | Deletes the sensitivity label of a given column |  
| [listAdministratorsOfManagedInstance.ts][listAdministratorsOfManagedInstance] | Gets a list of managed instance administrators. |  
| [getAdministratorOfManagedInstance.ts][getAdministratorOfManagedInstance] | Gets a managed instance administrator. |  
| [createAdministratorOfManagedInstance.ts][createAdministratorOfManagedInstance] | Creates or updates a managed instance administrator. |  
| [updateAdministratorOfManagedInstance.ts][updateAdministratorOfManagedInstance] | Creates or updates a managed instance administrator. |  
| [deleteAdministratorOfManagedInstance.ts][deleteAdministratorOfManagedInstance] | Deletes a managed instance administrator. |  
| [cancelTheDatabaseManagementOperation.ts][cancelTheDatabaseManagementOperation] | Cancels the asynchronous operation on the database. |  
| [listTheDatabaseManagementOperations.ts][listTheDatabaseManagementOperations] | Gets a list of operations performed on the database. |  
| [cancelTheElasticPoolManagementOperation.ts][cancelTheElasticPoolManagementOperation] | Cancels the asynchronous operation on the elastic pool. |  
| [listTheElasticPoolManagementOperations.ts][listTheElasticPoolManagementOperations] | Gets a list of operations performed on the elastic pool. |  
| [getsTheListOfADatabaseVulnerabilityAssessmentScanRecords.ts][getsTheListOfADatabaseVulnerabilityAssessmentScanRecords] | Lists the vulnerability assessment scans of a database. |  
| [getsADatabaseVulnerabilityAssessmentScanRecordByScanId.ts][getsADatabaseVulnerabilityAssessmentScanRecordByScanId] | Gets a vulnerability assessment scan record of a database. |  
| [executesADatabasesVulnerabilityAssessmentScan.ts][executesADatabasesVulnerabilityAssessmentScan] | Executes a Vulnerability Assessment database scan. |  
| [exportADatabasesVulnerabilityAssessmentScanResults.ts][exportADatabasesVulnerabilityAssessmentScanResults] | Convert an existing scan result to a human readable format. If already exists nothing happens |  
| [getsADatabasesVulnerabilityAssessmentRuleBaseline.ts][getsADatabasesVulnerabilityAssessmentRuleBaseline] | Gets a database's vulnerability assessment rule baseline. |  
| [createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline.ts][createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline] | Creates or updates a database's vulnerability assessment rule baseline. |  
| [removesADatabasesVulnerabilityAssessmentRuleBaseline.ts][removesADatabasesVulnerabilityAssessmentRuleBaseline] | Removes the database's vulnerability assessment rule baseline. |  
| [getsTheListOfADatabaseVulnerabilityAssessmentScanRecords.ts][getsTheListOfADatabaseVulnerabilityAssessmentScanRecords] | Lists the vulnerability assessment scans of a database. |  
| [getsADatabaseVulnerabilityAssessmentScanRecordByScanId.ts][getsADatabaseVulnerabilityAssessmentScanRecordByScanId] | Gets a vulnerability assessment scan record of a database. |  
| [executesADatabasesVulnerabilityAssessmentScan.ts][executesADatabasesVulnerabilityAssessmentScan] | Executes a Vulnerability Assessment database scan. |  
| [exportADatabasesVulnerabilityAssessmentScanResults.ts][exportADatabasesVulnerabilityAssessmentScanResults] | Convert an existing scan result to a human readable format. If already exists nothing happens |  
| [getADatabasesVulnerabilityAssessment.ts][getADatabasesVulnerabilityAssessment] | Gets the database's vulnerability assessment. |  
| [createADatabasesVulnerabilityAssessmentWithAllParameters.ts][createADatabasesVulnerabilityAssessmentWithAllParameters] | Creates or updates the database's vulnerability assessment. |  
| [createADatabasesVulnerabilityAssessmentWithMinimalParameters.ts][createADatabasesVulnerabilityAssessmentWithMinimalParameters] | Creates or updates the database's vulnerability assessment. |  
| [removeADatabasesVulnerabilityAssessment.ts][removeADatabasesVulnerabilityAssessment] | Removes the database's vulnerability assessment. |  
| [getADatabasesVulnerabilityAssessmentsList.ts][getADatabasesVulnerabilityAssessmentsList] | Lists the vulnerability assessments of a managed database. |  
| [getFailoverGroup.ts][getFailoverGroup] | Gets a failover group. |  
| [createFailoverGroup.ts][createFailoverGroup] | Creates or updates a failover group. |  
| [deleteFailoverGroup.ts][deleteFailoverGroup] | Deletes a failover group. |  
| [listFailoverGroup.ts][listFailoverGroup] | Lists the failover groups in a location. |  
| [plannedFailoverOfAFailoverGroup.ts][plannedFailoverOfAFailoverGroup] | Fails over from the current primary managed instance to this managed instance. |  
| [forcedFailoverOfAFailoverGroupAllowingDataLoss.ts][forcedFailoverOfAFailoverGroupAllowingDataLoss] | Fails over from the current primary managed instance to this managed instance. This operation might result in data loss. |  
| [getTheShortTermRetentionPolicyForTheDatabase.ts][getTheShortTermRetentionPolicyForTheDatabase] | Gets a database's short term retention policy. |  
| [updateTheShortTermRetentionPolicyForTheDatabase.ts][updateTheShortTermRetentionPolicyForTheDatabase] | Updates a database's short term retention policy. |  
| [updateTheShortTermRetentionPolicyForTheDatabase.ts][updateTheShortTermRetentionPolicyForTheDatabase] | Updates a database's short term retention policy. |  
| [getTheShortTermRetentionPolicyForTheDatabase.ts][getTheShortTermRetentionPolicyForTheDatabase] | Gets a database's short term retention policy. |  
| [uploadATdeCertificate.ts][uploadATdeCertificate] | Creates a TDE certificate for a given server. |  
| [uploadATdeCertificate.ts][uploadATdeCertificate] | Creates a TDE certificate for a given server. |  
| [listTheKeysForAManagedInstance.ts][listTheKeysForAManagedInstance] | Gets a list of managed instance keys. |  
| [getTheManagedInstanceKey.ts][getTheManagedInstanceKey] | Gets a managed instance key. |  
| [createsOrUpdatesAManagedInstanceKey.ts][createsOrUpdatesAManagedInstanceKey] | Creates or updates a managed instance key. |  
| [deleteTheManagedInstanceKey.ts][deleteTheManagedInstanceKey] | Deletes the managed instance key with the given name. |  
| [revalidatesTheEncryptionProtector.ts][revalidatesTheEncryptionProtector] | Revalidates an existing encryption protector. |  
| [listEncryptionProtectorsByManagedInstance.ts][listEncryptionProtectorsByManagedInstance] | Gets a list of managed instance encryption protectors |  
| [getTheEncryptionProtector.ts][getTheEncryptionProtector] | Gets a managed instance encryption protector. |  
| [updateTheEncryptionProtectorToKeyVault.ts][updateTheEncryptionProtectorToKeyVault] | Updates an existing encryption protector. |  
| [updateTheEncryptionProtectorToServiceManaged.ts][updateTheEncryptionProtectorToServiceManaged] | Updates an existing encryption protector. |  
| [listRecoverableDatabasesByManagedInstances.ts][listRecoverableDatabasesByManagedInstances] | Gets a list of recoverable managed databases. |  
| [getsARecoverableDatabasesByManagedInstances.ts][getsARecoverableDatabasesByManagedInstances] | Gets a recoverable managed database. |  
| [getAManagedInstancesVulnerabilityAssessment.ts][getAManagedInstancesVulnerabilityAssessment] | Gets the managed instance's vulnerability assessment. |  
| [createAManagedInstancesVulnerabilityAssessmentWithAllParameters.ts][createAManagedInstancesVulnerabilityAssessmentWithAllParameters] | Creates or updates the managed instance's vulnerability assessment. |  
| [createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified.ts][createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified] | Creates or updates the managed instance's vulnerability assessment. |  
| [createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified.ts][createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified] | Creates or updates the managed instance's vulnerability assessment. |  
| [removeAManagedInstancesVulnerabilityAssessment.ts][removeAManagedInstancesVulnerabilityAssessment] | Removes the managed instance's vulnerability assessment. |  
| [getAManagedInstancesVulnerabilityAssessmentPolicies.ts][getAManagedInstancesVulnerabilityAssessmentPolicies] | Gets the managed instance's vulnerability assessment policies. |  
| [getAServersVulnerabilityAssessment.ts][getAServersVulnerabilityAssessment] | Gets the server's vulnerability assessment. |  
| [createAServersVulnerabilityAssessmentWithAllParameters.ts][createAServersVulnerabilityAssessmentWithAllParameters] | Creates or updates the server's vulnerability assessment. |  
| [createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified.ts][createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified] | Creates or updates the server's vulnerability assessment. |  
| [createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified.ts][createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified] | Creates or updates the server's vulnerability assessment. |  
| [removeAServersVulnerabilityAssessment.ts][removeAServersVulnerabilityAssessment] | Removes the server's vulnerability assessment. |  
| [getAServersVulnerabilityAssessmentPolicies.ts][getAServersVulnerabilityAssessmentPolicies] | Lists the vulnerability assessment policies associated with a server. |  
| [getsTheSensitivityLabelOfAGivenColumnInAManagedDatabase.ts][getsTheSensitivityLabelOfAGivenColumnInAManagedDatabase] | Gets the sensitivity label of a given column |  
| [updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase.ts][updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase] | Creates or updates the sensitivity label of a given column |  
| [deletesTheSensitivityLabelOfAGivenColumnInAManagedDatabase.ts][deletesTheSensitivityLabelOfAGivenColumnInAManagedDatabase] | Deletes the sensitivity label of a given column |  
| [disablesTheSensitivityRecommendationsOnAGivenColumn.ts][disablesTheSensitivityRecommendationsOnAGivenColumn] | Disables sensitivity recommendations on a given column |  
| [enablesTheSensitivityRecommendationsOnAGivenColumn.ts][enablesTheSensitivityRecommendationsOnAGivenColumn] | Enables sensitivity recommendations on a given column (recommendations are enabled by default on all columns) |  
| [getsTheCurrentSensitivityLabelsOfAGivenDatabaseInAManagedDatabase.ts][getsTheCurrentSensitivityLabelsOfAGivenDatabaseInAManagedDatabase] | Gets the sensitivity labels of a given database |  
| [getsTheRecommendedSensitivityLabelsOfAGivenDatabaseInAManagedDatabase.ts][getsTheRecommendedSensitivityLabelsOfAGivenDatabaseInAManagedDatabase] | Gets the sensitivity labels of a given database |  
| [getAnInstancePool.ts][getAnInstancePool] | Gets an instance pool. |  
| [createAnInstancePoolWithAllProperties.ts][createAnInstancePoolWithAllProperties] | Creates or updates an instance pool. |  
| [createAnInstancePoolWithMinProperties.ts][createAnInstancePoolWithMinProperties] | Creates or updates an instance pool. |  
| [deleteAnInstancePool.ts][deleteAnInstancePool] | Deletes an instance pool |  
| [patchAnInstancePool.ts][patchAnInstancePool] | Updates an instance pool. |  
| [listInstancePoolsByResourceGroup.ts][listInstancePoolsByResourceGroup] | Gets a list of instance pools in the resource group |  
| [listInstancePoolsInTheSubscription.ts][listInstancePoolsInTheSubscription] | Gets a list of all instance pools in the subscription. |  
| [listInstancePoolUsagesExpandedWithChildren.ts][listInstancePoolUsagesExpandedWithChildren] | Gets all instance pool usage metrics |  
| [listInstancePoolUsages.ts][listInstancePoolUsages] | Gets all instance pool usage metrics |  
| [listManagedInstancesByInstancePool.ts][listManagedInstancesByInstancePool] | Gets a list of all managed instances in an instance pool. |  
| [listManagedInstancesByResourceGroup.ts][listManagedInstancesByResourceGroup] | Gets a list of managed instances in a resource group. |  
| [getManagedInstance.ts][getManagedInstance] | Gets a managed instance. |  
| [createManagedInstanceWithAllProperties.ts][createManagedInstanceWithAllProperties] | Creates or updates a managed instance. |  
| [createManagedInstanceWithMinimalProperties.ts][createManagedInstanceWithMinimalProperties] | Creates or updates a managed instance. |  
| [deleteManagedInstance.ts][deleteManagedInstance] | Deletes a managed instance. |  
| [updateManagedInstanceWithAllProperties.ts][updateManagedInstanceWithAllProperties] | Updates a managed instance. |  
| [updateManagedInstanceWithMinimalProperties.ts][updateManagedInstanceWithMinimalProperties] | Updates a managed instance. |  
| [listManagedInstances.ts][listManagedInstances] | Gets a list of all managed instances in the subscription. |  
| [getsPrivateEndpointConnection.ts][getsPrivateEndpointConnection] | Gets a private endpoint connection. |  
| [approveOrRejectAPrivateEndpointConnectionWithAGivenName.ts][approveOrRejectAPrivateEndpointConnectionWithAGivenName] | Approve or reject a private endpoint connection with a given name. |  
| [deletesAPrivateEndpointConnectionWithAGivenName.ts][deletesAPrivateEndpointConnectionWithAGivenName] | Deletes a private endpoint connection with a given name. |  
| [getsListOfPrivateEndpointConnectionsOnAServer.ts][getsListOfPrivateEndpointConnectionsOnAServer] | Gets all private endpoint connections on a server. |  
| [getsPrivateLinkResourcesForSql.ts][getsPrivateLinkResourcesForSql] | Gets the private link resources for SQL server. |  
| [getsAPrivateLinkResourceForSql.ts][getsAPrivateLinkResourceForSql] | Gets a private link resource for SQL server. |  
| [listServersByResourceGroup.ts][listServersByResourceGroup] | Gets a list of servers in a resource groups. |  
| [getServer.ts][getServer] | Gets a server. |  
| [createServer.ts][createServer] | Creates or updates a server. |  
| [deleteServer.ts][deleteServer] | Deletes a server. |  
| [updateAServer.ts][updateAServer] | Updates a server. |  
| [listServers.ts][listServers] | Gets a list of all servers in the subscription. |  
| [checkForAServerNameThatAlreadyExists.ts][checkForAServerNameThatAlreadyExists] | Determines whether a resource can be created with the specified name. |  
| [checkForAServerNameThatIsAvailable.ts][checkForAServerNameThatIsAvailable] | Determines whether a resource can be created with the specified name. |  
| [checkForAServerNameThatIsInvalid.ts][checkForAServerNameThatIsInvalid] | Determines whether a resource can be created with the specified name. |  
| [listSubscriptionCapabilitiesInTheGivenLocation.ts][listSubscriptionCapabilitiesInTheGivenLocation] | Gets the subscription capabilities available for the specified location. |  
| [getTheLongTermRetentionBackupOfAManagedDatabase.ts][getTheLongTermRetentionBackupOfAManagedDatabase] | Gets a long term retention backup for a managed database. |  
| [deleteTheLongTermRetentionBackup.ts][deleteTheLongTermRetentionBackup] | Deletes a long term retention backup. |  
| [getAllLongTermRetentionBackupsUnderTheDatabase.ts][getAllLongTermRetentionBackupsUnderTheDatabase] | Lists all long term retention backups for a managed database. |  
| [getAllLongTermRetentionBackupsUnderTheManagedInstance.ts][getAllLongTermRetentionBackupsUnderTheManagedInstance] | Lists the long term retention backups for a given managed instance. |  
| [getAllLongTermRetentionBackupsUnderTheLocation.ts][getAllLongTermRetentionBackupsUnderTheLocation] | Lists the long term retention backups for managed databases in a given location. |  
| [getTheLongTermRetentionBackup.ts][getTheLongTermRetentionBackup] | Gets a long term retention backup for a managed database. |  
| [deleteTheLongTermRetentionBackup.ts][deleteTheLongTermRetentionBackup] | Deletes a long term retention backup. |  
| [getAllLongTermRetentionBackupsUnderTheDatabase.ts][getAllLongTermRetentionBackupsUnderTheDatabase] | Lists all long term retention backups for a managed database. |  
| [getAllLongTermRetentionBackupsUnderTheManagedInstance.ts][getAllLongTermRetentionBackupsUnderTheManagedInstance] | Lists the long term retention backups for a given managed instance. |  
| [getAllLongTermRetentionBackupsUnderTheLocation.ts][getAllLongTermRetentionBackupsUnderTheLocation] | Lists the long term retention backups for managed databases in a given location. |  
| [getTheLongTermRetentionPolicyForTheManagedDatabase.ts][getTheLongTermRetentionPolicyForTheManagedDatabase] | Gets a managed database's long term retention policy. |  
| [createOrUpdateTheLtrPolicyForTheManagedDatabase.ts][createOrUpdateTheLtrPolicyForTheManagedDatabase] | Sets a managed database's long term retention policy. |  
| [getTheLongTermRetentionPoliciesForTheManagedDatabase.ts][getTheLongTermRetentionPoliciesForTheManagedDatabase] | Gets a database's long term retention policy. |  
| [getsAWorkloadGroupForADataWarehouse.ts][getsAWorkloadGroupForADataWarehouse] | Gets a workload group |  
| [createAWorkloadGroupWithAllPropertiesSpecified.ts][createAWorkloadGroupWithAllPropertiesSpecified] | Creates or updates a workload group. |  
| [createAWorkloadGroupWithTheRequiredPropertiesSpecified.ts][createAWorkloadGroupWithTheRequiredPropertiesSpecified] | Creates or updates a workload group. |  
| [deleteAWorkloadGroup.ts][deleteAWorkloadGroup] | Deletes a workload group. |  
| [getTheListOfWorkloadGroupsForADataWarehouse.ts][getTheListOfWorkloadGroupsForADataWarehouse] | Gets the list of workload groups |  
| [getsAWorkloadClassifierForADataWarehouse.ts][getsAWorkloadClassifierForADataWarehouse] | Gets a workload classifier |  
| [createAWorkloadGroupWithAllPropertiesSpecified.ts][createAWorkloadGroupWithAllPropertiesSpecified] | Creates or updates a workload classifier. |  
| [createAWorkloadGroupWithTheRequiredPropertiesSpecified.ts][createAWorkloadGroupWithTheRequiredPropertiesSpecified] | Creates or updates a workload classifier. |  
| [deleteAWorkloadClassifier.ts][deleteAWorkloadClassifier] | Deletes a workload classifier. |  
| [getTheListOfWorkloadClassifiersForAWorkloadGroup.ts][getTheListOfWorkloadClassifiersForAWorkloadGroup] | Gets the list of workload classifiers for a workload group |  
| [managedDatabaseRestoreDetails.ts][managedDatabaseRestoreDetails] | Gets managed database restore details. |  
| [listDatabasesByManagedInstances.ts][listDatabasesByManagedInstances] | Gets a list of managed databases. |  
| [getsAManagedDatabase.ts][getsAManagedDatabase] | Gets a managed database. |  
| [createsANewManagedDatabaseByRestoringFromAnExternalBackup.ts][createsANewManagedDatabaseByRestoringFromAnExternalBackup] | Creates a new database or updates an existing database. |  
| [createsANewManagedDatabaseFromRestoringAGeoReplicatedBackup.ts][createsANewManagedDatabaseFromRestoringAGeoReplicatedBackup] | Creates a new database or updates an existing database. |  
| [createsANewManagedDatabaseFromRestoringALongTermRetentionBackup.ts][createsANewManagedDatabaseFromRestoringALongTermRetentionBackup] | Creates a new database or updates an existing database. |  
| [createsANewManagedDatabaseUsingPointInTimeRestore.ts][createsANewManagedDatabaseUsingPointInTimeRestore] | Creates a new database or updates an existing database. |  
| [createsANewManagedDatabaseWithMaximalProperties.ts][createsANewManagedDatabaseWithMaximalProperties] | Creates a new database or updates an existing database. |  
| [createsANewManagedDatabaseWithMinimalProperties.ts][createsANewManagedDatabaseWithMinimalProperties] | Creates a new database or updates an existing database. |  
| [deleteManagedDatabase.ts][deleteManagedDatabase] | Deletes a managed database. |  
| [updatesAManagedDatabaseWithMaximalProperties.ts][updatesAManagedDatabaseWithMaximalProperties] | Updates an existing database. |  
| [updatesAManagedDatabaseWithMinimalProperties.ts][updatesAManagedDatabaseWithMinimalProperties] | Updates an existing database. |  
| [listInaccessibleManagedDatabasesByManagedInstances.ts][listInaccessibleManagedDatabasesByManagedInstances] | Gets a list of inaccessible managed databases in a managed instance |  
| [completesAManagedDatabaseExternalBackupRestore.ts][completesAManagedDatabaseExternalBackupRestore] | Completes the restore operation on a managed database. |  
| [getsAAzureActiveDirectoryAdministrator.ts][getsAAzureActiveDirectoryAdministrator] | Gets a Azure Active Directory administrator. |  
| [createsOrUpdatesAnExistingAzureActiveDirectoryAdministrator.ts][createsOrUpdatesAnExistingAzureActiveDirectoryAdministrator] | Creates or updates an existing Azure Active Directory administrator. |  
| [deleteAzureActiveDirectoryAdministrator.ts][deleteAzureActiveDirectoryAdministrator] | Deletes the Azure Active Directory administrator with the given name. |  
| [getsAListOfAzureActiveDirectoryAdministrator.ts][getsAListOfAzureActiveDirectoryAdministrator] | Gets a list of Azure Active Directory administrators in a server. |  
| [disablesAzureActiveDirectoryOnlyAuthenticationOnLogicalServer.ts][disablesAzureActiveDirectoryOnlyAuthenticationOnLogicalServer] | Disables Azure Active Directory only authentication on logical Server. |  
| [cancelTheManagedInstanceManagementOperation.ts][cancelTheManagedInstanceManagementOperation] | Cancels the asynchronous operation on the managed instance. |  
| [listTheManagedInstanceManagementOperations.ts][listTheManagedInstanceManagementOperations] | Gets a list of operations performed on the managed instance. |  
| [getsTheManagedInstanceManagementOperation.ts][getsTheManagedInstanceManagementOperation] | Gets a management operation on a managed instance. |  

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs:


Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/getARecoverableDatabase.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[getARecoverableDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getARecoverableDatabase.ts  
[getListOfRestorableDroppedDatabases]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getListOfRestorableDroppedDatabases.ts  
[getARestorableDroppedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getARestorableDroppedDatabase.ts  
[getListOfRestorableDroppedDatabases]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getListOfRestorableDroppedDatabases.ts  
[createOrUpdateAServersSecureConnectionPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAServersSecureConnectionPolicy.ts  
[getAServersSecureConnectionPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServersSecureConnectionPolicy.ts  
[getDatabaseSecurityAlertPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getDatabaseSecurityAlertPolicy.ts  
[createDatabaseSecurityAlertPolicyMax]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createDatabaseSecurityAlertPolicyMax.ts  
[createDatabaseSecurityAlertPolicyMin]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createDatabaseSecurityAlertPolicyMin.ts  
[createOrUpdateDataMaskingPolicyMax]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateDataMaskingPolicyMax.ts  
[createOrUpdateDataMaskingPolicyMin]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateDataMaskingPolicyMin.ts  
[getDataMaskingPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getDataMaskingPolicy.ts  
[createOrUpdateDataMaskingRuleForDefaultMax]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateDataMaskingRuleForDefaultMax.ts  
[createOrUpdateDataMaskingRuleForDefaultMin]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateDataMaskingRuleForDefaultMin.ts  
[createOrUpdateDataMaskingRuleForNumbers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateDataMaskingRuleForNumbers.ts  
[createOrUpdateDataMaskingRuleForText]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateDataMaskingRuleForText.ts  
[listDataMaskingRules]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDataMaskingRules.ts  
[createAFirewallRuleMaxOrMin]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAFirewallRuleMaxOrMin.ts  
[updateAFirewallRuleMaxOrMin]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAFirewallRuleMaxOrMin.ts  
[deleteAFirewallRule]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAFirewallRule.ts  
[getFirewallRule]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFirewallRule.ts  
[listFirewallRules]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listFirewallRules.ts  
[updateGeoBackupPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateGeoBackupPolicy.ts  
[getGeoBackupPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getGeoBackupPolicy.ts  
[listGeoBackupPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listGeoBackupPolicies.ts  
[importBacpacIntoNewDatabaseMaxWithSasKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoNewDatabaseMaxWithSasKey.ts  
[importBacpacIntoNewDatabaseMaxWithStorageKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoNewDatabaseMaxWithStorageKey.ts  
[importBacpacIntoNewDatabaseMinWithSasKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoNewDatabaseMinWithSasKey.ts  
[importBacpacIntoNewDatabaseMinWithStorageKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoNewDatabaseMinWithStorageKey.ts  
[importBacpacIntoAnExistingDatabaseMaxWithSasKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoAnExistingDatabaseMaxWithSasKey.ts  
[importBacpacIntoAnExistingDatabaseMaxWithStorageKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoAnExistingDatabaseMaxWithStorageKey.ts  
[importBacpacIntoAnExistingDatabaseMinWithSasKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoAnExistingDatabaseMinWithSasKey.ts  
[importBacpacIntoAnExistingDatabaseMinWithStorageKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/importBacpacIntoAnExistingDatabaseMinWithStorageKey.ts  
[exportADatabaseIntoANewBacpacFileWithSasKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportADatabaseIntoANewBacpacFileWithSasKey.ts  
[exportADatabaseIntoANewBacpacFileWithStorageKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportADatabaseIntoANewBacpacFileWithStorageKey.ts  
[listDatabaseUsageMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatabaseUsageMetrics.ts  
[listDatabaseUsageMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatabaseUsageMetrics.ts  
[getsAListOfDatabases]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAListOfDatabases.ts  
[getsADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsADatabase.ts  
[createsAHyperscaleDatabaseAndSpecifiesTheNumberOfReadonlyReplicas]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsAHyperscaleDatabaseAndSpecifiesTheNumberOfReadonlyReplicas.ts  
[createsAVCoreDatabaseBySpecifyingServiceObjectiveName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsAVCoreDatabaseBySpecifyingServiceObjectiveName.ts  
[createsAVCoreDatabaseBySpecifyingSkuNameAndCapacity]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsAVCoreDatabaseBySpecifyingSkuNameAndCapacity.ts  
[createsAVCoreDatabaseBySpecifyingSkuName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsAVCoreDatabaseBySpecifyingSkuName.ts  
[createsADataWarehouseBySpecifyingServiceObjectiveName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADataWarehouseBySpecifyingServiceObjectiveName.ts  
[createsADatabaseAsACopy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseAsACopy.ts  
[createsADatabaseAsAnOnLineSecondary]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseAsAnOnLineSecondary.ts  
[createsADatabaseFromPointInTimeRestore]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseFromPointInTimeRestore.ts  
[createsADatabaseFromRecoverableDatabaseId]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseFromRecoverableDatabaseId.ts  
[createsADatabaseFromRestoreWithDatabaseDeletionTime]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseFromRestoreWithDatabaseDeletionTime.ts  
[createsADatabaseFromRestoreWithRestorableDroppedDatabaseId]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseFromRestoreWithRestorableDroppedDatabaseId.ts  
[createsADatabaseWithDefaultMode]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseWithDefaultMode.ts  
[createsADatabaseWithMinimumNumberOfParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsADatabaseWithMinimumNumberOfParameters.ts  
[deletesADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesADatabase.ts  
[updatesADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesADatabase.ts  
[getsAListOfDatabasesInAnElasticPool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAListOfDatabasesInAnElasticPool.ts  
[pausesADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/pausesADatabase.ts  
[resumesADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/resumesADatabase.ts  
[upgradesADataWarehouse]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/upgradesADataWarehouse.ts  
[renamesADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/renamesADatabase.ts  
[failoverAnDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/failoverAnDatabase.ts  
[listDatabaseUsageMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatabaseUsageMetrics.ts  
[listDatabaseUsageMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatabaseUsageMetrics.ts  
[getAllElasticPoolsInAServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllElasticPoolsInAServer.ts  
[getAnElasticPool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAnElasticPool.ts  
[createOrUpdateElasticPoolWithAllParameter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateElasticPoolWithAllParameter.ts  
[createOrUpdateElasticPoolWithMinimumParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateElasticPoolWithMinimumParameters.ts  
[deleteAnElasticPool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAnElasticPool.ts  
[updateAnElasticPoolWithAllParameter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAnElasticPoolWithAllParameter.ts  
[updateAnElasticPoolWithMinimumParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAnElasticPoolWithMinimumParameters.ts  
[failoverAnElasticPool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/failoverAnElasticPool.ts  
[getARecommendedElasticPool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getARecommendedElasticPool.ts  
[listRecommendedElasticPools]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listRecommendedElasticPools.ts  
[getRecommendedElasticPoolMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getRecommendedElasticPoolMetrics.ts  
[deleteAReplicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAReplicationLink.ts  
[getAReplicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAReplicationLink.ts  
[failoverAReplicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/failoverAReplicationLink.ts  
[failoverAReplicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/failoverAReplicationLink.ts  
[deleteReplicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteReplicationLink.ts  
[listReplicationLinks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listReplicationLinks.ts  
[deleteAServerCommunicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAServerCommunicationLink.ts  
[getAServerCommunicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServerCommunicationLink.ts  
[createAServerCommunicationLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAServerCommunicationLink.ts  
[listServerCommunicationLinks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listServerCommunicationLinks.ts  
[getAServiceObjective]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServiceObjective.ts  
[listServiceObjectives]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listServiceObjectives.ts  
[listElasticPoolActivity]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listElasticPoolActivity.ts  
[listElasticPoolDatabaseActivity]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listElasticPoolDatabaseActivity.ts  
[getAServiceTierAdvisor]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServiceTierAdvisor.ts  
[getAListOfAServiceTierAdvisors]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAListOfAServiceTierAdvisors.ts  
[createOrUpdateADatabasesTransparentDataEncryptionConfiguration]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateADatabasesTransparentDataEncryptionConfiguration.ts  
[getADatabasesTransparentDataEncryptionConfiguration]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADatabasesTransparentDataEncryptionConfiguration.ts  
[listADatabasesTransparentDataEncryptionActivities]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listADatabasesTransparentDataEncryptionActivities.ts  
[listServersUsages]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listServersUsages.ts  
[listDatabaseUsageMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatabaseUsageMetrics.ts  
[getADatabasesAutomaticTuningSettings]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADatabasesAutomaticTuningSettings.ts  
[updatesDatabaseAutomaticTuningSettingsWithAllProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesDatabaseAutomaticTuningSettingsWithAllProperties.ts  
[updatesDatabaseAutomaticTuningSettingsWithMinimalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesDatabaseAutomaticTuningSettingsWithMinimalProperties.ts  
[revalidatesTheEncryptionProtector]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/revalidatesTheEncryptionProtector.ts  
[listEncryptionProtectorsByServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listEncryptionProtectorsByServer.ts  
[getTheEncryptionProtector]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheEncryptionProtector.ts  
[updateTheEncryptionProtectorToKeyVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheEncryptionProtectorToKeyVault.ts  
[updateTheEncryptionProtectorToServiceManaged]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheEncryptionProtectorToServiceManaged.ts  
[getFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFailoverGroup.ts  
[createFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createFailoverGroup.ts  
[deleteFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteFailoverGroup.ts  
[updateFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateFailoverGroup.ts  
[listFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listFailoverGroup.ts  
[plannedFailoverOfAFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/plannedFailoverOfAFailoverGroup.ts  
[forcedFailoverOfAFailoverGroupAllowingDataLoss]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/forcedFailoverOfAFailoverGroupAllowingDataLoss.ts  
[listTheServerKeysByServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listTheServerKeysByServer.ts  
[getTheServerKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheServerKey.ts  
[createsOrUpdatesAServerKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsOrUpdatesAServerKey.ts  
[deleteTheServerKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteTheServerKey.ts  
[getASyncAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getASyncAgent.ts  
[createANewSyncAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createANewSyncAgent.ts  
[updateASyncAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASyncAgent.ts  
[deleteASyncAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteASyncAgent.ts  
[getSyncAgentsUnderAServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSyncAgentsUnderAServer.ts  
[generateASyncAgentKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/generateASyncAgentKey.ts  
[getSyncAgentLinkedDatabases]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSyncAgentLinkedDatabases.ts  
[getASyncDatabaseId]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getASyncDatabaseId.ts  
[refreshAHubDatabaseSchema]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/refreshAHubDatabaseSchema.ts  
[getAHubDatabaseSchema]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAHubDatabaseSchema.ts  
[getSyncGroupLogs]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSyncGroupLogs.ts  
[cancelASyncGroupSynchronization]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cancelASyncGroupSynchronization.ts  
[triggerASyncGroupSynchronization]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/triggerASyncGroupSynchronization.ts  
[getASyncGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getASyncGroup.ts  
[createASyncGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createASyncGroup.ts  
[updateASyncGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASyncGroup.ts  
[deleteASyncGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteASyncGroup.ts  
[updateASyncGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASyncGroup.ts  
[listSyncGroupsUnderAGivenDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listSyncGroupsUnderAGivenDatabase.ts  
[getASyncMember]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getASyncMember.ts  
[createANewSyncMember]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createANewSyncMember.ts  
[updateASyncMember]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateASyncMember.ts  
[deleteASyncMember]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteASyncMember.ts  
[updateAnExistingSyncMember]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAnExistingSyncMember.ts  
[listSyncMembersUnderASyncGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listSyncMembersUnderASyncGroup.ts  
[getASyncMemberSchema]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getASyncMemberSchema.ts  
[refreshASyncMemberDatabaseSchema]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/refreshASyncMemberDatabaseSchema.ts  
[listSubscriptionUsagesInTheGivenLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listSubscriptionUsagesInTheGivenLocation.ts  
[getSpecificSubscriptionUsageInTheGivenLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSpecificSubscriptionUsageInTheGivenLocation.ts  
[listVirtualClusters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualClusters.ts  
[listVirtualClustersByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualClustersByResourceGroup.ts  
[getVirtualCluster]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualCluster.ts  
[deleteVirtualCluster]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualCluster.ts  
[updateVirtualClusterWithTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualClusterWithTags.ts  
[getsAVirtualNetworkRule]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAVirtualNetworkRule.ts  
[createOrUpdateAVirtualNetworkRule]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAVirtualNetworkRule.ts  
[deleteAVirtualNetworkRule]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAVirtualNetworkRule.ts  
[listVirtualNetworkRules]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualNetworkRules.ts  
[getAnExtendedDatabasesBlobAuditingPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAnExtendedDatabasesBlobAuditingPolicy.ts  
[createOrUpdateAnExtendedDatabasesAzureMonitorAuditingPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAnExtendedDatabasesAzureMonitorAuditingPolicyWithMinimalParameters.ts  
[createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithAllParameters.ts  
[createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAnExtendedDatabasesBlobAuditingPolicyWithMinimalParameters.ts  
[listExtendedAuditingSettingsOfADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExtendedAuditingSettingsOfADatabase.ts  
[getAServersBlobExtendedAuditingPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServersBlobExtendedAuditingPolicy.ts  
[updateAServersExtendedBlobAuditingPolicyWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersExtendedBlobAuditingPolicyWithAllParameters.ts  
[updateAServersExtendedBlobAuditingPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersExtendedBlobAuditingPolicyWithMinimalParameters.ts  
[listExtendedAuditingSettingsOfAServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExtendedAuditingSettingsOfAServer.ts  
[getAServersBlobAuditingPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServersBlobAuditingPolicy.ts  
[updateAServersBlobAuditingPolicyWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersBlobAuditingPolicyWithAllParameters.ts  
[updateAServersBlobAuditingPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersBlobAuditingPolicyWithMinimalParameters.ts  
[listAuditingSettingsOfAServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAuditingSettingsOfAServer.ts  
[getADatabasesBlobAuditingPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADatabasesBlobAuditingPolicy.ts  
[createOrUpdateADatabasesAzureMonitorAuditingPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateADatabasesAzureMonitorAuditingPolicyWithMinimalParameters.ts  
[createOrUpdateADatabasesBlobAuditingPolicyWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateADatabasesBlobAuditingPolicyWithAllParameters.ts  
[createOrUpdateADatabasesBlobAuditingPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateADatabasesBlobAuditingPolicyWithMinimalParameters.ts  
[listAuditSettingsOfADatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAuditSettingsOfADatabase.ts  
[getsADatabasesVulnerabilityAssessmentRuleBaseline]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsADatabasesVulnerabilityAssessmentRuleBaseline.ts  
[createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline.ts  
[removesADatabasesVulnerabilityAssessmentRuleBaseline]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/removesADatabasesVulnerabilityAssessmentRuleBaseline.ts  
[getADatabasesVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADatabasesVulnerabilityAssessment.ts  
[createADatabasesVulnerabilityAssessmentWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADatabasesVulnerabilityAssessmentWithAllParameters.ts  
[createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified.ts  
[createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADatabasesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified.ts  
[removeADatabasesVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/removeADatabasesVulnerabilityAssessment.ts  
[getTheDatabasesVulnerabilityAssessmentPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheDatabasesVulnerabilityAssessmentPolicies.ts  
[listJobAgentsInAServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listJobAgentsInAServer.ts  
[getAJobAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAJobAgent.ts  
[createOrUpdateAJobAgentWithAllProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAJobAgentWithAllProperties.ts  
[createOrUpdateAJobAgentWithMinimumProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAJobAgentWithMinimumProperties.ts  
[deleteAJobAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAJobAgent.ts  
[updateAJobAgentsTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAJobAgentsTags.ts  
[listCredentialsInAJobAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listCredentialsInAJobAgent.ts  
[getACredential]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getACredential.ts  
[createOrUpdateACredential]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateACredential.ts  
[deleteACredential]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteACredential.ts  
[listAllJobExecutionsInAJobAgentWithFiltering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllJobExecutionsInAJobAgentWithFiltering.ts  
[listAllJobExecutionsInAJobAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllJobExecutionsInAJobAgent.ts  
[cancelAJobExecution]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cancelAJobExecution.ts  
[startAJobExecution]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startAJobExecution.ts  
[listAJobsExecutions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAJobsExecutions.ts  
[getAJobExecution]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAJobExecution.ts  
[createJobExecution]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createJobExecution.ts  
[listJobsInAJobAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listJobsInAJobAgent.ts  
[getAJob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAJob.ts  
[createAJobWithAllPropertiesSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAJobWithAllPropertiesSpecified.ts  
[createAJobWithDefaultProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAJobWithDefaultProperties.ts  
[deleteAJob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAJob.ts  
[listJobStepExecutions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listJobStepExecutions.ts  
[getAJobStepExecution]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAJobStepExecution.ts  
[listJobStepsForTheSpecifiedVersionOfAJob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listJobStepsForTheSpecifiedVersionOfAJob.ts  
[getTheSpecifiedVersionOfAJobStep]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheSpecifiedVersionOfAJobStep.ts  
[listJobStepsForTheLatestVersionOfAJob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listJobStepsForTheLatestVersionOfAJob.ts  
[getTheLatestVersionOfAJobStep]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLatestVersionOfAJobStep.ts  
[createOrUpdateAJobStepWithAllPropertiesSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAJobStepWithAllPropertiesSpecified.ts  
[createOrUpdateAJobStepWithMinimalPropertiesSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAJobStepWithMinimalPropertiesSpecified.ts  
[deleteAJobStep]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAJobStep.ts  
[listJobStepTargetExecutions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listJobStepTargetExecutions.ts  
[listJobStepTargetExecutions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listJobStepTargetExecutions.ts  
[getAJobStepTargetExecution]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAJobStepTargetExecution.ts  
[getAllTargetGroupsInAnAgent]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllTargetGroupsInAnAgent.ts  
[getATargetGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getATargetGroup.ts  
[createOrUpdateATargetGroupWithAllProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateATargetGroupWithAllProperties.ts  
[createOrUpdateATargetGroupWithMinimalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateATargetGroupWithMinimalProperties.ts  
[deleteATargetGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteATargetGroup.ts  
[getAllVersionsOfAJob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllVersionsOfAJob.ts  
[getAVersionOfAJob]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAVersionOfAJob.ts  
[getTheLongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionBackup.ts  
[deleteTheLongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteTheLongTermRetentionBackup.ts  
[getAllLongTermRetentionBackupsUnderTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheDatabase.ts  
[getAllLongTermRetentionBackupsUnderTheLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheLocation.ts  
[getAllLongTermRetentionBackupsUnderTheServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheServer.ts  
[getTheLongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionBackup.ts  
[deleteTheLongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteTheLongTermRetentionBackup.ts  
[getAllLongTermRetentionBackupsUnderTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheDatabase.ts  
[getAllLongTermRetentionBackupsUnderTheLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheLocation.ts  
[getAllLongTermRetentionBackupsUnderTheServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheServer.ts  
[getTheLongTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionPolicyForTheDatabase.ts  
[createOrUpdateTheLongTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateTheLongTermRetentionPolicyForTheDatabase.ts  
[getTheLongTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionPolicyForTheDatabase.ts  
[getTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheShortTermRetentionPolicyForTheDatabase.ts  
[updateTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheShortTermRetentionPolicyForTheDatabase.ts  
[updateTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheShortTermRetentionPolicyForTheDatabase.ts  
[getTheShortTermRetentionPolicyListForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheShortTermRetentionPolicyListForTheDatabase.ts  
[getTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheShortTermRetentionPolicyForTheDatabase.ts  
[updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase.ts  
[updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase.ts  
[getTheShortTermRetentionPolicyListForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheShortTermRetentionPolicyListForTheDatabase.ts  
[getAServersAutomaticTuningSettings]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServersAutomaticTuningSettings.ts  
[updatesServerAutomaticTuningSettingsWithAllProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesServerAutomaticTuningSettingsWithAllProperties.ts  
[updatesServerAutomaticTuningSettingsWithMinimalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesServerAutomaticTuningSettingsWithMinimalProperties.ts  
[getServerDnsAlias]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getServerDnsAlias.ts  
[createServerDnsAlias]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createServerDnsAlias.ts  
[deleteServerDnsAlias]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteServerDnsAlias.ts  
[listServerDnsAliases]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listServerDnsAliases.ts  
[acquireServerDnsAlias]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/acquireServerDnsAlias.ts  
[getAServersThreatDetectionPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServersThreatDetectionPolicy.ts  
[updateAServersThreatDetectionPolicyWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersThreatDetectionPolicyWithAllParameters.ts  
[updateAServersThreatDetectionPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersThreatDetectionPolicyWithMinimalParameters.ts  
[listTheServersThreatDetectionPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listTheServersThreatDetectionPolicies.ts  
[listRestorableDroppedDatabasesByManagedInstances]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listRestorableDroppedDatabasesByManagedInstances.ts  
[getsARestorableDroppedManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsARestorableDroppedManagedDatabase.ts  
[listDatabaseRestorePoints]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatabaseRestorePoints.ts  
[listDatawarehouseDatabaseRestorePoints]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatawarehouseDatabaseRestorePoints.ts  
[createsDatawarehouseDatabaseRestorePoint]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsDatawarehouseDatabaseRestorePoint.ts  
[getsADatabaseRestorePoint]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsADatabaseRestorePoint.ts  
[getsADatawarehouseDatabaseRestorePoint]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsADatawarehouseDatabaseRestorePoint.ts  
[deletesARestorePoint]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesARestorePoint.ts  
[getADatabasesThreatDetectionPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADatabasesThreatDetectionPolicy.ts  
[updateADatabasesThreatDetectionPolicyWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateADatabasesThreatDetectionPolicyWithAllParameters.ts  
[updateADatabasesThreatDetectionPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateADatabasesThreatDetectionPolicyWithMinimalParameters.ts  
[getAListOfTheDatabasesThreatDetectionPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAListOfTheDatabasesThreatDetectionPolicies.ts  
[getAManagedServersThreatDetectionPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAManagedServersThreatDetectionPolicy.ts  
[updateAServersThreatDetectionPolicyWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersThreatDetectionPolicyWithAllParameters.ts  
[updateAServersThreatDetectionPolicyWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServersThreatDetectionPolicyWithMinimalParameters.ts  
[getTheManagedServersThreatDetectionPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheManagedServersThreatDetectionPolicies.ts  
[getsTheCurrentSensitivityLabelsOfAGivenDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheCurrentSensitivityLabelsOfAGivenDatabase.ts  
[getsTheRecommendedSensitivityLabelsOfAGivenDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheRecommendedSensitivityLabelsOfAGivenDatabase.ts  
[enablesSensitivityRecommendationsOnAGivenColumn]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/enablesSensitivityRecommendationsOnAGivenColumn.ts  
[disablesSensitivityRecommendationsOnAGivenColumn]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/disablesSensitivityRecommendationsOnAGivenColumn.ts  
[getsTheSensitivityLabelOfAGivenColumn]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheSensitivityLabelOfAGivenColumn.ts  
[updatesTheSensitivityLabelOfAGivenColumnWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesTheSensitivityLabelOfAGivenColumnWithAllParameters.ts  
[deletesTheSensitivityLabelOfAGivenColumn]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesTheSensitivityLabelOfAGivenColumn.ts  
[listAdministratorsOfManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAdministratorsOfManagedInstance.ts  
[getAdministratorOfManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAdministratorOfManagedInstance.ts  
[createAdministratorOfManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAdministratorOfManagedInstance.ts  
[updateAdministratorOfManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAdministratorOfManagedInstance.ts  
[deleteAdministratorOfManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAdministratorOfManagedInstance.ts  
[cancelTheDatabaseManagementOperation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cancelTheDatabaseManagementOperation.ts  
[listTheDatabaseManagementOperations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listTheDatabaseManagementOperations.ts  
[cancelTheElasticPoolManagementOperation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cancelTheElasticPoolManagementOperation.ts  
[listTheElasticPoolManagementOperations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listTheElasticPoolManagementOperations.ts  
[getsTheListOfADatabaseVulnerabilityAssessmentScanRecords]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheListOfADatabaseVulnerabilityAssessmentScanRecords.ts  
[getsADatabaseVulnerabilityAssessmentScanRecordByScanId]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsADatabaseVulnerabilityAssessmentScanRecordByScanId.ts  
[executesADatabasesVulnerabilityAssessmentScan]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/executesADatabasesVulnerabilityAssessmentScan.ts  
[exportADatabasesVulnerabilityAssessmentScanResults]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportADatabasesVulnerabilityAssessmentScanResults.ts  
[getsADatabasesVulnerabilityAssessmentRuleBaseline]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsADatabasesVulnerabilityAssessmentRuleBaseline.ts  
[createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsOrUpdatesADatabasesVulnerabilityAssessmentRuleBaseline.ts  
[removesADatabasesVulnerabilityAssessmentRuleBaseline]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/removesADatabasesVulnerabilityAssessmentRuleBaseline.ts  
[getsTheListOfADatabaseVulnerabilityAssessmentScanRecords]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheListOfADatabaseVulnerabilityAssessmentScanRecords.ts  
[getsADatabaseVulnerabilityAssessmentScanRecordByScanId]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsADatabaseVulnerabilityAssessmentScanRecordByScanId.ts  
[executesADatabasesVulnerabilityAssessmentScan]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/executesADatabasesVulnerabilityAssessmentScan.ts  
[exportADatabasesVulnerabilityAssessmentScanResults]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/exportADatabasesVulnerabilityAssessmentScanResults.ts  
[getADatabasesVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADatabasesVulnerabilityAssessment.ts  
[createADatabasesVulnerabilityAssessmentWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADatabasesVulnerabilityAssessmentWithAllParameters.ts  
[createADatabasesVulnerabilityAssessmentWithMinimalParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createADatabasesVulnerabilityAssessmentWithMinimalParameters.ts  
[removeADatabasesVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/removeADatabasesVulnerabilityAssessment.ts  
[getADatabasesVulnerabilityAssessmentsList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getADatabasesVulnerabilityAssessmentsList.ts  
[getFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFailoverGroup.ts  
[createFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createFailoverGroup.ts  
[deleteFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteFailoverGroup.ts  
[listFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listFailoverGroup.ts  
[plannedFailoverOfAFailoverGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/plannedFailoverOfAFailoverGroup.ts  
[forcedFailoverOfAFailoverGroupAllowingDataLoss]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/forcedFailoverOfAFailoverGroupAllowingDataLoss.ts  
[getTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheShortTermRetentionPolicyForTheDatabase.ts  
[updateTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheShortTermRetentionPolicyForTheDatabase.ts  
[updateTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheShortTermRetentionPolicyForTheDatabase.ts  
[getTheShortTermRetentionPolicyForTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheShortTermRetentionPolicyForTheDatabase.ts  
[uploadATdeCertificate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/uploadATdeCertificate.ts  
[uploadATdeCertificate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/uploadATdeCertificate.ts  
[listTheKeysForAManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listTheKeysForAManagedInstance.ts  
[getTheManagedInstanceKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheManagedInstanceKey.ts  
[createsOrUpdatesAManagedInstanceKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsOrUpdatesAManagedInstanceKey.ts  
[deleteTheManagedInstanceKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteTheManagedInstanceKey.ts  
[revalidatesTheEncryptionProtector]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/revalidatesTheEncryptionProtector.ts  
[listEncryptionProtectorsByManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listEncryptionProtectorsByManagedInstance.ts  
[getTheEncryptionProtector]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheEncryptionProtector.ts  
[updateTheEncryptionProtectorToKeyVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheEncryptionProtectorToKeyVault.ts  
[updateTheEncryptionProtectorToServiceManaged]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateTheEncryptionProtectorToServiceManaged.ts  
[listRecoverableDatabasesByManagedInstances]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listRecoverableDatabasesByManagedInstances.ts  
[getsARecoverableDatabasesByManagedInstances]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsARecoverableDatabasesByManagedInstances.ts  
[getAManagedInstancesVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAManagedInstancesVulnerabilityAssessment.ts  
[createAManagedInstancesVulnerabilityAssessmentWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedInstancesVulnerabilityAssessmentWithAllParameters.ts  
[createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified.ts  
[createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAManagedInstancesVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified.ts  
[removeAManagedInstancesVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/removeAManagedInstancesVulnerabilityAssessment.ts  
[getAManagedInstancesVulnerabilityAssessmentPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAManagedInstancesVulnerabilityAssessmentPolicies.ts  
[getAServersVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServersVulnerabilityAssessment.ts  
[createAServersVulnerabilityAssessmentWithAllParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAServersVulnerabilityAssessmentWithAllParameters.ts  
[createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageAccountAccessKeyIsSpecified.ts  
[createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAServersVulnerabilityAssessmentWithMinimalParametersWhenStorageContainerSasKeyIsSpecified.ts  
[removeAServersVulnerabilityAssessment]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/removeAServersVulnerabilityAssessment.ts  
[getAServersVulnerabilityAssessmentPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAServersVulnerabilityAssessmentPolicies.ts  
[getsTheSensitivityLabelOfAGivenColumnInAManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheSensitivityLabelOfAGivenColumnInAManagedDatabase.ts  
[updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase.ts  
[deletesTheSensitivityLabelOfAGivenColumnInAManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesTheSensitivityLabelOfAGivenColumnInAManagedDatabase.ts  
[disablesTheSensitivityRecommendationsOnAGivenColumn]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/disablesTheSensitivityRecommendationsOnAGivenColumn.ts  
[enablesTheSensitivityRecommendationsOnAGivenColumn]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/enablesTheSensitivityRecommendationsOnAGivenColumn.ts  
[getsTheCurrentSensitivityLabelsOfAGivenDatabaseInAManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheCurrentSensitivityLabelsOfAGivenDatabaseInAManagedDatabase.ts  
[getsTheRecommendedSensitivityLabelsOfAGivenDatabaseInAManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheRecommendedSensitivityLabelsOfAGivenDatabaseInAManagedDatabase.ts  
[getAnInstancePool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAnInstancePool.ts  
[createAnInstancePoolWithAllProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAnInstancePoolWithAllProperties.ts  
[createAnInstancePoolWithMinProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAnInstancePoolWithMinProperties.ts  
[deleteAnInstancePool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAnInstancePool.ts  
[patchAnInstancePool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/patchAnInstancePool.ts  
[listInstancePoolsByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listInstancePoolsByResourceGroup.ts  
[listInstancePoolsInTheSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listInstancePoolsInTheSubscription.ts  
[listInstancePoolUsagesExpandedWithChildren]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listInstancePoolUsagesExpandedWithChildren.ts  
[listInstancePoolUsages]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listInstancePoolUsages.ts  
[listManagedInstancesByInstancePool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listManagedInstancesByInstancePool.ts  
[listManagedInstancesByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listManagedInstancesByResourceGroup.ts  
[getManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getManagedInstance.ts  
[createManagedInstanceWithAllProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createManagedInstanceWithAllProperties.ts  
[createManagedInstanceWithMinimalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createManagedInstanceWithMinimalProperties.ts  
[deleteManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteManagedInstance.ts  
[updateManagedInstanceWithAllProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateManagedInstanceWithAllProperties.ts  
[updateManagedInstanceWithMinimalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateManagedInstanceWithMinimalProperties.ts  
[listManagedInstances]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listManagedInstances.ts  
[getsPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsPrivateEndpointConnection.ts  
[approveOrRejectAPrivateEndpointConnectionWithAGivenName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/approveOrRejectAPrivateEndpointConnectionWithAGivenName.ts  
[deletesAPrivateEndpointConnectionWithAGivenName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesAPrivateEndpointConnectionWithAGivenName.ts  
[getsListOfPrivateEndpointConnectionsOnAServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsListOfPrivateEndpointConnectionsOnAServer.ts  
[getsPrivateLinkResourcesForSql]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsPrivateLinkResourcesForSql.ts  
[getsAPrivateLinkResourceForSql]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAPrivateLinkResourceForSql.ts  
[listServersByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listServersByResourceGroup.ts  
[getServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getServer.ts  
[createServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createServer.ts  
[deleteServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteServer.ts  
[updateAServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAServer.ts  
[listServers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listServers.ts  
[checkForAServerNameThatAlreadyExists]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkForAServerNameThatAlreadyExists.ts  
[checkForAServerNameThatIsAvailable]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkForAServerNameThatIsAvailable.ts  
[checkForAServerNameThatIsInvalid]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkForAServerNameThatIsInvalid.ts  
[listSubscriptionCapabilitiesInTheGivenLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listSubscriptionCapabilitiesInTheGivenLocation.ts  
[getTheLongTermRetentionBackupOfAManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionBackupOfAManagedDatabase.ts  
[deleteTheLongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteTheLongTermRetentionBackup.ts  
[getAllLongTermRetentionBackupsUnderTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheDatabase.ts  
[getAllLongTermRetentionBackupsUnderTheManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheManagedInstance.ts  
[getAllLongTermRetentionBackupsUnderTheLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheLocation.ts  
[getTheLongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionBackup.ts  
[deleteTheLongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteTheLongTermRetentionBackup.ts  
[getAllLongTermRetentionBackupsUnderTheDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheDatabase.ts  
[getAllLongTermRetentionBackupsUnderTheManagedInstance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheManagedInstance.ts  
[getAllLongTermRetentionBackupsUnderTheLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAllLongTermRetentionBackupsUnderTheLocation.ts  
[getTheLongTermRetentionPolicyForTheManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionPolicyForTheManagedDatabase.ts  
[createOrUpdateTheLtrPolicyForTheManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateTheLtrPolicyForTheManagedDatabase.ts  
[getTheLongTermRetentionPoliciesForTheManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheLongTermRetentionPoliciesForTheManagedDatabase.ts  
[getsAWorkloadGroupForADataWarehouse]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAWorkloadGroupForADataWarehouse.ts  
[createAWorkloadGroupWithAllPropertiesSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAWorkloadGroupWithAllPropertiesSpecified.ts  
[createAWorkloadGroupWithTheRequiredPropertiesSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAWorkloadGroupWithTheRequiredPropertiesSpecified.ts  
[deleteAWorkloadGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAWorkloadGroup.ts  
[getTheListOfWorkloadGroupsForADataWarehouse]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheListOfWorkloadGroupsForADataWarehouse.ts  
[getsAWorkloadClassifierForADataWarehouse]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAWorkloadClassifierForADataWarehouse.ts  
[createAWorkloadGroupWithAllPropertiesSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAWorkloadGroupWithAllPropertiesSpecified.ts  
[createAWorkloadGroupWithTheRequiredPropertiesSpecified]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAWorkloadGroupWithTheRequiredPropertiesSpecified.ts  
[deleteAWorkloadClassifier]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAWorkloadClassifier.ts  
[getTheListOfWorkloadClassifiersForAWorkloadGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTheListOfWorkloadClassifiersForAWorkloadGroup.ts  
[managedDatabaseRestoreDetails]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/managedDatabaseRestoreDetails.ts  
[listDatabasesByManagedInstances]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDatabasesByManagedInstances.ts  
[getsAManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAManagedDatabase.ts  
[createsANewManagedDatabaseByRestoringFromAnExternalBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsANewManagedDatabaseByRestoringFromAnExternalBackup.ts  
[createsANewManagedDatabaseFromRestoringAGeoReplicatedBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsANewManagedDatabaseFromRestoringAGeoReplicatedBackup.ts  
[createsANewManagedDatabaseFromRestoringALongTermRetentionBackup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsANewManagedDatabaseFromRestoringALongTermRetentionBackup.ts  
[createsANewManagedDatabaseUsingPointInTimeRestore]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsANewManagedDatabaseUsingPointInTimeRestore.ts  
[createsANewManagedDatabaseWithMaximalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsANewManagedDatabaseWithMaximalProperties.ts  
[createsANewManagedDatabaseWithMinimalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsANewManagedDatabaseWithMinimalProperties.ts  
[deleteManagedDatabase]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteManagedDatabase.ts  
[updatesAManagedDatabaseWithMaximalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesAManagedDatabaseWithMaximalProperties.ts  
[updatesAManagedDatabaseWithMinimalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatesAManagedDatabaseWithMinimalProperties.ts  
[listInaccessibleManagedDatabasesByManagedInstances]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listInaccessibleManagedDatabasesByManagedInstances.ts  
[completesAManagedDatabaseExternalBackupRestore]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/completesAManagedDatabaseExternalBackupRestore.ts  
[getsAAzureActiveDirectoryAdministrator]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAAzureActiveDirectoryAdministrator.ts  
[createsOrUpdatesAnExistingAzureActiveDirectoryAdministrator]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsOrUpdatesAnExistingAzureActiveDirectoryAdministrator.ts  
[deleteAzureActiveDirectoryAdministrator]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAzureActiveDirectoryAdministrator.ts  
[getsAListOfAzureActiveDirectoryAdministrator]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAListOfAzureActiveDirectoryAdministrator.ts  
[disablesAzureActiveDirectoryOnlyAuthenticationOnLogicalServer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/disablesAzureActiveDirectoryOnlyAuthenticationOnLogicalServer.ts  
[cancelTheManagedInstanceManagementOperation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cancelTheManagedInstanceManagementOperation.ts  
[listTheManagedInstanceManagementOperations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listTheManagedInstanceManagementOperations.ts  
[getsTheManagedInstanceManagementOperation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsTheManagedInstanceManagementOperation.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/sql-resource-manager  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
