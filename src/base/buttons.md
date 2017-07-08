---
title: Buttons
---
## Buttons variations
Buttons have three variations in color for different purposes.

**Primary** - Used for the primary use action<br />
**Secondary** - Used for an alternate or less important user action<br />
**Icon** - Used to provide more visual context to a user action

### Examples
<div class="library__example">
  <button type="button" class="button-md">Default</button>
  <button type="button" class="button-md button__primary">Primary</button>
  <button type="button" class="button-md button__secondary">Secondary</button>
  <button type="button" class="button__icon" >
    <img src="../assets/images/icon-remove.svg" />Icon
  </button>
</div>

### Code
```html
<button type="button"></button>
<button type="button" class="button__primary"></button>
<button type="button" class="button__secondary"></button>
<button type="button" class="button__icon">
  <img src="./icon-remove.svg" />Icon
</button>
```


## Buttons sizes
Buttons have three variations in size for emphasis.  Size and color variations can be combined to signify the appropriate level of importance to a given user action.

### Examples
<div class="library__example">
  <button type="button" class="button-lg">Large</button>
  <button type="button" class="button-md">Medium</button>
  <button type="button" class="">Default</button>
</div>

### Code
```html
<button type="button" class="button-lg"></button>
<button type="button" class="button-md"></button>
<button type="button"></button>
```


## Anchors & Link buttons
Links should have a consistent look and feel not matter how they are technically implmented.  The `link` class has been created to suppor the use of `<button>` tag implementation (anchors are styled implicitly).

### Examples
<div class="library__example">
  <a>Anchor based link</a><br />
  <button type="button" class="link">Button based link</button>
</div>

### Code
```html
<a>Anchor based link</a>
<button type="button" class="link">Button based link</button>
```
