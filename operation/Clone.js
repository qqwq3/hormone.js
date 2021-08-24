"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var IsString_1=__importDefault(require("../type/IsString")),IsBoolean_1=__importDefault(require("../type/IsBoolean")),IsDate_1=__importDefault(require("../type/IsDate")),IsNumber_1=__importDefault(require("../type/IsNumber")),IsSymbol_1=__importDefault(require("../type/IsSymbol")),IsFunction_1=__importDefault(require("../type/IsFunction")),IsArray_1=__importDefault(require("../type/IsArray")),IsObject_1=__importDefault(require("../type/IsObject")),CheckEmpty_1=__importDefault(require("../type/CheckEmpty")),Clone=function(e){if(CheckEmpty_1.default(e=void 0===e?null:e))return e;if(IsString_1.default(e))return e.slice();if(IsNumber_1.default(e)||IsBoolean_1.default(e)||IsDate_1.default(e)||IsSymbol_1.default(e)||IsFunction_1.default(e))return e;if(IsArray_1.default(e)||IsObject_1.default(e)){var t,r=IsArray_1.default(e)?[]:{};for(t in e)e.hasOwnProperty(t)&&(e[t]&&"object"==typeof e[t]?(r[t]=IsArray_1.default(e)?[]:{},r[t]=Clone(e[t])):r[t]=e[t]);return r}return e};exports.default=Clone;