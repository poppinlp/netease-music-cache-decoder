# netease-music-cache-decoder

[![Build Status][ci-img]][ci-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

把网易云音乐本地缓存的文件解码为原始的 mp3 文件。支持[网页端直接使用](https://poppinlp.com/netease-music-cache-decoder/)。

欢迎 STAR，欢迎 PR >.<

## Install

```shell
npm i netease-music-cache-decoder
```

## Methods

### `decode(buffer)`

Inplace decode the input buffer.

#### Arguments

- buffer `{Buffer}`: The buffer to be decoded.

#### Return

Will only return `undefined` since it's inplace decode.

### `decodeInfo(filename)`

Get the meaningful name from cache file name. It will be something like "songName-artistName".

#### Arguments

- filename `{String}`: Cache file name.

#### Return

Will return the meaningful name. Or the original filename if there's an error occurred.

### `decodeFile(target, opts)`

Decode the target file.

#### Arguments

- target `{String}`: The target file path.
- opts:
  - output `{String}`: The output path. Default is `undefined` which means no output file.
  - decodeInfo `{Boolean}`: Whether to use the song info to form the output file name. Default is `false`.

#### Return

Will return the decoded buffer.

## TODO

- Add test case.

[ci-img]: https://img.shields.io/travis/poppinlp/netease-music-cache-decoder.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/netease-music-cache-decoder
[dep-img]: https://img.shields.io/david/poppinlp/netease-music-cache-decoder.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/netease-music-cache-decoder
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/netease-music-cache-decoder.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/netease-music-cache-decoder#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/netease-music-cache-decoder.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/netease-music-cache-decoder.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/netease-music-cache-decoder.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/netease-music-cache-decoder
