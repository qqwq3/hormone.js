"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Range=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),Array.from({length:Math.ceil((e+1-t)/n)}).map(function(e,r){return r*n+t})};exports.default=Range;