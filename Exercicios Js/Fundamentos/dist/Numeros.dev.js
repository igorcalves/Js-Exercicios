"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var peso1 = 1.0;
var peso2 = Number('2.0');
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
var avaliacao1 = 7.862;
var avaliacao2 = 8.37;
var total = avaliacao1 * peso1 + avaliacao2 * peso2;
var media = total / (peso1 + peso2);
console.log(media.toFixed(2));
console.log(media.toString(2));
console.log(_typeof(media));