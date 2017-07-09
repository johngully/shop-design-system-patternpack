---
title: Filters
---
## Filters
The pattern for filters includes a filter menu.  The menu organizes the filters into
related sets reducing the number choices presented to the user at any given time.
In the example below selecting a menu item should change the options below.

### Filter menu
<div class="library__example">
  <div class="filters">
    <ul class="filters__menu">
      <li class="filters__menu-item"><button class="link" type="button">Menu 1</button></li>
      <li class="filters__menu-item"><button class="link" type="button">Menu 2</button></li>
      <li class="filters__menu-item"><button class="link" type="button">Menu 3</button></li>
      <li class="filters__menu-item"><button class="link" type="button">Menu 4</button></li>
    </ul>
  </div>
  <div class="filters">
    <div class="filters__options">
      <div class="filters__option"><label><input type="checkbox" name="" id=""> Option 1</label></div>
      <div class="filters__option"><label><input type="checkbox" name="" id=""> Option 2</label></div>
      <div class="filters__option"><label><input type="checkbox" name="" id=""> Option 3</label></div>
      <div class="filters__option"><label><input type="checkbox" name="" id=""> Option 4</label></div>
    </div>
  </div>
</div>

### Filter menu
```html
<div class="filters">
  <ul class="filters__menu">
    <li class="filters__menu-item">
      <button class="link" type="button"></button>
    </li>
    <li class="filters__menu-item">
      <button class="link" type="button"></button>
    </li>
    <li class="filters__menu-item">
      <button class="link" type="button"></button>
    </li>
    <li class="filters__menu-item">
      <button class="link" type="button"></button>
    </li>
  </ul>
</div>
```

### Filter options
```html
<div class="filters">
  <div class="filters__options">
    <div class="filters__option">
      <label><input type="checkbox" name="" id=""></label>
      <label><input type="checkbox" name="" id=""></label>
      <label><input type="checkbox" name="" id=""></label>
      <label><input type="checkbox" name="" id=""></label>
    </div>
  </div>
</div>
```
