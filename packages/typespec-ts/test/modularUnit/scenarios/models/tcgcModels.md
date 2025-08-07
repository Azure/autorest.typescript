# only: generate constant type model

## TypeSpec

```tsp
import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;

namespace myTest{
union AgentStreamEvent {
  string,
  ThreadStreamEvent | RunStreamEvent,
  
}

union ThreadStreamEvent {
  string,

  /** Event sent when a new thread is created. The data of this event is of type AgentThread */
  ThreadCreated: "thread.created",
}

union RunStreamEvent {
  string,

  /** Event sent when a new thread is created. The data of this event is of type AgentThread */
  RunCreated: "run.created",
}
@@usage(AgentStreamEvent, Usage.output);
@@access(AgentStreamEvent, Access.public);
op get(): AgentStreamEvent;
}


```

The config would be like:

```yaml
withRawContent: true
```

## Models

```ts models
/** Alias for AgentStreamEvent */
export type AgentStreamEvent = string | (ThreadStreamEvent | RunStreamEvent);

export function agentStreamEventDeserializer(item: any): AgentStreamEvent {
  return item;
}

/** Alias for _ */
export type _ = ThreadStreamEvent | RunStreamEvent;
/** Type of ThreadStreamEvent */
export type ThreadStreamEvent = "thread.created";
/** Type of RunStreamEvent */
export type RunStreamEvent = "run.created";
```