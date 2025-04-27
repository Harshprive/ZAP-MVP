import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import BookingConfirmation  from "../Bookings/ConfirmBooking/ConfirmBooking";

const Popup = () => {
  const [mediaType, setMediaType] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("idle");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const fileInputRef = useRef();

  const handleMediaTypeChange = (type) => {
    setMediaType(type);
    setMediaFiles([]);
    fileInputRef.current.value = "";
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(
      (file) => file.type.split("/")[0] === mediaType
    );

    if (validFiles.length !== files.length) {
      alert(`Some files do not match the selected media type (${mediaType}).`);
    }

    setMediaFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleSubmit = () => {
    if (inputText && mediaFiles.length > 0) {
      setStatus("processing");

      setTimeout(() => {
        setStatus("idle");
        setShowConfirmation(true);
      }, 2000);
    } else {
      alert("Please fill out all fields and upload files.");
    }
  };

  const handleBoxClick = () => {
    if (!mediaType) {
      alert("Please select a media type before uploading.");
      return;
    }
    fileInputRef.current.click();
  };

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="rounded-2xl shadow-xl w-full max-w-lg sm:max-w-[80%] p-6 sm:p-8 text-center">
          <BookingConfirmation />
        </div>
      </div>
    );
  }

  if (status === "processing") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-[80%] p-6 sm:p-8 text-center">
          <CircularProgress />
          <h2 className="mt-4 text-lg sm:text-xl font-medium text-gray-700">
            Processing your request...
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Please wait while we process your submission.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-[80%] p-6 sm:p-8 relative animate-fade-in">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
          Upload Media
        </h2>
        <input
          type="text"
          placeholder="Enter your description here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none mb-4 sm:mb-5 text-gray-700 transition-shadow text-sm sm:text-base"
        />

        <div className="mb-4 sm:mb-6">
          <h3 className="text-sm sm:text-lg font-medium text-gray-700 mb-2 sm:mb-3">
            Select Media Type
          </h3>
          <div className="flex justify-between gap-2 sm:gap-4">
            {["image", "video", "audio"].map((type) => (
              <button
                key={type}
                onClick={() => handleMediaTypeChange(type)}
                className={`flex-1 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  mediaType === type
                    ? "bg-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <Box
          className="border-dashed border-2 border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-purple-400 transition-all cursor-pointer"
          onClick={handleBoxClick}
        >
          <img
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt="Upload"
            className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-90"
          />
          <p className="text-gray-500 text-sm sm:text-base">
            {mediaType
              ? `Click to upload ${mediaType}s`
              : "Select a media type first"}
          </p>
        </Box>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          accept={mediaType ? `${mediaType}/*` : ""}
          multiple
        />

        {mediaFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm sm:text-lg font-medium text-gray-700 mb-2">
              Uploaded Files
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {mediaFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-gradient-to-r from-purple-400 to-purple-500 text-white py-3 rounded-lg font-medium hover:from-purple-500 hover:to-purple-600 shadow-md transition-transform transform"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Popup;
