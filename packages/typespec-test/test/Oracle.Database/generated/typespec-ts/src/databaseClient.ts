// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getCloudExadataInfrastructuresOperations,
  CloudExadataInfrastructuresOperations,
} from "./classic/cloudExadataInfrastructures/index.js";
import {
  getDbServersOperations,
  DbServersOperations,
} from "./classic/dbServers/index.js";
import {
  getCloudVmClustersOperations,
  CloudVmClustersOperations,
} from "./classic/cloudVmClusters/index.js";
import {
  getVirtualNetworkAddressesOperations,
  VirtualNetworkAddressesOperations,
} from "./classic/virtualNetworkAddresses/index.js";
import {
  getSystemVersionsOperations,
  SystemVersionsOperations,
} from "./classic/systemVersions/index.js";
import {
  getOracleSubscriptionsOperations,
  OracleSubscriptionsOperations,
} from "./classic/oracleSubscriptions/index.js";
import {
  getDbNodesOperations,
  DbNodesOperations,
} from "./classic/dbNodes/index.js";
import {
  getGiVersionsOperations,
  GiVersionsOperations,
} from "./classic/giVersions/index.js";
import {
  getDbSystemShapesOperations,
  DbSystemShapesOperations,
} from "./classic/dbSystemShapes/index.js";
import {
  getDnsPrivateViewsOperations,
  DnsPrivateViewsOperations,
} from "./classic/dnsPrivateViews/index.js";
import {
  getDnsPrivateZonesOperations,
  DnsPrivateZonesOperations,
} from "./classic/dnsPrivateZones/index.js";
import {
  getAutonomousDatabasesOperations,
  AutonomousDatabasesOperations,
} from "./classic/autonomousDatabases/index.js";
import {
  getAutonomousDatabaseBackupsOperations,
  AutonomousDatabaseBackupsOperations,
} from "./classic/autonomousDatabaseBackups/index.js";
import {
  getAutonomousDatabaseCharacterSetsOperations,
  AutonomousDatabaseCharacterSetsOperations,
} from "./classic/autonomousDatabaseCharacterSets/index.js";
import {
  getAutonomousDatabaseNationalCharacterSetsOperations,
  AutonomousDatabaseNationalCharacterSetsOperations,
} from "./classic/autonomousDatabaseNationalCharacterSets/index.js";
import {
  getAutonomousDatabaseVersionsOperations,
  AutonomousDatabaseVersionsOperations,
} from "./classic/autonomousDatabaseVersions/index.js";
import {
  createDatabase,
  DatabaseClientOptions,
  DatabaseContext,
} from "./api/index.js";

export { DatabaseClientOptions } from "./api/databaseContext.js";

export class DatabaseClient {
  private _client: DatabaseContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: DatabaseClientOptions = {},
  ) {
    this._client = createDatabase(credential, options);
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.cloudExadataInfrastructures = getCloudExadataInfrastructuresOperations(
      this._client,
    );
    this.dbServers = getDbServersOperations(this._client);
    this.cloudVmClusters = getCloudVmClustersOperations(this._client);
    this.virtualNetworkAddresses = getVirtualNetworkAddressesOperations(
      this._client,
    );
    this.systemVersions = getSystemVersionsOperations(this._client);
    this.oracleSubscriptions = getOracleSubscriptionsOperations(this._client);
    this.dbNodes = getDbNodesOperations(this._client);
    this.giVersions = getGiVersionsOperations(this._client);
    this.dbSystemShapes = getDbSystemShapesOperations(this._client);
    this.dnsPrivateViews = getDnsPrivateViewsOperations(this._client);
    this.dnsPrivateZones = getDnsPrivateZonesOperations(this._client);
    this.autonomousDatabases = getAutonomousDatabasesOperations(this._client);
    this.autonomousDatabaseBackups = getAutonomousDatabaseBackupsOperations(
      this._client,
    );
    this.autonomousDatabaseCharacterSets =
      getAutonomousDatabaseCharacterSetsOperations(this._client);
    this.autonomousDatabaseNationalCharacterSets =
      getAutonomousDatabaseNationalCharacterSetsOperations(this._client);
    this.autonomousDatabaseVersions = getAutonomousDatabaseVersionsOperations(
      this._client,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for CloudExadataInfrastructures */
  public readonly cloudExadataInfrastructures: CloudExadataInfrastructuresOperations;
  /** The operation groups for DbServers */
  public readonly dbServers: DbServersOperations;
  /** The operation groups for CloudVmClusters */
  public readonly cloudVmClusters: CloudVmClustersOperations;
  /** The operation groups for VirtualNetworkAddresses */
  public readonly virtualNetworkAddresses: VirtualNetworkAddressesOperations;
  /** The operation groups for SystemVersions */
  public readonly systemVersions: SystemVersionsOperations;
  /** The operation groups for OracleSubscriptions */
  public readonly oracleSubscriptions: OracleSubscriptionsOperations;
  /** The operation groups for DbNodes */
  public readonly dbNodes: DbNodesOperations;
  /** The operation groups for GiVersions */
  public readonly giVersions: GiVersionsOperations;
  /** The operation groups for DbSystemShapes */
  public readonly dbSystemShapes: DbSystemShapesOperations;
  /** The operation groups for DnsPrivateViews */
  public readonly dnsPrivateViews: DnsPrivateViewsOperations;
  /** The operation groups for DnsPrivateZones */
  public readonly dnsPrivateZones: DnsPrivateZonesOperations;
  /** The operation groups for AutonomousDatabases */
  public readonly autonomousDatabases: AutonomousDatabasesOperations;
  /** The operation groups for AutonomousDatabaseBackups */
  public readonly autonomousDatabaseBackups: AutonomousDatabaseBackupsOperations;
  /** The operation groups for AutonomousDatabaseCharacterSets */
  public readonly autonomousDatabaseCharacterSets: AutonomousDatabaseCharacterSetsOperations;
  /** The operation groups for AutonomousDatabaseNationalCharacterSets */
  public readonly autonomousDatabaseNationalCharacterSets: AutonomousDatabaseNationalCharacterSetsOperations;
  /** The operation groups for AutonomousDatabaseVersions */
  public readonly autonomousDatabaseVersions: AutonomousDatabaseVersionsOperations;
}
