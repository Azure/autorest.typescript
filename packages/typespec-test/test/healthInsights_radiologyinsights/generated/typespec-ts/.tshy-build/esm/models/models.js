// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
export function patientRecordSerializer(item) {
    return {
        id: item["id"],
        info: !item.info ? item.info : patientInfoSerializer(item.info),
        encounters: item["encounters"] === undefined
            ? item["encounters"]
            : item["encounters"].map(encounterSerializer),
        patientDocuments: item["patientDocuments"] === undefined
            ? item["patientDocuments"]
            : item["patientDocuments"].map(patientDocumentSerializer),
    };
}
export function patientInfoSerializer(item) {
    return {
        sex: item["sex"],
        birthDate: item["birthDate"]?.toDateString(),
        clinicalInfo: item["clinicalInfo"] === undefined
            ? item["clinicalInfo"]
            : item["clinicalInfo"].map(resourceSerializer),
    };
}
export function resourceSerializer(item) {
    return {
        ...item,
        resourceType: item["resourceType"],
        id: item["id"],
        meta: !item.meta ? item.meta : metaSerializer(item.meta),
        implicitRules: item["implicitRules"],
        language: item["language"],
    };
}
export function metaSerializer(item) {
    return {
        versionId: item["versionId"],
        lastUpdated: item["lastUpdated"],
        source: item["source"],
        profile: item["profile"],
        security: item["security"] === undefined
            ? item["security"]
            : item["security"].map(codingSerializer),
        tag: item["tag"] === undefined
            ? item["tag"]
            : item["tag"].map(codingSerializer),
    };
}
export function elementSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
    };
}
export function extensionSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        url: item["url"],
        valueQuantity: !item.valueQuantity
            ? item.valueQuantity
            : quantitySerializer(item.valueQuantity),
        valueCodeableConcept: !item.valueCodeableConcept
            ? item.valueCodeableConcept
            : codeableConceptSerializer(item.valueCodeableConcept),
        valueString: item["valueString"],
        valueBoolean: item["valueBoolean"],
        valueInteger: item["valueInteger"],
        valueRange: !item.valueRange
            ? item.valueRange
            : rangeSerializer(item.valueRange),
        valueRatio: !item.valueRatio
            ? item.valueRatio
            : ratioSerializer(item.valueRatio),
        valueSampledData: !item.valueSampledData
            ? item.valueSampledData
            : sampledDataSerializer(item.valueSampledData),
        valueTime: item["valueTime"]?.toTimeString(),
        valueDateTime: item["valueDateTime"],
        valuePeriod: !item.valuePeriod
            ? item.valuePeriod
            : periodSerializer(item.valuePeriod),
        valueReference: !item.valueReference
            ? item.valueReference
            : referenceSerializer(item.valueReference),
    };
}
export function quantitySerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        value: item["value"],
        comparator: item["comparator"],
        unit: item["unit"],
        system: item["system"],
        code: item["code"],
    };
}
export function codeableConceptSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        coding: item["coding"] === undefined
            ? item["coding"]
            : item["coding"].map(codingSerializer),
        text: item["text"],
    };
}
export function codingSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        system: item["system"],
        version: item["version"],
        code: item["code"],
        display: item["display"],
    };
}
export function rangeSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        low: !item.low ? item.low : quantitySerializer(item.low),
        high: !item.high ? item.high : quantitySerializer(item.high),
    };
}
export function ratioSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        numerator: !item.numerator
            ? item.numerator
            : quantitySerializer(item.numerator),
        denominator: !item.denominator
            ? item.denominator
            : quantitySerializer(item.denominator),
    };
}
export function sampledDataSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        origin: quantitySerializer(item.origin),
        period: item["period"],
        factor: item["factor"],
        lowerLimit: item["lowerLimit"],
        upperLimit: item["upperLimit"],
        dimensions: item["dimensions"],
        data: item["data"],
    };
}
export function periodSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        start: item["start"],
        end: item["end"],
    };
}
export function referenceSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        reference: item["reference"],
        type: item["type"],
        identifier: !item.identifier
            ? item.identifier
            : identifierSerializer(item.identifier),
        display: item["display"],
    };
}
export function identifierSerializer(item) {
    return {
        id: item["id"],
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        use: item["use"],
        type: !item.type ? item.type : codeableConceptSerializer(item.type),
        system: item["system"],
        value: item["value"],
        period: !item.period ? item.period : periodSerializer(item.period),
        assigner: !item.assigner
            ? item.assigner
            : referenceSerializer(item.assigner),
    };
}
export function encounterSerializer(item) {
    return {
        id: item["id"],
        period: !item.period ? item.period : timePeriodSerializer(item.period),
        class: item["class"],
    };
}
export function timePeriodSerializer(item) {
    return {
        start: item["start"]?.toISOString(),
        end: item["end"]?.toISOString(),
    };
}
export function patientDocumentSerializer(item) {
    return {
        type: item["type"],
        clinicalType: item["clinicalType"],
        id: item["id"],
        language: item["language"],
        createdDateTime: item["createdDateTime"]?.toISOString(),
        authors: item["authors"] === undefined
            ? item["authors"]
            : item["authors"].map(documentAuthorSerializer),
        specialtyType: item["specialtyType"],
        administrativeMetadata: !item.administrativeMetadata
            ? item.administrativeMetadata
            : documentAdministrativeMetadataSerializer(item.administrativeMetadata),
        content: documentContentSerializer(item.content),
    };
}
export function documentAuthorSerializer(item) {
    return {
        id: item["id"],
        fullName: item["fullName"],
    };
}
export function documentAdministrativeMetadataSerializer(item) {
    return {
        orderedProcedures: item["orderedProcedures"] === undefined
            ? item["orderedProcedures"]
            : item["orderedProcedures"].map(orderedProcedureSerializer),
        encounterId: item["encounterId"],
    };
}
export function extendibleSerializer(item) {
    return {
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
    };
}
export function orderedProcedureSerializer(item) {
    return {
        extension: item["extension"] === undefined
            ? item["extension"]
            : item["extension"].map(extensionSerializer),
        code: !item.code ? item.code : codeableConceptSerializer(item.code),
        description: item["description"],
    };
}
export function documentContentSerializer(item) {
    return {
        sourceType: item["sourceType"],
        value: item["value"],
    };
}
export function radiologyInsightsModelConfigurationSerializer(item) {
    return {
        verbose: item["verbose"],
        includeEvidence: item["includeEvidence"],
        inferenceTypes: item["inferenceTypes"],
        inferenceOptions: !item.inferenceOptions
            ? item.inferenceOptions
            : radiologyInsightsInferenceOptionsSerializer(item.inferenceOptions),
        locale: item["locale"],
    };
}
export function radiologyInsightsInferenceOptionsSerializer(item) {
    return {
        followupRecommendation: !item.followupRecommendation
            ? item.followupRecommendation
            : followupRecommendationOptionsSerializer(item.followupRecommendation),
        finding: !item.finding
            ? item.finding
            : findingOptionsSerializer(item.finding),
    };
}
export function followupRecommendationOptionsSerializer(item) {
    return {
        includeRecommendationsWithNoSpecifiedModality: item["includeRecommendationsWithNoSpecifiedModality"],
        includeRecommendationsInReferences: item["includeRecommendationsInReferences"],
        provideFocusedSentenceEvidence: item["provideFocusedSentenceEvidence"],
    };
}
export function findingOptionsSerializer(item) {
    return {
        provideFocusedSentenceEvidence: item["provideFocusedSentenceEvidence"],
    };
}
export function radiologyInsightsDataSerializer(item) {
    return {
        patients: item["patients"].map(patientRecordSerializer),
        configuration: !item.configuration
            ? item.configuration
            : radiologyInsightsModelConfigurationSerializer(item.configuration),
    };
}
//# sourceMappingURL=models.js.map