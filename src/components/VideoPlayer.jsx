//VideoPlayer component;
//creates html that will append Video src to App;
import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
import VideoList from './VideoList.js';

var VideoPlayer = (props) => (

  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9"> {/*formats the div w 16:9 aspect ratio*/}
      {/* + {props.video.id.videoId}*/}
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen></iframe>
      {/* iFrame is a nested browsing context, which embeds another HTML page into the current one*/}
    </div>
    <div className="video-player-details"> {/*Description of the video */}
      <h3>{props.video.snippet.title}</h3> {/*prop.object.title? */}
      <div>{props.video.snippet.description}</div> {/*prop.object.description? */}
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
