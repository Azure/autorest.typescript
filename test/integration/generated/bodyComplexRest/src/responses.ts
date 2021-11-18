// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  BasicDefOutput,
  ErrorModelOutput,
  IntWrapperOutput,
  LongWrapperOutput,
  FloatWrapperOutput,
  DoubleWrapperOutput,
  BooleanWrapperOutput,
  StringWrapperOutput,
  DateWrapperOutput,
  DatetimeWrapperOutput,
  Datetimerfc1123WrapperOutput,
  DurationWrapperOutput,
  ByteWrapperOutput,
  ArrayWrapperOutput,
  DictionaryWrapperOutput,
  SiameseOutput,
  FishOutput,
  DotFishOutput,
  DotFishMarketOutput,
  SalmonOutput,
  ReadonlyObjOutput,
  MyBaseTypeOutput
} from "./outputModels";

/** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
export interface BasicgetValid200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
export interface BasicgetValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Please put {id: 2, name: 'abc', color: 'Magenta'} */
export interface BasicputValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Please put {id: 2, name: 'abc', color: 'Magenta'} */
export interface BasicputValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get a basic complex type that is invalid for the local strong type */
export interface BasicgetInvalid200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type that is invalid for the local strong type */
export interface BasicgetInvaliddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get a basic complex type that is empty */
export interface BasicgetEmpty200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type that is empty */
export interface BasicgetEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get a basic complex type whose properties are null */
export interface BasicgetNull200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type whose properties are null */
export interface BasicgetNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get a basic complex type while the server doesn't provide a response payload */
export interface BasicgetNotProvided200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type while the server doesn't provide a response payload */
export interface BasicgetNotProvideddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with integer properties */
export interface PrimitivegetInt200Response extends HttpResponse {
  status: "200";
  body: IntWrapperOutput;
}

/** Get complex types with integer properties */
export interface PrimitivegetIntdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with integer properties */
export interface PrimitiveputInt200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with integer properties */
export interface PrimitiveputIntdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with long properties */
export interface PrimitivegetLong200Response extends HttpResponse {
  status: "200";
  body: LongWrapperOutput;
}

/** Get complex types with long properties */
export interface PrimitivegetLongdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with long properties */
export interface PrimitiveputLong200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with long properties */
export interface PrimitiveputLongdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with float properties */
export interface PrimitivegetFloat200Response extends HttpResponse {
  status: "200";
  body: FloatWrapperOutput;
}

/** Get complex types with float properties */
export interface PrimitivegetFloatdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with float properties */
export interface PrimitiveputFloat200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with float properties */
export interface PrimitiveputFloatdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with double properties */
export interface PrimitivegetDouble200Response extends HttpResponse {
  status: "200";
  body: DoubleWrapperOutput;
}

/** Get complex types with double properties */
export interface PrimitivegetDoubledefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with double properties */
export interface PrimitiveputDouble200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with double properties */
export interface PrimitiveputDoubledefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with bool properties */
export interface PrimitivegetBool200Response extends HttpResponse {
  status: "200";
  body: BooleanWrapperOutput;
}

/** Get complex types with bool properties */
export interface PrimitivegetBooldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with bool properties */
export interface PrimitiveputBool200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with bool properties */
export interface PrimitiveputBooldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with string properties */
export interface PrimitivegetString200Response extends HttpResponse {
  status: "200";
  body: StringWrapperOutput;
}

/** Get complex types with string properties */
export interface PrimitivegetStringdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with string properties */
export interface PrimitiveputString200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with string properties */
export interface PrimitiveputStringdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with date properties */
export interface PrimitivegetDate200Response extends HttpResponse {
  status: "200";
  body: DateWrapperOutput;
}

/** Get complex types with date properties */
export interface PrimitivegetDatedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with date properties */
export interface PrimitiveputDate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with date properties */
export interface PrimitiveputDatedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with datetime properties */
export interface PrimitivegetDateTime200Response extends HttpResponse {
  status: "200";
  body: DatetimeWrapperOutput;
}

/** Get complex types with datetime properties */
export interface PrimitivegetDateTimedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with datetime properties */
export interface PrimitiveputDateTime200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with datetime properties */
export interface PrimitiveputDateTimedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with datetimeRfc1123 properties */
export interface PrimitivegetDateTimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Datetimerfc1123WrapperOutput;
}

/** Get complex types with datetimeRfc1123 properties */
export interface PrimitivegetDateTimeRfc1123defaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with datetimeRfc1123 properties */
export interface PrimitiveputDateTimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with datetimeRfc1123 properties */
export interface PrimitiveputDateTimeRfc1123defaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with duration properties */
export interface PrimitivegetDuration200Response extends HttpResponse {
  status: "200";
  body: DurationWrapperOutput;
}

/** Get complex types with duration properties */
export interface PrimitivegetDurationdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with duration properties */
export interface PrimitiveputDuration200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with duration properties */
export interface PrimitiveputDurationdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with byte properties */
export interface PrimitivegetByte200Response extends HttpResponse {
  status: "200";
  body: ByteWrapperOutput;
}

/** Get complex types with byte properties */
export interface PrimitivegetBytedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with byte properties */
export interface PrimitiveputByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with byte properties */
export interface PrimitiveputBytedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with array property */
export interface ArraygetValid200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapperOutput;
}

/** Get complex types with array property */
export interface ArraygetValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with array property */
export interface ArrayputValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with array property */
export interface ArrayputValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with array property which is empty */
export interface ArraygetEmpty200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapperOutput;
}

/** Get complex types with array property which is empty */
export interface ArraygetEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with array property which is empty */
export interface ArrayputEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with array property which is empty */
export interface ArrayputEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with array property while server doesn't provide a response payload */
export interface ArraygetNotProvided200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapperOutput;
}

/** Get complex types with array property while server doesn't provide a response payload */
export interface ArraygetNotProvideddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property */
export interface DictionarygetValid200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property */
export interface DictionarygetValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with dictionary property */
export interface DictionaryputValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with dictionary property */
export interface DictionaryputValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property which is empty */
export interface DictionarygetEmpty200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property which is empty */
export interface DictionarygetEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types with dictionary property which is empty */
export interface DictionaryputEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with dictionary property which is empty */
export interface DictionaryputEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property which is null */
export interface DictionarygetNull200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property which is null */
export interface DictionarygetNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property while server doesn't provide a response payload */
export interface DictionarygetNotProvided200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property while server doesn't provide a response payload */
export interface DictionarygetNotProvideddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types that extend others */
export interface InheritancegetValid200Response extends HttpResponse {
  status: "200";
  body: SiameseOutput;
}

/** Get complex types that extend others */
export interface InheritancegetValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types that extend others */
export interface InheritanceputValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that extend others */
export interface InheritanceputValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic */
export interface PolymorphismgetValid200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** Get complex types that are polymorphic */
export interface PolymorphismgetValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic */
export interface PolymorphismputValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic */
export interface PolymorphismputValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic, JSON key contains a dot */
export interface PolymorphismgetDotSyntax200Response extends HttpResponse {
  status: "200";
  body: DotFishOutput;
}

/** Get complex types that are polymorphic, JSON key contains a dot */
export interface PolymorphismgetDotSyntaxdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
export interface PolymorphismgetComposedWithDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DotFishMarketOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
export interface PolymorphismgetComposedWithDiscriminatordefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
export interface PolymorphismgetComposedWithoutDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DotFishMarketOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
export interface PolymorphismgetComposedWithoutDiscriminatordefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismgetComplicated200Response extends HttpResponse {
  status: "200";
  body: SalmonOutput;
}

/** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismgetComplicateddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismputComplicated200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismputComplicateddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic, omitting the discriminator */
export interface PolymorphismputMissingDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: SalmonOutput;
}

/** Put complex types that are polymorphic, omitting the discriminator */
export interface PolymorphismputMissingDiscriminatordefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
export interface PolymorphismputValidMissingRequired200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
export interface PolymorphismputValidMissingRequireddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursivegetValid200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** Get complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursivegetValiddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursiveputValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursiveputValiddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get complex types that have readonly properties */
export interface ReadonlypropertygetValid200Response extends HttpResponse {
  status: "200";
  body: ReadonlyObjOutput;
}

/** Get complex types that have readonly properties */
export interface ReadonlypropertygetValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put complex types that have readonly properties */
export interface ReadonlypropertyputValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that have readonly properties */
export interface ReadonlypropertyputValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

export interface FlattencomplexgetValid200Response extends HttpResponse {
  status: "200";
  body: MyBaseTypeOutput;
}
