
# Create React-ApolloGraphQL app

Run the project:
```sh
cd my-app/
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

Create React Kotlin App will configure Kotlin, webpack, and IntelliJ IDEA so that you can focus on the code instead.

Just create a project, and you’re good to go.

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g create-react-kotlin-app
```

You can skip this step if you have `create-react-app` already installed or you're using `npx`.

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#usage) to easily switch between Node versions for different projects.

**This tool doesn’t assume a Node backend**. The Node installation is only required for Create React Kotlin App itself.

### Using React with Kotlin

To develop applications in Kotlin that use React you need to use a [Kotlin wrapper for React](https://www.npmjs.com/package/@jetbrains/kotlin-react).
You can find a documentation for it and examples in the [module's repository](https://github.com/JetBrains/kotlin-wrappers/tree/master/kotlin-react).

### Adding Kotlin/JS packages

**No configuration is required** to add packages written in Kotlin to a project based on Create React Kotlin App, we take care of it for you. 
For example, you can simply run `npm install @jetbrains/kotlin-react-router-dom` to install the [wrapper for React Router DOM](https://www.npmjs.com/package/@jetbrains/kotlin-react-router-dom).

### Creating an App

To create a new app, run:

```sh
create-react-kotlin-app my-app
cd my-app
```

Or if you have `create-react-app` installed, you can run:

```sh
create-react-app my-app --scripts-version react-scripts-kotlin
cd my-app
```

It will create a folder called `my-app` inside the current folder.<br>
The project will be preconfigured for working with it in [IntelliJ IDEA](https://www.jetbrains.com/idea/). If you don't want to create the `.idea` folder that is required for IntelliJ IDEA, add `--no-idea` option.<br>
The initial project structure will be created and dependencies will be installed:

```
my-app/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    favicon.ico
    index.html
    manifest.json
  src/
    app/
      App.css
      App.kt
    index/
      index.css
      index.kt
    logo/
      kotlin.svg
      Logo.css
      Logo.kt
      react.svg
    ticker/
      Ticker.kt
```

It's a simple app that shows the time that passed since the app was opened.<br>
Once the installation is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload automatically when you make edits.<br>
You will see build errors and lint warnings in the console.

If you are getting a `Kotlin.defineModule is not a function` error, try deleting the npm cache:

	rm -rf node_modules/.cache

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It ensures that React is bundled in production mode and the build is optimized for best performance.

The build is minified and the filenames include hashes for cache management. Your app is ready to be deployed.

### Debugging the App

You can debug the running app right in IntelliJ IDEA Ultimate using its built-in JavaScript debugger. The IDE will run a new instance of Chrome and attach a debugger to it.

Start your app by running `npm start`. Put the breakpoints in your Kotlin code.
Then select `Debug in Chrome` from the list of run/debug configurations on the top-right and click the green debug icon or press `^D` on macOS or `F9` on Windows and Linux to start debugging.

Currently, debugging is supported only in IntelliJ IDEA Ultimate 2017.3.
