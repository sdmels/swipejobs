# Swipejobs

This is sample POC project that has been build to demonstate the ability of my tecinical skill set in React eco systm. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Library used

### IDE setup

[VS Code](https://code.visualstudio.com/) is used to develop this project

#### Plugins used

- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - It is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. Prettier does exdents the `eslint-config-prettier` and `eslint-plugin-prettier`
- [pretty-quick](https://github.com/azz/pretty-quick) - Runs code formatting on files changes.
- [husky](https://github.com/typicode/husky) - Pre commit Hook - Husky can prevent bad `git commit` and `git push`

#### 3rd Party packages

- [Bootstrap]() - Just for the styles.
- [numeral](http://numeraljs.com/) - A javascript library for formatting and manipulating numbers.
- [date-fns](https://date-fns.org/) - it provides the most comprehensive yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - DOM bindings for React Router.
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [scss](https://sass-lang.com/) - CSS preprocessor. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

### Archtecture

This project is build using `redux` and the binding library `react-redux` to manage the state of the application.Even though the state for this application does needs to be managed globally. A middleware of `redux-thunk` is used to perform side effets. The hooks like `useSelector`, `useDispatch`, `useHistory` & `useParams` are also used to manage connect the state and to handle the router.

### Folder Structure

Kept the files just 2 level depth from the project `src` folder. Enabled absolute import for more code readability.

## Improvements

    1. Code spliting - Better way to handle styles
    2. Better management of the errors when I able to interact with the endpoints
    3. add unit test cases

## Install

    $ git clone https://github.com/sdmels/swipejobs.git
    $ cd swipejobs
    $ npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
