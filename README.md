<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# nanmskmidrange

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [mid-range][mid-range] of an array according to a mask, ignoring `NaN` values.

<section class="intro">

The [**mid-range**][mid-range] is defined as the arithmetic mean of the maximum and minimum values in a data set. The measure is the midpoint of the range and a measure of central tendency.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import nanmskmidrange from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-array-nanmskmidrange@esm/index.mjs';
```

#### nanmskmidrange( x, mask )

Computes the [mid-range][mid-range] of an array according to a mask, ignoring `NaN` values.

```javascript
var x = [ 1.0, -2.0, 4.0, 2.0, NaN, NaN ];
var mask = [ 0, 0, 1, 0, 0, 0 ];

var v = nanmskmidrange( x, mask );
// returns 0.0
```

The function has the following parameters:

-   **x**: input array.
-   **mask**: mask array. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty array, the function returns `NaN`.
-   The function supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import nanmskmidrange from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-array-nanmskmidrange@esm/index.mjs';

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var mask = filledarrayBy( x.length, 'uint8', bernoulli.factory( 0.2 ) );
console.log( mask );

var v = nanmskmidrange( x, mask );
console.log( v );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-array-nanmskmidrange.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-array-nanmskmidrange

[test-image]: https://github.com/stdlib-js/stats-array-nanmskmidrange/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-array-nanmskmidrange/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-array-nanmskmidrange/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-array-nanmskmidrange?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-array-nanmskmidrange.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-array-nanmskmidrange/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-array-nanmskmidrange/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-array-nanmskmidrange/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-array-nanmskmidrange/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-array-nanmskmidrange/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-array-nanmskmidrange/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-array-nanmskmidrange/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-array-nanmskmidrange/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-array-nanmskmidrange/main/LICENSE

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/esm

[mid-range]: https://en.wikipedia.org/wiki/Mid-range

</section>

<!-- /.links -->
