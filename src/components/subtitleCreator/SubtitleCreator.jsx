import DateTime from "react-datetime";

import "react-datetime/css/react-datetime.css";

import { useGlobalContext } from "../../hooks/useGlobalContext";

const SubtitleCreator = () => {
  const {
    subtitles,
    startTime,
    endTime,
    subtitleText,
    handleAddSubtitle,
    handleEndTimeChange,
    handleStartTimeChange,
    handleSubtitleTextChange,
    convertSecondsToTime,
    handleGenerateSubtitleFile,
  } = useGlobalContext();

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      <div className="bg-white p-5 rounded-md">
        <h1 className="text-center text-4xl my-4">Subtitle Generator</h1>
        <div>
          <div>
            <label htmlFor="starttime">Start Time</label>
            <DateTime
              id="starttime"
              className="border rounded-md p-2 w-full"
              dateFormat={false}
              timeFormat="HH:mm:ss"
              value={startTime}
              onChange={handleStartTimeChange}
            />
          </div>
          <div>
            <label htmlFor="endtime">End Time</label>
            <DateTime
              id="endtime"
              className="border rounded-md p-2"
              dateFormat={false}
              timeFormat="HH:mm:ss"
              value={endTime}
              onChange={handleEndTimeChange}
            />
          </div>
          <div>
            <label className="font-bold">Subtitles</label>
            <textarea
              className="border rounded p-2 w-full"
              rows={4}
              cols={30}
              placeholder="Subtitle Text"
              value={subtitleText}
              onChange={handleSubtitleTextChange}
            />
          </div>
          <div className="bg-neutral-200 p-3 text-center rounded-xl cursor-pointer my-2">
            <button onClick={handleAddSubtitle}>Add Subtitle</button>
          </div>
        </div>
        {subtitles.length > 0 && (
          <div>
            <h2 className="font-semibold">Subtitles:</h2>
            {subtitles.map((subtitle, id) => {
              return (
                <div key={id}>
                  <div>
                    <p>
                      [{convertSecondsToTime(subtitle.startTime)} -{" "}
                      {convertSecondsToTime(subtitle.endTime)}]: {subtitle.text}
                    </p>
                  </div>
                  <div className="flex justify-center items-center py-3">
                    <button
                      className="bg-neutral-400 font-bold p-2 rounded-md"
                      onClick={handleGenerateSubtitleFile}
                    >
                      Download Subtitle File
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubtitleCreator;
