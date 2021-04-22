# eCommerce Application 

This e-commerce application would have the following features. It is being built on ReactJS. The main hooks being used here are useContext and useReducer.

## Functionalities to be implemented

1. Product Listing Page
    * List of products - fetched via api
    * Search for products
    * Wishlist button
    * Add to cart button
    * Increment/decrement quanity for products added to cart. (Go to cart)
    * Sort by Price functionality
    * Filters as follows
        * Exclude "out of stock" products (Greyed out | Cannot be added to cart)
        * Show fast delivery products
        * Price range of products
        * Category/brand checkbox (upcoming)

2. Cart functionality
    * Cart item list
    * Remove item from cart
    * Increment/decrement item quanity on cart
    * Move from cart to wishlist
    * Total items present in the cart with overall cost
    * Checkout to address data management (upcoming)

3. Wishlist functionality
    * Wishlist item list
    * Remove from wishlist
    * Move from wishlist to cart

4. Beautifying with styleSUP
    * Import the css library on .css file
    * Add respective classes
    * Change theme using ThemeProvider (upcoming)

5. Authentication
    * Login form - exsisting users
    * Private route - wishlist and checkout
    * Sign up - new users
    * Persist login state

## Practices
* Mirage for backend. Setup database, products and address management | faker data - seeded to mirage
* Custom hook for axios calls
* useContext for product, cart and wishlist
* useReducer to main the cart, product and wishlist state; address state.
* Segregate into respective folders
* ExpressJS api calls for backend. Data added on mongoDB using mongoose.

### Additional Libraries
1. Miragejs
2. Faker
3. Axios

### Future Enchancements
* Use POST and PUT on cart and wishlist - inlcude in server - new API url (add models)
* Filter on category/brand
* Creating individual product page - /products/:productId
* Re-structure database - user data.
* Persist cart and wishlist data for user.
* Password conditions and strength.
* Loader, serverCalls, disablled button - refactor