import { ClientDetails } from "./models/clientDetails";

const RESERVED_MEMBER_NAMES = ["pipeline"];

export function conflictResolver(clientDetails: ClientDetails) {
  resolveConflictWithOperationGroupNames(clientDetails);
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
