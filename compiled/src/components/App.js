//The App function returns an html which renders to the job;
//the container for our application
//TODO push React components to App;'
import exampleVideoData from "../data/exampleVideoData.js";
import VideoList from "./VideoList.js";
var App = () => React.createElement(
  "div",
  null,
  React.createElement(
    "nav",
    { className: "navbar" },
    React.createElement(
      "div",
      { className: "col-md-6 offset-md-3" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h5",
          null,
          " ",
          React.createElement(
            "em",
            null,
            "search"
          ),
          "view goes here"
        )
      )
    )
  ),
  React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "col-md-7" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h5",
          null,
          React.createElement(
            "em",
            null,
            "videoPlayer"
          ),
          " view goes here"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col-md-5" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h5",
          null,
          React.createElement(
            "em",
            null,
            "videoList"
          ),
          " view goes here"
        )
      )
    )
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIkFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxJQUFJQyxNQUFNLE1BQ1I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFMO0FBQUE7QUFBQTtBQURGO0FBREY7QUFERixHQURGO0FBUUU7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFKO0FBQUE7QUFBQTtBQURGO0FBREYsS0FERjtBQU1FO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSjtBQUFBO0FBQUE7QUFERjtBQURGO0FBTkY7QUFSRixDQURGOztBQXlCQTtBQUNBO0FBQ0EsZUFBZUEsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoZSBBcHAgZnVuY3Rpb24gcmV0dXJucyBhbiBodG1sIHdoaWNoIHJlbmRlcnMgdG8gdGhlIGpvYjtcbi8vdGhlIGNvbnRhaW5lciBmb3Igb3VyIGFwcGxpY2F0aW9uXG4vL1RPRE8gcHVzaCBSZWFjdCBjb21wb25lbnRzIHRvIEFwcDsnXG5pbXBvcnQgZXhhbXBsZVZpZGVvRGF0YSBmcm9tIFwiLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzXCJcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSBcIi4vVmlkZW9MaXN0LmpzXCJcbnZhciBBcHAgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDU+IDxlbT5zZWFyY2g8L2VtPnZpZXcgZ29lcyBoZXJlPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNT48ZW0+dmlkZW9QbGF5ZXI8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg1PjxlbT52aWRlb0xpc3Q8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19