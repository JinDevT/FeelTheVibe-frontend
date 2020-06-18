export const setNavList = (list) => {
    return {
        type: "NAV_ACTIVE",
        payload: list
    }
}

export const shuffle = () => {
  return {
    type: "SHUFFLE"
  };
};

export const setSongInfo = index => {
  return {
    type: "SONG",
    payload: index
  };
};

export const setPopup = () => {
  return {
    type: "POPUP"
  };
};

export const setRepeatIndex = () => {
  return {
    type: "REPEAT"
  };
};

export const setPlaying = () => {
  return {
    type: "PLAYING"
  };
};

export const setAddPlaylist = (playlist) => {
    return {
        type: "ADD_PLAYLIST",
        payload: playlist
    }
}

export const setSongList = (songList) => {
  return {
    type: "SONGLIST",
    payLoad: songList
  };
};

export const setSongIndex = (songIndex) =>{
  return {
    type: "SONGINDEX",
    payLoad: songIndex
  }
};
