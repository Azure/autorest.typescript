
# Table of Contents

1.  [Autorest.Typescript Dev Workflow](#org9754a77)
    1.  [Repository](#org38012c9)
    2.  [Set-up](#org422658b)
    3.  [Autorest Core version](#orgfd864b4)
    4.  [Debugging (VSCode)](#orgf583807)
        1.  [Code Generation](#orgd6903ff)
        2.  [Unit Tests](#org1fee673)
        3.  [Integration Tests](#orgb632069)
    5.  [Troubleshooting](#orgbd557ae)
        1.  [Before investing more time investigating](#org70e1598)
        2.  [I've made changes to Autorest.Typescript, however when re-generating the library my changes doesn't seem to have been picked up](#orge680821)


<a id="org9754a77"></a>

# Autorest.Typescript Dev Workflow


<a id="org38012c9"></a>

## Repository

-   Autorest.Typescript is being developed in the Azure/Autorest.Typescript repository
-   The version under development is known as v6 and the working branch is "v6", master contains the olver v5 version.
-   In the new version the package name has changed to @autorest/typescript


<a id="org422658b"></a>

## Set-up

-   Clone the repository[ Azure/Autorest.Typescript](https://github.com/Azure/autorest.typescript.git)
-   Switch to branch v6
    
        git fetch upstream v6
        git checkout v6

-   Install Autorest Core
    
        npm install -g @autorest/autorest

-   Install dependencies
    
        npm install

-   Run All Tests:
    This will run both Unit and Integration Tests
    
        npm run test

-   Run Unit Tests only
    Unit Test mostly tests units in the Transforms layer

    npm run unit-test

-   Run Integration Tests
    Integration tests run against the Test Server, running this command will do the following things:
      1 Start TestServer
      2 Build Autorest.Typescript
      3 Generate all scenarios in parallel (i.e. BodyString, BodyComplex, Url, CustomUrl, Header, XmlService
      4 Run all the tests under test/integration
      5 Stop TestServer


<a id="orgfd864b4"></a>

## Autorest Core version

-   The Autorest core versions this plugin consumes are specified in the [README](https://github.com/Azure/autorest.typescript/blob/v6/README.md) file as follows 
    -   **version:** Specifies the Autorest core version, released versions can be found [here](https://github.com/Azure/autorest/releases)
    -   **"@autorest/modelerfour":** Specifies the version consumed of ModelerFour, released versions can be found [here](https://github.com/Azure/autorest.modelerfour/releases)
-   **\*IMPORTANT: \*** When you update any of these versions, make sure to reset Autorest to guarantee a clean state, otherwise you may face random errors. To reset run the following command:

    autorest-beta --reset


<a id="orgf583807"></a>

## Debugging (VSCode)


<a id="orgd6903ff"></a>

### Code Generation

To debug code generation the flag &#x2013;typescript.debugger can be used

1.  Start Debugging Code Generation of test scenarios

    -   You can debug the generation of a test scenario by appending the flag to the generation command for example:
        
            npm run generate-bodycomplex -- --typescript.debugger
    
    -   ****Note**** that the "&#x2013;" before the flag must be used so that the flag is passed to the npm script
    -   Code generation execution will pause waiting for the debugger to be attached.

2.  Start Debugging Code Generation outside of test scenarios

    -   When debugging code generation outside of Autorest.Typescript, you need to append "&#x2013;typescript.debugger" flag to your autorest command, and specify the location of the local autorest.typescript repository. For Example:
        
            autorest-beta --typescript --use=<PATH_TO_AUTOREST.TYPESCRIPT_PROJECT> --typescript.debugger

3.  Attach the debugger

    -   Once Autorest is waiting for the debugger to be attached in VSCode:
        1 Go to the debugger tab
        2 Select the "Attach" profile from the drop down
        3 Click the "play" button
    
    -   Autorest will hit a starting break point and your breakpoints will be resolved and hit


<a id="org1fee673"></a>

### Unit Tests

-   We have created a Debugging profile for UnitTests to start debugging:
    1 Go to the debugger tab
    2 Select the "Unit Test" Profile
    3 Click the "Play" button
-   Your breakpoints will start hitting, you can set breakpoints in either Test or Generator code


<a id="orgb632069"></a>

### Integration Tests

-   In order to debug integration tests you need to start the test server, by running:
    
        npm run start-test-server:v1
-   Once the Test Server is running
    1 In VSCode go to the debugger tab
    2 Select the "IntegrationTests" profile from the drop down
    3 Click the "Play" button

-   ******IMPORTANT******: Running Integration Tests for debugging, does not re-generate the test clients so make sure that after each change you do:
    -   Re-build Autorest.Typescript
        
            npm run build
    -   Re-generate the test scenarios
        
            npm run generate-and-test


<a id="orgbd557ae"></a>

## Troubleshooting


<a id="org70e1598"></a>

### Before investing more time investigating

-   Make sure to reset autorest, this will ensure that the versions used by Auotrest Core are the correct ones. This will solve many problems
    
        autorest-beta --reset


<a id="orge680821"></a>

### I've made changes to Autorest.Typescript, however when re-generating the library my changes doesn't seem to have been picked up

-   Make sure to re-build autorest.typescript after any changes you want to test
    
        npm run build

