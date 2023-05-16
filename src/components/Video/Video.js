import "./video.scss";
import YouTube from "react-youtube";

export const Video = () => {
  const videoId = "vnbN9V_2Guk";

  return (
    <section className="video">
      <div className="container">
        <div className="video-wrap">
          <YouTube videoId={videoId} className="youtube-video" />
          <div className="video-circle"></div>
        </div>
      </div>
    </section>
  );
};
