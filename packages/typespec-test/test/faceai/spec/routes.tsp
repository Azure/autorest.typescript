import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "./models.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;
using Azure.Core.Foundations;
using Azure.Core.Traits;

namespace Face;

alias ServiceTraits =
  NoClientRequestId &
  NoRepeatableRequests &
  NoConditionalRequests &
  TraitOverride<VersionParameterTrait<ApiVersionPathParameter>>&
  ListQueryParametersTrait<ListRequestOptions>;

alias Operations = Azure.Core.ResourceOperations<ServiceTraits>;

interface BaseSessionInterface<T extends LivenessSessionItem, U extends BaseSessionAuditEntry> {
  // ResourceCreateOrReplace does not fit, we use POST to create
  // ResourceCreateWithServiceProvidedName does not fit, we have data in response body
  @createsResource(T)
  CreateSession is Azure.Core.Foundations.ResourceCollectionOperation<
    T,
    LivenessSessionCreationContent,
    LivenessSessionCreationResult,
    ServiceTraits
  >;

  // ResourceList does not fit, we put object array in response directly
  // NonPagedResourceList does not fit, we need customize the response object for any template type
  ListSessions is Azure.Core.Foundations.ResourceList<
    T,
    ListRequestOptions,
    Body<LivenessSessionItem[]>,
    ServiceTraits
  >;

  GetSession is Operations.ResourceRead<T>;

  // ResourceDelete does not fit, we return 200 instead of 204
  @deletesResource(T)
  DeleteSession is Azure.Core.Foundations.ResourceOperation<
    T,
    {},
    TypeSpec.Http.OkResponse,
    ServiceTraits
  >;

  // ResourceList does not fit, we put object array in response directly
  ListSessionAuditEntries is Azure.Core.Foundations.NonPagedResourceList<
    U,
    ServiceTraits
  >;
}

alias LivenessInterface = BaseSessionInterface<LivenessSession, LivenessSessionAuditEntry>;
alias LivenessWithVerifyInterface = BaseSessionInterface<LivenessWithVerifySession, LivenessWithVerifySessionAuditEntry>;

interface SessionClient {
  createLivenessSession is LivenessInterface.CreateSession;

  getLivenessSession is LivenessInterface.GetSession;

  deleteLivenessSession is LivenessInterface.DeleteSession;

  listLivenessSessions is LivenessInterface.ListSessions;

  listLivenessSessionAuditEntries is LivenessInterface.ListSessionAuditEntries;

  @sharedRoute
  createLivenessWithVerifySessionByJson is LivenessWithVerifyInterface.CreateSession;

  @sharedRoute
  @createsResource(LivenessWithVerifySession)
  createLivenessWithVerifySessionByFormData is Azure.Core.Foundations.ResourceCollectionOperation<
    LivenessWithVerifySession,
    LivenessWithVerifySessionCreationContent,
    LivenessSessionCreationResult,
    ServiceTraits>;

  getLivenessWithVerifySession is LivenessWithVerifyInterface.GetSession;

  deleteLivenessWithVerifySession is LivenessWithVerifyInterface.DeleteSession;

  @sharedRoute
  listLivenessWithVerifySessions is LivenessWithVerifyInterface.ListSessions;

  listLivenessWithVerifySessionAuditEntries is LivenessWithVerifyInterface.ListSessionAuditEntries;
}