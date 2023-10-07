// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@v0.1.0-esm/index.mjs";function f(e,t,n){return p(e)?p(t)?p(n)?n>e?new RangeError(g("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",n)):t>e?new RangeError(g("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",t)):null:new TypeError(g("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n)):new TypeError(g("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(g("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e))}function v(e,t,n,r){var s,i,o;for(r<n?(s=h(n)*h(t+n-r)/(h(t+n)*h(n-r)),o=0):(s=h(t)*h(r)/(h(r-n)*h(t+n)),o=r-n),i=e();i>s;)i-=s,s*=(t-o)*(r-o)/((o+1)*(n-r+1+o)),o+=1;return o}function j(e,t,n,r){var s;return r>t/2?(s=t-r,2*n<=t?n-v(e,n,t-n,s):r-t+n+v(e,t-n,n,s)):(s=r,2*n<=t?v(e,n,t-n,s):r-v(e,t-n,n,s))}function c(){var p,h,v,c,b,y,w;if(0===arguments.length)h=m();else if(1===arguments.length){if(!r(p=arguments[0]))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",p));if(i(p,"prng")){if(!s(p.prng))throw new TypeError(g("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",p.prng));h=p.prng}else h=m(p)}else{if(c=f(b=arguments[0],y=arguments[1],w=arguments[2]))throw c;if(arguments.length>3){if(!r(p=arguments[3]))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",p));if(i(p,"prng")){if(!s(p.prng))throw new TypeError(g("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",p.prng));h=p.prng}else h=m(p)}else h=m()}return e(v=void 0===b?S:R,"NAME","hypergeometric"),p&&p.prng?(e(v,"seed",null),e(v,"seedLength",null),n(v,"state",o(null),a),e(v,"stateLength",null),e(v,"byteLength",null),e(v,"toJSON",o(null)),e(v,"PRNG",h)):(t(v,"seed",x),t(v,"seedLength",E),n(v,"state",T,V),t(v,"stateLength",L),t(v,"byteLength",N),e(v,"toJSON",O),e(v,"PRNG",h),h=h.normalized),v;function x(){return h.seed}function E(){return h.seedLength}function L(){return h.stateLength}function N(){return h.byteLength}function T(){return h.state}function V(e){h.state=e}function O(){var e={type:"PRNG"};return e.name=v.NAME,e.state=u(h.state),e.params=void 0===b?[]:[b,y,w],e}function R(){return j(h,b,y,w)}function S(e,t,n){return e===l||t===l||!d(e)||!d(t)||!d(n)||n>e?NaN:j(h,e,t,n)}}var b=c();e(b,"factory",c);export{b as default,c as factory};
//# sourceMappingURL=index.mjs.map
