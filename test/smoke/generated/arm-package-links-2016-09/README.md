# ManagementLink client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for ManagementLink client.

Azure resources can be linked together to form logical relationships. You can establish links between resources belonging to different resource groups. However, all the linked resources must belong to the same subscription. Each resource can be linked to 50 other resources. If any of the linked resources are deleted or moved, the link owner must clean up the remaining link.

[Package (NPM)](https://www.npmjs.com/package/arm-package-links-2016-09) |
[Samples](https://github.com/Azure-Samples/azure-samples-js-management)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge and Firefox.




## Key concepts

### ManagementLinkClient

`ManagementLinkClient` is the primary interface for developers using the ManagementLink client library. Explore the methods on this client object to understand the different features of the ManagementLink service that you can access.

