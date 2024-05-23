import moment from "moment";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [subtitles, setSubtitles] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

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

  const handleAddSubtitle = () => {};

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
  };
  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
