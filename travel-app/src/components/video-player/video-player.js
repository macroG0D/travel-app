import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import { videoURL } from '../../data/CONSTANTS.js';
import '../../../node_modules/video-react/dist/video-react.css';
import './video-player.scss';

const VideoPlayer = (props) => {
  const { countryName } = props;
  const countryVideoUrl = `${videoURL}${countryName.toLowerCase()}.mp4`;
  return (
    <Player playsInline src={countryVideoUrl}>
      <BigPlayButton position="center" />
      <ControlBar autoHide autoHideTime={350} className="my-class" />
    </Player>
  );
};

export default VideoPlayer;
