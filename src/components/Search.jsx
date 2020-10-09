//Search component;
var Search = () => (
  <div className="search-bar form-inline"> {/* rectangle search bar */}
    <input className="form-control" type="text" /> {/* allows user to search*/}
    <button className="btn hidden-sm-down"> {/*changes screen size based on screen resolution */}
      <span className="glyphicon glyphicon-search"></span> {/* This is just the search icon  */}
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
