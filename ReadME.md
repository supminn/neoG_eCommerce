[![wakatime](https://wakatime.com/badge/github/supminn/neoG_eCommerce.svg)](https://wakatime.com/badge/github/supminn/neoG_eCommerce)
# SupMart
SupMart is an e-commerce application that consists of products and accessories related to jump rope. 

## Techonology Stack
- React - Reducer + Context
- Styling using personal CSS component library [StyleSUP](https://stylesup.netlify.app/)
- React Router v6 (beta) for routes
- Express & Node for API [Repo Link](https://github.com/supminn/neoG_Backend/)
- MongoDB using mongoose for data storage
## Functionalities 
1. Products listing and detail
    * List of products - fetched via ExpressAPI
    * Product detail page
    * Search for products
    * Wishlist button
    * Add to cart button
    * Increment/decrement quantity for products added to cart. (Go to cart)
    * Sort by Price 
    * Filters as follows:
        * Exclude "out of stock" products (Greyed out | Cannot be added to cart)
        * Show fast delivery products
        * Price range of products
        * Category & Brands 

2. Cart 
    * Cart item list
    * Remove item from cart
    * Increment/decrement item quantity on cart
    * Move from cart to wishlist
    * Total items present in the cart with the overall cost
    * Checkout to address data management (upcoming)

3. Wishlist 
    * Wishlist item list
    * Remove from wishlist
    * Move from wishlist to cart

4. Authentication using JWT
    * Login form - existing users
    * Private route - wishlist and checkout
    * Sign up - new users
    * Persist login state
    * Data stored on MongoDB
### Future Enchancements
* Add query params for filters.
* Password validation (conditions and strength).
* Delete individual product from cart.

## Live link and demo

[Deployed link](https://supmart.netlify.app/)

-- video

## Test user credentials
**Username:** Tester
**Password:** Testing1


# Instructions on using SupMart locally.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This starter kit could be installed in 2 ways.

1. Clone this repository and start working on the development.
2. Using [degit](https://github.com/Rich-Harris/degit).

### Instructions while using degit

degit installation:

```bash
npm install -g degit
```

Follow the below instructions to use this starter kit:

```
degit supminn/neoG_eCommerce my-app-name
cd my-app-name

npm install
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
