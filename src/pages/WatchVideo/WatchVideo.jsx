import React from "react";
import ShortContainer from "../../components/shared/ShortContainer";

const WatchVideo = () => {
  return (
    <ShortContainer className="mt-28 mb-10 w-full min-h-[500px] flex justify-center items-center">
      <iframe
        width="100%"
        height="368"
        src="https://www.youtube.com/embed/GgkzYVzCqYc?si=fSCk44TlYSWFebMw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </ShortContainer>
  );
};

export default WatchVideo;
