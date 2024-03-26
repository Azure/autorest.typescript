// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { isUnexpected, } from "../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _inferRadiologyInsightsSend(context, body, options = { requestOptions: {} }) {
    return context
        .path("/radiology-insights/jobs")
        .post({
        ...operationOptionsToRequestParameters(options),
        headers: {
            ...(options?.repeatabilityRequestId !== undefined
                ? { "Repeatability-Request-ID": options?.repeatabilityRequestId }
                : {}),
            ...(options?.repeatabilityFirstSent !== undefined
                ? {
                    "Repeatability-First-Sent": options?.repeatabilityFirstSent?.toUTCString(),
                }
                : {}),
        },
        body: {
            patients: body["patients"].map((p) => ({
                id: p["id"],
                info: !p.info
                    ? undefined
                    : {
                        sex: p.info?.["sex"],
                        birthDate: p.info?.["birthDate"]?.toDateString(),
                        clinicalInfo: p.info?.["clinicalInfo"],
                    },
                encounters: p["encounters"] === undefined
                    ? p["encounters"]
                    : p["encounters"].map((p) => ({
                        id: p["id"],
                        period: !p.period
                            ? undefined
                            : {
                                start: p.period?.["start"]?.toISOString(),
                                end: p.period?.["end"]?.toISOString(),
                            },
                        class: p["class"],
                    })),
                patientDocuments: p["patientDocuments"] === undefined
                    ? p["patientDocuments"]
                    : p["patientDocuments"].map((p) => ({
                        type: p["type"],
                        clinicalType: p["clinicalType"],
                        id: p["id"],
                        language: p["language"],
                        createdDateTime: p["createdDateTime"]?.toISOString(),
                        authors: p["authors"] === undefined
                            ? p["authors"]
                            : p["authors"].map((p) => ({
                                id: p["id"],
                                fullName: p["fullName"],
                            })),
                        specialtyType: p["specialtyType"],
                        administrativeMetadata: !p.administrativeMetadata
                            ? undefined
                            : {
                                orderedProcedures: p.administrativeMetadata?.["orderedProcedures"] ===
                                    undefined
                                    ? p.administrativeMetadata?.["orderedProcedures"]
                                    : p.administrativeMetadata?.["orderedProcedures"].map((p) => ({
                                        extension: p["extension"] === undefined
                                            ? p["extension"]
                                            : p["extension"].map((p) => ({
                                                id: p["id"],
                                                extension: !p.extension
                                                    ? undefined
                                                    : p.extension,
                                                url: p["url"],
                                                valueQuantity: !p.valueQuantity
                                                    ? undefined
                                                    : {
                                                        id: p.valueQuantity?.["id"],
                                                        extension: !p.valueQuantity
                                                            ?.extension
                                                            ? undefined
                                                            : p.valueQuantity
                                                                ?.extension,
                                                        value: p.valueQuantity?.["value"],
                                                        comparator: p.valueQuantity?.["comparator"],
                                                        unit: p.valueQuantity?.["unit"],
                                                        system: p.valueQuantity?.["system"],
                                                        code: p.valueQuantity?.["code"],
                                                    },
                                                valueCodeableConcept: !p.valueCodeableConcept
                                                    ? undefined
                                                    : {
                                                        id: p.valueCodeableConcept?.["id"],
                                                        extension: !p
                                                            .valueCodeableConcept
                                                            ?.extension
                                                            ? undefined
                                                            : p.valueCodeableConcept
                                                                ?.extension,
                                                        coding: p.valueCodeableConcept?.["coding"] === undefined
                                                            ? p.valueCodeableConcept?.["coding"]
                                                            : p.valueCodeableConcept?.["coding"].map((p) => ({
                                                                id: p["id"],
                                                                extension: !p.extension
                                                                    ? undefined
                                                                    : p.extension,
                                                                system: p["system"],
                                                                version: p["version"],
                                                                code: p["code"],
                                                                display: p["display"],
                                                            })),
                                                        text: p.valueCodeableConcept?.["text"],
                                                    },
                                                valueString: p["valueString"],
                                                valueBoolean: p["valueBoolean"],
                                                valueInteger: p["valueInteger"],
                                                valueRange: !p.valueRange
                                                    ? undefined
                                                    : {
                                                        id: p.valueRange?.["id"],
                                                        extension: !p.valueRange
                                                            ?.extension
                                                            ? undefined
                                                            : p.valueRange
                                                                ?.extension,
                                                        low: !p.valueRange?.low
                                                            ? undefined
                                                            : {
                                                                id: p.valueRange?.low?.["id"],
                                                                extension: !p.valueRange
                                                                    ?.low?.extension
                                                                    ? undefined
                                                                    : p.valueRange?.low
                                                                        ?.extension,
                                                                value: p.valueRange?.low?.["value"],
                                                                comparator: p.valueRange?.low?.["comparator"],
                                                                unit: p.valueRange?.low?.["unit"],
                                                                system: p.valueRange?.low?.["system"],
                                                                code: p.valueRange?.low?.["code"],
                                                            },
                                                        high: !p.valueRange?.high
                                                            ? undefined
                                                            : {
                                                                id: p.valueRange?.high?.["id"],
                                                                extension: !p.valueRange
                                                                    ?.high?.extension
                                                                    ? undefined
                                                                    : p.valueRange?.high
                                                                        ?.extension,
                                                                value: p.valueRange?.high?.["value"],
                                                                comparator: p.valueRange?.high?.["comparator"],
                                                                unit: p.valueRange?.high?.["unit"],
                                                                system: p.valueRange?.high?.["system"],
                                                                code: p.valueRange?.high?.["code"],
                                                            },
                                                    },
                                                valueRatio: !p.valueRatio
                                                    ? undefined
                                                    : {
                                                        id: p.valueRatio?.["id"],
                                                        extension: !p.valueRatio
                                                            ?.extension
                                                            ? undefined
                                                            : p.valueRatio
                                                                ?.extension,
                                                        numerator: !p.valueRatio
                                                            ?.numerator
                                                            ? undefined
                                                            : {
                                                                id: p.valueRatio
                                                                    ?.numerator?.["id"],
                                                                extension: !p.valueRatio
                                                                    ?.numerator?.extension
                                                                    ? undefined
                                                                    : p.valueRatio?.numerator
                                                                        ?.extension,
                                                                value: p.valueRatio?.numerator?.["value"],
                                                                comparator: p.valueRatio?.numerator?.["comparator"],
                                                                unit: p.valueRatio
                                                                    ?.numerator?.["unit"],
                                                                system: p.valueRatio?.numerator?.["system"],
                                                                code: p.valueRatio
                                                                    ?.numerator?.["code"],
                                                            },
                                                        denominator: !p.valueRatio
                                                            ?.denominator
                                                            ? undefined
                                                            : {
                                                                id: p.valueRatio
                                                                    ?.denominator?.["id"],
                                                                extension: !p.valueRatio
                                                                    ?.denominator?.extension
                                                                    ? undefined
                                                                    : p.valueRatio
                                                                        ?.denominator
                                                                        ?.extension,
                                                                value: p.valueRatio
                                                                    ?.denominator?.["value"],
                                                                comparator: p.valueRatio
                                                                    ?.denominator?.["comparator"],
                                                                unit: p.valueRatio
                                                                    ?.denominator?.["unit"],
                                                                system: p.valueRatio
                                                                    ?.denominator?.["system"],
                                                                code: p.valueRatio
                                                                    ?.denominator?.["code"],
                                                            },
                                                    },
                                                valueSampledData: !p.valueSampledData
                                                    ? undefined
                                                    : {
                                                        id: p.valueSampledData?.["id"],
                                                        extension: !p.valueSampledData
                                                            ?.extension
                                                            ? undefined
                                                            : p.valueSampledData
                                                                ?.extension,
                                                        origin: {
                                                            id: p.valueSampledData?.origin["id"],
                                                            extension: !p.valueSampledData
                                                                ?.origin.extension
                                                                ? undefined
                                                                : p.valueSampledData?.origin
                                                                    .extension,
                                                            value: p.valueSampledData?.origin["value"],
                                                            comparator: p.valueSampledData?.origin["comparator"],
                                                            unit: p.valueSampledData
                                                                ?.origin["unit"],
                                                            system: p.valueSampledData?.origin["system"],
                                                            code: p.valueSampledData
                                                                ?.origin["code"],
                                                        },
                                                        period: p.valueSampledData?.["period"],
                                                        factor: p.valueSampledData?.["factor"],
                                                        lowerLimit: p.valueSampledData?.["lowerLimit"],
                                                        upperLimit: p.valueSampledData?.["upperLimit"],
                                                        dimensions: p.valueSampledData?.["dimensions"],
                                                        data: p.valueSampledData?.["data"],
                                                    },
                                                valueTime: p["valueTime"]?.toTimeString(),
                                                valueDateTime: p["valueDateTime"],
                                                valuePeriod: !p.valuePeriod
                                                    ? undefined
                                                    : {
                                                        id: p.valuePeriod?.["id"],
                                                        extension: !p.valuePeriod
                                                            ?.extension
                                                            ? undefined
                                                            : p.valuePeriod
                                                                ?.extension,
                                                        start: p.valuePeriod?.["start"],
                                                        end: p.valuePeriod?.["end"],
                                                    },
                                                valueReference: !p.valueReference
                                                    ? undefined
                                                    : {
                                                        id: p.valueReference?.["id"],
                                                        extension: !p.valueReference
                                                            ?.extension
                                                            ? undefined
                                                            : p.valueReference
                                                                ?.extension,
                                                        reference: p.valueReference?.["reference"],
                                                        type: p.valueReference?.["type"],
                                                        identifier: !p.valueReference
                                                            ?.identifier
                                                            ? undefined
                                                            : {
                                                                id: p.valueReference
                                                                    ?.identifier?.["id"],
                                                                extension: !p.valueReference
                                                                    ?.identifier?.extension
                                                                    ? undefined
                                                                    : p.valueReference
                                                                        ?.identifier
                                                                        ?.extension,
                                                                use: p.valueReference
                                                                    ?.identifier?.["use"],
                                                                type: !p.valueReference
                                                                    ?.identifier?.type
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueReference
                                                                            ?.identifier
                                                                            ?.type?.["id"],
                                                                        extension: !p
                                                                            .valueReference
                                                                            ?.identifier?.type
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueReference
                                                                                ?.identifier
                                                                                ?.type
                                                                                ?.extension,
                                                                        coding: p.valueReference
                                                                            ?.identifier
                                                                            ?.type?.["coding"] === undefined
                                                                            ? p.valueReference
                                                                                ?.identifier
                                                                                ?.type?.["coding"]
                                                                            : p.valueReference?.identifier?.type?.["coding"].map((p) => ({
                                                                                id: p["id"],
                                                                                extension: !p.extension
                                                                                    ? undefined
                                                                                    : p.extension,
                                                                                system: p["system"],
                                                                                version: p["version"],
                                                                                code: p["code"],
                                                                                display: p["display"],
                                                                            })),
                                                                        text: p.valueReference
                                                                            ?.identifier
                                                                            ?.type?.["text"],
                                                                    },
                                                                system: p.valueReference
                                                                    ?.identifier?.["system"],
                                                                value: p.valueReference
                                                                    ?.identifier?.["value"],
                                                                period: !p.valueReference
                                                                    ?.identifier?.period
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueReference
                                                                            ?.identifier
                                                                            ?.period?.["id"],
                                                                        extension: !p
                                                                            .valueReference
                                                                            ?.identifier?.period
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueReference
                                                                                ?.identifier
                                                                                ?.period
                                                                                ?.extension,
                                                                        start: p.valueReference
                                                                            ?.identifier
                                                                            ?.period?.["start"],
                                                                        end: p.valueReference
                                                                            ?.identifier
                                                                            ?.period?.["end"],
                                                                    },
                                                                assigner: !p.valueReference
                                                                    ?.identifier?.assigner
                                                                    ? undefined
                                                                    : p.valueReference
                                                                        ?.identifier
                                                                        ?.assigner,
                                                            },
                                                        display: p.valueReference?.["display"],
                                                    },
                                            })),
                                        code: !p.code
                                            ? undefined
                                            : {
                                                id: p.code?.["id"],
                                                extension: p.code?.["extension"] === undefined
                                                    ? p.code?.["extension"]
                                                    : p.code?.["extension"].map((p) => ({
                                                        id: p["id"],
                                                        extension: !p.extension
                                                            ? undefined
                                                            : p.extension,
                                                        url: p["url"],
                                                        valueQuantity: !p.valueQuantity
                                                            ? undefined
                                                            : {
                                                                id: p.valueQuantity?.["id"],
                                                                extension: !p.valueQuantity
                                                                    ?.extension
                                                                    ? undefined
                                                                    : p.valueQuantity
                                                                        ?.extension,
                                                                value: p.valueQuantity?.["value"],
                                                                comparator: p.valueQuantity?.["comparator"],
                                                                unit: p.valueQuantity?.["unit"],
                                                                system: p.valueQuantity?.["system"],
                                                                code: p.valueQuantity?.["code"],
                                                            },
                                                        valueCodeableConcept: !p.valueCodeableConcept
                                                            ? undefined
                                                            : p.valueCodeableConcept,
                                                        valueString: p["valueString"],
                                                        valueBoolean: p["valueBoolean"],
                                                        valueInteger: p["valueInteger"],
                                                        valueRange: !p.valueRange
                                                            ? undefined
                                                            : {
                                                                id: p.valueRange?.["id"],
                                                                extension: !p.valueRange
                                                                    ?.extension
                                                                    ? undefined
                                                                    : p.valueRange
                                                                        ?.extension,
                                                                low: !p.valueRange?.low
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueRange
                                                                            ?.low?.["id"],
                                                                        extension: !p
                                                                            .valueRange?.low
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueRange?.low
                                                                                ?.extension,
                                                                        value: p.valueRange?.low?.["value"],
                                                                        comparator: p.valueRange?.low?.["comparator"],
                                                                        unit: p.valueRange
                                                                            ?.low?.["unit"],
                                                                        system: p.valueRange?.low?.["system"],
                                                                        code: p.valueRange
                                                                            ?.low?.["code"],
                                                                    },
                                                                high: !p.valueRange?.high
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueRange
                                                                            ?.high?.["id"],
                                                                        extension: !p
                                                                            .valueRange?.high
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueRange
                                                                                ?.high
                                                                                ?.extension,
                                                                        value: p.valueRange
                                                                            ?.high?.["value"],
                                                                        comparator: p.valueRange
                                                                            ?.high?.["comparator"],
                                                                        unit: p.valueRange
                                                                            ?.high?.["unit"],
                                                                        system: p.valueRange
                                                                            ?.high?.["system"],
                                                                        code: p.valueRange
                                                                            ?.high?.["code"],
                                                                    },
                                                            },
                                                        valueRatio: !p.valueRatio
                                                            ? undefined
                                                            : {
                                                                id: p.valueRatio?.["id"],
                                                                extension: !p.valueRatio
                                                                    ?.extension
                                                                    ? undefined
                                                                    : p.valueRatio
                                                                        ?.extension,
                                                                numerator: !p.valueRatio
                                                                    ?.numerator
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueRatio
                                                                            ?.numerator?.["id"],
                                                                        extension: !p
                                                                            .valueRatio
                                                                            ?.numerator
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueRatio
                                                                                ?.numerator
                                                                                ?.extension,
                                                                        value: p.valueRatio
                                                                            ?.numerator?.["value"],
                                                                        comparator: p.valueRatio
                                                                            ?.numerator?.["comparator"],
                                                                        unit: p.valueRatio
                                                                            ?.numerator?.["unit"],
                                                                        system: p.valueRatio
                                                                            ?.numerator?.["system"],
                                                                        code: p.valueRatio
                                                                            ?.numerator?.["code"],
                                                                    },
                                                                denominator: !p.valueRatio
                                                                    ?.denominator
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueRatio
                                                                            ?.denominator?.["id"],
                                                                        extension: !p
                                                                            .valueRatio
                                                                            ?.denominator
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueRatio
                                                                                ?.denominator
                                                                                ?.extension,
                                                                        value: p.valueRatio
                                                                            ?.denominator?.["value"],
                                                                        comparator: p.valueRatio
                                                                            ?.denominator?.["comparator"],
                                                                        unit: p.valueRatio
                                                                            ?.denominator?.["unit"],
                                                                        system: p.valueRatio
                                                                            ?.denominator?.["system"],
                                                                        code: p.valueRatio
                                                                            ?.denominator?.["code"],
                                                                    },
                                                            },
                                                        valueSampledData: !p.valueSampledData
                                                            ? undefined
                                                            : {
                                                                id: p.valueSampledData?.["id"],
                                                                extension: !p
                                                                    .valueSampledData
                                                                    ?.extension
                                                                    ? undefined
                                                                    : p.valueSampledData
                                                                        ?.extension,
                                                                origin: {
                                                                    id: p.valueSampledData
                                                                        ?.origin["id"],
                                                                    extension: !p
                                                                        .valueSampledData
                                                                        ?.origin.extension
                                                                        ? undefined
                                                                        : p.valueSampledData
                                                                            ?.origin
                                                                            .extension,
                                                                    value: p.valueSampledData
                                                                        ?.origin["value"],
                                                                    comparator: p.valueSampledData
                                                                        ?.origin["comparator"],
                                                                    unit: p.valueSampledData
                                                                        ?.origin["unit"],
                                                                    system: p.valueSampledData
                                                                        ?.origin["system"],
                                                                    code: p.valueSampledData
                                                                        ?.origin["code"],
                                                                },
                                                                period: p.valueSampledData?.["period"],
                                                                factor: p.valueSampledData?.["factor"],
                                                                lowerLimit: p.valueSampledData?.["lowerLimit"],
                                                                upperLimit: p.valueSampledData?.["upperLimit"],
                                                                dimensions: p.valueSampledData?.["dimensions"],
                                                                data: p
                                                                    .valueSampledData?.["data"],
                                                            },
                                                        valueTime: p["valueTime"]?.toTimeString(),
                                                        valueDateTime: p["valueDateTime"],
                                                        valuePeriod: !p.valuePeriod
                                                            ? undefined
                                                            : {
                                                                id: p.valuePeriod?.["id"],
                                                                extension: !p.valuePeriod
                                                                    ?.extension
                                                                    ? undefined
                                                                    : p.valuePeriod
                                                                        ?.extension,
                                                                start: p.valuePeriod?.["start"],
                                                                end: p.valuePeriod?.["end"],
                                                            },
                                                        valueReference: !p.valueReference
                                                            ? undefined
                                                            : {
                                                                id: p.valueReference?.["id"],
                                                                extension: !p.valueReference
                                                                    ?.extension
                                                                    ? undefined
                                                                    : p.valueReference
                                                                        ?.extension,
                                                                reference: p.valueReference?.["reference"],
                                                                type: p.valueReference?.["type"],
                                                                identifier: !p
                                                                    .valueReference
                                                                    ?.identifier
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueReference
                                                                            ?.identifier?.["id"],
                                                                        extension: !p
                                                                            .valueReference
                                                                            ?.identifier
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueReference
                                                                                ?.identifier
                                                                                ?.extension,
                                                                        use: p.valueReference
                                                                            ?.identifier?.["use"],
                                                                        type: !p
                                                                            .valueReference
                                                                            ?.identifier?.type
                                                                            ? undefined
                                                                            : p.valueReference
                                                                                ?.identifier
                                                                                ?.type,
                                                                        system: p.valueReference
                                                                            ?.identifier?.["system"],
                                                                        value: p.valueReference
                                                                            ?.identifier?.["value"],
                                                                        period: !p
                                                                            .valueReference
                                                                            ?.identifier?.period
                                                                            ? undefined
                                                                            : {
                                                                                id: p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.period?.["id"],
                                                                                extension: !p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.period
                                                                                    ?.extension
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueReference
                                                                                        ?.identifier
                                                                                        ?.period
                                                                                        ?.extension,
                                                                                start: p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.period?.["start"],
                                                                                end: p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.period?.["end"],
                                                                            },
                                                                        assigner: !p
                                                                            .valueReference
                                                                            ?.identifier
                                                                            ?.assigner
                                                                            ? undefined
                                                                            : p.valueReference
                                                                                ?.identifier
                                                                                ?.assigner,
                                                                    },
                                                                display: p.valueReference?.["display"],
                                                            },
                                                    })),
                                                coding: p.code?.["coding"] === undefined
                                                    ? p.code?.["coding"]
                                                    : p.code?.["coding"].map((p) => ({
                                                        id: p["id"],
                                                        extension: p["extension"] === undefined
                                                            ? p["extension"]
                                                            : p["extension"].map((p) => ({
                                                                id: p["id"],
                                                                extension: !p.extension
                                                                    ? undefined
                                                                    : p.extension,
                                                                url: p["url"],
                                                                valueQuantity: !p.valueQuantity
                                                                    ? undefined
                                                                    : {
                                                                        id: p
                                                                            .valueQuantity?.["id"],
                                                                        extension: !p
                                                                            .valueQuantity
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p
                                                                                .valueQuantity
                                                                                ?.extension,
                                                                        value: p
                                                                            .valueQuantity?.["value"],
                                                                        comparator: p
                                                                            .valueQuantity?.["comparator"],
                                                                        unit: p
                                                                            .valueQuantity?.["unit"],
                                                                        system: p
                                                                            .valueQuantity?.["system"],
                                                                        code: p
                                                                            .valueQuantity?.["code"],
                                                                    },
                                                                valueCodeableConcept: !p.valueCodeableConcept
                                                                    ? undefined
                                                                    : p.valueCodeableConcept,
                                                                valueString: p["valueString"],
                                                                valueBoolean: p["valueBoolean"],
                                                                valueInteger: p["valueInteger"],
                                                                valueRange: !p.valueRange
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueRange?.["id"],
                                                                        extension: !p
                                                                            .valueRange
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueRange
                                                                                ?.extension,
                                                                        low: !p.valueRange
                                                                            ?.low
                                                                            ? undefined
                                                                            : {
                                                                                id: p
                                                                                    .valueRange
                                                                                    ?.low?.["id"],
                                                                                extension: !p
                                                                                    .valueRange
                                                                                    ?.low
                                                                                    ?.extension
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueRange
                                                                                        ?.low
                                                                                        ?.extension,
                                                                                value: p.valueRange
                                                                                    ?.low?.["value"],
                                                                                comparator: p.valueRange
                                                                                    ?.low?.["comparator"],
                                                                                unit: p
                                                                                    .valueRange
                                                                                    ?.low?.["unit"],
                                                                                system: p.valueRange
                                                                                    ?.low?.["system"],
                                                                                code: p
                                                                                    .valueRange
                                                                                    ?.low?.["code"],
                                                                            },
                                                                        high: !p.valueRange
                                                                            ?.high
                                                                            ? undefined
                                                                            : {
                                                                                id: p
                                                                                    .valueRange
                                                                                    ?.high?.["id"],
                                                                                extension: !p
                                                                                    .valueRange
                                                                                    ?.high
                                                                                    ?.extension
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueRange
                                                                                        ?.high
                                                                                        ?.extension,
                                                                                value: p.valueRange
                                                                                    ?.high?.["value"],
                                                                                comparator: p.valueRange
                                                                                    ?.high?.["comparator"],
                                                                                unit: p
                                                                                    .valueRange
                                                                                    ?.high?.["unit"],
                                                                                system: p.valueRange
                                                                                    ?.high?.["system"],
                                                                                code: p
                                                                                    .valueRange
                                                                                    ?.high?.["code"],
                                                                            },
                                                                    },
                                                                valueRatio: !p.valueRatio
                                                                    ? undefined
                                                                    : {
                                                                        id: p.valueRatio?.["id"],
                                                                        extension: !p
                                                                            .valueRatio
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valueRatio
                                                                                ?.extension,
                                                                        numerator: !p
                                                                            .valueRatio
                                                                            ?.numerator
                                                                            ? undefined
                                                                            : {
                                                                                id: p
                                                                                    .valueRatio
                                                                                    ?.numerator?.["id"],
                                                                                extension: !p
                                                                                    .valueRatio
                                                                                    ?.numerator
                                                                                    ?.extension
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueRatio
                                                                                        ?.numerator
                                                                                        ?.extension,
                                                                                value: p.valueRatio
                                                                                    ?.numerator?.["value"],
                                                                                comparator: p.valueRatio
                                                                                    ?.numerator?.["comparator"],
                                                                                unit: p
                                                                                    .valueRatio
                                                                                    ?.numerator?.["unit"],
                                                                                system: p.valueRatio
                                                                                    ?.numerator?.["system"],
                                                                                code: p
                                                                                    .valueRatio
                                                                                    ?.numerator?.["code"],
                                                                            },
                                                                        denominator: !p
                                                                            .valueRatio
                                                                            ?.denominator
                                                                            ? undefined
                                                                            : {
                                                                                id: p
                                                                                    .valueRatio
                                                                                    ?.denominator?.["id"],
                                                                                extension: !p
                                                                                    .valueRatio
                                                                                    ?.denominator
                                                                                    ?.extension
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueRatio
                                                                                        ?.denominator
                                                                                        ?.extension,
                                                                                value: p.valueRatio
                                                                                    ?.denominator?.["value"],
                                                                                comparator: p.valueRatio
                                                                                    ?.denominator?.["comparator"],
                                                                                unit: p
                                                                                    .valueRatio
                                                                                    ?.denominator?.["unit"],
                                                                                system: p.valueRatio
                                                                                    ?.denominator?.["system"],
                                                                                code: p
                                                                                    .valueRatio
                                                                                    ?.denominator?.["code"],
                                                                            },
                                                                    },
                                                                valueSampledData: !p.valueSampledData
                                                                    ? undefined
                                                                    : {
                                                                        id: p
                                                                            .valueSampledData?.["id"],
                                                                        extension: !p
                                                                            .valueSampledData
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p
                                                                                .valueSampledData
                                                                                ?.extension,
                                                                        origin: {
                                                                            id: p
                                                                                .valueSampledData
                                                                                ?.origin["id"],
                                                                            extension: !p
                                                                                .valueSampledData
                                                                                ?.origin
                                                                                .extension
                                                                                ? undefined
                                                                                : p
                                                                                    .valueSampledData
                                                                                    ?.origin
                                                                                    .extension,
                                                                            value: p
                                                                                .valueSampledData
                                                                                ?.origin["value"],
                                                                            comparator: p
                                                                                .valueSampledData
                                                                                ?.origin["comparator"],
                                                                            unit: p
                                                                                .valueSampledData
                                                                                ?.origin["unit"],
                                                                            system: p
                                                                                .valueSampledData
                                                                                ?.origin["system"],
                                                                            code: p
                                                                                .valueSampledData
                                                                                ?.origin["code"],
                                                                        },
                                                                        period: p
                                                                            .valueSampledData?.["period"],
                                                                        factor: p
                                                                            .valueSampledData?.["factor"],
                                                                        lowerLimit: p
                                                                            .valueSampledData?.["lowerLimit"],
                                                                        upperLimit: p
                                                                            .valueSampledData?.["upperLimit"],
                                                                        dimensions: p
                                                                            .valueSampledData?.["dimensions"],
                                                                        data: p
                                                                            .valueSampledData?.["data"],
                                                                    },
                                                                valueTime: p["valueTime"]?.toTimeString(),
                                                                valueDateTime: p["valueDateTime"],
                                                                valuePeriod: !p.valuePeriod
                                                                    ? undefined
                                                                    : {
                                                                        id: p
                                                                            .valuePeriod?.["id"],
                                                                        extension: !p
                                                                            .valuePeriod
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p.valuePeriod
                                                                                ?.extension,
                                                                        start: p.valuePeriod?.["start"],
                                                                        end: p
                                                                            .valuePeriod?.["end"],
                                                                    },
                                                                valueReference: !p.valueReference
                                                                    ? undefined
                                                                    : {
                                                                        id: p
                                                                            .valueReference?.["id"],
                                                                        extension: !p
                                                                            .valueReference
                                                                            ?.extension
                                                                            ? undefined
                                                                            : p
                                                                                .valueReference
                                                                                ?.extension,
                                                                        reference: p
                                                                            .valueReference?.["reference"],
                                                                        type: p
                                                                            .valueReference?.["type"],
                                                                        identifier: !p
                                                                            .valueReference
                                                                            ?.identifier
                                                                            ? undefined
                                                                            : {
                                                                                id: p
                                                                                    .valueReference
                                                                                    ?.identifier?.["id"],
                                                                                extension: !p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.extension
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueReference
                                                                                        ?.identifier
                                                                                        ?.extension,
                                                                                use: p
                                                                                    .valueReference
                                                                                    ?.identifier?.["use"],
                                                                                type: !p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.type
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueReference
                                                                                        ?.identifier
                                                                                        ?.type,
                                                                                system: p
                                                                                    .valueReference
                                                                                    ?.identifier?.["system"],
                                                                                value: p
                                                                                    .valueReference
                                                                                    ?.identifier?.["value"],
                                                                                period: !p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.period
                                                                                    ? undefined
                                                                                    : {
                                                                                        id: p
                                                                                            .valueReference
                                                                                            ?.identifier
                                                                                            ?.period?.["id"],
                                                                                        extension: !p
                                                                                            .valueReference
                                                                                            ?.identifier
                                                                                            ?.period
                                                                                            ?.extension
                                                                                            ? undefined
                                                                                            : p
                                                                                                .valueReference
                                                                                                ?.identifier
                                                                                                ?.period
                                                                                                ?.extension,
                                                                                        start: p
                                                                                            .valueReference
                                                                                            ?.identifier
                                                                                            ?.period?.["start"],
                                                                                        end: p
                                                                                            .valueReference
                                                                                            ?.identifier
                                                                                            ?.period?.["end"],
                                                                                    },
                                                                                assigner: !p
                                                                                    .valueReference
                                                                                    ?.identifier
                                                                                    ?.assigner
                                                                                    ? undefined
                                                                                    : p
                                                                                        .valueReference
                                                                                        ?.identifier
                                                                                        ?.assigner,
                                                                            },
                                                                        display: p
                                                                            .valueReference?.["display"],
                                                                    },
                                                            })),
                                                        system: p["system"],
                                                        version: p["version"],
                                                        code: p["code"],
                                                        display: p["display"],
                                                    })),
                                                text: p.code?.["text"],
                                            },
                                        description: p["description"],
                                    })),
                                encounterId: p.administrativeMetadata?.["encounterId"],
                            },
                        content: {
                            sourceType: p.content["sourceType"],
                            value: p.content["value"],
                        },
                    })),
            })),
            configuration: !body.configuration
                ? undefined
                : {
                    verbose: body.configuration?.["verbose"],
                    includeEvidence: body.configuration?.["includeEvidence"],
                    inferenceTypes: body.configuration?.["inferenceTypes"],
                    inferenceOptions: !body.configuration?.inferenceOptions
                        ? undefined
                        : {
                            followupRecommendation: !body.configuration
                                ?.inferenceOptions?.followupRecommendation
                                ? undefined
                                : {
                                    includeRecommendationsWithNoSpecifiedModality: body.configuration?.inferenceOptions
                                        ?.followupRecommendation?.["includeRecommendationsWithNoSpecifiedModality"],
                                    includeRecommendationsInReferences: body.configuration?.inferenceOptions
                                        ?.followupRecommendation?.["includeRecommendationsInReferences"],
                                    provideFocusedSentenceEvidence: body.configuration?.inferenceOptions
                                        ?.followupRecommendation?.["provideFocusedSentenceEvidence"],
                                },
                            finding: !body.configuration?.inferenceOptions?.finding
                                ? undefined
                                : {
                                    provideFocusedSentenceEvidence: body.configuration?.inferenceOptions?.finding?.["provideFocusedSentenceEvidence"],
                                },
                        },
                    locale: body.configuration?.["locale"],
                },
        },
    });
}
export async function _inferRadiologyInsightsDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        status: result.body["status"],
        createdDateTime: result.body["createdDateTime"] !== undefined
            ? new Date(result.body["createdDateTime"])
            : undefined,
        expirationDateTime: result.body["expirationDateTime"] !== undefined
            ? new Date(result.body["expirationDateTime"])
            : undefined,
        lastUpdateDateTime: result.body["lastUpdateDateTime"] !== undefined
            ? new Date(result.body["lastUpdateDateTime"])
            : undefined,
        error: !result.body.error ? undefined : result.body.error,
    };
}
/** Creates a Radiology Insights job with the given request body. */
export async function inferRadiologyInsights(context, body, options = { requestOptions: {} }) {
    const result = await _inferRadiologyInsightsSend(context, body, options);
    return _inferRadiologyInsightsDeserialize(result);
}
//# sourceMappingURL=operations.js.map