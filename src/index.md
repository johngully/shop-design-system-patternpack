---
title: Ecommerce PatternPack
---

# Ecommerce PatternPack
This pattern library defines the look and feel of an online eyeware retailer.
It is used primarily to support the various example implementations.  This allows
developers to focus on the mechanics of a new technology and reduces the friction
of getting a new example up and running.  Another beneficial side effect is that
all capabilities of the application have corresponding patterns, and can support
a clear definition of the scope of work.


# Using the patterns in an example application
To consume the patterns in this pattern library add `shop-patternpack` as a dependency to your application, then link to the css file found in `node_modules`.

#### Terminal
```bash
npm install shop-patternpack
```

#### HTML
```html
<link href="node_modules/shop-patternpack/dist/pattern-library/assets/css/patterns.css" rel="stylesheet">
```
*Note: If the `node_modules` path is not available to your application you may be required to copy the css file to another location as part of your application build process.*


# Patterns
The pattern library is organized into three major categories. Each category has a specific purpose, and it is important to adhear to these principals as new pattens are added.

* **Base** - Core styles for basic items used throughout the design (spacing, text, buttons, forms, etc).
* **Components** - Specific patterns created to solve a design problem with the intention of being reused.
* **Pages** - Example compositions of components that ensure that patterns work well together and provide guidance to how that application may work.  


### Sass information
All the styles are pulled together into a single file `src/assets/patterns.scss` from which the compiler can generate the final css asset.  Any additional or custom css that needs to be introduced into the pattern library should be imported into this file.

**Variables** available to all components can be found in the `src/assets/_variables.scss` file.  Common variables should be defined here, while variables intended for use within a single component should be defined in the component's `.scss` file.



# Developing patterns
Run the following commands to get the pattern library up and running.
```bash
npm install
grunt
```
Then visit http://localhost:8888/ to view the pattern library.
