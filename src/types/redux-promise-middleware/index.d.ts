// Type definitions for redux-promise-middleware
// Project: https://github.com/pburtchaell/redux-promise-middleware
// Definitions by: ianks <https://github.com/ianks>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types='redux' />
declare module "redux-promise-middleware" {
    import { Middleware } from 'redux';
    function promiseMiddleware(config?: { promiseTypeSuffixes: string[] }): Middleware;

    export default promiseMiddleware;
}
