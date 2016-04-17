# A React, React-Redux, React-Router, and Webpack (SASS and React hot reloading)
A starter kit for creating React projects that need React-Redux to handle application starter
and React-Router to handle your URL routing needs.

## Install

Clone repository and run:

`npm install`


## Requirements
`Node 5+` Because using some es6 syntax [(es6 compatibility table for Node 5)](http://kangax.github.io/compat-table/es6/#node5)

## Development
run:
```sh
$ npm start
```
or
```sh
$ npm serve
```
your choice and the browser should open to [http://localhost:8000/webpack-dev-server/](http://localhost:8000/webpack-dev-server/)

## Production

To run your production (dist) build run:

```sh
$ npm run serve:dist
```
This will set your env variable to `dist`

To build a production ready bundle run:

```sh
$ npm run dist
```

## Alternative
You can also use your globaly installed webpack version like this:

```
# Build or run the dev version:
webpack
webpack --env=dev

webpack-dev-server
webpack-dev-server --env=dev

# Build or run the dist version
webpack --env=dist
webpack-dev-server --env=dist
```

## Testing

WORK IN PROGRESS

## Project Structure

```
|-- react-redux-boilerplate
    |-- server.js
    |-- webpack.config.js
    |-- dist
    |   |-- index.html
    |   |-- assets
    |       |-- <- Your JS + Images + CSS gets written here ->
    |-- src
    |   |-- index.html
    |   |-- index.js
    |   |-- actions
    |   |   |-- <- Your Redux actions ->
    |   |-- components
    |   |   |-- <- Your React Components ->
    |   |-- util
    |   |   |-- routes.js <- Main router config file ->
    |   |   |-- <- Any other util files you might need can go here ->
    |   |-- containers
    |   |   |-- <- Your React Container ->
    |   |-- images
    |   |   |-- <- Your Images ->
    |   |-- reducers
    |   |   |-- <- Your React-Redux Reducers ->
    |   |-- styles
    |       |-- <- Your Components SCSS ->
    |-- webpackConfigs
        |-- <- Webpack config builder files (magic) ->
```

### Notes:

Webpack has a nice `resolve` property that allows you to make aliases. This allows you
to require your components like this `import awesomeComponent from 'components/awesomeComponent'` instead of `import awesomeComponent from '../../components/awesomeComponent'`. Since the path is resolved in the `webpackConfigs/base.js` file. I use this feature in this boilerplate. feel free to modify it or not use it.
