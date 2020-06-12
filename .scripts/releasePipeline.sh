#!/bin/bash

# This script publishes to npm and have 2 assumptions
# 1) A pipeline has uploaded the package resulting from npm pack (.tgz) and package.json to the artifacts.
# 2) The release pipeline has an environment variable ARTIFACT_FOLDER defined, whcih is the location of
#    the artifacts from a specific build. This is configured in the Release Pipeline UI
#
# This Script should be included manually in the Release Pipeline definition as a "Command Line" task of a "Stage"
# for example: https://dev.azure.com/azure-sdk/internal/_release?definitionId=89

DROP_FOLDER=$ARTIFACT_FOLDER/drop
ls $ARTIFACT_FOLDER
ls $DROP_FOLDER
# Extract package details from package.json
PACKAGE_VERSION=$(node -p -e "require('./$DROP_FOLDER/package.json').version")
PACKAGE_NAME=$(node -p -e "require('./$DROP_FOLDER/package.json').name")
# Use env variable for release tag if it is defined, otherwise try to get it from package.json
PACKAGE_RELEASE_TAG=$([ ! -z "$PACKAGE_RELEASE_TAG" ] && echo $PACKAGE_RELEASE_TAG || node -p -e "require('./$DROP_FOLDER/package.json').releaseTag || ''")

# Check in NPM if a package with this version has been published before
PACKAGE_ID=$PACKAGE_NAME"@"$PACKAGE_VERSION
IS_DUPLICATE=$(npm view $PACKAGE_ID name)
[ ! -z "$IS_DUPLICATE"] && echo "$PACKAGE_VERSION already exists in NPM" && exit 1

# Builds the --tag parameter for npm publish it will be empty if neither env variable 
# nor package json releaseTag were set
# NPM defaults to 'latest'
RELEASE_TAG=$([ ! -z "${PACKAGE_RELEASE_TAG}" ] && echo "--tag $PACKAGE_RELEASE_TAG"  || echo "")

# Build the name of the tar packaage. First replacing '/' with '-'
TAR_NAME=${PACKAGE_NAME////'-'}
# Replace '@' with '' and append package version
TAR_NAME=${TAR_NAME//@/''}-${PACKAGE_VERSION}.tgz


TAR_PATH=$DROP_FOLDER/$TAR_NAME 

# Publish to NPM
npm publish "$TAR_PATH" --access=public $RELEASE_TAG

