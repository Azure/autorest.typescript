import { Schema } from "@autorest/codemodel";

export type PathParameter = {
  name: string;
  schema: Schema;
  description?: string;
};

export interface ResponseTypes {
  success: string[];
  error: string[];
}

export type Methods = {
  [key: string]: [
    {
      optionsName: string;
      description: string;
      hasOptionalOptions: boolean;
      returnType: string;
      successStatus: string[];
      responseTypes: ResponseTypes;
    }
  ];
};

export type Paths = {
  [key: string]: {
    name: string;
    pathParameters: PathParameter[];
    methods: Methods;
  };
};
