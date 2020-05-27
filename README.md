# netease-music-cache-decoder

The decoder for netease music to decode cache file to mp3.

PR is welcomed. :)

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
- Add online version.
