import moment from "moment";
import WebVTT from "node-webvtt";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [subtitles, setSubtitles] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  const convertToSeconds = (timeStamp) => {
    const timeSection = timeStamp.split(":");
    const hours = parseInt(timeSection[0], 10);
    const minutes = parseInt(timeSection[1], 10);
    const sec = parseInt(timeSection[2], 10);

    return hours * 3600 + minutes * 60 + sec;
  };

  const handleStartTimeChange = (selectedTime) => {
    // console.log(selectedTime);
    const formatedTime = moment(selectedTime).format("HH:mm:ss");
    // console.log(formatedTime);
    setStartTime(formatedTime);
  };
  const handleEndTimeChange = (selectedTime) => {
    const formatedTime = moment(selectedTime).format("HH:mm:ss");
    setEndTime(formatedTime);
  };

  const handleSubtitleTextChange = (e) => {
    setSubtitleText(e.target.value);
  };

  const handleAddSubtitle = () => {
    const newSubtitle = {
      startTime: convertToSeconds(startTime),
      endTime: convertToSeconds(endTime),
      text: subtitleText,
    };

    // console.log(newSubtitle);

    setSubtitles([...subtitles, newSubtitle]);
    setStartTime(endTime);
    setEndTime("");
  };

  const convertSecondsToTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const min = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;

    const formattedTime = `${String(hrs).padStart(2, "0")}:${String(
      min
    ).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

    return formattedTime;
  };

  const handleGenerateSubtitleFile = () => {
    // download a subtitle function

    let parsedSubtitle = {
      cues: [],
      valid: true,
    };

    subtitles.forEach((subtitle, id) => {
      const cue = {
        identifier: (id + 1).toString(),
        start: subtitle.startTime,
        end: subtitle.endTime,
        text: subtitle.text,
        styles: "",
      };

      parsedSubtitle["cues"].push(cue);
    });

    const modifiedSubtitleContent = WebVTT.compile(parsedSubtitle);
    const modifiedSubtitleBlob = new Blob([modifiedSubtitleContent], {
      type: "text/vtt",
    });

    const downloadLink = URL.createObjectURL(modifiedSubtitleBlob);
    let a = document.createElement("a");
    a.href = downloadLink;
    a.download = "subtitle.vtt";
    a.click();
  };

  const contexts = {
    subtitles,
    setSubtitles,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    subtitleText,
    handleAddSubtitle,
    setSubtitleText,
    handleStartTimeChange,
    handleEndTimeChange,
    handleSubtitleTextChange,
    convertSecondsToTime,
    handleGenerateSubtitleFile,
  };
  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
