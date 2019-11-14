export class ClientFileModel {
  clientContextClassName: string = '';
  clientContextFileName: string = '';
  clientClassName: string = '';
  clientFileName: string = '';
  modelsName: string = '';
  mappersName: string = '';
  operationGroupsNameMapper: OperationGroupName[] = [];
}

export class OperationGroupName {
  operationGroupName: string = '';
  operationGroupReferenceName: string = '';
}