# Sample React App

This Repo meant for the Structuring the React App from Scratch.

### Steps:
1. Create a git repo & clone it in local machine
2. Create a React app in the cloned folder
3. Setup Environment Variables (.env) file & the reference file
4. Add & Configure Redux
   1. Add Packages: redux, react-redux
   2. Add a Middleware package: redux-thunk
   3. Setup the folder structure of store, reducers & actions
   4. Create a RootReducer file
   5. Create a ActionTypes file
   6. Configure the store & use it in index.js
5. Add & Configure React Router
   1. Add a Package: react-router-dom
   2. Create urls.js file & add all the route objects
   3. Configure AllRoutes, PublicRoutes & PrivateRoutes files
   4. And finally use it in index.js
6. Add & Configure Eslint (dev deps)
   1. Run `yarn create @eslint/config` & answer the question shown in the terminal
   2. Configure further the `.eslintrc.json` file
7. Add & Configure Husky & Lint-Staged packages (dev deps)
   1. Add a Packages: husky & lint-staged
   2. Configure the husky & lint-staged in package.json file
   3. Configure the husky pre-commit hook file (This is step only husky >= v6)
8. Add & Configure StyleLint package (dev deps)
   1. Add packages: stylelint, stylelint-order & stylelint-config-standard
   2. Add .stylelintrc file to the project folder
   3. And configure .stylelintrc file
   4. And update the lint-staged configuration in the package.json to incorporate stylelint
9. Add & Configure Source Map Explorer (dev deps)
   1. Add source-map-explorer
   2. Add a new script for source-map-explorer
10. Add & Configure StoryBook (dev deps)
