---
title: Header
---
## Header
The header component provides overall consistency and navigation to the application.
This component is designed to be placed at the top of all pages.

### Examples
<div class="library__example">
  <header class="header">
    <div class="header__logo"><a href="/">Warby Parker</a></div>
    <div class="header__category"><a href="/products/eyeglasses">Eyeglasses</a></div>
    <div class="header__search">
      <input type="search" class="header__search-criteria" placeholder="Search"></input>
      <button class="link" type="button">
        <img src="../assets/images/icon-search.svg" /> Search
      </button>
      </div>
    <div class="header__cart">
      <button class="link" type="button">
        <img src="../assets/images/icon-cart.svg" /> ( 2 )
      </button>
    </div>
  </header>
</div>

### Code
```html
<header class="header">
  <div class="header__logo"><a href="/">Warby Parker</a></div>
  <div class="header__category"><a href="/products/eyeglasses">Eyeglasses</a></div>
  <div class="header__search">
    <button class="link" type="button">
      <img src="../assets/images/icon-search.svg" /> Search
    </button>
    </div>
  <div class="header__cart">
    <button class="link" type="button">
      <img src="../assets/images/icon-cart.svg" /> ( X )
    </button>
  </div>
</header>
```
