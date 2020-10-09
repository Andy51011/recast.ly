//VideoListEntry Component;
//Renders the list of videos stored in model on the right side of DOM
//TODO It's going to be an object with title, text description, image: thumbvail;
//import examplieVideoData
// import exampleVideoData from '/src/data/exampleVideoData';

//VideoListEntry is componenet that with take a props as an argument;
//TODO have to use map function
//if you look in exampleVideoData, we have an array of object....and we want to extract an inidivudal video from that array...how would we do that??....either mapping it or iterating over it;
// import videoList
import VideoList from './VideoList.js'; // videos
//import exampleVideoData from '../data/exampleVideoData.js';
var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      {/* I feel like we need to link props to the image*/}
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt=""/>  {/*src={`img/${props.toy.image}.url`} */}
    </div>
    <div className="media-body">
      {/* I feel like we need to access Video title and description on props props.video.description*/}
      <div className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
