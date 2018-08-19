/* eslint-disable func-names,no-extend-native */
/**
 * BROWSER POLYFILLS
 */

/** IE10 require all of the following polyfills. React Dom library depends on it. * */
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise';
import 'core-js/es6/object';

/** Added to support react-form-with-constraints in IE10 */
import 'core-js/es6/array';
import 'core-js/es6/string';

// import 'url-search-params-polyfill';

/** Fetch API polyfill */
import 'whatwg-fetch';

/** Array includes polyfill */
(function () {
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value(elem) {
        return this.indexOf(elem) >= 0;
      },
    });
  }
}());
