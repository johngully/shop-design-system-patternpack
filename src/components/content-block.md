---
title: Content Block
---
## Content block
Content blocks are designed to visually separate a section of content with color and space.  Content blocks can be aligned to the standard grid or can bleed to the edge of the screen.

Content blocks are grid containers and children must be aligned to the grid.  Helper classes have been added to provide common layout options for the content.


### Mixins
The content block styles can be applied to custom styles by using the `@mixin` capability of Sass.  Using these mixins is a good way to create custom content block layouts.

### Mixin Code
```css
@include content-block();
@include content-block-full-bleed();
@include content-block__content-centered($number-of-columns-to-span);
```


### Content block
<div class="library__example">
  <section class="content-block">
    <div class="content-block__content-centered">
      <h1>Content block title</h1>
      <p>Content for the block goes here ...</p>
    </div>
  </section>
</div>


### Content block full bleed
<div class="library__example">
  <section class="content-block-full-bleed">
    <div class="content-block__content-centered">
      <h1>Content block title</h1>
      <p>Content for the block goes here ...</p>
    </div>
  </section>
</div>

### Code
```html
<section class="content-block">
  <div class="content-block__content-centered">
  </div>
</section>

<section class="content-block-full-bleed">
  <div class="content-block__content-centered">
  </div>
</section>
```
