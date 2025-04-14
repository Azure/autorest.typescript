# Should generate serializers for discriminated model

Verify that the serializers are correctly referenced within the switch statement of the base serializers.

## TypeSpec

This is tsp definition.

```tsp
@discriminator("kind")
model AWidgetData {
    kind: string;
}

model AOAIModelConfig extends AWidgetData {
  kind: "kind0";
  fooProp: string;
}

model MAASModelConfig extends AWidgetData {
  kind: "kind1";
  start: utcDateTime;
  end?: utcDateTime;
}

@route("/serialize")
interface D {
  @get op bar(): AWidgetData;
}
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface AWidgetData */
export interface AWidgetData {
  kind: string;
}

export function aWidgetDataDeserializer(item: any): AWidgetData {
  return {
    kind: item["kind"],
  };
}

/** Alias for AWidgetDataUnion */
export type AWidgetDataUnion = AoaiModelConfig | MaasModelConfig | AWidgetData;

export function aWidgetDataUnionDeserializer(item: any): AWidgetDataUnion {
  switch (item.kind) {
    case "kind0":
      return aoaiModelConfigDeserializer(item as AoaiModelConfig);

    case "kind1":
      return maasModelConfigDeserializer(item as MaasModelConfig);

    default:
      return aWidgetDataDeserializer(item);
  }
}

/** model interface AoaiModelConfig */
export interface AoaiModelConfig extends AWidgetData {
  kind: "kind0";
  fooProp: string;
}

export function aoaiModelConfigDeserializer(item: any): AoaiModelConfig {
  return {
    kind: "kind0",
    fooProp: item["fooProp"],
  };
}

/** model interface MaasModelConfig */
export interface MaasModelConfig extends AWidgetData {
  kind: "kind1";
  start: Date;
  end?: Date;
}

export function maasModelConfigDeserializer(item: any): MaasModelConfig {
  return {
    kind: "kind1",
    start: new Date(item["start"]),
    end: !item["end"] ? item["end"] : new Date(item["end"]),
  };
}
```
