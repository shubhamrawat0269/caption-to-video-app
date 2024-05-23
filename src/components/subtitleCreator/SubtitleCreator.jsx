import { useState } from "react";
import WebVTT from "node-webvtt";
import DateTime from "react-datetime";
import moment from "moment";

import "react-datetime/css/react-datetime.css";

import { useGlobalContext } from "../../hooks/useGlobalContext";

const SubtitleCreator = () => {
  const {
    subtitles,
    setSubtitles,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    subtitleText,
    setSubtitleText,
  } = useGlobalContext();

  return <div>SubtitleCreator</div>;
};

export default SubtitleCreator;
