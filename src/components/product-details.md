---
title: Product Details
---
## Product Details
The product details pattern defines how product information will be displayed to
the user.  It also includes the "Add to cart" call to action.  

The `Image`, `Product Title`, `Product Description`, `Frame fit`, `Measurements`,
and `Price` values should all be replace with the actual product information for
each instance of this pattern.

### Product Details Example
<div class="library__example">
  <div class="product-details">
    <div class="product-details__content">
      <img class="product-details__image" src="https://placehold.it/2000x1000" />
      <h1>Product title</h1>
      <p>Product description</p>
      <div class="product-details__facts">
        <div class="product-details__fact">
          <h4>Frame Fit</h4>
          <p>Medium</p>
        </div>
        <div class="product-details__fact">
          <h4>Measurements</h4>
          <p>##-##-###</p>
        </div>
      </div>
      <button class="button-lg button__primary" type="button">Add to cart</button>
      <p>$## including prescription lenses</p>
    </div>
  </div>
</div>

### Product Details Code
```html
<div class="product-details">
  <div class="product-details__content">
    <img class="product-details__image" src="" />
    <h1></h1>
    <p></p>
    <div class="product-details__facts">
      <div class="product-details__fact">
        <h4>Frame Fit</h4>
        <p></p>
      </div>
      <div class="product-details__fact">
        <h4>Measurements</h4>
        <p></p>
      </div>
    </div>
    <button class="button-lg button__primary" type="button">Add to cart</button>
    <p>$ including prescription lenses</p>
  </div>
</div>
```
