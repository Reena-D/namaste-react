# namaste react


# Parcel
- Dev Build
- Gives you local server
- Does instant refreshing with HMR(Hot Module Replacement)
- File watching algorithm - written in C++
- Build time reduces constantly bcoz of caching(.parcel-cache file)
- Image optimization
- Minification- when u make the production build, it will minify ur files
- Bundling
- Compress
- Consistent Hashing
- Code splitting-it will split ur files
- Differential Bundling - when hosted, app should work on various browsers with various versions - it helps there, support older browsers, diff bundles for diff browsers, [browserlist](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)
-  Diagnostic
- Error Handling
- HTTPs
- Tree Shaking, remove unused code
- Different dev and prod bundles



# Planning

//React.createElement => Object =>it becomes HTML element after rendering on to DOM
/*Header
- Logo
- Nav items
* Body
 - search
 - RestaurantContainer
   - RestaurantCard
     -img
     -name of res,star rating,cuisine,deliveru time
* Footer
-copyright,adrees,links,contact
*/

# Named export and import
 - export const Component =
 - import {Component} from "path";

# Default export and import
- export default Component;
- import Component from "path";

# 2 types Routing
- client side routing
- server side routing



# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our own  redux store
- Connect store to app
- Create cart slice
- Dispatch an action
- Selector (to read data)

# Types of testing 
- Unit Testing
- Integration Testing
- End to end testing - e2e testing (Cypress, Selenium, Puppeteer)

# Setting up Testing in our app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel (babel.config.js file)
- Configure Parcel config file to disable default babel transpilation (.parellrc file)

  -- to write test cases
- Jest Configuration  (npx jest --init)
- Install jsdom library (for jest 28 or more)
- Install @babel/preset-react , to make JSX work in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom