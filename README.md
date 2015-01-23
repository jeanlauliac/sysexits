# sysexits

Provide `sysexits(3)` exit codes in Node.js.

## Why?

It avoids having arbitrary exit codes and get them consistent with UNIX tools.
For instance, an invalid CLI usage should return 64.

## Install

    npm install sysexits

## Example

```js
var Exit = require('sysexits');

if (process.args.length < 3) {
    console.log 'error:', Exit.desc[Exit.USAGE]
    process.exit(Exit.USAGE);
}

/* etc. */
```

See `sysexits.js` for the complete list of codes.

