"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalize = exports.decamelize = exports.camelize = exports.words = exports.mask = void 0;
var Mask_1 = require("./Mask");
Object.defineProperty(exports, "mask", { enumerable: true, get: function () { return __importDefault(Mask_1).default; } });
var Words_1 = require("./Words");
Object.defineProperty(exports, "words", { enumerable: true, get: function () { return __importDefault(Words_1).default; } });
var Camelize_1 = require("./Camelize");
Object.defineProperty(exports, "camelize", { enumerable: true, get: function () { return __importDefault(Camelize_1).default; } });
var Decamelize_1 = require("./Decamelize");
Object.defineProperty(exports, "decamelize", { enumerable: true, get: function () { return __importDefault(Decamelize_1).default; } });
var Pascalize_1 = require("./Pascalize");
Object.defineProperty(exports, "pascalize", { enumerable: true, get: function () { return __importDefault(Pascalize_1).default; } });
