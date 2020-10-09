//VideoList Component
//VideoList is a function that renders the current videos in our VideoList model;
//TODO maybe we use the map function to get a single video in to the div

//import data from exampleVideoData file
//videoList is going to take props object;
//import exampleVideoData from './data/exampleVideoData';

import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry video={video} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

