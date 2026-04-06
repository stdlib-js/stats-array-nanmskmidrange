"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=v(function(w,l){
var i=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/array-dtypes/dist'),o=require('@stdlib/array-dtype/dist'),u=require('@stdlib/array-base-assert-contains/dist'),s=require('@stdlib/array-base-join/dist'),h=require('@stdlib/stats-strided-nanmskmidrange/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),n=m("real_and_generic"),g="generic";function y(r,e){var t;if(!i(r))throw new TypeError(a('null2O',r));if(t=o(r)||g,!u(n,t))throw new TypeError(a('nullHZ',s(n,'", "'),t));if(!i(e))throw new TypeError(a('null2y',e));if(t=o(e)||g,!u(n,t))throw new TypeError(a('nullHq',s(n,'", "'),t));if(r.length!==e.length)throw new RangeError(a('null1E'));return h(r.length,r,1,0,e,1,0)}l.exports=y
});var c=d();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
