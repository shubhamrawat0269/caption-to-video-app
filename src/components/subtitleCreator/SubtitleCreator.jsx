import { useState } from "react";
import WebVTT from "node-webvtt";
import DateTime from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

const SubtitleCreator = () => {
  const [subtitles, setSubtitles] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  return <div>SubtitleCreator</div>;
};

export default SubtitleCreator;
