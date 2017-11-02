## Code Resource

This custom resource type allows you to write code that can be `require`d by other resources.

### Installation

In your app's root directory, type `npm install dpd-code --save` into the command line or [download the source](https://github.com/deployd/dpd-code). This should create a `dpd-code` directory in your app's `node_modules` directory.

See [Installing Modules](http://docs.deployd.com/docs/using-modules/installing-modules.md) for details.

### Usage

You can write your reusable code inside the `Index` event. Follow `nodejs` module conventions by using `exports.somename = ...;`. See nodejs [modules](https://nodejs.org/api/modules.html) documentation for more details.

Later on in your event code, you can use:

`var myCodeModule = requireModule('coderesourcename');` and you will have access to the code shared by the module.

This resource explicitly adds the `requireModule(name)` global function which acts as a helper function for finding the proper path of the module. 

Alternatively, you can do something like `require('../../resources/coderesourcename')`.