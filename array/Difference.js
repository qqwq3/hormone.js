"use strict";var __spreadArray=this&&this.__spreadArray||function(r,e){for(var t=0,n=e.length,a=r.length;t<n;t++,a++)r[a]=e[t];return r};Object.defineProperty(exports,"__esModule",{value:!0});var Difference=function(r,e){var t=new Set(r),n=new Set(e);return __spreadArray(__spreadArray([],r.filter(function(r){return!n.has(r)})),e.filter(function(r){return!t.has(r)}))};exports.default=Difference;