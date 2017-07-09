---
title: Checkout Page
---
## Checkout Page
The checkout page allows the user to review the items they have selected for
purchase.  From here they can remove selected items or initiate the purchase
process.

### Checkout Page Example
<div class="library__example">
<!-- Header -->

<!-- Checkout Summary -->
<section class="content-block-full-bleed">
  <div class="content-block__content-centered">
    <h1>You have 2 items in your cart</h1>
    <button class="button-lg button__primary" type="submit">Checkout</button>
    <p><small>Free standard shipping and free returns on all orders</small></p>
  </div>
</section>

<!-- Cart Product List -->
<section class="cart-list">
  <div class="cart-product">
    <div class="cart-product__image">
      <img src="https://i.warbycdn.com/s/c/3012d8b05e35b5f026027a611101c2a47209d8e2?quality=60&width=780" />
    </div>
    <div class="cart-product__description">
      <h3>Percy</h3>
      <p class="small">
        Medium<br />
        48-20-140
      </p>
    </div>
    <div class="cart-product__remove">
      <button type="button" class="button__icon">
        <img src="../assets/images/icon-remove.svg" />Remove
      </button>
    </div>
    <div class="cart-item__price">$95</div>
  </div>
  <div class="cart-product">
    <div class="cart-product__image">
      <img src="https://i.warbycdn.com/s/l/e837e1348920a66bc9b1a18bf9bb53d7f529e96b?quality=60&width=780" />
    </div>
    <div class="cart-product__description">
      <h3>Everson</h3>
      <p class="small">
        Wide<br />
        54-15-140
      </p>
    </div>
    <div class="cart-product__remove">
      <button type="button" class="button__icon">
        <img src="../assets/images/icon-remove.svg" />Remove
      </button>
    </div>
    <div class="cart-item__price">$95</div>
  </div>
  <div class="cart-total">
    Subtotal: $190
  </div>
</section>

<!-- Continue shopping -->
<section class="content-block transparent">
  <div class="content-block__content-centered">
    <p class="small">Still want to continue shopping?</p>
    <a href="" class="button button-md button__secondary">Shop frames</a>
  </div>
</section>

<!-- Footer -->
</div>

### Checkout Page Code
```html
<!-- Header -->
<!-- Checkout Summary -->
<section class="content-block-full-bleed checkout-summary">
  <div class="content-block__content-centered">
    <h1>You have  items in your cart</h1>
    <button class="button-lg button__primary" type="submit">Checkout</button>
    <p><small>Free standard shipping and free returns on all orders</small></p>
  </div>
</section>
<!-- Cart Product List -->
<section class="cart-list">
  <!-- Repeat for each product in the cart -->
  <div class="cart-product">
    <div class="cart-product__image">
      <img src="" />
    </div>
    <div class="cart-product__description">
      <h3></h3>
      <p class="small">
        <br />
        </p>
    </div>
    <div class="cart-product__remove">
      <button type="button" class="button__icon">
        <img src="../assets/images/icon-remove.svg" />Remove
      </button>
    </div>
    <div class="cart-item__price">$</div>
  </div>
  <!-- Cart total -->
  <div class="cart-total">
    Subtotal: $
  </div>
</section>
<!-- Continue shopping -->
<section class="content-block transparent">
  <div class="content-block__content-centered">
    <p class="small">Still want to continue shopping?</p>
    <a href="" class="button-md button__secondary">Shop frames</a>
  </div>
</section>
<!-- Footer -->
```
