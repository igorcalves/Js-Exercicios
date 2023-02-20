"use strict";

var numero = 1;
{
  var _numero = 2;
  console.log('dentro = ', _numero);
}
console.log('fora', numero);