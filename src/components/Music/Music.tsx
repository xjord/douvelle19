import React from "react";
import InnerHTML from "dangerously-set-html-content";

import useStyles from "./Music.styles";

const Music = () => {
  const classes = useStyles();

  const spotifyPlaylist = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/866817386&color=%239a9a9a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/douvelle19" title="DOUVELLE19" target="_blank" style="color: #cccccc; text-decoration: none;">DOUVELLE19</a> · <a href="https://soundcloud.com/douvelle19/sets/edits-vol1" title="edits vol.1" target="_blank" style="color: #cccccc; text-decoration: none;">edits vol.1</a></div>`;

  return (
    <div className={classes.music}>
      <InnerHTML html={spotifyPlaylist} />
    </div>
  );
};

export default Music;
