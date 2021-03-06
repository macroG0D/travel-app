import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import './video-player.scss';

const VideoPlayer = (props) => {
  const { countryURL } = props;
  return (
    <Player playsInline src={countryURL}>
      <BigPlayButton position="center" />
      <ControlBar autoHide autoHideTime={350} className="my-class" />
    </Player>
  );
};

export default VideoPlayer;
