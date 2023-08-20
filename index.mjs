// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@esm/index.mjs";function g(e,t,n){return h(e)?h(t)?h(n)?n>e?new RangeError(f("0oR7D,Ns",n)):t>e?new RangeError(f("0oR7E,Nt",t)):null:new TypeError(f("0oR2m,L9",n)):new TypeError(f("0oR3X,F1",t)):new TypeError(f("0oR2d,MG",e))}function u(e,t,n,r){var s,i,o;for(r<n?(s=j(n)*j(t+n-r)/(j(t+n)*j(n-r)),o=0):(s=j(t)*j(r)/(j(r-n)*j(t+n)),o=r-n),i=e();i>s;)i-=s,s*=(t-o)*(r-o)/((o+1)*(n-r+1+o)),o+=1;return o}function c(e,t,n,r){var s;return r>t/2?(s=t-r,2*n<=t?n-u(e,n,t-n,s):r-t+n+u(e,t-n,n,s)):(s=r,2*n<=t?u(e,n,t-n,s):r-u(e,t-n,n,s))}function b(){var h,j,u,b,v,y,w;if(0===arguments.length)j=m();else if(1===arguments.length){if(!r(h=arguments[0]))throw new TypeError(f("0oR2V,FD",h));if(i(h,"prng")){if(!s(h.prng))throw new TypeError(f("0oR6u,JI","prng",h.prng));j=h.prng}else j=m(h)}else{if(b=g(v=arguments[0],y=arguments[1],w=arguments[2]))throw b;if(arguments.length>3){if(!r(h=arguments[3]))throw new TypeError(f("0oR2V,FD",h));if(i(h,"prng")){if(!s(h.prng))throw new TypeError(f("0oR6u,JI","prng",h.prng));j=h.prng}else j=m(h)}else j=m()}return e(u=void 0===v?D:J,"NAME","hypergeometric"),h&&h.prng?(e(u,"seed",null),e(u,"seedLength",null),n(u,"state",o(null),d),e(u,"stateLength",null),e(u,"byteLength",null),e(u,"toJSON",o(null)),e(u,"PRNG",j)):(t(u,"seed",x),t(u,"seedLength",R),n(u,"state",L,T),t(u,"stateLength",E),t(u,"byteLength",N),e(u,"toJSON",G),e(u,"PRNG",j),j=j.normalized),u;function x(){return j.seed}function R(){return j.seedLength}function E(){return j.stateLength}function N(){return j.byteLength}function L(){return j.state}function T(e){j.state=e}function G(){var e={type:"PRNG"};return e.name=u.NAME,e.state=a(j.state),e.params=void 0===v?[]:[v,y,w],e}function J(){return c(j,v,y,w)}function D(e,t,n){return e===p||t===p||!l(e)||!l(t)||!l(n)||n>e?NaN:c(j,e,t,n)}}var v=b();e(v,"factory",b);export{v as default,b as factory};
//# sourceMappingURL=index.mjs.map
