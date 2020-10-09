//The App function returns an html which renders to the job;
//the container for our application
//TODO push React components to App;
//======CONTAINER====== functional state
// import VideoList from './VideoList.jsx';
// import ExampleVideoData from './src/data/exampleVideoData.js';
//we think app should take a props as well.
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js'; //SICK! // <--- works no errors so now we have the data i guess

var App = () => (
  <div>
    <nav className="navbar"> {/*navigation bar*/}
      <div className="col-md-6 offset-md-3"> {/*div container within nav bar*/}
        <div>
          <h5> <em>Search Bar</em><Search></Search></h5> {/*reder search bar view TODO*/}
        </div> {/* em = emphasized; italics */}
      </div>
    </nav>
    <div className="row"> {/*column for main videos*/}
      <div className="col-md-7">
        <div>
          <h5> <VideoPlayer video={exampleVideoData[0]}/> </h5> {/*TODO: thinking this is where we append video*/}
        </div>
      </div>
      <div className="col-md-5"> {/* append a list of videos */}
        <div>
          <h5> <VideoListEntry video = {exampleVideoData[0]}/> </h5>
        </div>
      </div>
    </div>
  </div>

);
  // notes from Maia lecture
{ /*parent of all components; put everything in app; put state in app */ }
{ /*this.setState()? trigger for event handler; if not used our event handler's won't update */ }
{ /* */ }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
