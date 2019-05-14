# aria-attributes

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of attributes defined by [ARIA][spec].

## Installation

[npm][]:

```bash
npm install aria-attributes
```

## Usage

```javascript
var ariaAttributes = require('aria-attributes')

console.log(ariaAttributes)
```

Yields:

```js
[ 'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-busy',
  'aria-checked',
  // ...
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
  'role' ]
```

## API

### `ariaAttributes`

`Array.<string>` — List of lower-case dash-cased attributes (including
`role`).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/aria-attributes.svg

[build]: https://travis-ci.org/wooorm/aria-attributes

[downloads-badge]: https://img.shields.io/npm/dm/aria-attributes.svg

[downloads]: https://www.npmjs.com/package/aria-attributes

[size-badge]: https://img.shields.io/bundlephobia/minzip/aria-attributes.svg

[size]: https://bundlephobia.com/result?p=aria-attributes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://www.w3.org/TR/wai-aria/
