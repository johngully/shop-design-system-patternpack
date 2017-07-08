---
title: Grid System
---
<style>
  .col {
    background-color: #EEE;
  }
  
  .basic-grid .col {
    padding: 0;
  }

  .container-example .container {
    border: 1px dashed red;
  }
  .row-example .row {
    border: 1px dashed red;
  }

  .col-example .basic-grid .col {
    border: 1px dashed red;
  }

  .col-span-example .span-grid .col {
    border: 1px dashed red;
  }
</style>

## Grid System
The grid system used for the application uses a 12 column grid and is based on the [CSS grid specification.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)  

### Container
The grid container constrains the width of the content.  Grid `row` and `col` classes should be children of an element with the `container` class.

<div class="library__example container-example">
  <div class="container">
    <div class="basic-grid row">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
      <div class="col">4</div>
      <div class="col">5</div>
      <div class="col">6</div>
      <div class="col">7</div>
      <div class="col">8</div>
      <div class="col">9</div>
      <div class="col">10</div>
      <div class="col">11</div>
      <div class="col">12</div>
    </div>
    <div class="row">
      <div class="col span3">1-3</div>
      <div class="col span3">4-6</div>
      <div class="col span6">7-12</div>
    </div>
  </div>
</div>

### Row
The grid row establishes the grid itself (columns, gutters, etc).  The row should be a child of an element with the `container` class.

<div class="library__example row-example">
  <div class="container">
    <div class="basic-grid row">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
      <div class="col">4</div>
      <div class="col">5</div>
      <div class="col">6</div>
      <div class="col">7</div>
      <div class="col">8</div>
      <div class="col">9</div>
      <div class="col">10</div>
      <div class="col">11</div>
      <div class="col">12</div>
    </div>
    <div class="row">
      <div class="col span3">1-3</div>
      <div class="col span3">4-6</div>
      <div class="col span6">7-12</div>
    </div>
  </div>
</div>

### Column
The grid column defines a specific item within the grid.  The col is naturally 1 column wide and will be positioned based upon the order of the markup.

<div class="library__example col-example">
  <div class="container">
    <div class="basic-grid row">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
      <div class="col">4</div>
      <div class="col">5</div>
      <div class="col">6</div>
      <div class="col">7</div>
      <div class="col">8</div>
      <div class="col">9</div>
      <div class="col">10</div>
      <div class="col">11</div>
      <div class="col">12</div>
    </div>
    <div class="row">
      <div class="col span3">1-3</div>
      <div class="col span3">4-6</div>
      <div class="col span6">7-12</div>
    </div>
  </div>
</div>

Columns can be sized using utility classes `span1`, `span2`, `span3`, etc.

<div class="library__example col-span-example">
  <div class="container">
    <div class="basic-grid row">
      <div class="col">1</div>
      <div class="col">2</div>
      <div class="col">3</div>
      <div class="col">4</div>
      <div class="col">5</div>
      <div class="col">6</div>
      <div class="col">7</div>
      <div class="col">8</div>
      <div class="col">9</div>
      <div class="col">10</div>
      <div class="col">11</div>
      <div class="col">12</div>
    </div>
    <div class="span-grid row">
      <div class="col span3">1-3</div>
      <div class="col span3">4-6</div>
      <div class="col span6">7-12</div>
    </div>
  </div>
</div>


### Code
```html
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  <div class="row">
    <div class="col span3"></div>
    <div class="col span3"></div>
    <div class="col span6"></div>
  </div>  
</div>
```
