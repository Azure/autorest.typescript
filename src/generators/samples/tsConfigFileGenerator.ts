import { Project } from 'ts-morph'
import { getAutorestOptions } from '../../autorestSession';

export function generateSampleTsConfig(project: Project) {
    const { generateMetadata, generateTest } = getAutorestOptions();
  
    if (!generateMetadata) {
      return;
    }
  
    if (generateTest) {
        const tsConfig = {
            "compilerOptions": {
              "target": "ES2018",
              "module": "commonjs",
              "moduleResolution": "node",
              "resolveJsonModule": true,
              "esModuleInterop": true,
              "allowSyntheticDefaultImports": true,
              "strict": true,
              "alwaysStrict": true,
              "outDir": "dist",
              "rootDir": "src"
            },
            "include": [
              "src/**.ts"
            ]
        }
        project.createSourceFile("samples/v1/typescript/tsconfig.json", JSON.stringify(tsConfig), {
            overwrite: true
        });
    }
  }