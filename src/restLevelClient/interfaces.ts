import { Schema } from "@autorest/codemodel";

export type PathParameter = {
  name: string;
  schema: Schema;
  description?: string;
};

export type Methods = {
  [key: string]: [
    {
      optionsName: string;
      description: string;
      hasOptionalOptions: boolean;
      returnType: string;
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
