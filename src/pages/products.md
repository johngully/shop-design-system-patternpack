---
title: Products Page
---
## Products Page
The products page is the initial starting point for users.  From this page they
will be able to browse, filter and search for products.

### Products Page Example
<div class="library__example">
  <!-- Header -->

  <!-- Marketing block -->
  <section class="content-block-full-bleed products-marketing">
    <div class="products-marketing__content">
      <h3 class="glasses__title">Eyeglasses</h3>
      <p>Designed in-house and crafted from the best materials</p>
    </div>
  </section>
  <!-- Product filters -->
  <section class="filters">
    <ul class="filters__menu">
      <li class="filters__menu-item">
        <button class="link" type="button">Color</button>
      </li>
      <li class="filters__menu-item">
        <button class="link" type="button">Shape</button>
      </li>
      <li class="filters__menu-item">
        <button class="link" type="button">Fit</button>
      </li>
      <li class="filters__menu-item">
        <button class="link" type="button">Material</button>
      </li>
    </ul>
    <div class="filters__options">
      <div class="filters__option">
        <label><input type="checkbox" name="" id="">Narrow</label>
      </div>
      <div class="filters__option">
        <label><input type="checkbox" name="" id="">Medium</label>
      </div>
      <div class="filters__option">
        <label><input type="checkbox" name="" id="">Wide</label>
      </div>
    </div>
  </section>
  <!-- Products list -->
  <section class="product-list">
    <a class="product">
      <img class="product__image" src="https://i.warbycdn.com/s/c/3012d8b05e35b5f026027a611101c2a47209d8e2?quality=60&width=780" />
      <h3>Percy</h3>
    </a>
    <a class="product">
      <img class="product__pick" src="../assets/images/staff-pick.svg" />
      <img class="product__image" src="https://i.warbycdn.com/s/l/2cf79264ebbf7c7b750600d64bc123484280fc68?quality=60&width=780" />
      <h3>Anders</h3>
    </a>
    <a class="product">
      <img class="product__image" src="https://i.warbycdn.com/s/l/f77af776ca4518f817548e6512e0a1c4164b72fe?quality=60&width=780" />
      <h3>Watts</h3>
    </a>
    <a class="product">
      <img class="product__pick" src="../assets/images/staff-pick.svg" />
      <img class="product__image" src="https://i.warbycdn.com/s/l/e837e1348920a66bc9b1a18bf9bb53d7f529e96b?quality=60&width=780" />
      <h3>Everson</h3>
    </a>
    <a class="product">
      <img class="product__image" src="https://i.warbycdn.com/s/l/14711a4bd0835614dbdd6fe29efd3f5b0835340e?quality=60&width=780" />
      <h3>Moriarty</h3>
    </a>
    <a class="product">
      <img class="product__image" src="https://i.warbycdn.com/s/l/1c7e9460acb9ada1d57961cbbe161547b2a8d05e?quality=60&width=780" />
      <h3>Carver</h3>
    </a>
  </section>

  <!-- Footer -->
</div>

### Products Page Code
```html
<!-- Header -->
<!-- Marketing block -->
<section class="content-block-full-bleed products-marketing">
  <div class="products-marketing__content">
    <h3 class="glasses__title">Eyeglasses</h3>
    <p>Designed in-house and crafted from the best materials</p>
  </div>
</section>
<!-- Product filters -->
<section class="filters">
  <ul class="filters__menu">
    <!-- Repeat for each menu item -->
    <li class="filters__menu-item">
      <button class="link" type="button"></button>
    </li>
  </ul>
  <!-- Create a set of options related to each menu item above -->
  <!-- Filter options should be hidden initially -->
  <!-- The related filter options should be displayed when a menu item is selected -->
  <div class="filters__options">
    <!-- Repeat for each filter option -->
    <div class="filters__option">
      <label><input type="checkbox" name="" id=""></label>
    </div>
  </div>
</section>
<!-- Products list -->
<section class="product-list">
  <!-- Repeat for each product -->
  <a class="product">
    <img class="product__image" src="" />
    <h3></h3>
  </a>
</section>
<!-- Footer -->
```
