"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var IsNumber_1=__importDefault(require("../type/IsNumber")),IsDate_1=__importDefault(require("../type/IsDate")),Format_1=__importDefault(require("./Format")),Addition=function(e,t,r){var a=new Date,u=IsNumber_1.default(r)?r:Number(r),a=IsDate_1.default(e)?e:new Date(e);switch(t){case"Y":return a.setFullYear(a.getFullYear()+u),Format_1.default(a);case"Q":return a.setMonth(a.getMonth()+3*u),Format_1.default(a);case"M":return a.setMonth(a.getMonth()+u),Format_1.default(a);case"W":return a.setDate(a.getDate()+7*u),Format_1.default(a);case"D":return a.setDate(a.getDate()+u),Format_1.default(a);case"h":return a.setHours(a.getHours()+u),Format_1.default(a,"YYYY-MM-DD hh:mm:ss");case"m":return a.setMinutes(a.getMinutes()+u),Format_1.default(a,"YYYY-MM-DD hh:mm:ss");case"s":return a.setSeconds(a.getSeconds()+u),Format_1.default(a,"YYYY-MM-DD hh:mm:ss")}};exports.default=Addition;