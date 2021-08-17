const BAZINGA = 0xa3;

function decode(buffer) {
  for (let i = 0; i < buffer.length; ++i) {
    buffer[i] ^= BAZINGA;
  }
}

module.exports = decode;
