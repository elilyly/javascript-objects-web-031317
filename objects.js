var playlist = { artistName: " ",
                 songTitle: " "
               };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "Beck";
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  playlist;
}
