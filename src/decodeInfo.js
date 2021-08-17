const { song_detail } = require("NeteaseCloudMusicApi");

async function decodeInfo(filename) {
  const ids = filename.split("-");
  if (ids.length !== 3) return filename;
  try {
    const rsp = await song_detail({ ids: ids[0] });
    if (rsp.body.songs.length === 0) return filename;
    const song = rsp.body.songs[0];
    return song.name + "-" + song.ar.map((artist) => artist.name).join(",");
  } catch (err) {
    return filename;
  }
}

module.exports = decodeInfo;
