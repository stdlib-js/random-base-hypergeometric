<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Hypergeometric Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Hypergeometric][hypergeometric] distributed pseudorandom numbers.



<section class="usage">

## Usage

To use in Observable,

```javascript
hypergeometric = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-hypergeometric@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var hypergeometric = require( 'path/to/vendor/umd/random-base-hypergeometric/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-hypergeometric@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.hypergeometric;
})();
</script>
```

#### hypergeometric( N, K, n )

Returns a pseudorandom number drawn from a [hypergeometric][hypergeometric] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var r = hypergeometric( 20, 10, 7 );
// returns <number>
```

`N`, `K`, and `n` must all be nonnegative integers; otherwise, the function returns `NaN`. 

```javascript
var r = hypergeometric( 10.5, 10, 10 );
// returns NaN

r = hypergeometric( 10, 4.4, 2 );
// returns NaN

r = hypergeometric( 10, 5, -1 );
// returns NaN

r = hypergeometric( NaN, NaN, NaN );
// returns NaN
```

If `n > N` or `K > N`, the function returns `NaN`.

```javascript
var r = hypergeometric( 7, 5, 12 );
// returns NaN
```

#### hypergeometric.factory( \[N, K, n, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [hypergeometric][hypergeometric] distribution.

```javascript
var rand = hypergeometric.factory();

var r = rand( 20, 10, 15 );
// returns <number>
```

If provided `N`, `K`, and `n`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = hypergeometric.factory( 20, 10, 15 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `N`, `K`, and `n`, the returned generator requires that all three parameters be specified at each invocation.

```javascript
var rand = hypergeometric.factory();

var r = rand( 10, 7, 3 );
// returns <number>

r = rand( 104, 48, 21 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random-base-minstd' );

var rand = hypergeometric.factory({
    'prng': minstd.normalized
});

var r = rand( 10, 8, 5 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = hypergeometric.factory({
    'seed': 12345
});

var r1 = rand1( 10, 8, 5 );
// returns <number>

var rand2 = hypergeometric.factory( 10, 8, 5, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = hypergeometric( 10, 8, 5 );
}

// Create a new PRNG initialized to the current state of `hypergeometric`:
rand = hypergeometric.factory({
    'state': hypergeometric.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 10, 8, 5 ) === hypergeometric( 10, 8, 5 ) );
// returns true
```

#### hypergeometric.NAME

The generator name.

```javascript
var str = hypergeometric.NAME;
// returns 'hypergeometric'
```

#### hypergeometric.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = hypergeometric.PRNG;
// returns <Function>
```

#### hypergeometric.seed

The value used to seed `hypergeometric()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = hypergeometric( 20, 10, 15 );
}

// Generate the same pseudorandom values...
rand = hypergeometric.factory( 20, 10, 15, {
    'seed': hypergeometric.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### hypergeometric.seedLength

Length of generator seed.

```javascript
var len = hypergeometric.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### hypergeometric.state

Writable property for getting and setting the generator state.

```javascript
var r = hypergeometric( 10, 8, 5 );
// returns <number>

r = hypergeometric( 10, 8, 5 );
// returns <number>

// ...

// Get a copy of the current state:
var state = hypergeometric.state;
// returns <Uint32Array>

r = hypergeometric( 10, 8, 5 );
// returns <number>

r = hypergeometric( 10, 8, 5 );
// returns <number>

// Reset the state:
hypergeometric.state = state;

// Replay the last two pseudorandom numbers:
r = hypergeometric( 10, 8, 5 );
// returns <number>

r = hypergeometric( 10, 8, 5 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### hypergeometric.stateLength

Length of generator state.

```javascript
var len = hypergeometric.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### hypergeometric.byteLength

Size (in bytes) of generator state.

```javascript
var sz = hypergeometric.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### hypergeometric.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = hypergeometric.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-hypergeometric@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( hypergeometric( 10, 10, 10 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = hypergeometric.factory( 5, 3, 2, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = hypergeometric.factory( 10, 10, 10, {
    'seed': hypergeometric.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Kachitvichyanukul, Voratas., and Burce Schmeiser. 1985. "Computer generation of hypergeometric random variates." _Journal of Statistical Computation and Simulation_ 22 (2): 127–45. doi:[10.1080/00949658508810839][@kachitvichyanukul:1985].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-array/hypergeometric`][@stdlib/random/array/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="package-name">[`@stdlib/random-iter/hypergeometric`][@stdlib/random/iter/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="package-name">[`@stdlib/random-streams/hypergeometric`][@stdlib/random/streams/hypergeometric]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-hypergeometric.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-hypergeometric

[test-image]: https://github.com/stdlib-js/random-base-hypergeometric/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-hypergeometric/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-hypergeometric/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-hypergeometric?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-hypergeometric.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-hypergeometric/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-hypergeometric/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-hypergeometric/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-hypergeometric/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-hypergeometric/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-hypergeometric/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-hypergeometric/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-hypergeometric/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-hypergeometric/main/LICENSE

[hypergeometric]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[@kachitvichyanukul:1985]: http://dx.doi.org/10.1080/00949658508810839

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/umd

<!-- <related-links> -->

[@stdlib/random/array/hypergeometric]: https://github.com/stdlib-js/random-array-hypergeometric/tree/umd

[@stdlib/random/iter/hypergeometric]: https://github.com/stdlib-js/random-iter-hypergeometric/tree/umd

[@stdlib/random/streams/hypergeometric]: https://github.com/stdlib-js/random-streams-hypergeometric/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
