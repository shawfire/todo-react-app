
<details><summary>Create a react app with typescript support</summary>

  - [create-react-app with typescript](https://facebook.github.io/create-react-app/docs/adding-typescript)

  ```bash
  $npx create-react-app react-ts-mobx --typescript
  ```

</details>

<details><summary>Add mobx support</summary>

- [mobx](https://github.com/mobxjs/mobx)

```
npm install --save mobx mobx-react
```

</details>

<details><summary>Add decorator support for typescript</summary>

[How to remove experimentalDecorators warning in VSCode](https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/)

```
$ yarn start
It looks like you're trying to use TypeScript but do not have typescript installed.
Please install typescript by running yarn add typescript.
If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files).

$ yarn add typescript

$ yarn start
Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.  TS1219

```

- Create tsconfig.json file in the root directory of your project and include the following options.

```json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
```

</details>

<details><summary>Using eslint</summary>
</details>

<details><summary>Accessing pokeaoi.api</summary>

- [pokeapi.co: Pokemon Restful api](http://pokeapi.co)

- Error: Object is possibly 'null'.ts(2531)

- Fix: change tsconfig.json as follows:

```
{
  "compilerOptions": {
    ...
    "strictNullChecks": false
    ... 
```

- [http-status-codes with types](https://www.npmjs.com/package/http-status-codes)
- [types for http-status-codes included in module](https://www.npmjs.com/package/@types/http-status-codes)

```
npm install http-status-codes --save
```

- [Using fetch, error handling](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [TypeScript definitions for pokedex-promise-v2 and PokeAPI endpoints.](https://github.com/mudkipme/pokeapi-v2-typescript)

- [pokeapi-type-generator](https://github.com/ccabrales/pokeapi-type-generator)

- [End-to-end typing for REST APIs with TypeScript](https://github.com/rawrmaan/restyped)

- [Production ready Node.js REST API Setup using TypeScript, PostgreSQL and Redis.](https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407)

</details>


- [Shorthand Css margin properties TRBL - TRouBLe Top Right Bottom Left](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)


- [react-transition-group: An easy way to perform animations when a React component enters or leaves the DOM](https://github.com/reactjs/react-transition-group)

<details><summary>create-react-app generated README.md</summary>

- [react](https://reactjs.org/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

</details>
