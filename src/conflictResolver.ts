import { ClientDetails } from "./models/clientDetails";
import { ParameterDetails } from "./models/parameterDetails";

const RESERVED_MEMBER_NAMES = ["pipeline"];
const RESERVED_PARAMETER_NAMES = ["arguments"];

export function conflictResolver(clientDetails: ClientDetails) {
  resolveConflictWithOperationGroupNames(clientDetails);
  resolveConflictWithParameterNames(clientDetails);
}

function resolveConflictWithOperationGroupNames(clientDetails: ClientDetails) {
  clientDetails.operationGroups.forEach(operationGroup => {
    const isConflict: boolean = checkForConflictWithDefinitions(
      operationGroup.name,
      clientDetails
    );

    if (isConflict) {
      if (
        !checkForConflictWithOperationGroupName(
          `${operationGroup.name}Operations`,
          clientDetails
        )
      ) {
        operationGroup.name = `${operationGroup.name}Operations`;
        operationGroup.key = `${operationGroup.key}Operations`;
      } else {
        operationGroup.name = `${operationGroup.name}OperationGrp`;
        operationGroup.key = `${operationGroup.key}OperationGrp`;
      }
    }
  });
}

function resolveConflictWithParameterNames(clientDetails: ClientDetails) {
  clientDetails.parameters.forEach(parameter => {
    const isConflict: boolean = checkParameterNamesForConflict(parameter);

    if (isConflict) {
      parameter.name = `${parameter.name}Parameter`;
      parameter.nameRef = `${parameter.nameRef}Parameter`;
      parameter.parameterPath = `${parameter.parameterPath}Parameter`;
    }
  });
}

function checkParameterNamesForConflict(parameter: ParameterDetails): boolean {
  if (RESERVED_PARAMETER_NAMES.includes(parameter.name.toLowerCase())) {
    return true;
  }
  return false;
}

function checkForConflictWithDefinitions(
  operationGroupName: string,
  clientDetails: ClientDetails
): boolean {
  if (RESERVED_MEMBER_NAMES.includes(operationGroupName.toLowerCase())) {
    return true;
  }

  for (const model of clientDetails.objects) {
    if (model.name === operationGroupName) {
      return true;
    }
  }

  return false;
}

function checkForConflictWithOperationGroupName(
  operationGroupName: string,
  clientDetails: ClientDetails
): boolean {
  for (const og of clientDetails.operationGroups) {
    if (og.name === operationGroupName) {
      return true;
    }
  }

  return false;
}
