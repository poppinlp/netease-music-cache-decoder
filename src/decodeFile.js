const fs = require("fs/promises");
const path = require("path");

const decode = require("./decode");
const decodeInfo = require("./decodeInfo");

const BLOCK_SIZE = 256 * 1024;
const CACHE_EXT = ".uc";
const OUTPUT_EXT = ".mp3";

async function decodeFile(target, opts) {
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

  if (opts.output) {
    const originName = path.basename(targetPath, CACHE_EXT);
    const filename = opts.decodeInfo ? await decodeInfo(originName) : originName;
    const outputPath = path.resolve(module.parent.path, opts.output, filename + OUTPUT_EXT);
    const writer = await fs.open(outputPath, "w");
    await writer.write(buffer, 0, stat.size);
    await writer.close();
  }

  return buffer;
}

module.exports = decodeFile;
