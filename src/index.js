const fs = require("fs/promises");
const path = require("path");
const { song_detail } = require("NeteaseCloudMusicApi");

function decode(buffer) {
  const BAZINGA = 0xa3;
  for (let i = 0; i < buffer.length; ++i) {
    buffer[i] ^= BAZINGA;
  }
}

async function getMusicInfo() {
  console.log(song_detail);
}

async function decodeFile(target, output) {
  const BLOCK_SIZE = 256 * 1024;
  const targetPath = path.resolve(module.parent.path, target);
  const stat = await fs.stat(targetPath);
  const buffer = Buffer.alloc(stat.size);

  const reader = await fs.open(targetPath, "r");
  for (let offset = 0; offset < stat.size; offset += BLOCK_SIZE) {
    const length = offset + BLOCK_SIZE > stat.size ? stat.size - offset : BLOCK_SIZE;
    await reader.read(buffer, offset, length);
  }
  await reader.close();

  decode(buffer);

  if (output) {
    const outputPath = path.resolve(module.parent.path, output);
    const writer = await fs.open(outputPath, "w");
    await writer.write(buffer, 0, stat.size);
    await writer.close();
  }

  return buffer;
}

module.exports = {
  decode,
  decodeFile,
  getMusicInfo,
};
