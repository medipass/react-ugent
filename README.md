# React Ugent

> A headless React Component to conditionally render based on browser, device and OS. Built with [ua-parser-js](https://github.com/faisalman/ua-parser-js#methods).

## Table of Contents

- [React Ugent](#react-ugent)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [`<Ugent>` Props](#ugent-props)
    - [browser](#browser)
    - [device](#device)
    - [os](#os)
    - [`children` Render Props](#children-render-props)
      - [parsedUserAgent](#parseduseragent)
      - [userAgent](#useragent)
  - [Special Thanks](#special-thanks)
  - [License](#license)

## Installation

```
npm install react-ugent --save
```

or install with [Yarn](https://yarnpkg.com) if you prefer:

```
yarn add react-ugent
```

## Usage

```js
import React from 'react';
import Ugent from 'react-ugent';

export default () => (
  <div>
    <Ugent browser="chrome">
      <div>
        This text only shows on Chrome
      </div>
    </Ugent>
    <Ugent browser="chrome">
      {({ userAgent }) => 
        <div>
          This text only shows on Chrome. User agent: {userAgent}
        </div> 
      }
    </Ugent>
    <Ugent browser="chrome" device="mobile">
      <div>
        This text only shows on Chrome on mobile devices
      </div>
    </Ugent>
    <Ugent browser="safari" os="ios">
      <div>
        This text only shows on Safari on iOS.
      </div>
    </Ugent>
    <Ugent browser="ie" os="windows">
      <div>
        This text only shows on IE on Windows.
      </div>
    </Ugent>
  </div>
);
```

## `<Ugent>` Props

### browser

> `string` | Optional

Render the child for a given browser.

Available browsers are:

```
chrome, chromium, edge, firefox, ie, lynx, safari, opera
```
View all the available browser values [here](https://github.com/faisalman/ua-parser-js#methods)

### device

> `string` | Optional

Render the child for a given device.

Available devices are:

```
console, computer, mobile, tablet, smarttv, wearable, embedded
```

### os

> `string` | Optional

Render the child for a given OS.

Available OS are:

```
android, blackberry, chromium os, debian, ios, linux, mac os, ubuntu, unix, windows
```
View all the available OS values [here](https://github.com/faisalman/ua-parser-js#methods)

### `children` Render Props

#### parsedUserAgent

> `Object({ browser: { name, version }, device: { model, type, vendor }, os: { name, version } })`

#### userAgent

> `string`

## Special Thanks

- [ua-parser-js](https://github.com/faisalman/ua-parser-js#methods)

## License

MIT © [Medipass Solutions Pty. Ltd.](https://github.com/medipass)
