'use strict'

// Vendored from buffer-xor@1.0.3 (MIT, Daniel Cousens —
// https://github.com/crypto-browserify/buffer-xor), unmaintained since 2017.
// Ten lines with one dependency, used by five files here; carrying it is
// cheaper than depending on it, and upstream still calls the deprecated
// `new Buffer(length)`, which allocates uninitialised memory in old Node and
// warns in every version since.

var Buffer = require('safe-buffer').Buffer

module.exports = function xor (a, b) {
  var length = Math.min(a.length, b.length)
  var buffer = Buffer.allocUnsafe(length)

  for (var i = 0; i < length; ++i) {
    buffer[i] = a[i] ^ b[i]
  }

  return buffer
}
