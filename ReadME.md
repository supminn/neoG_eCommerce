# eCommerce Application 

## Functionalities to be implemented:

1. Product Listing Page
    * List of products
    * Search for products
    * Wishlist button
    * Add to cart button
    * Increment/decrement quanity for products added to cart. (Go to cart)
    * Sort by Price functionality
    * Filters as follows
        * Exclude "out of stock" products (Greyed out | Cannot be added to cart)
        * Show fast delivery products
        * Price range of products

2. Cart functionality
    * Cart item list
    * Remove item from cart
    * Increment/decrement item quanity on cart
    * Move from cart to wishlist
    * Total items present in the cart with overall cost
    * Checkout to add address data management

3. Wishlist functionality
    * Wishlist item list
    * Remove from wishlist
    * Move from wishlist to cart

4. Beautifying with styleSUP
    * Import the css library on .css file
    * Add respective classes
    * Change theme using ThemeProvider

## Practices
* Mirage for backend. setup database, products and address management | faker data - seeded to mirage
* Custom hook for axios calls
* useContext for product, cart and wishlist
* useReducer to main the cart, product and wishlist state; address state.
* Sort into respective folders

### Additional Libraries
1. Miragejs
2. Faker
3. Axios